import { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { Section } from "@/components/sections/Section";
import { ProjectCard } from "@/components/work/ProjectCard";
import { WorkFilters } from "@/components/work/WorkFilters";
import { projects, type Project } from "@/content/projects";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { createPageMetadata } from "@/lib/seo";

const industryMeta: Record<string, { title: string; description: string; heading: string; subheading: string }> = {
    tc: {
        title: "Transaction Coordinator Case Studies",
        description: "Web design and development projects for transaction coordinators — professional messaging, lead capture, and builds that bring in better clients.",
        heading: "Transaction Coordinator Work",
        subheading: "Client-first projects for TCs and real estate ops teams, designed to qualify leads and drive bookings.",
    },
    "real-estate": {
        title: "Real Estate Web Design Case Studies",
        description: "Web design and development projects for real estate professionals—property management, investor portals, and service-based sites.",
        heading: "Real Estate Work",
        subheading: "Projects built for property managers, investors, and real estate teams.",
    },
    wellness: {
        title: "Wellness Web Design Case Studies",
        description: "Web design for wellness centers, retreat properties, and healing-focused businesses.",
        heading: "Wellness Work",
        subheading: "Projects built for retreat centers, healers, and wellness brands.",
    },
    coaching: {
        title: "Coaching & Consulting Web Design",
        description: "Web design for coaches, consultants, and service-based businesses—from premium coaching sites to scroll-driven experiences.",
        heading: "Coaching Work",
        subheading: "Websites for coaches and consultants who want their web presence to match their expertise.",
    },
};

const categoryMeta: Record<string, { title: string; description: string }> = {
    "Web Design": {
        title: "Web Design Case Studies",
        description: "Motion-rich web design projects with strong visual craft and clear results.",
    },
    "SaaS": {
        title: "SaaS Product Case Studies",
        description: "Product design and development for software-as-a-service applications.",
    },
    "Real Estate": {
        title: "Real Estate Web Design Case Studies",
        description: "Websites for real estate professionals, property managers, and transaction coordinators.",
    },
    "Portal": {
        title: "Client Portal Case Studies",
        description: "Secure, client-facing portal builds focused on visibility, requests, and operational clarity.",
    },
};

// Only count featured (visible) projects for filter options
const visibleProjects = projects.filter((p) => p.featured);

// Helper to get unique categories with counts
function getCategoryOptions() {
    const counts = new Map<string, number>();
    visibleProjects.forEach((p) => {
        counts.set(p.category, (counts.get(p.category) || 0) + 1);
    });
    return Array.from(counts.entries())
        .map(([value, count]) => ({ value, label: value, count }))
        .sort((a, b) => b.count - a.count);
}

// Helper to get unique industries with counts
function getIndustryOptions() {
    const counts = new Map<string, number>();
    visibleProjects.forEach((p) => {
        p.industries?.forEach((ind) => {
            counts.set(ind, (counts.get(ind) || 0) + 1);
        });
    });
    return Array.from(counts.entries())
        .map(([value, count]) => ({ value, label: value, count }))
        .sort((a, b) => b.count - a.count);
}

export async function generateMetadata({
    searchParams,
}: {
    searchParams: Promise<{ industry?: string; category?: string }>;
}): Promise<Metadata> {
    const params = await searchParams;
    const industry = params.industry;
    const category = params.category;
    const indMeta = industry ? industryMeta[industry] : null;
    const catMeta = category ? categoryMeta[category] : null;

    // Priority: industry > category > default
    const title = indMeta?.title ?? catMeta?.title ?? "Case Studies";
    const description =
        indMeta?.description ??
        catMeta?.description ??
        "A collection of recent projects — real builds with clear goals, design decisions, and measurable outcomes.";

    // Build canonical URL
    const params_arr: string[] = [];
    if (industry) params_arr.push(`industry=${industry}`);
    if (category) params_arr.push(`category=${encodeURIComponent(category)}`);
    const canonical = params_arr.length > 0 ? `/work?${params_arr.join("&")}` : "/work";

    return createPageMetadata({
        title,
        description,
        path: canonical,
        robots: params_arr.length > 0 ? { index: false, follow: true } : undefined,
    });
}

export default async function WorkPage({
    searchParams,
}: {
    searchParams: Promise<{ industry?: string; category?: string }>;
}) {
    const params = await searchParams;
    const industry = params.industry;
    const category = params.category;
    const indMeta = industry ? industryMeta[industry] : null;

    // Filter projects — only show featured (visible) projects
    let filteredProjects = projects.filter((p) => p.featured);

    if (industry) {
        filteredProjects = filteredProjects.filter((p) => p.industries?.includes(industry));
    }
    if (category) {
        filteredProjects = filteredProjects.filter((p) => p.category === category);
    }

    const hasFilters = Boolean(industry || category);

    const showSpotlight = !industry || industry === "tc" || industry === "real-estate" || industry === "coaching";
    const spotlightOrder =
        industry === "tc"
            ? ["utility-sheet", "norma-intake", "pa-real-estate-support", "tag-landing-page"]
            : industry === "coaching"
                ? ["momentum-coaching", "clarity-growth"]
                : ["utility-sheet", "norma-intake", "pa-real-estate-support", "tag-landing-page"];
    const spotlightProjects: Project[] = showSpotlight
        ? (spotlightOrder
            .map((slug) => filteredProjects.find((p) => p.slug === slug))
            .filter(Boolean) as Project[])
        : [];
    const spotlightSlugs = new Set(spotlightProjects.map((p) => p.slug));
    const remainingProjects = filteredProjects.filter((project) => !spotlightSlugs.has(project.slug));

    const clientProjects = remainingProjects.filter((project) => project.kind === "Client");
    const otherProjects = remainingProjects.filter((project) => project.kind !== "Client");
    const getGridCols = (count: number) => (count === 4 ? "lg:grid-cols-2" : "lg:grid-cols-3");

    // Get filter options
    const categoryOptions = getCategoryOptions();
    const industryOptions = getIndustryOptions();

    const spotlightHeading =
        industry === "tc" ? "TC work — sites + tools"
            : industry === "real-estate" ? "Real estate ops — sites + tools"
                : industry === "coaching" ? "Coaching & consulting sites"
                    : "Featured work";
    const spotlightSubheading =
        industry === "tc"
            ? "Client websites first, with additional tooling shown lower on the page."
            : industry === "coaching"
                ? "Premium websites for coaches and consultants—designed to command authority and justify high-ticket pricing."
                : "A mix of client websites and operational tooling—designed for clarity, trust, and fewer manual follow-ups.";

    return (
        <>
            <div className="relative overflow-hidden">
                {/* Hero Section */}
                <Section className="pt-28 sm:pt-32 md:pt-40" padding="none">
                    <AnimatedSection>
                        <div className="rounded-2xl border border-border/60 bg-card px-6 py-8 shadow-[var(--shadow-soft)] sm:px-8 sm:py-10">
                            <div className="max-w-3xl">
                                <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
                                    <span className="text-gradient">{indMeta?.heading ?? "Case Studies"}</span>
                                </h1>
                                <p className="text-lg text-muted-foreground md:text-xl">
                                    {indMeta?.subheading ?? "Client sites and product builds with clear goals, design decisions, and real outcomes."}
                                </p>
                            </div>
                        </div>
                    </AnimatedSection>
                </Section>

                {/* Filters */}
                <Section className="pt-8 pb-0" padding="none">
                    <Suspense fallback={null}>
                        <WorkFilters
                            categories={categoryOptions}
                            industries={industryOptions}
                            currentCategory={category}
                            currentIndustry={industry}
                        />
                    </Suspense>
                </Section>

                {hasFilters && (
                    <Section className="pt-5 pb-0" padding="none">
                        <p className="text-sm text-muted-foreground">
                            Showing <span className="text-foreground font-medium">{filteredProjects.length}</span> project{filteredProjects.length === 1 ? "" : "s"}
                        </p>
                    </Section>
                )}

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

            {/* No Results */}
            {filteredProjects.length === 0 && (
                <Section>
                    <div className="text-center py-16">
                        <p className="text-lg text-muted-foreground mb-4">
                            No projects match the current filters.
                        </p>
                        <Link
                            href="/work"
                            className="text-primary hover:underline"
                        >
                            Clear filters to see all work
                        </Link>
                    </div>
                </Section>
            )}

            {/* Client Work */}
            {clientProjects.length > 0 && (
                <Section>
                    <AnimatedSection>
                        <div className="max-w-3xl mb-8">
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                                Client work
                                {hasFilters && (
                                    <span className="text-muted-foreground font-normal text-lg ml-2">
                                        ({clientProjects.length})
                                    </span>
                                )}
                            </h2>
                            {!hasFilters && (
                                <p className="text-muted-foreground mt-3">
                                    Full builds and redesigns — positioning, copy, and UI decisions shaped by each client&apos;s audience.
                                </p>
                            )}
                        </div>
                    </AnimatedSection>
                    <div className={`grid gap-6 sm:gap-8 md:grid-cols-2 ${getGridCols(clientProjects.length)}`}>
                        {clientProjects.map((project, index) => (
                            <ProjectCard key={project.slug} project={project} index={index} />
                        ))}
                    </div>
                </Section>
            )}

            {/* Tools, Products, and Internal Builds */}
            {otherProjects.length > 0 && (
                <div className="relative rounded-2xl border border-border/60 bg-muted/35">
                    <Section>
                        <AnimatedSection>
                            <div className="max-w-3xl">
                                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                                    Tools, products, and internal builds
                                    {hasFilters && (
                                        <span className="text-muted-foreground font-normal text-lg ml-2">
                                            ({otherProjects.length})
                                        </span>
                                    )}
                                </h2>
                                <p className="text-muted-foreground">
                                    Supporting work that shows product thinking, systems design, and technical range beyond client delivery.
                                </p>
                            </div>
                        </AnimatedSection>
                        <div className={`mt-10 grid gap-6 sm:gap-8 md:grid-cols-2 ${getGridCols(otherProjects.length)}`}>
                            {otherProjects.map((project, index) => (
                                <ProjectCard key={project.slug} project={project} index={index} />
                            ))}
                        </div>
                    </Section>
                </div>
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
                            Start a conversation
                        </Link>
                    </AnimatedSection>
                </Section>
            </div>
        </>
    );
}



