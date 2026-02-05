import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/sections/Section";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { requestTcCoverSheet } from "./actions";
import { IconArrowRight, IconDownload, IconFileText } from "@tabler/icons-react";

export const metadata: Metadata = {
    title: "TC Cover Sheet / Quick Reference",
    description:
        "Free downloadable TC cover sheet / quick reference PDF—clean, file-ready summary you can use across most transaction coordination workflows.",
    alternates: {
        canonical: "/resources/tc-cover-sheet",
    },
};

interface PageProps {
    searchParams?: Promise<{
        sent?: string;
        error?: string;
        source?: string;
    }>;
}

export default async function TcCoverSheetResourcePage({ searchParams }: PageProps) {
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
                            <IconFileText className="w-4 h-4" stroke={1.5} />
                            Free resource
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                            TC Cover Sheet{" "}
                            <span className="text-muted-foreground font-normal">/ Quick Ref</span>
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            A clean cover-sheet style summary you can drop into the file at the start of a transaction.
                            Designed to be useful across most TC workflows.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <a
                                href="/resources/tc-cover-sheet.pdf"
                                className="btn-primary inline-flex items-center justify-center gap-2"
                                download
                            >
                                Download PDF <IconDownload className="w-4 h-4" stroke={2} />
                            </a>
                            <Link
                                href="/industries/transaction-coordinators#automation"
                                className="btn-secondary inline-flex items-center justify-center gap-2"
                            >
                                See automation options <IconArrowRight className="w-4 h-4" stroke={2} />
                            </Link>
                        </div>
                        <p className="text-xs text-muted-foreground">
                            This is an example of the kind of cover-sheet PDF I can configure to auto-populate from an intake submission.
                        </p>
                    </div>
                </AnimatedSection>
            </Section>

            <Section className="pt-10 md:pt-14" padding="none">
                <div className="grid gap-6 md:grid-cols-5">
                    <AnimatedSection className="md:col-span-3">
                        <div className="rounded-2xl border border-border/50 bg-card overflow-hidden">
                            <div className="relative aspect-[16/10] bg-muted">
                                <Image
                                    src="/resources/tc-cover-sheet.jpg"
                                    alt="TC Cover Sheet preview"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 60vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
                            </div>
                            <div className="p-7">
                                <h2 className="text-xl font-semibold text-foreground">What it’s for</h2>
                                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-glow mt-2" />
                                        Quick file-start summary (who/what/when + key contact info)
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-glow mt-2" />
                                        A consistent “cover sheet” you can email, print, or attach
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-glow mt-2" />
                                        A template you can brand + standardize for your business
                                    </li>
                                </ul>
                                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                                    <a
                                        href="/resources/tc-cover-sheet.pdf"
                                        className="btn-secondary inline-flex items-center justify-center gap-2"
                                        download
                                    >
                                        Download PDF <IconDownload className="w-4 h-4" stroke={2} />
                                    </a>
                                    <Link
                                        href="/contact?source=tc-cover-sheet"
                                        className="btn-primary inline-flex items-center justify-center"
                                    >
                                        Talk about automating this
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection className="md:col-span-2" delay={0.06}>
                        <div className="rounded-2xl border border-border/50 bg-card p-6 sm:p-7">
                            <h2 className="text-xl font-semibold text-foreground">
                                Email me the PDF
                            </h2>
                            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                                I’ll send the download link. Prefer not to share your email? Use the download button above.
                            </p>

                            {sent ? (
                                <div className="mt-5 rounded-xl border border-glow/20 bg-glow/10 px-4 py-3 text-sm text-foreground">
                                    Check your inbox — the cover sheet is on its way.
                                </div>
                            ) : null}

                            {error ? (
                                <div className="mt-5 rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-foreground">
                                    Please enter a valid name and email.
                                </div>
                            ) : null}

                            <form action={requestTcCoverSheet} className="mt-5 space-y-4">
                                <input type="hidden" name="source" value={source} />
                                <div className="hidden">
                                    <label htmlFor="website">Website</label>
                                    <input id="website" name="website" autoComplete="off" tabIndex={-1} />
                                </div>

                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                                        Name
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        maxLength={80}
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
                                    Email me the download link
                                </button>
                                <p className="text-xs text-muted-foreground">
                                    One email. No spam.
                                </p>
                            </form>
                        </div>
                    </AnimatedSection>
                </div>
            </Section>

            <Section className="border-t border-border/40">
                <AnimatedSection className="text-center max-w-2xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                        Want a TC website that attracts better-fit leads?
                    </h2>
                    <p className="text-muted-foreground mb-8">
                        See the primary offer first. Automation and template setups are optional add-ons.
                    </p>
                    <Link href="/industries/transaction-coordinators?source=tc-cover-sheet" className="btn-primary">
                        See the TC offer
                    </Link>
                </AnimatedSection>
            </Section>
        </>
    );
}

