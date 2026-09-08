import { IndustryDetail } from "@/components/marketing/IndustryDetail";
import { createPageMetadata } from "@/lib/seo";
const content = {
  title: "Homeowners associations",
  headline: "Community information, easier to find.",
  body: "A clear, practical website for your association. Help residents find useful information, understand where to go for help, and reach the right contact.",
  needs: [
    "An organized home for community information",
    "Easy-to-find documents and key contacts",
    "Clear pathways for residents and prospective homeowners",
    "Mobile-friendly pages and scoped form or portal connections",
  ],
  proof: ["three-penn-properties", "pa-real-estate-support"],
};
export const metadata = createPageMetadata({
  title: "Website Design for " + content.title,
  description: content.body,
  path: "/industries/homeowners-associations",
});
export default function Page() {
  return <IndustryDetail {...content} />;
}
