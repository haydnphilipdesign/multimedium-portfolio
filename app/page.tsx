import type { Metadata } from "next";
import { StatementHero } from "@/components/hero/StatementHero";
import { Section, SectionHeading } from "@/components/sections/Section";
import { ProjectCard } from "@/components/work/ProjectCard";
import { getHomeFeaturedProjects, projects } from "@/content/projects";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/motion/AnimatedSection";
import { HowItWorks } from "@/components/marketing/HowItWorks";
import Link from "next/link";
import {
    IconLayout,
    IconCode,
    IconChartLine,
    IconArrowRight,
    IconBolt,
    IconShieldCheck,
    IconBulb,
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
        description:
            "A professional website system that explains what you do, builds trust fast, and turns visits into inquiries.",
        href: "/services/website",
        features: ["Messaging + page plan", "Custom design with real copy", "Fast, SEO-friendly build + analytics"],
        timeline: "4–6 weeks",
        cta: "See website scope",
    },
    {
        icon: IconCode,
        title: "Landing Pages + Funnels",
        description:
            "Focused pages for offers and campaigns—built to capture leads, bookings, and sign-ups.",
        href: "/services/landing-pages",
        features: ["Offer + messaging refinement", "Conversion-first layout + copy help", "Forms, tracking, and follow-up"],
        timeline: "1–3 weeks",
        cta: "See landing-page scope",
    },
    {
        icon: IconChartLine,
        title: "Growth Retainers",
        description:
            "Ongoing improvements so your site keeps getting clearer, faster, and higher-converting after launch.",
        href: "/services/growth-retainers",
        features: ["Monthly priorities + reporting", "SEO + landing pages", "Design + dev support as you grow"],
        timeline: "Ongoing",
        cta: "See retainer scope",
    },
];

const pillars = [
    {
        title: "Design that wins trust fast",
        description: "Messaging and layout built for clarity—so visitors understand you quickly and feel confident reaching out.",
    },
    {
        title: "A site that loads fast",
        description: "Mobile-first, quick to load, and built to be easy to update—without breaking the design.",
    },
    {
        title: "More inquiries over time",
        description: "Analytics + small improvements that turn more of your traffic into the kind of leads you want.",
    },
];

const niches = [
    {
        title: "Local Service Businesses",
        description:
            "Trust-first sites designed to turn search traffic into calls, quote requests, and appointments.",
        href: "/industries/trades",
        cta: "See service work",
    },
    {
        title: "Real Estate Ops",
        description:
            "Authority-first messaging and lead flows that help filter for fit and drive booked calls.",
        href: "/industries/transaction-coordinators",
        cta: "See real estate work",
    },
    {
        title: "SaaS + Tech",
        description:
            "Conversion-focused pages that turn interest into demos, trials, and qualified sales calls.",
        href: "/work/utility-sheet",
        cta: "See SaaS work",
    },
];

export default function HomePage() {
    const featuredProjects = getHomeFeaturedProjects();
    const featuredGridCols = featuredProjects.length === 4 ? "lg:grid-cols-2" : "lg:grid-cols-3";
    const clientProjectCount = projects.filter((project) => project.kind === "Client").length;
    const proof = [
        {
            icon: IconBolt,
            value: `${clientProjectCount}`,
            label: "Client projects in portfolio",
            detail: "Portfolio snapshot, 2026",
        },
        {
            icon: IconBulb,
            value: "4–6 weeks",
            label: "Typical launch timeline",
            detail: "Plan -> design -> build -> polish",
        },
        {
            icon: IconShieldCheck,
            value: "3 lanes",
            label: "Core industry focus",
            detail: "TCs, local services, and home services",
        },
    ];

    return (
        <>
            {/* Hero Section */}
            <StatementHero />

            {/* Proof Points */}
            <Section className="relative -mt-8 z-10 sm:-mt-10 md:-mt-12" padding="none">
                <AnimatedSection>
                    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                        {proof.map((item) => (
                            <div
                                key={item.label}
                                className="rounded-2xl border border-border/70 bg-card/85 px-5 py-4 shadow-[var(--shadow-soft)] backdrop-blur-sm"
                            >
                                <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                                    <item.icon className="h-4 w-4 text-glow" stroke={1.5} />
                                    {item.value}
                                </div>
                                <p className="mt-1 text-sm text-muted-foreground">{item.label}</p>
                                <p className="mt-2 text-xs text-muted-foreground/80">{item.detail}</p>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>
            </Section>

            {/* Specialties */}
            <Section className="pt-10 md:pt-14" padding="none">
                <AnimatedSection>
                    <div className="max-w-3xl">
                        <span className="inline-flex items-center rounded-full border border-glow/25 bg-glow/10 px-3 py-1 text-xs font-medium text-foreground">
                            Specialty lanes
                        </span>
                        <h2 className="mt-4 text-2xl font-bold text-foreground md:text-4xl">
                            Industries I specialize in
                        </h2>
                        <p className="mt-3 text-muted-foreground">
                            Proven systems for local service businesses, real estate teams, and growth-stage SaaS—with the same conversion-first approach across all industries.
                        </p>
                    </div>
                </AnimatedSection>

                <StaggerContainer className="mt-8 grid gap-6 md:grid-cols-3" staggerDelay={0.08}>
                    {niches.map((niche) => (
                        <StaggerItem key={niche.title}>
                            <Link
                                href={`${niche.href}?source=home-niche`}
                                className="group block h-full rounded-2xl border border-border/70 bg-card/85 p-7 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:border-glow/35 hover:shadow-[var(--shadow-elevated)]"
                            >
                                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                                    Specialty
                                </p>
                                <h3 className="mt-3 text-2xl font-semibold text-foreground">
                                    {niche.title}
                                </h3>
                                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                                    {niche.description}
                                </p>
                                <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-accent-strong transition-colors">
                                    {niche.cta} <IconArrowRight className="w-4 h-4" stroke={2} />
                                </div>
                            </Link>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </Section>

            {/* Featured Work Section */}
            <Section id="work" className="relative">
                <div className="grain absolute inset-0 pointer-events-none" />
                <AnimatedSection>
                    <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                        <div className="max-w-2xl">
                            <span className="inline-flex items-center rounded-full border border-border/70 bg-card/80 px-3 py-1 text-xs font-medium text-muted-foreground">
                                Selected work
                            </span>
                            <h2 className="mt-4 text-3xl font-bold text-foreground md:text-4xl">Case studies with measurable intent</h2>
                            <p className="mt-3 text-muted-foreground">
                                A few recent builds—each one designed to earn trust, communicate value, and make reaching out feel like the obvious next step.
                            </p>
                        </div>
                        <Link
                            href="/work"
                            className="group inline-flex items-center gap-2 text-foreground transition-colors hover:text-accent-strong"
                        >
                            <span className="font-medium">Browse case studies</span>
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

            {/* What I Build Section */}
            <Section className="relative rounded-[2rem] bg-muted/35">
                <div className="grain absolute inset-0 pointer-events-none" />
                <div className="grid gap-10 md:grid-cols-[1.15fr_0.85fr]">
                    <AnimatedSection>
                        <div className="space-y-4">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-glow/10 text-foreground border border-glow/25">
                                What I build
                            </span>
                            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                                A site system, not just a pretty homepage
                            </h2>
                            <p className="text-muted-foreground">
                                You get a clean, consistent system—not a one-off page. It’s built to be updated, extended, and improved without turning into a patchwork.
                            </p>
                            <div className="pt-2">
                                <p className="text-sm font-medium text-foreground mb-3">Great fit if:</p>
                                <ul className="grid gap-2 text-sm text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-glow mt-1.5" />
                                        You want more inquiries, not just a prettier homepage.
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-glow mt-1.5" />
                                        Your current site feels outdated, unclear, or hard to edit.
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-glow mt-1.5" />
                                        You want one person to handle strategy, design, and build.
                                    </li>
                                </ul>
                            </div>
                            <div className="pt-4">
                                <div className="rounded-2xl border border-border/65 bg-card/88 p-5 shadow-[var(--shadow-soft)]">
                                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                                        System snapshot
                                    </p>
                                    <p className="mt-2 text-sm text-muted-foreground">
                                        Every build ships with consistent sections, clear CTAs, and reusable blocks so new pages can be added without starting from scratch.
                                    </p>
                                    <div className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
                                        <p className="rounded-xl border border-border/60 bg-background/75 px-3 py-2 text-foreground">
                                            Page templates
                                        </p>
                                        <p className="rounded-xl border border-border/60 bg-background/75 px-3 py-2 text-foreground">
                                            Reusable CTA bands
                                        </p>
                                        <p className="rounded-xl border border-border/60 bg-background/75 px-3 py-2 text-foreground">
                                            Proof + trust blocks
                                        </p>
                                        <p className="rounded-xl border border-border/60 bg-background/75 px-3 py-2 text-foreground">
                                            Growth-ready analytics
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                    <StaggerContainer className="grid gap-3" staggerDelay={0.1}>
                        {pillars.map((pillar) => (
                            <StaggerItem key={pillar.title}>
                                <div className="rounded-2xl border border-border/65 bg-card/88 px-6 py-5 shadow-[var(--shadow-soft)]">
                                    <p className="font-semibold text-foreground">{pillar.title}</p>
                                    <p className="mt-2 text-sm text-muted-foreground">{pillar.description}</p>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </Section>

            {/* Services Section */}
            <Section>
                <AnimatedSection>
                    <SectionHeading
                        title="Services"
                        subtitle="Flexible engagements for different budgets and timelines. Same standards, right-sized scope based on what you need now."
                        align="center"
                    />
                </AnimatedSection>

                <StaggerContainer className="grid gap-6 sm:gap-8 md:grid-cols-3" staggerDelay={0.15}>
                    {services.map((service) => (
                        <StaggerItem key={service.title}>
                            <div className="group relative h-full rounded-2xl border border-border/70 bg-card/90 p-6 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:border-glow/35 hover:shadow-[var(--shadow-elevated)] sm:p-8">
                                {/* Icon */}
                                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                                    <service.icon className="w-6 h-6" stroke={1.5} />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-semibold text-foreground mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-muted-foreground mb-6 text-sm">
                                    {service.description}
                                </p>

                                {/* Features */}
                                <ul className="space-y-2 mb-6">
                                    {service.features.map((feature) => (
                                        <li
                                            key={feature}
                                            className="text-sm text-muted-foreground flex items-start gap-2"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-glow mt-1.5" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <p className="text-xs text-muted-foreground font-mono">
                                    Typical timeline: {service.timeline}
                                </p>

                                <Link
                                    href={`${service.href}?source=home-services`}
                                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent-strong transition-colors group-hover:translate-x-0"
                                >
                                    {service.cta} <IconArrowRight className="w-4 h-4" stroke={2} />
                                </Link>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </Section>

            {/* How It Works */}
            <Section className="bg-muted/30">
                <HowItWorks contactSource="home-how-it-works" />
            </Section>

            {/* CTA Section */}
            <Section className="relative overflow-hidden rounded-[2rem] border border-border/60 bg-card/70" padding="large">
                <div className="grain absolute inset-0 pointer-events-none" />
                {/* Background gradient */}
                <div className="absolute inset-0 bg-hero-gradient opacity-60" />

                <AnimatedSection className="relative z-10 text-center max-w-3xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
                        Ready for a high-trust
                        <br />
                        <span className="text-gradient">business website?</span>
                    </h2>
                    <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
                        Tell me what you&apos;re building and what success looks like. I&apos;ll reply within one business day with next steps and a clear plan.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact?source=home-cta" className="btn-primary">
                            Talk about your project
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
