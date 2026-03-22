import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/sections/Section";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/motion/AnimatedSection";
import { createPageMetadata } from "@/lib/seo";
import { IconArrowRight, IconBuildingSkyscraper, IconHammer, IconHome2, IconHomeDollar, IconBuildingCommunity, IconBriefcase2 } from "@tabler/icons-react";

export const metadata: Metadata = createPageMetadata({
    title: "Industries Served",
    description:
        "Industry-focused website design for real estate professionals, transaction coordinators, coaches, HOAs, local trades, and home service companies.",
    path: "/industries",
    keywords: [
        "real estate web design",
        "transaction coordinator website design",
        "website design for real estate coaches",
        "home services website design",
    ],
});

const industries = [
    {
        icon: IconHomeDollar,
        title: "Real Estate Professionals",
        description:
            "Websites for agents, teams, and brokerages that need stronger trust, better local relevance, and clearer buyer or seller paths.",
        href: "/industries/real-estate-professionals",
        cta: "See real estate offer",
    },
    {
        icon: IconBuildingSkyscraper,
        title: "Transaction Coordinators",
        description:
            "Professional websites and optional intake automation for real estate ops teams that want more qualified calls.",
        href: "/industries/transaction-coordinators",
        cta: "See TC offer",
    },
    {
        icon: IconBriefcase2,
        title: "Real Estate Coaches & Brokerages",
        description:
            "Authority-first sites for coaches, educators, consultants, and brokerages selling premium offers or recruiting the right people.",
        href: "/industries/real-estate-coaches",
        cta: "See coach offer",
    },
    {
        icon: IconBuildingCommunity,
        title: "HOAs & Community Associations",
        description:
            "Professional sites with document access, event calendars, dues info, and board communication for your community.",
        href: "/industries/homeowners-associations",
        cta: "See HOA offer",
    },
    {
        icon: IconHammer,
        title: "Trades & Local Service Businesses",
        description:
            "Websites that turn local search traffic into calls, quote requests, and booked work.",
        href: "/industries/trades",
        cta: "See trades offer",
    },
    {
        icon: IconHome2,
        title: "Home Services",
        description:
            "Websites for HVAC, plumbing, electrical, roofing, and other high-intent local services.",
        href: "/industries/home-services",
        cta: "See home services offer",
    },
];

export default function IndustriesPage() {
    return (
        <>
            <Section className="pt-28 sm:pt-32 md:pt-40" padding="none">
                <AnimatedSection>
                    <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card px-6 py-8 shadow-[var(--shadow-soft)] sm:px-8 sm:py-10">
                        <div className="relative max-w-3xl">
                            <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
                                Service business websites
                                <br />
                                <span className="text-gradient">built for the way your leads decide.</span>
                            </h1>
                            <p className="mt-6 text-lg text-muted-foreground">
                                Pick the industry closest to your business. Each page shows what the build includes, how the conversion system works, and relevant case studies.
                            </p>
                        </div>
                    </div>
                </AnimatedSection>
            </Section>

            <Section>
                <AnimatedSection>
                    <SectionHeading
                        title="Choose your industry"
                        subtitle="Same standard of craft, tuned for different buyers and how they make decisions."
                    />
                </AnimatedSection>
                <StaggerContainer className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.08}>
                    {industries.map((industry) => (
                        <StaggerItem key={industry.title}>
                            <Link
                                href={industry.href}
                                className="group block h-full rounded-2xl border border-border/60 bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[var(--shadow-soft)] sm:p-8"
                            >
                                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border/60 bg-muted/50 text-primary">
                                    <industry.icon className="h-5 w-5" stroke={1.6} />
                                </div>
                                <h2 className="text-xl font-semibold text-foreground">{industry.title}</h2>
                                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                                    {industry.description}
                                </p>
                                <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-primary transition-colors">
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
