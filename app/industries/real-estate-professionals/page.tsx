import type { Metadata } from "next";
import Link from "next/link";
import { ProjectCard } from "@/components/work/ProjectCard";
import { HowItWorks } from "@/components/marketing/HowItWorks";
import { JsonLd } from "@/components/seo/JsonLd";
import { Section } from "@/components/sections/Section";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/motion/AnimatedSection";
import { MonoLabel, CheckRow } from "@/components/sections/Editorial";
import { CTARuled } from "@/components/marketing/CTA";
import { getClientProjectsByIndustry, getProductProjects } from "@/content/projects";
import { createPageMetadata } from "@/lib/seo";
import {
    getBreadcrumbStructuredData,
    getFaqStructuredData,
    getServiceStructuredData,
} from "@/lib/structuredData";
import {
    IconArrowRight,
    IconBolt,
    IconChartLine,
    IconClock,
    IconMail,
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
        value: "One owner",
        label: "strategy to launch",
        detail: "Messaging, design, and build handled by one person.",
    },
    {
        icon: IconChartLine,
        value: "Lead-ready",
        label: "inquiry path",
        detail: "CTAs, forms, and page flow aimed at real inquiries.",
    },
];

const outcomes = [
    {
        title: "Look like the safe choice",
        description:
            "Messaging and layout that give buyers, sellers, and referral partners a reason to feel confident reaching out.",
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

    // Real client work first, then internal products — never concept/demo work.
    const realEstateProjects = [
        ...getClientProjectsByIndustry("real-estate"),
        ...getProductProjects().filter((p) => p.industries?.includes("real-estate")),
    ].slice(0, 3);

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

            <div className="border-b border-rule">
                <Section className="pt-32 sm:pt-36 md:pt-44" padding="none">
                    <AnimatedSection>
                        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 items-start">
                            <div className="max-w-2xl">
                                <MonoLabel className="mb-6">Real estate website design</MonoLabel>
                                <h1 className="font-display text-5xl text-foreground sm:text-6xl md:text-[4.25rem] display-balance">
                                    A real estate website that <span className="text-gradient">holds up</span> when buyers and sellers check you out.
                                </h1>
                                <p className="mt-7 text-lg md:text-xl leading-relaxed text-foreground/80">
                                    Built for agents, teams, and brokerages that want fewer tire-kickers, clearer positioning,
                                    and a site that feels credible on mobile and in local search.
                                </p>

                                <div className="mt-9 flex flex-col sm:flex-row gap-3">
                                    {schedulingUrl ? (
                                        <a
                                            href={schedulingUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-primary group"
                                        >
                                            <IconBolt className="w-4 h-4" stroke={2} />
                                            Book a quick call
                                        </a>
                                    ) : (
                                        <Link href={contactHref} className="btn btn-primary">
                                            <IconMail className="w-4 h-4" stroke={2} />
                                            Get a quote
                                        </Link>
                                    )}

                                    <Link href={contactHref} className="btn btn-secondary group">
                                        Send a message
                                        <IconArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" stroke={2} />
                                    </Link>
                                </div>

                                <p className="mono-meta mt-6">
                                    Based in the Poconos — serving real-estate-focused businesses locally and remotely.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-border/70 bg-surface-1 p-6 shadow-[var(--shadow-soft)] sm:p-7">
                                <MonoLabel className="mb-4 text-muted-foreground">What you get</MonoLabel>
                                <ul className="ledger border-t border-rule">
                                    {[
                                        "Homepage plus focused buyer, seller, or specialty pathways",
                                        "Neighborhood, market, or service-area structure without bloat",
                                        "Lead capture that feels credible instead of pushy",
                                        "Fast performance, analytics, and clean technical SEO",
                                        "A site that supports your brand beyond listing portals",
                                    ].map((item) => (
                                        <CheckRow key={item} className="py-3">{item}</CheckRow>
                                    ))}
                                </ul>

                                <p className="mt-5 border-l-2 border-primary/50 pl-4 text-sm leading-relaxed text-foreground/75">
                                    <span className="font-semibold text-foreground">Built for local trust:</span> your
                                    website should feel like the most credible option in your market before anyone opens
                                    Zillow or asks for a referral.
                                </p>
                            </div>
                        </div>
                    </AnimatedSection>

                    <Section className="pt-10 pb-14 md:pb-20" padding="none">
                        <StaggerContainer className="grid gap-px border-y border-rule sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-rule" staggerDelay={0.06}>
                            {proof.map((item) => (
                                <StaggerItem key={item.label}>
                                    <div className="py-6 sm:px-6 sm:first:pl-0">
                                        <p className="font-display text-2xl text-foreground">{item.value}</p>
                                        <p className="mono-meta mt-1">{item.label}</p>
                                        <p className="mt-3 text-sm leading-relaxed text-foreground/70">{item.detail}</p>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </Section>
                </Section>
            </div>

            <Section>
                <AnimatedSection>
                    <div className="max-w-3xl">
                        <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                            Credible without sounding like canned agent copy.
                        </h2>
                        <p className="mt-4 text-muted-foreground">
                            Looking better is the easy part. The harder job is saying what you do differently — clearly enough that the right visitors reach out and the wrong ones move on.
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

            <section className="border-y border-rule bg-surface-1">
                <Section>
                    <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16 items-start">
                        <AnimatedSection>
                            <div className="max-w-xl">
                                <MonoLabel className="mb-5">Great fit if…</MonoLabel>
                                <h2 className="font-display text-3xl text-foreground sm:text-4xl">A clearer story, stronger local trust</h2>
                                <p className="mt-5 text-lg leading-relaxed text-foreground/78">
                                    You don&apos;t need more pages. You need a sharper story about your market and a path that turns visits into conversations.
                                </p>
                            </div>
                        </AnimatedSection>
                        <AnimatedSection delay={0.1}>
                            <ul className="ledger border-t border-rule">
                                {fit.map((item) => (
                                    <CheckRow key={item}>{item}</CheckRow>
                                ))}
                            </ul>
                            <div className="mt-7 flex flex-col sm:flex-row gap-3">
                                <Link href={contactHref} className="btn btn-primary group">
                                    Get pricing + timeline
                                    <IconArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" stroke={2} />
                                </Link>
                                <Link href="/work?industry=real-estate&source=real-estate-professionals" className="btn btn-secondary">
                                    See real estate work
                                </Link>
                            </div>
                        </AnimatedSection>
                    </div>
                </Section>
            </section>

            <Section>
                <AnimatedSection>
                    <div className="grid gap-8 border-t border-rule pt-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
                        <div>
                            <MonoLabel className="mb-4">Adjacent audiences</MonoLabel>
                            <h2 className="font-display text-2xl text-foreground sm:text-3xl">
                                Also serving real estate coaches and transaction coordinators
                            </h2>
                            <p className="mt-4 text-lg leading-relaxed text-foreground/78">
                                If your business is adjacent to brokerage work, there are separate pages for coaching brands and TC businesses so each audience gets more relevant messaging.
                            </p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <Link href="/industries/real-estate-coaches" className="btn btn-secondary">
                                See the coach page
                            </Link>
                            <Link href="/industries/transaction-coordinators" className="btn btn-secondary">
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

            <Section className="border-t border-rule">
                <AnimatedSection>
                    <MonoLabel className="mb-5">FAQ</MonoLabel>
                    <h2 className="font-display text-3xl text-foreground sm:text-4xl">Common questions</h2>
                    <p className="mt-4 max-w-2xl text-lg leading-relaxed text-foreground/75">
                        A few common questions from agents, teams, and brokerages.
                    </p>
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
                title="Get a clear plan and next steps in one reply."
                body="Tell me your market, what you sell, and what you want the site to accomplish. I'll respond within one business day."
                primary={{ label: "Send a message", href: contactHref }}
                secondary={{ label: "See real estate work", href: "/work?industry=real-estate&source=real-estate-professionals" }}
            />
        </>
    );
}
