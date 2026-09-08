import {
  PageIntro,
  ProjectTile,
  ProjectCTA,
} from "@/components/marketing/Studio";
import { getProductProjects } from "@/content/projects";
import { createPageMetadata } from "@/lib/seo";
export const metadata = createPageMetadata({
  title: "Products & Tools Built by Multimedium",
  description:
    "Explore Norma Suite, UtilitySheet, and other independent products built by Haydn. Practical software demonstrating the technical depth behind Multimedium.",
  path: "/tools",
});
export default function Tools() {
  return (
    <>
      <PageIntro
        eyebrow="Independent products"
        title="Built to solve the complicated parts."
        body="Alongside client websites, I design and develop my own software. These products handle real business workflows—from file intake to transaction management—and show the technical depth I bring to your project."
      />
      <section className="studio-shell pb-20">
        <div className="project-grid">
          {getProductProjects().map((p, i) => (
            <ProjectTile project={p} key={p.slug} priority={i < 2} />
          ))}
        </div>
        <div className="detail-panel mt-12">
          <h2>What this means for your website</h2>
          <p>
            I can help connect forms, services, and business workflows when your
            site needs more than pages. Advanced application projects are scoped
            separately; website design and development remain my main client
            service.
          </p>
        </div>
      </section>
      <ProjectCTA />
    </>
  );
}
