import Link from "next/link";
import { CampaignArticle } from "@/components/campaign/campaign-article";
import { CampaignEnquiryForm } from "@/components/campaign/campaign-enquiry-form";
import { Container } from "@/components/ui/container";
import { campaign } from "@/content/campaign";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Ask about Red for a Reason",
  description:
    "Write to Samaa Charity Projects about Red for a Reason. A message on this page does not request or confirm a place at the afternoon.",
  path: campaign.enquireHref,
});

export default function EnquirePage() {
  return (
    <CampaignArticle eyebrow={campaign.name} title={campaign.enquire.title} lede={campaign.enquire.lede}>
      <Container className="grid gap-12 py-16 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-5">
          <h2 className="text-h3">Where a question belongs</h2>
          <ul className="mt-5 space-y-3 text-body text-ink/85">
            <li>
              <Link href={campaign.rsvpHref} className="font-medium text-deep underline underline-offset-4">
                A request for a place
              </Link>{" "}
              has its own form.
            </li>
            <li>
              <Link href={campaign.sponsorHref} className="font-medium text-deep underline underline-offset-4">
                A partnership conversation
              </Link>{" "}
              has its own form.
            </li>
            <li>
              An{" "}
              <Link href={campaign.auctionHref} className="font-medium text-deep underline underline-offset-4">
                auction lot
              </Link>{" "}
              and an{" "}
              <Link href={campaign.inKindHref} className="font-medium text-deep underline underline-offset-4">
                in-kind gift
              </Link>{" "}
              do too.
            </li>
            <li>This page is for everything else about the campaign.</li>
          </ul>
        </div>
        <div className="bg-white p-5 sm:p-8 lg:col-span-6 lg:col-start-7">
          <CampaignEnquiryForm kind="general" />
        </div>
      </Container>
    </CampaignArticle>
  );
}
