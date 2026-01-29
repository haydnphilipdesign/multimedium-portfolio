import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/sections/Section";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/motion/AnimatedSection";
import { ProjectCard } from "@/components/work/ProjectCard";
import { getProjectBySlug, type Project } from "@/content/projects";
import {
    IconPhoneCall,
    IconMapPin,
    IconBolt,
    IconStars,
    IconBrandGoogle,
    IconArrowRight,
} from "@tabler/icons-react";

export const metadata: Metadata = {
    title: "Websites for Local Trades",
    description:
        "Web design for blue-collar trades and local service businesses: fast pages, trust signals, and quote/request flows that turn searches into calls.",
    alternates: {
        canonical: "/industries/trades",
    },
};

const outcomes = [
    {
        icon: IconPhoneCall,
        title: "More calls and quote requests",
        description:
            "A clear offer, strong CTAs, and frictionless contact so visitors don’t bounce and “keep looking.”",
    },
    {
        icon: IconMapPin,
        title: "Local-first clarity",
        description:
            "Service areas, before/after, and proof that you’re the safe choice in your region.",
    },
    {
        icon: IconBolt,
        title: "Fast on mobile",
        description:
            "Most traffic is mobile. The site should load fast, read cleanly, and tap easily.",
    },
];

const included = [
    {
        icon: IconStars,
        title: "Trust-first design",
        description:
            "Reviews, proof, process, and guarantees placed where people actually hesitate.",
    },
    {
        icon: IconBrandGoogle,
        title: "Local SEO foundations",
        description:
            "Service pages, on-page structure, and metadata designed for local intent searches.",
    },
    {
        icon: IconPhoneCall,
        title: "Lead routing that works",
        description:
            "Forms, call CTAs, and scheduling so leads go to the right place fast.",
    },
];

const expectations = [
    { label: "Primary conversion", value: "Calls + estimate requests" },
    { label: "Built for mobile", value: "Fast load + tap-to-call" },
    { label: "Tracking-ready", value: "Analytics + conversion events" },
];

const fitFor = [
    "Local trades and blue-collar services (asphalt, sealcoating, excavation, fencing, etc.)",
    "Teams who want to look more established than the competition",
    "Owners who want more inbound calls without a bloated site",
];

const notFor = [
    "DIY templates with no strategy or proof placement",
    "Businesses outside a clear service area (everyone, everywhere)",
    "Anyone optimizing for volume over profit",
];

const faqs = [
    {
        q: "Do you do SEO?",
        a: "I build the local SEO foundation: fast pages, clear service pages, metadata, and structure. If you want ongoing SEO/content, we can layer that on after launch.",
    },
    {
        q: "Can you help with photos and copy?",
        a: "Yes. I can tighten your messaging and guide what to capture for before/after, equipment, and proof so the site feels credible fast.",
    },
    {
        q: "Do you build multi-location or multi-crew sites?",
        a: "Yes. We can structure service areas, locations, and crew pages so leads self-select and routing stays clean.",
    },
    {
        q: "What does a typical timeline look like?",
        a: "Once we have your services, service area, and proof assets, builds can move quickly. I will give you a concrete timeline after a short intake.",
    },
];

export default function TradesPage() {
    const gentlemansBlade = getProjectBySlug("gentlemans-blade");
    const velvetRose = getProjectBySlug("velvet-rose");
    const tag = getProjectBySlug("tag-landing-page");
    const featured = [gentlemansBlade, velvetRose, tag].filter(
        (project): project is Project => Boolean(project)
    );

    return (
        <>
            <Section className="pt-28 sm:pt-32 md:pt-40" padding="none">
                <AnimatedSection>
                    <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card px-6 py-8 sm:px-8 sm:py-10">
                        <div className="absolute inset-0 bg-hero-gradient opacity-25" />
                        <div className="grain absolute inset-0 pointer-events-none" />

                        <div className="relative grid gap-8 lg:grid-cols-5 lg:items-end">
                            <div className="lg:col-span-3 space-y-6">
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-glow/10 text-glow border border-glow/20">
                                    Local Service Businesses
                                </span>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                                    Websites for trades
                                    <br />
                                    <span className="text-gradient">that turn searches into calls.</span>
                                </h1>
                                <p className="text-lg text-muted-foreground max-w-2xl">
                                    For service businesses that want to look premium, show proof fast, and make contacting you feel simple - on mobile, especially.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <Link href="/contact?source=trades-hero" className="btn-primary">
                                        Talk about your project
                                    </Link>
                                    <Link href="/services?source=trades-hero" className="btn-secondary inline-flex items-center gap-2">
                                        See services <IconArrowRight className="w-4 h-4" stroke={2} />
                                    </Link>
                                </div>
                            </div>

                            <div className="lg:col-span-2">
                                <div className="rounded-2xl border border-border/50 bg-background/40 backdrop-blur-sm p-6">
                                    <p className="text-sm font-semibold text-foreground">Built for local intent</p>
                                    <div className="mt-4 grid gap-3">
                                        {expectations.map((item) => (
                                            <div
                                                key={item.label}
                                                className="flex items-start justify-between gap-4 rounded-xl border border-border/50 bg-card/40 px-4 py-3"
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
                            <div className="h-full rounded-2xl border border-border/50 bg-card p-6">
                                <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl border border-border/50 bg-muted/50 text-glow">
                                    <item.icon className="w-5 h-5" stroke={1.5} />
                                </div>
                                <p className="mt-4 text-lg font-semibold text-foreground">{item.title}</p>
                                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </Section>

            <Section className="bg-muted/30">
                <AnimatedSection>
                    <SectionHeading
                        title="What you get"
                        subtitle="A site that looks trustworthy, loads fast, and makes it easy to request an estimate."
                    />
                </AnimatedSection>

                <StaggerContainer className="grid gap-6 md:grid-cols-3" staggerDelay={0.1}>
                    {included.map((item) => (
                        <StaggerItem key={item.title}>
                            <div className="h-full rounded-2xl border border-border/50 bg-card p-7">
                                <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl border border-border/50 bg-muted/50 text-glow">
                                    <item.icon className="w-5 h-5" stroke={1.5} />
                                </div>
                                <h3 className="mt-5 text-xl font-semibold text-foreground">{item.title}</h3>
                                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </Section>

            <Section className="pt-10 md:pt-14" padding="none">
                <div className="grid gap-6 md:grid-cols-2">
                    <AnimatedSection>
                        <div className="rounded-2xl border border-border/50 bg-card p-7">
                            <h3 className="text-xl font-semibold text-foreground">Great fit for</h3>
                            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                                {fitFor.map((item) => (
                                    <li key={item} className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-glow mt-2" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </AnimatedSection>
                    <AnimatedSection delay={0.06}>
                        <div className="rounded-2xl border border-border/50 bg-card p-7">
                            <h3 className="text-xl font-semibold text-foreground">Not a fit</h3>
                            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                                {notFor.map((item) => (
                                    <li key={item} className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-glow mt-2" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </AnimatedSection>
                </div>
            </Section>

            {featured.length > 0 ? (
                <Section>
                    <AnimatedSection>
                        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-10">
                            <div className="max-w-2xl">
                                <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                                    Relevant work
                                </h2>
                                <p className="mt-2 text-muted-foreground">
                                    Builds that focus on local positioning, trust signals, and conversion—the same principles that work for trades.
                                </p>
                            </div>
                            <Link
                                href="/work?source=trades-page"
                                className="inline-flex items-center gap-2 text-foreground hover:text-glow transition-colors group"
                            >
                                <span className="font-medium">Browse all case studies</span>
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
                        subtitle="A few common questions trades and service owners ask before a build."
                    />
                </AnimatedSection>

                <StaggerContainer className="grid gap-4 md:grid-cols-2" staggerDelay={0.08}>
                    {faqs.map((item) => (
                        <StaggerItem key={item.q}>
                            <div className="rounded-2xl border border-border/50 bg-card p-7">
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
                        Want a site that brings in better local leads?
                    </h2>
                    <p className="text-muted-foreground mb-8">
                        Tell me your trade, service area, and what you want more of (calls, forms, bookings). I’ll reply within one business day.
                    </p>
                    <Link href="/contact?source=trades-cta" className="btn-primary">
                        Talk about your project
                    </Link>
                </AnimatedSection>
            </Section>
        </>
    );
}
