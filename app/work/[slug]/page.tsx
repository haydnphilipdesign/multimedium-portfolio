import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/sections/Section";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/motion/AnimatedSection";
import { MonoLabel, PullQuote, CheckRow } from "@/components/sections/Editorial";
import { JsonLd } from "@/components/seo/JsonLd";
import { getProjectBySlug, getAllProjectSlugs, projects } from "@/content/projects";
import { createPageMetadata } from "@/lib/seo";
import {
    getBreadcrumbStructuredData,
    getCreativeWorkStructuredData,
} from "@/lib/structuredData";
import { IconArrowLeft, IconArrowRight, IconArrowUpRight } from "@tabler/icons-react";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        return {
            title: "Project Not Found",
        };
    }

    const title = project.metaTitle ?? project.title;
    const description = project.metaDescription ?? project.description;

    return createPageMetadata({
        title,
        description,
        path: `/work/${project.slug}`,
        ogImage: {
            url: `/work/${project.slug}/opengraph-image`,
            width: 1200,
            height: 630,
            alt: `${title} case study preview`,
        },
        twitterImage: {
            url: `/work/${project.slug}/twitter-image`,
            width: 1200,
            height: 600,
            alt: `${title} case study preview`,
        },
        keywords: project.tags,
        robots: project.featured ? undefined : { index: false, follow: true },
    });
}

export default async function CaseStudyPage({ params }: PageProps) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    const summaryText = project.caseStudy?.tldr ?? project.description;
    const hasSummary = Boolean(summaryText);
    const hasSnapshot = Boolean(
        project.caseStudy?.goals?.length || project.caseStudy?.constraints?.length
    );
    const hasDeliverables = Boolean(
        project.caseStudy?.delivered?.length ||
            project.caseStudy?.whyItWorks?.length ||
            project.caseStudy?.approval
    );
    const hasProcess = project.process.length > 0;
    const hasResults = project.outcomes.length > 0;
    const hasTestimonial = Boolean(project.testimonial);

    const tocItems = [
        hasSummary ? { href: "#summary", label: "Summary" } : null,
        { href: "#overview", label: "Overview" },
        hasSnapshot ? { href: "#snapshot", label: "Snapshot" } : null,
        hasDeliverables ? { href: "#deliverables", label: "Deliverables" } : null,
        hasProcess ? { href: "#process", label: "Process" } : null,
        hasResults ? { href: "#results", label: "Results" } : null,
        hasTestimonial ? { href: "#testimonial", label: "Testimonial" } : null,
    ].filter(Boolean) as { href: string; label: string }[];

    // Get adjacent projects for navigation (only featured/visible projects)
    const visibleProjects = projects.filter((p) => p.featured);
    const currentIndex = visibleProjects.findIndex((p) => p.slug === slug);
    const prevProject = currentIndex > 0 ? visibleProjects[currentIndex - 1] : null;
    const nextProject = currentIndex < visibleProjects.length - 1 ? visibleProjects[currentIndex + 1] : null;

    const toolsSummary =
        project.tools.length <= 3
            ? project.tools.join(", ")
            : `${project.tools.slice(0, 3).join(", ")} +${project.tools.length - 3} more`;

    const isConcept = project.kind === "Concept";

    const cta = project.cta ?? {
        headline: "Interested in working together?",
        body: "Tell me what you do, who you want to attract, and what you want the site to accomplish.",
        ctaText: "Start a conversation",
        href: `/contact?source=case-study-${project.slug}`,
    };

    const ctaExternal = /^https?:\/\//.test(cta.href);
    const structuredData = [
        getBreadcrumbStructuredData([
            { name: "Home", path: "/" },
            { name: "Case Studies", path: "/work" },
            { name: project.title, path: `/work/${project.slug}` },
        ]),
        getCreativeWorkStructuredData({
            name: project.title,
            description: project.metaDescription ?? project.description,
            path: `/work/${project.slug}`,
            image: project.heroImage,
            keywords: project.tags,
            about: project.industries,
        }),
    ];

    return (
        <>
            <JsonLd data={structuredData} />
            {/* Editorial hero */}
            <Section size="wide" padding="none" className="pt-32 sm:pt-36 md:pt-44">
                <AnimatedSection>
                    <Link
                        href="/work"
                        className="touch-target mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                        <IconArrowLeft className="w-4 h-4" stroke={1.5} />
                        Back to work
                    </Link>
                </AnimatedSection>

                {isConcept && (
                    <AnimatedSection delay={0.1}>
                        <div className="mb-7 max-w-2xl border-l-2 border-primary/50 pl-5 text-sm leading-relaxed text-foreground/70">
                            <span className="font-semibold text-foreground">Concept project.</span>{" "}
                            A self-initiated design exploration for a fictional brand — not commissioned client work. Any names, stats, or testimonials shown in the mockups are placeholder content.
                        </div>
                    </AnimatedSection>
                )}

                <AnimatedSection delay={0.15}>
                    <MonoLabel className="mb-6">
                        {isConcept ? "Concept · demo" : project.category}
                    </MonoLabel>
                    <h1 className="max-w-4xl font-display text-5xl text-foreground sm:text-6xl md:text-7xl display-balance">
                        {project.title}
                    </h1>
                </AnimatedSection>

                <AnimatedSection delay={0.25}>
                    <p className="mt-6 max-w-2xl text-xl leading-relaxed text-foreground/80 md:text-2xl">
                        {project.tagline}
                    </p>
                </AnimatedSection>

                {/* Project meta — ledger */}
                <AnimatedSection delay={0.3}>
                    <dl className="ledger mt-10 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-foreground/15 pt-8 lg:grid-cols-4">
                        <div>
                            <dt className="mono-label text-muted-foreground">
                                {isConcept ? "Project type" : "Client"}
                            </dt>
                            <dd className="mt-2 text-sm font-medium text-foreground">
                                {isConcept ? "Concept (fictional brand)" : project.client}
                            </dd>
                        </div>
                        <div>
                            <dt className="mono-label text-muted-foreground">Role</dt>
                            <dd className="mt-2 text-sm font-medium text-foreground">{project.role}</dd>
                        </div>
                        <div>
                            <dt className="mono-label text-muted-foreground">Live</dt>
                            <dd className="mt-2 text-sm font-medium text-foreground">
                                {project.externalUrl ? (
                                    <Link
                                        href={project.externalUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 transition-colors hover:text-primary"
                                    >
                                        Visit site
                                        <IconArrowUpRight className="h-4 w-4" stroke={1.5} />
                                    </Link>
                                ) : (
                                    <span className="text-muted-foreground">—</span>
                                )}
                            </dd>
                        </div>
                        <div>
                            <dt className="mono-label text-muted-foreground">Built with</dt>
                            <dd className="mt-2 text-sm font-medium text-foreground">{toolsSummary}</dd>
                        </div>
                    </dl>
                </AnimatedSection>
            </Section>

            {/* Hero Image — full and large */}
            <Section size="wide" padding="none" className="mt-12 mb-16 md:mt-16 md:mb-24">
                <AnimatedSection>
                    <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-border/60 bg-surface-2 shadow-[var(--shadow-elevated)]">
                        <Image
                            src={project.heroImage}
                            alt={`${project.title} website design case study hero image`}
                            fill
                            className="object-cover"
                            sizes="(min-width: 1280px) 1200px, 100vw"
                            priority
                        />
                    </div>
                </AnimatedSection>
            </Section>

            {/* Summary — editorial lead */}
            {hasSummary ? (
                <Section id="summary" size="narrow" className="pt-0" padding="none">
                    <AnimatedSection>
                        <div className="border-l-2 border-primary/60 pl-6 sm:pl-8">
                            <MonoLabel className="mb-4">Summary</MonoLabel>
                            <p className="font-display text-xl leading-relaxed text-foreground sm:text-2xl">
                                {summaryText}
                            </p>
                        </div>
                    </AnimatedSection>
                </Section>
            ) : null}

            {/* Jump links */}
            {tocItems.length > 1 ? (
                <Section className={hasSummary ? "pt-10" : "pt-0"} padding="none">
                    <AnimatedSection delay={0.05}>
                        <nav aria-label="On this page" className="flex flex-wrap items-center gap-x-2 gap-y-2">
                            <span className="mono-label mr-2 text-muted-foreground">On this page</span>
                            {tocItems.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    className="touch-target inline-flex items-center rounded-full border border-border/60 px-3 py-1.5 text-xs font-medium text-foreground/70 transition-colors hover:border-primary/40 hover:text-primary"
                                >
                                    {item.label}
                                </a>
                            ))}
                        </nav>
                    </AnimatedSection>
                </Section>
            ) : null}

            {/* Overview — Challenge / Solution */}
            <Section id="overview">
                <div className="grid gap-10 md:grid-cols-2 md:gap-16">
                    <AnimatedSection>
                        <MonoLabel index="01" className="mb-4">The challenge</MonoLabel>
                        <p className="text-lg leading-relaxed text-foreground/80">{project.problem}</p>
                    </AnimatedSection>

                    <AnimatedSection delay={0.1}>
                        <MonoLabel index="02" className="mb-4">The solution</MonoLabel>
                        <p className="text-lg leading-relaxed text-foreground/80">{project.solution}</p>
                    </AnimatedSection>
                </div>
            </Section>

            {/* Project Snapshot — ruled lists */}
            {project.caseStudy?.goals?.length || project.caseStudy?.constraints?.length ? (
                <section className="bg-surface-1">
                    <Section id="snapshot">
                        <AnimatedSection>
                            <h2 className="mb-10 font-display text-3xl text-foreground sm:text-4xl">
                                Project snapshot
                            </h2>
                        </AnimatedSection>

                        <div className="grid gap-x-16 gap-y-10 md:grid-cols-2">
                            {project.caseStudy?.goals?.length ? (
                                <AnimatedSection>
                                    <MonoLabel className="mb-3">Goals</MonoLabel>
                                    <ul className="ledger border-t border-rule">
                                        {project.caseStudy.goals.map((goal) => (
                                            <CheckRow key={goal}>{goal}</CheckRow>
                                        ))}
                                    </ul>
                                </AnimatedSection>
                            ) : null}

                            {project.caseStudy?.constraints?.length ? (
                                <AnimatedSection delay={0.1}>
                                    <MonoLabel className="mb-3">Constraints / requirements</MonoLabel>
                                    <ul className="ledger border-t border-rule">
                                        {project.caseStudy.constraints.map((constraint) => (
                                            <CheckRow key={constraint}>{constraint}</CheckRow>
                                        ))}
                                    </ul>
                                </AnimatedSection>
                            ) : null}
                        </div>
                    </Section>
                </section>
            ) : null}

            {/* Deliverables — ruled lists */}
            {project.caseStudy?.delivered?.length || project.caseStudy?.whyItWorks?.length || project.caseStudy?.approval ? (
                <Section id="deliverables">
                    <AnimatedSection>
                        <h2 className="mb-10 font-display text-3xl text-foreground sm:text-4xl">
                            Deliverables &amp; rationale
                        </h2>
                    </AnimatedSection>

                    <div className="grid gap-x-16 gap-y-10 md:grid-cols-2 md:items-start">
                        {project.caseStudy?.delivered?.length ? (
                            <AnimatedSection>
                                <MonoLabel className="mb-3">What I delivered</MonoLabel>
                                <ul className="ledger border-t border-rule">
                                    {project.caseStudy.delivered.map((item) => (
                                        <CheckRow key={item}>{item}</CheckRow>
                                    ))}
                                </ul>
                            </AnimatedSection>
                        ) : null}

                        <div className="space-y-8">
                            {project.caseStudy?.whyItWorks?.length ? (
                                <AnimatedSection delay={0.1}>
                                    <MonoLabel className="mb-3">Why this works</MonoLabel>
                                    <ul className="ledger border-t border-rule">
                                        {project.caseStudy.whyItWorks.map((item) => (
                                            <CheckRow key={item}>{item}</CheckRow>
                                        ))}
                                    </ul>
                                </AnimatedSection>
                            ) : null}

                            {project.caseStudy?.approval ? (
                                <AnimatedSection delay={0.2}>
                                    <p className="border-l-2 border-primary/50 pl-5 text-sm italic leading-relaxed text-foreground/75">
                                        {project.caseStudy.approval}
                                    </p>
                                </AnimatedSection>
                            ) : null}
                        </div>
                    </div>
                </Section>
            ) : null}

            {/* Process — numbered editorial spreads */}
            {project.process.length > 0 && (
                <section className="bg-surface-1">
                    <Section id="process">
                        <AnimatedSection>
                            <h2 className="mb-12 font-display text-3xl text-foreground sm:text-4xl">
                                Process
                            </h2>
                        </AnimatedSection>

                        <div className="space-y-14 md:space-y-20">
                            {project.process.map((step, index) => {
                                const processImage = step.image ?? project.images[index];

                                return (
                                    <AnimatedSection key={index} delay={index * 0.1}>
                                        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
                                            <div className={index % 2 === 1 ? "md:order-2" : ""}>
                                                <span className="font-display text-5xl text-primary/35 md:text-6xl">
                                                    {String(index + 1).padStart(2, "0")}
                                                </span>
                                                <h3 className="mt-3 font-display text-2xl text-foreground sm:text-3xl">
                                                    {step.title}
                                                </h3>
                                                <p className="mt-4 text-lg leading-relaxed text-foreground/75">
                                                    {step.description}
                                                </p>
                                            </div>
                                            <div className={index % 2 === 1 ? "md:order-1" : ""}>
                                                <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border/60 bg-surface-2 shadow-[var(--shadow-soft)]">
                                                    {processImage ? (
                                                        <Image
                                                            src={processImage}
                                                            alt={`${project.title} - ${step.title}`}
                                                            fill
                                                            className="object-cover"
                                                            sizes="(min-width: 768px) 50vw, 100vw"
                                                        />
                                                    ) : (
                                                        <div
                                                            className="absolute inset-0"
                                                            style={{
                                                                background:
                                                                    "linear-gradient(135deg, color-mix(in oklab, var(--primary) 22%, transparent), color-mix(in oklab, var(--primary) 8%, transparent))",
                                                            }}
                                                        />
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </AnimatedSection>
                                );
                            })}
                        </div>
                    </Section>
                </section>
            )}

            {/* Outcomes — ledger of results */}
            {project.outcomes.length > 0 && (
                <Section id="results">
                    <AnimatedSection>
                        <h2 className="mb-12 font-display text-3xl text-foreground sm:text-4xl">
                            Results &amp; impact
                        </h2>
                    </AnimatedSection>

                    <StaggerContainer className="grid border-y border-rule md:grid-cols-3 md:divide-x md:divide-rule" staggerDelay={0.1}>
                        {project.outcomes.map((outcome, index) => (
                            <StaggerItem key={index}>
                                <div className="py-8 md:px-8 md:first:pl-0">
                                    <p className="font-display text-4xl text-foreground md:text-5xl">
                                        {outcome.value}
                                    </p>
                                    <p className="mono-label mt-3 text-muted-foreground">{outcome.metric}</p>
                                    <p className="mt-3 text-base leading-relaxed text-foreground/70">
                                        {outcome.description}
                                    </p>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </Section>
            )}

            {/* Testimonial — Fraunces italic pull quote */}
            {project.testimonial && (
                <Section id="testimonial" size="narrow" padding="large">
                    <AnimatedSection>
                        <PullQuote cite={`${project.testimonial.author} — ${project.testimonial.role}`}>
                            &ldquo;{project.testimonial.quote}&rdquo;
                        </PullQuote>
                    </AnimatedSection>
                </Section>
            )}

            {/* Project Navigation */}
            <Section className="border-t border-rule">
                <div className="grid gap-6 sm:grid-cols-2 sm:items-center">
                    {prevProject ? (
                        <Link
                            href={`/work/${prevProject.slug}`}
                            className="group touch-target flex w-full items-center gap-3 rounded-lg text-muted-foreground transition-colors hover:text-foreground"
                        >
                            <IconArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" stroke={1.5} />
                            <div className="text-left">
                                <p className="mono-label mb-1.5 text-muted-foreground">Previous</p>
                                <p className="font-display text-lg text-foreground">{prevProject.title}</p>
                            </div>
                        </Link>
                    ) : (
                        <div />
                    )}

                    {nextProject ? (
                        <Link
                            href={`/work/${nextProject.slug}`}
                            className="group touch-target flex w-full items-center justify-end gap-3 rounded-lg text-right text-muted-foreground transition-colors hover:text-foreground"
                        >
                            <div>
                                <p className="mono-label mb-1.5 text-muted-foreground">Next</p>
                                <p className="font-display text-lg text-foreground">{nextProject.title}</p>
                            </div>
                            <IconArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" stroke={1.5} />
                        </Link>
                    ) : (
                        <div />
                    )}
                </div>
            </Section>

            {/* CTA — flooded ochre closer */}
            <section className="bg-flood text-flood-foreground">
                <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 md:py-24 lg:px-8">
                    <AnimatedSection>
                        <h2 className="font-display text-3xl text-flood-foreground sm:text-4xl md:text-5xl display-balance">
                            {cta.headline}
                        </h2>
                        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-flood-foreground/80">
                            {cta.body}
                        </p>
                        <Link
                            href={cta.href}
                            className="btn mt-9 bg-foreground text-background hover:-translate-y-px hover:bg-foreground/90"
                            target={ctaExternal ? "_blank" : undefined}
                            rel={ctaExternal ? "noopener noreferrer" : undefined}
                        >
                            {cta.ctaText}
                        </Link>
                    </AnimatedSection>
                </div>
            </section>
        </>
    );
}

