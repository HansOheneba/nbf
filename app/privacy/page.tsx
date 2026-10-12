import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/ui/section-heading";
import { images } from "@/content/images";
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
        lede="This note describes the site as it works today: enquiry forms, a contribution note for the fundraiser, educational pages about sickle cell, and photographs used as illustration."
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
            <p>
              The contribution page asks for a name and email, and may include an
              intended amount and a message if you choose to add them. That note is an
              intention to support the fundraiser. It is not a payment, and the site does
              not collect card numbers. If the note cannot be sent, the form says so, and
              nothing is stored.
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
        <section id="photographs">
          <h2 className="text-h3">Photographs</h2>
          <p className="mt-4 text-body text-ink/85">
            Photographs are used under the Unsplash and Pexels licences. Credits for
            each picture are listed here. The people in the photographs are not staff,
            partners, or participants of Nana Boatemah Foundation, and the pictures are
            not records of the foundation&apos;s work.
          </p>
          <ul className="mt-6 space-y-5">
            {Object.values(images).map((image) => (
              <li key={image.src}>
                <a
                  href={image.creditHref}
                  className="text-small font-medium text-deep underline decoration-deep/30 underline-offset-4"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  {image.caption}
                </a>
                <p className="mt-1 text-caption text-ink/75">{image.alt}</p>
              </li>
            ))}
          </ul>
        </section>
      </Container>
    </>
  );
}
