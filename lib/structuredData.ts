import { siteUrl } from "@/lib/site";

function readSameAs(): string[] {
    const candidates = [
        process.env.NEXT_PUBLIC_LINKEDIN_URL,
        process.env.NEXT_PUBLIC_GITHUB_URL,
        process.env.NEXT_PUBLIC_FACEBOOK_URL,
    ];
    return candidates.filter((value): value is string => Boolean(value));
}

export function getSiteStructuredData() {
    const sameAs = readSameAs();

    const organization = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Multimedium",
        url: siteUrl,
        ...(sameAs.length ? { sameAs } : {}),
    };

    const person = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Haydn",
        url: siteUrl,
        worksFor: {
            "@type": "Organization",
            name: "Multimedium",
            url: siteUrl,
        },
        ...(sameAs.length ? { sameAs } : {}),
    };

    const website = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Multimedium",
        url: siteUrl,
    };

    return [organization, person, website];
}
