import type { Metadata } from "next";
import { StatementHero } from "@/components/hero/StatementHero";
import { Section } from "@/components/sections/Section";
import { ProjectCard } from "@/components/work/ProjectCard";
import { getHomeFeaturedProjects, projects } from "@/content/projects";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import Link from "next/link";
import {
    IconLayout,
    IconCode,
    IconChartLine,
    IconArrowRight,
    IconQuote,
} from "@tabler/icons-react";

export const metadata: Metadata = {
    alternates: {
        canonical: "/",
    },
};

const services = [
    {
        icon: IconLayout,
        title: "Website Build / Redesign",
        description: "A complete site that explains what you do, earns trust, and turns visitors into inquiries.",
        href: "/services/website",
        timeline: "4–6 weeks",
    },
    {
        icon: IconCode,
        title: "Landing Pages",
        description: "Focused pages for campaigns and offers — built to capture leads and bookings.",
        href: "/services/landing-pages",
        timeline: "1–3 weeks",
    },
    {
        icon: IconChartLine,
        title: "Growth Retainers",
        description: "Ongoing improvements so your site keeps getting clearer and better at bringing in leads.",
        href: "/services/growth-retainers",
        timeline: "Ongoing",
    },
];

function getBestTestimonial() {
    for (const p of projects) {
        if (p.testimonial) return p.testimonial;
    }
    return null;
}

export default function HomePage() {
    const featuredProjects = getHomeFeaturedProjects();
    const featuredGridCols = featuredProjects.length === 4 ? "lg:grid-cols-2" : "lg:grid-cols-3";
    const testimonial = getBestTestimonial();

    return (
        <>
            {/* Hero */}
            <StatementHero />

            {/* Featured Work */}
            <Section id="work" className="relative">
                <div className="grain absolute inset-0 pointer-events-none" />
                <AnimatedSection>
                    <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                        <div className="max-w-2xl">
                            <h2 className="text-3xl font-bold text-foreground md:text-4xl">Recent work</h2>
                            <p className="mt-3 text-muted-foreground">
                                Real projects with clear goals, design decisions, and measurable outcomes.
                            </p>
                        </div>
                        <Link
                            href="/work"
                            className="group inline-flex items-center gap-2 text-foreground transition-colors hover:text-accent-strong"
                        >
                            <span className="font-medium">All case studies</span>
                            <IconArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" stroke={2} />
                        </Link>
                    </div>
                </AnimatedSection>

                <div className={`grid gap-6 sm:gap-8 md:grid-cols-2 ${featuredGridCols}`}>
                    {featuredProjects.map((project, index) => (
                        <ProjectCard key={project.slug} project={project} index={index} />
                    ))}
                </div>
            </Section>

            {/* Services (condensed) */}
            <Section>
                <AnimatedSection>
                    <div className="mb-10 max-w-2xl">
                        <h2 className="text-3xl font-bold text-foreground md:text-4xl">Services</h2>
                        <p className="mt-3 text-muted-foreground">
                            Right-sized scope for different budgets and timelines.
                        </p>
                    </div>
                </AnimatedSection>

                <div className="grid gap-4 md:grid-cols-3">
                    {services.map((service) => (
                        <Link
                            key={service.title}
                            href={service.href}
                            className="group flex flex-col justify-between rounded-2xl border border-border/70 bg-card/90 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-glow/35 hover:shadow-[var(--shadow-elevated)]"
                        >
                            <div>
                                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                                    <service.icon className="w-5 h-5" stroke={1.5} />
                                </div>
                                <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                                <p className="text-sm text-muted-foreground">{service.description}</p>
                            </div>
                            <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground">
                                <span className="font-mono">{service.timeline}</span>
                                <span className="inline-flex items-center gap-1.5 font-medium text-foreground group-hover:text-accent-strong transition-colors">
                                    Learn more <IconArrowRight className="w-3.5 h-3.5" stroke={2} />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </Section>

            {/* Testimonial */}
            {testimonial && (
                <Section className="rounded-[2rem] bg-muted/35">
                    <AnimatedSection className="max-w-3xl mx-auto text-center">
                        <IconQuote className="w-10 h-10 text-glow/30 mx-auto mb-6" stroke={1} />
                        <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed">
                            &ldquo;{testimonial.quote}&rdquo;
                        </blockquote>
                        <div className="mt-6">
                            <p className="font-medium text-foreground">{testimonial.author}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                    </AnimatedSection>
                </Section>
            )}

            {/* CTA */}
            <Section className="relative overflow-hidden rounded-[2rem] border border-border/60 bg-card/70" padding="large">
                <div className="grain absolute inset-0 pointer-events-none" />
                <div className="absolute inset-0 bg-hero-gradient opacity-60" />

                <AnimatedSection className="relative z-10 text-center max-w-3xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
                        Ready for a website that
                        <br />
                        <span className="text-gradient">actually brings in leads?</span>
                    </h2>
                    <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
                        Tell me what you&apos;re working on. I&apos;ll reply within one business day with a clear next step.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact?source=home-cta" className="btn-primary">
                            Start a conversation
                        </Link>
                        <Link href="/work" className="btn-secondary">
                            Browse case studies
                        </Link>
                    </div>
                </AnimatedSection>
            </Section>
        </>
    );
}
