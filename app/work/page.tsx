import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/sections/Section";
import { ProjectCard, FeaturedProject } from "@/components/work/ProjectCard";
import { SectionOpener } from "@/components/sections/Editorial";
import { CTARuled } from "@/components/marketing/CTA";
import { JsonLd } from "@/components/seo/JsonLd";
import {
    getClientProjectsByIndustry,
    getConceptProjectsByIndustry,
    getProductProjects,
} from "@/content/projects";
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

    // Honest, classification-based selection — never mix demo work into client proof.
    const clientProjects = getClientProjectsByIndustry(industry);
    const productProjects = getProductProjects().filter(
        (p) => !industry || p.industries?.includes(industry)
    );
    const conceptProjects = getConceptProjectsByIndustry(industry);

    const getGridCols = (count: number) => (count === 4 ? "lg:grid-cols-2" : "lg:grid-cols-3");

    const clientHeading =
        industry === "tc" ? "TC website work"
            : industry === "real-estate" ? "Real estate website work"
                : industry === "coaching" ? "Coaching & consulting work"
                    : "Selected client work";
    const clientSubheading =
        industry === "tc"
            ? "Real client websites and landing pages for transaction coordinators and real estate ops teams."
            : "Real client projects with clear positioning, practical design decisions, and visible business goals.";
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
            {/* Editorial hero */}
            <Section size="wide" className="pt-32 sm:pt-36 md:pt-44" padding="none">
                <AnimatedSection>
                    <p className="mono-label mb-6">
                        {industry ? "Portfolio — filtered" : "Portfolio · 2024–2026"}
                    </p>
                    <h1 className="max-w-4xl font-display text-5xl text-foreground sm:text-6xl md:text-7xl lg:text-[5.25rem] display-balance">
                        {indMeta?.heading ?? (
                            <>
                                The work, <span className="text-gradient">shown big.</span>
                            </>
                        )}
                    </h1>
                    <p className="mt-7 max-w-2xl text-lg leading-relaxed text-foreground/80 md:text-xl">
                        {indMeta?.subheading ?? "Real builds for real estate professionals and transaction coordinators — each with clear goals, deliberate design decisions, and measurable outcomes."}
                    </p>
                    {!industry && (
                        <p className="mt-5 max-w-2xl text-base text-foreground/65">
                            Evaluating fit? Start with the work closest to
                            <Link href="/industries/real-estate-professionals" className="mx-1 text-foreground underline decoration-primary/40 underline-offset-4 hover:text-primary">
                                real estate
                            </Link>
                            or
                            <Link href="/industries/transaction-coordinators" className="mx-1 text-foreground underline decoration-primary/40 underline-offset-4 hover:text-primary">
                                transaction coordinators
                            </Link>
                            .
                        </p>
                    )}
                </AnimatedSection>
            </Section>

            {/* Real client work — shown large */}
            {clientProjects.length > 0 && (
                <Section size="wide" padding="large" className="pt-14 md:pt-20">
                    <AnimatedSection>
                        <SectionOpener
                            eyebrow="Client work"
                            eyebrowIndex="01"
                            title={clientHeading}
                            lead={clientSubheading}
                        />
                    </AnimatedSection>
                    <div className="mt-14 space-y-16 md:mt-20 md:space-y-24">
                        {clientProjects.map((project, index) => (
                            <FeaturedProject
                                key={project.slug}
                                project={project}
                                index={index}
                                reverse={index % 2 === 1}
                            />
                        ))}
                    </div>
                </Section>
            )}

            {/* Internal products & tools */}
            {productProjects.length > 0 && (
                <section className="bg-surface-1">
                    <Section size="wide" padding="large">
                        <AnimatedSection>
                            <SectionOpener
                                eyebrow="Built in-house"
                                eyebrowIndex="02"
                                title="Internal products & tools"
                                lead="Software I designed and built for the real estate and transaction-coordination world — proof of how deeply I understand the workflow, not client commissions."
                            />
                        </AnimatedSection>
                        <div className={`mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 ${getGridCols(productProjects.length)}`}>
                            {productProjects.map((project, index) => (
                                <ProjectCard key={project.slug} project={project} index={index} />
                            ))}
                        </div>
                    </Section>
                </section>
            )}

            {/* Concept & demo designs */}
            {conceptProjects.length > 0 && (
                <Section size="wide" padding="large">
                    <AnimatedSection>
                        <SectionOpener
                            eyebrow="Range"
                            eyebrowIndex="03"
                            title="Concept & demo designs"
                            lead="Self-initiated design explorations for fictional brands, shown to demonstrate range. These are not client projects — each opens a live demo."
                        />
                    </AnimatedSection>
                    <div className={`mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 ${getGridCols(conceptProjects.length)}`}>
                        {conceptProjects.map((project, index) => (
                            <ProjectCard key={project.slug} project={project} index={index} />
                        ))}
                    </div>
                </Section>
            )}

            {/* CTA */}
            <CTARuled
                eyebrow="Next step"
                title="Have a project in mind?"
                body="Tell me what you do, who you want to attract, and what's not working today. I'll reply within one business day."
                primary={{ label: "Book a free discovery call", href: "/contact?source=work-cta" }}
                secondary={{ label: "See TC packages", href: "/tc-packages" }}
            />
        </>
    );
}
