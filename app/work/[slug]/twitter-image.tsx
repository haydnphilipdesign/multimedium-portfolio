import { getProjectBySlug } from "@/content/projects";
import { createSocialImageCard } from "@/lib/socialImages";

export const size = {
    width: 1200,
    height: 600,
};

export const contentType = "image/png";

type ImageProps = {
    params: Promise<{ slug: string }>;
};

function getProjectDescription(slug: string) {
    const project = getProjectBySlug(slug);

    if (!project) {
        return null;
    }

    return {
        project,
        description:
            project.socialCaption ??
            project.caseStudy?.tldr ??
            project.metaDescription ??
            project.tagline,
    };
}

export default async function CaseStudyTwitterImage({ params }: ImageProps) {
    const { slug } = await params;
    const projectData = getProjectDescription(slug);

    if (!projectData) {
        return createSocialImageCard({
            ...size,
            brand: "Multimedium",
            eyebrow: "Portfolio",
            title: "Multimedium Case Studies",
            description: "Web design, product, and SaaS work built for niche service businesses.",
            footerLeft: "multimedium.dev",
            badge: "Share Preview",
        });
    }

    const { project, description } = projectData;

    return createSocialImageCard({
        ...size,
        brand: "Multimedium",
        eyebrow: project.category,
        title: project.title,
        description,
        footerLeft: `${project.client} • ${project.role}`,
        badge: "Case Study",
    });
}
