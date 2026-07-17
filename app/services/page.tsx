import { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { Section } from "@/components/sections/Section";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { MonoLabel, SectionOpener, RuledList, CheckRow } from "@/components/sections/Editorial";
import { CTAFlooded } from "@/components/marketing/CTA";
import { HowItWorks } from "@/components/marketing/HowItWorks";
import { projects } from "@/content/projects";
import { createPageMetadata } from "@/lib/seo";
import {
    getBreadcrumbStructuredData,
    getCollectionPageStructuredData,
} from "@/lib/structuredData";
import { IconArrowRight } from "@tabler/icons-react";

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
        title: "TC Website Packages",
        description:
            "Productized Presence, Starter, Growth, and Pro packages for transaction coordinators who need trust, clear services, and easier file starts.",
        href: "/tc-packages",
        timeline: "1–6 weeks",
        cta: "Compare TC packages",
    },
    {
        title: "Custom Websites",
        description:
            "Full sites and redesigns for real estate professionals, coaches, brokerages, and select service businesses.",
        href: "/services/website",
        timeline: "4–6 weeks",
        cta: "See website scope",
    },
    {
        title: "Landing Pages",
        description:
            "Single-focus pages for referral partners, recruiting, offers, campaigns, and booking paths.",
        href: "/services/landing-pages",
        timeline: "1–3 weeks",
        cta: "See landing page scope",
    },
    {
        title: "Hosting, Maintenance & Retainers",
        description:
            "Managed hosting, support, and practical improvements after launch so the site keeps working.",
        href: "/services/growth-retainers",
        timeline: "Ongoing",
        cta: "See support options",
    },
];

type ServiceItem = (typeof services)[number];

const greatFit = [
    "You want more inquiries, bookings, or leads from the site.",
    "Your current site feels outdated, unclear, or slow on mobile.",
    "You want one person to own strategy, design, and build.",
];

const bestResults = [
    "You can support a realistic timeline instead of a rush launch.",
    "You want clear messaging and conversion structure, not a template refresh.",
    "You are ready to review content and give timely decisions.",
];

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

    const stats = [
        { label: "Case studies", value: `${featuredProjectCount} published projects` },
        { label: "Typical launch", value: "4–6 weeks" },
        { label: "Core lanes", value: "TCs, agents, coaches" },
    ];

    return (
        <>
            <JsonLd data={structuredData} />
            {/* Editorial hero */}
            <Section className="pt-32 sm:pt-36 md:pt-44" padding="none">
                <AnimatedSection>
                    <MonoLabel className="mb-6">Services</MonoLabel>
                    <h1 className="max-w-3xl font-display text-5xl text-foreground sm:text-6xl md:text-7xl display-balance">
                        Choose the simplest path to a better website.
                    </h1>
                    <p className="mt-7 max-w-2xl text-lg leading-relaxed text-foreground/80 md:text-xl">
                        Website packages, custom builds, landing pages, and ongoing support for
                        transaction coordinators, real estate professionals, coaches, and select
                        service businesses.
                    </p>
                    <dl className="mt-10 grid gap-px border-y border-rule sm:grid-cols-3 sm:divide-x sm:divide-rule">
                        {stats.map((stat) => (
                            <div key={stat.label} className="py-5 sm:px-6 sm:first:pl-0">
                                <dt className="mono-label text-muted-foreground">{stat.label}</dt>
                                <dd className="mt-2 font-display text-lg text-foreground">{stat.value}</dd>
                            </div>
                        ))}
                    </dl>
                </AnimatedSection>
            </Section>

            {/* Fit — ruled lists */}
            <Section className="pt-4 md:pt-6" padding="none">
                <div className="grid gap-x-16 gap-y-10 md:grid-cols-2">
                    <AnimatedSection>
                        <MonoLabel index="01" className="mb-4">Great fit if</MonoLabel>
                        <ul className="ledger border-t border-rule">
                            {greatFit.map((item) => (
                                <CheckRow key={item}>{item}</CheckRow>
                            ))}
                        </ul>
                    </AnimatedSection>
                    <AnimatedSection delay={0.08}>
                        <MonoLabel index="02" className="mb-4">Best results when</MonoLabel>
                        <ul className="ledger border-t border-rule">
                            {bestResults.map((item) => (
                                <CheckRow key={item}>{item}</CheckRow>
                            ))}
                        </ul>
                    </AnimatedSection>
                </div>
            </Section>

            {/* Niche links */}
            <Section className="pt-10 md:pt-14" padding="none">
                <AnimatedSection>
                    <div className="flex flex-col gap-4 border-t border-rule pt-8 md:flex-row md:items-center md:justify-between">
                        <p className="mono-label text-muted-foreground">See how I work with your niche</p>
                        <div className="flex flex-col gap-3 sm:flex-row">
                            <Link href="/industries/real-estate-professionals?source=services" className="btn btn-sm btn-secondary">
                                Real estate professionals
                            </Link>
                            <Link href="/industries/transaction-coordinators?source=services" className="btn btn-sm btn-secondary">
                                Transaction coordinators
                            </Link>
                            <Link href="/industries/real-estate-coaches?source=services" className="btn btn-sm btn-secondary">
                                Coaches &amp; brokerages
                            </Link>
                        </div>
                    </div>
                </AnimatedSection>
            </Section>

            {/* Two ways to work — asymmetric ruled tracks */}
            <section className="bg-surface-1 border-y border-rule">
                <Section>
                    <AnimatedSection>
                        <SectionOpener
                            eyebrow="Pick a path"
                            eyebrowIndex="03"
                            title="Two ways to work together"
                            lead="Pick the path that matches what you already know. If you're not sure, the discovery call is where we choose the simplest option."
                        />
                    </AnimatedSection>

                    <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
                        <ServicePath eyebrow="Path A" title="I know I need a website" services={services.slice(0, 2)} />
                        <ServicePath eyebrow="Path B" title="I need something specific" services={services.slice(2)} />
                    </div>
                </Section>
            </section>

            <Section>
                <HowItWorks contactSource="services-how-it-works" />
            </Section>

            {/* CTA */}
            <CTAFlooded
                eyebrow="Not sure which fits?"
                title="Tell me what you're building."
                body="Describe the business and what the site needs to do. I'll recommend the option that fits — usually within one business day."
                primary={{ label: "Start a project", href: "/contact?source=services" }}
                secondary={{ label: "Compare TC packages", href: "/tc-packages" }}
            />
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
        <div>
            <p className="mono-label mb-1 text-muted-foreground">{eyebrow}</p>
            <h3 className="font-display text-2xl text-foreground">{title}</h3>
            <RuledList className="mt-5">
                {services.map((service) => (
                    <Link key={service.title} href={service.href} className="group ledger-row block py-5">
                        <div className="flex items-baseline justify-between gap-4">
                            <h4 className="font-display text-lg text-foreground transition-colors group-hover:text-primary sm:text-xl">
                                {service.title}
                            </h4>
                            <span className="mono-meta shrink-0">{service.timeline}</span>
                        </div>
                        <p className="mt-2 text-[15px] leading-relaxed text-foreground/70">{service.description}</p>
                        <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-foreground/80 transition-colors group-hover:text-primary">
                            {service.cta}
                            <IconArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" stroke={2} />
                        </span>
                    </Link>
                ))}
            </RuledList>
        </div>
    );
}
