import { CampaignPage } from "@/components/campaign/campaign-page";
import { campaign } from "@/content/campaign";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Red for a Reason",
  description: `${campaign.tagline} A Samaa Charity Projects charity tennis campaign on ${campaign.dateLabel} at ${campaign.venue}, supporting children in Africa living with sickle cell disease.`,
  path: campaign.path,
});

export default function RedForAReasonPage() {
  return <CampaignPage />;
}
