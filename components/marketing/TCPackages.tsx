import Link from "next/link";
import { tcPackages } from "@/content/tc-packages";
export function TCPackages({ source = "tc-packages" }: { source?: string }) {
  return (
    <div className="package-grid">
      {tcPackages.map((p) => (
        <article
          key={p.key}
          className={"package-card " + (p.key === "growth" ? "featured" : "")}
        >
          <p className="eyebrow">
            {p.key === "growth"
              ? "For an established business"
              : p.key === "starter"
                ? "A focused first step"
                : "Room for more"}
          </p>
          <h2>{p.name}</h2>
          <strong className="price-large">{p.price}</strong>
          <p>{p.description}</p>
          <ul className="detail-list">
            {p.features.map((f) => (
              <li key={f}>✓ {f}</li>
            ))}
          </ul>
          <p>{p.bestFor}</p>
          <Link
            className="btn-primary"
            href={
              "/contact?source=" +
              source +
              "&package=" +
              encodeURIComponent(p.name) +
              "&projectType=" +
              (p.key === "starter" ? "landing" : "website") +
              "&budgetRange=" +
              p.budget
            }
          >
            Discuss {p.name.replace("TC ", "")} ↗
          </Link>
          <Link
            className="text-link"
            href={"/demos/" + p.key + "/index.html?returnTo=/tc-packages"}
          >
            Explore an example ↗
          </Link>
        </article>
      ))}
    </div>
  );
}
