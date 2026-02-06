import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/sections/Section";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { requestTcTaskList } from "./actions";
import { IconArrowRight, IconDownload, IconFileText } from "@tabler/icons-react";

export const metadata: Metadata = {
    title: "TC Task List Sheet (Example)",
    description:
        "Free downloadable TC Task List Sheet (Poconos example). A real checklist-style task list you can use as a reference and customize for your workflow.",
    alternates: {
        canonical: "/resources/tc-task-list",
    },
};

interface PageProps {
    searchParams?: Promise<{
        sent?: string;
        error?: string;
        source?: string;
    }>;
}

export default async function TcTaskListResourcePage({ searchParams }: PageProps) {
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
                            TC Task List Sheet{" "}
                            <span className="text-muted-foreground font-normal">(example)</span>
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            This is a real task list built for the Poconos region (where my mom has been a TC since 2013).
                            Use it as a reference, then adapt it to your state/brokerage rules.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <a
                                href="/resources/tc-task-list.pdf"
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
                            These templates are examples of PDFs I can set up to auto-populate from an intake (Jotform/Forms) and output as a clean cover-sheet summary.
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
                                    src="/resources/tc-task-list.jpg"
                                    alt="TC Task List Sheet preview"
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
                                        A real TC task list sheet (example) you can adapt
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-glow mt-2" />
                                        A structure you can copy into your own checklist/process doc
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-glow mt-2" />
                                        A preview of what “intake → PDF output” can look like
                                    </li>
                                </ul>
                                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                                    <a
                                        href="/resources/tc-task-list.pdf"
                                        className="btn-secondary inline-flex items-center justify-center gap-2"
                                        download
                                    >
                                        Download PDF <IconDownload className="w-4 h-4" stroke={2} />
                                    </a>
                                    <Link
                                        href="/contact?source=tc-task-list"
                                        className="btn-primary inline-flex items-center justify-center"
                                    >
                                        Talk about a custom version
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
                                    Check your inbox — the task list is on its way.
                                </div>
                            ) : null}

                            {error ? (
                                <div className="mt-5 rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-foreground">
                                    Please enter a valid name and email.
                                </div>
                            ) : null}

                            <form action={requestTcTaskList} className="mt-5 space-y-4">
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
                    </AnimatedSection>
                </div>
            </Section>

            <Section className="border-t border-border/40">
                <AnimatedSection className="text-center max-w-2xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                        Want a TC website that makes booking feel obvious?
                    </h2>
                    <p className="text-muted-foreground mb-8">
                        I build conversion-first TC websites, plus optional intake + cover-sheet automation if you want the system behind it.
                    </p>
                    <Link href="/industries/transaction-coordinators?source=tc-task-list" className="btn-primary">
                        See the TC offer
                    </Link>
                </AnimatedSection>
            </Section>
        </>
    );
}


