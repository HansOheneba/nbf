import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/ui/section-heading";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Privacy",
  description:
    "How the Nana Boatemah Foundation website handles enquiry messages, health information, and photographs.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageIntro
        eyebrow="Privacy"
        title="How this website handles information."
        lede="This note describes the site as it works today: an enquiry form, educational pages about sickle cell, and photographs used as illustration."
      />
      <Container className="max-w-3xl space-y-12 py-16 lg:py-24">
        <section>
          <h2 className="text-h3">The enquiry form</h2>
          <div className="mt-4 space-y-4 text-body text-ink/85">
            <p>
              The contact page and the Get Involved page ask for your name, email
              address, the type of enquiry, and a message. That information is used so
              the foundation can read what you sent and reply if a reply is needed.
            </p>
            <p>
              When a message is accepted, it is forwarded from this website to the
              foundation&apos;s enquiry route. This site does not keep a database of
              messages. If a message cannot be sent, the form says so, and nothing is
              stored.
            </p>
            <p>
              Do not include symptoms, test results, or other medical details. The form
              is not a health service, and those details are not needed to ask about the
              foundation.
            </p>
          </div>
        </section>
        <section>
          <h2 className="text-h3">Reaching the foundation</h2>
          <p className="mt-4 text-body text-ink/85">
            Write through the contact form. The site does not list a phone number or a
            social account.
          </p>
        </section>
        <section>
          <h2 className="text-h3">Health information on the site</h2>
          <p className="mt-4 text-body text-ink/85">
            Pages about sickle cell disease are for general awareness. They cite public
            health authorities and show the date they were reviewed for this website.
            They are not personal medical advice, and the foundation does not provide
            medical care, testing, or counselling. The pages do not collect information
            about your health.
          </p>
        </section>
        <section>
          <h2 className="text-h3">Photographs</h2>
          <p className="mt-4 text-body text-ink/85">
            Photographs are used under the Unsplash and Pexels licences. A caption on
            each image names the source. The people in the photographs are not staff,
            partners, or participants of Nana Boatemah Foundation, and the pictures are
            not records of the foundation&apos;s work.
          </p>
        </section>
      </Container>
    </>
  );
}
