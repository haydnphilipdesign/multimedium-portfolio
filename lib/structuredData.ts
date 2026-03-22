import {
    absoluteUrl,
    siteAddress,
    siteEmail,
    siteLocationLabel,
    siteName,
    siteOwnerName,
    sitePhone,
    siteServiceAreas,
    siteUrl,
} from "@/lib/site";

type BreadcrumbItem = {
    name: string;
    path: string;
};

type FaqItem = {
    q: string;
    a: string;
};

type ServiceSchemaInput = {
    name: string;
    description: string;
    path: string;
    serviceType?: string;
    audience?: string[];
};

type CollectionPageSchemaInput = {
    name: string;
    description: string;
    path: string;
};

type CreativeWorkSchemaInput = {
    name: string;
    description: string;
    path: string;
    image?: string;
    type?: "CreativeWork" | "Article" | "CollectionPage";
    keywords?: string[];
    about?: string[];
};

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
    const organizationId = absoluteUrl("/#organization");
    const websiteId = absoluteUrl("/#website");
    const personId = absoluteUrl("/#founder");
    const localBusinessId = absoluteUrl("/#professional-service");

    const organization = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": organizationId,
        name: siteName,
        url: siteUrl,
        email: siteEmail,
        telephone: sitePhone,
        ...(sameAs.length ? { sameAs } : {}),
    };

    const person = {
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": personId,
        name: siteOwnerName,
        url: siteUrl,
        jobTitle: "Web Designer and Developer",
        worksFor: {
            "@id": organizationId,
        },
        ...(sameAs.length ? { sameAs } : {}),
    };

    const professionalService = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "@id": localBusinessId,
        name: siteName,
        url: siteUrl,
        email: siteEmail,
        telephone: sitePhone,
        image: absoluteUrl("/opengraph-image"),
        areaServed: siteServiceAreas.map((name) => ({
            "@type": "Place",
            name,
        })),
        address: {
            "@type": "PostalAddress",
            addressLocality: siteAddress.locality,
            addressRegion: siteAddress.region,
            addressCountry: siteAddress.country,
        },
        founder: {
            "@id": personId,
        },
        parentOrganization: {
            "@id": organizationId,
        },
        description:
            "Web design for real estate professionals, transaction coordinators, brokerages, coaches, and service businesses that need faster sites and better-qualified leads.",
        knowsAbout: [
            "Real estate web design",
            "Transaction coordinator website design",
            "Real estate marketing websites",
            "Website design for real estate coaches",
            "Local SEO foundations",
        ],
    };

    const website = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": websiteId,
        name: siteName,
        url: siteUrl,
        publisher: {
            "@id": organizationId,
        },
    };

    return [organization, person, professionalService, website];
}

export function getBreadcrumbStructuredData(items: BreadcrumbItem[]) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: absoluteUrl(item.path),
        })),
    };
}

export function getFaqStructuredData(items: FaqItem[]) {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: {
                "@type": "Answer",
                text: item.a,
            },
        })),
    };
}

export function getServiceStructuredData({
    name,
    description,
    path,
    serviceType,
    audience,
}: ServiceSchemaInput) {
    return {
        "@context": "https://schema.org",
        "@type": "Service",
        name,
        description,
        url: absoluteUrl(path),
        serviceType: serviceType ?? name,
        provider: {
            "@type": "ProfessionalService",
            name: siteName,
            url: siteUrl,
        },
        areaServed: siteServiceAreas.map((value) => ({
            "@type": "Place",
            name: value,
        })),
        availableChannel: {
            "@type": "ServiceChannel",
            serviceUrl: absoluteUrl(path),
            servicePhone: sitePhone,
            serviceLocation: {
                "@type": "Place",
                name: siteLocationLabel,
            },
        },
        ...(audience?.length
            ? {
                audience: audience.map((audienceType) => ({
                    "@type": "Audience",
                    audienceType,
                })),
            }
            : {}),
    };
}

export function getCollectionPageStructuredData({
    name,
    description,
    path,
}: CollectionPageSchemaInput) {
    return {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name,
        description,
        url: absoluteUrl(path),
        isPartOf: {
            "@type": "WebSite",
            name: siteName,
            url: siteUrl,
        },
        about: {
            "@type": "Thing",
            name,
        },
    };
}

export function getCreativeWorkStructuredData({
    name,
    description,
    path,
    image,
    type = "CreativeWork",
    keywords,
    about,
}: CreativeWorkSchemaInput) {
    return {
        "@context": "https://schema.org",
        "@type": type,
        name,
        description,
        url: absoluteUrl(path),
        ...(image ? { image: absoluteUrl(image) } : {}),
        ...(keywords?.length ? { keywords: keywords.join(", ") } : {}),
        ...(about?.length
            ? {
                about: about.map((item) => ({
                    "@type": "Thing",
                    name: item,
                })),
            }
            : {}),
        author: {
            "@type": "Person",
            name: siteOwnerName,
            url: siteUrl,
        },
        publisher: {
            "@type": "Organization",
            name: siteName,
            url: siteUrl,
        },
    };
}
