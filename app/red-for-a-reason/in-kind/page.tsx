import { CampaignArticle } from "@/components/campaign/campaign-article";
import { CampaignEnquiryForm } from "@/components/campaign/campaign-enquiry-form";
import { Container } from "@/components/ui/container";
import { campaign } from "@/content/campaign";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Offer in-kind support",
  description:
    "Offer goods or services to Red for a Reason. In-kind support is recorded separately and is not counted as cash raised.",
  path: campaign.inKindHref,
});

export default function InKindPage() {
  return (
    <CampaignArticle eyebrow="In-kind support" title={campaign.inKind.title} lede={campaign.inKind.lede}>
      <Container className="grid gap-12 py-16 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-6">
          <h2 className="text-h3">Support that lowers the cost</h2>
          <ul className="mt-5 space-y-3">
            {campaign.inKind.examples.map((item) => (
              <li key={item} className="border-l-2 border-campaign pl-4 text-body text-ink/85">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-body text-ink/80">
            Say what you can provide, the quantity, and any date or condition. If it is agreed, it
            will be thanked and reported apart from money received.
          </p>
        </div>
        <div className="bg-white p-5 sm:p-8 lg:col-span-5 lg:col-start-8">
          <h2 className="text-h3">Offer support</h2>
          <div className="mt-6">
            <CampaignEnquiryForm kind="in-kind" />
          </div>
        </div>
      </Container>
    </CampaignArticle>
  );
}
