import { EditorialImage } from "@/components/editorial/editorial-image";
import { HealthNote, SourceList } from "@/components/editorial/source-list";
import { ButtonLink, TextLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/ui/section-heading";
import { articles } from "@/content/articles";
import { getInitiative, initiatives } from "@/content/initiatives";
import { pageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type InitiativeParams = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return initiatives.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: InitiativeParams): Promise<Metadata> {
  const { slug } = await params;
  const initiative = getInitiative(slug);
  if (!initiative) return { title: "Initiative" };
  return pageMetadata({
    title: "Sickle cell awareness",
    description: initiative.introduction[0],
    path: `/initiatives/${initiative.slug}`,
  });
}

export default async function InitiativePage({ params }: InitiativeParams) {
  const { slug } = await params;
  const initiative = getInitiative(slug);
  if (!initiative) notFound();

  return (
    <>
      <PageIntro
        eyebrow="Sickle cell awareness"
        title="Know the facts. Challenge the stigma."
        lede={initiative.introduction}
      >
        <nav aria-label="On this page">
          <ul className="space-y-3">
            {initiative.sections.map((section) => (
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
          image={initiative.image}
          aspect="aspect-[16/9] lg:aspect-[21/9]"
          sizes="(min-width: 1024px) 80rem, 100vw"
        />
      </Container>

      <Container className="grid gap-16 pb-20 lg:grid-cols-12 lg:pb-28">
        <article className="space-y-14 lg:col-span-7">
          {initiative.sections.map((section) => (
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
          <ButtonLink href="/get-involved">Get Involved</ButtonLink>
        </article>

        <aside className="h-fit space-y-10 border border-border bg-white p-6 lg:sticky lg:top-28 lg:col-span-4 lg:col-start-9 lg:p-8">
          <HealthNote reviewDate={initiative.reviewDate} disclaimer={initiative.disclaimer} />
          <div>
            <h2 className="text-h4">Sources</h2>
            <div className="mt-5">
              <SourceList sources={initiative.sources} />
            </div>
          </div>
        </aside>
      </Container>
    </>
  );
}
