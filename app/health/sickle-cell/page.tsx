import { DonationLink } from "@/components/campaign/donation-link";
import { EditorialImage } from "@/components/editorial/editorial-image";
import { HealthNote, SourceList } from "@/components/editorial/source-list";
import { ButtonLink, TextLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/ui/section-heading";
import { articles } from "@/content/articles";
import { fundraiserCampaign } from "@/content/events";
import { images } from "@/content/images";
import { sickleCellPage, sickleCellSections } from "@/content/sickle-cell";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Sickle cell",
  description: sickleCellPage.introduction[0],
  path: "/health/sickle-cell",
});

export default function SickleCellPage() {
  return (
    <div data-theme="campaign">
      <PageIntro
        eyebrow={sickleCellPage.eyebrow}
        title={sickleCellPage.title}
        lede={sickleCellPage.introduction}
      >
        <nav aria-label="On this page">
          <ul className="space-y-3">
            {sickleCellSections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="text-small font-medium text-deep underline decoration-deep/30 underline-offset-4"
                >
                  {section.heading}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </PageIntro>

      <Container className="py-12 lg:py-16">
        <EditorialImage
          image={images.reading}
          priority
          aspect="aspect-[16/9] lg:aspect-[21/9]"
          sizes="(min-width: 1024px) 80rem, 100vw"
        />
      </Container>

      <Container className="grid gap-16 pb-8 lg:grid-cols-12">
        <article className="space-y-14 lg:col-span-7">
          {sickleCellSections.map((section) => (
            <section key={section.id} id={section.id}>
              <h2 className="text-h2">{section.heading}</h2>
              <div className="mt-5 space-y-4">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-body text-ink/85">
                    {paragraph}
                  </p>
                ))}
              </div>
              {section.id === "further-information" ? (
                <ul className="mt-6 space-y-3">
                  {articles.map((article) => (
                    <li key={article.slug}>
                      <TextLink href={`/stories/${article.slug}`}>{article.title}</TextLink>
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </article>
        <aside className="h-fit space-y-10 border border-border bg-white p-6 lg:sticky lg:top-28 lg:col-span-4 lg:col-start-9 lg:p-8">
          <HealthNote reviewDate={sickleCellPage.reviewDate} disclaimer={sickleCellPage.disclaimer} />
          <div>
            <h2 className="text-h4">Sources</h2>
            <div className="mt-5">
              <SourceList sources={sickleCellPage.sources} />
            </div>
          </div>
        </aside>
      </Container>

      <section className="border-t border-border bg-white">
        <Container className="grid items-end gap-8 py-16 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-7">
            <p className="eyebrow text-deep">{fundraiserCampaign.eyebrow}</p>
            <h2 className="mt-3 text-h1">{fundraiserCampaign.heroTitle}</h2>
            <p className="mt-5 max-w-xl text-body-lg text-ink/80">{fundraiserCampaign.homeCopy}</p>
            <time dateTime="2026-12-19" className="mt-6 block font-display text-h3">
              19 December 2026
            </time>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:col-span-4 lg:col-start-9">
            <ButtonLink href={sickleCellPage.cta.href}>{sickleCellPage.cta.label}</ButtonLink>
            <DonationLink initiative="fundraiser" variant="secondary">
              {fundraiserCampaign.donateLabel}
            </DonationLink>
          </div>
        </Container>
      </section>
    </div>
  );
}
