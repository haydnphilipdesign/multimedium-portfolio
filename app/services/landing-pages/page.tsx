import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/sections/Section";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/motion/AnimatedSection";
import { ProjectCard } from "@/components/work/ProjectCard";
import { MonoLabel, SectionOpener, RuledList, RuledRow, CheckRow } from "@/components/sections/Editorial";
import { CTARuled } from "@/components/marketing/CTA";
import { getProjectBySlug, type Project } from "@/content/projects";
import { JsonLd } from "@/components/seo/JsonLd";
import { createPageMetadata } from "@/lib/seo";
import {
    getBreadcrumbStructuredData,
    getFaqStructuredData,
    getServiceStructuredData,
} from "@/lib/structuredData";
import { IconArrowRight } from "@tabler/icons-react";

const highlights = [
    {
        title: "One clear action",
        description: "The page stays focused on one conversion goal: call, book, sign up, or request a quote.",
    },
    {
        title: "Measure what matters",
        description: "Tracking ties to leads and bookings so you can improve conversion with confidence.",
    },
    {
        title: "Fast follow-up",
        description: "Route leads into your inbox, calendar, or CRM so you respond before they keep shopping.",
    },
];

export const metadata: Metadata = createPageMetadata({
    title: "Landing Page Design for Lead Generation",
    description:
        "Landing page design for lead generation, offers, and campaigns built to capture leads, bookings, and sign-ups for real estate and niche service businesses.",
    path: "/services/landing-pages",
    keywords: [
        "landing page design service",
        "lead generation landing page",
        "real estate landing page design",
    ],
});

const included = [
    "Offer + messaging refinement",
    "Focused layout + copy help",
    "Forms + tracking + follow-up",
    "A/B-ready sections and components",
    "Fast iteration cadence (ship → learn → improve)",
];

const expectations = [
    { label: "Primary conversion", value: "Leads, bookings, sign-ups" },
    { label: "Typical timeline", value: "1–3 weeks" },
    { label: "Tracking-ready", value: "Analytics + conversion events" },
];

const faqs = [
    {
        q: "Can you help with copy and positioning?",
        a: "Yes. A landing page only works when the offer is obvious. I will help refine the message and structure so it reads cleanly and converts.",
    },
    {
        q: "Do you set up tracking?",
        a: "Yes. I can wire up analytics and conversion events so you can see what is producing leads, not just clicks.",
    },
    {
        q: "Can we run A/B tests?",
        a: "Yes. We can ship variants and test hero messaging, offers, and form friction. The goal is to learn quickly and improve conversion over time.",
    },
    {
        q: "Do you build the follow-up flow too?",
        a: "If you want it. I can route leads into your CRM, email tool, or scheduling stack so follow-up happens fast and consistently.",
    },
];

export default function LandingPagesServicePage() {
    const tag = getProjectBySlug("tag-landing-page");
    const paRes = getProjectBySlug("pa-real-estate-support");
    // Real client landing/conversion work only — no concept/demo work here.
    const featured = [tag, paRes].filter((project): project is Project => Boolean(project));
    const structuredData = [
        getBreadcrumbStructuredData([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Landing Page Design", path: "/services/landing-pages" },
        ]),
        getServiceStructuredData({
            name: "Landing Page Design",
            description:
                "Landing page design for campaigns, offers, and lead generation with clear messaging, tracking, and fast follow-up flows.",
            path: "/services/landing-pages",
            audience: [
                "Real estate professionals",
                "Transaction coordinators",
                "Service businesses",
            ],
        }),
        getFaqStructuredData(faqs),
    ];

    return (
        <>
            <JsonLd data={structuredData} />
            <Section className="pt-32 sm:pt-36 md:pt-44" padding="none">
                <AnimatedSection>
                    <Link href="/services" className="mb-8 inline-flex text-sm text-muted-foreground transition-colors hover:text-foreground">
                        ← Back to services
                    </Link>
                    <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
                        <div>
                            <MonoLabel className="mb-6">Landing pages</MonoLabel>
                            <h1 className="font-display text-5xl text-foreground sm:text-6xl md:text-7xl display-balance">
                                Landing pages for lead generation
                            </h1>
                            <p className="mt-7 max-w-xl text-lg leading-relaxed text-foreground/80 md:text-xl">
                                Focused landing pages and simple funnels for launches, offers, and campaigns
                                when you need qualified responses faster than a full site build.
                            </p>
                            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                                <Link href="/contact?source=services-landing-pages" className="btn btn-primary">
                                    Plan your landing page
                                </Link>
                                <Link href="/work?source=services-landing-pages" className="btn btn-secondary group">
                                    See examples
                                    <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" stroke={2} />
                                </Link>
                            </div>
                        </div>
                        <dl className="ledger border-t border-rule">
                            {expectations.map((item) => (
                                <div key={item.label} className="ledger-row flex items-baseline justify-between gap-6 py-4">
                                    <dt className="mono-label text-muted-foreground">{item.label}</dt>
                                    <dd className="font-display text-lg text-foreground">{item.value}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </AnimatedSection>
            </Section>

            <Section>
                <AnimatedSection>
                    <SectionOpener eyebrow="How it works" eyebrowIndex="01" title="One page, one job" />
                </AnimatedSection>
                <RuledList className="mt-10 border-t border-rule">
                    {highlights.map((item, idx) => (
                        <RuledRow key={item.title} index={String(idx + 1).padStart(2, "0")} title={item.title}>
                            {item.description}
                        </RuledRow>
                    ))}
                </RuledList>
            </Section>

            <Section className="pt-0">
                <AnimatedSection>
                    <SectionOpener eyebrow="Scope" eyebrowIndex="02" title="What's included" />
                </AnimatedSection>
                <StaggerContainer className="mt-10 ledger border-t border-rule md:grid md:grid-cols-2 md:gap-x-16 md:border-t-0" staggerDelay={0.06}>
                    {included.map((item) => (
                        <StaggerItem key={item} className="md:border-t md:border-rule">
                            <CheckRow>{item}</CheckRow>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </Section>

            {featured.length > 0 ? (
                <Section className="pt-0">
                    <AnimatedSection>
                        <SectionOpener
                            eyebrow="Proof"
                            eyebrowIndex="03"
                            title="Recent landing page work"
                            lead="Focused builds that prioritize one action and a clean conversion path."
                            action={
                                <Link href="/work?source=services-landing-pages" className="group inline-flex items-center gap-2 text-base font-medium text-foreground transition-colors hover:text-primary">
                                    Browse all case studies
                                    <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" stroke={2} />
                                </Link>
                            }
                        />
                    </AnimatedSection>
                    <div className="mt-12 grid gap-x-8 gap-y-12 md:grid-cols-2">
                        {featured.map((project, index) => (
                            <ProjectCard key={project.slug} project={project} index={index} />
                        ))}
                    </div>
                </Section>
            ) : null}

            <section className="bg-surface-1 border-y border-rule">
                <Section>
                    <div className="grid gap-12 md:grid-cols-2 md:gap-16">
                        <AnimatedSection>
                            <MonoLabel className="mb-4">Timeline</MonoLabel>
                            <h2 className="font-display text-2xl text-foreground sm:text-3xl">1–3 weeks</h2>
                            <p className="mt-4 text-lg leading-relaxed text-foreground/78">
                                Most landing page engagements ship in 1–3 weeks depending on scope, assets, and review cadence.
                            </p>
                        </AnimatedSection>
                        <AnimatedSection delay={0.1}>
                            <MonoLabel className="mb-4">Budget guidance</MonoLabel>
                            <h2 className="font-display text-2xl text-foreground sm:text-3xl">From $750</h2>
                            <p className="mt-4 text-lg leading-relaxed text-foreground/78">
                                Landing pages start at $750 depending on copy, assets, variants, and integrations — making them the most accessible starting point.
                            </p>
                        </AnimatedSection>
                    </div>
                </Section>
            </section>

            <Section>
                <AnimatedSection>
                    <SectionOpener eyebrow="FAQ" eyebrowIndex="04" title="Common questions" lead="A few common questions about landing pages, tracking, and iteration." />
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
                title="Need a landing page that actually gets responses?"
                body="Share the offer, the audience, and where you want the traffic to go. I'll reply with a simple plan and timeline within one business day."
                primary={{ label: "Plan your landing page", href: "/contact?source=services-landing-pages-cta" }}
                secondary={{ label: "See all services", href: "/services" }}
            />
        </>
    );
}


