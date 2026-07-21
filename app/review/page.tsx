import type { Metadata } from "next";
import { IconArrowUpRight } from "@tabler/icons-react";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { Section } from "@/components/sections/Section";
import { createContactFormToken } from "@/lib/contactAntiSpam";
import { createPageMetadata } from "@/lib/seo";
import { ReviewForm } from "./ReviewForm";
import type { ReviewErrorCode, ReviewFormState } from "./actions";

const GOOGLE_REVIEW_URL = "https://g.page/r/CYDAaY1myzX3EAI/review";

const REVIEW_ERROR_CODES = new Set<ReviewErrorCode>([
    "missing",
    "name",
    "company",
    "message",
    "links",
    "rate",
    "captcha",
    "send",
]);

export const metadata: Metadata = createPageMetadata({
    title: "Share Your Experience",
    description: "Share an honest review or send private feedback to Multimedium.",
    path: "/review",
    robots: {
        index: false,
        follow: false,
        googleBot: {
            index: false,
            follow: false,
        },
    },
});

export const dynamic = "force-dynamic";

interface ReviewPageProps {
    searchParams?: Promise<{
        sent?: string;
        error?: string;
        public?: string;
    }>;
}

export default async function ReviewPage({ searchParams }: ReviewPageProps) {
    const params = (await searchParams) ?? {};
    const sent = params.sent === "1";
    const publicPermission = params.public === "1";
    const formToken = createContactFormToken() ?? "";
    const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
    const initialError: ReviewErrorCode | undefined = params.error
        ? REVIEW_ERROR_CODES.has(params.error as ReviewErrorCode)
            ? (params.error as ReviewErrorCode)
            : "send"
        : undefined;
    const initialState: ReviewFormState = {
        status: initialError ? "error" : "idle",
        error: initialError,
        values: {
            name: "",
            companyOrRole: "",
            testimonial: "",
            publicPermission,
        },
        formToken,
        attempt: 0,
    };

    return (
        <>
            <div className="relative overflow-hidden border-b border-rule">
                <div aria-hidden className="hero-grid absolute inset-0 opacity-35" />
                <Section
                    size="wide"
                    padding="none"
                    className="relative z-10 pt-32 pb-16 sm:pt-36 sm:pb-20 md:pt-44 md:pb-24"
                >
                    <div className="grid items-center gap-12 md:grid-cols-[minmax(0,1.08fr)_minmax(20rem,0.92fr)] md:gap-14 lg:gap-20">
                        <AnimatedSection>
                            <p className="mono-label mb-6">For past &amp; current clients</p>
                            <h1 className="max-w-3xl font-display text-5xl text-foreground sm:text-6xl md:text-7xl display-balance">
                                A few words go a long way.
                            </h1>
                            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-foreground/80 md:text-xl">
                                Thank you for trusting me with your work. If you have a moment,
                                I&apos;d be grateful for an honest review of your experience. Your
                                perspective helps future clients know what working together is
                                really like.
                            </p>
                            <div className="mt-9 flex flex-col items-start gap-3">
                                <a
                                    href={GOOGLE_REVIEW_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary group touch-target"
                                >
                                    Write a Google review
                                    <span className="sr-only"> (opens in a new tab)</span>
                                    <IconArrowUpRight
                                        aria-hidden
                                        className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                        stroke={1.8}
                                    />
                                </a>
                                <p className="mono-meta">A sentence or two is plenty.</p>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={0.08}>
                            <aside className="grain overflow-hidden rounded-2xl border border-ink-foreground/15 bg-ink p-6 text-ink-foreground shadow-[var(--shadow-elevated)] sm:p-8 lg:p-10">
                                <div className="relative z-10">
                                    <p className="mono-label mb-5 !text-flood">
                                        Not sure what to write?
                                    </p>
                                    <h2 className="font-display text-3xl text-ink-foreground sm:text-4xl">
                                        Start with what mattered.
                                    </h2>
                                    <ol className="mt-8 border-t border-ink-foreground/25">
                                        <li className="grid grid-cols-[2rem_1fr] gap-3 border-b border-ink-foreground/25 py-5">
                                            <span aria-hidden className="mono-meta !text-flood">
                                                01
                                            </span>
                                            <p className="leading-relaxed text-ink-foreground/90">
                                                What problem or goal brought you to me?
                                            </p>
                                        </li>
                                        <li className="grid grid-cols-[2rem_1fr] gap-3 border-b border-ink-foreground/25 py-5">
                                            <span aria-hidden className="mono-meta !text-flood">
                                                02
                                            </span>
                                            <p className="leading-relaxed text-ink-foreground/90">
                                                What was working together like?
                                            </p>
                                        </li>
                                        <li className="grid grid-cols-[2rem_1fr] gap-3 border-b border-ink-foreground/25 py-5">
                                            <span aria-hidden className="mono-meta !text-flood">
                                                03
                                            </span>
                                            <p className="leading-relaxed text-ink-foreground/90">
                                                What changed or improved after the project?
                                            </p>
                                        </li>
                                    </ol>
                                    <p className="mt-6 text-sm leading-relaxed text-ink-foreground/65">
                                        These are prompts, not a script. Please share whatever feels
                                        true to your experience.
                                    </p>
                                </div>
                            </aside>
                        </AnimatedSection>
                    </div>
                </Section>
            </div>

            <Section id="direct-feedback" size="wide" className="py-16 sm:py-20 md:py-24 lg:py-28">
                <div className="grid items-start gap-10 md:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] md:gap-14 lg:gap-20">
                    <AnimatedSection>
                        <p className="mono-label mb-5">Prefer to send it directly?</p>
                        <h2 className="max-w-xl font-display text-4xl text-foreground sm:text-5xl">
                            Share a testimonial or private feedback.
                        </h2>
                        <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/75">
                            Send a note directly to me instead. Whether it can be shared publicly
                            is always your choice.
                        </p>
                    </AnimatedSection>

                    <AnimatedSection delay={0.08}>
                        <ReviewForm
                            initialState={initialState}
                            sent={sent}
                            turnstileSiteKey={turnstileSiteKey}
                        />
                    </AnimatedSection>
                </div>
            </Section>
        </>
    );
}
