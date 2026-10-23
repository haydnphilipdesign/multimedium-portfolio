import Link from "next/link";
import {
  packages,
  hosting,
  includedInEveryPackage,
  notIncluded,
  packageContactHref,
} from "@/content/packages";
import { pricingFaqs } from "@/content/faqs";
import {
  FaqList,
  PageIntro,
  ProjectCTA,
  SectionHeading,
} from "@/components/marketing/Studio";
import { JsonLd } from "@/components/seo/JsonLd";
import { createPageMetadata } from "@/lib/seo";
import { getServiceStructuredData } from "@/lib/structuredData";

export const metadata = createPageMetadata({
  title: "Pricing: Real Estate Websites from $750",
  description:
    "Three website packages for transaction coordinators, agents, and brokerages: one-page sites from $750, full websites from $1,500, custom builds from $3,000. Hosting $59/month.",
  path: "/pricing",
});

const rows = [
  ["Pages", "pages"],
  ["Copywriting", "copywriting"],
  ["Forms", "forms"],
  ["Revision rounds", "revisions"],
  ["Typical timeline", "timeline"],
] as const;

export default function Pricing() {
  return (
    <>
      <JsonLd
        data={packages.map((p) =>
          getServiceStructuredData({
            name: p.name,
            description: p.bestFor + ". " + p.pages + ".",
            path: "/pricing",
            price: p.startingPrice,
          }),
        )}
      />
      <PageIntro
        title={
          <>
            Clear pricing. <em>Defined scope.</em>
          </>
        }
        body="Three packages for transaction coordinators, agents, and brokerages. Before any work starts, you’ll get a written proposal with your exact pages, timeline, and price."
      />

      <section className="studio-shell pricing-columns" aria-label="Packages">
        {packages.map((p) => (
          <article
            key={p.id}
            className={"pricing-column" + (p.id === "full" ? " featured" : "")}
          >
            <h2>{p.name}</h2>
            <strong className="price-large">{p.price}</strong>
            <p className="package-best">
              <span className="sr-only">Best for: </span>
              {p.bestFor}
            </p>
            <dl>
              {rows.map(([label, key]) => (
                <div key={key}>
                  <dt>{label}</dt>
                  <dd>{p[key]}</dd>
                </div>
              ))}
            </dl>
            <Link
              className="btn-primary"
              href={packageContactHref(p, "pricing")}
              aria-label={"Start with the " + p.name + " package"}
            >
              Start with this package <span aria-hidden="true">→</span>
            </Link>
            <p className="package-example">
              Example:{" "}
              {p.examples.map((e, i) => (
                <span key={e.slug}>
                  {i > 0 && " · "}
                  <Link href={"/work/" + e.slug}>{e.title} →</Link>
                </span>
              ))}
            </p>
          </article>
        ))}
      </section>

      <section className="studio-shell studio-section">
        <SectionHeading title="Every package includes" />
        <ul className="check-list two-col">
          {includedInEveryPackage.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section id="hosting" className="tint-band">
        <div className="studio-shell studio-section split-section">
          <div>
            <h2>Hosting & care: {hosting.price}</h2>
            <p className="mt-5">
              {hosting.firstMonth} After that, {hosting.price} covers:
            </p>
          </div>
          <div>
            <ul className="check-list">
              {hosting.included.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>
              <strong>Not included:</strong> {hosting.notIncluded}
            </p>
          </div>
        </div>
      </section>

      <section className="studio-shell studio-section split-section">
        <h2>Not included</h2>
        <ul className="plain-list">
          {notIncluded.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="studio-shell studio-section rule-top split-section">
        <h2>How payment works</h2>
        <p>
          Half to reserve your start date, half before your site goes live. No
          surprise invoices: anything outside the proposal is quoted in writing
          first.
        </p>
      </section>

      <FaqList faqs={pricingFaqs} title="Questions about pricing" />
      <ProjectCTA />
    </>
  );
}
