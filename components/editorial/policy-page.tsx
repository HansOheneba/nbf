import type { ReactNode } from "react";
import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/ui/section-heading";

export type PolicySection = {
  id: string;
  title: string;
  body: ReactNode;
};

/** A long policy page with a sticky contents list beside the text. */
export function PolicyPage({
  eyebrow,
  title,
  lede,
  updated,
  sections,
  children,
}: {
  eyebrow: string;
  title: string;
  lede: string | string[];
  updated: string;
  sections: PolicySection[];
  children?: ReactNode;
}) {
  return (
    <>
      <PageIntro eyebrow={eyebrow} title={title} lede={lede} note={`Last updated ${updated}`} />
      <Container className="grid gap-12 py-16 lg:grid-cols-12 lg:py-24">
        <nav aria-label="On this page" className="lg:col-span-3">
          <div className="lg:sticky lg:top-[calc(var(--header-h)+2rem)]">
            <p className="eyebrow text-deep">On this page</p>
            <ol className="mt-4 space-y-2 border-l border-border">
              {sections.map((section, index) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="-ml-px flex gap-3 border-l-2 border-transparent py-1 pl-4 text-small text-ink/75 hover:border-forest hover:text-ink"
                  >
                    <span className="font-display text-ink/40 tabular-nums">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {section.title}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </nav>
        <div className="max-w-3xl space-y-14 lg:col-span-8 lg:col-start-5">
          {sections.map((section, index) => (
            <section key={section.id} id={section.id} aria-labelledby={`${section.id}-title`}>
              <p className="font-display text-small text-forest tabular-nums">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h2 id={`${section.id}-title`} className="mt-2 text-h3">
                {section.title}
              </h2>
              <div className="policy-body mt-4 space-y-4 text-body text-ink/85">{section.body}</div>
            </section>
          ))}
          {children}
        </div>
      </Container>
    </>
  );
}
