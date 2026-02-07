import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/sections/Section";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { requestChecklist } from "./actions";
import { IconArrowRight, IconDownload, IconFileText } from "@tabler/icons-react";

export const metadata: Metadata = {
    title: "TC Lead Intake Checklist",
    description:
        "Free downloadable TC lead intake checklist PDF - so you can qualify faster and start every file clean.",
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
                    <div className="relative max-w-3xl space-y-6 overflow-hidden rounded-[2rem] border border-border/65 bg-card/90 px-6 py-8 shadow-[var(--shadow-elevated)] sm:px-8 sm:py-10">
                        <div className="absolute inset-0 bg-hero-gradient opacity-30" />
                        <div className="grain absolute inset-0 pointer-events-none" />
                        <div className="relative space-y-6">
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-glow/10 text-glow border border-glow/20">
                            <IconFileText className="w-4 h-4" stroke={1.5} />
                            Free resource
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                            TC Lead Intake Checklist
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            A clean, printable checklist you can use to qualify faster, reduce back-and-forth, and start every file organized.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <a
                                href="/resources/tc-intake-checklist.pdf"
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
                            Use this as a printable checklist now, then optionally convert it into a structured intake system later.
                        </p>
                        </div>
                    </div>
                </AnimatedSection>
            </Section>

            <Section className="pt-10 md:pt-14" padding="none">
                <div className="grid gap-6 md:grid-cols-5">
                    <AnimatedSection className="md:col-span-3">
                        <div className="rounded-2xl border border-border/65 bg-card shadow-[var(--shadow-soft)] overflow-hidden">
                            <div className="relative aspect-[16/10] bg-muted">
                                <Image
                                    src="/resources/tc-intake-checklist.jpg"
                                    alt="TC Lead Intake Checklist preview"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 60vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
                            </div>
                            <div className="p-7">
                                <h2 className="text-xl font-semibold text-foreground">What you’re getting</h2>
                                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-glow mt-2" />
                                        Printable lead intake checklist (PDF)
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-glow mt-2" />
                                        Qualification questions that prevent half-filled submissions
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-glow mt-2" />
                                        A clean structure you can adapt to your state/brokerage
                                    </li>
                                </ul>

                                {sent ? (
                                    <div className="mt-5 rounded-xl border border-glow/20 bg-glow/10 px-4 py-3 text-sm text-foreground">
                                        Check your inbox, the download link is on its way.
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
                                            className="form-control"
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
                                            className="form-control"
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
                                            className="form-control"
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
                        </div>
                    </AnimatedSection>
                </div>
            </Section>

            <Section className="border-t border-border/40">
                <AnimatedSection className="text-center max-w-2xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                        Want an intake system that enforces required fields?
                    </h2>
                    <p className="text-muted-foreground mb-8">
                        I build conversion-first TC websites, with optional intake and cover-sheet automation if you want the system behind it.
                    </p>
                    <Link href="/industries/transaction-coordinators?source=tc-intake-checklist" className="btn-primary">
                        See the TC offer
                    </Link>
                </AnimatedSection>
            </Section>
        </>
    );
}





