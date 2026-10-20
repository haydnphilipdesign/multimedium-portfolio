export const siteName = "Multimedium";
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.multimedium.dev";
export const siteEmail = "haydn@multimedium.dev";
export const siteOwnerName = "Haydn";
export const siteAddress = {
    locality: "Poconos",
    region: "PA",
    country: "US",
};
// Brief §2: remote and nationwide, based in the Poconos.
export const siteServiceAreas = ["United States", "Puerto Rico"];

export function absoluteUrl(path = "/") {
    const normalizedPath = path.startsWith("/") ? path : `/${path}`;
    return new URL(normalizedPath, siteUrl).toString();
}
