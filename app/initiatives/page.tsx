import Link from "next/link";
import { EditorialImage } from "@/components/editorial/editorial-image";
import { Reveal } from "@/components/motion/reveal";
import { InitiativeList } from "@/components/initiatives/initiative-feature";
import { ButtonLink, TextLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/ui/section-heading";
import { articles } from "@/content/articles";
import { featuredInitiative, initiatives, initiativesPage } from "@/content/initiatives";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Initiatives",
  description:
    "Sickle cell awareness is the initiative featured by Nana Boatemah Foundation, with educational pages you can read and share.",
  path: "/initiatives",
});

export default function InitiativesPage() {
  const initiative = featuredInitiative;

  return (
    <>
      <PageIntro
        eyebrow={initiativesPage.eyebrow}
        title={initiativesPage.title}
        lede={initiativesPage.paragraphs}
      />

      <section className="border-b border-border">
        <Container className="grid items-center gap-12 py-16 lg:grid-cols-12 lg:py-24">
          <Reveal className="lg:col-span-7">
            <EditorialImage
              image={initiative.image}
              aspect="aspect-[16/10]"
              sizes="(min-width: 1024px) 58vw, 100vw"
            />
          </Reveal>
          <Reveal delay={80} className="lg:col-span-5">
            <p className="eyebrow text-deep">Current focus</p>
            <h2 className="mt-3 text-h2">Sickle cell awareness matters.</h2>
            <p className="mt-5 text-body-lg text-ink/85">{initiative.summary}</p>
            <p className="mt-4 text-body text-ink/80">
              The pages in this initiative explain the condition, how it differs from
              sickle cell trait, and why a conversation with a qualified health
              professional matters when someone wants to know their status.
            </p>
            <div className="mt-8 flex flex-col gap-4">
              <ButtonLink href={initiative.cta.href}>Learn About Sickle Cell</ButtonLink>
              <TextLink href="/stories">Read the educational articles</TextLink>
            </div>
          </Reveal>
        </Container>
      </section>

      {initiatives.length > 1 ? (
        <Container className="pb-4">
          <InitiativeList items={initiatives} />
        </Container>
      ) : null}

      <section className="bg-white">
        <Container className="grid gap-10 py-16 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-4">
            <h2 className="text-h3">Read with the sources in view</h2>
          </div>
          <ol className="border-t border-border lg:col-span-8">
            {articles.map((article, index) => (
              <li key={article.slug} className="border-b border-border">
                <Link
                  href={`/stories/${article.slug}`}
                  className="grid gap-2 py-6 sm:grid-cols-12 sm:items-baseline sm:gap-6"
                >
                  <span className="font-display text-h3 text-deep sm:col-span-2">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-h4 sm:col-span-10">{article.title}</span>
                </Link>
              </li>
            ))}
          </ol>
        </Container>
      </section>
    </>
  );
}
