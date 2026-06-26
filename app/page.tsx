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
        "Multimedium builds high-trust websites for real estate professionals, transaction coordinators, brokerages, and real estate coaches in the Poconos and beyond.",
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
        description: "Presence, Starter, Growth, and Pro tiers built around how transaction coordinator businesses actually work.",
        href: "/tc-packages",
        timeline: "1–6 weeks",
    },
    {
        title: "Custom Websites",
        description: "A full site or redesign for agents, teams, brokerages, coaches, and select service businesses.",
        href: "/services/website",
        timeline: "4–6 weeks",
    },
    {
        title: "Landing Pages",
        description: "Focused pages for campaigns, recruiting, referral partners, and single-offer conversion paths.",
        href: "/services/landing-pages",
        timeline: "1–3 weeks",
    },
    {
        title: "Hosting, Maintenance & Retainers",
        description: "Ongoing support so your site stays fast, useful, and easier to improve after launch.",
        href: "/services/growth-retainers",
        timeline: "Ongoing",
    },
];

const nichePages = [
    {
        title: "Transaction Coordinators",
        description:
            "Professional websites and intake paths that help agents understand your services, pricing, and next step.",
        href: "/tc-packages",
        cta: "See TC packages",
    },
    {
        title: "Real Estate Professionals",
        description:
            "Websites for agents, teams, and brokerages that need stronger trust and clearer buyer or seller paths.",
        href: "/industries/real-estate-professionals",
        cta: "See real estate websites",
    },
    {
        title: "Coaches & Brokerages",
        description:
            "Authority-first sites that support premium offers, strategy calls, recruiting, and referral partner relationships.",
        href: "/industries/real-estate-coaches",
        cta: "See coach websites",
    },
];

const packageTeasers = [
    { name: "Presence", price: "$595", detail: "A tightly scoped, template-based credibility site for new solo TCs." },
    { name: "Starter", price: "$795", detail: "A one-page site with a simple agent intake or contact workflow." },
    { name: "Growth", price: "$1,495", detail: "A multi-page site with file submission and clearer service positioning." },
    { name: "Pro", price: "$2,495+", detail: "A custom site for teams, coaches, or operators ready for a fuller system." },
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
    const featuredProjects = getHomeFeaturedProjects().slice(0, 3);
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

            {/* Industry Paths — ruled ledger, no cards */}
            <Section>
                <AnimatedSection>
                    <SectionOpener
                        eyebrow="Who it's for"
                        eyebrowIndex="01"
                        title="Built for the real estate side of your business"
                        lead="I specialize in sites where credibility and next steps matter: fewer vague inquiries, clearer file starts, and a business that looks as established online as it already is offline."
                    />
                </AnimatedSection>

                <AnimatedSection className="mt-12">
                    <RuledList>
                        {nichePages.map((page) => (
                            <RuledRow
                                key={page.title}
                                title={page.title}
                                action={
                                    <Link
                                        href={page.href}
                                        className="group inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-primary"
                                    >
                                        {page.cta}
                                        <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" stroke={2} />
                                    </Link>
                                }
                            >
                                {page.description}
                            </RuledRow>
                        ))}
                    </RuledList>
                </AnimatedSection>
            </Section>

            {/* Featured Work — show it big */}
            <Section id="work" size="wide" padding="large">
                <AnimatedSection>
                    <SectionOpener
                        eyebrow="Selected work"
                        eyebrowIndex="02"
                        title="Real client work"
                        lead="Real websites for real businesses — clear goals, deliberate design decisions, honest outcomes. Concept and demo designs are labeled as such on the work page."
                        action={
                            <Link
                                href="/work"
                                className="group inline-flex items-center gap-2 text-base font-medium text-foreground transition-colors hover:text-primary"
                            >
                                Browse all work
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

            {/* TC Packages — price ledger */}
            <section className="bg-surface-1">
                <Section size="default" className="!max-w-6xl">
                    <AnimatedSection>
                        <SectionOpener
                            eyebrow="Pricing"
                            eyebrowIndex="03"
                            title="Transaction coordinator website packages"
                            lead="Four tiers designed around how TC businesses actually work — from credibility-only to a fuller intake and conversion path."
                        />
                    </AnimatedSection>

                    <AnimatedSection className="mt-12">
                        <div className="ledger border-t border-foreground/15">
                            {packageTeasers.map((pkg) => (
                                <Link
                                    key={pkg.name}
                                    href="/tc-packages"
                                    className="group ledger-row grid grid-cols-[1fr_auto] items-baseline gap-x-6 gap-y-1 py-6 transition-colors sm:grid-cols-[10rem_1fr_auto] sm:gap-x-10"
                                >
                                    <h3 className="font-display text-xl text-foreground transition-colors group-hover:text-primary sm:text-2xl">
                                        {pkg.name}
                                    </h3>
                                    <p className="col-span-2 text-base leading-relaxed text-foreground/70 sm:col-span-1 sm:order-2 sm:max-w-md">
                                        {pkg.detail}
                                    </p>
                                    <p className="font-mono text-lg text-foreground sm:order-3 sm:text-right">
                                        {pkg.price}
                                    </p>
                                </Link>
                            ))}
                        </div>
                    </AnimatedSection>

                    <AnimatedSection className="mt-10">
                        <Link href="/tc-packages" className="btn btn-primary group">
                            View all TC packages
                            <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" stroke={2} />
                        </Link>
                    </AnimatedSection>
                </Section>
            </section>

            {/* Dark statement — domain depth (flooded ink) */}
            <section className="bg-ink text-ink-foreground">
                <AnimatedSection className="mx-auto grid max-w-6xl gap-8 px-4 py-20 sm:px-6 md:grid-cols-[0.85fr_1.15fr] md:items-center md:py-28 lg:px-8">
                    <p className="mono-label !text-flood">
                        Tools built from inside the industry
                    </p>
                    <div>
                        <h2 className="font-display text-3xl leading-tight text-ink-foreground md:text-[2.9rem] md:leading-[1.12]">
                            I don&apos;t just design TC websites. I build around the same workflow problems my clients deal with every day.
                        </h2>
                        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-foreground/75">
                            UtilitySheet, Norma Intake, and Norma Closing Desk are proof of domain depth, not the main client portfolio. That experience shows up in practical website choices: clearer services, cleaner file starts, and fewer back-and-forth inquiries.
                        </p>
                        <Link
                            href="/tools"
                            className="group mt-8 inline-flex items-center gap-2 text-base font-medium text-ink-foreground transition-colors hover:text-flood"
                        >
                            See the tools
                            <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" stroke={2} />
                        </Link>
                    </div>
                </AnimatedSection>
            </section>

            {/* Services — asymmetric two-track */}
            <Section padding="large">
                <AnimatedSection>
                    <SectionOpener
                        eyebrow="Ways to work together"
                        eyebrowIndex="04"
                        title="Two ways to find the right fit"
                        lead="Start with a website path if you know the main need. Choose something specific if you already have the core site handled."
                    />
                </AnimatedSection>

                <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
                    <div>
                        <p className="mono-label mb-1">I know I need a website</p>
                        <RuledList className="mt-4">
                            {services.slice(0, 2).map((service) => (
                                <ServiceRow key={service.title} service={service} />
                            ))}
                        </RuledList>
                    </div>
                    <div>
                        <p className="mono-label mb-1">I need something specific</p>
                        <RuledList className="mt-4">
                            {services.slice(2).map((service) => (
                                <ServiceRow key={service.title} service={service} />
                            ))}
                        </RuledList>
                    </div>
                </div>
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
                primary={{ label: "Book a free discovery call", href: "/contact?source=home-cta" }}
                secondary={{ label: "View selected work", href: "/work" }}
            />
        </>
    );
}

function ServiceRow({
    service,
}: {
    service: { title: string; description: string; href: string; timeline: string };
}) {
    return (
        <Link href={service.href} className="group ledger-row block py-5">
            <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-display text-lg text-foreground transition-colors group-hover:text-primary sm:text-xl">
                    {service.title}
                </h3>
                <span className="mono-meta shrink-0">{service.timeline}</span>
            </div>
            <p className="mt-2 text-[15px] leading-relaxed text-foreground/70">{service.description}</p>
            <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-foreground/80 transition-colors group-hover:text-primary">
                Learn more
                <IconArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" stroke={2} />
            </span>
        </Link>
    );
}
