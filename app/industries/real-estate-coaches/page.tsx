import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { Section, SectionHeading } from "@/components/sections/Section";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/motion/AnimatedSection";
import { ProjectCard } from "@/components/work/ProjectCard";
import { getProjectBySlug, type Project } from "@/content/projects";
import { createPageMetadata } from "@/lib/seo";
import {
    getBreadcrumbStructuredData,
    getFaqStructuredData,
    getServiceStructuredData,
} from "@/lib/structuredData";
import {
    IconArrowRight,
    IconBrandGoogle,
    IconBuildingSkyscraper,
    IconCalendarEvent,
    IconChartLine,
    IconCrown,
    IconMicrophone2,
    IconShieldCheck,
} from "@tabler/icons-react";

export const metadata: Metadata = createPageMetadata({
    title: "Website Design for Real Estate Coaches and Brokerages",
    description:
        "Website design for real estate coaches, educators, consultants, and brokerages that need authority-first messaging, clear offers, and better strategy-call leads.",
    path: "/industries/real-estate-coaches",
    keywords: [
        "website design for real estate coaches",
        "real estate coaching website design",
        "brokerage website design",
        "real estate consultant website",
        "real estate speaker website design",
    ],
});

const outcomes = [
    {
        icon: IconCrown,
        title: "Premium positioning",
        description:
            "Your website should justify the value of your offer before anyone asks what the program costs.",
    },
    {
        icon: IconCalendarEvent,
        title: "Clear conversion paths",
        description:
            "Strategy calls, applications, events, and lead magnets need separate pathways so the right people take the next step.",
    },
    {
        icon: IconShieldCheck,
        title: "Proof that feels credible",
        description:
            "Testimonials, outcomes, and offer structure work harder when they are framed like evidence instead of hype.",
    },
];

const included = [
    {
        icon: IconMicrophone2,
        title: "Authority-first messaging",
        description:
            "Clear positioning for coaches, consultants, educators, and broker-owners who need to sound credible without sounding generic.",
    },
    {
        icon: IconChartLine,
        title: "Offer architecture",
        description:
            "Programs, intensives, masterminds, events, and strategy calls structured so the site helps qualify the right buyers.",
    },
    {
        icon: IconBrandGoogle,
        title: "Search-ready foundation",
        description:
            "Metadata, page structure, internal linking, and schema that help Google understand the audience and services you serve.",
    },
    {
        icon: IconBuildingSkyscraper,
        title: "Brokerage-friendly layouts",
        description:
            "If you run a team or brokerage, the site can support recruiting, education, and consumer-facing trust without becoming a cluttered all-in-one mess.",
    },
];

const fitFor = [
    "Real estate coaches, educators, speakers, and consultants.",
    "Brokerages or team leaders who need a more authority-driven site.",
    "Businesses selling premium offers that need stronger trust before the call.",
];

const faqs = [
    {
        q: "Can one site support coaching and brokerage offers?",
        a: "Yes, if the structure is intentional. We can separate audiences and conversion paths so recruiting, coaching, and consumer trust are not all fighting for the same attention.",
    },
    {
        q: "Do you help shape the offer and positioning?",
        a: "Yes. For this niche, copy and structure matter as much as visuals. I help tighten the messaging so the site feels more premium and less like a generic funnel page.",
    },
    {
        q: "Can you support webinars, lead magnets, or event registration?",
        a: "Yes. We can build landing pages and registration flows that support workshops, waitlists, downloads, and strategy calls without bloating the main site.",
    },
    {
        q: "What if I already have testimonials and social proof?",
        a: "Great. I can reorganize those assets so they support the story more effectively and feel more believable than a random wall of praise.",
    },
];

export default function RealEstateCoachesPage() {
    const momentum = getProjectBySlug("momentum-coaching");
    const northpoint = getProjectBySlug("northpoint-realty");
    const clarity = getProjectBySlug("clarity-growth");
    const featured = [momentum, northpoint, clarity].filter(
        (project): project is Project => Boolean(project)
    );

    const structuredData = [
        getBreadcrumbStructuredData([
            { name: "Home", path: "/" },
            { name: "Industries", path: "/industries" },
            { name: "Real Estate Coaches", path: "/industries/real-estate-coaches" },
        ]),
        getServiceStructuredData({
            name: "Website Design for Real Estate Coaches and Brokerages",
            description:
                "Authority-first website design for real estate coaches, consultants, educators, and brokerages that need premium positioning and better-qualified leads.",
            path: "/industries/real-estate-coaches",
            audience: [
                "Real estate coaches",
                "Real estate consultants",
                "Brokerages",
                "Real estate educators",
            ],
        }),
        getFaqStructuredData(faqs),
    ];

    return (
        <>
            <JsonLd data={structuredData} />

            <Section className="pt-28 sm:pt-32 md:pt-40" padding="none">
                <AnimatedSection>
                    <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card shadow-[var(--shadow-soft)] px-6 py-8 sm:px-8 sm:py-10">
                        <div className="relative grid gap-8 lg:grid-cols-5 lg:items-end">
                            <div className="lg:col-span-3 space-y-6">
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                                    Websites for real estate coaches and brokerages
                                    <br />
                                    <span className="text-gradient">that command authority.</span>
                                </h1>
                                <p className="text-lg text-muted-foreground max-w-2xl">
                                    For coaching brands, educators, team leaders, and brokerages that need stronger positioning, cleaner offers, and a site that supports strategy-call or program leads.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <Link href="/contact?source=real-estate-coaches" className="btn-primary">
                                        Talk through your website
                                    </Link>
                                    <Link href="/services/landing-pages" className="btn-secondary inline-flex items-center gap-2">
                                        See landing page support <IconArrowRight className="w-4 h-4" stroke={2} />
                                    </Link>
                                </div>
                            </div>

                            <div className="lg:col-span-2">
                                <div className="rounded-2xl border border-border/60 bg-background/55 backdrop-blur-sm p-6">
                                    <p className="text-sm font-semibold text-foreground">Built for premium offers</p>
                                    <div className="mt-4 grid gap-3">
                                        {[
                                            { label: "Primary conversions", value: "Applications, calls, registrations" },
                                            { label: "Best fit", value: "Programs, coaching, recruiting, authority" },
                                            { label: "Growth support", value: "Landing pages + SEO retainers" },
                                        ].map((item) => (
                                            <div
                                                key={item.label}
                                                className="flex items-start justify-between gap-4 rounded-xl border border-border/60 bg-card/55 px-4 py-3"
                                            >
                                                <p className="text-xs font-medium text-muted-foreground">{item.label}</p>
                                                <p className="text-sm font-semibold text-foreground text-right">{item.value}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>
            </Section>

            <Section className="pt-10 md:pt-14" padding="none">
                <StaggerContainer className="grid gap-4 md:grid-cols-3" staggerDelay={0.08}>
                    {outcomes.map((item) => (
                        <StaggerItem key={item.title}>
                            <div className="h-full rounded-2xl border border-border/60 bg-card shadow-[var(--shadow-soft)] p-6">
                                <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl border border-border/60 bg-muted/50 text-primary">
                                    <item.icon className="w-5 h-5" stroke={1.5} />
                                </div>
                                <p className="mt-4 text-lg font-semibold text-foreground">{item.title}</p>
                                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </Section>

            <Section className="rounded-2xl bg-muted/35">
                <AnimatedSection>
                    <SectionHeading
                        title="What this niche usually needs"
                        subtitle="A premium-feeling site with stronger offer clarity, proof, and pathways for the right leads."
                    />
                </AnimatedSection>

                <StaggerContainer className="grid gap-6 md:grid-cols-2" staggerDelay={0.1}>
                    {included.map((item) => (
                        <StaggerItem key={item.title}>
                            <div className="h-full rounded-2xl border border-border/60 bg-card shadow-[var(--shadow-soft)] p-7">
                                <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl border border-border/60 bg-muted/50 text-primary">
                                    <item.icon className="w-5 h-5" stroke={1.5} />
                                </div>
                                <h3 className="mt-5 text-xl font-semibold text-foreground">{item.title}</h3>
                                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </Section>

            <Section>
                <div className="grid gap-10 md:grid-cols-2">
                    <AnimatedSection>
                        <div className="h-full rounded-2xl border border-border/60 bg-card shadow-[var(--shadow-soft)] p-6 sm:p-8">
                            <h2 className="text-lg font-semibold text-foreground mb-4">Great fit if</h2>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                {fitFor.map((item) => (
                                    <li key={item} className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={0.08}>
                        <div className="h-full rounded-2xl border border-border/60 bg-card shadow-[var(--shadow-soft)] p-6 sm:p-8">
                            <h2 className="text-lg font-semibold text-foreground mb-4">Helpful next steps</h2>
                            <p className="text-sm text-muted-foreground">
                                These sites often perform best when the core website is paired with focused landing pages, a clean email capture flow, and clear social proof tied to one or two signature offers.
                            </p>
                            <div className="mt-6 flex flex-col gap-3">
                                <Link href="/services/landing-pages" className="btn-secondary text-center">
                                    See landing page support
                                </Link>
                                <Link href="/services/growth-retainers" className="btn-secondary text-center">
                                    See ongoing SEO and growth support
                                </Link>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </Section>

            {featured.length > 0 ? (
                <Section>
                    <AnimatedSection>
                        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-10">
                            <div className="max-w-2xl">
                                <h2 className="text-3xl font-bold text-foreground md:text-4xl">Relevant work</h2>
                                <p className="mt-2 text-muted-foreground">
                                    These projects show the mix of premium positioning, conversion thinking, and niche messaging this audience usually needs.
                                </p>
                            </div>
                            <Link
                                href="/work?industry=coaching"
                                className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors group"
                            >
                                <span className="font-medium">Browse related case studies</span>
                                <IconArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" stroke={2} />
                            </Link>
                        </div>
                    </AnimatedSection>

                    <div className={`grid gap-6 sm:gap-8 md:grid-cols-2 ${featured.length === 4 ? "lg:grid-cols-2" : "lg:grid-cols-3"}`}>
                        {featured.map((project, index) => (
                            <ProjectCard key={project.slug} project={project} index={index} />
                        ))}
                    </div>
                </Section>
            ) : null}

            <Section className="pt-10 md:pt-14" padding="none">
                <AnimatedSection>
                    <SectionHeading
                        title="FAQ"
                        subtitle="A few common questions from coaches, brokerages, and authority-driven brands."
                    />
                </AnimatedSection>

                <StaggerContainer className="grid gap-4 md:grid-cols-2" staggerDelay={0.08}>
                    {faqs.map((item) => (
                        <StaggerItem key={item.q}>
                            <div className="rounded-2xl border border-border/60 bg-card shadow-[var(--shadow-soft)] p-7">
                                <h3 className="text-lg font-semibold text-foreground">{item.q}</h3>
                                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.a}</p>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </Section>

            <Section className="border-t border-border/40">
                <AnimatedSection className="text-center max-w-2xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                        Want a site that supports premium offers and stronger leads?
                    </h2>
                    <p className="text-muted-foreground mb-8">
                        Tell me what you sell, who it is for, and where the current site falls short. I&apos;ll respond within one business day with clear next steps.
                    </p>
                    <Link href="/contact?source=real-estate-coaches" className="btn-primary">
                        Start the conversation
                    </Link>
                </AnimatedSection>
            </Section>
        </>
    );
}
