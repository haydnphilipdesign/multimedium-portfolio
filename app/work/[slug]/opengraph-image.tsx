import { getProjectBySlug } from "@/content/projects";
import { createSocialImageCard } from "@/lib/socialImages";

export const size = {
    width: 1200,
    height: 630,
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

export default async function CaseStudyOpenGraphImage({ params }: ImageProps) {
    const { slug } = await params;
    const projectData = getProjectDescription(slug);

    if (!projectData) {
        return createSocialImageCard({
            ...size,
            brand: "Multimedium",
            eyebrow: "Case Study",
            title: "Case Study Not Found",
            description: "Portfolio preview image for Multimedium case studies.",
            footerLeft: "multimedium.dev",
            badge: "Portfolio",
        });
    }

    const { project, description } = projectData;

    return createSocialImageCard({
        ...size,
        brand: "Multimedium",
        eyebrow: `${project.kind} Case Study`,
        title: project.title,
        description,
        footerLeft: `${project.client} • ${project.category}`,
        badge: project.year,
    });
}
