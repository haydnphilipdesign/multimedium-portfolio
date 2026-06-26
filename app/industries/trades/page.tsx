import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/sections/Section";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/motion/AnimatedSection";
import { ProjectCard } from "@/components/work/ProjectCard";
import { MonoLabel, SectionOpener, RuledRow } from "@/components/sections/Editorial";
import { CTARuled } from "@/components/marketing/CTA";
import { getProjectBySlug, type Project } from "@/content/projects";
import { createPageMetadata } from "@/lib/seo";
import {
    IconPhoneCall,
    IconMapPin,
    IconBolt,
    IconShieldCheck,
    IconBrandGoogle,
    IconArrowRight,
} from "@tabler/icons-react";

export const metadata: Metadata = createPageMetadata({
    title: "Websites for Local Trades",
    description:
        "Web design for local trades and blue-collar service businesses with local SEO structure, trust signals, and quote-request flows that turn searches into calls.",
    path: "/industries/trades",
});

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
        icon: IconShieldCheck,
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

const expectations = [
    { label: "Primary conversion", value: "Calls + estimate requests" },
    { label: "Built for mobile", value: "Fast load + tap-to-call" },
    { label: "Tracking-ready", value: "Analytics + conversion events" },
];

const faqs = [
    {
        q: "Do you do SEO?",
        a: "I build the local SEO foundation: fast pages, clear service pages, metadata, and structure. If you want ongoing SEO/content, we can layer that on after launch.",
    },
    {
        q: "Can you help with photos and copy?",
        a: "Yes. I can tighten your messaging and guide what to capture for before/after, equipment, and proof so the site feels credible fast.",
    },
    {
        q: "Do you build multi-location or multi-crew sites?",
        a: "Yes. We can structure service areas, locations, and crew pages so leads self-select and routing stays clean.",
    },
    {
        q: "What does a typical timeline look like?",
        a: "Once we have your services, service area, and proof assets, builds can move quickly. I will give you a concrete timeline after a short intake.",
    },
];

export default function TradesPage() {
    const paRes = getProjectBySlug("pa-real-estate-support");
    const tag = getProjectBySlug("tag-landing-page");
    const threePenn = getProjectBySlug("three-penn-properties");
    const featured = [paRes, tag, threePenn].filter(
        (project): project is Project => Boolean(project)
    );

    return (
        <>
            <Section className="pt-32 sm:pt-36 md:pt-44" padding="none">
                <AnimatedSection>
                    <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
                        <div>
                            <MonoLabel className="mb-6">Trades &amp; local services</MonoLabel>
                            <h1 className="font-display text-5xl text-foreground sm:text-6xl md:text-7xl display-balance">
                                Websites for trades that turn searches into{" "}
                                <span className="text-gradient">calls.</span>
                            </h1>
                            <p className="mt-7 max-w-xl text-lg leading-relaxed text-foreground/80 md:text-xl">
                                For service businesses that want to look established, show proof fast, and make
                                contacting you feel simple — on mobile especially.
                            </p>
                            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                                <Link href="/contact?source=trades-hero" className="btn btn-primary">Get a free estimate</Link>
                                <Link href="/services?source=trades-hero" className="btn btn-secondary group">
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
                            eyebrow="What you get"
                            eyebrowIndex="01"
                            title="What you get"
                            lead="A site that looks trustworthy, loads fast, and makes it easy to request an estimate."
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

            {featured.length > 0 ? (
                <Section>
                    <AnimatedSection>
                        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-10">
                            <div className="max-w-2xl">
                                <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                                    Relevant work
                                </h2>
                                <p className="mt-2 text-muted-foreground">
                                    Builds that focus on local positioning, trust signals, and conversion—the same principles that work for trades.
                                </p>
                            </div>
                            <Link
                                href="/work?source=trades-page"
                                className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors group"
                            >
                                <span className="font-medium">Browse all case studies</span>
                                <IconArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" stroke={2} />
                            </Link>
                        </div>
                    </AnimatedSection>

                    <div className={`grid gap-6 sm:gap-8 md:grid-cols-2 ${featured.length === 4 ? "lg:grid-cols-2" : "lg:grid-cols-3"}`}>
                        {featured.map((project, index) => (
                            <ProjectCard key={project.slug} project={project} index={index} />
                        ))}
                    </div>
                </Section>
            ) : null}

            <Section>
                <AnimatedSection>
                    <SectionOpener
                        eyebrow="FAQ"
                        eyebrowIndex="02"
                        title="Common questions"
                        lead="A few common questions trades and service owners ask before a build."
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
                title="Want a site that brings in better local leads?"
                body="Tell me your trade, service area, and what you want more of (calls, forms, bookings). I'll reply within one business day."
                primary={{ label: "Get a free estimate", href: "/contact?source=trades-cta" }}
                secondary={{ label: "See all services", href: "/services" }}
            />
        </>
    );
}



