import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/sections/Section";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/motion/AnimatedSection";
import { ProjectCard } from "@/components/work/ProjectCard";
import { MonoLabel, RuledRow } from "@/components/sections/Editorial";
import { CTARuled } from "@/components/marketing/CTA";
import { getProjectBySlug, type Project } from "@/content/projects";
import { createPageMetadata } from "@/lib/seo";
import {
    IconPhoneCall,
    IconMapPin,
    IconBolt,
    IconShieldCheck,
    IconBrandGoogle,
    IconChecklist,
    IconClock,
    IconArrowRight,
    IconChartBar,
    IconPlugConnected,
} from "@tabler/icons-react";

export const metadata: Metadata = createPageMetadata({
    title: "Websites for Home Services",
    description:
        "Web design for home service companies with strong local SEO structure, fast pages, and lead capture that turns searches into booked jobs.",
    path: "/industries/home-services",
});

const outcomes = [
    {
        icon: IconPhoneCall,
        title: "Calls in under 30 seconds",
        description:
            "Emergency visitors do not scroll. Your phone number, services, and service area have to be obvious fast.",
    },
    {
        icon: IconShieldCheck,
        title: "Trust before price",
        description:
            "Proof, guarantees, and clear process reduce shopping and help you win the better jobs.",
    },
    {
        icon: IconBolt,
        title: "Fast on mobile",
        description:
            "Home service traffic is mobile-heavy. The page has to load fast and tap cleanly.",
    },
];

const included = [
    {
        icon: IconShieldCheck,
        title: "Proof where it matters",
        description:
            "Reviews, before/after, and certifications placed right where people hesitate.",
    },
    {
        icon: IconMapPin,
        title: "Service area clarity",
        description:
            "Clear service areas, zones, and travel ranges so the right leads self-select.",
    },
    {
        icon: IconBrandGoogle,
        title: "Local SEO structure",
        description:
            "Service pages, metadata, and on-page structure tuned for local-intent searches.",
    },
    {
        icon: IconChecklist,
        title: "Lead routing that works",
        description:
            "Calls, forms, and scheduling that send inquiries to the right place fast.",
    },
];

const conceptHighlights = [
    "Hero with emergency-first CTA and clear service area statement",
    "Sticky call bar for mobile with tap-to-call focus",
    "Review and guarantee blocks above the fold",
    "Service grid that routes to the right job type",
    "Financing and maintenance plan sections to lift average job value",
];

const process = [
    {
        icon: IconClock,
        title: "Week 1: Strategy + offer clarity",
        description:
            "We define your best jobs, service area, and the exact actions you want visitors to take.",
    },
    {
        icon: IconChecklist,
        title: "Week 2: Structure + copy",
        description:
            "Page plan, messaging, and proof placement built around how people actually decide.",
    },
    {
        icon: IconBolt,
        title: "Week 3: Build + polish",
        description:
            "Fast, mobile-first build with analytics, tracking, and conversion-ready CTAs.",
    },
];

const expectations = [
    { label: "Primary conversion", value: "Calls + service requests" },
    { label: "Tracking-ready", value: "Analytics + call tracking" },
    { label: "Tool friendly", value: "Jobber / ServiceTitan / Housecall Pro" },
];

const faqs = [
    {
        q: "Do you do SEO?",
        a: "I build local SEO foundations (structure, service pages, metadata, performance). Ongoing SEO/content is available if you want it, but the site starts with the fundamentals done correctly.",
    },
    {
        q: "Can you integrate with our CRM/scheduling tools?",
        a: "Yes. I can integrate or route leads into common stacks (Jobber, ServiceTitan, Housecall Pro, etc.) and set up tracking so you know what channels are producing the best jobs.",
    },
    {
        q: "What if we want fewer low-quality leads?",
        a: "We design the site to self-qualify: service area clarity, clear pricing signals (when appropriate), and intake questions that filter out the wrong jobs before you waste time.",
    },
    {
        q: "How fast can we launch?",
        a: "A focused build can move quickly once we have your service list, service area, proof assets, and preferred lead flow. I will give you a concrete timeline after a short intake.",
    },
];

export default function HomeServicesPage() {
    const paRes = getProjectBySlug("pa-real-estate-support");
    const tag = getProjectBySlug("tag-landing-page");
    const threePenn = getProjectBySlug("three-penn-properties");
    // Real client work only — the spec direction is in the labeled "Concept build" section above.
    const featured = [paRes, tag, threePenn].filter(
        (project): project is Project => Boolean(project)
    );

    return (
        <>
            <Section className="pt-32 sm:pt-36 md:pt-44" padding="none">
                <AnimatedSection>
                    <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
                        <div>
                            <MonoLabel className="mb-6">Home services</MonoLabel>
                            <h1 className="font-display text-5xl text-foreground sm:text-6xl md:text-7xl display-balance">
                                Home service websites that turn searches into{" "}
                                <span className="text-gradient">booked jobs.</span>
                            </h1>
                            <p className="mt-7 max-w-xl text-lg leading-relaxed text-foreground/80 md:text-xl">
                                A professional site, fast pages, and lead capture that filters for the right
                                jobs. For HVAC, plumbing, electrical, roofing, and local service teams.
                            </p>
                            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                                <Link href="/contact?source=home-services-hero" className="btn btn-primary">
                                    Request a proposal
                                </Link>
                                <Link href="#concept" className="btn btn-secondary group">
                                    View concept build
                                    <IconArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" stroke={2} />
                                </Link>
                            </div>
                        </div>
                        <dl className="ledger border-t border-rule">
                            {expectations.map((item) => (
                                <div key={item.label} className="ledger-row flex items-baseline justify-between gap-6 py-4">
                                    <dt className="mono-label text-muted-foreground">{item.label}</dt>
                                    <dd className="text-right font-display text-base text-foreground">{item.value}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </AnimatedSection>
            </Section>

            <Section>
                <StaggerContainer className="ledger border-t border-rule" staggerDelay={0.07}>
                    {outcomes.map((item, idx) => (
                        <StaggerItem key={item.title}>
                            <RuledRow index={String(idx + 1).padStart(2, "0")} title={item.title}>
                                {item.description}
                            </RuledRow>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </Section>

            <Section className="pt-4 md:pt-6" padding="none">
                <AnimatedSection direction="none" delay={0.02}>
                    <div className="grid gap-4 sm:grid-cols-3">
                        <div className="rounded-2xl border border-border/60 bg-card shadow-[var(--shadow-soft)] p-6">
                            <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-border/60 bg-muted/50 text-primary">
                                <IconChartBar className="w-5 h-5" stroke={1.5} />
                            </div>
                            <p className="mt-4 text-sm font-semibold text-foreground">Measure lead quality</p>
                            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                                Track calls and form submissions so you know what brings the better jobs, not just more clicks.
                            </p>
                        </div>
                        <div className="rounded-2xl border border-border/60 bg-card shadow-[var(--shadow-soft)] p-6">
                            <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-border/60 bg-muted/50 text-primary">
                                <IconPlugConnected className="w-5 h-5" stroke={1.5} />
                            </div>
                            <p className="mt-4 text-sm font-semibold text-foreground">Route leads cleanly</p>
                            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                                Push requests to the right inbox, calendar, or system so you respond faster and stop losing hot leads.
                            </p>
                        </div>
                        <div className="rounded-2xl border border-border/60 bg-card shadow-[var(--shadow-soft)] p-6">
                            <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-border/60 bg-muted/50 text-primary">
                                <IconMapPin className="w-5 h-5" stroke={1.5} />
                            </div>
                            <p className="mt-4 text-sm font-semibold text-foreground">Look established, stay local</p>
                            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                                A polished site that feels established and trustworthy without looking like a national franchise template.
                            </p>
                        </div>
                    </div>
                </AnimatedSection>
            </Section>

            <Section className="border-y border-rule bg-surface-1">
                <AnimatedSection>
                    <SectionHeading
                        title="What you get"
                        subtitle="A site that looks professional, loads fast, and makes it easy to request service."
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

            <Section id="concept" className="border-y border-rule bg-surface-1">
                <AnimatedSection>
                    <SectionHeading
                        title="Concept build (sample direction)"
                        subtitle="A spec direction to show how the messaging and layout could work for a high-intent home services site."
                    />
                </AnimatedSection>

                <div className="grid gap-6 md:grid-cols-5">
                    <AnimatedSection className="md:col-span-3">
                        <div className="rounded-2xl border border-border/60 bg-card shadow-[var(--shadow-soft)] p-7">
                            <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-muted-foreground">
                                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/60 bg-muted/60">
                                    Spec Build
                                </span>
                                <span>Ironline Heating & Cooling</span>
                            </div>
                            <h3 className="mt-4 text-2xl font-bold text-foreground">
                                Emergency-first HVAC site that filters for high-value jobs.
                            </h3>
                            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                                A single-scroll homepage focused on phone calls and form submissions, with proof and
                                guarantees visible before the first scroll ends.
                            </p>
                            <div className="mt-6 overflow-hidden rounded-xl border border-border/60 bg-background/30">
                                <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 border-b border-border/60 bg-muted/35">
                                    <p className="text-xs font-semibold text-foreground">Ironline Heating & Cooling</p>
                                    <div className="flex items-center gap-2">
                                        <span className="px-2 py-1 rounded-md border border-border/60 bg-card/50 text-[11px] text-muted-foreground">
                                            Service area: NEPA
                                        </span>
                                        <span className="px-2 py-1 rounded-md border border-primary/25 bg-primary/10 text-[11px] text-foreground">
                                            Tap to call
                                        </span>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <p className="text-sm font-semibold text-foreground">
                                        No-heat? AC down? Book service without hunting for the number.
                                    </p>
                                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                                        This is a layout concept: high-intent headline, proof placement, and fast routing to the right service.
                                    </p>
                                    <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                                        <div className="rounded-lg border border-border/60 bg-card/55 px-3 py-2">
                                            Furnace repair
                                        </div>
                                        <div className="rounded-lg border border-border/60 bg-card/55 px-3 py-2">
                                            AC repair
                                        </div>
                                        <div className="rounded-lg border border-border/60 bg-card/55 px-3 py-2">
                                            Install / replacement
                                        </div>
                                        <div className="rounded-lg border border-border/60 bg-card/55 px-3 py-2">
                                            Maintenance plan
                                        </div>
                                    </div>
                                    <p className="mt-3 text-[11px] text-muted-foreground">
                                        Mock content for concept only.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-6 grid gap-3 sm:grid-cols-2 text-sm text-muted-foreground">
                                {conceptHighlights.map((item) => (
                                    <div key={item} className="flex items-start gap-2">
                                        <span aria-hidden className="mt-0.5 text-primary">—</span>
                                        {item}
                                    </div>
                                ))}
                            </div>
                            <div className="mt-6 flex flex-wrap items-center gap-3">
                                <span className="px-3 py-1 rounded-full text-xs font-medium border border-border/60 bg-muted/60 text-muted-foreground">
                                    1 page + 3 service pages
                                </span>
                                <span className="px-3 py-1 rounded-full text-xs font-medium border border-border/60 bg-muted/60 text-muted-foreground">
                                    Calls + form tracking
                                </span>
                                <span className="px-3 py-1 rounded-full text-xs font-medium border border-border/60 bg-muted/60 text-muted-foreground">
                                    Review + financing blocks
                                </span>
                            </div>
                            <p className="mt-4 text-xs text-muted-foreground">
                                Concept build only. Not an active client.
                            </p>
                        </div>
                    </AnimatedSection>
                    <AnimatedSection className="md:col-span-2" delay={0.08}>
                        <div className="rounded-2xl border border-border/60 bg-card shadow-[var(--shadow-soft)] p-7">
                            <h4 className="text-lg font-semibold text-foreground">What this direction solves</h4>
                            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                                <li className="flex items-start gap-2">
                                    <span aria-hidden className="mt-0.5 text-primary">—</span>
                                    Clear emergency CTA on every view
                                </li>
                                <li className="flex items-start gap-2">
                                    <span aria-hidden className="mt-0.5 text-primary">—</span>
                                    Proof without fluff
                                </li>
                                <li className="flex items-start gap-2">
                                    <span aria-hidden className="mt-0.5 text-primary">—</span>
                                    Service area and response time clarity
                                </li>
                                <li className="flex items-start gap-2">
                                    <span aria-hidden className="mt-0.5 text-primary">—</span>
                                    Stronger average job value through financing
                                </li>
                            </ul>
                            <div className="mt-6 pt-6 border-t border-border/60">
                                <Link
                                    href="/contact?source=home-services-concept"
                                    className="btn-primary inline-flex w-full items-center justify-center text-center shadow-none hover:shadow-none"
                                >
                                    Request a custom concept
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
                                <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                                    Relevant work
                                </h2>
                                <p className="mt-2 text-muted-foreground">
                                    Different industries, same outcomes. These builds focus on conversion, proof placement, and lead routing—the same principles that apply to home services.
                                </p>
                            </div>
                            <Link
                                href="/work?source=home-services"
                                className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors group"
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
                        subtitle="A few common questions home service owners ask before a build."
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

            <Section className="border-y border-rule bg-surface-1">
                <AnimatedSection>
                    <SectionHeading
                        title="Three weeks from kickoff to launch"
                        subtitle="A focused build: messaging, proof placement, and clear next actions — nothing you don't need."
                    />
                </AnimatedSection>

                <StaggerContainer className="grid gap-6 md:grid-cols-3" staggerDelay={0.1}>
                    {process.map((step) => (
                        <StaggerItem key={step.title}>
                            <div className="h-full rounded-2xl border border-border/60 bg-card shadow-[var(--shadow-soft)] p-7">
                                <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl border border-border/60 bg-muted/50 text-primary">
                                    <step.icon className="w-5 h-5" stroke={1.5} />
                                </div>
                                <h3 className="mt-5 text-xl font-semibold text-foreground">{step.title}</h3>
                                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </Section>

            <CTARuled
                eyebrow="Next step"
                title="Want a home services site that attracts better jobs?"
                body="Tell me your trade, service area, and the types of jobs you want more of. I'll reply within one business day with next steps."
                primary={{ label: "Request a proposal", href: "/contact?source=home-services-cta" }}
                secondary={{ label: "See all services", href: "/services" }}
            />
        </>
    );
}



