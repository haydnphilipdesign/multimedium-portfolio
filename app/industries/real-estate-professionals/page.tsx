import type { Metadata } from "next";
import Link from "next/link";
import { ProjectCard } from "@/components/work/ProjectCard";
import { HowItWorks } from "@/components/marketing/HowItWorks";
import { JsonLd } from "@/components/seo/JsonLd";
import { Section } from "@/components/sections/Section";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/motion/AnimatedSection";
import { projects } from "@/content/projects";
import { createPageMetadata } from "@/lib/seo";
import {
    getBreadcrumbStructuredData,
    getFaqStructuredData,
    getServiceStructuredData,
} from "@/lib/structuredData";
import {
    IconArrowRight,
    IconBolt,
    IconBuildingSkyscraper,
    IconChartLine,
    IconCircleCheck,
    IconClock,
    IconMail,
    IconMapPin,
    IconShieldCheck,
} from "@tabler/icons-react";

export const metadata: Metadata = createPageMetadata({
    title: "Real Estate Website Design for Agents, Teams, and Brokerages",
    description:
        "Real estate website design for agents, teams, and brokerages that need stronger local trust, clearer positioning, and better buyer or seller inquiries.",
    path: "/industries/real-estate-professionals",
    keywords: [
        "real estate website design",
        "real estate web design",
        "brokerage website design",
        "real estate marketing website",
        "real estate website design poconos",
    ],
});

const proof = [
    {
        icon: IconClock,
        value: "4–6 weeks",
        label: "typical timeline",
        detail: "Plan, design, build, and launch without the agency sprawl.",
    },
    {
        icon: IconShieldCheck,
        value: "High-trust",
        label: "positioning",
        detail: "Clear messaging, proof, and page flow for skeptical leads.",
    },
    {
        icon: IconChartLine,
        value: "Lead-ready",
        label: "conversion path",
        detail: "CTAs, forms, and structure built for real inquiries.",
    },
];

const outcomes = [
    {
        title: "Win trust fast",
        description:
            "Messaging and layout built for clarity so buyers, sellers, and referral partners feel confident reaching out quickly.",
    },
    {
        title: "Look established in your market",
        description:
            "Service area structure, proof, and positioning help your site feel more credible than the average template-based agent site.",
    },
    {
        title: "Get more inquiries, not more noise",
        description:
            "Lead capture is built to guide higher-fit conversations instead of just chasing clicks and vanity traffic.",
    },
];

const fit = [
    "You want a high-trust site, not a generic real estate template.",
    "Your current site looks acceptable but does not support buyer or seller conversion well.",
    "You want a clearer service-area story for your market, neighborhoods, or specialties.",
    "You want one partner to handle strategy, copy direction, design, and build.",
];

const faq = [
    {
        q: "Do you build IDX sites?",
        a: "If you already have an IDX provider, I can integrate it cleanly. If not, we can structure the site around service areas, buyer and seller pathways, and focused lead-capture pages that still perform well without heavy IDX complexity.",
    },
    {
        q: "Can you match my brokerage or team branding?",
        a: "Yes. I can work inside an existing visual system while still improving clarity, hierarchy, and conversion structure so the site feels more established.",
    },
    {
        q: "Do you help with copy and messaging?",
        a: "Yes. The build includes page structure and messaging guidance so the site speaks clearly to your market instead of relying on generic real-estate filler copy.",
    },
    {
        q: "Can you migrate from Squarespace, Wix, or WordPress?",
        a: "Yes. We can keep what is worth keeping, improve what is weak, and launch something faster and easier to extend over time.",
    },
];

export default function RealEstateProfessionalsPage() {
    const schedulingUrl = process.env.NEXT_PUBLIC_SCHEDULING_URL;
    const contactHref = "/contact?source=real-estate-professionals&projectType=website";

    const realEstateProjects = projects
        .filter((project) => project.industries?.includes("real-estate"))
        .slice(0, 3);

    const structuredData = [
        getBreadcrumbStructuredData([
            { name: "Home", path: "/" },
            { name: "Industries", path: "/industries" },
            { name: "Real Estate Professionals", path: "/industries/real-estate-professionals" },
        ]),
        getServiceStructuredData({
            name: "Real Estate Website Design",
            description:
                "Website design for real estate agents, teams, and brokerages that need stronger local trust and better-qualified inquiries.",
            path: "/industries/real-estate-professionals",
            audience: ["Real estate agents", "Real estate teams", "Brokerages"],
        }),
        getFaqStructuredData(faq),
    ];

    return (
        <>
            <JsonLd data={structuredData} />

            <div className="relative overflow-hidden border-b border-border/40">
                <Section className="pt-28 sm:pt-32 md:pt-40" padding="none">
                    <AnimatedSection>
                        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 items-start">
                            <div className="max-w-2xl">
                                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-background/80 backdrop-blur-sm text-foreground border border-border/60 mb-6">
                                    <IconBuildingSkyscraper className="w-4 h-4 text-primary" stroke={1.5} />
                                    Real estate website design
                                </span>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                                    A real estate website that <span className="text-gradient">wins trust fast</span> and makes contacting you the obvious next step.
                                </h1>
                                <p className="mt-6 text-lg md:text-xl text-muted-foreground">
                                    Built for agents, teams, and brokerages that want fewer tire-kickers, clearer positioning,
                                    and a site that feels credible on mobile and in local search.
                                </p>

                                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                                    {schedulingUrl ? (
                                        <a
                                            href={schedulingUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-primary inline-flex items-center justify-center gap-2"
                                        >
                                            <IconBolt className="w-4 h-4" stroke={2} />
                                            Book a quick call
                                        </a>
                                    ) : (
                                        <Link href={contactHref} className="btn-primary inline-flex items-center justify-center gap-2">
                                            <IconMail className="w-4 h-4" stroke={2} />
                                            Get a quote
                                        </Link>
                                    )}

                                    <Link
                                        href={contactHref}
                                        className="btn-secondary inline-flex items-center justify-center gap-2"
                                    >
                                        Send a message
                                        <IconArrowRight className="w-4 h-4" stroke={2} />
                                    </Link>
                                </div>

                                <p className="mt-4 text-sm text-muted-foreground">
                                    Based in the Poconos, serving real-estate-focused businesses locally and remotely.
                                </p>
                            </div>

                            <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card shadow-[var(--shadow-soft)] p-6 sm:p-7">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
                                <div className="relative space-y-6">
                                    <p className="text-sm font-semibold text-foreground">
                                        What you get
                                    </p>
                                    <ul className="space-y-3 text-sm text-muted-foreground">
                                        {[
                                            "Homepage plus focused buyer, seller, or specialty pathways",
                                            "Neighborhood, market, or service-area structure without bloat",
                                            "Lead capture that feels credible instead of pushy",
                                            "Fast performance, analytics, and clean technical SEO",
                                            "A site that supports your brand beyond listing portals",
                                        ].map((item) => (
                                            <li key={item} className="flex items-start gap-3">
                                                <IconCircleCheck className="mt-0.5 h-4 w-4 text-primary" stroke={1.6} />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="rounded-xl border border-border/60 bg-muted/25 p-4">
                                        <div className="flex items-start gap-3">
                                            <IconMapPin className="mt-0.5 h-4 w-4 text-primary" stroke={1.6} />
                                            <div>
                                                <p className="text-sm font-medium text-foreground">
                                                    Built for local trust
                                                </p>
                                                <p className="mt-1 text-sm text-muted-foreground">
                                                    Your website should feel like the most credible option in your market before anyone opens Zillow or asks for a referral.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                </Section>

                <Section className="pt-10 pb-14 md:pb-20" padding="none">
                    <StaggerContainer className="grid gap-4 sm:grid-cols-3" staggerDelay={0.06}>
                        {proof.map((item) => (
                            <StaggerItem key={item.label}>
                                <div className="rounded-2xl border border-border/60 bg-card/82 backdrop-blur-sm px-6 py-5">
                                    <div className="flex items-start gap-3">
                                        <item.icon className="h-5 w-5 text-primary" stroke={1.6} />
                                        <div>
                                            <p className="text-lg font-semibold text-foreground">
                                                {item.value} <span className="text-muted-foreground font-medium">{item.label}</span>
                                            </p>
                                            <p className="mt-1 text-sm text-muted-foreground">{item.detail}</p>
                                        </div>
                                    </div>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </Section>
            </div>

            <Section>
                <AnimatedSection>
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                            A site that feels credible and converts without sounding like canned agent copy.
                        </h2>
                        <p className="mt-4 text-muted-foreground">
                            The opportunity is not just to look better. It is to make your positioning clearer so the right visitors understand what makes you different.
                        </p>
                    </div>
                </AnimatedSection>

                <StaggerContainer className="mt-10 grid gap-6 md:grid-cols-3" staggerDelay={0.08}>
                    {outcomes.map((item) => (
                        <StaggerItem key={item.title}>
                            <div className="h-full rounded-2xl border border-border/60 bg-card shadow-[var(--shadow-soft)] px-6 py-6">
                                <p className="text-lg font-semibold text-foreground">{item.title}</p>
                                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </Section>

            <div className="relative border-y border-border/40 rounded-2xl bg-muted/35">
                <Section>
                    <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-14 items-start">
                        <AnimatedSection>
                            <div className="max-w-xl">
                                <h2 className="text-2xl md:text-3xl font-bold text-foreground">Great fit if…</h2>
                                <p className="mt-3 text-muted-foreground">
                                    You do not need more fluff pages. You need a clearer story, stronger local trust, and a path that turns visits into conversations.
                                </p>
                            </div>
                        </AnimatedSection>
                        <AnimatedSection delay={0.1}>
                            <div className="rounded-2xl border border-border/60 bg-card shadow-[var(--shadow-soft)] p-6 sm:p-7">
                                <ul className="space-y-3 text-sm text-muted-foreground">
                                    {fit.map((item) => (
                                        <li key={item} className="flex items-start gap-3">
                                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                                    <Link href={contactHref} className="btn-primary inline-flex items-center justify-center gap-2">
                                        Get pricing + timeline
                                        <IconArrowRight className="w-4 h-4" stroke={2} />
                                    </Link>
                                    <Link href="/work?industry=real-estate&source=real-estate-professionals" className="btn-secondary inline-flex items-center justify-center gap-2">
                                        See real estate work
                                        <IconArrowRight className="w-4 h-4" stroke={2} />
                                    </Link>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </Section>
            </div>

            <Section className="rounded-2xl bg-muted/35">
                <AnimatedSection>
                    <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                                Also serving real estate coaches and transaction coordinators
                            </h2>
                            <p className="mt-3 text-muted-foreground">
                                If your business is adjacent to brokerage work, there are separate pages for coaching brands and TC businesses so each audience gets more relevant messaging.
                            </p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <Link href="/industries/real-estate-coaches" className="btn-secondary text-center">
                                See the coach page
                            </Link>
                            <Link href="/industries/transaction-coordinators" className="btn-secondary text-center">
                                See the TC page
                            </Link>
                        </div>
                    </div>
                </AnimatedSection>
            </Section>

            {realEstateProjects.length > 0 && (
                <Section>
                    <AnimatedSection>
                        <div className="max-w-3xl">
                            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                                Real projects in real estate and operations
                            </h2>
                            <p className="mt-3 text-muted-foreground">
                                A few relevant builds that show the polish, clarity, and conversion thinking you can expect.
                            </p>
                        </div>
                    </AnimatedSection>
                    <div className="mt-10 grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {realEstateProjects.map((project, index) => (
                            <ProjectCard key={project.slug} project={project} index={index} />
                        ))}
                    </div>
                </Section>
            )}

            <Section>
                <HowItWorks contactSource="real-estate-professionals-how-it-works" />
            </Section>

            <Section className="border-t border-border/40">
                <AnimatedSection>
                    <div className="max-w-3xl">
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground">FAQ</h2>
                        <p className="mt-3 text-muted-foreground">
                            A few common questions from agents, teams, and brokerages.
                        </p>
                    </div>
                </AnimatedSection>

                <div className="mt-10 grid gap-4 md:max-w-4xl">
                    {faq.map((item) => (
                        <details
                            key={item.q}
                            className="group rounded-2xl border border-border/60 bg-card shadow-[var(--shadow-soft)] px-6 py-5 open:bg-card/80 transition-colors"
                        >
                            <summary className="cursor-pointer list-none">
                                <div className="flex items-start justify-between gap-6">
                                    <p className="text-base font-semibold text-foreground">{item.q}</p>
                                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full border border-border/60 text-muted-foreground group-open:text-foreground">
                                        +
                                    </span>
                                </div>
                            </summary>
                            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{item.a}</p>
                        </details>
                    ))}
                </div>
            </Section>

            <Section className="border-t border-border/40">
                <AnimatedSection className="text-center max-w-2xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                        Get a clear plan and next steps in one reply.
                    </h2>
                    <p className="text-muted-foreground mb-8">
                        Tell me your market, what you sell, and what you want the site to accomplish. I&apos;ll respond within one business day.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Link href={contactHref} className="btn-primary inline-flex items-center justify-center gap-2">
                            Send a message
                            <IconArrowRight className="w-4 h-4" stroke={2} />
                        </Link>
                        <Link href="/work?industry=real-estate&source=real-estate-professionals" className="btn-secondary inline-flex items-center justify-center gap-2">
                            See real estate work
                            <IconArrowRight className="w-4 h-4" stroke={2} />
                        </Link>
                    </div>
                </AnimatedSection>
            </Section>
        </>
    );
}
