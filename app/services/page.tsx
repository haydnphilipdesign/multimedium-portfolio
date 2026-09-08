import Link from "next/link";
import { PageIntro, Process, ProjectCTA } from "@/components/marketing/Studio";
import { serviceOffers } from "@/content/services";
import { createPageMetadata } from "@/lib/seo";
export const metadata = createPageMetadata({
  title: "Website Design, Development & Support",
  description:
    "Custom websites from $1,500, one-page sites from $750, and hosting from $59/month. Personal website design and development for small businesses.",
  path: "/services",
});
export default function Services() {
  return (
    <>
      <PageIntro
        eyebrow="Services"
        title="Thoughtful design. Capable development."
        body="From your first website to a more ambitious next chapter, I help service businesses show up clearly and confidently online."
      />
      <section className="studio-shell pb-16">
        <div className="offer-grid">
          {Object.entries(serviceOffers).map(([key, s], i) => (
            <article key={key}>
              <p className="eyebrow">
                0{i + 1} / {s.timeline}
              </p>
              <h2 className="text-3xl mb-5">{s.title}</h2>
              <p>{s.description}</p>
              <div>
                <strong>{s.price}</strong>
                <Link href={"/services/" + key}>See the details ↗</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="services-band">
        <div className="studio-shell studio-section specialty-section">
          <div>
            <p className="eyebrow">The details make the difference</p>
            <h2>More than the pages.</h2>
          </div>
          <div>
            <p className="large-copy">
              Your website can connect the parts of your business that need to
              work together.
            </p>
            <ul className="detail-list">
              {[
                "Light branding and visual direction",
                "Forms, lead capture, and booking connections",
                "Integrations and basic automations",
                "Content updates and ongoing support",
              ].map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <p>
              We’ll scope these around what you actually need. More advanced
              software work is considered separately; my own products show
              what’s possible.
            </p>
            <Link className="text-link inline-block mt-5" href="/tools">
              Explore my products ↗
            </Link>
          </div>
        </div>
      </section>
      <Process />
      <div className="studio-shell pb-16">
        <p className="text-muted-foreground">
          Working in transaction coordination?{" "}
          <Link className="text-link" href="/tc-packages">
            Compare TC packages from $750 ↗
          </Link>
        </p>
      </div>
      <ProjectCTA />
    </>
  );
}
