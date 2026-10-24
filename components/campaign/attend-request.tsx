import { CampaignEnquiryForm } from "@/components/campaign/campaign-enquiry-form";
import { ShareCampaign } from "@/components/campaign/share-campaign";
import { ButtonLink } from "@/components/ui/button";
import { campaign } from "@/content/campaign";

/** The request form while requests are open, and a thank-you once they close. */
export function AttendRequest() {
  if (campaign.attend.requestsOpen) {
    return (
      <>
        <CampaignEnquiryForm kind="rsvp" />
        <p className="mt-6 border-t border-border pt-4 text-caption text-muted-foreground">
          {campaign.attend.smallPrint}
        </p>
      </>
    );
  }

  return (
    <div>
      <p className="font-display text-h3 text-ink">{campaign.attend.closed.title}</p>
      <p className="mt-3 text-body text-ink/80">{campaign.attend.closed.text}</p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <ButtonLink href={campaign.donateHref}>{campaign.donateLabel}</ButtonLink>
        <ShareCampaign
          path={campaign.path}
          title={`${campaign.name}. ${campaign.tagline}`}
          text={campaign.notice.description}
          label="Share the Campaign"
        />
      </div>
    </div>
  );
}
