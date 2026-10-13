import { EditorialImage } from "@/components/editorial/editorial-image";
import { HealthNote, SourceList } from "@/components/editorial/source-list";
import { DonationLink } from "@/components/campaign/donation-link";
import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/ui/section-heading";
import type { CitedSource } from "@/content/health";
import type { GalleryImage } from "@/content/images";
import type { CopySection } from "@/content/programmes";
import type { ReactNode } from "react";

export function FocusPage({
  eyebrow,
  title,
  lede,
  image,
  sections,
  supportLabel,
  initiative,
  sources,
  reviewDate,
  disclaimer,
  children,
}: {
  eyebrow: string;
  title: string;
  lede: string[];
  image: GalleryImage;
  sections: CopySection[];
  supportLabel: string;
  initiative: string;
  sources?: CitedSource[];
  reviewDate?: string;
  disclaimer?: string;
  children?: ReactNode;
}) {
  return (
    <>
      <PageIntro eyebrow={eyebrow} title={title} lede={lede}>
        <nav aria-label="On this page">
          <ul className="space-y-3">
            {sections.map((section) => (
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
          image={image}
          priority
          aspect="aspect-[16/9] lg:aspect-[21/9]"
          sizes="(min-width: 1024px) 80rem, 100vw"
        />
      </Container>

      <Container className="grid gap-16 pb-20 lg:grid-cols-12 lg:pb-28">
        <article className="space-y-14 lg:col-span-7">
          {sections.map((section) => (
            <section key={section.id} id={section.id}>
              <h2 className="text-h2">{section.heading}</h2>
              <div className="mt-5 space-y-4">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-body text-ink/85">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
          {children}
          <DonationLink initiative={initiative}>{supportLabel}</DonationLink>
        </article>
        {sources && reviewDate && disclaimer ? (
          <aside className="h-fit space-y-10 border border-border bg-white p-6 lg:sticky lg:top-28 lg:col-span-4 lg:col-start-9 lg:p-8">
            <HealthNote reviewDate={reviewDate} disclaimer={disclaimer} />
            <div>
              <h2 className="text-h4">Sources</h2>
              <div className="mt-5">
                <SourceList sources={sources} />
              </div>
            </div>
          </aside>
        ) : null}
      </Container>
    </>
  );
}
