import { EditorialImage } from "@/components/editorial/editorial-image";
import { Reveal } from "@/components/motion/reveal";
import { TextLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import type { GalleryImage } from "@/content/images";

export function SplitFeature({
  eyebrow,
  title,
  text,
  note,
  href,
  hrefLabel,
  image,
  reverse = false,
}: {
  eyebrow: string;
  title: string;
  text: string | string[];
  note?: string;
  href?: string;
  hrefLabel?: string;
  image: GalleryImage;
  reverse?: boolean;
}) {
  return (
    <section className="border-b border-border">
      <Container className="grid items-center gap-10 py-16 lg:grid-cols-12 lg:gap-8 lg:py-28">
        <Reveal
          className={reverse ? "lg:col-span-5 lg:col-start-8" : "lg:col-span-5"}
        >
          <p className="eyebrow text-deep">{eyebrow}</p>
          <h2 className="mt-3 text-h2">{title}</h2>
          <div className="mt-5 space-y-4 border-l-2 border-foundation pl-5">
            {(Array.isArray(text) ? text : [text]).map((paragraph) => (
              <p key={paragraph} className="text-body-lg">
                {paragraph}
              </p>
            ))}
          </div>
          {note ? <p className="mt-4 text-caption font-medium text-deep">{note}</p> : null}
          {href && hrefLabel ? (
            <div className="mt-6">
              <TextLink href={href}>{hrefLabel}</TextLink>
            </div>
          ) : null}
        </Reveal>
        <Reveal
          delay={120}
          className={reverse ? "lg:col-span-6 lg:col-start-1 lg:row-start-1" : "lg:col-span-6 lg:col-start-7"}
        >
          <EditorialImage
            image={image}
            aspect="aspect-[4/5] lg:aspect-[5/6]"
            sizes="(min-width: 1024px) 46vw, 100vw"
          />
        </Reveal>
      </Container>
    </section>
  );
}
