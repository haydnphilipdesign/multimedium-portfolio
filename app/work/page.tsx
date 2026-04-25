import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/sections/Section";
import { ProjectCard } from "@/components/work/ProjectCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { projects, type Project } from "@/content/projects";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { createPageMetadata } from "@/lib/seo";
import {
    getBreadcrumbStructuredData,
    getCollectionPageStructuredData,
} from "@/lib/structuredData";

const industryMeta: Record<string, { title: string; description: string; heading: string; subheading: string }> = {
    tc: {
        title: "Transaction Coordinator Work",
        description: "Web design and development projects for transaction coordinators — professional messaging, lead capture, and builds that bring in better clients.",
        heading: "Transaction Coordinator Work",
        subheading: "Client-first projects for TCs and real estate ops teams, designed to qualify leads and drive bookings.",
    },
    "real-estate": {
        title: "Real Estate Web Design Work",
        description: "Web design and development projects for real estate professionals—property management, investor portals, and service-based sites.",
        heading: "Real Estate Work",
        subheading: "Projects built for property managers, investors, and real estate teams.",
    },
    coaching: {
        title: "Coaching & Consulting Web Design",
        description: "Web design for coaches, consultants, and service-based businesses—from premium coaching sites to scroll-driven experiences.",
        heading: "Coaching Work",
        subheading: "Websites for coaches and consultants who want their web presence to match their expertise.",
    },
};

export async function generateMetadata({
    searchParams,
}: {
    searchParams: Promise<{ industry?: string }>;
}): Promise<Metadata> {
    const params = await searchParams;
    const industry = params.industry;
    const indMeta = industry ? industryMeta[industry] : null;

    return createPageMetadata({
            title: indMeta?.title ?? "Work",
        description:
            indMeta?.description ??
            "Real estate and transaction coordinator website projects — real builds with clear goals, design decisions, and measurable outcomes.",
        path: "/work",
        robots: industry ? { index: false, follow: true } : undefined,
    });
}

export default async function WorkPage({
    searchParams,
}: {
    searchParams: Promise<{ industry?: string }>;
}) {
    const params = await searchParams;
    const industry = params.industry;
    const indMeta = industry ? industryMeta[industry] : null;

    // Only show featured (visible) projects
    let filteredProjects = projects.filter((p) => p.featured);

    if (industry) {
        filteredProjects = filteredProjects.filter((p) => p.industries?.includes(industry));
    }

    const showSpotlight = !industry || industry === "tc" || industry === "real-estate" || industry === "coaching";
    const spotlightOrder =
        industry === "tc"
            ? ["pa-real-estate-support", "tag-landing-page"]
            : industry === "coaching"
                ? ["momentum-coaching", "clarity-growth"]
                : ["pa-real-estate-support", "tag-landing-page", "northpoint-realty", "momentum-coaching"];
    const spotlightProjects: Project[] = showSpotlight
        ? (spotlightOrder
            .map((slug) => filteredProjects.find((p) => p.slug === slug))
            .filter(Boolean) as Project[])
        : [];
    const spotlightSlugs = new Set(spotlightProjects.map((p) => p.slug));
    const remainingProjects = filteredProjects.filter((project) => !spotlightSlugs.has(project.slug));

    const getGridCols = (count: number) => (count === 4 ? "lg:grid-cols-2" : "lg:grid-cols-3");

    const spotlightHeading =
        industry === "tc" ? "TC website work"
            : industry === "real-estate" ? "Real estate website work"
                : industry === "coaching" ? "Coaching & consulting sites"
                    : "Selected work";
    const spotlightSubheading =
        industry === "tc"
            ? "Client websites and landing pages for transaction coordinators and real estate ops teams."
            : industry === "coaching"
                ? "Premium websites for coaches and consultants — designed to command authority and justify high-ticket pricing."
                : "Client projects with clear positioning, practical design decisions, and visible business goals.";
    const structuredData = [
        getBreadcrumbStructuredData([
            { name: "Home", path: "/" },
            { name: "Work", path: "/work" },
        ]),
        getCollectionPageStructuredData({
            name: "Multimedium Work",
            description:
                "Case studies for real estate, transaction coordinator, and service-business website projects by Multimedium.",
            path: "/work",
        }),
    ];

    return (
        <>
            <JsonLd data={structuredData} />
            <div className="relative overflow-hidden">
                {/* Hero Section */}
                <Section className="pt-28 sm:pt-32 md:pt-40" padding="none">
                    <AnimatedSection>
                        <div className="rounded-2xl border border-border/60 bg-card px-6 py-8 shadow-[var(--shadow-soft)] sm:px-8 sm:py-10">
                            <div className="max-w-3xl">
                                <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
                                    <span className="text-gradient">{indMeta?.heading ?? "Work"}</span>
                                </h1>
                                <p className="text-lg text-muted-foreground md:text-xl">
                                    {indMeta?.subheading ?? "Real builds for real estate professionals and transaction coordinators — each with clear goals, deliberate design decisions, and measurable outcomes."}
                                </p>
                                {!industry && (
                                    <p className="mt-4 max-w-2xl text-sm text-muted-foreground">
                                        Evaluating fit? Start with the work closest to
                                        <Link href="/industries/real-estate-professionals" className="mx-1 text-foreground underline underline-offset-4 hover:text-primary">
                                            real estate
                                        </Link>
                                        or
                                        <Link href="/industries/transaction-coordinators" className="mx-1 text-foreground underline underline-offset-4 hover:text-primary">
                                            transaction coordinators
                                        </Link>
                                        .
                                    </p>
                                )}
                            </div>
                        </div>
                    </AnimatedSection>
                </Section>

                <div className="h-12 md:h-16" />
            </div>

            {/* Spotlight */}
            {spotlightProjects.length > 0 && (
                <Section className="pt-14 md:pt-20">
                    <AnimatedSection>
                        <div className="flex items-end justify-between gap-8 mb-8">
                            <div className="max-w-3xl">
                                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                                    {spotlightHeading}
                                </h2>
                                <p className="text-muted-foreground mt-3">
                                    {spotlightSubheading}
                                </p>
                            </div>
                        </div>
                    </AnimatedSection>
                    <div className={`grid gap-6 sm:gap-8 md:grid-cols-2 ${getGridCols(spotlightProjects.length)}`}>
                        {spotlightProjects.map((project, index) => (
                            <ProjectCard key={project.slug} project={project} index={index} />
                        ))}
                    </div>
                </Section>
            )}

            {/* Remaining Projects */}
            {remainingProjects.length > 0 && (
                <Section>
                    <AnimatedSection>
                        <div className="max-w-3xl mb-8">
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                                More work
                            </h2>
                            <p className="text-muted-foreground mt-3">
                                Additional client sites and service-business projects, each shaped by the same positioning-first process.
                            </p>
                        </div>
                    </AnimatedSection>
                    <div className={`grid gap-6 sm:gap-8 md:grid-cols-2 ${getGridCols(remainingProjects.length)}`}>
                        {remainingProjects.map((project, index) => (
                            <ProjectCard key={project.slug} project={project} index={index} />
                        ))}
                    </div>
                </Section>
            )}

            {/* CTA Section */}
            <div>
                <Section>
                    <AnimatedSection className="mx-auto max-w-2xl rounded-2xl border border-border/60 bg-card/80 px-6 py-10 text-center shadow-[var(--shadow-soft)] sm:px-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                            Have a project in mind?
                        </h2>
                        <p className="text-muted-foreground mb-8">
                            Tell me what you do, who you want to attract, and what&apos;s not working today. I&apos;ll reply within one business day.
                        </p>
                        <Link href="/contact?source=work-cta" className="btn-primary">
                            Book a free discovery call
                        </Link>
                    </AnimatedSection>
                </Section>
            </div>
        </>
    );
}
