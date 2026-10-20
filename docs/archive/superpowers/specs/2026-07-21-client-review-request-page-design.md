# Multimedium Client Review Request Page

Date: 2026-07-21
Status: Approved for implementation planning

## Objective

Create a focused page Haydn can send to previous and current clients when asking for an honest review.

The page should make a Google review the clearest next step while also letting a client send a testimonial or private feedback directly to Multimedium. It must feel like a natural part of the existing Editorial Trust site rather than a generic form or public marketing landing page.

## Success Criteria

- A client can understand the request and reach the Google review form immediately.
- Optional prompts help the client write a specific review without scripting or pressuring the response.
- A client can submit feedback directly to Haydn and explicitly control whether it may be featured publicly.
- The experience does not gate reviews or ask only satisfied clients to post publicly.
- The page is shareable at `/review` but absent from site navigation, search indexing, and the sitemap.
- The page works cleanly on mobile and does not compete with the global mobile conversion bar.
- The existing email and anti-spam infrastructure handles submissions without a database.

## Approved Direction

The approved direction is **Guided Editorial**.

It uses the site's warm paper background, near-black ink, ochre action color, Fraunces display type, mono labels, ruled rows, and restrained motion. The page pairs a personal thank-you with a dark editorial prompt card so the writing guidance feels useful rather than burdensome.

The supplied QR code will not appear on the webpage. A direct link is simpler on both desktop and mobile. The QR asset can remain available for future printed invoices, thank-you cards, or handouts.

## Route and Visibility

- Route: `/review`
- The route is not added to the primary navigation, footer navigation, or sitemap.
- Metadata sets `robots.index` and `robots.follow` to `false`.
- The page retains the standard Navbar and Footer so clients can verify that the request belongs to Multimedium.
- `MobileStickyCTA` treats `/review` as a hidden path so “Browse work” and “Start a project” do not compete with the review action on mobile.

## Page Experience

### Opening section

The opening section uses a responsive editorial split layout.

The primary column contains:

- A mono label identifying the page as being for past and current clients
- The headline “A few words go a long way.”
- A short thank-you that acknowledges the client's trust and asks for an honest review
- One visually dominant “Write a Google review” action
- A brief expectation that the process should take only a few minutes

The Google action points to:

`https://g.page/r/CYDAaY1myzX3EAI/review`

It opens in a new tab with appropriate external-link attributes so the review page remains available as a reference.

### Writing guide

A dark ink-colored card provides three optional prompts:

1. What problem or goal brought you to me?
2. What was working together like?
3. What changed or improved after the project?

The card closes with the reassurance that one or two sentences is enough. The language must not ask for a positive review, a five-star rating, or a specific conclusion.

### Direct testimonial section

Below the Google review section, a secondary editorial block lets the client send feedback directly to Haydn.

The section explains that the client may use it either for a website testimonial or for private feedback. The Google action remains the strongest visual action on the page.

## Testimonial Form

The form contains:

- `name`: required text field
- `companyOrRole`: optional text field
- `testimonial`: required textarea
- `publicPermission`: optional checkbox labeled “You may feature this testimonial publicly with my name and company.”
- Existing hidden honeypot, signed form token, and optional Turnstile response fields

If `publicPermission` is checked, the email clearly labels the submission as approved for public use with the submitted name and company or role. If it is unchecked, the email clearly labels the submission as private feedback and the website must not imply that it may be published.

The form does not collect a rating, logo, headshot, file upload, project picker, or separate questionnaire.

## Submission and Email Flow

The page creates a signed form token with the existing `createContactFormToken` helper and renders the existing Turnstile widget only when `NEXT_PUBLIC_TURNSTILE_SITE_KEY` is configured.

A new review-specific server action:

1. Reads request headers and derives the client IP, user agent, and referrer.
2. Silently accepts honeypot or invalid timing submissions to avoid teaching bots how detection works.
3. Verifies and consumes the signed nonce when signing is configured.
4. Applies a review-specific IP rate limit using the existing in-memory limiter.
5. Verifies Turnstile when its environment variables are configured.
6. Validates required fields, length limits, and link-like spam in the testimonial.
7. Calls a new `sendReviewEmail` function in `lib/email.ts`.
8. Redirects to `/review?sent=1` after successful delivery.

`sendReviewEmail` reuses the existing Resend client configuration and the shared email template primitives. It sends to `CONTACT_TO_EMAIL` and uses `CONTACT_FROM_EMAIL`. The notification is informational because the approved form does not collect the client's email address.

The notification subject distinguishes the consent state, for example:

- `New approved testimonial - Client Name`
- `New private client feedback - Client Name`

The notification body includes the client's name, company or role, permission status, testimonial, submission time, and bounded request metadata.

No submission is written to a database or exposed through a public API.

## Validation and Error States

- Missing required fields return a clear page-level error and preserve the distinction between private and public permission.
- An overlong testimonial returns a specific length error.
- Link-like content is rejected with a concise anti-spam message.
- Rate-limit failures ask the client to wait and try again.
- Turnstile failures ask the client to retry verification.
- Resend delivery failures return a general send error without exposing configuration details.
- Honeypot, invalid-token, too-fast, expired-token, and reused-token submissions redirect to the same success state used by the contact form.
- A successful submission replaces the form introduction with a prominent thank-you confirmation while retaining the Google review option.

Errors use a query parameter pattern consistent with the existing contact form. No raw submitted testimonial is placed in the URL.

## Components and File Boundaries

### New files

- `app/review/page.tsx`: metadata, page layout, server-rendered form, and success/error messaging
- `app/review/actions.ts`: review-specific validation, protection, email dispatch, and redirects

### Existing files to change

- `lib/email.ts`: add the review email payload and `sendReviewEmail`
- `components/nav/MobileStickyCTA.tsx`: add `/review` to the hidden route prefixes

The page should reuse existing global button classes, form control classes, typography tokens, `Section`, `AnimatedSection`, and `TurnstileWidget` where those abstractions fit. It should not add a separate design system or duplicate contact-form protection logic.

## Responsive and Accessibility Behavior

- The opening content and writing guide appear side by side at large viewports and stack in reading order on smaller screens.
- The Google action remains visible without excessive scrolling on common mobile viewports.
- All controls meet the existing 44-pixel touch-target standard.
- The page uses one `h1`, logical section headings, explicit form labels, and associated help and error text.
- The permission control is a real checkbox with a clear unchecked meaning.
- Focus treatment uses the site's existing visible ring system.
- Status messaging is announced appropriately after navigation.
- Reduced-motion behavior follows the global motion preferences.
- Small mono text remains supporting metadata rather than essential body copy.

## Verification

### Static verification

- Run ESLint on the changed files or the repository lint command.
- Run `npm run build`.
- Run `git diff --check`.
- Confirm `/review` is absent from `app/sitemap.ts` and navigation arrays.
- Confirm metadata renders `noindex, nofollow`.

### Functional verification

- Confirm the exact Google review URL is present and opens as an external destination.
- Submit an approved testimonial and confirm the email clearly records public permission.
- Submit private feedback and confirm the email clearly prohibits assumed public use.
- Exercise missing-field, length, rate-limit, Turnstile, and delivery-error behavior as practical without exposing secrets.
- Confirm a successful submission reaches the thank-you state.

### Browser verification

Review `/review` at a desktop viewport and a 390-pixel mobile viewport.

Confirm:

- The Guided Editorial hierarchy matches the approved direction.
- The Google action is visually primary.
- The prompts are readable and do not imply review gating.
- The form is concise and permission language is unambiguous.
- The global mobile sticky CTA is absent.
- Navbar and Footer remain usable.
- Keyboard focus order and visible focus styling are correct.
- Success and error states remain coherent on mobile.

## Out of Scope

- Adding the review page to public site navigation
- Adding the route to the sitemap or optimizing it as a search landing page
- Review gating, star-rating prompts, or requests for specifically positive reviews
- Copying a direct testimonial automatically to Google
- LinkedIn recommendation integration
- Database storage or a testimonial management dashboard
- Logo, headshot, or file uploads
- Automatically publishing submitted testimonials
- Displaying the QR code on the webpage
- Deployment, commit, or push without separate authorization
