"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { sendReviewEmail } from "@/lib/email";
import { checkRateLimit } from "@/lib/rateLimit";
import {
    consumeNonceOnce,
    containsUrlLikeText,
    createContactFormToken,
    getClientIpFromHeaders,
    verifyContactFormToken,
    verifyTurnstileToken,
} from "@/lib/contactAntiSpam";
import {
    validateReviewSubmission,
    type ReviewValidationError,
} from "./validation";

export type ReviewErrorCode =
    | ReviewValidationError
    | "links"
    | "rate"
    | "captcha"
    | "send";

export type ReviewFormValues = {
    name: string;
    companyOrRole: string;
    testimonial: string;
    publicPermission: boolean;
};

export type ReviewFormState = {
    status: "idle" | "error";
    error?: ReviewErrorCode;
    values: ReviewFormValues;
    formToken: string;
    attempt: number;
};

function getText(formData: FormData, key: string): string {
    const value = formData.get(key);
    return typeof value === "string" ? value.trim() : "";
}

function normalizeRequestMetadata(
    value: string | null | undefined,
    maxLength: number,
): string | undefined {
    const normalized = value?.trim();
    return normalized ? normalized.slice(0, maxLength) : undefined;
}

export async function submitReview(
    previousState: ReviewFormState,
    formData: FormData,
): Promise<ReviewFormState> {
    const successUrl = "/review?sent=1";
    const requestHeaders = await headers();
    const rawIp = getClientIpFromHeaders(requestHeaders);
    const ip = normalizeRequestMetadata(rawIp, 128);
    const userAgent = normalizeRequestMetadata(
        requestHeaders.get("user-agent"),
        512,
    );
    const referer = normalizeRequestMetadata(requestHeaders.get("referer"), 1024);
    const name = getText(formData, "name");
    const companyOrRole = getText(formData, "companyOrRole");
    const testimonial = getText(formData, "testimonial");
    const publicPermission = getText(formData, "publicPermission") === "yes";
    const submittedValues: ReviewFormValues = {
        name: name.slice(0, 120),
        companyOrRole: companyOrRole.slice(0, 160),
        testimonial: testimonial.slice(0, 4000),
        publicPermission,
    };
    const previousAttempt =
        Number.isSafeInteger(previousState.attempt) && previousState.attempt >= 0
            ? previousState.attempt
            : 0;
    const buildErrorState = (
        error: ReviewErrorCode,
        values: ReviewFormValues = submittedValues,
    ): ReviewFormState => ({
        status: "error",
        error,
        values,
        formToken:
            createContactFormToken({ purpose: "review-retry" }) ?? "",
        attempt: previousAttempt + 1,
    });

    if (getText(formData, "website")) redirect(successUrl);

    const tokenResult = verifyContactFormToken(getText(formData, "formToken"));
    if (!tokenResult.ok) redirect(successUrl);

    if (!tokenResult.skipped) {
        const minSubmitMs = 2500;
        const maxSubmitMs = 2 * 60 * 60 * 1000;
        if (tokenResult.ageMs > maxSubmitMs) {
            redirect(successUrl);
        }
        if (
            tokenResult.payload.purpose !== "review-retry" &&
            tokenResult.ageMs < minSubmitMs
        ) {
            redirect(successUrl);
        }
        if (!consumeNonceOnce(tokenResult.payload.nonce, maxSubmitMs)) {
            redirect(successUrl);
        }
    }

    if (ip) {
        const limit = checkRateLimit(`review:ip:${ip}`, {
            limit: 6,
            windowMs: 60 * 60 * 1000,
        });
        if (!limit.allowed) return buildErrorState("rate");
    }

    const turnstileOk = await verifyTurnstileToken({
        token: getText(formData, "cf-turnstile-response"),
        remoteIp: ip,
    });
    if (!turnstileOk) return buildErrorState("captcha");

    const validation = validateReviewSubmission({
        name,
        companyOrRole,
        testimonial,
        publicPermission,
    });

    if (!validation.ok) {
        return buildErrorState(validation.error);
    }

    const normalizedValues: ReviewFormValues = {
        name: validation.value.name,
        companyOrRole: validation.value.companyOrRole ?? "",
        testimonial: validation.value.testimonial,
        publicPermission: validation.value.publicPermission,
    };

    if (containsUrlLikeText(validation.value.testimonial)) {
        return buildErrorState("links", normalizedValues);
    }

    try {
        await sendReviewEmail({
            ...validation.value,
            submittedAt: new Date().toISOString(),
            meta: { ip, userAgent, referer },
        });
    } catch (error) {
        console.error("Review email failed", error);
        return buildErrorState("send", normalizedValues);
    }

    redirect(successUrl);
}
