import { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { Section, SectionHeading } from "@/components/sections/Section";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { HowItWorks } from "@/components/marketing/HowItWorks";
import { projects } from "@/content/projects";
import { createPageMetadata } from "@/lib/seo";
import {
    getBreadcrumbStructuredData,
    getCollectionPageStructuredData,
} from "@/lib/structuredData";
import { IconLayout, IconCode, IconArrowRight, IconPackage, IconSettings } from "@tabler/icons-react";

export const metadata: Metadata = createPageMetadata({
    title: "Web Design Services for Real Estate Professionals and TCs",
    description:
        "Website packages, custom websites, landing pages, and retainers for transaction coordinators, real estate professionals, coaches, and select service businesses.",
    path: "/services",
    keywords: [
        "web design services",
        "real estate website design services",
        "landing page design service",
        "seo retainer for service businesses",
    ],
});

const services = [
    {
        icon: IconPackage,
        title: "TC Website Packages",
        description:
            "Productized Presence, Starter, Growth, and Pro packages for transaction coordinators who need trust, clear services, and easier file starts.",
        href: "/tc-packages",
        timeline: "1–6 weeks",
        cta: "Compare TC packages",
    },
    {
        icon: IconLayout,
        title: "Custom Websites",
        description:
            "Full sites and redesigns for real estate professionals, coaches, brokerages, and select service businesses.",
        href: "/services/website",
        timeline: "4–6 weeks",
        cta: "See website scope",
    },
    {
        icon: IconCode,
        title: "Landing Pages",
        description:
            "Single-focus pages for referral partners, recruiting, offers, campaigns, and booking paths.",
        href: "/services/landing-pages",
        timeline: "1–3 weeks",
        cta: "See landing page scope",
    },
    {
        icon: IconSettings,
        title: "Hosting, Maintenance & Retainers",
        description:
            "Managed hosting, support, and practical improvements after launch so the site keeps working.",
        href: "/services/growth-retainers",
        timeline: "Ongoing",
        cta: "See support options",
    },
];

type ServiceItem = (typeof services)[number];

export default function ServicesPage() {
    const featuredProjectCount = projects.filter((p) => p.featured).length;
    const structuredData = [
        getBreadcrumbStructuredData([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
        ]),
        getCollectionPageStructuredData({
            name: "Multimedium Web Design Services",
            description:
                "Website packages, custom websites, landing pages, and retainers for transaction coordinators, real estate professionals, coaches, and select service businesses.",
            path: "/services",
        }),
    ];

    return (
        <>
            <JsonLd data={structuredData} />
            <Section className="pt-28 sm:pt-32 md:pt-40" padding="none">
                <AnimatedSection>
                    <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card px-6 py-8 shadow-[var(--shadow-soft)] sm:px-8 sm:py-10">
                        <div className="relative max-w-3xl">
                            <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
                                Choose the simplest path to a better website.
                            </h1>
                            <p className="mt-6 text-lg text-muted-foreground">
                                Website packages, custom builds, landing pages, and ongoing support for transaction coordinators, real estate professionals, coaches, and select service businesses.
                            </p>
                            <div className="mt-7 grid gap-3 sm:grid-cols-3">
                                <div className="rounded-xl border border-border/60 bg-background/70 px-4 py-3">
                                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Case studies</p>
                                    <p className="mt-1 text-sm font-medium text-foreground">{featuredProjectCount} published projects</p>
                                </div>
                                <div className="rounded-xl border border-border/60 bg-background/70 px-4 py-3">
                                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Typical launch</p>
                                    <p className="mt-1 text-sm font-medium text-foreground">4–6 weeks</p>
                                </div>
                                <div className="rounded-xl border border-border/60 bg-background/70 px-4 py-3">
                                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Core lanes</p>
                                    <p className="mt-1 text-sm font-medium text-foreground">TCs, agents, coaches</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>
            </Section>

            <Section className="pt-10 md:pt-14" padding="none">
                <div className="grid gap-6 md:grid-cols-2">
                    <AnimatedSection>
                        <div className="h-full rounded-2xl border border-border/60 bg-card shadow-[var(--shadow-soft)] p-6 sm:p-8">
                            <h2 className="text-lg font-semibold text-foreground mb-4">Great fit if</h2>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
                                    You want more inquiries, bookings, or leads from the site.
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
                                    Your current site feels outdated, unclear, or slow on mobile.
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
                                    You want one person to own strategy, design, and build.
                                </li>
                            </ul>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={0.08}>
                        <div className="h-full rounded-2xl border border-border/60 bg-card shadow-[var(--shadow-soft)] p-6 sm:p-8">
                            <h2 className="text-lg font-semibold text-foreground mb-4">Best results when</h2>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
                                    You can support a realistic timeline instead of a rush launch.
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
                                    You want clear messaging and conversion structure, not just a template refresh.
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
                                    You are ready to review content and give timely decisions.
                                </li>
                            </ul>
                        </div>
                    </AnimatedSection>
                </div>
            </Section>

            <Section className="pt-10 md:pt-14" padding="none">
                <AnimatedSection>
                    <div className="rounded-2xl border border-border/60 bg-card shadow-[var(--shadow-soft)] p-6 sm:p-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <p className="text-sm font-medium text-foreground">See how I work with your niche:</p>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <Link href="/industries/real-estate-professionals?source=services" className="btn-secondary">
                                Real estate professionals
                            </Link>
                            <Link href="/industries/transaction-coordinators?source=services" className="btn-secondary">
                                Transaction coordinators
                            </Link>
                            <Link href="/industries/real-estate-coaches?source=services" className="btn-secondary">
                                Coaches & brokerages
                            </Link>
                        </div>
                    </div>
                </AnimatedSection>
            </Section>

            <Section className="bg-white" size="full">
                <div className="mx-auto max-w-6xl">
                    <AnimatedSection>
                        <SectionHeading
                            title="Two ways to work together"
                            subtitle="Pick the path that matches what you already know. If you are not sure, the discovery call is where we choose the simplest option."
                        />
                    </AnimatedSection>

                    <div className="grid gap-6 lg:grid-cols-2">
                        <ServicePath
                            eyebrow="Path A"
                            title="I know I need a website"
                            services={services.slice(0, 2)}
                        />
                        <ServicePath
                            eyebrow="Path B"
                            title="I need something specific"
                            services={services.slice(2)}
                        />
                    </div>
                </div>
            </Section>

            <Section className="rounded-2xl bg-muted/35">
                <HowItWorks contactSource="services-how-it-works" />
            </Section>

            <Section className="rounded-2xl border border-border/60 bg-card/80" padding="large">
                <AnimatedSection className="text-center max-w-2xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                        Not sure which one fits?
                    </h2>
                    <p className="text-muted-foreground mb-8">
                        Tell me what you&apos;re building and what matters most. I&apos;ll recommend the simplest path to results.
                    </p>
                    <Link href="/contact?source=services" className="btn-primary">
                        Book a free discovery call
                    </Link>
                </AnimatedSection>
            </Section>
        </>
    );
}

function ServicePath({
    eyebrow,
    title,
    services,
}: {
    eyebrow: string;
    title: string;
    services: ServiceItem[];
}) {
    return (
        <div className="rounded-xl border border-border/70 bg-card p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                {eyebrow}
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-foreground">{title}</h2>
            <div className="mt-6 grid gap-4">
                {services.map((service) => (
                    <Link
                        key={service.title}
                        href={service.href}
                        className="group block rounded-xl border border-border/60 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40"
                    >
                        <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                            <service.icon className="w-5 h-5" stroke={1.5} />
                        </div>
                        <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
                        <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>
                        <div className="mt-5 flex items-center justify-between gap-4 text-xs text-muted-foreground">
                            <span className="font-mono">{service.timeline}</span>
                            <span className="inline-flex items-center gap-2 text-foreground group-hover:text-primary transition-colors">
                                {service.cta}
                                <IconArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" stroke={2} />
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
