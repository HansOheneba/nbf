import type { CitedSource } from "@/content/health";

export function HealthNote({
  reviewDate,
  disclaimer,
}: {
  reviewDate: string;
  disclaimer: string;
}) {
  return (
    <div>
      <h2 className="text-h4">About this information</h2>
      <p className="mt-3 text-small">Reviewed for this website on {reviewDate}.</p>
      <p className="mt-3 text-small text-ink/80">{disclaimer}</p>
    </div>
  );
}

export function SourceList({ sources }: { sources: CitedSource[] }) {
  return (
    <ul className="space-y-5">
      {sources.map((source) => (
        <li key={source.href}>
          <a
            href={source.href}
            className="text-small font-medium text-deep underline decoration-deep/30 underline-offset-4"
            rel="noreferrer noopener"
            target="_blank"
          >
            {source.title}
          </a>
          <p className="mt-1 text-caption text-muted-foreground">{source.publisher}</p>
          <p className="mt-1 text-caption text-ink/75">{source.note}</p>
        </li>
      ))}
    </ul>
  );
}
