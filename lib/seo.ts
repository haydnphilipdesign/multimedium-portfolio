import type { Metadata } from "next";
import { absoluteUrl, siteName } from "@/lib/site";

type CreatePageMetadataInput = {
    title: string;
    description: string;
    path: string;
    keywords?: string[];
    ogImage?: string;
    robots?: Metadata["robots"];
};

function resolveImageUrl(ogImage: string) {
    return ogImage.startsWith("http") ? ogImage : absoluteUrl(ogImage);
}

export function createPageMetadata({
    title,
    description,
    path,
    keywords,
    ogImage = "/opengraph-image",
    robots,
}: CreatePageMetadataInput): Metadata {
    const imageUrl = resolveImageUrl(ogImage);

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
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [imageUrl],
        },
        robots,
    };
}
