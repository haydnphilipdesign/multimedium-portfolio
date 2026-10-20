import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
import { getClientProjects } from "@/content/projects";

// Indexable pages only (brief §8). Unlisted pages (/mytcacademy, /review)
// and redirects stay out. No lastModified: a build timestamp on every URL
// tells search engines nothing.
const pages: [path: string, priority: number][] = [
  ["/", 1],
  ["/transaction-coordinators", 0.9],
  ["/agents-and-brokerages", 0.9],
  ["/pricing", 0.85],
  ["/work", 0.85],
  ["/about", 0.7],
  ["/contact", 0.7],
  ["/resources", 0.6],
  ["/resources/tc-task-list", 0.6],
  ["/resources/tc-cover-sheet", 0.6],
  ["/resources/tc-intake-checklist", 0.6],
  ["/resources/what-every-tc-website-needs", 0.6],
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...pages.map(([path, priority]) => ({ url: siteUrl + path, priority })),
    ...getClientProjects()
      .filter((p) => p.featured)
      .map((p) => ({ url: siteUrl + "/work/" + p.slug, priority: 0.75 })),
  ];
}
