import Link from "next/link";
import { getProjectBySlug } from "@/content/projects";
import { tcFaqs } from "@/content/faqs";
import {
  FaqList,
  FeatureList,
  PackageCards,
  PageIntro,
  ProjectCTA,
  ProjectTile,
  SectionHeading,
} from "@/components/marketing/Studio";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Websites for Transaction Coordinators",
  description:
    "Websites for transaction coordinators and TC companies: clear services, a simple way for agents to start a file, and room to grow. From $750.",
  path: "/transaction-coordinators",
});

const tcWork = [
  {
    slug: "structured-closings",
    pkg: "Full website",
    line: "Every service in one place, and one guided form for agents to start a file.",
  },
  {
    slug: "pa-real-estate-support",
    pkg: "Full website",
    line: "My mom’s TC business, rebuilt around one question: “How do I send you a file?”",
  },
  {
    slug: "tag-landing-page",
    pkg: "One-page site",
    line: "One page that says who it’s for, and who it isn’t for, then books the call.",
  },
];

export default function TransactionCoordinators() {
  return (
    <>
      <PageIntro
        eyebrow="Websites for transaction coordinators"
        title={
          <>
            Websites for transaction coordinators that agents can{" "}
            <em>say yes to.</em>
          </>
        }
        body="Before an agent sends you a file, they look you up. I build TC websites that make what you handle, how you work, and how to start a file clear at a glance, so the next step is a submitted file, not phone tag."
      >
        <div className="hero-actions">
          <Link href="/contact?source=tc-hero" className="btn-primary">
            Start a project <span aria-hidden="true">→</span>
          </Link>
          <a href="#packages" className="text-link">
            See TC packages ↓
          </a>
        </div>
      </PageIntro>

      <section className="studio-shell studio-section rule-top">
        <SectionHeading title="What your website needs to do" />
        <FeatureList
          items={[
            {
              title: "Show agents exactly what you handle.",
              body: "Listing coordination, contract to close, compliance, investor deals: described the way agents think about them, not in internal jargon.",
            },
            {
              title: "Make starting a file one step.",
              body: "A Start a File page with the form tool you already use (Cognito Forms, Jotform) or a simple built-in form, with room for contracts and details.",
            },
            {
              title: "Answer the money question.",
              body: "Publish your pricing, or at least how pricing works, so agents don’t have to ask before they trust you.",
            },
            {
              title: "Grow with you.",
              body: "Careers, team bios, and investor or luxury service pages can be added when you need them.",
            },
          ]}
        />
      </section>

      <section className="tint-band">
        <div className="studio-shell studio-section">
          <SectionHeading title="TC websites I’ve built" />
          <div className="project-grid three-up">
            {tcWork.map(({ slug, pkg, line }) => (
              <ProjectTile
                key={slug}
                project={getProjectBySlug(slug)!}
                eyebrow={pkg}
                description={line}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="packages" className="studio-shell studio-section">
        <SectionHeading title="Packages for TCs" />
        <PackageCards audience="tc" source="tc-packages" />
      </section>

      <section className="studio-shell studio-section rule-top split-section">
        <h2>Built by someone who knows the desk</h2>
        <div>
          <p>
            My mom has been a transaction coordinator since 2013. Her agents
            start every file through a form on the site I built for her, and it
            lands in Norma, the TC workspace I build, as a new transaction.
            Between her business and Norma Suite (Norma, Norma Intake, and
            UtilitySheet), the details of intake, cover sheets, and agent
            communication aren’t new to me.
          </p>
          <Link href="/about#software" className="text-link">
            About Norma Suite →
          </Link>
        </div>
      </section>

      <section className="studio-shell studio-section rule-top split-section">
        <h2>Free TC templates and guides</h2>
        <div>
          <p>
            A task list, a cover sheet, and an intake checklist, free to
            download. Plus short guides to what every TC website needs, what an
            intake form should ask, and what a TC website costs.
          </p>
          <Link href="/resources" className="text-link">
            Get the templates and guides →
          </Link>
        </div>
      </section>

      <FaqList faqs={tcFaqs} title="Questions TCs ask" />
      <ProjectCTA />
    </>
  );
}
