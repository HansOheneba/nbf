import { DonationLink } from "@/components/campaign/donation-link";
import { EditorialImage } from "@/components/editorial/editorial-image";
import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/ui/section-heading";
import { educationPage, literacyPage, scholarshipPage } from "@/content/education";
import { images } from "@/content/images";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Education",
  description: educationPage.introduction[0],
  path: "/education",
});

export default function EducationPage() {
  return (
    <>
      <PageIntro
        eyebrow={educationPage.eyebrow}
        title={educationPage.title}
        lede={educationPage.introduction}
      />

      <section className="border-b border-border">
        <Container className="grid items-center gap-10 py-16 lg:grid-cols-12 lg:py-28">
          <Reveal className="lg:col-span-6">
            <p className="eyebrow text-deep">Literacy</p>
            <h2 className="mt-3 text-h1">{literacyPage.title}</h2>
            <div className="mt-5 space-y-4">
              {literacyPage.introduction.map((paragraph) => (
                <p key={paragraph} className="text-body-lg text-ink/85">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mt-8">
              <ButtonLink href="/education/literacy">Explore Literacy</ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={80} className="lg:col-span-5 lg:col-start-8">
            <EditorialImage
              image={images.readers}
              aspect="aspect-[4/5]"
              sizes="(min-width: 1024px) 36vw, 100vw"
            />
          </Reveal>
        </Container>
      </section>

      <section className="bg-sage/50">
        <Container className="grid items-center gap-10 py-16 lg:grid-cols-12 lg:py-28">
          <Reveal className="lg:col-span-6 lg:col-start-1 lg:row-start-1">
            <EditorialImage
              image={images.learning}
              aspect="aspect-[4/5]"
              sizes="(min-width: 1024px) 46vw, 100vw"
            />
          </Reveal>
          <Reveal delay={80} className="lg:col-span-5 lg:col-start-8">
            <p className="eyebrow text-deep">Scholarship</p>
            <h2 className="mt-3 text-h1">{scholarshipPage.title}</h2>
            <div className="mt-5 space-y-4">
              {scholarshipPage.introduction.map((paragraph) => (
                <p key={paragraph} className="text-body-lg text-ink/85">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mt-8">
              <ButtonLink href="/education/scholarship">Explore Scholarships</ButtonLink>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-border">
        <Container className="flex flex-col gap-6 py-16 sm:flex-row sm:items-center sm:justify-between lg:py-20">
          <p className="max-w-xl text-body-lg text-ink/80">
            Donate to education, including literacy and scholarships.
          </p>
          <DonationLink initiative={educationPage.support.initiative}>
            {educationPage.support.label}
          </DonationLink>
        </Container>
      </section>
    </>
  );
}
