import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/sections/Section";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/motion/AnimatedSection";
import { ProjectCard } from "@/components/work/ProjectCard";
import { getProjectBySlug, type Project } from "@/content/projects";
import { createPageMetadata } from "@/lib/seo";
import {
    IconCheck,
    IconArrowRight,
    IconChartBar,
    IconPlugConnected,
    IconTargetArrow,
} from "@tabler/icons-react";

export const metadata: Metadata = createPageMetadata({
    title: "Landing Pages and Funnels",
    description:
        "Focused landing pages and simple funnels built to capture leads, bookings, and sign-ups for niche service businesses and real estate offers.",
    path: "/services/landing-pages",
    keywords: [
        "landing page design service",
        "lead generation landing page",
        "real estate landing page design",
    ],
});

const included = [
    "Offer + messaging refinement",
    "Focused layout + copy help",
    "Forms + tracking + follow-up",
    "A/B-ready sections and components",
    "Fast iteration cadence (ship → learn → improve)",
];

const expectations = [
    { label: "Primary conversion", value: "Leads, bookings, sign-ups" },
    { label: "Typical timeline", value: "1–3 weeks" },
    { label: "Tracking-ready", value: "Analytics + conversion events" },
];

const faqs = [
    {
        q: "Can you help with copy and positioning?",
        a: "Yes. A landing page only works when the offer is obvious. I will help refine the message and structure so it reads cleanly and converts.",
    },
    {
        q: "Do you set up tracking?",
        a: "Yes. I can wire up analytics and conversion events so you can see what is producing leads, not just clicks.",
    },
    {
        q: "Can we run A/B tests?",
        a: "Yes. We can ship variants and test hero messaging, offers, and form friction. The goal is to learn quickly and improve conversion over time.",
    },
    {
        q: "Do you build the follow-up flow too?",
        a: "If you want it. I can route leads into your CRM, email tool, or scheduling stack so follow-up happens fast and consistently.",
    },
];

export default function LandingPagesServicePage() {
    const tag = getProjectBySlug("tag-landing-page");
    const northpoint = getProjectBySlug("northpoint-realty");
    const paRes = getProjectBySlug("pa-real-estate-support");
    const featured = [tag, northpoint, paRes].filter((project): project is Project => Boolean(project));

    return (
        <>
            <Section className="pt-28 sm:pt-32 md:pt-40" padding="none">
                <AnimatedSection>
                    <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card shadow-[var(--shadow-soft)] px-6 py-8 sm:px-8 sm:py-10">

                        <div className="relative grid gap-8 lg:grid-cols-5 lg:items-end">
                            <div className="lg:col-span-3 space-y-6">
                                <Link href="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                    ← Back to services
                                </Link>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                                    Landing pages + funnels
                                </h1>
                                <p className="text-lg text-muted-foreground max-w-2xl">
                                    A focused-scope option for launches, offers, and campaigns - ideal when you need results faster than a full site build.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <Link href="/contact?source=services-landing-pages" className="btn-primary">
                                        Plan your landing page
                                    </Link>
                                    <Link href="/work?source=services-landing-pages" className="btn-secondary inline-flex items-center gap-2">
                                        See examples <IconArrowRight className="w-4 h-4" stroke={2} />
                                    </Link>
                                </div>
                            </div>

                            <div className="lg:col-span-2">
                                <div className="rounded-2xl border border-border/60 bg-background/55 backdrop-blur-sm p-6">
                                    <p className="text-sm font-semibold text-foreground">Built for high-intent traffic</p>
                                    <div className="mt-4 grid gap-3">
                                        {expectations.map((item) => (
                                            <div
                                                key={item.label}
                                                className="flex items-start justify-between gap-4 rounded-xl border border-border/60 bg-card/55 px-4 py-3"
                                            >
                                                <p className="text-xs font-medium text-muted-foreground">{item.label}</p>
                                                <p className="text-sm font-semibold text-foreground text-right">{item.value}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>
            </Section>

            <Section className="pt-10 md:pt-14" padding="none">
                <AnimatedSection direction="none" delay={0.02}>
                    <div className="grid gap-4 sm:grid-cols-3">
                        <div className="rounded-2xl border border-border/60 bg-card shadow-[var(--shadow-soft)] p-6">
                            <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-border/60 bg-muted/50 text-primary">
                                <IconTargetArrow className="w-5 h-5" stroke={1.5} />
                            </div>
                            <p className="mt-4 text-sm font-semibold text-foreground">One clear action</p>
                            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                                The page stays focused on one conversion goal: call, book, sign up, or request a quote.
                            </p>
                        </div>
                        <div className="rounded-2xl border border-border/60 bg-card shadow-[var(--shadow-soft)] p-6">
                            <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-border/60 bg-muted/50 text-primary">
                                <IconChartBar className="w-5 h-5" stroke={1.5} />
                            </div>
                            <p className="mt-4 text-sm font-semibold text-foreground">Measure what matters</p>
                            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                                Tracking ties to leads and bookings so you can improve conversion with confidence.
                            </p>
                        </div>
                        <div className="rounded-2xl border border-border/60 bg-card shadow-[var(--shadow-soft)] p-6">
                            <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-border/60 bg-muted/50 text-primary">
                                <IconPlugConnected className="w-5 h-5" stroke={1.5} />
                            </div>
                            <p className="mt-4 text-sm font-semibold text-foreground">Fast follow-up</p>
                            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                                Route leads into your inbox, calendar, or CRM so you respond before they keep shopping.
                            </p>
                        </div>
                    </div>
                </AnimatedSection>
            </Section>

            <Section>
                <AnimatedSection>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                        What&apos;s included
                    </h2>
                </AnimatedSection>

                <StaggerContainer className="grid gap-4 md:grid-cols-2" staggerDelay={0.1}>
                    {included.map((item) => (
                        <StaggerItem key={item}>
                            <div className="flex items-start gap-3 p-5 rounded-2xl bg-card border border-border/60">
                                <IconCheck className="w-5 h-5 text-primary mt-0.5" stroke={2} />
                                <p className="text-sm text-muted-foreground">{item}</p>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </Section>

            {featured.length > 0 ? (
                <Section className="pt-10 md:pt-14" padding="none">
                    <AnimatedSection>
                        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-10">
                            <div className="max-w-2xl">
                                <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                                    Recent landing page work
                                </h2>
                                <p className="mt-2 text-muted-foreground">
                                    Focused builds that prioritize one action and a clean conversion path.
                                </p>
                            </div>
                            <Link
                                href="/work?source=services-landing-pages"
                                className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors group"
                            >
                                <span className="font-medium">Browse all case studies</span>
                                <IconArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" stroke={2} />
                            </Link>
                        </div>
                    </AnimatedSection>

                    <div className={`grid gap-6 sm:gap-8 md:grid-cols-2 ${featured.length === 4 ? "lg:grid-cols-2" : "lg:grid-cols-3"}`}>
                        {featured.map((project, index) => (
                            <ProjectCard key={project.slug} project={project} index={index} />
                        ))}
                    </div>
                </Section>
            ) : null}

            <Section className="rounded-2xl bg-muted/35">
                <div className="grid gap-10 md:grid-cols-2">
                    <AnimatedSection>
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                            Timeline
                        </h2>
                        <p className="text-muted-foreground">
                            Most landing page engagements ship in 1–3 weeks depending on scope, assets, and review cadence.
                        </p>
                    </AnimatedSection>
                    <AnimatedSection delay={0.1}>
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                            Budget guidance
                        </h2>
                        <p className="text-muted-foreground">
                            Landing pages start at $750 depending on copy, assets, variants, and integrations — making them the most accessible starting point.
                        </p>
                    </AnimatedSection>
                </div>
            </Section>

            <Section className="pt-10 md:pt-14" padding="none">
                <AnimatedSection>
                    <div className="mb-6">
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                            FAQ
                        </h2>
                    </div>
                    <p className="text-muted-foreground max-w-2xl">
                        A few common questions about landing pages, tracking, and iteration.
                    </p>
                </AnimatedSection>

                <StaggerContainer className="grid gap-4 md:grid-cols-2 mt-8" staggerDelay={0.08}>
                    {faqs.map((item) => (
                        <StaggerItem key={item.q}>
                            <div className="rounded-2xl border border-border/60 bg-card shadow-[var(--shadow-soft)] p-7">
                                <h3 className="text-lg font-semibold text-foreground">{item.q}</h3>
                                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.a}</p>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </Section>

            <Section className="border-t border-border/40">
                <AnimatedSection className="text-center max-w-2xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                        Need a landing page that actually gets responses?
                    </h2>
                    <p className="text-muted-foreground mb-8">
                        Share the offer, the audience, and where you want the traffic to go. I’ll reply with a simple plan and timeline within one business day.
                    </p>
                    <Link href="/contact?source=services-landing-pages-cta" className="btn-primary">
                        Plan your landing page
                    </Link>
                </AnimatedSection>
            </Section>
        </>
    );
}



