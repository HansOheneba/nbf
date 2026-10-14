import Link from "next/link";
import { DonationLink } from "@/components/campaign/donation-link";
import { EditorialImage } from "@/components/editorial/editorial-image";
import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { causesPage, programmes } from "@/content/programmes";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Causes",
  description: causesPage.paragraphs[1],
  path: "/causes",
});

export default function CausesPage() {
  return (
    <>
      <header className="border-b border-border">
        <Container className="py-16 lg:py-24">
          <p className="eyebrow text-deep">{causesPage.eyebrow}</p>
          <h1 className="mt-4 max-w-4xl text-h1">{causesPage.title}</h1>
          <div className="mt-6 max-w-2xl space-y-4">
            {causesPage.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-body-lg text-ink/80">
                {paragraph}
              </p>
            ))}
          </div>
        </Container>
      </header>
      {programmes.map((programme, index) => {
        const reverse = index % 2 === 1;
        const tone = index === 1 ? "deep" : index === 3 ? "sage" : "paper";
        const onDark = tone === "deep";
        return (
          <section
            key={programme.slug}
            className={
              onDark
                ? "border-b border-border bg-deep text-white"
                : tone === "sage"
                  ? "border-b border-border bg-sage/40"
                  : "border-b border-border"
            }
          >
            <Container className="grid items-center gap-10 py-16 lg:grid-cols-12 lg:py-24">
              <Reveal className={reverse ? "lg:col-span-5 lg:col-start-8" : "lg:col-span-6"}>
                <p className={onDark ? "eyebrow text-sage" : "eyebrow text-deep"}>
                  {String(index + 1).padStart(2, "0")} · {programme.eyebrow}
                </p>
                <h2 className="mt-3 text-h1">{programme.headline}</h2>
                <p className={onDark ? "mt-5 text-body-lg text-paper/90" : "mt-5 text-body-lg text-ink/80"}>
                  {programme.summary}
                </p>
                <ul className={onDark ? "mt-8 border-t border-white/20" : "mt-8 border-t border-border"}>
                  {programme.areas.map((area) => (
                    <li
                      key={area.href}
                      className={onDark ? "border-b border-white/20" : "border-b border-border"}
                    >
                      <Link href={area.href} className="block py-4">
                        <span className="font-display text-h4">{area.label}</span>
                        <span
                          className={
                            onDark
                              ? "mt-1 block text-small text-paper/80"
                              : "mt-1 block text-small text-ink/70"
                          }
                        >
                          {area.summary}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <DonationLink initiative={programme.initiative} variant={onDark ? "inverse" : "primary"}>
                    {programme.donateLabel}
                  </DonationLink>
                  <ButtonLink href={programme.href} variant={onDark ? "on-dark" : "secondary"}>
                    {programme.cta}
                  </ButtonLink>
                </div>
              </Reveal>
              <Reveal
                delay={80}
                className={
                  reverse
                    ? "lg:col-span-6 lg:col-start-1 lg:row-start-1"
                    : "lg:col-span-5 lg:col-start-8"
                }
              >
                <EditorialImage
                  image={programme.image}
                  priority={index === 0}
                  position={programme.slug === "housing" ? "object-bottom" : undefined}
                  aspect={index === 2 ? "aspect-[16/10]" : index === 3 ? "aspect-[3/2]" : "aspect-[4/5]"}
                  sizes="(min-width: 1024px) 42vw, 100vw"
                />
              </Reveal>
            </Container>
          </section>
        );
      })}
      <section className="bg-deep text-white">
        <Container className="py-16 lg:py-24">
          <h2 className="max-w-3xl text-h1">{causesPage.close.title}</h2>
          <div className="mt-6 max-w-2xl space-y-4">
            {causesPage.close.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-body-lg text-paper/90">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="mt-8">
            <ButtonLink href={causesPage.close.href} variant="inverse">
              {causesPage.close.cta}
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
