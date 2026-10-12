import { EditorialImage } from "@/components/editorial/editorial-image";
import { GetInvolvedInquiry } from "@/components/forms/inquiry-form";
import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/ui/section-heading";
import { images } from "@/content/images";
import { involvementPaths } from "@/content/involve";
import { pageMetadata } from "@/lib/metadata";

const bandImages = [images.conversation, images.learning, images.gathering] as const;

export const metadata = pageMetadata({
  title: "Get involved",
  description:
    "Share reliable information, offer your time, or explore a partnership with Nana Boatemah Foundation.",
  path: "/get-involved",
});

export default function GetInvolvedPage() {
  const [awareness, volunteering, partnership] = involvementPaths;

  return (
    <>
      <PageIntro
        eyebrow="Get involved"
        title="You can help important conversations travel further."
        lede={[
          "Creating awareness is not the work of one person alone. It grows when people learn, share reliable information, contribute their skills and work together towards a common purpose.",
          "Whether you want to support awareness activities, explore a partnership or find out how to contribute your time, we'd love to hear from you.",
        ]}
      />

      <section id={awareness.id} className="border-b border-border">
        <Container className="grid items-center gap-10 py-16 lg:grid-cols-12 lg:py-24">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow text-deep">01</p>
            <h2 className="mt-3 text-h2">{awareness.title}</h2>
            <div className="mt-5 space-y-4">
              {awareness.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-body text-ink/85">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mt-8">
              <ButtonLink href={`/get-involved?topic=${awareness.topic}#enquiry`}>
                {awareness.cta}
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={80} className="lg:col-span-6 lg:col-start-7">
            <EditorialImage
              image={bandImages[0]}
              aspect="aspect-[4/5]"
              sizes="(min-width: 1024px) 46vw, 100vw"
            />
          </Reveal>
        </Container>
      </section>

      <section id={volunteering.id} className="border-b border-border bg-white">
        <Container className="grid items-center gap-10 py-16 lg:grid-cols-12 lg:py-24">
          <Reveal className="lg:col-span-7">
            <EditorialImage
              image={bandImages[1]}
              aspect="aspect-[3/2]"
              sizes="(min-width: 1024px) 54vw, 100vw"
            />
          </Reveal>
          <Reveal delay={80} className="lg:col-span-4 lg:col-start-9">
            <p className="eyebrow text-deep">02</p>
            <h2 className="mt-3 text-h2">{volunteering.title}</h2>
            <div className="mt-5 space-y-4">
              {volunteering.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-body text-ink/85">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mt-8">
              <ButtonLink href={`/get-involved?topic=${volunteering.topic}#enquiry`}>
                {volunteering.cta}
              </ButtonLink>
            </div>
          </Reveal>
        </Container>
      </section>

      <section id={partnership.id} className="surface-ink bg-ink text-paper">
        <Container className="grid items-center gap-10 py-16 lg:grid-cols-12 lg:py-24">
          <Reveal className="lg:col-span-6">
            <p className="eyebrow text-paper/70">03</p>
            <h2 className="mt-3 text-h1">{partnership.title}</h2>
            <div className="mt-5 max-w-xl space-y-4">
              {partnership.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-body-lg text-paper/90">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mt-8">
              <ButtonLink
                href={`/get-involved?topic=${partnership.topic}#enquiry`}
                variant="inverse"
              >
                {partnership.cta}
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={100} className="lg:col-span-5 lg:col-start-8">
            <EditorialImage
              image={bandImages[2]}
              aspect="aspect-[3/4]"
              sizes="(min-width: 1024px) 38vw, 100vw"
              captionClassName="text-paper/60"
            />
          </Reveal>
        </Container>
      </section>

      <section id="enquiry" className="border-t border-border">
        <Container className="grid gap-10 py-16 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-5">
            <h2 className="text-h2">Send an enquiry</h2>
            <p className="mt-4 text-body text-ink/80">
              Use the form to tell us how you would like to be involved. We will read
              your message and reply. This is not an application for a vacancy, and it
              is not a place for medical information.
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
