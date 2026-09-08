import { IndustryDetail } from "@/components/marketing/IndustryDetail";
import { createPageMetadata } from "@/lib/seo";
const content = {
  title: "Home services",
  headline: "Make it easy to choose your business.",
  body: "A custom website for your home-service business. Explain your services, show what customers can expect, and make it straightforward to ask for help.",
  needs: [
    "Service pages that answer common customer questions",
    "Clear coverage areas and contact details",
    "Real project photos and approved customer feedback",
    "A straightforward inquiry or quote request flow",
  ],
  proof: ["blissful-existence", "three-penn-properties"],
};
export const metadata = createPageMetadata({
  title: "Website Design for " + content.title,
  description: content.body,
  path: "/industries/home-services",
});
export default function Page() {
  return <IndustryDetail {...content} />;
}
