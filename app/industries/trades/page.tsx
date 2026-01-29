import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/sections/Section";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/motion/AnimatedSection";
import {
    IconPhoneCall,
    IconMapPin,
    IconBolt,
    IconStars,
    IconBrandGoogle,
    IconArrowRight,
} from "@tabler/icons-react";

export const metadata: Metadata = {
    title: "Websites for Local Trades",
    description:
        "Web design for blue-collar trades and local service businesses: fast pages, trust signals, and quote/request flows that turn searches into calls.",
    alternates: {
        canonical: "/industries/trades",
    },
};

const outcomes = [
    {
        icon: IconPhoneCall,
        title: "More calls and quote requests",
        description:
            "A clear offer, strong CTAs, and frictionless contact so visitors don’t bounce and “keep looking.”",
    },
    {
        icon: IconMapPin,
        title: "Local-first clarity",
        description:
            "Service areas, before/after, and proof that you’re the safe choice in your region.",
    },
    {
        icon: IconBolt,
        title: "Fast on mobile",
        description:
            "Most traffic is mobile. The site should load fast, read cleanly, and tap easily.",
    },
];

const included = [
    {
        icon: IconStars,
        title: "Trust-first design",
        description:
            "Reviews, proof, process, and guarantees placed where people actually hesitate.",
    },
    {
        icon: IconBrandGoogle,
        title: "Local SEO foundations",
        description:
            "Service pages, on-page structure, and metadata designed for local intent searches.",
    },
    {
        icon: IconPhoneCall,
        title: "Lead routing that works",
        description:
            "Forms, call CTAs, and scheduling so leads go to the right place fast.",
    },
];

export default function TradesPage() {
    return (
        <>
            <Section className="pt-28 sm:pt-32 md:pt-40" padding="none">
                <AnimatedSection>
                    <div className="max-w-3xl space-y-6">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-glow/10 text-glow border border-glow/20">
                            Local Service Businesses
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                            Websites for trades
                            <br />
                            <span className="text-gradient">that turn searches into calls.</span>
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            For service businesses that want to look premium, show proof fast, and make contacting you feel simple—on mobile, especially.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <Link href="/contact?source=trades-hero" className="btn-primary">
                                Talk about your project
                            </Link>
                            <Link href="/services?source=trades-hero" className="btn-secondary inline-flex items-center gap-2">
                                See services <IconArrowRight className="w-4 h-4" stroke={2} />
                            </Link>
                        </div>
                    </div>
                </AnimatedSection>
            </Section>

            <Section className="pt-10 md:pt-14" padding="none">
                <StaggerContainer className="grid gap-4 md:grid-cols-3" staggerDelay={0.08}>
                    {outcomes.map((item) => (
                        <StaggerItem key={item.title}>
                            <div className="h-full rounded-2xl border border-border/50 bg-card p-6">
                                <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl border border-border/50 bg-muted/50 text-glow">
                                    <item.icon className="w-5 h-5" stroke={1.5} />
                                </div>
                                <p className="mt-4 text-lg font-semibold text-foreground">{item.title}</p>
                                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </Section>

            <Section className="bg-muted/30">
                <AnimatedSection>
                    <SectionHeading
                        title="What you get"
                        subtitle="A site that looks trustworthy, loads fast, and makes it easy to request an estimate."
                    />
                </AnimatedSection>

                <StaggerContainer className="grid gap-6 md:grid-cols-3" staggerDelay={0.1}>
                    {included.map((item) => (
                        <StaggerItem key={item.title}>
                            <div className="h-full rounded-2xl border border-border/50 bg-card p-7">
                                <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl border border-border/50 bg-muted/50 text-glow">
                                    <item.icon className="w-5 h-5" stroke={1.5} />
                                </div>
                                <h3 className="mt-5 text-xl font-semibold text-foreground">{item.title}</h3>
                                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </Section>

            <Section className="border-t border-border/40">
                <AnimatedSection className="text-center max-w-2xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                        Want a site that brings in better local leads?
                    </h2>
                    <p className="text-muted-foreground mb-8">
                        Tell me your trade, service area, and what you want more of (calls, forms, bookings). I’ll reply within one business day.
                    </p>
                    <Link href="/contact?source=trades-cta" className="btn-primary">
                        Talk about your project
                    </Link>
                </AnimatedSection>
            </Section>
        </>
    );
}

