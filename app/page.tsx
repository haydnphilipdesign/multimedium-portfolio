import type { Metadata } from "next";
import { StatementHero } from "@/components/hero/StatementHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { Section } from "@/components/sections/Section";
import { FeaturedProject } from "@/components/work/ProjectCard";
import { getHomeFeaturedProjects, projects } from "@/content/projects";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { SectionOpener, RuledList, RuledRow, PullQuote } from "@/components/sections/Editorial";
import { CTAFlooded } from "@/components/marketing/CTA";
import { createPageMetadata } from "@/lib/seo";
import { getBreadcrumbStructuredData, getServiceStructuredData } from "@/lib/structuredData";
import Link from "next/link";
import { IconArrowRight, IconArrowUpRight } from "@tabler/icons-react";

export const metadata: Metadata = createPageMetadata({
    title: "Real Estate Web Design and TC Websites",
    description:
        "Web design for real estate professionals, transaction coordinators, brokerages, and real estate coaches — based in the Poconos, working with clients across Pennsylvania and beyond.",
    path: "/",
    keywords: [
        "real estate web design",
        "transaction coordinator website design",
        "real estate marketing website",
        "website design for real estate coaches",
        "poconos web designer",
    ],
});

const services = [
    {
        title: "TC Website Packages",
        description: "Four tiers — Presence, Starter, Growth, and Pro — matched to where your transaction coordination business is right now.",
        href: "/tc-packages",
        meta: "From $595",
        cta: "Compare packages",
    },
    {
        title: "Custom Websites",
        description: "A complete website or redesign for agents, teams, brokerages, coaches, and select service businesses.",
        href: "/services/website",
        meta: "4–6 weeks",
        cta: "See what's included",
    },
    {
        title: "Landing Pages",
        description: "Focused pages for campaigns, recruiting, referral partners, and single-offer conversion paths.",
        href: "/services/landing-pages",
        meta: "1–3 weeks",
        cta: "See landing page scope",
    },
    {
        title: "Hosting, Maintenance & Retainers",
        description: "Ongoing support that keeps the site fast, useful, and easier to improve after launch.",
        href: "/services/growth-retainers",
        meta: "Ongoing",
        cta: "See support options",
    },
];

// TODO(trust): Returns null until a real client testimonial is added to
// content/projects.ts. The testimonial section below is intentionally hidden
// while none exist — do not add placeholder/invented quotes to fill it.
function getBestTestimonial() {
    for (const p of projects) {
        if (p.testimonial) return p.testimonial;
    }
    return null;
}

export default function HomePage() {
    const featuredProjects = getHomeFeaturedProjects().slice(0, 2);
    const testimonial = getBestTestimonial();
    const structuredData = [
        getBreadcrumbStructuredData([{ name: "Home", path: "/" }]),
        getServiceStructuredData({
            name: "Real Estate Web Design and TC Website Design",
            description:
                "Custom website design for real estate professionals, transaction coordinators, brokerages, and coaches who need clearer messaging and stronger lead generation.",
            path: "/",
            serviceType: "Web design and development",
            audience: [
                "Real estate professionals",
                "Transaction coordinators",
                "Brokerages",
                "Real estate coaches",
            ],
        }),
    ];

    return (
        <>
            <JsonLd data={structuredData} />
            {/* Hero */}
            <StatementHero />

            {/* Featured Work — show it big */}
            <Section id="work" size="wide" padding="large">
                <AnimatedSection>
                    <SectionOpener
                        eyebrow="Selected work"
                        eyebrowIndex="01"
                        title="Recent client work."
                        lead="Commissioned websites you can visit today. Each case study covers the brief, the decisions, and what shipped."
                        action={
                            <Link
                                href="/work"
                                className="group inline-flex items-center gap-2 text-base font-medium text-foreground transition-colors hover:text-primary"
                            >
                                Browse client work
                                <IconArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" stroke={1.9} />
                            </Link>
                        }
                    />
                </AnimatedSection>

                <div className="mt-14 space-y-16 md:mt-20 md:space-y-24">
                    {featuredProjects.map((project, index) => (
                        <FeaturedProject
                            key={project.slug}
                            project={project}
                            index={index}
                            reverse={index % 2 === 1}
                        />
                    ))}
                </div>
            </Section>

            {/* Dark statement — domain depth (flooded ink) */}
            <section className="bg-ink text-ink-foreground">
                <AnimatedSection className="mx-auto grid max-w-6xl gap-8 px-4 py-20 sm:px-6 md:grid-cols-[0.85fr_1.15fr] md:items-center md:py-28 lg:px-8">
                    <p className="mono-label !text-flood">
                        Tools built from inside the industry
                    </p>
                    <div>
                        <h2 className="font-display text-3xl leading-tight text-ink-foreground md:text-[2.9rem] md:leading-[1.12]">
                            I also build software for the TC workflow.
                        </h2>
                        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-foreground/75">
                            UtilitySheet, Norma Intake, and Norma Closing Desk are products I built and run — they live in the Lab, separate from client work. Working on them keeps me close to what matters on a TC website: which services need explaining, what agents ask before submitting a file, and where inquiries stall.
                        </p>
                        <Link
                            href="/lab"
                            className="group mt-8 inline-flex items-center gap-2 text-base font-medium text-ink-foreground transition-colors hover:text-flood"
                        >
                            Explore the Lab
                            <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" stroke={2} />
                        </Link>
                    </div>
                </AnimatedSection>
            </section>

            {/* Services — concise ruled ledger */}
            <Section padding="large">
                <AnimatedSection>
                    <SectionOpener
                        eyebrow="Ways to work together"
                        eyebrowIndex="02"
                        title="Choose the simplest path that fits."
                        lead="Start with a focused TC package, a custom site, a campaign page, or ongoing support."
                    />
                </AnimatedSection>

                <AnimatedSection className="mt-12">
                    <RuledList>
                        {services.map((service, index) => (
                            <RuledRow
                                key={service.title}
                                index={String(index + 1).padStart(2, "0")}
                                title={service.title}
                                meta={service.meta}
                                action={
                                    <Link
                                        href={service.href}
                                        className="group inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-primary"
                                    >
                                        {service.cta}
                                        <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" stroke={2} />
                                    </Link>
                                }
                            >
                                {service.description}
                            </RuledRow>
                        ))}
                    </RuledList>
                </AnimatedSection>
            </Section>

            {/* Testimonial — editorial pull quote (only renders when a real one exists) */}
            {testimonial && (
                <Section size="narrow" padding="large">
                    <AnimatedSection>
                        <PullQuote cite={`${testimonial.author} — ${testimonial.role}`}>
                            &ldquo;{testimonial.quote}&rdquo;
                        </PullQuote>
                    </AnimatedSection>
                </Section>
            )}

            {/* CTA — flooded ochre closer */}
            <CTAFlooded
                eyebrow="Let's talk"
                title="Ready for a website that brings in better leads?"
                body="Tell me what you're working on. I'll reply within one business day with a clear next step."
                primary={{ label: "Start a project", href: "/contact?source=home-cta" }}
                secondary={{ label: "View selected work", href: "/work" }}
            />
        </>
    );
}
