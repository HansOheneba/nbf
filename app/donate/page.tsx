import { ContributionForm } from "@/components/forms/contribution-form";
import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/ui/section-heading";
import { donationUrl, donatePage } from "@/content/donate";
import { pageMetadata } from "@/lib/metadata";
import { redirect } from "next/navigation";

export const metadata = pageMetadata({
  title: "Contribute",
  description:
    "Send a note of the contribution you intend for the Nana Boatemah Foundation fundraiser. This page does not take payment.",
  path: "/donate",
});

export default function DonatePage() {
  if (donationUrl) redirect(donationUrl);

  return (
    <>
      <PageIntro eyebrow={donatePage.eyebrow} title={donatePage.title} lede={donatePage.paragraphs} />
      <Container className="grid gap-12 py-16 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-5">
          <h2 className="text-h3">What this form does</h2>
          <div className="mt-5 max-w-md space-y-4 text-body text-ink/80">
            <p>It tells the foundation you want to contribute to the 19 December 2026 fundraiser.</p>
            <p>It does not charge a card, transfer money, or confirm that a gift has been received.</p>
          </div>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <ContributionForm />
        </div>
      </Container>
    </>
  );
}
