import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/sections/Section";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/motion/AnimatedSection";
import { ProjectCard } from "@/components/work/ProjectCard";
import { getProjectBySlug, type Project } from "@/content/projects";
import {
    IconCheck,
    IconArrowRight,
    IconChartBar,
    IconPlugConnected,
    IconSparkles,
    IconTargetArrow,
} from "@tabler/icons-react";

export const metadata: Metadata = {
    title: "Landing Pages + Funnels",
    description:
        "Focused landing pages and simple funnels built to capture leads, bookings, and sign-ups.",
    alternates: {
        canonical: "/services/landing-pages",
    },
};

const included = [
    "Offer + messaging refinement",
    "Conversion-first layout + copy help",
    "Forms + tracking + follow-up",
    "A/B-ready sections and components",
    "Fast iteration cadence (ship → learn → improve)",
];

const expectations = [
    { label: "Primary conversion", value: "Leads, bookings, sign-ups" },
    { label: "Typical timeline", value: "1-3 weeks" },
    { label: "Tracking-ready", value: "Analytics + conversion events" },
];

const fitFor = [
    "Offers, launches, and campaigns where clarity matters more than content volume",
    "Teams running ads or email campaigns who want higher conversion rates",
    "Service businesses that want fewer low-fit leads and more qualified inquiries",
];

const notFor = [
    "A full multi-page website (use a website build instead)",
    "Projects that need to launch in a few days with no inputs or assets",
    "Anyone who wants volume without measuring lead quality",
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
    const paRes = getProjectBySlug("pa-real-estate-support");
    const featured = [tag, paRes].filter((project): project is Project => Boolean(project));

    return (
        <>
            <Section className="pt-28 sm:pt-32 md:pt-40" padding="none">
                <AnimatedSection>
                    <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card px-6 py-8 sm:px-8 sm:py-10">
                        <div className="absolute inset-0 bg-hero-gradient opacity-25" />
                        <div className="grain absolute inset-0 pointer-events-none" />

                        <div className="relative grid gap-8 lg:grid-cols-5 lg:items-end">
                            <div className="lg:col-span-3 space-y-6">
                                <Link href="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                    ← Back to services
                                </Link>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                                    Landing pages + funnels
                                </h1>
                                <p className="text-lg text-muted-foreground max-w-2xl">
                                    For launches, offers, lead magnets, and campaigns - when you need a page that communicates value fast and captures intent cleanly.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <Link href="/contact?source=services-landing-pages" className="btn-primary">
                                        Talk about your project
                                    </Link>
                                    <Link href="/work?source=services-landing-pages" className="btn-secondary inline-flex items-center gap-2">
                                        See examples <IconArrowRight className="w-4 h-4" stroke={2} />
                                    </Link>
                                </div>
                            </div>

                            <div className="lg:col-span-2">
                                <div className="rounded-2xl border border-border/50 bg-background/40 backdrop-blur-sm p-6">
                                    <p className="text-sm font-semibold text-foreground">Built for high-intent traffic</p>
                                    <div className="mt-4 grid gap-3">
                                        {expectations.map((item) => (
                                            <div
                                                key={item.label}
                                                className="flex items-start justify-between gap-4 rounded-xl border border-border/50 bg-card/40 px-4 py-3"
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
                        <div className="rounded-2xl border border-border/50 bg-card p-6">
                            <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-border/50 bg-muted/50 text-glow">
                                <IconTargetArrow className="w-5 h-5" stroke={1.5} />
                            </div>
                            <p className="mt-4 text-sm font-semibold text-foreground">One clear action</p>
                            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                                The page stays focused on one conversion goal: call, book, sign up, or request a quote.
                            </p>
                        </div>
                        <div className="rounded-2xl border border-border/50 bg-card p-6">
                            <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-border/50 bg-muted/50 text-glow">
                                <IconChartBar className="w-5 h-5" stroke={1.5} />
                            </div>
                            <p className="mt-4 text-sm font-semibold text-foreground">Measure what matters</p>
                            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                                Tracking ties to leads and bookings so you can improve conversion with confidence.
                            </p>
                        </div>
                        <div className="rounded-2xl border border-border/50 bg-card p-6">
                            <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-border/50 bg-muted/50 text-glow">
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
                            <div className="flex items-start gap-3 p-5 rounded-2xl bg-card border border-border/50">
                                <IconCheck className="w-5 h-5 text-glow mt-0.5" stroke={2} />
                                <p className="text-sm text-muted-foreground">{item}</p>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </Section>

            <Section className="pt-10 md:pt-14" padding="none">
                <div className="grid gap-6 md:grid-cols-2">
                    <AnimatedSection>
                        <div className="rounded-2xl border border-border/50 bg-card p-7">
                            <h3 className="text-xl font-semibold text-foreground">Great fit for</h3>
                            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                                {fitFor.map((item) => (
                                    <li key={item} className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-glow mt-2" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </AnimatedSection>
                    <AnimatedSection delay={0.06}>
                        <div className="rounded-2xl border border-border/50 bg-card p-7">
                            <h3 className="text-xl font-semibold text-foreground">Not a fit</h3>
                            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                                {notFor.map((item) => (
                                    <li key={item} className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-glow mt-2" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </AnimatedSection>
                </div>
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
                                className="inline-flex items-center gap-2 text-foreground hover:text-glow transition-colors group"
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

            <Section className="bg-muted/30">
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
                            Landing pages vary widely by complexity (copy, assets, variants, integrations). I&apos;ll propose a range after we confirm the offer and funnel steps.
                        </p>
                    </AnimatedSection>
                </div>
            </Section>

            <Section className="pt-10 md:pt-14" padding="none">
                <AnimatedSection>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-border/50 bg-muted/50 text-glow">
                            <IconSparkles className="w-5 h-5" stroke={1.5} />
                        </div>
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
                            <div className="rounded-2xl border border-border/50 bg-card p-7">
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
                        Talk about your project
                    </Link>
                </AnimatedSection>
            </Section>
        </>
    );
}
