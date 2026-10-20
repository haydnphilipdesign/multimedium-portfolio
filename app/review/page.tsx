import type { Metadata } from "next";
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
            <section className="studio-shell page-intro academy-hero">
                <div>
                    <p className="eyebrow">For past &amp; current clients</p>
                    <h1>A few words go a long way.</h1>
                    <p className="intro-copy">
                        Thank you for trusting me with your work. If you have a moment, I&apos;d be
                        grateful for an honest review of your experience. Your perspective helps
                        future clients know what working together is really like.
                    </p>
                    <div className="hero-actions">
                        <a
                            href={GOOGLE_REVIEW_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary"
                        >
                            Write a Google review <span aria-hidden="true">↗</span>
                            <span className="sr-only"> (opens in a new tab)</span>
                        </a>
                    </div>
                    <p className="hero-price">A sentence or two is plenty.</p>
                </div>
                <div className="academy-panel">
                    <h2>Not sure what to write? Start with what mattered.</h2>
                    <ol className="academy-steps">
                        <li>What problem or goal brought you to me?</li>
                        <li>What was working together like?</li>
                        <li>What changed or improved after the project?</li>
                    </ol>
                    <p>
                        These are prompts, not a script. Please share whatever feels true to your
                        experience.
                    </p>
                </div>
            </section>

            <section
                id="direct-feedback"
                className="studio-shell studio-section rule-top contact-layout aside-first"
            >
                <div className="contact-aside">
                    <p className="eyebrow">Prefer to send it directly?</p>
                    <h2>Share a testimonial or private feedback.</h2>
                    <p className="mt-5">
                        Send a note directly to me instead. Whether it can be shared publicly is
                        always your choice.
                    </p>
                </div>
                <ReviewForm
                    initialState={initialState}
                    sent={sent}
                    turnstileSiteKey={turnstileSiteKey}
                />
            </section>
        </>
    );
}
