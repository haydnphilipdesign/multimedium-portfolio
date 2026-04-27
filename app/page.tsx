import type { Metadata } from "next";
import { StatementHero } from "@/components/hero/StatementHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { Section } from "@/components/sections/Section";
import { ProjectCard } from "@/components/work/ProjectCard";
import { getHomeFeaturedProjects, projects } from "@/content/projects";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { createPageMetadata } from "@/lib/seo";
import { getBreadcrumbStructuredData, getServiceStructuredData } from "@/lib/structuredData";
import Link from "next/link";
import {
    IconLayout,
    IconCode,
    IconArrowRight,
    IconBuildingSkyscraper,
    IconBriefcase2,
    IconHomeDollar,
    IconPackage,
    IconSettings,
} from "@tabler/icons-react";

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
        icon: IconPackage,
        title: "TC Website Packages",
        description: "Presence, Starter, Growth, and Pro website tiers designed around how transaction coordinator businesses actually work.",
        href: "/tc-packages",
        timeline: "1–6 weeks",
    },
    {
        icon: IconLayout,
        title: "Custom Websites",
        description: "A full site or redesign for agents, teams, brokerages, coaches, and select service businesses.",
        href: "/services/website",
        timeline: "4–6 weeks",
    },
    {
        icon: IconCode,
        title: "Landing Pages",
        description: "Focused pages for campaigns, recruiting, referral partners, and single-offer conversion paths.",
        href: "/services/landing-pages",
        timeline: "1–3 weeks",
    },
    {
        icon: IconSettings,
        title: "Hosting, Maintenance & Retainers",
        description: "Ongoing support so your site stays fast, useful, and easier to improve after launch.",
        href: "/services/growth-retainers",
        timeline: "Ongoing",
    },
];

const nichePages = [
    {
        icon: IconBuildingSkyscraper,
        title: "Transaction Coordinators",
        description:
            "Professional websites and intake paths that help agents understand your services, pricing, and next step.",
        href: "/tc-packages",
        cta: "See TC packages",
    },
    {
        icon: IconHomeDollar,
        title: "Real Estate Professionals",
        description:
            "Websites for agents, teams, and brokerages that need stronger trust and clearer buyer or seller paths.",
        href: "/industries/real-estate-professionals",
        cta: "See real estate websites",
    },
    {
        icon: IconBriefcase2,
        title: "Coaches & Brokerages",
        description:
            "Authority-first sites that support premium offers, strategy calls, recruiting, and referral partner relationships.",
        href: "/industries/real-estate-coaches",
        cta: "See coach websites",
    },
];

const packageTeasers = [
    {
        name: "Presence",
        price: "$595",
        detail: "A tightly scoped, template-based credibility site for new solo TCs.",
    },
    {
        name: "Starter",
        price: "$795",
        detail: "A one-page site with a simple agent intake or contact workflow.",
    },
    {
        name: "Growth",
        price: "$1,495",
        detail: "A multi-page site with file submission and clearer service positioning.",
    },
    {
        name: "Pro",
        price: "$2,495+",
        detail: "A custom site for teams, coaches, or operators ready for a fuller system.",
    },
];

function getBestTestimonial() {
    for (const p of projects) {
        if (p.testimonial) return p.testimonial;
    }
    return null;
}

export default function HomePage() {
    const featuredProjects = getHomeFeaturedProjects();
    const featuredGridCols = featuredProjects.length === 4 ? "lg:grid-cols-2" : "lg:grid-cols-3";
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

            {/* Industry Paths */}
            <Section className="bg-white" size="full">
                <div className="mx-auto max-w-6xl">
                    <AnimatedSection>
                        <div className="mb-10 max-w-3xl">
                            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                                Built for the real estate side of your business
                            </h2>
                            <p className="mt-3 text-muted-foreground">
                                Multimedium specializes in sites where credibility and next steps matter: fewer vague inquiries, clearer file starts, and a business that looks as established online as it already is offline.
                            </p>
                        </div>
                    </AnimatedSection>

                    <div className="grid gap-4 md:grid-cols-3">
                        {nichePages.map((page) => (
                            <Link
                                key={page.title}
                                href={page.href}
                                className="group rounded-xl border border-border/70 bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[var(--shadow-soft)]"
                            >
                                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                                    <page.icon className="h-5 w-5" stroke={1.5} />
                                </div>
                                <h3 className="text-lg font-semibold text-foreground">{page.title}</h3>
                                <p className="mt-2 text-sm text-muted-foreground">{page.description}</p>
                                <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors group-hover:text-primary">
                                    {page.cta}
                                    <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" stroke={2} />
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Featured Work */}
            <Section id="work" className="relative">
                <AnimatedSection>
                    <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                        <div className="max-w-2xl">
                            <h2 className="text-3xl font-bold text-foreground md:text-4xl">Selected work</h2>
                            <p className="mt-3 text-muted-foreground">
                                Client projects first: real websites with clear goals, deliberate design decisions, and honest business outcomes.
                            </p>
                        </div>
                        <Link
                            href="/work"
                            className="group inline-flex items-center gap-2 text-foreground transition-colors hover:text-primary"
                        >
                            <span className="font-medium">Browse all work</span>
                            <IconArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" stroke={2} />
                        </Link>
                    </div>
                </AnimatedSection>

                <div className={`grid gap-6 sm:gap-8 md:grid-cols-2 ${featuredGridCols}`}>
                    {featuredProjects.map((project, index) => (
                        <ProjectCard key={project.slug} project={project} index={index} />
                    ))}
                </div>
            </Section>

            {/* TC Packages */}
            <Section className="bg-white" size="full">
                <div className="mx-auto max-w-6xl">
                    <AnimatedSection>
                        <div className="mb-10 max-w-3xl">
                            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                                Transaction coordinator website packages
                            </h2>
                            <p className="mt-3 text-muted-foreground">
                                Four tiers designed around how TC businesses actually work, from credibility only to a fuller intake and conversion path.
                            </p>
                        </div>
                    </AnimatedSection>

                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                        {packageTeasers.map((pkg) => (
                            <div
                                key={pkg.name}
                                className="rounded-xl border border-border/70 bg-card p-6"
                            >
                                <div className="flex items-baseline justify-between gap-4">
                                    <h3 className="text-xl font-semibold text-foreground">{pkg.name}</h3>
                                    <p className="text-lg font-semibold text-primary">{pkg.price}</p>
                                </div>
                                <p className="mt-3 text-sm text-muted-foreground">{pkg.detail}</p>
                            </div>
                        ))}
                    </div>

                    <AnimatedSection className="mt-8">
                        <Link href="/tc-packages" className="btn-primary">
                            View all TC packages
                            <IconArrowRight className="h-4 w-4" stroke={2} />
                        </Link>
                    </AnimatedSection>
                </div>
            </Section>

            {/* Dark Trust Section */}
            <Section className="bg-[#111827] text-white" size="full" padding="large">
                <AnimatedSection className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-center">
                    <p className="text-sm font-medium uppercase tracking-[0.18em] text-white/60">
                        Tools built from inside the industry
                    </p>
                    <div>
                        <h2 className="text-3xl font-bold text-white md:text-5xl">
                            I do not just design TC websites. I build around the same workflow problems my clients deal with every day.
                        </h2>
                        <p className="mt-5 max-w-3xl text-base text-white/72 md:text-lg">
                            UtilitySheet, Norma Intake, and Norma Closing Desk are proof of domain depth, not the main client portfolio. That experience shows up in practical website choices: clearer services, cleaner file starts, and fewer back-and-forth inquiries.
                        </p>
                        <Link
                            href="/tools"
                            className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-white/75"
                        >
                            See the tools
                            <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" stroke={2} />
                        </Link>
                    </div>
                </AnimatedSection>
            </Section>

            {/* Services (condensed) */}
            <Section>
                <AnimatedSection>
                    <div className="mb-10 max-w-2xl">
                        <h2 className="text-3xl font-bold text-foreground md:text-4xl">Two ways to find the right fit</h2>
                        <p className="mt-3 text-muted-foreground">
                            Start with a website path if you know the main need. Choose something specific if you already have the core site handled.
                        </p>
                    </div>
                </AnimatedSection>

                <div className="grid gap-6 lg:grid-cols-2">
                    <div className="rounded-xl border border-border/70 bg-card p-6 sm:p-8">
                        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                            I know I need a website
                        </p>
                        <div className="mt-6 grid gap-4">
                            {services.slice(0, 2).map((service) => (
                                <ServiceLink key={service.title} service={service} />
                            ))}
                        </div>
                    </div>
                    <div className="rounded-xl border border-border/70 bg-card p-6 sm:p-8">
                        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                            I need something specific
                        </p>
                        <div className="mt-6 grid gap-4">
                            {services.slice(2).map((service) => (
                                <ServiceLink key={service.title} service={service} />
                            ))}
                        </div>
                    </div>
                </div>
            </Section>

            {/* Testimonial */}
            {testimonial && (
                <Section className="bg-white" size="full">
                    <AnimatedSection className="max-w-2xl mx-auto text-center">
                        <blockquote className="text-lg md:text-xl text-foreground leading-relaxed font-display italic">
                            &ldquo;{testimonial.quote}&rdquo;
                        </blockquote>
                        <div className="mt-6">
                            <p className="text-sm font-medium text-foreground">{testimonial.author}</p>
                            <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                        </div>
                    </AnimatedSection>
                </Section>
            )}

            {/* CTA */}
            <Section className="bg-white" size="full" padding="large">
                <AnimatedSection className="text-center max-w-3xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
                        Ready for a website that brings in better leads?
                    </h2>
                    <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
                        Tell me what you&apos;re working on. I&apos;ll reply within one business day with a clear next step.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact?source=home-cta" className="btn-primary">
                            Book a free discovery call
                        </Link>
                        <Link href="/work" className="btn-secondary">
                            View selected work
                        </Link>
                    </div>
                </AnimatedSection>
            </Section>
        </>
    );
}

function ServiceLink({
    service,
}: {
    service: {
        icon: typeof IconLayout;
        title: string;
        description: string;
        href: string;
        timeline: string;
    };
}) {
    return (
        <Link
            href={service.href}
            className="group flex flex-col justify-between rounded-xl border border-border/60 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40"
        >
            <div>
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <service.icon className="w-5 h-5" stroke={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
            </div>
            <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground">
                <span className="font-mono">{service.timeline}</span>
                <span className="inline-flex items-center gap-1.5 font-medium text-foreground group-hover:text-primary transition-colors">
                    Learn more <IconArrowRight className="w-3.5 h-3.5" stroke={2} />
                </span>
            </div>
        </Link>
    );
}
