import Link from "next/link";
import { EditorialImage } from "@/components/editorial/editorial-image";
import { HealthNote, SourceList } from "@/components/editorial/source-list";
import { TextLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { articles, getArticle, relatedArticles } from "@/content/articles";
import { pageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type ArticleParams = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticleParams): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "Article" };
  return pageMetadata({
    title: article.title,
    description: article.summary,
    path: `/stories/${article.slug}`,
  });
}

export default async function ArticlePage({ params }: ArticleParams) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  const related = relatedArticles(article);

  return (
    <>
      <header className="border-b border-border">
        <Container className="grid gap-8 py-16 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-8">
            <p className="eyebrow text-deep">{article.kind}</p>
            <h1 className="mt-4 text-h1">{article.title}</h1>
            <p className="mt-5 max-w-2xl text-body-lg text-ink/80">{article.summary}</p>
            <p className="mt-4 text-caption text-muted-foreground">
              Reviewed {article.reviewDate}
            </p>
          </div>
        </Container>
      </header>

      <Container className="py-12 lg:py-16">
        <EditorialImage
          image={article.image}
          aspect="aspect-[16/9] lg:aspect-[2/1]"
          sizes="(min-width: 1024px) 80rem, 100vw"
        />
      </Container>

      <Container className="grid gap-16 pb-20 lg:grid-cols-12 lg:pb-28">
        <article className="lg:col-span-7">
          <div className="space-y-12">
            {article.sections.map((section) => (
              <section key={section.id} id={section.id}>
                <h2 className="text-h3">{section.heading}</h2>
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

          {related.length > 0 ? (
            <div className="mt-16 border-t border-border pt-10">
              <h2 className="text-h3">Continue reading</h2>
              <ul className="mt-5 space-y-3">
                {related.map((item) => (
                  <li key={item.slug}>
                    <TextLink href={`/stories/${item.slug}`}>{item.title}</TextLink>
                  </li>
                ))}
              </ul>
              <p className="mt-8">
                <Link
                  href="/initiatives/sickle-cell-awareness"
                  className="text-small font-medium text-deep underline decoration-deep/30 underline-offset-4"
                >
                  Back to sickle cell awareness
                </Link>
              </p>
            </div>
          ) : null}
        </article>

        <aside className="h-fit space-y-10 border border-border bg-white p-6 lg:sticky lg:top-28 lg:col-span-4 lg:col-start-9 lg:p-8">
          <HealthNote reviewDate={article.reviewDate} disclaimer={article.disclaimer} />
          <div>
            <h2 className="text-h4">Sources</h2>
            <div className="mt-5">
              <SourceList sources={article.sources} />
            </div>
          </div>
        </aside>
      </Container>
    </>
  );
}
