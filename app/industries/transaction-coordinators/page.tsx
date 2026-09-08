import Link from "next/link";
import {
  PageIntro,
  ProjectTile,
  ProjectCTA,
} from "@/components/marketing/Studio";
import { getProjectBySlug } from "@/content/projects";
import { TCPackages } from "@/components/marketing/TCPackages";
import { createPageMetadata } from "@/lib/seo";
export const metadata = createPageMetadata({
  title: "Website Design for Transaction Coordinators",
  description:
    "Custom websites for transaction coordinators. Explain your services, build credibility with agents, and make intake easier. Packages from $750.",
  path: "/industries/transaction-coordinators",
});
export default function Page() {
  return (
    <>
      <PageIntro
        eyebrow="Industry specialty / Transaction coordination"
        title="Make your value clear before the first conversation."
        body="You manage the details behind a successful closing. Your website should give agents the same sense of clarity and confidence—with services they understand and a simple way to get started."
      />
      <section className="studio-shell pb-16">
        <div className="project-grid">
          {["pa-real-estate-support", "tag-landing-page"].map((s) => (
            <ProjectTile key={s} project={getProjectBySlug(s)!} priority />
          ))}
        </div>
      </section>
      <section className="studio-shell studio-section">
        <div className="section-top">
          <div>
            <p className="eyebrow">A scope for your stage</p>
            <h2>TC website packages.</h2>
          </div>
          <Link href="/tc-packages" className="text-link">
            Full package details ↗
          </Link>
        </div>
        <TCPackages source="industry-tc" />
      </section>
      <ProjectCTA />
    </>
  );
}
