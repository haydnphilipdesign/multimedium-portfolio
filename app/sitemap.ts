import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
import { projects } from "@/content/projects";

export default function sitemap(): MetadataRoute.Sitemap {
    const staticRoutes: MetadataRoute.Sitemap = [
        {
            url: `${siteUrl}/`,
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: `${siteUrl}/services`,
            changeFrequency: "monthly",
            priority: 0.95,
        },
        {
            url: `${siteUrl}/services/website`,
            changeFrequency: "monthly",
            priority: 0.85,
        },
        {
            url: `${siteUrl}/services/landing-pages`,
            changeFrequency: "monthly",
            priority: 0.85,
        },
        {
            url: `${siteUrl}/services/growth-retainers`,
            changeFrequency: "monthly",
            priority: 0.85,
        },
        {
            url: `${siteUrl}/work`,
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${siteUrl}/industries`,
            changeFrequency: "monthly",
            priority: 0.85,
        },
        {
            url: `${siteUrl}/industries/transaction-coordinators`,
            changeFrequency: "monthly",
            priority: 0.85,
        },
        {
            url: `${siteUrl}/industries/trades`,
            changeFrequency: "monthly",
            priority: 0.75,
        },
        {
            url: `${siteUrl}/industries/home-services`,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${siteUrl}/about`,
            changeFrequency: "yearly",
            priority: 0.7,
        },
        {
            url: `${siteUrl}/contact`,
            changeFrequency: "yearly",
            priority: 0.7,
        },
        {
            url: `${siteUrl}/lp/real-estate`,
            changeFrequency: "monthly",
            priority: 0.75,
        },
        {
            url: `${siteUrl}/resources`,
            changeFrequency: "monthly",
            priority: 0.65,
        },
        {
            url: `${siteUrl}/resources/tc-task-list`,
            changeFrequency: "yearly",
            priority: 0.6,
        },
        {
            url: `${siteUrl}/resources/tc-cover-sheet`,
            changeFrequency: "yearly",
            priority: 0.6,
        },
        {
            url: `${siteUrl}/resources/tc-intake-checklist`,
            changeFrequency: "yearly",
            priority: 0.6,
        },
    ];

    const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
        url: `${siteUrl}/work/${project.slug}`,
        changeFrequency: "yearly",
        priority: 0.8,
    }));

    return [...staticRoutes, ...projectRoutes];
}
