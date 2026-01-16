import { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/sections/Section";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/motion/AnimatedSection";
import { IconLayout, IconCode, IconChartLine, IconArrowRight } from "@tabler/icons-react";

export const metadata: Metadata = {
    title: "Services",
    description:
        "Website design + development, landing pages, and growth retainers. Strategy-led work built to look premium and convert.",
    alternates: {
        canonical: "/services",
    },
};

const services = [
    {
        icon: IconLayout,
        title: "Website Build / Redesign",
        description:
            "A premium, conversion-focused website with a reusable design system and a clean Next.js build behind it.",
        href: "/services/website",
        timeline: "4-6 weeks",
    },
    {
        icon: IconCode,
        title: "Landing Pages + Funnels",
        description:
            "Campaign-ready pages and flows that make taking the next step feel effortless.",
        href: "/services/landing-pages",
        timeline: "1-3 weeks",
    },
    {
        icon: IconChartLine,
        title: "Growth Retainers",
        description:
            "SEO, content, and conversion experiments on a predictable cadence—so your site keeps improving after launch.",
        href: "/services/growth-retainers",
        timeline: "Ongoing",
    },
];

export default function ServicesPage() {
    return (
        <>
            <Section className="pt-28 sm:pt-32 md:pt-40" padding="none">
                <AnimatedSection>
                    <div className="max-w-3xl">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-glow/10 text-glow border border-glow/20 mb-6">
                            Services
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
                            Strategy-led design.
                            <br />
                            <span className="text-gradient">Clean builds that convert.</span>
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            Pick the engagement that matches where you are right now. Each one is designed to reduce friction, earn trust, and turn attention into inquiries.
                        </p>
                    </div>
                </AnimatedSection>
            </Section>

            <Section>
                <AnimatedSection>
                    <SectionHeading
                        title="What I offer"
                        subtitle="Clear deliverables, realistic timelines, and a site that stays consistent as you ship new pages."
                    />
                </AnimatedSection>

                <StaggerContainer className="grid gap-6 sm:gap-8 md:grid-cols-3" staggerDelay={0.12}>
                    {services.map((service) => (
                        <StaggerItem key={service.title}>
                            <Link
                                href={service.href}
                                className="group block h-full relative p-6 sm:p-8 rounded-2xl bg-card border border-border/50 transition-all duration-300 hover:border-glow/30 hover:shadow-lg hover:shadow-glow/5"
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
                                    <span className="inline-flex items-center gap-2 text-foreground group-hover:text-glow transition-colors">
                                        Learn more
                                        <IconArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" stroke={2} />
                                    </span>
                                </div>
                            </Link>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </Section>

            <Section className="border-t border-border/40">
                <AnimatedSection className="text-center max-w-2xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                        Not sure which one fits?
                    </h2>
                    <p className="text-muted-foreground mb-8">
                        Tell me what you&apos;re building and what matters most. I&apos;ll recommend the simplest path to results.
                    </p>
                    <Link href="/contact?source=services" className="btn-primary">
                        Start a Project
                    </Link>
                </AnimatedSection>
            </Section>
        </>
    );
}

