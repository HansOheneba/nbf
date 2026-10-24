import { CampaignArticle } from "@/components/campaign/campaign-article";
import { AttendRequest } from "@/components/campaign/attend-request";
import { Container } from "@/components/ui/container";
import { campaign } from "@/content/campaign";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Request a place",
  description:
    "Request a place at Red for a Reason, a charity tennis afternoon on 19 December 2026 in Accra.",
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
              <dt className="eyebrow text-deep">What to expect</dt>
              <dd className="mt-2 text-body text-ink/85">{campaign.afternoon.lede}</dd>
            </div>
          </dl>
        </div>
        <div className="bg-white p-5 sm:p-8 lg:col-span-6 lg:col-start-7">
          <h2 className="text-h3">{campaign.attend.requestsOpen ? "Your request" : "Thank you"}</h2>
          <div className="mt-6">
            <AttendRequest />
          </div>
        </div>
      </Container>
    </CampaignArticle>
  );
}
