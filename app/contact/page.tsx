import Link from "next/link";
import { PageIntro } from "@/components/marketing/Studio";
import { createPageMetadata } from "@/lib/seo";
import { createContactFormToken } from "@/lib/contactAntiSpam";
import { ContactForm } from "./ContactForm";
import { emptyContactValues } from "./validation";
export const dynamic = "force-dynamic";
export const metadata = createPageMetadata({
  title: "Start a Website Project",
  description:
    "Tell Haydn about your business and website project. Custom websites from $1,500, one-page sites from $750, and personal communication throughout.",
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
  if (values.source === "mytcacademy") values.referral = "My TC Academy";
  const siteKey =
    process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY &&
    process.env.TURNSTILE_SECRET_KEY
      ? process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY
      : undefined;
  return (
    <>
      <PageIntro
        eyebrow="Start a conversation"
        title="Let’s talk about your website."
        body="Tell me what you do and what you have in mind. I’ll reply personally, usually within one business day, with questions or a clear next step."
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
        <aside className="contact-aside">
          <p className="eyebrow">A useful starting point</p>
          <h2>
            Good fit.
            <br />
            Clear expectations.
          </h2>
          <ul className="detail-list">
            <li>
              <strong>Full websites</strong>
              <span>From $1,500 · Larger projects $3,000+</span>
            </li>
            <li>
              <strong>One-page websites</strong>
              <span>From $750 for a focused scope</span>
            </li>
            <li>
              <strong>Hosting & maintenance</strong>
              <span>From $59/month</span>
            </li>
          </ul>
          <p>
            I work best with business owners who value custom design, thoughtful
            development, and direct communication.
          </p>
          <div className="border-t border-border mt-8 pt-6">
            <p className="eyebrow">Prefer email?</p>
            <a href="mailto:haydn@multimedium.dev" className="text-link">
              haydn@multimedium.dev
            </a>
            {process.env.NEXT_PUBLIC_SCHEDULING_URL && (
              <a
                href={process.env.NEXT_PUBLIC_SCHEDULING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link block mt-4"
              >
                Or schedule a conversation ↗
              </a>
            )}
            <Link href="/work" className="text-link block mt-4">
              Explore the work first ↗
            </Link>
          </div>
        </aside>
      </section>
    </>
  );
}
