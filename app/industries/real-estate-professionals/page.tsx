import { IndustryDetail } from "@/components/marketing/IndustryDetail";
import { createPageMetadata } from "@/lib/seo";
const content = {
  title: "Real estate professionals",
  headline: "A website that reflects the way you do business.",
  body: "Custom websites for agents, teams, brokerages, and property businesses. Give visitors a clear picture of your services, your experience, and how to take the next step.",
  needs: [
    "Clear service and local-area information",
    "Dedicated paths for different customer needs",
    "A place for real work, experience, and client-approved proof",
    "Practical inquiry forms and agreed booking or portal connections",
  ],
  proof: ["three-penn-properties", "pa-real-estate-support"],
};
export const metadata = createPageMetadata({
  title: "Website Design for " + content.title,
  description: content.body,
  path: "/industries/real-estate-professionals",
});
export default function Page() {
  return <IndustryDetail {...content} />;
}
