import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/sections/Section";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/motion/AnimatedSection";
import { IconArrowRight, IconBuildingSkyscraper, IconHammer, IconHome2 } from "@tabler/icons-react";

export const metadata: Metadata = {
    title: "Industries",
    description:
        "Industry-focused website design for transaction coordinators, local trades, and home service companies.",
    alternates: {
        canonical: "/industries",
    },
};

const industries = [
    {
        icon: IconBuildingSkyscraper,
        title: "Transaction Coordinators",
        description:
            "Authority-first websites and optional intake automation for real estate ops teams that want more qualified calls.",
        href: "/industries/transaction-coordinators",
        cta: "See TC offer",
    },
    {
        icon: IconHammer,
        title: "Trades & Local Service Businesses",
        description:
            "Trust-first websites that turn local search traffic into calls, quote requests, and booked work.",
        href: "/industries/trades",
        cta: "See trades offer",
    },
    {
        icon: IconHome2,
        title: "Home Services",
        description:
            "Conversion-focused websites for HVAC, plumbing, electrical, roofing, and other high-intent local services.",
        href: "/industries/home-services",
        cta: "See home services offer",
    },
];

export default function IndustriesPage() {
    return (
        <>
            <Section className="pt-28 sm:pt-32 md:pt-40" padding="none">
                <AnimatedSection>
                    <div className="relative overflow-hidden rounded-[2rem] border border-border/65 bg-card/90 px-6 py-8 shadow-[var(--shadow-elevated)] sm:px-8 sm:py-10">
                        <div className="absolute inset-0 bg-hero-gradient opacity-35" />
                        <div className="grain absolute inset-0 pointer-events-none" />
                        <div className="relative max-w-3xl">
                            <span className="mb-6 inline-flex items-center rounded-full border border-glow/25 bg-glow/10 px-3 py-1 text-xs font-medium text-foreground">
                                Industry focus
                            </span>
                            <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
                                Service business websites
                                <br />
                                <span className="text-gradient">built for the way your leads decide.</span>
                            </h1>
                            <p className="mt-6 text-lg text-muted-foreground">
                                Pick the lane closest to your business. Each page shows offer fit, proof direction, and the conversion system behind the build.
                            </p>
                        </div>
                    </div>
                </AnimatedSection>
            </Section>

            <Section>
                <AnimatedSection>
                    <SectionHeading
                        title="Choose Your Industry"
                        subtitle="Same conversion-first standard, tuned for different buyers, proof signals, and lead flows."
                    />
                </AnimatedSection>
                <StaggerContainer className="grid gap-6 sm:gap-8 md:grid-cols-3" staggerDelay={0.08}>
                    {industries.map((industry) => (
                        <StaggerItem key={industry.title}>
                            <Link
                                href={industry.href}
                                className="group block h-full rounded-2xl border border-border/70 bg-card/90 p-6 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:border-glow/35 hover:shadow-[var(--shadow-elevated)] sm:p-8"
                            >
                                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border/65 bg-muted/50 text-glow">
                                    <industry.icon className="h-5 w-5" stroke={1.6} />
                                </div>
                                <h2 className="text-xl font-semibold text-foreground">{industry.title}</h2>
                                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                                    {industry.description}
                                </p>
                                <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-accent-strong transition-colors">
                                    {industry.cta}
                                    <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" stroke={2} />
                                </div>
                            </Link>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </Section>
        </>
    );
}

