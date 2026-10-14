import { EditorialImage } from "@/components/editorial/editorial-image";
import { Logo } from "@/components/site/logo";
import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { aboutApproach, aboutAreas, aboutIntro, aboutPurpose, aboutSupport } from "@/content/about";
import { images } from "@/content/images";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "About",
  description: aboutIntro.paragraphs[0],
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <header className="border-b border-border">
        <Container className="grid items-end gap-12 py-16 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-7">
            <p className="eyebrow text-deep">{aboutIntro.eyebrow}</p>
            <h1 className="mt-4 text-h1">{aboutIntro.title}</h1>
            <div className="mt-6 max-w-2xl space-y-4">
              {aboutIntro.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-body-lg text-ink/80">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <Logo variant="lockup" className="h-auto w-full" />
            <div className="mt-8">
              <EditorialImage
                image={images.gathering}
                aspect="aspect-[3/2]"
                sizes="(min-width: 1024px) 30vw, 100vw"
              />
            </div>
          </div>
        </Container>
      </header>

      <section id={aboutPurpose.id} className="border-b border-border">
        <Container className="grid items-start gap-10 py-16 lg:grid-cols-12 lg:py-28">
          <Reveal className="lg:col-span-4">
            <p className="font-display text-h2 text-forest">01</p>
            <h2 className="mt-3 text-h1">{aboutPurpose.title}</h2>
          </Reveal>
          <div className="max-w-xl space-y-4 lg:col-span-7 lg:col-start-6">
            {aboutPurpose.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-body-lg text-ink/85">
                {paragraph}
              </p>
            ))}
          </div>
        </Container>
      </section>

      <section id={aboutApproach.id} className="border-b border-border bg-white">
        <Container className="grid items-center gap-10 py-16 lg:grid-cols-12 lg:py-28">
          <Reveal className="lg:col-span-6">
            <EditorialImage
              image={images.learning}
              aspect="aspect-[3/2]"
              sizes="(min-width: 1024px) 46vw, 100vw"
            />
          </Reveal>
          <Reveal delay={80} className="lg:col-span-5 lg:col-start-8">
            <p className="font-display text-h2 text-deep">02</p>
            <h2 className="mt-3 text-h2">{aboutApproach.title}</h2>
            <div className="mt-5 space-y-4 border-l-2 border-forest pl-5">
              {aboutApproach.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-body text-ink/85">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section id="areas" className="border-b border-border bg-sage/40">
        <Container className="py-16 lg:py-28">
          <p className="font-display text-h2 text-forest">03</p>
          <h2 className="mt-3 max-w-3xl text-h1">Our causes</h2>
          <ol className="mt-12 border-t border-border">
            {aboutAreas.map((area) => (
              <li key={area.href} className="border-b border-border">
                <a href={area.href} className="grid gap-3 py-8 lg:grid-cols-12 lg:gap-8">
                  <span className="font-display text-h3 lg:col-span-4">{area.title}</span>
                  <span className="text-body text-ink/80 lg:col-span-8">{area.text}</span>
                </a>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section id={aboutSupport.id} className="bg-deep text-white">
        <Container className="grid gap-10 py-16 lg:grid-cols-12 lg:items-end lg:py-28">
          <div className="lg:col-span-7">
            <p className="font-display text-h2 text-sage">04</p>
            <h2 className="mt-3 text-h1">{aboutSupport.title}</h2>
            <div className="mt-6 max-w-xl space-y-4">
              {aboutSupport.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-body-lg text-paper">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:col-span-4 lg:col-start-9 lg:flex-col">
            <ButtonLink href="/get-involved" variant="inverse">
              Get Involved
            </ButtonLink>
            <ButtonLink href="/causes" variant="on-dark">
              Explore Causes
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
