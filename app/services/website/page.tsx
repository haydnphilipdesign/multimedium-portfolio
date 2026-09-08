import { ServiceDetail } from "@/components/marketing/ServiceDetail";
import { serviceOffers } from "@/content/services";
import { createPageMetadata } from "@/lib/seo";
const offer = serviceOffers["website"];
export const metadata = createPageMetadata({
  title: offer.title,
  description: offer.description,
  path: "/services/website",
});
export default function Page() {
  return <ServiceDetail service="website" />;
}
