import { ServiceDetail } from "@/components/marketing/ServiceDetail";
import { serviceOffers } from "@/content/services";
import { createPageMetadata } from "@/lib/seo";
const offer = serviceOffers["landing-pages"];
export const metadata = createPageMetadata({
  title: offer.title,
  description: offer.description,
  path: "/services/landing-pages",
});
export default function Page() {
  return <ServiceDetail service="landing-pages" />;
}
