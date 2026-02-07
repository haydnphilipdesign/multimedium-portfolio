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
    IconBolt,
    IconTargetArrow,
} from "@tabler/icons-react";

export const metadata: Metadata = {
    title: "Growth Retainers",
    description:
        "Ongoing improvements so your website keeps getting clearer, faster, and higher-converting after launch.",
    alternates: {
        canonical: "/services/growth-retainers",
    },
};

const included = [
    "Monthly / quarterly experiment plan",
    "Landing pages + conversion improvements",
    "SEO roadmap + content support",
    "Reporting that ties to leads, not vanity metrics",
    "Design + dev support as you grow",
];

const expectations = [
    { label: "Cadence", value: "Monthly / quarterly" },
    { label: "Focus", value: "Conversion + clarity + SEO" },
    { label: "Reporting", value: "Leads, not vanity metrics" },
];

const fitFor = [
    "Teams with traffic that want more inquiries without a full rebuild",
    "Businesses that prefer steady improvements over big redesigns",
    "Operators who want someone to own the backlog and ship consistently",
];

const faqs = [
    {
        q: "What do you actually do month to month?",
        a: "We keep a clear backlog, pick the highest-impact items, and ship improvements in small, measurable increments: landing pages, SEO fixes, performance, messaging, and conversion flow refinements.",
    },
    {
        q: "Do retainers include design and development?",
        a: "Yes. Retainers are built so you can ship design and dev improvements without starting a new scope each month.",
    },
    {
        q: "Do you handle SEO?",
        a: "I can handle the technical and on-page foundation and help guide content direction. If you want ongoing content production at scale, we can pair it with a writer.",
    },
    {
        q: "How do we measure success?",
        a: "We track conversions that map to revenue: inquiries, booked calls, quote requests, and lead quality. Every month should have a clear goal and result.",
    },
];

export default function GrowthRetainersServicePage() {
    const tag = getProjectBySlug("tag-landing-page");
    const paRes = getProjectBySlug("pa-real-estate-support");
    const featured = [tag, paRes].filter((project): project is Project => Boolean(project));

    return (
        <>
            <Section className="pt-28 sm:pt-32 md:pt-40" padding="none">
                <AnimatedSection>
                    <div className="relative overflow-hidden rounded-2xl border border-border/65 bg-card shadow-[var(--shadow-soft)] px-6 py-8 sm:px-8 sm:py-10">
                        <div className="absolute inset-0 bg-hero-gradient opacity-25" />
                        <div className="grain absolute inset-0 pointer-events-none" />

                        <div className="relative grid gap-8 lg:grid-cols-5 lg:items-end">
                            <div className="lg:col-span-3 space-y-6">
                                <Link href="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                    ← Back to services
                                </Link>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                                    Growth retainers
                                </h1>
                                <p className="text-lg text-muted-foreground max-w-2xl">
                                    For teams that want steady post-launch growth. Keep improving conversion, SEO, and clarity with a reliable monthly cadence.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <Link href="/contact?source=services-retainer" className="btn-primary">
                                        Talk about your project
                                    </Link>
                                    <Link href="/work?source=services-retainer" className="btn-secondary inline-flex items-center gap-2">
                                        View work <IconArrowRight className="w-4 h-4" stroke={2} />
                                    </Link>
                                </div>
                            </div>

                            <div className="lg:col-span-2">
                                <div className="rounded-2xl border border-border/65 bg-background/55 backdrop-blur-sm p-6">
                                    <p className="text-sm font-semibold text-foreground">Built for steady wins</p>
                                    <div className="mt-4 grid gap-3">
                                        {expectations.map((item) => (
                                            <div
                                                key={item.label}
                                                className="flex items-start justify-between gap-4 rounded-xl border border-border/65 bg-card/55 px-4 py-3"
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
                        <div className="rounded-2xl border border-border/65 bg-card shadow-[var(--shadow-soft)] p-6">
                            <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-border/65 bg-muted/50 text-glow">
                                <IconTargetArrow className="w-5 h-5" stroke={1.5} />
                            </div>
                            <p className="mt-4 text-sm font-semibold text-foreground">A clear backlog</p>
                            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                                Every month has a plan: what we ship, why it matters, and how we measure it.
                            </p>
                        </div>
                        <div className="rounded-2xl border border-border/65 bg-card shadow-[var(--shadow-soft)] p-6">
                            <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-border/65 bg-muted/50 text-glow">
                                <IconBolt className="w-5 h-5" stroke={1.5} />
                            </div>
                            <p className="mt-4 text-sm font-semibold text-foreground">Ship small, often</p>
                            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                                Improvements go live in small increments so you learn faster and avoid big-bang launches.
                            </p>
                        </div>
                        <div className="rounded-2xl border border-border/65 bg-card shadow-[var(--shadow-soft)] p-6">
                            <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-border/65 bg-muted/50 text-glow">
                                <IconChartBar className="w-5 h-5" stroke={1.5} />
                            </div>
                            <p className="mt-4 text-sm font-semibold text-foreground">Tie work to leads</p>
                            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                                Reporting stays grounded in conversions and lead quality - not vanity metrics.
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
                            <div className="flex items-start gap-3 p-5 rounded-2xl bg-card border border-border/65">
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
                        <div className="rounded-2xl border border-border/65 bg-card shadow-[var(--shadow-soft)] p-7">
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
                        <div className="rounded-2xl border border-border/65 bg-card shadow-[var(--shadow-soft)] p-7">
                            <h3 className="text-xl font-semibold text-foreground">Best results when</h3>
                            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-glow mt-2" />
                                    You have baseline traffic and want stronger conversion over time.
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-glow mt-2" />
                                    Your team can review priorities monthly and approve incremental updates.
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-glow mt-2" />
                                    You want outcomes tied to leads and pipeline quality, not vanity metrics.
                                </li>
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
                                    The kind of work we iterate on
                                </h2>
                                <p className="mt-2 text-muted-foreground">
                                    Landing pages, conversion flows, and authority-first improvements that make the site perform better over time.
                                </p>
                            </div>
                            <Link
                                href="/work?source=services-retainer"
                                className="inline-flex items-center gap-2 text-foreground hover:text-accent-strong transition-colors group"
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

            <Section className="rounded-[2rem] bg-muted/35">
                <div className="grid gap-10 md:grid-cols-2">
                    <AnimatedSection>
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                            Cadence
                        </h2>
                        <p className="text-muted-foreground">
                            Typical retainers run monthly with clear priorities, a defined backlog, and work shipped in small, measurable increments.
                        </p>
                    </AnimatedSection>
                    <AnimatedSection delay={0.1}>
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                            Budget guidance
                        </h2>
                        <p className="text-muted-foreground">
                            Retainers are scoped around monthly outcomes and available capacity. After a quick audit, I&apos;ll propose a plan and range that matches your runway.
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
                        A few common questions about cadence, scope, and how we measure results.
                    </p>
                </AnimatedSection>

                <StaggerContainer className="grid gap-4 md:grid-cols-2 mt-8" staggerDelay={0.08}>
                    {faqs.map((item) => (
                        <StaggerItem key={item.q}>
                            <div className="rounded-2xl border border-border/65 bg-card shadow-[var(--shadow-soft)] p-7">
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
                        Want your site to keep improving after launch?
                    </h2>
                    <p className="text-muted-foreground mb-8">
                        If you have traffic but not enough inquiries, a retainer is a simple way to ship steady improvements without starting from scratch each month.
                    </p>
                    <Link href="/contact?source=services-retainer-cta" className="btn-primary">
                        Talk about your project
                    </Link>
                </AnimatedSection>
            </Section>
        </>
    );
}





