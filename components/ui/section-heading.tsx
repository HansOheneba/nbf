import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  lede,
  note,
  as = "h2",
}: {
  eyebrow?: string;
  title: string;
  lede?: string | string[];
  note?: string;
  as?: "h1" | "h2";
}) {
  const Title = as;
  return (
    <div className="max-w-3xl">
      {eyebrow ? <p className="eyebrow text-deep">{eyebrow}</p> : null}
      <Title className={as === "h1" ? "mt-4 text-h1" : "mt-3 text-h2"}>{title}</Title>
      {lede
        ? (Array.isArray(lede) ? lede : [lede]).map((paragraph) => (
            <p key={paragraph} className="mt-5 max-w-2xl text-body-lg text-ink/80">
              {paragraph}
            </p>
          ))
        : null}
      {note ? <p className="mt-4 text-caption font-medium text-deep">{note}</p> : null}
    </div>
  );
}

export function PageIntro({
  eyebrow,
  title,
  lede,
  note,
  children,
}: {
  eyebrow: string;
  title: string;
  lede: string | string[];
  note?: string;
  children?: ReactNode;
}) {
  return (
    <header className="border-b border-border">
      <div className="mx-auto grid w-full max-w-page gap-8 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-24">
        <div className="lg:col-span-8">
          <SectionHeading as="h1" eyebrow={eyebrow} title={title} lede={lede} note={note} />
        </div>
        {children ? <div className="lg:col-span-4 lg:pt-16">{children}</div> : null}
      </div>
    </header>
  );
}
