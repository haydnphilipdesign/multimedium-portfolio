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
        title: "A clear backlog",
        description: "Every month has a plan: what we ship, why it matters, and how we measure it.",
    },
    {
        title: "Ship small, often",
        description: "Improvements go live in small increments so you learn faster and avoid big-bang launches.",
    },
    {
        title: "Tie work to leads",
        description: "Reporting stays grounded in conversions and lead quality — not vanity metrics.",
    },
];

export const metadata: Metadata = createPageMetadata({
    title: "SEO Growth Retainers for Websites",
    description:
        "SEO growth retainers for websites that need ongoing conversion, content, performance, and on-page improvement after launch.",
    path: "/services/growth-retainers",
    keywords: [
        "seo retainer service",
        "website growth retainer",
        "conversion optimization retainer",
    ],
});

const included = [
    "Monthly / quarterly experiment plan",
    "Landing pages + conversion improvements",
    "SEO roadmap + content support",
    "Reporting tied to inquiries and booked calls",
    "Design + dev support as you grow",
];

const expectations = [
    { label: "Cadence", value: "Monthly / quarterly" },
    { label: "Focus", value: "Conversion + clarity + SEO" },
    { label: "Reporting", value: "Leads, not pageviews" },
];

const faqs = [
    {
        q: "What do you actually do month to month?",
        a: "We keep a clear backlog, pick the highest-impact items, and ship improvements in small, measurable increments: landing pages, SEO fixes, performance, messaging, and conversion flow refinements.",
    },
    {
        q: "Do retainers include design and development?",
        a: "Yes. Retainers are built so you can ship design and dev improvements without starting a new scope each month.",
    },
    {
        q: "Do you handle SEO?",
        a: "I can handle the technical and on-page foundation and help guide content direction. If you want ongoing content production at scale, we can pair it with a writer.",
    },
    {
        q: "How do we measure success?",
        a: "We track conversions that map to revenue: inquiries, booked calls, quote requests, and lead quality. Every month should have a clear goal and result.",
    },
];

export default function GrowthRetainersServicePage() {
    const tag = getProjectBySlug("tag-landing-page");
    const paRes = getProjectBySlug("pa-real-estate-support");
    const featured = [tag, paRes].filter((project): project is Project => Boolean(project));
    const structuredData = [
        getBreadcrumbStructuredData([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "SEO Growth Retainers", path: "/services/growth-retainers" },
        ]),
        getServiceStructuredData({
            name: "SEO Growth Retainers",
            description:
                "Ongoing SEO, conversion, and website growth support for businesses that want steady improvements after launch.",
            path: "/services/growth-retainers",
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
                            <MonoLabel className="mb-6">Hosting &amp; retainers</MonoLabel>
                            <h1 className="font-display text-5xl text-foreground sm:text-6xl md:text-7xl display-balance">
                                SEO &amp; website growth retainers
                            </h1>
                            <p className="mt-7 max-w-xl text-lg leading-relaxed text-foreground/80 md:text-xl">
                                Ongoing support for teams that want steady post-launch growth through conversion
                                improvements, on-page SEO, content updates, and clearer messaging.
                            </p>
                            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                                <Link href="/contact?source=services-retainer" className="btn btn-primary">
                                    Explore a retainer
                                </Link>
                                <Link href="/work?source=services-retainer" className="btn btn-secondary group">
                                    View work
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
                    <SectionOpener eyebrow="How it works" eyebrowIndex="01" title="Steady, measurable progress" />
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
                            title="The kind of work we iterate on"
                            lead="Landing pages, messaging improvements, and ongoing tweaks that make the site perform better over time."
                            action={
                                <Link href="/work?source=services-retainer" className="group inline-flex items-center gap-2 text-base font-medium text-foreground transition-colors hover:text-primary">
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
                            <MonoLabel className="mb-4">Cadence</MonoLabel>
                            <h2 className="font-display text-2xl text-foreground sm:text-3xl">Monthly priorities</h2>
                            <p className="mt-4 text-lg leading-relaxed text-foreground/78">
                                Typical retainers run monthly with clear priorities, a defined backlog, and work shipped in small, measurable increments.
                            </p>
                        </AnimatedSection>
                        <AnimatedSection delay={0.1}>
                            <MonoLabel className="mb-4">Budget guidance</MonoLabel>
                            <h2 className="font-display text-2xl text-foreground sm:text-3xl">From $59/mo</h2>
                            <p className="mt-4 text-lg leading-relaxed text-foreground/78">
                                Hosting and maintenance plans start at $59/month. Larger growth retainers are scoped around monthly outcomes and capacity — after a quick audit, I&apos;ll propose a plan that matches your runway.
                            </p>
                        </AnimatedSection>
                    </div>
                </Section>
            </section>

            <Section>
                <AnimatedSection>
                    <SectionOpener eyebrow="FAQ" eyebrowIndex="04" title="Common questions" lead="A few common questions about cadence, scope, and how we measure results." />
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
                title="Want your site to keep improving after launch?"
                body="If you have traffic but not enough inquiries, a retainer is a simple way to ship steady improvements without starting from scratch each month."
                primary={{ label: "Explore a retainer", href: "/contact?source=services-retainer-cta" }}
                secondary={{ label: "See all services", href: "/services" }}
            />
        </>
    );
}


