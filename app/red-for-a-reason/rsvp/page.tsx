import { CampaignArticle } from "@/components/campaign/campaign-article";
import { CampaignEnquiryForm } from "@/components/campaign/campaign-enquiry-form";
import { Container } from "@/components/ui/container";
import { campaign } from "@/content/campaign";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Request to attend",
  description:
    "Request to attend Red for a Reason on 19 December 2026. Entrance is limited. A request does not confirm your place.",
  path: campaign.rsvpHref,
});

export default function RsvpPage() {
  return (
    <CampaignArticle eyebrow="The afternoon" title={campaign.rsvp.title} lede={campaign.rsvp.lede}>
      <Container className="grid gap-12 py-16 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-5">
          <h2 className="text-h3">The afternoon</h2>
          <dl className="mt-6 space-y-5">
            <div>
              <dt className="eyebrow text-deep">When</dt>
              <dd className="mt-2 text-body text-ink/85">
                {campaign.dateLabel}, from {campaign.arrival}.
              </dd>
            </div>
            <div>
              <dt className="eyebrow text-deep">Where</dt>
              <dd className="mt-2 text-body text-ink/85">{campaign.venue}.</dd>
            </div>
            <div>
              <dt className="eyebrow text-deep">Entrance</dt>
              <dd className="mt-2 text-body text-ink/85">
                Limited. Our team will get in touch about availability. Nothing is held until we
                confirm.
              </dd>
            </div>
          </dl>
        </div>
        <div className="bg-white p-5 sm:p-8 lg:col-span-6 lg:col-start-7">
          <h2 className="text-h3">Your request</h2>
          <div className="mt-6">
            <CampaignEnquiryForm kind="rsvp" />
          </div>
        </div>
      </Container>
    </CampaignArticle>
  );
}
