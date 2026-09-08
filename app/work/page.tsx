import Link from "next/link";
import {
  PageIntro,
  ProjectTile,
  ProjectCTA,
} from "@/components/marketing/Studio";
import { getClientProjectsByIndustry } from "@/content/projects";
import { createPageMetadata } from "@/lib/seo";
export const metadata = createPageMetadata({
  title: "Selected Client Websites",
  description:
    "Custom websites for transaction coordinators, real estate businesses, and service providers. Explore real projects designed and built by Haydn at Multimedium.",
  path: "/work",
});
export default async function Work({
  searchParams,
}: {
  searchParams: Promise<{ industry?: string }>;
}) {
  const { industry } = await searchParams;
  const work = getClientProjectsByIndustry(industry);
  return (
    <>
      <PageIntro
        eyebrow="Selected client work"
        title="Custom websites for real businesses."
        body="A closer look at the sites I’ve designed and developed—from transaction coordination and property services to a wellness business with a very different story."
      />
      <section className="studio-shell pb-20">
        <nav className="filters" aria-label="Filter client work">
          {[
            ["", "All client work"],
            ["tc", "Transaction coordination"],
            ["real-estate", "Real estate"],
          ].map(([v, l]) => (
            <Link
              key={v}
              href={v ? "/work?industry=" + v : "/work"}
              aria-current={(industry || "") === v ? "page" : undefined}
            >
              {l}
            </Link>
          ))}
        </nav>
        {work.length ? (
          <div className="project-grid">
            {work.map((p, i) => (
              <ProjectTile key={p.slug} project={p} priority={i < 2} />
            ))}
          </div>
        ) : (
          <div className="detail-panel">
            <h2>No client projects in this category yet.</h2>
            <Link href="/work" className="text-link">
              View all client work ↗
            </Link>
          </div>
        )}
        <div className="mt-14 border-t border-border pt-7 flex flex-wrap gap-6">
          <p className="text-muted-foreground">
            Want to see the technical side?
          </p>
          <Link href="/tools" className="text-link">
            Products I’ve built ↗
          </Link>
          <Link href="/lab" className="text-link">
            Concepts & experiments ↗
          </Link>
        </div>
      </section>
      <ProjectCTA />
    </>
  );
}
