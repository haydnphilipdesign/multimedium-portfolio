# Client Review Request Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build an unlisted `/review` page that sends clients to Multimedium's Google review form or emails a consent-aware testimonial directly to Haydn.

**Architecture:** Add a server-rendered App Router page and server action, with pure validation and email-content helpers covered by Node's built-in test runner. Reuse the existing Resend, signed-token, honeypot, Turnstile, rate-limit, Section, motion, and global form/button systems; store no submissions and keep the route out of navigation and the sitemap.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4, Resend, Cloudflare Turnstile, Node 22 test runner, Tabler Icons

**Design reference:** `docs/superpowers/specs/2026-07-21-client-review-request-page-design.md`

**Repository guardrail:** Preserve unrelated work. Do not commit, push, deploy, or send a real testimonial email unless the user separately authorizes that action.

---

## File Map

- Create `app/review/validation.ts` — pure normalization, bounds checking, and consent-state parsing.
- Create `app/review/actions.ts` — request metadata, bot protection, rate limiting, validation, delivery, and redirects.
- Create `app/review/page.tsx` — noindex metadata, Guided Editorial layout, Google action, form, and success/error states.
- Create `tests/review-validation.test.mjs` — validation and normalization contracts.
- Create `tests/review-email.test.mjs` — approved-versus-private email content contracts without sending mail.
- Modify `lib/email.ts` — add review payload/content types, pure email-content builder, and Resend delivery function.
- Modify `components/nav/MobileStickyCTA.tsx` — suppress the unrelated mobile conversion bar on `/review`.
- Modify `package.json` — add one focused test command using the installed Node runtime.

## Task 1: Add Testable Review Submission Validation

**Files:**
- Create: `tests/review-validation.test.mjs`
- Create: `app/review/validation.ts`
- Modify: `package.json`

- [ ] **Step 1: Add the focused test script**

Add this script beside the existing `lint` script in `package.json`:

```json
"test:review": "node --experimental-strip-types --experimental-default-type=module --test tests/review-validation.test.mjs tests/review-email.test.mjs"
```

Until Task 2 creates the email test, use this direct command for Task 1:

```powershell
node --experimental-strip-types --experimental-default-type=module --test tests/review-validation.test.mjs
```

- [ ] **Step 2: Write the failing validation tests**

Create `tests/review-validation.test.mjs`:

```js
import test from "node:test";
import assert from "node:assert/strict";
import { validateReviewSubmission } from "../app/review/validation.ts";

test("normalizes a permitted public testimonial", () => {
  const result = validateReviewSubmission({
    name: "  Jane Client  ",
    companyOrRole: "  Acme Realty  ",
    testimonial: "  Haydn made our services much easier to understand.  ",
    publicPermission: true,
  });

  assert.deepEqual(result, {
    ok: true,
    value: {
      name: "Jane Client",
      companyOrRole: "Acme Realty",
      testimonial: "Haydn made our services much easier to understand.",
      publicPermission: true,
    },
  });
});

test("keeps an unchecked permission private", () => {
  const result = validateReviewSubmission({
    name: "Jane Client",
    companyOrRole: "",
    testimonial: "The project process was clear and organized.",
    publicPermission: false,
  });

  assert.equal(result.ok, true);
  assert.equal(result.value.publicPermission, false);
  assert.equal(result.value.companyOrRole, undefined);
});

test("requires both name and testimonial", () => {
  assert.deepEqual(
    validateReviewSubmission({
      name: "",
      companyOrRole: "Acme Realty",
      testimonial: "",
      publicPermission: false,
    }),
    { ok: false, error: "missing" },
  );
});

test("rejects fields beyond their explicit bounds", () => {
  assert.deepEqual(
    validateReviewSubmission({
      name: "n".repeat(121),
      companyOrRole: "",
      testimonial: "Useful feedback",
      publicPermission: false,
    }),
    { ok: false, error: "name" },
  );

  assert.deepEqual(
    validateReviewSubmission({
      name: "Jane Client",
      companyOrRole: "c".repeat(161),
      testimonial: "Useful feedback",
      publicPermission: false,
    }),
    { ok: false, error: "company" },
  );

  assert.deepEqual(
    validateReviewSubmission({
      name: "Jane Client",
      companyOrRole: "",
      testimonial: "t".repeat(4001),
      publicPermission: false,
    }),
    { ok: false, error: "message" },
  );
});
```

- [ ] **Step 3: Run the test and verify the expected failure**

Run:

```powershell
node --experimental-strip-types --experimental-default-type=module --test tests/review-validation.test.mjs
```

Expected: FAIL because `app/review/validation.ts` does not exist.

- [ ] **Step 4: Implement the pure validator**

Create `app/review/validation.ts`:

```ts
export type ReviewValidationError = "missing" | "name" | "company" | "message";

export type ReviewSubmissionInput = {
  name: string;
  companyOrRole: string;
  testimonial: string;
  publicPermission: boolean;
};

export type ValidatedReviewSubmission = {
  name: string;
  companyOrRole?: string;
  testimonial: string;
  publicPermission: boolean;
};

export type ReviewValidationResult =
  | { ok: true; value: ValidatedReviewSubmission }
  | { ok: false; error: ReviewValidationError };

const MAX_NAME_LENGTH = 120;
const MAX_COMPANY_LENGTH = 160;
const MAX_TESTIMONIAL_LENGTH = 4000;

export function validateReviewSubmission(
  input: ReviewSubmissionInput,
): ReviewValidationResult {
  const name = input.name.trim();
  const companyOrRole = input.companyOrRole.trim();
  const testimonial = input.testimonial.trim();

  if (!name || !testimonial) return { ok: false, error: "missing" };
  if (name.length > MAX_NAME_LENGTH) return { ok: false, error: "name" };
  if (companyOrRole.length > MAX_COMPANY_LENGTH) {
    return { ok: false, error: "company" };
  }
  if (testimonial.length > MAX_TESTIMONIAL_LENGTH) {
    return { ok: false, error: "message" };
  }

  return {
    ok: true,
    value: {
      name,
      companyOrRole: companyOrRole || undefined,
      testimonial,
      publicPermission: input.publicPermission,
    },
  };
}
```

- [ ] **Step 5: Run the focused validation tests**

Run:

```powershell
node --experimental-strip-types --experimental-default-type=module --test tests/review-validation.test.mjs
```

Expected: 4 passing tests and no failures.

## Task 2: Add Consent-Aware Review Email Delivery

**Files:**
- Create: `tests/review-email.test.mjs`
- Modify: `lib/email.ts`

- [ ] **Step 1: Write failing tests for approved and private email content**

Create `tests/review-email.test.mjs`:

```js
import test from "node:test";
import assert from "node:assert/strict";
import { buildReviewEmailContent } from "../lib/email.ts";

const basePayload = {
  name: "Jane Client",
  companyOrRole: "Acme Realty",
  testimonial: "Haydn made our services much easier to understand.",
  submittedAt: "2026-07-21T16:00:00.000Z",
  meta: {
    ip: "203.0.113.10",
    referer: "https://www.multimedium.dev/review",
    userAgent: "Review test agent",
  },
};

test("labels an approved testimonial for public use", () => {
  const content = buildReviewEmailContent({
    ...basePayload,
    publicPermission: true,
  });

  assert.equal(content.subject, "New approved testimonial - Jane Client");
  assert.match(content.text, /Approved for public use with name and company/);
  assert.match(content.html, /Approved for public use with name and company/);
});

test("labels unchecked permission as private feedback", () => {
  const content = buildReviewEmailContent({
    ...basePayload,
    publicPermission: false,
  });

  assert.equal(content.subject, "New private client feedback - Jane Client");
  assert.match(content.text, /Private feedback - do not publish/);
  assert.match(content.html, /Private feedback - do not publish/);
});
```

- [ ] **Step 2: Run the focused suite and verify the expected failure**

Run:

```powershell
pnpm test:review
```

Expected: validation tests PASS; email tests FAIL because `buildReviewEmailContent` is not exported.

- [ ] **Step 3: Add the review email payload types**

Add below `ContactEmailPayload` in `lib/email.ts`:

```ts
export interface ReviewEmailPayload {
  name: string;
  companyOrRole?: string;
  testimonial: string;
  publicPermission: boolean;
  submittedAt: string;
  meta?: {
    ip?: string;
    userAgent?: string;
    referer?: string;
  };
}

export interface ReviewEmailContent {
  subject: string;
  html: string;
  text: string;
}
```

- [ ] **Step 4: Add the pure email-content builder and delivery function**

Add below `buildEmailHtml` and before `sendContactEmail` in `lib/email.ts`:

```ts
export function buildReviewEmailContent(
  payload: ReviewEmailPayload,
): ReviewEmailContent {
  const permission = payload.publicPermission
    ? "Approved for public use with name and company"
    : "Private feedback - do not publish";
  const subject = payload.publicPermission
    ? `New approved testimonial - ${payload.name}`
    : `New private client feedback - ${payload.name}`;

  const text = [
    `Name: ${payload.name}`,
    payload.companyOrRole ? `Company or role: ${payload.companyOrRole}` : "",
    `Permission: ${permission}`,
    `Submitted: ${payload.submittedAt}`,
    payload.meta?.ip ? `IP: ${payload.meta.ip}` : "",
    payload.meta?.referer ? `Referer: ${payload.meta.referer}` : "",
    payload.meta?.userAgent ? `User agent: ${payload.meta.userAgent}` : "",
    "",
    payload.testimonial,
  ]
    .filter(Boolean)
    .join("\n");

  const html = buildEmailHtml({
    preheader: subject,
    title: payload.publicPermission
      ? "New Approved Testimonial"
      : "New Private Client Feedback",
    subtitle: payload.companyOrRole
      ? `${payload.name} - ${payload.companyOrRole}`
      : payload.name,
    paragraphs: [
      payload.publicPermission
        ? "This client explicitly approved public use with their submitted name and company or role."
        : "This client did not grant public permission. Treat this submission as private feedback.",
    ],
    fieldsTitle: "Submission Details",
    fields: [
      { label: "Name", value: payload.name },
      { label: "Company or Role", value: payload.companyOrRole },
      { label: "Permission", value: permission },
      { label: "Submitted", value: payload.submittedAt },
      { label: "IP", value: payload.meta?.ip },
      { label: "Referer", value: payload.meta?.referer },
      { label: "User Agent", value: payload.meta?.userAgent },
    ],
    messageTitle: "Client Feedback",
    message: payload.testimonial,
    footerNote: payload.publicPermission
      ? "Permission was granted for public use with the submitted identity."
      : "Private feedback - do not publish.",
  });

  return { subject, html, text };
}

export async function sendReviewEmail(payload: ReviewEmailPayload) {
  const resendApiKey = requiredEnv("RESEND_API_KEY");
  const toEmail = process.env.CONTACT_TO_EMAIL ?? "haydn@multimedium.dev";
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL ?? "Multimedium <onboarding@resend.dev>";
  const resend = new Resend(resendApiKey);
  const content = buildReviewEmailContent(payload);

  await resend.emails.send({
    from: fromEmail,
    to: [toEmail],
    subject: content.subject,
    html: content.html,
    text: content.text,
  });
}
```

- [ ] **Step 5: Run the full focused test suite**

Run:

```powershell
pnpm test:review
```

Expected: 6 passing tests and no failures. No email is sent because the tests call only the pure content builder.

## Task 3: Implement the Protected Review Server Action

**Files:**
- Create: `app/review/actions.ts`

- [ ] **Step 1: Create the review-specific server action**

Create `app/review/actions.ts`:

```ts
"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { sendReviewEmail } from "@/lib/email";
import { checkRateLimit } from "@/lib/rateLimit";
import {
  consumeNonceOnce,
  containsUrlLikeText,
  getClientIpFromHeaders,
  verifyContactFormToken,
  verifyTurnstileToken,
} from "@/lib/contactAntiSpam";
import { validateReviewSubmission } from "./validation";

function getText(formData: FormData, key: string): string {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function reviewErrorUrl(code: string, publicPermission: boolean): string {
  const permissionQuery = publicPermission ? "&public=1" : "";
  return `/review?error=${encodeURIComponent(code)}${permissionQuery}`;
}

export async function submitReview(formData: FormData) {
  const successUrl = "/review?sent=1";
  const requestHeaders = await headers();
  const ip = getClientIpFromHeaders(requestHeaders) ?? undefined;
  const userAgent = requestHeaders.get("user-agent") ?? undefined;
  const referer = requestHeaders.get("referer") ?? undefined;
  const publicPermission = getText(formData, "publicPermission") === "yes";

  if (getText(formData, "website")) redirect(successUrl);

  const tokenResult = verifyContactFormToken(getText(formData, "formToken"));
  if (!tokenResult.ok) redirect(successUrl);

  if (!tokenResult.skipped) {
    const minSubmitMs = 2500;
    const maxSubmitMs = 2 * 60 * 60 * 1000;
    if (tokenResult.ageMs < minSubmitMs || tokenResult.ageMs > maxSubmitMs) {
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
    if (!limit.allowed) redirect(reviewErrorUrl("rate", publicPermission));
  }

  const turnstileOk = await verifyTurnstileToken({
    token: getText(formData, "cf-turnstile-response"),
    remoteIp: ip,
  });
  if (!turnstileOk) redirect(reviewErrorUrl("captcha", publicPermission));

  const validation = validateReviewSubmission({
    name: getText(formData, "name"),
    companyOrRole: getText(formData, "companyOrRole"),
    testimonial: getText(formData, "testimonial"),
    publicPermission,
  });

  if (!validation.ok) {
    redirect(reviewErrorUrl(validation.error, publicPermission));
  }

  if (containsUrlLikeText(validation.value.testimonial)) {
    redirect(reviewErrorUrl("links", publicPermission));
  }

  try {
    await sendReviewEmail({
      ...validation.value,
      submittedAt: new Date().toISOString(),
      meta: { ip, userAgent, referer },
    });
  } catch (error) {
    console.error("Review email failed", error);
    redirect(reviewErrorUrl("send", publicPermission));
  }

  redirect(successUrl);
}
```

- [ ] **Step 2: Run focused static checks for the action**

Run:

```powershell
pnpm exec eslint app/review/actions.ts app/review/validation.ts lib/email.ts
pnpm test:review
```

Expected: ESLint exits 0; all 6 focused tests pass; no email is sent.

## Task 4: Build the Guided Editorial Review Page

**Files:**
- Create: `app/review/page.tsx`
- Modify: `components/nav/MobileStickyCTA.tsx`

- [ ] **Step 1: Create the page metadata, states, and complete UI**

Create `app/review/page.tsx`:

```tsx
import type { Metadata } from "next";
import { IconArrowUpRight, IconCheck } from "@tabler/icons-react";
import { AnimatedSection } from "@/components/motion/AnimatedSection";
import { Section } from "@/components/sections/Section";
import { TurnstileWidget } from "@/app/contact/TurnstileWidget";
import { createContactFormToken } from "@/lib/contactAntiSpam";
import { createPageMetadata } from "@/lib/seo";
import { submitReview } from "./actions";

const GOOGLE_REVIEW_URL = "https://g.page/r/CYDAaY1myzX3EAI/review";

const errorMessages: Record<string, string> = {
  missing: "Please add your name and feedback before submitting.",
  name: "Please shorten your name to 120 characters or fewer.",
  company: "Please shorten the company or role field to 160 characters or fewer.",
  message: "Please shorten your feedback to 4,000 characters or fewer.",
  links: "Please remove website links from the feedback and try again.",
  rate: "Too many submissions were received. Please wait a little while and try again.",
  captcha: "Spam verification did not complete. Please try again.",
  send: "Your feedback could not be sent just now. Please try again shortly.",
};

export const metadata: Metadata = createPageMetadata({
  title: "Share Your Experience",
  description: "Share an honest review or send private feedback to Multimedium.",
  path: "/review",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
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

const prompts = [
  "What problem or goal brought you to me?",
  "What was working together like?",
  "What changed or improved after the project?",
];

export default async function ReviewPage({ searchParams }: ReviewPageProps) {
  const params = (await searchParams) ?? {};
  const sent = params.sent === "1";
  const errorMessage = params.error ? errorMessages[params.error] : undefined;
  const publicPermission = params.public === "1";
  const formToken = createContactFormToken() ?? "";
  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  return (
    <>
      <section className="relative overflow-hidden border-b border-rule pt-28 sm:pt-32">
        <div className="hero-grid absolute inset-0 opacity-45" aria-hidden="true" />
        <Section size="wide" padding="large" className="relative">
          <AnimatedSection>
            <div className="grid items-stretch gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
              <div className="flex flex-col justify-center py-2 lg:py-8">
                <span className="mono-label">For past &amp; current clients</span>
                <h1 className="mt-6 max-w-3xl font-display text-5xl text-foreground sm:text-6xl lg:text-7xl">
                  A few words go a long way.
                </h1>
                <p className="mt-6 max-w-2xl text-lg text-foreground/75 sm:text-xl">
                  Thank you for trusting me with your business. An honest review helps the next client understand what it is like to work with me and make a confident decision.
                </p>
                <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                  <a
                    href={GOOGLE_REVIEW_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary touch-target gap-2"
                  >
                    Write a Google review
                    <IconArrowUpRight className="h-4 w-4" stroke={1.8} />
                  </a>
                  <span className="mono-meta">A sentence or two is plenty.</span>
                </div>
              </div>

              <aside className="grain rounded-3xl border border-ink-foreground/10 bg-ink p-6 text-ink-foreground shadow-[var(--shadow-elevated)] sm:p-8 lg:p-10">
                <span className="mono-label text-flood">Not sure what to write?</span>
                <h2 className="mt-5 font-display text-3xl sm:text-4xl">
                  Start with what mattered.
                </h2>
                <div className="mt-8 border-t border-ink-foreground/20">
                  {prompts.map((prompt, index) => (
                    <div
                      key={prompt}
                      className="grid grid-cols-[2.25rem_1fr] gap-3 border-b border-ink-foreground/20 py-5"
                    >
                      <span className="font-mono text-xs text-flood">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className="text-ink-foreground/85">{prompt}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-sm text-ink-foreground/65">
                  These are prompts, not a script. Please share whatever feels true to your experience.
                </p>
              </aside>
            </div>
          </AnimatedSection>
        </Section>
      </section>

      <Section id="direct-feedback" size="wide" padding="large">
        <AnimatedSection>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
            <div>
              <span className="mono-label">Prefer to send it directly?</span>
              <h2 className="mt-5 font-display text-4xl text-foreground sm:text-5xl">
                Share a testimonial or private feedback.
              </h2>
              <p className="mt-5 max-w-xl text-lg text-foreground/70">
                Use this form if you would rather send your thoughts straight to me. Public permission is always your choice.
              </p>
            </div>

            <div className="card-raised p-6 sm:p-8">
              {sent ? (
                <div role="status" className="py-8 text-center sm:py-12">
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-soft text-primary">
                    <IconCheck className="h-6 w-6" stroke={2} />
                  </span>
                  <h3 className="mt-5 font-display text-3xl text-foreground">
                    Thank you for sharing.
                  </h3>
                  <p className="mx-auto mt-3 max-w-lg text-foreground/70">
                    Your feedback was sent successfully. I appreciate the time you took to write it.
                  </p>
                </div>
              ) : (
                <>
                  {errorMessage && (
                    <div
                      role="alert"
                      className="mb-6 rounded-xl border border-destructive/30 bg-destructive/8 px-4 py-3 text-sm text-foreground"
                    >
                      {errorMessage}
                    </div>
                  )}

                  <form action={submitReview} className="space-y-6">
                    <div className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
                      <label htmlFor="review-website">Website</label>
                      <input
                        id="review-website"
                        name="website"
                        type="text"
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </div>
                    <input type="hidden" name="formToken" value={formToken} />

                    <div>
                      <label htmlFor="review-name" className="mb-2 block text-sm font-medium text-foreground">
                        Name <span aria-hidden="true" className="text-primary">*</span>
                      </label>
                      <input
                        id="review-name"
                        name="name"
                        type="text"
                        required
                        maxLength={120}
                        autoComplete="name"
                        className="form-control"
                      />
                    </div>

                    <div>
                      <label htmlFor="review-company" className="mb-2 block text-sm font-medium text-foreground">
                        Company or role <span className="text-muted-foreground">(optional)</span>
                      </label>
                      <input
                        id="review-company"
                        name="companyOrRole"
                        type="text"
                        maxLength={160}
                        autoComplete="organization"
                        className="form-control"
                      />
                    </div>

                    <div>
                      <label htmlFor="review-testimonial" className="mb-2 block text-sm font-medium text-foreground">
                        Your feedback <span aria-hidden="true" className="text-primary">*</span>
                      </label>
                      <textarea
                        id="review-testimonial"
                        name="testimonial"
                        required
                        maxLength={4000}
                        rows={7}
                        className="form-control form-textarea resize-y"
                      />
                    </div>

                    <label className="form-choice !items-start">
                      <input
                        type="checkbox"
                        name="publicPermission"
                        value="yes"
                        defaultChecked={publicPermission}
                        className="mt-1 h-4 w-4 shrink-0 accent-primary"
                      />
                      <span>
                        <span className="block font-medium text-foreground">
                          You may feature this testimonial publicly with my name and company.
                        </span>
                        <span className="mt-1 block text-sm">
                          Leave this unchecked to send private feedback that will not be published.
                        </span>
                      </span>
                    </label>

                    {turnstileSiteKey && <TurnstileWidget siteKey={turnstileSiteKey} />}

                    <button type="submit" className="btn-primary touch-target">
                      Send feedback
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </AnimatedSection>
      </Section>
    </>
  );
}
```

- [ ] **Step 2: Hide the mobile conversion bar on the review route**

Change the route list in `components/nav/MobileStickyCTA.tsx` to:

```ts
const hiddenPathPrefixes = ["/contact", "/review"];
```

`/contact/thanks` remains covered by the `/contact` prefix, so removing the redundant second entry does not change contact-route behavior.

- [ ] **Step 3: Run focused tests and lint**

Run:

```powershell
pnpm test:review
pnpm exec eslint app/review/page.tsx app/review/actions.ts app/review/validation.ts lib/email.ts components/nav/MobileStickyCTA.tsx tests/review-validation.test.mjs tests/review-email.test.mjs
```

Expected: 6 tests pass; ESLint exits 0 with no new warnings or errors.

## Task 5: Validate the Complete Review Flow

**Files:**
- Verify: `app/review/page.tsx`
- Verify: `app/review/actions.ts`
- Verify: `app/review/validation.ts`
- Verify: `lib/email.ts`
- Verify: `components/nav/MobileStickyCTA.tsx`
- Verify: `app/sitemap.ts`
- Verify: `components/nav/Navbar.tsx`

- [ ] **Step 1: Verify route isolation and policy-sensitive copy**

Run:

```powershell
rg -n 'CYDAaY1myzX3EAI|index: false|follow: false|publicPermission|Private feedback|honest review' app/review lib/email.ts
$reviewPublicLinks = rg -n '"/review"|/review' app/sitemap.ts components/nav/Navbar.tsx components/footer/Footer.tsx
if ($LASTEXITCODE -eq 1) { "No public /review links found." } else { $reviewPublicLinks; throw "The unlisted review route is publicly linked." }
```

Expected:

- The first command finds the exact Google URL, noindex directives, permission handling, private-feedback language, and honest-review wording.
- The second command returns no matches, confirming `/review` is not publicly linked or included in the sitemap.

- [ ] **Step 2: Run the production validation suite**

Run:

```powershell
pnpm test:review
pnpm lint
pnpm build
git diff --check
```

Expected: focused tests pass; lint exits 0; Next.js production build succeeds; `git diff --check` prints no whitespace errors.

- [ ] **Step 3: Start the local site for browser review**

Run:

```powershell
pnpm dev
```

Expected: Next.js prints a local URL and `/review` returns HTTP 200.

- [ ] **Step 4: Verify the desktop experience**

At a desktop viewport, open `/review` and confirm:

- The standard Navbar and Footer render.
- “A few words go a long way” and the Google action dominate the opening section.
- The dark prompt card contains exactly three prompts and no review-gating language.
- The Google action points exactly to `https://g.page/r/CYDAaY1myzX3EAI/review` and opens a new tab.
- The direct-feedback form has only name, optional company or role, testimonial, permission, and configured spam protection.
- Keyboard focus order follows the visual order and every interactive element has a visible focus ring.

- [ ] **Step 5: Verify the 390-pixel mobile experience**

At a 390-pixel viewport, confirm:

- The hero content stacks before the prompt card.
- The Google action remains visible and uses a 44-pixel minimum touch target.
- The global “Browse work / Start a project” sticky bar is absent.
- The form fields, permission copy, error state, and success state fit without horizontal scrolling.
- The Navbar drawer remains usable above page content.

- [ ] **Step 6: Exercise non-delivery states without sending email**

Use an empty required field, an overlong value through browser developer tools, link-like testimonial text, and any locally configured Turnstile failure to confirm the mapped error copy. Do not submit a valid testimonial while real Resend credentials are active unless the user explicitly authorizes a test email.

- [ ] **Step 7: Report bounded completion evidence**

Report:

- Focused test count and result
- ESLint and production-build result
- Desktop and mobile browser coverage
- Confirmation that the Google URL is exact and `/review` is noindex/unlisted
- Which error states were exercised
- Whether actual Resend delivery remains unverified or was tested with explicit authorization
- Exact changed files

Do not commit, push, or deploy without a separate explicit request.
