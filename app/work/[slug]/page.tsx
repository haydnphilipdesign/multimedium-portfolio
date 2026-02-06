import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/sections/Section";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/motion/AnimatedSection";
import { getProjectBySlug, getAllProjectSlugs, projects } from "@/content/projects";
import { IconArrowLeft, IconArrowRight, IconArrowUpRight, IconQuote } from "@tabler/icons-react";

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

    return {
        title,
        description,
        alternates: {
            canonical: `/work/${project.slug}`,
        },
        openGraph: {
            title,
            description,
            url: `/work/${project.slug}`,
            images: [project.heroImage],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [project.heroImage],
        },
    };
}

export default async function CaseStudyPage({ params }: PageProps) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    const hasSummary = Boolean(project.caseStudy?.tldr);
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

    // Get adjacent projects for navigation
    const currentIndex = projects.findIndex((p) => p.slug === slug);
    const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
    const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

    const toolsSummary =
        project.tools.length <= 3
            ? project.tools.join(", ")
            : `${project.tools.slice(0, 3).join(", ")} +${project.tools.length - 3} more`;

    const cta = project.cta ?? {
        headline: "Interested in working together?",
        body: "Tell me what you do, who you want to attract, and what you want the site to accomplish.",
        ctaText: "Talk about your project",
        href: `/contact?source=case-study-${project.slug}`,
    };

    const ctaExternal = /^https?:\/\//.test(cta.href);

    return (
        <>
            {/* Hero Section */}
            <section className="relative pt-28 sm:pt-32 md:pt-40 pb-16 md:pb-24">
                <div className="grain absolute inset-0 pointer-events-none" />

                {/* Background accent */}
                <div
                    className="absolute top-0 left-0 right-0 h-[60vh] opacity-45 bg-hero-gradient"
                />

                <Section size="wide" padding="none" className="relative z-10">
                    <div className="rounded-[2rem] border border-border/65 bg-card/88 px-6 py-8 shadow-[var(--shadow-elevated)] sm:px-8 sm:py-10">
                    <AnimatedSection>
                        <Link
                            href="/work"
                            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
                        >
                            <IconArrowLeft className="w-4 h-4" stroke={1.5} />
                            Back to case studies
                        </Link>
                    </AnimatedSection>

                    <AnimatedSection delay={0.1}>
                        <div className="flex flex-wrap items-center gap-3 mb-6">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border border-glow/25 bg-glow/10 text-foreground">
                                {project.category}
                            </span>
                            <span className="text-sm text-muted-foreground">{project.year}</span>
                            {project.tags?.length ? (
                                <div className="flex flex-wrap items-center gap-2">
                                    {project.tags.slice(0, 4).map((tag) => (
                                        <span
                                            key={tag}
                                            className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-background/60 backdrop-blur-sm text-muted-foreground border border-border/65"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            ) : null}
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={0.2}>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
                            {project.title}
                        </h1>
                    </AnimatedSection>

                    <AnimatedSection delay={0.3}>
                        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mb-10 sm:mb-12">
                            {project.tagline}
                        </p>
                    </AnimatedSection>

                    {/* Project Meta */}
                    <AnimatedSection delay={0.4}>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 py-6 sm:py-8 border-y border-border/40">
                            <div>
                                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                                    Client
                                </p>
                                <p className="text-sm font-medium text-foreground">{project.client}</p>
                            </div>
                            <div>
                                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                                    Role
                                </p>
                                <p className="text-sm font-medium text-foreground">{project.role}</p>
                            </div>
                            <div>
                                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                                    Live
                                </p>
                                {project.externalUrl ? (
                                    <Link
                                        href={project.externalUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 text-sm font-medium text-foreground hover:text-glow transition-colors"
                                    >
                                        Visit site
                                        <IconArrowUpRight className="h-4 w-4" stroke={1.5} />
                                    </Link>
                                ) : (
                                    <p className="text-sm text-muted-foreground">—</p>
                                )}
                            </div>
                            <div>
                                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                                    Built with (for the curious)
                                </p>
                                <p className="text-sm font-medium text-foreground">
                                    {toolsSummary}
                                </p>
                            </div>
                        </div>
                    </AnimatedSection>
                    </div>
                </Section>
            </section>

            {/* Hero Image */}
            <Section size="wide" padding="none" className="mb-16 md:mb-24">
                <AnimatedSection>
                    <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-muted border border-border/65 shadow-[var(--shadow-elevated)]">
                        <Image
                            src={project.heroImage}
                            alt={project.title}
                            fill
                            className="object-cover"
                            sizes="(min-width: 1280px) 1200px, 100vw"
                            priority
                        />
                    </div>
                </AnimatedSection>
            </Section>

            {/* TL;DR */}
            {project.caseStudy?.tldr ? (
                <Section id="summary" className="pt-0" padding="none">
                    <AnimatedSection>
                        <div className="rounded-2xl border border-border/65 bg-card shadow-[var(--shadow-soft)] px-6 py-6 sm:px-8">
                            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">
                                Summary
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                {project.caseStudy.tldr}
                            </p>
                        </div>
                    </AnimatedSection>
                </Section>
            ) : null}

            {/* Jump links */}
            {tocItems.length > 1 ? (
                <Section className={project.caseStudy?.tldr ? "pt-8" : "pt-0"} padding="none">
                    <AnimatedSection delay={0.05}>
                        <nav aria-label="On this page" className="flex flex-col gap-3">
                            <p className="text-xs uppercase tracking-wider text-muted-foreground">
                                On this page
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {tocItems.map((item) => (
                                    <a
                                        key={item.href}
                                        href={item.href}
                                        className="inline-flex items-center rounded-full border border-border/65 bg-card/82 px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground hover:border-glow/30 transition-colors"
                                    >
                                        {item.label}
                                    </a>
                                ))}
                            </div>
                        </nav>
                    </AnimatedSection>
                </Section>
            ) : null}

            {/* Overview Section */}
            <Section id="overview">
                <div className="grid md:grid-cols-2 gap-10 md:gap-12 lg:gap-16">
                    <AnimatedSection>
                        <h2 className="text-2xl font-bold text-foreground mb-4">
                            The Challenge
                        </h2>
                        <p className="text-muted-foreground leading-relaxed">
                            {project.problem}
                        </p>
                    </AnimatedSection>

                    <AnimatedSection delay={0.1}>
                        <h2 className="text-2xl font-bold text-foreground mb-4">
                            The Solution
                        </h2>
                        <p className="text-muted-foreground leading-relaxed">
                            {project.solution}
                        </p>
                    </AnimatedSection>
                </div>
            </Section>

            {/* Project Snapshot */}
            {project.caseStudy?.goals?.length || project.caseStudy?.constraints?.length ? (
                <Section id="snapshot" className="rounded-[2rem] bg-muted/35">
                    <AnimatedSection>
                        <h2 className="text-3xl font-bold text-foreground mb-10 text-center">
                            Project Snapshot
                        </h2>
                    </AnimatedSection>

                    <div className="grid gap-6 md:grid-cols-2">
                        {project.caseStudy?.goals?.length ? (
                            <AnimatedSection>
                                <div className="rounded-2xl border border-border/65 bg-card shadow-[var(--shadow-soft)] p-6 sm:p-8">
                                    <h3 className="text-xl font-semibold text-foreground mb-4">
                                        Goals
                                    </h3>
                                    <ul className="space-y-3">
                                        {project.caseStudy.goals.map((goal) => (
                                            <li key={goal} className="flex items-start gap-3 text-muted-foreground">
                                                <span className="w-1.5 h-1.5 rounded-full bg-glow mt-2 shrink-0" />
                                                <span className="leading-relaxed">{goal}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </AnimatedSection>
                        ) : null}

                        {project.caseStudy?.constraints?.length ? (
                            <AnimatedSection delay={0.1}>
                                <div className="rounded-2xl border border-border/65 bg-card shadow-[var(--shadow-soft)] p-6 sm:p-8">
                                    <h3 className="text-xl font-semibold text-foreground mb-4">
                                        Constraints / Requirements
                                    </h3>
                                    <ul className="space-y-3">
                                        {project.caseStudy.constraints.map((constraint) => (
                                            <li
                                                key={constraint}
                                                className="flex items-start gap-3 text-muted-foreground"
                                            >
                                                <span className="w-1.5 h-1.5 rounded-full bg-glow mt-2 shrink-0" />
                                                <span className="leading-relaxed">{constraint}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </AnimatedSection>
                        ) : null}
                    </div>
                </Section>
            ) : null}

            {/* Deliverables */}
            {project.caseStudy?.delivered?.length || project.caseStudy?.whyItWorks?.length || project.caseStudy?.approval ? (
                <Section id="deliverables">
                    <AnimatedSection>
                        <h2 className="text-3xl font-bold text-foreground mb-10 text-center">
                            Deliverables & Rationale
                        </h2>
                    </AnimatedSection>

                    <div className="grid gap-6 md:grid-cols-2 md:items-start">
                        {project.caseStudy?.delivered?.length ? (
                            <AnimatedSection>
                                <div className="rounded-2xl border border-border/65 bg-card shadow-[var(--shadow-soft)] p-6 sm:p-8">
                                    <h3 className="text-xl font-semibold text-foreground mb-4">
                                        What I Delivered
                                    </h3>
                                    <ul className="space-y-3">
                                        {project.caseStudy.delivered.map((item) => (
                                            <li key={item} className="flex items-start gap-3 text-muted-foreground">
                                                <span className="w-1.5 h-1.5 rounded-full bg-glow mt-2 shrink-0" />
                                                <span className="leading-relaxed">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </AnimatedSection>
                        ) : null}

                        <div className="space-y-6">
                            {project.caseStudy?.whyItWorks?.length ? (
                                <AnimatedSection delay={0.1}>
                                    <div className="rounded-2xl border border-border/65 bg-card shadow-[var(--shadow-soft)] p-6 sm:p-8">
                                        <h3 className="text-xl font-semibold text-foreground mb-4">
                                            Why This Works
                                        </h3>
                                        <ul className="space-y-3">
                                            {project.caseStudy.whyItWorks.map((item) => (
                                                <li
                                                    key={item}
                                                    className="flex items-start gap-3 text-muted-foreground"
                                                >
                                                    <span className="w-1.5 h-1.5 rounded-full bg-glow mt-2 shrink-0" />
                                                    <span className="leading-relaxed">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </AnimatedSection>
                            ) : null}

                            {project.caseStudy?.approval ? (
                                <AnimatedSection delay={0.2}>
                                    <div className="rounded-2xl border border-glow/20 bg-glow/10 px-6 py-5 text-sm text-foreground">
                                        {project.caseStudy.approval}
                                    </div>
                                </AnimatedSection>
                            ) : null}
                        </div>
                    </div>
                </Section>
            ) : null}

            {/* Process Section */}
            {project.process.length > 0 && (
                <Section id="process" className="rounded-[2rem] bg-muted/35">
                    <AnimatedSection>
                        <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
                            Process
                        </h2>
                    </AnimatedSection>

                    <div className="space-y-10 sm:space-y-12 md:space-y-16">
                        {project.process.map((step, index) => {
                            const processImage = step.image ?? project.images[index];

                            return (
                                <AnimatedSection key={index} delay={index * 0.1}>
                                    <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
                                        <div className={index % 2 === 1 ? "md:order-2" : ""}>
                                            <div className="flex items-center gap-4 mb-4">
                                                <span
                                                    className="flex items-center justify-center w-10 h-10 rounded-full text-sm font-bold border border-glow/25 bg-glow/10 text-glow"
                                                >
                                                    {index + 1}
                                                </span>
                                                <h3 className="text-xl font-semibold text-foreground">
                                                    {step.title}
                                                </h3>
                                            </div>
                                            <p className="text-muted-foreground leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>
                                        <div className={index % 2 === 1 ? "md:order-1" : ""}>
                                            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-muted border border-border/65">
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
            )}

            {/* Outcomes Section */}
            {project.outcomes.length > 0 && (
                <Section id="results">
                    <AnimatedSection>
                        <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
                            Results & Impact
                        </h2>
                    </AnimatedSection>

                    <StaggerContainer className="grid gap-6 sm:gap-8 md:grid-cols-3" staggerDelay={0.1}>
                        {project.outcomes.map((outcome, index) => (
                            <StaggerItem key={index}>
                                <div className="text-center p-6 sm:p-8 rounded-2xl bg-card shadow-[var(--shadow-soft)] border border-border/65">
                                    <p className="text-4xl md:text-5xl font-bold mb-2 text-glow">
                                        {outcome.value}
                                    </p>
                                    <p className="text-lg font-medium text-foreground mb-2">
                                        {outcome.metric}
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        {outcome.description}
                                    </p>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </Section>
            )}

            {/* Testimonial Section */}
            {project.testimonial && (
                <Section id="testimonial" className="rounded-[2rem] bg-muted/35">
                    <AnimatedSection className="max-w-3xl mx-auto text-center">
                        <IconQuote className="w-12 h-12 text-glow/30 mx-auto mb-6" stroke={1} />
                        <blockquote className="text-xl md:text-2xl text-foreground mb-8 leading-relaxed">
                            &ldquo;{project.testimonial.quote}&rdquo;
                        </blockquote>
                        <div>
                            <p className="font-medium text-foreground">
                                {project.testimonial.author}
                            </p>
                            <p className="text-sm text-muted-foreground">
                                {project.testimonial.role}
                            </p>
                        </div>
                    </AnimatedSection>
                </Section>
            )}

            {/* Project Navigation */}
            <Section className="border-t border-border/40">
                <div className="grid gap-6 sm:grid-cols-2 sm:items-center">
                    {prevProject ? (
                        <Link
                            href={`/work/${prevProject.slug}`}
                            className="group flex w-full items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                        >
                            <IconArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" stroke={1.5} />
                            <div className="text-left">
                                <p className="text-xs uppercase tracking-wider mb-1">Previous</p>
                                <p className="font-medium text-foreground">{prevProject.title}</p>
                            </div>
                        </Link>
                    ) : (
                        <div />
                    )}

                    {nextProject ? (
                        <Link
                            href={`/work/${nextProject.slug}`}
                            className="group flex w-full items-center justify-end gap-3 text-muted-foreground hover:text-foreground transition-colors text-right"
                        >
                            <div>
                                <p className="text-xs uppercase tracking-wider mb-1">Next</p>
                                <p className="font-medium text-foreground">{nextProject.title}</p>
                            </div>
                            <IconArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" stroke={1.5} />
                        </Link>
                    ) : (
                        <div />
                    )}
                </div>
            </Section>

            {/* CTA Section */}
            <Section className="rounded-[2rem] border border-border/60 bg-card/80" padding="large">
                <AnimatedSection className="text-center max-w-2xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                        {cta.headline}
                    </h2>
                    <p className="text-muted-foreground mb-8">
                        {cta.body}
                    </p>
                    <Link
                        href={cta.href}
                        className="btn-primary"
                        target={ctaExternal ? "_blank" : undefined}
                        rel={ctaExternal ? "noopener noreferrer" : undefined}
                    >
                        {cta.ctaText}
                    </Link>
                </AnimatedSection>
            </Section>
        </>
    );
}





