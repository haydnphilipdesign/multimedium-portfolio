import { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/sections/Section";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/motion/AnimatedSection";
import { IconCheck, IconArrowRight } from "@tabler/icons-react";

export const metadata: Metadata = {
    title: "Landing Pages + Funnels",
    description:
        "Focused landing pages and simple funnels built to capture leads, bookings, and sign-ups.",
    alternates: {
        canonical: "/services/landing-pages",
    },
};

const included = [
    "Offer + messaging refinement",
    "Conversion-first layout + copy help",
    "Forms + tracking + follow-up",
    "A/B-ready sections and components",
    "Fast iteration cadence (ship → learn → improve)",
];

export default function LandingPagesServicePage() {
    return (
        <>
            <Section className="pt-28 sm:pt-32 md:pt-40" padding="none">
                <AnimatedSection>
                    <div className="max-w-3xl space-y-6">
                        <Link href="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                            ← Back to services
                        </Link>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                            Landing pages + funnels
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            For launches, offers, lead magnets, and campaigns—when you need a page that communicates value fast and captures intent cleanly.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <Link href="/contact?source=services-landing-pages" className="btn-primary">
                                Talk about your project
                            </Link>
                            <Link href="/work" className="btn-secondary inline-flex items-center gap-2">
                                See examples <IconArrowRight className="w-4 h-4" stroke={2} />
                            </Link>
                        </div>
                    </div>
                </AnimatedSection>
            </Section>

            <Section>
                <AnimatedSection>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                        What&apos;s included
                    </h2>
                </AnimatedSection>

                <StaggerContainer className="grid gap-4 md:grid-cols-2" staggerDelay={0.1}>
                    {included.map((item) => (
                        <StaggerItem key={item}>
                            <div className="flex items-start gap-3 p-5 rounded-2xl bg-card border border-border/50">
                                <IconCheck className="w-5 h-5 text-glow mt-0.5" stroke={2} />
                                <p className="text-sm text-muted-foreground">{item}</p>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </Section>

            <Section className="bg-muted/30">
                <div className="grid gap-10 md:grid-cols-2">
                    <AnimatedSection>
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                            Timeline
                        </h2>
                        <p className="text-muted-foreground">
                            Most landing page engagements ship in 1–3 weeks depending on scope, assets, and review cadence.
                        </p>
                    </AnimatedSection>
                    <AnimatedSection delay={0.1}>
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                            Budget guidance
                        </h2>
                        <p className="text-muted-foreground">
                            Landing pages vary widely by complexity (copy, assets, variants, integrations). I&apos;ll propose a range after we confirm the offer and funnel steps.
                        </p>
                    </AnimatedSection>
                </div>
            </Section>

            <Section className="border-t border-border/40">
                <AnimatedSection className="text-center max-w-2xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                        Need a landing page that actually gets responses?
                    </h2>
                    <p className="text-muted-foreground mb-8">
                        Share the offer, the audience, and where you want the traffic to go. I’ll reply with a simple plan and timeline within one business day.
                    </p>
                    <Link href="/contact?source=services-landing-pages-cta" className="btn-primary">
                        Talk about your project
                    </Link>
                </AnimatedSection>
            </Section>
        </>
    );
}
