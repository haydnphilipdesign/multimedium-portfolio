import { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { Section } from "@/components/sections/Section";
import { ProjectCard } from "@/components/work/ProjectCard";
import { WorkFilters } from "@/components/work/WorkFilters";
import { projects, type Project } from "@/content/projects";
import { AnimatedSection } from "@/components/motion/AnimatedSection";

const industryMeta: Record<string, { title: string; description: string; heading: string; subheading: string }> = {
    tc: {
        title: "Transaction Coordinator Case Studies",
        description: "Web design and development projects for transaction coordinators—authority-first messaging, lead capture, and conversion-focused builds.",
        heading: "Transaction Coordinator Work",
        subheading: "Projects built for TCs and real estate ops teams—designed to qualify leads and drive bookings.",
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
};

const categoryMeta: Record<string, { title: string; description: string }> = {
    "Web Design": {
        title: "Web Design Case Studies",
        description: "Motion-rich, conversion-focused web design projects with premium aesthetics.",
    },
    "SaaS": {
        title: "SaaS Product Case Studies",
        description: "Product design and development for software-as-a-service applications.",
    },
    "Real Estate": {
        title: "Real Estate Web Design Case Studies",
        description: "Websites for real estate professionals, property managers, and transaction coordinators.",
    },
};

// Helper to get unique categories with counts
function getCategoryOptions() {
    const counts = new Map<string, number>();
    projects.forEach((p) => {
        counts.set(p.category, (counts.get(p.category) || 0) + 1);
    });
    return Array.from(counts.entries())
        .map(([value, count]) => ({ value, label: value, count }))
        .sort((a, b) => b.count - a.count);
}

// Helper to get unique industries with counts
function getIndustryOptions() {
    const counts = new Map<string, number>();
    projects.forEach((p) => {
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
        "A collection of recent projects—each one designed to earn trust, communicate value, and make reaching out feel like the obvious next step.";

    // Build canonical URL
    const params_arr: string[] = [];
    if (industry) params_arr.push(`industry=${industry}`);
    if (category) params_arr.push(`category=${encodeURIComponent(category)}`);
    const canonical = params_arr.length > 0 ? `/work?${params_arr.join("&")}` : "/work";

    return {
        title,
        description,
        alternates: { canonical },
    };
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

    // Filter projects
    let filteredProjects = [...projects];

    if (industry) {
        filteredProjects = filteredProjects.filter((p) => p.industries?.includes(industry));
    }
    if (category) {
        filteredProjects = filteredProjects.filter((p) => p.category === category);
    }

    const hasFilters = Boolean(industry || category);
    const clientProjects = filteredProjects.filter((project) => project.kind === "Client");
    const otherProjects = filteredProjects.filter((project) => project.kind !== "Client");
    const getGridCols = (count: number) => (count === 4 ? "lg:grid-cols-2" : "lg:grid-cols-3");

    // Get filter options
    const categoryOptions = getCategoryOptions();
    const industryOptions = getIndustryOptions();

    return (
        <>
            {/* Hero Section */}
            <Section className="pt-28 sm:pt-32 md:pt-40" padding="none">
                <AnimatedSection>
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
                            <span className="text-gradient">{indMeta?.heading ?? "Case Studies"}</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground">
                            {indMeta?.subheading ?? "Real projects with clear goals, decisions, and outcomes—built to earn trust and turn visits into inquiries."}
                        </p>
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

            {/* No Results */}
            {filteredProjects.length === 0 && (
                <Section>
                    <div className="text-center py-16">
                        <p className="text-lg text-muted-foreground mb-4">
                            No projects match the current filters.
                        </p>
                        <Link
                            href="/work"
                            className="text-glow hover:underline"
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
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                            {hasFilters ? `Client work` : "Client work"}
                            {hasFilters && (
                                <span className="text-muted-foreground font-normal text-lg ml-2">
                                    ({clientProjects.length})
                                </span>
                            )}
                        </h2>
                    </AnimatedSection>
                    <div className={`grid gap-6 sm:gap-8 md:grid-cols-2 ${getGridCols(clientProjects.length)}`}>
                        {clientProjects.map((project, index) => (
                            <ProjectCard key={project.slug} project={project} index={index} />
                        ))}
                    </div>
                </Section>
            )}

            {/* Products & Experiments */}
            {otherProjects.length > 0 && (
                <Section className="bg-muted/30">
                    <AnimatedSection>
                        <div className="max-w-3xl">
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                                Products & experiments
                                {hasFilters && (
                                    <span className="text-muted-foreground font-normal text-lg ml-2">
                                        ({otherProjects.length})
                                    </span>
                                )}
                            </h2>
                            <p className="text-muted-foreground">
                                A few side projects that show how I think about UX, product flows, and shipping quickly.
                            </p>
                        </div>
                    </AnimatedSection>
                    <div className={`mt-10 grid gap-6 sm:gap-8 md:grid-cols-2 ${getGridCols(otherProjects.length)}`}>
                        {otherProjects.map((project, index) => (
                            <ProjectCard key={project.slug} project={project} index={index} />
                        ))}
                    </div>
                </Section>
            )}

            {/* CTA Section */}
            <Section className="border-t border-border/40">
                <AnimatedSection className="text-center max-w-2xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                        Have a project in mind?
                    </h2>
                    <p className="text-muted-foreground mb-8">
                        Tell me what you do, who you want to attract, and what's not working today. I'll reply within one business day.
                    </p>
                    <Link href="/contact?source=work-cta" className="btn-primary">
                        Talk about your project
                    </Link>
                </AnimatedSection>
            </Section>
        </>
    );
}
