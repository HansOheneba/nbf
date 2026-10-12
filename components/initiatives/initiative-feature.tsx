import Link from "next/link";
import { EditorialImage } from "@/components/editorial/editorial-image";
import { Motif } from "@/components/motion/motif";
import { TextLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import type { Initiative } from "@/content/initiatives";

export function InitiativeFeature({
  initiative,
  eyebrow = "Featured initiative",
  title,
  text,
  ctaLabel,
}: {
  initiative: Initiative;
  eyebrow?: string;
  title?: string;
  text?: string;
  ctaLabel?: string;
}) {
  return (
    <section className="surface-deep relative overflow-hidden bg-deep text-white">
      <Motif tone="foundation" className="top-10 -right-6 opacity-40" />
      <Container className="relative grid items-center gap-10 py-16 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-5">
          <EditorialImage
            image={initiative.image}
            aspect="aspect-[3/2]"
            sizes="(min-width: 1024px) 38vw, 100vw"
            captionClassName="text-paper/60"
          />
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <p className="eyebrow text-paper/80">{eyebrow}</p>
          <h2 className="mt-3 text-h1">{title ?? initiative.title}</h2>
          <p className="mt-5 max-w-xl text-body-lg text-paper">{text ?? initiative.summary}</p>
          <div className="mt-8">
            <TextLink href={initiative.cta.href} light>
              {ctaLabel ?? initiative.cta.label}
            </TextLink>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function InitiativeList({ items }: { items: Initiative[] }) {
  return (
    <ol className="border-t border-border">
      {items.map((item) => (
        <li key={item.slug} className="border-b border-border">
          <Link
            href={`/initiatives/${item.slug}`}
            className="grid gap-4 py-8 md:grid-cols-12 md:items-baseline md:gap-6"
          >
            <h3 className="text-h3 md:col-span-5">{item.title}</h3>
            <p className="text-small text-ink/80 md:col-span-7">{item.summary}</p>
          </Link>
        </li>
      ))}
    </ol>
  );
}
