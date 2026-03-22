export const siteName = "Multimedium";
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.multimedium.dev";
export const siteEmail = "haydn@multimedium.dev";
export const sitePhone = "+1-570-994-6186";
export const sitePhoneDisplay = "(570) 994-6186";
export const siteOwnerName = "Haydn";
export const siteLocationLabel = "Poconos, PA";
export const siteAddress = {
    locality: "Poconos",
    region: "PA",
    country: "US",
};
export const siteServiceAreas = [
    "Poconos, PA",
    "Northeastern Pennsylvania",
    "Pennsylvania",
    "Remote across the United States",
];

export function absoluteUrl(path = "/") {
    const normalizedPath = path.startsWith("/") ? path : `/${path}`;
    return new URL(normalizedPath, siteUrl).toString();
}
