import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { campaign } from "@/content/campaign";
import { verifyCampaignPayment, type VerifiedPayment } from "@/lib/campaign-payment";
import { pageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Donation",
    description: "The result of a Red for a Reason contribution.",
    path: campaign.returnPath,
  }),
  robots: { index: false, follow: false },
};

type ReturnParams = {
  searchParams: Promise<{ reference?: string; trxref?: string }>;
};

export default function DonationReturnPage({ searchParams }: ReturnParams) {
  return (
    <Suspense
      fallback={
        <Container className="py-20">
          <p className="text-body-lg">Checking the payment…</p>
        </Container>
      }
    >
      <ReturnResult searchParams={searchParams} />
    </Suspense>
  );
}

async function ReturnResult({ searchParams }: ReturnParams) {
  const query = await searchParams;
  const reference = query.reference || query.trxref || "";
  const payment = reference ? await verifyCampaignPayment(reference) : { outcome: "cancelled" as const };

  return (
    <Container className="max-w-3xl py-16 lg:py-24">
      <p className="eyebrow text-deep">{campaign.name}</p>
      <h1 className="mt-4 text-h1">{headingFor(payment)}</h1>
      <div className="mt-6 space-y-4 text-body-lg text-ink/85">
        {copyFor(payment).map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      {payment.outcome === "received" && payment.amountLabel ? (
        <p className="mt-8 font-display text-h2">{payment.amountLabel}</p>
      ) : null}
      {payment.reference ? (
        <p className="mt-4 text-small text-muted-foreground">Reference {payment.reference}</p>
      ) : null}
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <ButtonLink href={campaign.path}>Back to the campaign</ButtonLink>
        {payment.outcome !== "received" ? (
          <ButtonLink href={campaign.donateHref} variant="secondary">
            Return to the donation form
          </ButtonLink>
        ) : null}
      </div>
    </Container>
  );
}

function headingFor(payment: VerifiedPayment) {
  if (payment.outcome === "received") return "Your contribution has been received.";
  if (payment.outcome === "cancelled") return "The payment was not completed.";
  if (payment.outcome === "pending") return "The payment is not confirmed yet.";
  if (payment.outcome === "failed") return "The payment did not go through.";
  return "No contribution was confirmed.";
}

function copyFor(payment: VerifiedPayment) {
  if (payment.outcome === "received") {
    return [
      `This confirms a payment to ${campaign.name}. It is not a promise of a particular treatment, and it does not name a child.`,
      "The payment provider can send its own receipt to the email address you entered. Keep the reference on this page for your records. This website does not store card or mobile-money details.",
      payment.anonymous
        ? "You asked for your name to be left out of public acknowledgements."
        : "If you gave your name, it may be used in a public thank-you. It will not be attached to a medical record.",
    ];
  }
  if (payment.outcome === "cancelled") {
    return ["Nothing has been taken. You can return to the donation form if you still want to give."];
  }
  if (payment.outcome === "pending") {
    return [
      "The payment provider has not confirmed this contribution yet. It is not counted as received. If money leaves your account, the reference below is the one to quote.",
    ];
  }
  if (payment.outcome === "failed") {
    return ["No contribution was received. You can try again from the donation form."];
  }
  if (payment.outcome === "unmatched") {
    return ["This reference could not be matched to Red for a Reason. It has not been recorded as a campaign donation."];
  }
  return [
    "The payment could not be confirmed. If you cancelled, nothing has been taken. If you believe a payment was made, use the reference from your payment provider when you write to the campaign.",
  ];
}
