"use client";

import { useActionState, useEffect, useRef } from "react";
import { IconCheck } from "@tabler/icons-react";
import { TurnstileWidget } from "@/app/contact/TurnstileWidget";
import {
    submitReview,
    type ReviewErrorCode,
    type ReviewFormState,
} from "./actions";

const REVIEW_ERROR_MESSAGES: Record<ReviewErrorCode, string> = {
    missing: "Please add your name and feedback before submitting.",
    name: "Please shorten your name to 120 characters or fewer.",
    company: "Please shorten the company or role field to 160 characters or fewer.",
    message: "Please shorten your feedback to 4,000 characters or fewer.",
    links: "Please remove website links from the feedback and try again.",
    rate: "Too many submissions were received. Please wait a little while and try again.",
    captcha: "Spam verification did not complete. Please try again.",
    send: "Your feedback could not be sent just now. Please try again shortly.",
};

interface ReviewFormProps {
    initialState: ReviewFormState;
    sent: boolean;
    turnstileSiteKey?: string;
}

export function ReviewForm({
    initialState,
    sent,
    turnstileSiteKey,
}: ReviewFormProps) {
    const [state, formAction, isPending] = useActionState(submitReview, initialState);
    const alertRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (state.status === "error") {
            alertRef.current?.focus();
        }
    }, [state.status, state.attempt]);

    return (
        <div className="card-raised p-6 sm:p-8 lg:p-10">
            {sent ? (
                <div role="status" className="py-3 sm:py-6">
                    <span className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary-soft text-primary">
                        <IconCheck aria-hidden className="h-6 w-6" stroke={2} />
                    </span>
                    <h3 className="font-display text-3xl text-foreground sm:text-4xl">
                        Thank you for sharing.
                    </h3>
                    <p className="mt-4 max-w-xl text-foreground/75">
                        Your feedback has been sent. I appreciate you taking the time to share your
                        experience.
                    </p>
                </div>
            ) : (
                <>
                    {state.status === "error" && state.error ? (
                        <div
                            ref={alertRef}
                            role="alert"
                            tabIndex={-1}
                            className="mb-6 rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-foreground"
                        >
                            {REVIEW_ERROR_MESSAGES[state.error]}
                        </div>
                    ) : null}

                    <form
                        key={state.attempt}
                        action={formAction}
                        aria-busy={isPending}
                        className="space-y-6"
                    >
                        <input
                            type="text"
                            name="website"
                            tabIndex={-1}
                            autoComplete="off"
                            aria-hidden="true"
                            className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden"
                        />
                        <input type="hidden" name="formToken" value={state.formToken} />

                        <div>
                            <label
                                htmlFor="name"
                                className="mb-2 block text-sm font-medium text-foreground"
                            >
                                Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                maxLength={120}
                                autoComplete="name"
                                defaultValue={state.values.name}
                                className="form-control"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="companyOrRole"
                                className="mb-2 block text-sm font-medium text-foreground"
                            >
                                Company or role{" "}
                                <span className="font-normal text-muted-foreground">(optional)</span>
                            </label>
                            <input
                                id="companyOrRole"
                                name="companyOrRole"
                                type="text"
                                maxLength={160}
                                autoComplete="organization"
                                defaultValue={state.values.companyOrRole}
                                className="form-control"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="testimonial"
                                className="mb-2 block text-sm font-medium text-foreground"
                            >
                                Your feedback
                            </label>
                            <textarea
                                id="testimonial"
                                name="testimonial"
                                required
                                maxLength={4000}
                                rows={7}
                                defaultValue={state.values.testimonial}
                                className="form-control form-textarea"
                            />
                        </div>

                        <div className="rounded-xl border border-border/70 bg-muted/30 p-4">
                            <label
                                htmlFor="publicPermission"
                                className="flex min-h-11 cursor-pointer items-start gap-3 text-sm font-medium leading-relaxed text-foreground"
                            >
                                <input
                                    id="publicPermission"
                                    name="publicPermission"
                                    type="checkbox"
                                    value="yes"
                                    defaultChecked={state.values.publicPermission}
                                    aria-describedby="publicPermission-description"
                                    className="mt-0.5 h-5 w-5 shrink-0 accent-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                />
                                <span>
                                    You may feature this testimonial publicly with my name and
                                    company.
                                </span>
                            </label>
                            <p
                                id="publicPermission-description"
                                className="mt-2 pl-8 text-xs leading-relaxed text-muted-foreground"
                            >
                                Leave this unchecked to send private feedback that will not be
                                published.
                            </p>
                        </div>

                        {turnstileSiteKey ? (
                            <TurnstileWidget
                                siteKey={turnstileSiteKey}
                                resetKey={state.attempt}
                            />
                        ) : null}

                        <button
                            type="submit"
                            disabled={isPending}
                            className="btn btn-primary touch-target"
                        >
                            {isPending ? "Sending…" : "Send feedback"}
                        </button>
                    </form>
                </>
            )}
        </div>
    );
}
