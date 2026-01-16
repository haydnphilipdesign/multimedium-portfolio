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

    return {
        title: project.title,
        description: project.description,
        alternates: {
            canonical: `/work/${project.slug}`,
        },
        openGraph: {
            title: project.title,
            description: project.description,
            url: `/work/${project.slug}`,
            images: [project.heroImage],
        },
        twitter: {
            card: "summary_large_image",
            title: project.title,
            description: project.description,
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

    // Get adjacent projects for navigation
    const currentIndex = projects.findIndex((p) => p.slug === slug);
    const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
    const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

    const toolsSummary =
        project.tools.length <= 3
            ? project.tools.join(", ")
            : `${project.tools.slice(0, 3).join(", ")} +${project.tools.length - 3} more`;

    return (
        <>
            {/* Hero Section */}
            <section className="relative pt-28 sm:pt-32 md:pt-40 pb-16 md:pb-24">
                <div className="grain absolute inset-0 pointer-events-none" />

                {/* Background accent */}
                <div
                    className="absolute top-0 left-0 right-0 h-[60vh] opacity-20"
                    style={{
                        background: `radial-gradient(ellipse 80% 50% at 50% 0%, ${project.color}40, transparent)`,
                    }}
                />

                <Section size="wide" padding="none" className="relative z-10">
                    <AnimatedSection>
                        <Link
                            href="/work"
                            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
                        >
                            <IconArrowLeft className="w-4 h-4" stroke={1.5} />
                            Back to Work
                        </Link>
                    </AnimatedSection>

                    <AnimatedSection delay={0.1}>
                        <div className="flex items-center gap-3 mb-6">
                            <span
                                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border"
                                style={{
                                    borderColor: `${project.color}50`,
                                    backgroundColor: `${project.color}10`,
                                    color: project.color,
                                }}
                            >
                                {project.category}
                            </span>
                            <span className="text-sm text-muted-foreground">{project.year}</span>
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
                                    Tools
                                </p>
                                <p className="text-sm font-medium text-foreground">
                                    {toolsSummary}
                                </p>
                            </div>
                        </div>
                    </AnimatedSection>
                </Section>
            </section>

            {/* Hero Image */}
            <Section size="wide" padding="none" className="mb-16 md:mb-24">
                <AnimatedSection>
                    <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-muted border border-border/50">
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

            {/* Overview Section */}
            <Section>
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

            {/* Process Section */}
            {project.process.length > 0 && (
                <Section className="bg-muted/30">
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
                                                    className="flex items-center justify-center w-10 h-10 rounded-full text-sm font-bold"
                                                    style={{
                                                        backgroundColor: `${project.color}20`,
                                                        color: project.color,
                                                    }}
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
                                            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-muted border border-border/50">
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
                                                            background: `linear-gradient(135deg, ${project.color}15, ${project.color}05)`,
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
                <Section>
                    <AnimatedSection>
                        <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
                            Results & Impact
                        </h2>
                    </AnimatedSection>

                    <StaggerContainer className="grid gap-6 sm:gap-8 md:grid-cols-3" staggerDelay={0.1}>
                        {project.outcomes.map((outcome, index) => (
                            <StaggerItem key={index}>
                                <div className="text-center p-6 sm:p-8 rounded-2xl bg-card border border-border/50">
                                    <p
                                        className="text-4xl md:text-5xl font-bold mb-2"
                                        style={{ color: project.color }}
                                    >
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
                <Section className="bg-muted/30">
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
            <Section className="border-t border-border/40">
                <AnimatedSection className="text-center max-w-2xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                        Interested in working together?
                    </h2>
                    <p className="text-muted-foreground mb-8">
                        Let&apos;s discuss how I can help bring your next project to life.
                    </p>
                    <Link href={`/contact?source=case-study-${project.slug}`} className="btn-primary">
                        Start a Conversation
                    </Link>
                </AnimatedSection>
            </Section>
        </>
    );
}
