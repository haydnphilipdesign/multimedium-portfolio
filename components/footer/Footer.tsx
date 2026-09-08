import Link from "next/link";
import { siteEmail } from "@/lib/site";
export function Footer() {
  return (
    <footer className="studio-footer">
      <div className="studio-shell">
        <div className="footer-grid">
          <div>
            <Link href="/" className="studio-wordmark">
              multimedium.
            </Link>
            <p className="mt-5 max-w-xs text-muted-foreground">
              Independent web design & development.
              <br />
              Based in the Poconos. Built for your business.
            </p>
            <a
              href={"mailto:" + siteEmail}
              className="text-link mt-5 inline-block"
            >
              {siteEmail}
            </a>
          </div>
          <div>
            <p className="eyebrow">Work together</p>
            <Link href="/services/website">Custom websites</Link>
            <Link href="/services/landing-pages">One-page websites</Link>
            <Link href="/services/growth-retainers">Hosting & support</Link>
            <Link href="/tc-packages">TC website packages</Link>
            <Link href="/contact">Start a project</Link>
          </div>
          <div>
            <p className="eyebrow">Explore</p>
            <Link href="/work">Client work</Link>
            <Link href="/about">About Haydn</Link>
            <Link href="/industries">Who I work with</Link>
            <Link href="/tools">Products & tools</Link>
            <Link href="/lab">Design lab</Link>
            <Link href="/resources">Free TC resources</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Multimedium</span>
          <span>Design, development, and a person you can reach.</span>
        </div>
      </div>
    </footer>
  );
}
