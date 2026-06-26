import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/sections/Section";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/motion/AnimatedSection";
import { MonoLabel, SectionOpener, RuledRow, CheckRow } from "@/components/sections/Editorial";
import { CTARuled } from "@/components/marketing/CTA";
import { createPageMetadata } from "@/lib/seo";
import {
    IconCalendarEvent,
    IconFileText,
    IconShieldCheck,
    IconBolt,
    IconUsers,
    IconCreditCard,
    IconArrowRight,
} from "@tabler/icons-react";

export const metadata: Metadata = createPageMetadata({
    title: "Websites for HOAs and Community Associations",
    description:
        "Web design for homeowners associations with document access, board communication, event calendars, dues information, and a more professional resident experience.",
    path: "/industries/homeowners-associations",
});

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
            <Section className="pt-32 sm:pt-36 md:pt-44" padding="none">
                <AnimatedSection>
                    <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
                        <div>
                            <MonoLabel className="mb-6">HOAs &amp; community associations</MonoLabel>
                            <h1 className="font-display text-5xl text-foreground sm:text-6xl md:text-7xl display-balance">
                                Websites for HOAs that keep residents{" "}
                                <span className="text-gradient">informed.</span>
                            </h1>
                            <p className="mt-7 max-w-xl text-lg leading-relaxed text-foreground/80 md:text-xl">
                                A professional site that organizes community documents, board info, events, and
                                payment details — so the board spends less time answering repeat questions.
                            </p>
                            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                                <Link href="/contact?source=hoa-hero" className="btn btn-primary">Get started</Link>
                                <Link href="/services?source=hoa-hero" className="btn btn-secondary group">
                                    See services
                                    <IconArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" stroke={2} />
                                </Link>
                            </div>
                        </div>
                        <dl className="ledger border-t border-rule">
                            {expectations.map((item) => (
                                <div key={item.label} className="ledger-row flex items-baseline justify-between gap-6 py-4">
                                    <dt className="mono-label text-muted-foreground">{item.label}</dt>
                                    <dd className="text-right font-display text-base text-foreground">{item.value}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </AnimatedSection>
            </Section>

            <Section>
                <StaggerContainer className="ledger border-t border-rule" staggerDelay={0.07}>
                    {outcomes.map((item, idx) => (
                        <StaggerItem key={item.title}>
                            <RuledRow index={String(idx + 1).padStart(2, "0")} title={item.title}>
                                {item.description}
                            </RuledRow>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </Section>

            <section className="bg-surface-1 border-y border-rule">
                <Section>
                    <AnimatedSection>
                        <SectionOpener
                            eyebrow="What I build"
                            eyebrowIndex="01"
                            title="What I build for HOAs"
                            lead="Everything residents need to stay informed — organized, accessible, and easy for the board to maintain."
                        />
                    </AnimatedSection>

                    <StaggerContainer className="mt-12 ledger border-t border-rule" staggerDelay={0.08}>
                        {included.map((item, idx) => (
                            <StaggerItem key={item.title}>
                                <RuledRow index={String(idx + 1).padStart(2, "0")} title={item.title}>
                                    {item.description}
                                </RuledRow>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </Section>
            </section>

            <Section>
                <div className="grid gap-12 md:grid-cols-2 md:gap-16">
                    <AnimatedSection>
                        <MonoLabel className="mb-4">Great fit if</MonoLabel>
                        <ul className="ledger border-t border-rule">
                            {fitFor.map((item) => (
                                <CheckRow key={item}>{item}</CheckRow>
                            ))}
                        </ul>
                    </AnimatedSection>

                    <AnimatedSection delay={0.08}>
                        <MonoLabel className="mb-4">Best results when</MonoLabel>
                        <ul className="ledger border-t border-rule">
                            {bestResultsWhen.map((item) => (
                                <CheckRow key={item}>{item}</CheckRow>
                            ))}
                        </ul>
                    </AnimatedSection>
                </div>
            </Section>

            <Section>
                <AnimatedSection>
                    <SectionOpener
                        eyebrow="FAQ"
                        eyebrowIndex="02"
                        title="Common questions"
                        lead="A few common questions HOA boards ask before a build."
                    />
                </AnimatedSection>

                <div className="mt-10 ledger border-t border-foreground/15">
                    {faqs.map((item) => (
                        <details key={item.q} className="group ledger-row py-1">
                            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5">
                                <p className="font-display text-lg text-foreground sm:text-xl">{item.q}</p>
                                <span aria-hidden className="shrink-0 font-mono text-2xl leading-none text-primary transition-transform duration-300 group-open:rotate-45">+</span>
                            </summary>
                            <p className="max-w-3xl pb-6 text-base leading-relaxed text-foreground/72">{item.a}</p>
                        </details>
                    ))}
                </div>
            </Section>

            <CTARuled
                eyebrow="Next step"
                title="Want a site that keeps your community informed?"
                body="Tell me about your community, what info residents need access to, and what the board is tired of repeating. I'll reply within one business day with next steps."
                primary={{ label: "Get started", href: "/contact?source=hoa-cta" }}
                secondary={{ label: "See all services", href: "/services" }}
            />
        </>
    );
}
