import Image from "next/image";
import Link from "next/link";
import { serviceOffers } from "@/content/services";
import { PageIntro, Process, ProjectCTA } from "./Studio";
export function ServiceDetail({
  service,
}: {
  service: keyof typeof serviceOffers;
}) {
  const s = serviceOffers[service];
  return (
    <>
      <PageIntro eyebrow={s.title} title={s.headline} body={s.description} />
      <div className="studio-shell service-facts">
        <strong>{s.price}</strong>
        <span>{s.timeline}</span>
        <Link href={"/contact?projectType=" + s.type}>
          Discuss your project ↗
        </Link>
      </div>
      <section className="studio-shell content-grid">
        <div>
          <Image
            src={s.image}
            alt={s.alt}
            width={1440}
            height={1000}
            priority
            sizes="(max-width:800px) 100vw, 60vw"
            className="service-showcase"
          />
          <p className="image-caption">
            Selected client work · Designed and developed by Multimedium
          </p>
          <h2 className="text-3xl mt-10 mb-5">{s.intro}</h2>
          <ul className="detail-list">
            {s.included.map((i) => (
              <li key={i}>
                <span aria-hidden="true" className="text-primary mr-3">
                  ✓
                </span>
                {i}
              </li>
            ))}
          </ul>
        </div>
        <aside>
          <div className="detail-panel">
            <p className="eyebrow">Investment & scope</p>
            <strong className="price-large">{s.price}</strong>
            <p>{s.timeline}</p>
            <p className="mt-5">{s.note}</p>
            <Link
              className="btn-primary"
              href={
                "/contact?projectType=" + s.type + "&source=service-" + service
              }
            >
              Discuss your project ↗
            </Link>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl mb-4">Built around your business.</h2>
            <p className="text-muted-foreground">
              I work with small businesses and service providers across
              industries. Transaction coordination and real estate are
              specialties, with relevant work you can explore.
            </p>
            <Link href="/work" className="text-link inline-block mt-5">
              See client work ↗
            </Link>
          </div>
        </aside>
      </section>
      <Process />
      <ProjectCTA />
    </>
  );
}
