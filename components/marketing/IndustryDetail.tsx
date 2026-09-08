import Link from "next/link";
import { PageIntro, ProjectTile, ProjectCTA } from "./Studio";
import { getProjectBySlug } from "@/content/projects";
export function IndustryDetail({
  title,
  headline,
  body,
  needs,
  proof,
}: {
  title: string;
  headline: string;
  body: string;
  needs: string[];
  proof: string[];
}) {
  return (
    <>
      <PageIntro
        eyebrow={"Website design / " + title}
        title={headline}
        body={body}
      />
      <section className="studio-shell content-grid">
        <div>
          <h2 className="text-3xl">
            Clear information. A confident first impression.
          </h2>
          <ul className="detail-list">
            {needs.map((n) => (
              <li key={n}>✓ {n}</li>
            ))}
          </ul>
          <p className="text-muted-foreground">
            The right structure depends on your services, audience, and how you
            work. We’ll agree on a plan before design begins.
          </p>
        </div>
        <aside className="detail-panel">
          <p className="eyebrow">Custom websites & redesigns</p>
          <strong className="price-large">From $1,500</strong>
          <p>
            Focused one-page sites from $750. More extensive builds and
            integrations are quoted to your scope.
          </p>
          <Link
            href="/contact?projectType=website&source=industry"
            className="btn-primary"
          >
            Talk about your website ↗
          </Link>
        </aside>
      </section>
      <section className="studio-shell studio-section">
        <div className="section-top">
          <div>
            <p className="eyebrow">Selected client work</p>
            <h2>See the approach in practice.</h2>
          </div>
          <Link href="/work" className="text-link">
            All client work ↗
          </Link>
        </div>
        <div className="project-grid">
          {proof.map((slug) => (
            <ProjectTile key={slug} project={getProjectBySlug(slug)!} />
          ))}
        </div>
      </section>
      <ProjectCTA />
    </>
  );
}
