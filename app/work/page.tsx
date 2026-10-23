import {
  PageIntro,
  ProjectTile,
  ProjectCTA,
  SectionHeading,
} from "@/components/marketing/Studio";
import { getClientWork } from "@/content/projects";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Client Work: Real Estate Websites",
  description:
    "Websites for a Connecticut brokerage, transaction coordination companies, and real estate businesses, designed and built by Haydn at Multimedium.",
  path: "/work",
});

export default function Work() {
  const { realEstate, other } = getClientWork();
  return (
    <>
      <PageIntro
        eyebrow="Client work"
        title={
          <>
            Real estate websites, built for <em>real businesses.</em>
          </>
        }
        body="Brokerages, transaction coordination companies, and the people behind them. Every project here is real client work."
      />
      <section className="studio-shell pb-20">
        <h2 className="sr-only">Real estate clients</h2>
        <div className="project-grid">
          {realEstate.map((p, i) => (
            <ProjectTile key={p.slug} project={p} priority={i < 2} />
          ))}
        </div>
      </section>
      {other.length > 0 && (
        <section className="studio-shell studio-section rule-top">
          <SectionHeading title="Other work" />
          <div className="project-grid">
            {other.map((p) => (
              <ProjectTile key={p.slug} project={p} />
            ))}
          </div>
        </section>
      )}
      <ProjectCTA />
    </>
  );
}
