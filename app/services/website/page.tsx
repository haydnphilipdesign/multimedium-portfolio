import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/sections/Section";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/motion/AnimatedSection";
import { ProjectCard } from "@/components/work/ProjectCard";
import { MonoLabel, SectionOpener, CheckRow } from "@/components/sections/Editorial";
import { CTARuled } from "@/components/marketing/CTA";
import { getProjectBySlug, type Project } from "@/content/projects";
import { JsonLd } from "@/components/seo/JsonLd";
import { createPageMetadata } from "@/lib/seo";
import { getBreadcrumbStructuredData, getFaqStructuredData, getServiceStructuredData } from "@/lib/structuredData";
import { IconArrowRight } from "@tabler/icons-react";

export const metadata: Metadata = createPageMetadata({
    title: "Website Build and Redesign",
    description:
        "Custom website builds and redesigns for real estate professionals and service businesses that need stronger trust, faster performance, and better-qualified leads.",
    path: "/services/website",
    keywords: [
        "website redesign service",
        "custom website design service",
        "real estate website redesign",
        "service business web design",
    ],
});

const included = [
    "Kickoff workshop + page plan",
    "Custom design with real copy (not lorem ipsum)",
    "Reusable sections so new pages stay consistent",
    "Client portal setup for status, files, and approvals",
    "SEO basics + speed + accessibility",
    "Analytics + launch checklist",
];

const expectations = [
    { label: "Typical timeline", value: "4–6 weeks" },
    { label: "Primary conversion", value: "Real leads" },
    { label: "Tracking-ready", value: "Analytics + conversion events" },
];

const faq = [
    {
        q: "Do you work with existing brands?",
        a: "Yes. I can extend an existing brand system or refine it enough to support a modern site without starting from scratch.",
    },
    {
        q: "What will the site be built on?",
        a: "I typically build modern, fast sites that are easy to maintain. If you have a preferred platform or CMS, I can adapt while keeping speed and quality high.",
    },
    {
        q: "Can you write the copy?",
        a: "I help shape messaging and structure. If you want full copywriting, I can collaborate with a writer or ship strong draft copy for your review.",
    },
];

export default function WebsiteServicePage() {
    const threePenn = getProjectBySlug("three-penn-properties");
    const paRes = getProjectBySlug("pa-real-estate-support");
    // Real client redesigns only — no concept/demo work in this proof grid.
    const featured = [paRes, threePenn].filter(
        (project): project is Project => Boolean(project)
    );
    const structuredData = [
        getBreadcrumbStructuredData([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Website Build and Redesign", path: "/services/website" },
        ]),
        getServiceStructuredData({
            name: "Website Build and Redesign",
            description:
                "Custom website builds and redesigns focused on clear messaging, technical SEO, and better-qualified leads.",
            path: "/services/website",
            audience: ["Real estate professionals", "Transaction coordinators", "Service businesses"],
        }),
        getFaqStructuredData(faq),
    ];

    return (
        <>
            <JsonLd data={structuredData} />
            {/* Editorial hero */}
            <Section className="pt-32 sm:pt-36 md:pt-44" padding="none">
                <AnimatedSection>
                    <Link href="/services" className="mb-8 inline-flex text-sm text-muted-foreground transition-colors hover:text-foreground">
                        ← Back to services
                    </Link>
                    <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
                        <div>
                            <MonoLabel className="mb-6">Custom websites</MonoLabel>
                            <h1 className="font-display text-5xl text-foreground sm:text-6xl md:text-7xl display-balance">
                                Website build / redesign
                            </h1>
                            <p className="mt-7 max-w-xl text-lg leading-relaxed text-foreground/80 md:text-xl">
                                For teams that need to look established, load fast, and turn visitors into
                                real leads — without the site turning into a patchwork over time.
                            </p>
                            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                                <Link href="/contact?source=services-website" className="btn btn-primary">
                                    Discuss your redesign
                                </Link>
                                <Link href="/work?source=services-website" className="btn btn-secondary group">
                                    Browse case studies
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

            {/* What's included — ruled rows */}
            <Section>
                <AnimatedSection>
                    <SectionOpener
                        eyebrow="Scope"
                        eyebrowIndex="01"
                        title="What's included"
                        lead="A complete build with strategy, design, and code in one loop — nothing handed off, nothing lost in between."
                    />
                </AnimatedSection>
                <StaggerContainer className="mt-12 ledger border-t border-rule md:grid md:grid-cols-2 md:gap-x-16 md:border-t-0" staggerDelay={0.06}>
                    {included.map((item) => (
                        <StaggerItem key={item} className="md:border-t md:border-rule">
                            <CheckRow>{item}</CheckRow>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </Section>

            {featured.length > 0 ? (
                <Section className="pt-4" padding="none">
                    <AnimatedSection>
                        <SectionOpener
                            eyebrow="Proof"
                            eyebrowIndex="02"
                            title="Recent builds"
                            lead="Client redesigns you can visit — built to explain services quickly and route inquiries to the right place."
                            action={
                                <Link
                                    href="/work?source=services-website"
                                    className="group inline-flex items-center gap-2 text-base font-medium text-foreground transition-colors hover:text-primary"
                                >
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
                            <h2 className="font-display text-2xl text-foreground sm:text-3xl">4–6 weeks, typically</h2>
                            <p className="mt-4 text-lg leading-relaxed text-foreground/78">
                                Typical builds run 4–6 weeks depending on scope, content readiness, and review cadence.
                            </p>
                        </AnimatedSection>
                        <AnimatedSection delay={0.1}>
                            <MonoLabel className="mb-4">Budget guidance</MonoLabel>
                            <h2 className="font-display text-2xl text-foreground sm:text-3xl">$1,500 – $5,000+</h2>
                            <p className="mt-4 text-lg leading-relaxed text-foreground/78">
                                Full website builds typically range from $1,500 to $5,000+ depending on scope and content readiness. Simpler projects start at $750, and we can always scope a focused first phase and expand over time.
                            </p>
                        </AnimatedSection>
                    </div>
                </Section>
            </section>

            <Section>
                <AnimatedSection>
                    <SectionOpener eyebrow="FAQ" eyebrowIndex="03" title="Common questions" />
                </AnimatedSection>
                <div className="mt-10 ledger border-t border-foreground/15">
                    {faq.map((item) => (
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
                title="Thinking about a redesign?"
                body="Send a link to your current site and tell me what it isn't doing for you. I'll come back with a plan and a price range within one business day."
                primary={{ label: "Discuss your redesign", href: "/contact?source=services-website-cta" }}
                secondary={{ label: "See TC packages", href: "/tc-packages" }}
            />
        </>
    );
}



