import { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/sections/Section";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/motion/AnimatedSection";
import { HowItWorks } from "@/components/marketing/HowItWorks";
import { projects } from "@/content/projects";
import { IconLayout, IconCode, IconChartLine, IconArrowRight } from "@tabler/icons-react";

export const metadata: Metadata = {
    title: "Services",
    description:
        "Website design + development, landing pages, and growth retainers for small and medium businesses that want more qualified leads.",
    alternates: {
        canonical: "/services",
    },
};

const services = [
    {
        icon: IconLayout,
        title: "Website Build / Redesign",
        description:
            "A professional website that explains what you do, builds trust, and turns visits into inquiries.",
        href: "/services/website",
        timeline: "4–6 weeks",
        cta: "See website scope",
    },
    {
        icon: IconCode,
        title: "Landing Pages + Funnels",
        description:
            "Focused pages for offers and campaigns—built to capture leads, bookings, and sign-ups.",
        href: "/services/landing-pages",
        timeline: "1–3 weeks",
        cta: "See landing-page scope",
    },
    {
        icon: IconChartLine,
        title: "Growth Retainers",
        description:
            "Ongoing improvements so your site keeps getting clearer, faster, and higher-converting after launch.",
        href: "/services/growth-retainers",
        timeline: "Ongoing",
        cta: "See retainer scope",
    },
];

export default function ServicesPage() {
    const clientProjectCount = projects.filter((project) => project.kind === "Client").length;

    return (
        <>
            <Section className="pt-28 sm:pt-32 md:pt-40" padding="none">
                <AnimatedSection>
                    <div className="relative overflow-hidden rounded-[2rem] border border-border/65 bg-card/90 px-6 py-8 shadow-[var(--shadow-elevated)] sm:px-8 sm:py-10">
                        <div className="absolute inset-0 bg-hero-gradient opacity-35" />
                        <div className="grain absolute inset-0 pointer-events-none" />
                        <div className="relative max-w-3xl">
                            <span className="mb-6 inline-flex items-center rounded-full border border-glow/25 bg-glow/10 px-3 py-1 text-xs font-medium text-foreground">
                                Services
                            </span>
                            <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
                                Websites that
                                <br />
                                <span className="text-gradient">turn visitors into inquiries.</span>
                            </h1>
                            <p className="mt-6 text-lg text-muted-foreground">
                                A conversion-focused system refined across local services, real estate, and SaaS—adapted for your business and audience.
                            </p>
                            <div className="mt-7 grid gap-3 sm:grid-cols-3">
                                <div className="rounded-xl border border-border/65 bg-background/70 px-4 py-3">
                                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Portfolio snapshot</p>
                                    <p className="mt-1 text-sm font-medium text-foreground">{clientProjectCount} client projects</p>
                                </div>
                                <div className="rounded-xl border border-border/65 bg-background/70 px-4 py-3">
                                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Typical launch</p>
                                    <p className="mt-1 text-sm font-medium text-foreground">4–6 weeks</p>
                                </div>
                                <div className="rounded-xl border border-border/65 bg-background/70 px-4 py-3">
                                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Core lanes</p>
                                    <p className="mt-1 text-sm font-medium text-foreground">TCs, local services, home services</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>
            </Section>

            <Section className="pt-10 md:pt-14" padding="none">
                <div className="grid gap-6 md:grid-cols-2">
                    <AnimatedSection>
                        <div className="h-full rounded-2xl border border-border/65 bg-card shadow-[var(--shadow-soft)] p-6 sm:p-8">
                            <h2 className="text-lg font-semibold text-foreground mb-4">Great fit if</h2>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-glow mt-1.5" />
                                    You want more inquiries, bookings, or leads from the site.
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-glow mt-1.5" />
                                    Your current site feels outdated, unclear, or slow on mobile.
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-glow mt-1.5" />
                                    You want one person to own strategy, design, and build.
                                </li>
                            </ul>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={0.08}>
                        <div className="h-full rounded-2xl border border-border/65 bg-card shadow-[var(--shadow-soft)] p-6 sm:p-8">
                            <h2 className="text-lg font-semibold text-foreground mb-4">Best results when</h2>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-glow mt-1.5" />
                                    You can support a realistic timeline instead of a rush launch.
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-glow mt-1.5" />
                                    You want clear messaging and conversion structure, not just a template refresh.
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-glow mt-1.5" />
                                    You are ready to review content and give timely decisions.
                                </li>
                            </ul>
                        </div>
                    </AnimatedSection>
                </div>
            </Section>

            <Section className="pt-10 md:pt-14" padding="none">
                <AnimatedSection>
                    <div className="rounded-2xl border border-border/65 bg-card shadow-[var(--shadow-soft)] p-6 sm:p-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <div className="max-w-2xl">
                            <p className="text-sm font-medium text-foreground">Focused recently:</p>
                            <p className="mt-1 text-muted-foreground">
                                Local service businesses, established SMBs, and real estate professionals.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <Link href="/industries/transaction-coordinators?source=services" className="btn-secondary">
                                For transaction coordinators
                            </Link>
                            <Link href="/industries/trades?source=services" className="btn-secondary">
                                For trades
                            </Link>
                        </div>
                    </div>
                </AnimatedSection>
            </Section>

            <Section>
                <AnimatedSection>
                    <SectionHeading
                        title="What I offer"
                        subtitle="Flexible scope for different business stages, with the same level of craft and conversion focus."
                    />
                </AnimatedSection>

                <StaggerContainer className="grid gap-6 sm:gap-8 md:grid-cols-3" staggerDelay={0.12}>
                    {services.map((service) => (
                        <StaggerItem key={service.title}>
                            <Link
                                href={service.href}
                                className="group block h-full relative p-6 sm:p-8 rounded-2xl bg-card border border-border/65 transition-all duration-300 hover:border-glow/30 hover:shadow-lg hover:shadow-glow/5"
                            >
                                <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                                    <service.icon className="w-6 h-6" stroke={1.5} />
                                </div>

                                <h2 className="text-xl font-semibold text-foreground mb-3">
                                    {service.title}
                                </h2>
                                <p className="text-muted-foreground mb-6 text-sm">
                                    {service.description}
                                </p>
                                <div className="flex items-center justify-between gap-4 text-xs text-muted-foreground">
                                    <span className="font-mono">Typical timeline: {service.timeline}</span>
                                    <span className="inline-flex items-center gap-2 text-foreground group-hover:text-accent-strong transition-colors">
                                        {service.cta}
                                        <IconArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" stroke={2} />
                                    </span>
                                </div>
                            </Link>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </Section>

            <Section className="rounded-[2rem] bg-muted/35">
                <HowItWorks contactSource="services-how-it-works" />
            </Section>

            <Section className="rounded-[2rem] border border-border/60 bg-card/80" padding="large">
                <AnimatedSection className="text-center max-w-2xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                        Not sure which one fits?
                    </h2>
                    <p className="text-muted-foreground mb-8">
                        Tell me what you&apos;re building and what matters most. I&apos;ll recommend the simplest path to results.
                    </p>
                    <Link href="/contact?source=services" className="btn-primary">
                        Talk about your project
                    </Link>
                </AnimatedSection>
            </Section>
        </>
    );
}



