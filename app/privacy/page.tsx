import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/ui/section-heading";
import { images } from "@/content/images";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Privacy",
  description:
    "How the Samaa Charity Projects website handles enquiry messages, health information, and photographs.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageIntro
        eyebrow="Privacy"
        title="How this website handles information."
        lede="This page describes how the site handles enquiry forms, donations, educational pages, and photographs used as illustration."
      />
      <Container className="max-w-3xl space-y-12 py-16 lg:py-24">
        <section>
          <h2 className="text-h3">The enquiry form</h2>
          <div className="mt-4 space-y-4 text-body text-ink/85">
            <p>
              The contact page and the Get Involved page ask for your name, email address,
              the type of enquiry, and a message. That information is used so Samaa Charity
              Projects can read what you sent and reply if a reply is needed.
            </p>
            <p>
              When a message is accepted, it is forwarded from this website to the enquiry
              route. This site does not keep a database of messages. If a message cannot be
              sent, the form says so, and nothing is stored.
            </p>
            <p>
              Do not include symptoms, test results, or other medical details. The form is
              not a health service, and those details are not needed to ask about the work.
            </p>
            <p>
              The general donation page asks for your name, email address, the area you want to
              support, and, if you add them, an amount and a message. That information is forwarded
              so Samaa Charity Projects can read it. If it cannot be sent, the form says so, and
              nothing is stored. That form does not take payment for Red for a Reason.
            </p>
            <p>
              The Red for a Reason donation form asks for an amount, an email address, and a name
              unless you choose to give without public acknowledgement. Those details are sent to
              the payment provider so it can take the contribution and issue its own receipt. Card
              and mobile-money details stay with that provider. This website checks the result and
              shows a reference. It does not keep a donor database. Choosing anonymity means your
              name is not used in a public thank-you. The email is still used for the receipt. A
              contribution is recorded only after the payment is confirmed.
            </p>
            <p>
              Attendance requests, partnership, auction, in-kind, and general campaign forms ask for your name, email,
              and the details of the enquiry. They are forwarded in the same way as other messages.
              Sending one does not confirm a partnership, a lot, a gift, or a place at the afternoon.
            </p>
          </div>
        </section>
        <section>
          <h2 className="text-h3">Reaching the organisation</h2>
          <p className="mt-4 text-body text-ink/85">
            Write through the contact form. The site does not list a phone number or a social
            account.
          </p>
        </section>
        <section>
          <h2 className="text-h3">Health information on the site</h2>
          <p className="mt-4 text-body text-ink/85">
            Pages about sickle cell disease and mental health are for general awareness. They
            cite public health authorities and show the date they were reviewed for this
            website. They are not personal medical advice, and Samaa Charity Projects does not
            provide medical care, testing, counselling, therapy, or crisis support. The pages
            do not collect information about your health.
          </p>
        </section>
        <section id="photographs">
          <h2 className="text-h3">Photographs</h2>
          <p className="mt-4 text-body text-ink/85">
            Photographs illustrate the subjects on this site. They are not records of Samaa
            Charity Projects&apos; work, and the people in them are not staff, partners, or
            participants. Credits are listed where the photographer is known.
          </p>
          <ul className="mt-6 space-y-5">
            {Object.values(images).map((image) => {
              const creditHref = "creditHref" in image ? image.creditHref : undefined;
              return (
                <li key={image.src}>
                  {creditHref ? (
                    <a
                      href={creditHref}
                      className="text-small font-medium text-deep underline decoration-deep/30 underline-offset-4"
                      rel="noreferrer noopener"
                      target="_blank"
                    >
                      {image.caption}
                    </a>
                  ) : (
                    <p className="text-small font-medium">{image.caption}</p>
                  )}
                  <p className="mt-1 text-caption text-ink/75">{image.alt}</p>
                </li>
              );
            })}
          </ul>
        </section>
      </Container>
    </>
  );
}
