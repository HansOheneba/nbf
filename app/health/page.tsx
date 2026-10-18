import { DonationLink } from "@/components/campaign/donation-link";
import { EditorialImage } from "@/components/editorial/editorial-image";
import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/ui/section-heading";
import { healthPage } from "@/content/health";
import { images } from "@/content/images";
import { menstrualHealthPage } from "@/content/menstrual-health";
import { mentalHealthPage } from "@/content/mental-health";
import { sickleCellPage } from "@/content/sickle-cell";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Health",
  description: healthPage.introduction[0],
  path: "/health",
});

export default function HealthPage() {
  return (
    <>
      <PageIntro eyebrow={healthPage.eyebrow} title={healthPage.title} lede={healthPage.introduction} />

      <section className="border-b border-border">
        <Container className="grid items-center gap-10 py-16 lg:grid-cols-12 lg:py-28">
          <Reveal className="lg:col-span-6">
            <p className="eyebrow text-deep">Sickle Cell</p>
            <h2 className="mt-3 text-h1">Know the facts. Challenge the stigma.</h2>
            <p className="mt-5 text-body-lg text-ink/85">{sickleCellPage.summary}</p>
            <div className="mt-8">
              <ButtonLink href="/health/sickle-cell">Explore Sickle Cell</ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={80} className="lg:col-span-5 lg:col-start-8">
            <EditorialImage
              image={images.reading}
              aspect="aspect-[3/4]"
              sizes="(min-width: 1024px) 36vw, 100vw"
            />
          </Reveal>
        </Container>
      </section>

      <section className="bg-sage/50">
        <Container className="grid items-center gap-10 py-16 lg:grid-cols-12 lg:py-28">
          <Reveal className="lg:col-span-6 lg:col-start-1 lg:row-start-1">
            <EditorialImage
              image={images.conversation}
              aspect="aspect-[4/5]"
              sizes="(min-width: 1024px) 46vw, 100vw"
            />
          </Reveal>
          <Reveal delay={80} className="lg:col-span-5 lg:col-start-8">
            <p className="eyebrow text-deep">Mental Health</p>
            <h2 className="mt-3 text-h1">{mentalHealthPage.landingTitle}</h2>
            <p className="mt-5 text-body-lg text-ink/85">{mentalHealthPage.landingSummary}</p>
            <div className="mt-8">
              <ButtonLink href="/health/mental-health">Explore Mental Health</ButtonLink>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-border">
        <Container className="grid items-center gap-10 py-16 lg:grid-cols-12 lg:py-28">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow text-deep">Menstrual Health</p>
            <h2 className="mt-3 text-h1">{menstrualHealthPage.title}</h2>
            <div className="mt-5 space-y-4">
              {menstrualHealthPage.introduction.map((paragraph) => (
                <p key={paragraph} className="text-body-lg text-ink/85">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mt-8">
              <ButtonLink href="/health/menstrual-health">Explore Menstrual Health</ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={80} className="lg:col-span-6 lg:col-start-7">
            <EditorialImage
              image={images.profile}
              aspect="aspect-[4/5]"
              sizes="(min-width: 1024px) 46vw, 100vw"
            />
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-border">
        <Container className="flex flex-col gap-6 py-16 sm:flex-row sm:items-center sm:justify-between lg:py-20">
          <p className="max-w-xl text-body-lg text-ink/80">
            Donate to health, including sickle cell, mental health, and menstrual health.
          </p>
          <DonationLink initiative={healthPage.support.initiative}>{healthPage.support.label}</DonationLink>
        </Container>
      </section>
    </>
  );
}
