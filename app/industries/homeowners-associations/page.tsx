import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/sections/Section";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/motion/AnimatedSection";
import {
    IconCalendarEvent,
    IconFileText,
    IconShieldCheck,
    IconBolt,
    IconUsers,
    IconCreditCard,
    IconArrowRight,
} from "@tabler/icons-react";

export const metadata: Metadata = {
    title: "Websites for HOAs & Community Associations",
    description:
        "Web design for homeowners associations: resident portals, board info, document access, dues collection, event calendars, and amenity booking — all in one professional site.",
    alternates: {
        canonical: "/industries/homeowners-associations",
    },
};

const outcomes = [
    {
        icon: IconUsers,
        title: "Fewer board emails",
        description:
            "A site that answers common resident questions — rules, contacts, meeting schedules — so the board stops fielding the same calls.",
    },
    {
        icon: IconShieldCheck,
        title: "Professional presence",
        description:
            "A clean, modern site that reflects a well-run community and builds trust with prospective buyers and current residents.",
    },
    {
        icon: IconBolt,
        title: "Fast on any device",
        description:
            "Residents check the site from their phone. Speed, clarity, and mobile-first design are non-negotiable.",
    },
];

const included = [
    {
        icon: IconFileText,
        title: "Document hub",
        description:
            "Meeting minutes, CC&Rs, bylaws, and community policies in one organized, searchable location residents can access anytime.",
    },
    {
        icon: IconCalendarEvent,
        title: "Events & meetings",
        description:
            "Board meeting schedules, community events, and amenity booking so residents stay informed without email blasts.",
    },
    {
        icon: IconCreditCard,
        title: "Dues & payment info",
        description:
            "Clear payment instructions, portal links, and fee schedules so residents know what they owe and how to pay.",
    },
];

const expectations = [
    { label: "Primary goal", value: "Resident self-service" },
    { label: "Board benefit", value: "Fewer repeat inquiries" },
    { label: "Tracking-ready", value: "Analytics + engagement" },
];

const fitFor = [
    "HOAs and community associations that want a professional online presence",
    "Boards tired of answering the same questions via email and phone",
    "Communities that need document access, event info, and dues details in one place",
];

const bestResultsWhen = [
    "You have documents, schedules, and community info ready to organize",
    "The board wants to reduce repetitive inquiries and improve communication",
    "You value a clean, professional site that reflects a well-managed community",
];

const faqs = [
    {
        q: "Do you build resident login portals?",
        a: "I can integrate with existing portal providers or set up a simple gated section for documents and board-only content. The right approach depends on your community's needs and budget.",
    },
    {
        q: "Can residents pay dues through the site?",
        a: "I can link to your existing payment processor or set up clear payment instructions. If you need a new payment solution, I can recommend options that fit HOA workflows.",
    },
    {
        q: "Do you handle ongoing updates?",
        a: "Yes. I offer growth retainers for ongoing content updates, or I can set up a simple editing workflow so board members can update meeting minutes and events themselves.",
    },
    {
        q: "What if we have multiple communities?",
        a: "Multi-community setups are a fit. We can structure the site so each community has its own section with relevant docs, contacts, and schedules.",
    },
    {
        q: "How long does a typical HOA site take?",
        a: "Most builds run 4–6 weeks depending on how much content needs to be organized. I will give you a concrete timeline after a short intake call.",
    },
    {
        q: "Can you help us look more professional to prospective buyers?",
        a: "That is one of the main goals. A clean, well-organized HOA site signals a well-run community — which matters to buyers, realtors, and property managers.",
    },
];

export default function HomeownersAssociationsPage() {
    return (
        <>
            <Section className="pt-28 sm:pt-32 md:pt-40" padding="none">
                <AnimatedSection>
                    <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card shadow-[var(--shadow-soft)] px-6 py-8 sm:px-8 sm:py-10">

                        <div className="relative grid gap-8 lg:grid-cols-5 lg:items-end">
                            <div className="lg:col-span-3 space-y-6">
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                                    Websites for HOAs
                                    <br />
                                    <span className="text-gradient">that keep residents informed.</span>
                                </h1>
                                <p className="text-lg text-muted-foreground max-w-2xl">
                                    A professional site that organizes community documents, board info, events, and payment details — so the board spends less time answering repeat questions.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <Link
                                        href="/contact?source=hoa-hero"
                                        className="btn-primary"
                                    >
                                        Get started
                                    </Link>
                                    <Link
                                        href="/services?source=hoa-hero"
                                        className="btn-secondary inline-flex items-center gap-2"
                                    >
                                        See services <IconArrowRight className="w-4 h-4" stroke={2} />
                                    </Link>
                                </div>
                            </div>

                            <div className="lg:col-span-2">
                                <div className="rounded-2xl border border-border/60 bg-background/55 backdrop-blur-sm p-6">
                                    <p className="text-sm font-semibold text-foreground">Built for community operations</p>
                                    <div className="mt-4 grid gap-3">
                                        {expectations.map((item) => (
                                            <div
                                                key={item.label}
                                                className="flex items-start justify-between gap-4 rounded-xl border border-border/60 bg-card/55 px-4 py-3"
                                            >
                                                <p className="text-xs font-medium text-muted-foreground">{item.label}</p>
                                                <p className="text-sm font-semibold text-foreground text-right">{item.value}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-4 rounded-xl border border-border/60 bg-background/70 px-4 py-3">
                                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                                            Core stack
                                        </p>
                                        <p className="mt-1 text-sm text-foreground">
                                            Documents, events, dues info, and board communication in one clean site.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>
            </Section>

            <Section className="pt-10 md:pt-14" padding="none">
                <StaggerContainer className="grid gap-4 md:grid-cols-3" staggerDelay={0.08}>
                    {outcomes.map((item) => (
                        <StaggerItem key={item.title}>
                            <div className="h-full rounded-2xl border border-border/60 bg-card shadow-[var(--shadow-soft)] p-6">
                                <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl border border-border/60 bg-muted/50 text-primary">
                                    <item.icon className="w-5 h-5" stroke={1.5} />
                                </div>
                                <p className="mt-4 text-lg font-semibold text-foreground">{item.title}</p>
                                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </Section>

            <Section className="rounded-2xl bg-muted/35">
                <AnimatedSection>
                    <SectionHeading
                        title="What I build for HOAs"
                        subtitle="Everything residents need to stay informed — organized, accessible, and easy for the board to maintain."
                    />
                </AnimatedSection>

                <StaggerContainer className="grid gap-6 md:grid-cols-3" staggerDelay={0.1}>
                    {included.map((item) => (
                        <StaggerItem key={item.title}>
                            <div className="h-full rounded-2xl border border-border/60 bg-card shadow-[var(--shadow-soft)] p-7">
                                <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl border border-border/60 bg-muted/50 text-primary">
                                    <item.icon className="w-5 h-5" stroke={1.5} />
                                </div>
                                <h3 className="mt-5 text-xl font-semibold text-foreground">{item.title}</h3>
                                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </Section>

            <Section>
                <div className="grid gap-10 md:grid-cols-2">
                    <AnimatedSection>
                        <div className="h-full rounded-2xl border border-border/60 bg-card shadow-[var(--shadow-soft)] p-6 sm:p-8">
                            <h2 className="text-lg font-semibold text-foreground mb-4">Great fit if</h2>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                {fitFor.map((item) => (
                                    <li key={item} className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={0.08}>
                        <div className="h-full rounded-2xl border border-border/60 bg-card shadow-[var(--shadow-soft)] p-6 sm:p-8">
                            <h2 className="text-lg font-semibold text-foreground mb-4">Best results when</h2>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                {bestResultsWhen.map((item) => (
                                    <li key={item} className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </AnimatedSection>
                </div>
            </Section>

            <Section className="pt-10 md:pt-14" padding="none">
                <AnimatedSection>
                    <SectionHeading
                        title="FAQ"
                        subtitle="A few common questions HOA boards ask before a build."
                    />
                </AnimatedSection>

                <StaggerContainer className="grid gap-4 md:grid-cols-2" staggerDelay={0.08}>
                    {faqs.map((item) => (
                        <StaggerItem key={item.q}>
                            <div className="rounded-2xl border border-border/60 bg-card shadow-[var(--shadow-soft)] p-7">
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
                        Want a site that keeps your community informed?
                    </h2>
                    <p className="text-muted-foreground mb-8">
                        Tell me about your community, what info residents need access to, and what the board is tired of repeating. I'll reply within one business day with next steps.
                    </p>
                    <Link href="/contact?source=hoa-cta" className="btn-primary">
                        Get started
                    </Link>
                </AnimatedSection>
            </Section>
        </>
    );
}
