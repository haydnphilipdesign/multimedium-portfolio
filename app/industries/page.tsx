import Link from "next/link";
import { PageIntro, ProjectCTA } from "@/components/marketing/Studio";
import { createPageMetadata } from "@/lib/seo";
export const metadata = createPageMetadata({
  title: "Websites for Small & Service Businesses",
  description:
    "Website design for transaction coordinators, real estate professionals, trades, home services, and other small businesses. Custom design with personal service.",
  path: "/industries",
});
const industries = [
  [
    "transaction-coordinators",
    "Transaction coordinators",
    "Make your value clear to agents and create a simpler path to start a file.",
  ],
  [
    "real-estate-professionals",
    "Real estate professionals",
    "A professional presence for your services, local knowledge, and customer relationships.",
  ],
  [
    "real-estate-coaches",
    "Real estate coaches & brokerages",
    "Give your expertise, offers, and approach a clear home online.",
  ],
  [
    "homeowners-associations",
    "Homeowners associations",
    "Make community information easier to find and the right contacts easier to reach.",
  ],
  [
    "trades",
    "Local trades",
    "Show your work, explain your services, and help customers request a quote.",
  ],
  [
    "home-services",
    "Home services",
    "Build confidence in your business with a clear service area and practical contact options.",
  ],
];
export default function Industries() {
  return (
    <>
      <PageIntro
        eyebrow="Who I work with"
        title="Built for the business you run."
        body="Small businesses and service providers need websites that explain what they do, show why it matters, and make the next step easy. I tailor the design to your business, with particular experience in transaction coordination and real estate."
      />
      <section className="studio-shell pb-20">
        <div className="industry-grid">
          {industries.map(([slug, title, body], i) => (
            <Link href={"/industries/" + slug} key={slug}>
              <span className="eyebrow">0{i + 1}</span>
              <h2>
                {title} <span aria-hidden="true">↗</span>
              </h2>
              <p>{body}</p>
            </Link>
          ))}
        </div>
        <p className="mt-10 text-muted-foreground">
          Don’t see your industry?{" "}
          <Link href="/contact" className="text-link">
            Tell me about your business ↗
          </Link>
        </p>
      </section>
      <ProjectCTA />
    </>
  );
}
