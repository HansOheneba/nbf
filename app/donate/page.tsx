import { DonationForm } from "@/components/campaign/donation-form";
import { GivingPerspective } from "@/components/editorial/giving-perspective";
import { DonateForm } from "@/components/forms/contribution-form";
import { Container } from "@/components/ui/container";
import { TextLink } from "@/components/ui/button";
import { PageIntro } from "@/components/ui/section-heading";
import { campaign } from "@/content/campaign";
import { donationUrl, donatePage } from "@/content/donate";
import { campaignPaymentConfig } from "@/lib/campaign-payment";
import { pageMetadata } from "@/lib/metadata";
import { redirect } from "next/navigation";
import { Suspense } from "react";

export const metadata = pageMetadata({
  title: "Donate",
  description:
    "Donate to Samaa Charity Projects and choose the cause your gift supports.",
  path: "/donate",
});

export default function DonatePage({
  searchParams,
}: {
  searchParams: Promise<{ initiative?: string }>;
}) {
  return (
    <Suspense fallback={<GeneralDonate />}>
      <DonateRoute searchParams={searchParams} />
    </Suspense>
  );
}

async function DonateRoute({
  searchParams,
}: {
  searchParams: Promise<{ initiative?: string }>;
}) {
  const { initiative } = await searchParams;
  if (initiative === "fundraiser") return <CampaignDonate />;
  if (donationUrl) redirect(donationUrl);
  return <GeneralDonate />;
}

function CampaignDonate() {
  const payments = campaignPaymentConfig();

  return (
    <>
      <PageIntro eyebrow={campaign.donate.eyebrow} title={campaign.donate.title} lede={campaign.donate.paragraphs[0]}>
        <p className="text-small text-ink/75">
          <TextLink href={campaign.path}>About the campaign</TextLink>
        </p>
      </PageIntro>
      <Container className="grid gap-12 py-16 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-5">
          <h2 className="text-h3">Your donation</h2>
          <div className="mt-5 max-w-md space-y-4 text-body text-ink/80">
            <p>{campaign.donate.paragraphs[1]}</p>
            <p>
              {campaign.dateLabel}, {campaign.venue}. You do not need a place to give.
            </p>
            <p>
              <TextLink href="/donate">Give to another cause</TextLink>
            </p>
          </div>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <DonationForm methods={payments.configured ? payments.methods : []} />
        </div>
      </Container>
    </>
  );
}

function GeneralDonate() {
  return (
    <>
      <PageIntro eyebrow={donatePage.eyebrow} title={donatePage.title} lede={donatePage.paragraphs}>
        <GivingPerspective />
      </PageIntro>
      <Container className="grid gap-12 py-16 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-5">
          <h2 className="text-h3">Your donation</h2>
          <div className="mt-5 max-w-md space-y-4 text-body text-ink/80">
            <p>
              Choose the area your gift should support. You can give to a cause as a whole, or to a
              specific focus within it.
            </p>
            <p>
              Red for a Reason, the 19 December 2026 charity tennis campaign, has its own payment
              form.
            </p>
            <p>
              <TextLink href={campaign.donateHref}>Donate to Red for a Reason</TextLink>
            </p>
          </div>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <DonateForm />
        </div>
      </Container>
    </>
  );
}
