import { CampaignArticle } from "@/components/campaign/campaign-article";
import { CampaignEnquiryForm } from "@/components/campaign/campaign-enquiry-form";
import { Container } from "@/components/ui/container";
import { campaign } from "@/content/campaign";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Partner with Red for a Reason",
  description:
    "Start a partnership conversation for Red for a Reason, the Samaa Charity Projects campaign for children in Africa living with sickle cell disease.",
  path: campaign.sponsorHref,
});

export default function SponsorPage() {
  return (
    <CampaignArticle eyebrow="Corporate partnership" title={campaign.sponsor.title} lede={campaign.sponsor.lede}>
      <Container className="grid gap-12 py-16 lg:grid-cols-12 lg:py-24">
        <div className="space-y-10 lg:col-span-6">
          <div>
            <h2 className="text-h3">What a partner is invited into</h2>
            <ul className="mt-5 space-y-5">
              {campaign.sponsor.value.map((item) => (
                <li key={item.title}>
                  <h3 className="text-h4">{item.title}</h3>
                  <p className="mt-2 text-body text-ink/80">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-h3">How an enquiry is handled</h2>
            <ul className="mt-5 space-y-3">
              {campaign.sponsor.terms.map((item) => (
                <li key={item} className="border-l-2 border-campaign pl-4 text-body text-ink/85">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="bg-white p-5 sm:p-8 lg:col-span-5 lg:col-start-8">
          <h2 className="text-h3">Partnership enquiry</h2>
          <div className="mt-6">
            <CampaignEnquiryForm kind="sponsorship" />
          </div>
        </div>
      </Container>
    </CampaignArticle>
  );
}
