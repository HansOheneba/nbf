import { CampaignArticle } from "@/components/campaign/campaign-article";
import { CampaignEnquiryForm } from "@/components/campaign/campaign-enquiry-form";
import { Container } from "@/components/ui/container";
import { campaign } from "@/content/campaign";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Offer an auction lot",
  description:
    "Offer a lot for the Red for a Reason charity auction. Lots are published only after the donor agrees the wording in writing.",
  path: campaign.auctionHref,
});

export default function AuctionPage() {
  return (
    <CampaignArticle eyebrow="Charity auction" title={campaign.auction.title} lede={campaign.auction.lede}>
      <Container className="grid gap-12 py-16 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-6">
          <h2 className="text-h3">Lots the campaign can consider</h2>
          <ul className="mt-5 space-y-3">
            {campaign.auction.welcomed.map((item) => (
              <li key={item} className="border-l-2 border-campaign pl-4 text-body text-ink/85">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-body text-ink/80">{campaign.auction.terms}</p>
        </div>
        <div className="bg-white p-5 sm:p-8 lg:col-span-5 lg:col-start-8">
          <h2 className="text-h3">Offer a lot</h2>
          <div className="mt-6">
            <CampaignEnquiryForm kind="auction" />
          </div>
        </div>
      </Container>
    </CampaignArticle>
  );
}
