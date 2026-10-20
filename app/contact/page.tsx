import { PageIntro } from "@/components/marketing/Studio";
import { createPageMetadata } from "@/lib/seo";
import { createContactFormToken } from "@/lib/contactAntiSpam";
import { ContactForm } from "./ContactForm";
import { emptyContactValues, legacyProjectTypes } from "./validation";
import { siteEmail } from "@/lib/site";
export const dynamic = "force-dynamic";
export const metadata = createPageMetadata({
  title: "Start a Project",
  description:
    "Tell Haydn about your real estate business and the website you need. Personal reply within one business day.",
  path: "/contact",
});
export default async function Contact({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const values = { ...emptyContactValues };
  for (const key of [
    "source",
    "package",
    "projectType",
    "budgetRange",
    "timeline",
    "currentUrl",
  ] as const) {
    const v = params[key];
    if (typeof v === "string") values[key] = v.slice(0, 240);
  }
  values.projectType =
    legacyProjectTypes[values.projectType] ?? values.projectType;
  if (values.source === "mytcacademy") values.referral = "My TC Academy";
  const siteKey =
    process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY &&
    process.env.TURNSTILE_SECRET_KEY
      ? process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY
      : undefined;
  return (
    <>
      <PageIntro
        eyebrow="Start a project"
        title="Tell me about your business."
        body="Share a few details and I’ll reply personally within one business day, with questions or a recommended package and next steps."
      />
      <section className="studio-shell contact-layout">
        <ContactForm
          initial={{
            status: "idle",
            values,
            formToken: createContactFormToken() || "",
            attempt: 0,
          }}
          siteKey={siteKey}
        />
        <div className="contact-aside">
          <h2>What happens next</h2>
          <ol className="steps-list mt-6">
            <li>I reply within one business day.</li>
            <li>If it looks like a fit, we have a short call.</li>
            <li>
              You get a written proposal with pages, timeline, and price within
              two business days of the call.
            </li>
          </ol>
          <div className="border-t border-border mt-8 pt-6">
            <p className="eyebrow">Prefer email?</p>
            <a href={"mailto:" + siteEmail} className="text-link">
              {siteEmail}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
