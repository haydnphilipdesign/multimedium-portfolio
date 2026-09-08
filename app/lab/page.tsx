import Link from "next/link";
import {
  PageIntro,
  ProjectTile,
  ProjectCTA,
} from "@/components/marketing/Studio";
import { getConceptProjects } from "@/content/projects";
import { createPageMetadata } from "@/lib/seo";
export const metadata = createPageMetadata({
  title: "Design Lab — Concepts & Experiments",
  description:
    "Self-initiated website concepts exploring different visual directions. Fictional brands, clearly presented as experiments rather than client work.",
  path: "/lab",
});
export default function Lab() {
  return (
    <>
      <PageIntro
        eyebrow="Design lab / Self-initiated work"
        title="Room to explore."
        body="Experiments in art direction, interaction, and the different personalities a website can have. These are concepts for fictional businesses, created to explore ideas."
      />
      <section className="studio-shell pb-20">
        <div className="filters">
          <Link href="/work">See real client work ↗</Link>
          <Link href="/tools">Explore working products ↗</Link>
        </div>
        <div className="project-grid">
          {getConceptProjects().map((p, i) => (
            <ProjectTile project={p} key={p.slug} priority={i < 2} />
          ))}
        </div>
      </section>
      <ProjectCTA />
    </>
  );
}
