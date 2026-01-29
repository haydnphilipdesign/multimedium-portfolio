import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
import { projects } from "@/content/projects";

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();

    const staticRoutes: MetadataRoute.Sitemap = [
        {
            url: `${siteUrl}/`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: `${siteUrl}/services`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.95,
        },
        {
            url: `${siteUrl}/services/website`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.85,
        },
        {
            url: `${siteUrl}/services/landing-pages`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.85,
        },
        {
            url: `${siteUrl}/services/growth-retainers`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.85,
        },
        {
            url: `${siteUrl}/work`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${siteUrl}/industries/transaction-coordinators`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.85,
        },
        {
            url: `${siteUrl}/industries/trades`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.75,
        },
        {
            url: `${siteUrl}/industries/home-services`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${siteUrl}/about`,
            lastModified: now,
            changeFrequency: "yearly",
            priority: 0.7,
        },
        {
            url: `${siteUrl}/contact`,
            lastModified: now,
            changeFrequency: "yearly",
            priority: 0.7,
        },
        {
            url: `${siteUrl}/lp/real-estate`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.75,
        },
    ];

    const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
        url: `${siteUrl}/work/${project.slug}`,
        lastModified: now,
        changeFrequency: "yearly",
        priority: 0.8,
    }));

    return [...staticRoutes, ...projectRoutes];
}
