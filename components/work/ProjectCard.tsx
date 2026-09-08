import Link from "next/link";
import { ProjectTile } from "@/components/marketing/Studio";
import type { Project } from "@/content/projects";
type Props = {
  project: Project;
  index?: number;
  className?: string;
  reverse?: boolean;
};
export function ProjectCard({ project }: Props) {
  return <ProjectTile project={project} />;
}
export function FeaturedProject({ project }: Props) {
  return <ProjectTile project={project} />;
}
export function ProjectCardCompact({ project }: Props) {
  return (
    <Link
      href={"/work/" + project.slug}
      className="block border-b border-border py-6"
    >
      <span className="eyebrow">{project.kind}</span>
      <h3 className="text-2xl">{project.title} ↗</h3>
      <p className="mt-3 text-muted-foreground">{project.tagline}</p>
    </Link>
  );
}
