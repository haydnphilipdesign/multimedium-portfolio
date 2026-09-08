import { IndustryDetail } from "@/components/marketing/IndustryDetail";
import { createPageMetadata } from "@/lib/seo";
const content = {
  title: "Local trades",
  headline: "Show the quality behind your work.",
  body: "Custom websites for local trades and independent service businesses. Help customers understand what you do, where you work, and how to request a quote.",
  needs: [
    "Clear services and service-area information",
    "A portfolio of your real work",
    "Visible contact options and quote requests",
    "A practical mobile experience for customers on the go",
  ],
  proof: ["blissful-existence", "three-penn-properties"],
};
export const metadata = createPageMetadata({
  title: "Website Design for " + content.title,
  description: content.body,
  path: "/industries/trades",
});
export default function Page() {
  return <IndustryDetail {...content} />;
}
