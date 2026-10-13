import { EditorialImage } from "@/components/editorial/editorial-image";
import { GetInvolvedInquiry } from "@/components/forms/inquiry-form";
import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/ui/section-heading";
import { images } from "@/content/images";
import { involvementPaths } from "@/content/involve";
import { pageMetadata } from "@/lib/metadata";

const bandImages = [images.profile, images.learning, images.gathering, images.conversation] as const;

export const metadata = pageMetadata({
  title: "Get involved",
  description:
    "Donate, offer your time, explore a partnership, or share an initiative with Samaa Charity Projects.",
  path: "/get-involved",
});

export default function GetInvolvedPage() {
  return (
    <>
      <PageIntro
        eyebrow="Get involved"
        title="There is more than one way to make a difference."
        lede={[
          "You can give, offer a skill, or help a cause reach further.",
          "These routes are conversations. They do not confirm that a volunteer placement, a partnership, or a payment has already been arranged.",
        ]}
      />

      {involvementPaths.map((path, index) => {
        const image = bandImages[index] ?? images.gathering;
        const dark = index === 2;
        return (
          <section
            key={path.id}
            id={path.id}
            className={dark ? "bg-ink text-paper" : index % 2 === 1 ? "border-b border-border bg-white" : "border-b border-border"}
          >
            <Container className="grid items-center gap-10 py-16 lg:grid-cols-12 lg:py-24">
              <Reveal className={index % 2 === 1 ? "lg:col-span-5 lg:col-start-8" : "lg:col-span-5"}>
                <p className={dark ? "eyebrow text-paper/70" : "eyebrow text-deep"}>
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-3 text-h2">{path.title}</h2>
                <div className="mt-5 space-y-4">
                  {path.paragraphs.map((paragraph) => (
                    <p key={paragraph} className={dark ? "text-body text-paper/90" : "text-body text-ink/85"}>
                      {paragraph}
                    </p>
                  ))}
                </div>
                <div className="mt-8">
                  <ButtonLink href={path.href} variant={dark ? "inverse" : "primary"}>
                    {path.cta}
                  </ButtonLink>
                </div>
              </Reveal>
              <Reveal
                delay={80}
                className={
                  index % 2 === 1
                    ? "lg:col-span-6 lg:col-start-1 lg:row-start-1"
                    : "lg:col-span-6 lg:col-start-7"
                }
              >
                <EditorialImage
                  image={image}
                  aspect="aspect-[4/5]"
                  sizes="(min-width: 1024px) 46vw, 100vw"
                />
              </Reveal>
            </Container>
          </section>
        );
      })}

      <section id="enquiry" className="border-t border-border">
        <Container className="grid gap-10 py-16 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-5">
            <h2 className="text-h2">Send an enquiry</h2>
            <p className="mt-4 text-body text-ink/80">
              Use the form to tell us how you would like to be involved. We will read your
              message and reply. This is not an application for a vacancy, and it is not a
              place for medical information.
            </p>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <GetInvolvedInquiry submitLabel="Send enquiry" />
          </div>
        </Container>
      </section>
    </>
  );
}
