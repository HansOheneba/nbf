import { DonationLink } from "@/components/campaign/donation-link";
import { EditorialImage } from "@/components/editorial/editorial-image";
import { SourceList } from "@/components/editorial/source-list";
import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/ui/section-heading";
import { images } from "@/content/images";
import { economicProgramme, menstrualProgramme, womenPage } from "@/content/women";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Women empowerment",
  description: womenPage.introduction[0],
  path: "/women-empowerment",
});

export default function WomenEmpowermentPage() {
  return (
    <>
      <PageIntro eyebrow={womenPage.eyebrow} title={womenPage.title} lede={womenPage.introduction} />

      <section id={economicProgramme.id} className="border-b border-border">
        <Container className="grid items-center gap-10 py-16 lg:grid-cols-12 lg:py-28">
          <Reveal className="lg:col-span-6">
            <EditorialImage
              image={images.gathering}
              aspect="aspect-[4/5]"
              sizes="(min-width: 1024px) 46vw, 100vw"
            />
          </Reveal>
          <Reveal delay={80} className="lg:col-span-5 lg:col-start-8">
            <p className="eyebrow text-deep">{economicProgramme.eyebrow}</p>
            <h2 className="mt-3 text-h1">{economicProgramme.title}</h2>
            <div className="mt-5 space-y-4">
              {economicProgramme.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-body-lg text-ink/85">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>
        </Container>
        <Container className="grid gap-12 pb-16 lg:grid-cols-2 lg:pb-28">
          {economicProgramme.sections.map((section) => (
            <section key={section.id} id={section.id}>
              <h3 className="text-h3">{section.heading}</h3>
              <div className="mt-4 space-y-4">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-body text-ink/85">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </Container>
      </section>

      <section id={menstrualProgramme.id} className="bg-sage/40">
        <Container className="grid items-center gap-10 py-16 lg:grid-cols-12 lg:py-28">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow text-deep">{menstrualProgramme.eyebrow}</p>
            <h2 className="mt-3 text-h1">{menstrualProgramme.title}</h2>
            <div className="mt-5 space-y-4">
              {menstrualProgramme.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-body-lg text-ink/85">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={80} className="lg:col-span-6 lg:col-start-7">
            <EditorialImage
              image={images.conversation}
              aspect="aspect-[4/5]"
              sizes="(min-width: 1024px) 46vw, 100vw"
            />
          </Reveal>
        </Container>
        <Container className="grid gap-12 pb-16 lg:grid-cols-12 lg:pb-28">
          <div className="space-y-12 lg:col-span-7">
            {menstrualProgramme.sections.map((section) => (
              <section key={section.id} id={section.id}>
                <h3 className="text-h3">{section.heading}</h3>
                <div className="mt-4 space-y-4">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-body text-ink/85">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
          <aside className="h-fit border border-border bg-white p-6 lg:col-span-4 lg:col-start-9 lg:p-8">
            <h2 className="text-h4">Further reading</h2>
            <p className="mt-3 text-small text-ink/80">
              This is general education. It is not medical advice, and it does not describe a
              product distribution programme.
            </p>
            <div className="mt-5">
              <SourceList sources={menstrualProgramme.sources} />
            </div>
          </aside>
        </Container>
      </section>

      <section className="border-t border-border bg-deep text-white">
        <Container className="flex flex-col gap-6 py-16 sm:flex-row sm:items-center sm:justify-between lg:py-20">
          <p className="max-w-xl text-body-lg text-paper/90">
            You can send a note of support for women empowerment, including economic opportunity and menstrual health.
          </p>
          <DonationLink initiative={womenPage.support.initiative} variant="inverse">
            {womenPage.support.label}
          </DonationLink>
        </Container>
      </section>
    </>
  );
}
