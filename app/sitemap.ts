import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
import { projects } from "@/content/projects";

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date();
    const staticRoutes: MetadataRoute.Sitemap = [
        {
            url: `${siteUrl}/`,
            changeFrequency: "monthly",
            priority: 1,
            lastModified,
        },
        {
            url: `${siteUrl}/services`,
            changeFrequency: "monthly",
            priority: 0.95,
            lastModified,
        },
        {
            url: `${siteUrl}/services/website`,
            changeFrequency: "monthly",
            priority: 0.85,
            lastModified,
        },
        {
            url: `${siteUrl}/services/landing-pages`,
            changeFrequency: "monthly",
            priority: 0.85,
            lastModified,
        },
        {
            url: `${siteUrl}/services/growth-retainers`,
            changeFrequency: "monthly",
            priority: 0.85,
            lastModified,
        },
        {
            url: `${siteUrl}/work`,
            changeFrequency: "monthly",
            priority: 0.9,
            lastModified,
        },
        {
            url: `${siteUrl}/tools`,
            changeFrequency: "monthly",
            priority: 0.7,
            lastModified,
        },
        {
            url: `${siteUrl}/industries`,
            changeFrequency: "monthly",
            priority: 0.85,
            lastModified,
        },
        {
            url: `${siteUrl}/industries/real-estate-professionals`,
            changeFrequency: "monthly",
            priority: 0.9,
            lastModified,
        },
        {
            url: `${siteUrl}/industries/transaction-coordinators`,
            changeFrequency: "monthly",
            priority: 0.85,
            lastModified,
        },
        {
            url: `${siteUrl}/industries/real-estate-coaches`,
            changeFrequency: "monthly",
            priority: 0.82,
            lastModified,
        },
        {
            url: `${siteUrl}/tc-packages`,
            changeFrequency: "monthly",
            priority: 0.9,
            lastModified,
        },
        {
            url: `${siteUrl}/industries/trades`,
            changeFrequency: "monthly",
            priority: 0.75,
            lastModified,
        },
        {
            url: `${siteUrl}/industries/home-services`,
            changeFrequency: "monthly",
            priority: 0.8,
            lastModified,
        },
        {
            url: `${siteUrl}/industries/homeowners-associations`,
            changeFrequency: "monthly",
            priority: 0.72,
            lastModified,
        },
        {
            url: `${siteUrl}/about`,
            changeFrequency: "yearly",
            priority: 0.7,
            lastModified,
        },
        {
            url: `${siteUrl}/contact`,
            changeFrequency: "yearly",
            priority: 0.7,
            lastModified,
        },
        {
            url: `${siteUrl}/resources`,
            changeFrequency: "monthly",
            priority: 0.65,
            lastModified,
        },
        {
            url: `${siteUrl}/resources/tc-task-list`,
            changeFrequency: "yearly",
            priority: 0.7,
            lastModified,
        },
        {
            url: `${siteUrl}/resources/tc-cover-sheet`,
            changeFrequency: "yearly",
            priority: 0.7,
            lastModified,
        },
        {
            url: `${siteUrl}/resources/tc-intake-checklist`,
            changeFrequency: "yearly",
            priority: 0.7,
            lastModified,
        },
        {
            url: `${siteUrl}/resources/what-every-tc-website-needs`,
            changeFrequency: "yearly",
            priority: 0.7,
            lastModified,
        },
    ];

    const projectRoutes: MetadataRoute.Sitemap = projects
        .filter((project) => project.featured)
        .map((project) => ({
        url: `${siteUrl}/work/${project.slug}`,
        changeFrequency: "yearly",
        priority: 0.8,
        lastModified,
    }));

    return [...staticRoutes, ...projectRoutes];
}
