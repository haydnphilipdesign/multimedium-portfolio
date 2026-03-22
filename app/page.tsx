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
    IconChartLine,
    IconArrowRight,
    IconBuildingSkyscraper,
    IconBriefcase2,
    IconHomeDollar,
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
        icon: IconLayout,
        title: "Website Build / Redesign",
        description: "A complete site that explains what you do, earns trust, and turns visitors into inquiries.",
        href: "/services/website",
        timeline: "4–6 weeks",
    },
    {
        icon: IconCode,
        title: "Landing Pages",
        description: "Focused pages for campaigns and offers — built to capture leads and bookings.",
        href: "/services/landing-pages",
        timeline: "1–3 weeks",
    },
    {
        icon: IconChartLine,
        title: "Growth Retainers",
        description: "Ongoing improvements so your site keeps getting clearer and better at bringing in leads.",
        href: "/services/growth-retainers",
        timeline: "Ongoing",
    },
];

const nichePages = [
    {
        icon: IconHomeDollar,
        title: "Real estate website design",
        description:
            "For agents, teams, and brokerages that need clearer positioning, stronger trust, and better buyer or seller inquiries.",
        href: "/industries/real-estate-professionals",
    },
    {
        icon: IconBuildingSkyscraper,
        title: "Web design for transaction coordinators",
        description:
            "For TC businesses that need a more professional web presence, better-fit leads, and cleaner intake workflows.",
        href: "/industries/transaction-coordinators",
    },
    {
        icon: IconBriefcase2,
        title: "Websites for real estate coaches",
        description:
            "For coaches, educators, and consultants who need authority-first messaging and a premium site that supports offers and strategy calls.",
        href: "/industries/real-estate-coaches",
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

            {/* Featured Work */}
            <Section id="work" className="relative">
                <AnimatedSection>
                    <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                        <div className="max-w-2xl">
                            <h2 className="text-3xl font-bold text-foreground md:text-4xl">Recent work</h2>
                            <p className="mt-3 text-muted-foreground">
                                Real projects with clear goals, design decisions, and measurable outcomes.
                            </p>
                        </div>
                        <Link
                            href="/work"
                            className="group inline-flex items-center gap-2 text-foreground transition-colors hover:text-primary"
                        >
                            <span className="font-medium">All case studies</span>
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

            {/* Services (condensed) */}
            <Section>
                <AnimatedSection>
                    <div className="mb-10 max-w-2xl">
                        <h2 className="text-3xl font-bold text-foreground md:text-4xl">Services</h2>
                        <p className="mt-3 text-muted-foreground">
                            Right-sized scope for different budgets and timelines.
                        </p>
                    </div>
                </AnimatedSection>

                <div className="grid gap-4 md:grid-cols-3">
                    {services.map((service) => (
                        <Link
                            key={service.title}
                            href={service.href}
                            className="group flex flex-col justify-between rounded-2xl border border-border/60 bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[var(--shadow-soft)]"
                        >
                            <div>
                                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
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
                    ))}
                </div>
            </Section>

            <Section className="rounded-2xl bg-muted/35">
                <AnimatedSection>
                    <div className="mb-10 max-w-3xl">
                        <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                            Built for the real estate side of service businesses
                        </h2>
                        <p className="mt-3 text-muted-foreground">
                            The strongest SEO opportunity on this site is specialization. These pages go deeper on the audiences Multimedium is best positioned to serve.
                        </p>
                    </div>
                </AnimatedSection>

                <div className="grid gap-4 md:grid-cols-3">
                    {nichePages.map((page) => (
                        <Link
                            key={page.title}
                            href={page.href}
                            className="group rounded-2xl border border-border/60 bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[var(--shadow-soft)]"
                        >
                            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                                <page.icon className="h-5 w-5" stroke={1.5} />
                            </div>
                            <h3 className="text-lg font-semibold text-foreground">{page.title}</h3>
                            <p className="mt-2 text-sm text-muted-foreground">{page.description}</p>
                            <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors group-hover:text-primary">
                                Explore page
                                <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" stroke={2} />
                            </span>
                        </Link>
                    ))}
                </div>
            </Section>

            {/* Testimonial */}
            {testimonial && (
                <Section className="rounded-2xl border border-border/60 bg-card/60">
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
            <Section className="rounded-2xl border border-border/60 bg-card/80" padding="large">
                <AnimatedSection className="text-center max-w-3xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
                        Ready for a website that
                        <br />
                        <span className="text-gradient">actually brings in leads?</span>
                    </h2>
                    <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
                        Tell me what you&apos;re working on. I&apos;ll reply within one business day with a clear next step.
                    </p>
                    <p className="mb-8 text-sm text-muted-foreground">
                        Based in the Poconos, working with niche service businesses locally and remotely.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact?source=home-cta" className="btn-primary">
                            Start a conversation
                        </Link>
                        <Link href="/work" className="btn-secondary">
                            Browse case studies
                        </Link>
                    </div>
                </AnimatedSection>
            </Section>
        </>
    );
}
