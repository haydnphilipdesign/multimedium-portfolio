import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/sections/Section";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { requestChecklist } from "./actions";
import { ChecklistActions } from "./ChecklistActions";
import { IconArrowRight, IconChecklist } from "@tabler/icons-react";

export const metadata: Metadata = {
    title: "TC Lead Intake Checklist",
    description:
        "A practical lead intake checklist for real estate transaction coordinators—so you can qualify faster and start every file clean.",
    alternates: {
        canonical: "/resources/tc-intake-checklist",
    },
};

interface PageProps {
    searchParams?: Promise<{
        sent?: string;
        error?: string;
        source?: string;
    }>;
}

export default async function TcIntakeChecklistPage({ searchParams }: PageProps) {
    const params = (await searchParams) ?? {};
    const sent = params.sent === "1";
    const error = params.error === "1";
    const source = params.source ?? "";

    return (
        <>
            <Section className="pt-28 sm:pt-32 md:pt-40" padding="none">
                <AnimatedSection>
                    <div className="max-w-3xl space-y-6">
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-glow/10 text-glow border border-glow/20">
                            <IconChecklist className="w-4 h-4" stroke={1.5} />
                            Resource
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                            TC lead intake checklist
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            Use this to qualify leads, collect the right info upfront, and start every file with fewer loose ends.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <Link
                                href="/industries/transaction-coordinators?source=tc-checklist"
                                className="btn-secondary inline-flex items-center gap-2"
                            >
                                TC websites <IconArrowRight className="w-4 h-4" stroke={2} />
                            </Link>
                            <Link
                                href="/contact?source=tc-checklist"
                                className="btn-primary"
                            >
                                Talk about your project
                            </Link>
                        </div>
                    </div>
                </AnimatedSection>
            </Section>

            <Section className="pt-10 md:pt-14" padding="none">
                <div className="grid gap-6 md:grid-cols-5">
                    <AnimatedSection className="md:col-span-2">
                        <div className="rounded-2xl border border-border/50 bg-card p-6 sm:p-7">
                            <h2 className="text-xl font-semibold text-foreground">
                                Want a printable version?
                            </h2>
                            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                                Drop your info and I’ll send myself a note so I can follow up if you want help turning this into a real lead capture system.
                            </p>

                            {sent ? (
                                <div className="mt-5 rounded-xl border border-glow/20 bg-glow/10 px-4 py-3 text-sm text-foreground">
                                    Got it — I’ll follow up if it looks like a fit.
                                </div>
                            ) : null}

                            {error ? (
                                <div className="mt-5 rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-foreground">
                                    Please enter your name and a valid email.
                                </div>
                            ) : null}

                            <form action={requestChecklist} className="mt-5 space-y-4">
                                <input
                                    type="text"
                                    name="website"
                                    tabIndex={-1}
                                    autoComplete="off"
                                    aria-hidden="true"
                                    className="hidden"
                                />
                                <input type="hidden" name="source" value={source} />

                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                                        Name
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        maxLength={120}
                                        className="w-full px-4 py-3 rounded-lg bg-background border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-glow focus:border-transparent transition-all"
                                        placeholder="Your name"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        maxLength={254}
                                        className="w-full px-4 py-3 rounded-lg bg-background border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-glow focus:border-transparent transition-all"
                                        placeholder="you@email.com"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                                        Company <span className="text-muted-foreground font-normal">(optional)</span>
                                    </label>
                                    <input
                                        id="company"
                                        name="company"
                                        maxLength={120}
                                        className="w-full px-4 py-3 rounded-lg bg-background border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-glow focus:border-transparent transition-all"
                                        placeholder="Business name"
                                    />
                                </div>

                                <button type="submit" className="btn-primary w-full">
                                    Get the checklist
                                </button>
                            </form>

                            <div className="mt-5">
                                <ChecklistActions />
                            </div>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection className="md:col-span-3" delay={0.06}>
                        <div className="rounded-2xl border border-border/50 bg-card p-6 sm:p-7">
                            <h2 className="text-2xl font-bold text-foreground">
                                Checklist
                            </h2>
                            <p className="mt-2 text-sm text-muted-foreground">
                                Copy/paste this into your lead form, onboarding doc, or CRM.
                            </p>

                            <div className="mt-6 space-y-6 text-sm text-muted-foreground leading-relaxed">
                                <div>
                                    <p className="font-semibold text-foreground">Basics</p>
                                    <ul className="mt-2 space-y-2">
                                        <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-glow mt-2" />Name + best email/phone</li>
                                        <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-glow mt-2" />Business name</li>
                                        <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-glow mt-2" />Website / social links</li>
                                        <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-glow mt-2" />Where they found you</li>
                                    </ul>
                                </div>

                                <div>
                                    <p className="font-semibold text-foreground">Transaction details</p>
                                    <ul className="mt-2 space-y-2">
                                        <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-glow mt-2" />Property address + MLS #</li>
                                        <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-glow mt-2" />Buyer / seller side</li>
                                        <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-glow mt-2" />Contract/ratification date</li>
                                        <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-glow mt-2" />Target close date</li>
                                        <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-glow mt-2" />Earnest money amount + due date + holder</li>
                                        <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-glow mt-2" />Financing type + lender info (if financed)</li>
                                    </ul>
                                </div>

                                <div>
                                    <p className="font-semibold text-foreground">Parties (name + email + phone)</p>
                                    <ul className="mt-2 space-y-2">
                                        <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-glow mt-2" />Buyer(s) / Seller(s)</li>
                                        <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-glow mt-2" />Buyer agent / Listing agent</li>
                                        <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-glow mt-2" />Lender (if applicable)</li>
                                        <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-glow mt-2" />Title / attorney</li>
                                        <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-glow mt-2" />Home warranty (if applicable)</li>
                                    </ul>
                                </div>

                                <div>
                                    <p className="font-semibold text-foreground">Key dates / contingencies</p>
                                    <ul className="mt-2 space-y-2">
                                        <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-glow mt-2" />Inspection deadline + who schedules</li>
                                        <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-glow mt-2" />Appraisal deadline</li>
                                        <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-glow mt-2" />Financing contingency date</li>
                                        <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-glow mt-2" />HOA/condo docs deadline (if applicable)</li>
                                        <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-glow mt-2" />Occupancy / possession terms</li>
                                    </ul>
                                </div>

                                <div>
                                    <p className="font-semibold text-foreground">Fit filter</p>
                                    <ul className="mt-2 space-y-2">
                                        <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-glow mt-2" />Are they clear on scope + responsibilities?</li>
                                        <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-glow mt-2" />Is the timeline realistic?</li>
                                        <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-glow mt-2" />Any unusual terms that require extra handling?</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </Section>
        </>
    );
}

