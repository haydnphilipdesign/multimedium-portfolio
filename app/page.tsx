import { StatementHero } from "@/components/hero/StatementHero";
import { Section, SectionHeading } from "@/components/sections/Section";
import { ProjectCard } from "@/components/work/ProjectCard";
import { getFeaturedProjects } from "@/content/projects";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/motion/AnimatedSection";
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

const services = [
    {
        icon: IconLayout,
        title: "Website Build / Redesign",
        description:
            "A premium, conversion-focused website with a reusable design system and a clean Next.js build behind it.",
        features: ["Positioning workshop + page plan", "High-fidelity design with real copy", "Next.js build, SEO foundations, analytics"],
        timeline: "4–6 weeks",
    },
    {
        icon: IconCode,
        title: "Landing Pages + Funnels",
        description:
            "Campaign-ready pages, lead magnets, and contact flows that make taking the next step feel effortless.",
        features: ["Offer + messaging refinement", "Conversion-first layout + copy support", "Forms, tracking, and follow-up automation"],
        timeline: "1–3 weeks",
    },
    {
        icon: IconChartLine,
        title: "Growth Retainers",
        description:
            "SEO, content, and conversion experiments on a predictable cadence—so your site keeps improving after launch.",
        features: ["Monthly/quarterly experiments + reporting", "SEO roadmap + landing pages", "Design + dev support as you grow"],
        timeline: "Ongoing",
    },
];

const proof = [
    {
        icon: IconBolt,
        value: "4-6 weeks",
        label: "typical launch timeline",
        detail: "Strategy → Design → Build → QA",
    },
    {
        icon: IconShieldCheck,
        value: "95+",
        label: "Lighthouse scores",
        detail: "Performance + accessibility",
    },
    {
        icon: IconBulb,
        value: "Systems",
        label: "that scale with you",
        detail: "Design system + components",
    },
];

const pillars = [
    {
        title: "Design that wins trust fast",
        description: "Messaging, layout, and UI decisions built around clarity, credibility, and the next click.",
    },
    {
        title: "Development that stays fast",
        description: "Modern Next.js builds with clean architecture, solid SEO foundations, and a smooth editing workflow.",
    },
    {
        title: "Conversion, SEO, and iteration",
        description: "Analytics, experiments, and landing pages that turn traffic into leads you actually want.",
    },
];

export default function HomePage() {
    const featuredProjects = getFeaturedProjects();
    const featuredGridCols = featuredProjects.length === 4 ? "lg:grid-cols-2" : "lg:grid-cols-3";

    return (
        <>
            {/* Hero Section */}
            <StatementHero />

            {/* Proof Points */}
            <Section className="relative -mt-16 z-20" padding="none">
                <AnimatedSection>
                    <div className="grid gap-4 sm:grid-cols-3">
                        {proof.map((item) => (
                            <div
                                key={item.label}
                                className="rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm px-5 py-4"
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

            {/* Featured Work Section */}
            <Section id="work" className="relative">
                <div className="grain absolute inset-0 pointer-events-none" />
                <AnimatedSection>
                    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-12">
                        <div className="max-w-2xl">
                            <h2 className="text-3xl font-bold text-foreground md:text-4xl">Selected Work</h2>
                            <p className="mt-2 text-muted-foreground">
                                A few recent builds—each one designed to earn trust, communicate value, and make contacting you feel like the obvious next step.
                            </p>
                        </div>
                        <Link
                            href="/work"
                            className="inline-flex items-center gap-2 text-foreground hover:text-glow transition-colors group"
                        >
                            <span className="font-medium">Browse case studies</span>
                            <IconArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" stroke={2} />
                        </Link>
                    </div>
                </AnimatedSection>

                <div className={`grid gap-8 md:grid-cols-2 ${featuredGridCols}`}>
                    {featuredProjects.map((project, index) => (
                        <ProjectCard key={project.slug} project={project} index={index} />
                    ))}
                </div>
            </Section>

            {/* What I Build Section */}
            <Section className="relative bg-muted/30">
                <div className="grain absolute inset-0 pointer-events-none" />
                <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
                    <AnimatedSection>
                        <div className="space-y-4">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-glow/10 text-glow border border-glow/20">
                                What I build
                            </span>
                            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                                A portfolio-grade site that still behaves like a sales machine
                            </h2>
                            <p className="text-muted-foreground">
                                You get a clean system—not a one-off page. Everything is built to be edited, extended, and iterated without the site collapsing into chaos.
                            </p>
                        </div>
                    </AnimatedSection>
                    <StaggerContainer className="grid gap-3" staggerDelay={0.1}>
                        {pillars.map((pillar) => (
                            <StaggerItem key={pillar.title}>
                                <div className="rounded-2xl border border-border/50 bg-card px-6 py-5">
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
                        subtitle="Strategy-led design and development built as one system. Ship fast, stay consistent, keep growing."
                        align="center"
                    />
                </AnimatedSection>

                <StaggerContainer className="grid gap-8 md:grid-cols-3" staggerDelay={0.15}>
                    {services.map((service) => (
                        <StaggerItem key={service.title}>
                            <div className="group relative p-8 rounded-2xl bg-card border border-border/50 h-full transition-all duration-300 hover:border-glow/30 hover:shadow-lg hover:shadow-glow/5">
                                {/* Icon */}
                                <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
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
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </Section>

            {/* CTA Section */}
            <Section className="relative overflow-hidden" padding="large">
                <div className="grain absolute inset-0 pointer-events-none" />
                {/* Background gradient */}
                <div className="absolute inset-0 bg-hero-gradient opacity-50" />

                <AnimatedSection className="relative z-10 text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
                        Ready to build a site that
                        <br />
                        <span className="text-gradient">actually converts?</span>
                    </h2>
                    <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
                        Tell me what you&apos;re building, what you want the site to do, and what constraints we should respect. I&apos;ll reply with a plan and timeline within one business day.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="btn-primary">
                            Start a Project
                        </Link>
                        <Link href="/about" className="btn-secondary">
                            Learn About My Process
                        </Link>
                    </div>
                </AnimatedSection>
            </Section>
        </>
    );
}
