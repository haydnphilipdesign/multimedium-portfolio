import type { Metadata } from "next";
import { absoluteUrl, siteName } from "@/lib/site";

type SocialImageInput =
    | string
    | {
        url: string;
        width?: number;
        height?: number;
        alt?: string;
    };

type CreatePageMetadataInput = {
    title: string;
    description: string;
    path: string;
    keywords?: string[];
    ogImage?: SocialImageInput;
    twitterImage?: SocialImageInput;
    robots?: Metadata["robots"];
};

function resolveImageUrl(imageUrl: string) {
    return imageUrl.startsWith("http") ? imageUrl : absoluteUrl(imageUrl);
}

function normalizeSocialImage(
    image: SocialImageInput,
    fallback: { width?: number; height?: number; alt?: string }
) {
    if (typeof image === "string") {
        return {
            url: resolveImageUrl(image),
            width: fallback.width,
            height: fallback.height,
            alt: fallback.alt,
        };
    }

    return {
        url: resolveImageUrl(image.url),
        width: image.width ?? fallback.width,
        height: image.height ?? fallback.height,
        alt: image.alt ?? fallback.alt,
    };
}

export function createPageMetadata({
    title,
    description,
    path,
    keywords,
    ogImage = "/opengraph-image",
    twitterImage = "/twitter-image",
    robots,
}: CreatePageMetadataInput): Metadata {
    const openGraphImage = normalizeSocialImage(ogImage, {
        width: 1200,
        height: 630,
        alt: title,
    });
    const twitterCardImage = normalizeSocialImage(twitterImage, {
        width: 1200,
        height: 600,
        alt: title,
    });

    return {
        title,
        description,
        keywords,
        alternates: {
            canonical: path,
        },
        openGraph: {
            title,
            description,
            url: absoluteUrl(path),
            siteName,
            locale: "en_US",
            type: "website",
            images: [openGraphImage],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [twitterCardImage],
        },
        robots,
    };
}
