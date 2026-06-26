import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { Section } from "@/components/sections/Section";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/motion/AnimatedSection";
import { ProjectCard } from "@/components/work/ProjectCard";
import { MonoLabel, SectionOpener, RuledRow, CheckRow } from "@/components/sections/Editorial";
import { CTARuled } from "@/components/marketing/CTA";
import { getConceptProjectsByIndustry } from "@/content/projects";
import { createPageMetadata } from "@/lib/seo";
import {
    getBreadcrumbStructuredData,
    getFaqStructuredData,
    getServiceStructuredData,
} from "@/lib/structuredData";
import {
    IconArrowRight,
    IconBrandGoogle,
    IconBuildingSkyscraper,
    IconCalendarEvent,
    IconChartLine,
    IconCrown,
    IconMicrophone2,
    IconShieldCheck,
} from "@tabler/icons-react";

export const metadata: Metadata = createPageMetadata({
    title: "Website Design for Real Estate Coaches and Brokerages",
    description:
        "Website design for real estate coaches, educators, consultants, and brokerages that need authority-first messaging, clear offers, and better strategy-call leads.",
    path: "/industries/real-estate-coaches",
    keywords: [
        "website design for real estate coaches",
        "real estate coaching website design",
        "brokerage website design",
        "real estate consultant website",
        "real estate speaker website design",
    ],
});

const outcomes = [
    {
        icon: IconCrown,
        title: "Premium positioning",
        description:
            "Your website should justify the value of your offer before anyone asks what the program costs.",
    },
    {
        icon: IconCalendarEvent,
        title: "Clear conversion paths",
        description:
            "Strategy calls, applications, events, and lead magnets need separate pathways so the right people take the next step.",
    },
    {
        icon: IconShieldCheck,
        title: "Proof that feels credible",
        description:
            "Testimonials, outcomes, and offer structure work harder when they are framed like evidence instead of hype.",
    },
];

const included = [
    {
        icon: IconMicrophone2,
        title: "Authority-first messaging",
        description:
            "Clear positioning for coaches, consultants, educators, and broker-owners who need to sound credible without sounding generic.",
    },
    {
        icon: IconChartLine,
        title: "Offer architecture",
        description:
            "Programs, intensives, masterminds, events, and strategy calls structured so the site helps qualify the right buyers.",
    },
    {
        icon: IconBrandGoogle,
        title: "Search-ready foundation",
        description:
            "Metadata, page structure, internal linking, and schema that help Google understand the audience and services you serve.",
    },
    {
        icon: IconBuildingSkyscraper,
        title: "Brokerage-friendly layouts",
        description:
            "If you run a team or brokerage, the site can support recruiting, education, and consumer-facing trust without becoming a cluttered all-in-one mess.",
    },
];

const fitFor = [
    "Real estate coaches, educators, speakers, and consultants.",
    "Brokerages or team leaders who need a more authority-driven site.",
    "Businesses selling premium offers that need stronger trust before the call.",
];

const faqs = [
    {
        q: "Can one site support coaching and brokerage offers?",
        a: "Yes, if the structure is intentional. We can separate audiences and conversion paths so recruiting, coaching, and consumer trust are not all fighting for the same attention.",
    },
    {
        q: "Do you help shape the offer and positioning?",
        a: "Yes. For this niche, copy and structure matter as much as visuals. I help tighten the messaging so the site feels more premium and less like a generic funnel page.",
    },
    {
        q: "Can you support webinars, lead magnets, or event registration?",
        a: "Yes. We can build landing pages and registration flows that support workshops, waitlists, downloads, and strategy calls without bloating the main site.",
    },
    {
        q: "What if I already have testimonials and social proof?",
        a: "Great. I can reorganize those assets so they support the story more effectively and feel more believable than a random wall of praise.",
    },
];

export default function RealEstateCoachesPage() {
    // No real coaching clients yet — show clearly-labeled concept designs, never as client proof.
    const conceptDesigns = getConceptProjectsByIndustry("coaching");

    const structuredData = [
        getBreadcrumbStructuredData([
            { name: "Home", path: "/" },
            { name: "Industries", path: "/industries" },
            { name: "Real Estate Coaches", path: "/industries/real-estate-coaches" },
        ]),
        getServiceStructuredData({
            name: "Website Design for Real Estate Coaches and Brokerages",
            description:
                "Authority-first website design for real estate coaches, consultants, educators, and brokerages that need premium positioning and better-qualified leads.",
            path: "/industries/real-estate-coaches",
            audience: [
                "Real estate coaches",
                "Real estate consultants",
                "Brokerages",
                "Real estate educators",
            ],
        }),
        getFaqStructuredData(faqs),
    ];

    return (
        <>
            <JsonLd data={structuredData} />

            <Section className="pt-32 sm:pt-36 md:pt-44" padding="none">
                <AnimatedSection>
                    <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
                        <div>
                            <MonoLabel className="mb-6">Coaches &amp; brokerages</MonoLabel>
                            <h1 className="font-display text-5xl text-foreground sm:text-6xl md:text-7xl display-balance">
                                Websites for coaches &amp; brokerages that{" "}
                                <span className="text-gradient">command authority.</span>
                            </h1>
                            <p className="mt-7 max-w-xl text-lg leading-relaxed text-foreground/80 md:text-xl">
                                For coaching brands, educators, team leaders, and brokerages that need stronger
                                positioning, cleaner offers, and a site that supports strategy-call or program leads.
                            </p>
                            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                                <Link href="/contact?source=real-estate-coaches" className="btn btn-primary">
                                    Talk through your website
                                </Link>
                                <Link href="/services/landing-pages" className="btn btn-secondary group">
                                    See landing page support
                                    <IconArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" stroke={2} />
                                </Link>
                            </div>
                        </div>
                        <dl className="ledger border-t border-rule">
                            {[
                                { label: "Primary conversions", value: "Applications, calls, registrations" },
                                { label: "Best fit", value: "Programs, coaching, recruiting" },
                                { label: "Growth support", value: "Landing pages + SEO retainers" },
                            ].map((item) => (
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
                            eyebrow="What this niche needs"
                            eyebrowIndex="01"
                            title="What this niche usually needs"
                            lead="A premium-feeling site with stronger offer clarity, proof, and pathways for the right leads."
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
                        <MonoLabel className="mb-4">Helpful next steps</MonoLabel>
                        <p className="text-lg leading-relaxed text-foreground/78">
                            These sites often perform best when the core website is paired with focused landing pages, a clean email capture flow, and clear social proof tied to one or two signature offers.
                        </p>
                        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                            <Link href="/services/landing-pages" className="btn btn-sm btn-secondary">
                                Landing page support
                            </Link>
                            <Link href="/services/growth-retainers" className="btn btn-sm btn-secondary">
                                SEO &amp; growth support
                            </Link>
                        </div>
                    </AnimatedSection>
                </div>
            </Section>

            {conceptDesigns.length > 0 ? (
                <Section>
                    <AnimatedSection>
                        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-10">
                            <div className="max-w-2xl">
                                <h2 className="text-3xl font-bold text-foreground md:text-4xl">Concept designs for this niche</h2>
                                <p className="mt-2 text-muted-foreground">
                                    Self-initiated design explorations for fictional coaching brands — shown to demonstrate the premium positioning and conversion thinking this audience needs. These are concepts, not client projects, and each opens a live demo. Want to be the first real coaching client featured here? <Link href="/contact?source=real-estate-coaches-concepts" className="text-foreground underline underline-offset-4 hover:text-primary">Let&apos;s talk</Link>.
                                </p>
                            </div>
                        </div>
                    </AnimatedSection>

                    <div className={`grid gap-6 sm:gap-8 md:grid-cols-2 ${conceptDesigns.length === 4 ? "lg:grid-cols-2" : "lg:grid-cols-3"}`}>
                        {conceptDesigns.map((project, index) => (
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
                        lead="A few common questions from coaches, brokerages, and authority-driven brands."
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
                title="Want a site that supports premium offers and stronger leads?"
                body="Tell me what you sell, who it is for, and where the current site falls short. I'll respond within one business day with clear next steps."
                primary={{ label: "Start the conversation", href: "/contact?source=real-estate-coaches" }}
                secondary={{ label: "See all services", href: "/services" }}
            />
        </>
    );
}
