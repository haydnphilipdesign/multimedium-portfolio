import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { Section } from "@/components/sections/Section";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/motion/AnimatedSection";
import { MonoLabel, SectionOpener, RuledRow } from "@/components/sections/Editorial";
import { createPageMetadata } from "@/lib/seo";
import {
    getBreadcrumbStructuredData,
    getCollectionPageStructuredData,
} from "@/lib/structuredData";
import { IconArrowRight, IconBuildingSkyscraper, IconHammer, IconHome2, IconHomeDollar, IconBuildingCommunity, IconBriefcase2 } from "@tabler/icons-react";

export const metadata: Metadata = createPageMetadata({
    title: "Industry Website Design for Real Estate and Service Businesses",
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
    const structuredData = [
        getBreadcrumbStructuredData([
            { name: "Home", path: "/" },
            { name: "Industries", path: "/industries" },
        ]),
        getCollectionPageStructuredData({
            name: "Industries Served by Multimedium",
            description:
                "Industry landing pages for real estate professionals, transaction coordinators, coaches, HOAs, trades, and home service businesses.",
            path: "/industries",
        }),
    ];

    return (
        <>
            <JsonLd data={structuredData} />
            <Section className="pt-32 sm:pt-36 md:pt-44" padding="none">
                <AnimatedSection>
                    <MonoLabel className="mb-6">Industries</MonoLabel>
                    <h1 className="max-w-3xl font-display text-5xl text-foreground sm:text-6xl md:text-7xl display-balance">
                        Industry website design for{" "}
                        <span className="text-gradient">real estate &amp; service businesses.</span>
                    </h1>
                    <p className="mt-7 max-w-2xl text-lg leading-relaxed text-foreground/80 md:text-xl">
                        Pick the audience closest to your business. Each page sharpens the messaging,
                        conversion path, and examples around how that market actually decides.
                    </p>
                </AnimatedSection>
            </Section>

            <Section>
                <AnimatedSection>
                    <SectionOpener
                        eyebrow="Choose your industry"
                        eyebrowIndex="01"
                        title="Same craft, different buyers"
                        lead="The design standard stays the same. What changes is the messaging, the proof, and the next step — because a TC, a broker, and an HOA board don't decide the same way."
                    />
                </AnimatedSection>
                <StaggerContainer className="mt-12 ledger border-t border-foreground/15" staggerDelay={0.06}>
                    {industries.map((industry, idx) => (
                        <StaggerItem key={industry.title}>
                            <RuledRow
                                index={String(idx + 1).padStart(2, "0")}
                                title={industry.title}
                                action={
                                    <Link
                                        href={industry.href}
                                        className="group inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-primary"
                                    >
                                        {industry.cta}
                                        <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" stroke={2} />
                                    </Link>
                                }
                            >
                                {industry.description}
                            </RuledRow>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </Section>
        </>
    );
}
