import Link from "next/link";
import {
  PageIntro,
  ProjectTile,
  ProjectCTA,
} from "@/components/marketing/Studio";
import { TCPackages } from "@/components/marketing/TCPackages";
import { getProjectBySlug } from "@/content/projects";
import { createPageMetadata } from "@/lib/seo";
export const metadata = createPageMetadata({
  title: "Transaction Coordinator Website Packages",
  description:
    "Custom TC websites: Starter $750, Growth $1,500, and Pro $3,000+. Clear services, professional design, and practical intake workflows. Hosting from $59/month.",
  path: "/tc-packages",
});
export default function Packages() {
  return (
    <>
      <PageIntro
        eyebrow="Transaction coordinator websites"
        title="A professional first impression. A clearer way to start a file."
        body="Websites for TCs who want agents to understand their value and know exactly how to work with them. Built by a designer and developer who understands your industry."
      />
      <section className="studio-shell">
        <TCPackages />
        <p className="scope-note mb-12">
          Starting prices reflect the scopes above. Your final pages, features,
          timeline, and price are agreed before work begins. Hosting and
          maintenance are available from $59/month. Examples are demonstrations
          of possible structures; your website will reflect your business.
        </p>
      </section>
      <section className="services-band">
        <div className="studio-shell studio-section">
          <div className="section-top">
            <div>
              <p className="eyebrow">Relevant experience</p>
              <h2>Built for real TC businesses.</h2>
            </div>
            <Link href="/work?industry=tc" className="text-link">
              More TC work ↗
            </Link>
          </div>
          <div className="project-grid">
            {["pa-real-estate-support", "tag-landing-page"].map((s) => (
              <ProjectTile key={s} project={getProjectBySlug(s)!} />
            ))}
          </div>
        </div>
      </section>
      <section className="studio-shell studio-section faq-section">
        <div>
          <p className="eyebrow">Finding the right fit</p>
          <h2>Start with what you need.</h2>
        </div>
        <div>
          {[
            [
              "Which package should I choose?",
              "Starter is a focused one-page site. Growth adds room for dedicated service pages and intake. Pro is for a more extensive site or integrations. If you’re unsure, tell me what you need and I’ll recommend a scope.",
            ],
            [
              "Can you help with the content?",
              "Yes. We’ll work together on the page structure, service descriptions, and visual direction. The depth of copy and branding work will be included in your quote.",
            ],
            [
              "What about forms and file intake?",
              "We can connect the forms and tools you already use, or plan a simpler intake process. The exact setup depends on your package and workflow.",
            ],
            [
              "What happens after launch?",
              "Hosting and maintenance start at $59/month. We’ll agree on included support and quote larger updates separately.",
            ],
          ].map(([q, a]) => (
            <details key={q}>
              <summary>
                {q}
                <span aria-hidden="true">+</span>
              </summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </section>
      <ProjectCTA />
    </>
  );
}
