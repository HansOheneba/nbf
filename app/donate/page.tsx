import { DonateForm } from "@/components/forms/contribution-form";
import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/ui/section-heading";
import { donationUrl, donatePage } from "@/content/donate";
import { pageMetadata } from "@/lib/metadata";
import { redirect } from "next/navigation";

export const metadata = pageMetadata({
  title: "Donate",
  description:
    "Donate to Samaa Charity Projects and choose the cause your gift supports.",
  path: "/donate",
});

export default function DonatePage() {
  if (donationUrl) redirect(donationUrl);

  return (
    <>
      <PageIntro eyebrow={donatePage.eyebrow} title={donatePage.title} lede={donatePage.paragraphs} />
      <Container className="grid gap-12 py-16 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-5">
          <h2 className="text-h3">Your donation</h2>
          <div className="mt-5 max-w-md space-y-4 text-body text-ink/80">
            <p>
              Choose the area your gift should support. You can give to a cause as a whole, or to a
              specific focus within it.
            </p>
            <p>
              The 19 December 2026 fundraiser helps children in Africa living with sickle cell
              access medical facilities and treatment.
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
