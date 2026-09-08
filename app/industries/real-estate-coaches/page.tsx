import { IndustryDetail } from "@/components/marketing/IndustryDetail";
import { createPageMetadata } from "@/lib/seo";
const content = {
  title: "Real estate coaches & brokerages",
  headline: "Give your expertise a clear home online.",
  body: "A custom website for your coaching, education, consulting, or brokerage business. Explain your offer, establish credibility, and help the right people decide to get in touch.",
  needs: [
    "Clear offer and audience positioning",
    "A useful explanation of your process and services",
    "Real credentials and approved testimonials where available",
    "A focused path to an inquiry or discovery conversation",
  ],
  proof: ["tag-landing-page", "three-penn-properties"],
};
export const metadata = createPageMetadata({
  title: "Website Design for " + content.title,
  description: content.body,
  path: "/industries/real-estate-coaches",
});
export default function Page() {
  return <IndustryDetail {...content} />;
}
