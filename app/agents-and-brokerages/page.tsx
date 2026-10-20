import Link from "next/link";
import { getProjectBySlug } from "@/content/projects";
import { agentFaqs } from "@/content/faqs";
import {
  BrowserFrame,
  FaqList,
  FeatureList,
  PackageCards,
  PageIntro,
  ProjectCTA,
  SectionHeading,
} from "@/components/marketing/Studio";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Websites for Real Estate Agents & Brokerages",
  description:
    "Custom websites for real estate agents, teams, and independent brokerages: your own brand, clear buyer and seller paths, transparent services, and real reviews.",
  path: "/agents-and-brokerages",
});

export default function AgentsAndBrokerages() {
  const haven = getProjectBySlug("haven-compass-realty")!;
  return (
    <>
      <PageIntro
        eyebrow="Websites for agents & brokerages"
        title={
          <>
            A website that’s <em>yours,</em> not another brokerage template.
          </>
        }
        body="For agents, teams, and independent brokerages who want a site that shows who you serve, how you work, and why clients choose you, with a clear next step for buyers and sellers."
      >
        <div className="hero-actions">
          <Link href="/contact?source=agents-hero" className="btn-primary">
            Start a project <span aria-hidden="true">→</span>
          </Link>
          <a href="#packages" className="text-link">
            See packages ↓
          </a>
        </div>
      </PageIntro>

      <section className="tint-band">
        <div className="studio-shell studio-section featured-case">
          <figure>
            <BrowserFrame
              src={haven.heroImage}
              alt="The Haven Compass Realty homepage: “A clear path home.” with buttons to request a consultation or explore selling"
              url={haven.externalUrl}
              width={1920}
              height={1080}
              sizes="(max-width: 800px) 100vw, 60vw"
            />
            <figcaption>Haven Compass Realty, Connecticut</figcaption>
          </figure>
          <div>
            <p className="eyebrow">Case study</p>
            <h2>A launch site for a new brokerage</h2>
            <ul className="check-list">
              <li>
                Seller packages priced in plain sight, with a full comparison
                table.
              </li>
              <li>
                Six real client reviews, labeled, dated, and linked to the
                originals on Google.
              </li>
              <li>
                Step-by-step paths for buyers and sellers, plus an earnest money
                page with a wire-fraud warning.
              </li>
            </ul>
            <Link href="/work/haven-compass-realty" className="text-link">
              Read the case study →
            </Link>
          </div>
        </div>
      </section>

      <section className="studio-shell studio-section">
        <SectionHeading title="What your website should do" />
        <FeatureList
          items={[
            {
              title: "Give buyers and sellers their own path.",
              body: "Each sees the steps, what you handle, and how to start.",
            },
            {
              title: "Explain your services and fees, if you publish them.",
              body: "Clear packages earn trust before the first call.",
            },
            {
              title: "Show real reviews.",
              body: "Your existing reviews, quoted accurately and linked to the originals. Never rewritten or invented.",
            },
            {
              title: "Help clients who are already under contract.",
              body: "Practical pages like earnest money instructions and fraud warnings.",
            },
            {
              title: "Recruit (brokerages).",
              body: "Careers and “join our team” pages for when you’re ready to grow.",
            },
          ]}
        />
      </section>

      <section id="packages" className="studio-shell studio-section rule-top">
        <SectionHeading title="Packages for agents & brokerages" />
        <PackageCards audience="agents" source="agents-packages" />
      </section>

      <FaqList faqs={agentFaqs} title="Questions agents and brokers ask" />
      <ProjectCTA />
    </>
  );
}
