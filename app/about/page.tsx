import { EditorialImage } from "@/components/editorial/editorial-image";
import { Motif } from "@/components/motion/motif";
import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { aboutIntro, aboutSections } from "@/content/about";
import { images } from "@/content/images";
import { pageMetadata } from "@/lib/metadata";

const sectionImages = {
  awareness: images.conversation,
  education: images.library,
} as const;

export const metadata = pageMetadata({
  title: "About",
  description:
    "Nana Boatemah Foundation is being built around awareness, education, understanding, and participation, beginning with sickle cell.",
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
            <nav aria-label="On this page" className="mt-10">
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                {aboutSections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="text-small font-medium text-deep underline decoration-deep/30 underline-offset-4"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <EditorialImage
              image={images.gathering}
              aspect="aspect-[3/4]"
              sizes="(min-width: 1024px) 30vw, 100vw"
            />
          </div>
        </Container>
      </header>

      <section id="awareness" className="border-b border-border">
        <Container className="grid items-center gap-10 py-16 lg:grid-cols-12 lg:py-28">
          <Reveal className="lg:col-span-5">
            <p className="font-display text-display text-foundation">01</p>
            <h2 className="mt-4 text-h1">{aboutSections[0].title}</h2>
            <div className="mt-6 max-w-xl space-y-4">
              {aboutSections[0].paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-body-lg text-ink/85">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={100} className="lg:col-span-6 lg:col-start-7">
            <EditorialImage
              image={sectionImages.awareness}
              aspect="aspect-[4/5]"
              sizes="(min-width: 1024px) 46vw, 100vw"
            />
          </Reveal>
        </Container>
      </section>

      <section id="education" className="border-b border-border bg-white">
        <Container className="grid items-center gap-10 py-16 lg:grid-cols-12 lg:py-28">
          <Reveal className="lg:col-span-7">
            <EditorialImage
              image={sectionImages.education}
              aspect="aspect-[3/2]"
              sizes="(min-width: 1024px) 54vw, 100vw"
            />
          </Reveal>
          <Reveal delay={80} className="lg:col-span-4 lg:col-start-9">
            <p className="font-display text-h2 text-deep">02</p>
            <h2 className="mt-3 text-h2">{aboutSections[1].title}</h2>
            <div className="mt-5 space-y-4 border-l-2 border-foundation pl-5">
              {aboutSections[1].paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-body text-ink/85">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section id="understanding" className="surface-ink relative overflow-hidden bg-ink text-paper">
        <Motif tone="foundation" className="top-8 -left-10 opacity-25" />
        <Container className="relative grid gap-8 py-20 lg:grid-cols-12 lg:py-32">
          <Reveal className="lg:col-span-4">
            <p className="font-display text-h2 text-foundation">03</p>
            <h2 className="mt-3 text-h1">{aboutSections[2].title}</h2>
          </Reveal>
          <div className="max-w-xl space-y-5 lg:col-span-7 lg:col-start-6">
            {aboutSections[2].paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-body-lg text-paper/90">
                {paragraph}
              </p>
            ))}
          </div>
        </Container>
      </section>

      <section id="participation" className="surface-deep bg-deep text-white">
        <Container className="grid gap-10 py-16 lg:grid-cols-12 lg:items-end lg:py-28">
          <div className="lg:col-span-7">
            <p className="font-display text-h2 text-white/80">04</p>
            <h2 className="mt-3 text-h1">{aboutSections[3].title}</h2>
            <div className="mt-6 max-w-xl space-y-4">
              {aboutSections[3].paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-body-lg text-white/95">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:col-start-9 lg:flex-col">
            <ButtonLink href="/get-involved" variant="inverse">
              Get Involved
            </ButtonLink>
            <ButtonLink href="/initiatives/sickle-cell-awareness" variant="on-dark">
              Learn About Sickle Cell
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
