"use client";

import Link from "next/link";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/motion/AnimatedSection";
import { SectionHeading } from "@/components/sections/Section";
import { IconArrowRight } from "@tabler/icons-react";

const steps = [
    {
        title: "Quick kickoff",
        description: "A short kickoff to define your audience, conversion goal, scope, and timeline.",
    },
    {
        title: "Page plan + messaging",
        description: "We map the page flow, core message, and CTA structure so every section has a clear job.",
    },
    {
        title: "Design + build",
        description: "I design and build in one loop so reviews stay simple and momentum stays steady.",
    },
    {
        title: "Launch + next steps",
        description: "We launch, verify essentials, and set next-step priorities for continued improvement.",
    },
];

export function HowItWorks({ contactSource = "how-it-works" }: { contactSource?: string }) {
    return (
        <div>
            <AnimatedSection>
                <SectionHeading
                    eyebrow="The process"
                    title="How it works"
                    subtitle="A straightforward process with clear checkpoints—so you always know what's happening and what comes next."
                />
            </AnimatedSection>

            <StaggerContainer className="ledger border-t border-rule" staggerDelay={0.06}>
                {steps.map((step, index) => (
                    <StaggerItem key={step.title}>
                        <div className="ledger-row grid gap-x-6 gap-y-2 py-7 md:grid-cols-[4rem_1fr] md:gap-x-10">
                            <span className="font-mono text-sm text-primary md:pt-1.5">
                                {String(index + 1).padStart(2, "0")}
                            </span>
                            <div className="max-w-2xl">
                                <p className="font-display text-xl text-foreground sm:text-2xl">{step.title}</p>
                                <p className="mt-2 text-base leading-relaxed text-foreground/72">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    </StaggerItem>
                ))}
            </StaggerContainer>

            <AnimatedSection className="mt-10">
                <Link
                    href={`/contact?source=${encodeURIComponent(contactSource)}`}
                    className="group inline-flex items-center gap-2 text-base font-medium text-foreground transition-colors hover:text-primary"
                >
                    Start a project
                    <IconArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" stroke={2} />
                </Link>
            </AnimatedSection>
        </div>
    );
}
