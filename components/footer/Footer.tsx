import Link from "next/link";
import { siteEmail } from "@/lib/site";
export function Footer() {
  return (
    <footer className="studio-footer">
      <div className="studio-shell">
        <div className="footer-grid">
          <div>
            <Link href="/" className="studio-wordmark">
              <span className="brand-symbol" aria-hidden="true">
                m.
              </span>
              multimedium<span className="brand-period">.</span>
            </Link>
            <p className="mt-5 max-w-xs text-muted-foreground">
              Websites for transaction coordinators, agents, and brokerages.
            </p>
            <a
              href={"mailto:" + siteEmail}
              className="text-link mt-5 inline-block"
            >
              {siteEmail}
            </a>
          </div>
          <nav aria-label="Footer">
            <Link href="/work">Work</Link>
            <Link href="/transaction-coordinators">Transaction coordinators</Link>
            <Link href="/agents-and-brokerages">Agents & brokerages</Link>
            <Link href="/pricing">Pricing</Link>
          </nav>
          <div>
            <Link href="/about">About</Link>
            <Link href="/resources">Free TC resources</Link>
            <Link href="/contact?source=footer">Start a project</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Multimedium</span>
          <span>
            Based in the Poconos, PA. Working with clients across the US and
            Puerto Rico.
          </span>
        </div>
      </div>
    </footer>
  );
}
