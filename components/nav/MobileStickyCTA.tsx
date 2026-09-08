"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export function MobileStickyCTA() {
  const path = usePathname();
  if (
    path.startsWith("/contact") ||
    path.startsWith("/review") ||
    path.includes("/flyer")
  )
    return null;
  return (
    <aside className="mobile-project-bar" aria-label="Start a website project">
      <span>
        Custom websites
        <br />
        <strong>from $1,500</strong>
      </span>
      <Link
        href={"/contact?source=" + encodeURIComponent("mobile" + path)}
        className="btn-primary"
      >
        Let’s talk <span aria-hidden="true">↗</span>
      </Link>
    </aside>
  );
}
