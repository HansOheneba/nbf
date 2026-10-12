import Link from "next/link";
import type { Article } from "@/content/articles";

export function ResourceIndex({ items }: { items: Article[] }) {
  return (
    <ol className="border-t border-border">
      {items.map((item, index) => (
        <li key={item.slug} className="border-b border-border">
          <Link
            href={`/stories/${item.slug}`}
            className="grid gap-3 py-6 md:grid-cols-12 md:items-baseline md:gap-6"
          >
            <p className="font-display text-h2 text-deep md:col-span-2">
              {String(index + 1).padStart(2, "0")}
            </p>
            <div className="md:col-span-7">
              <h3 className="text-h3">{item.title}</h3>
              <p className="mt-2 max-w-xl text-small text-ink/80">{item.summary}</p>
            </div>
            <p className="text-caption text-muted-foreground md:col-span-3 md:text-right">
              Read
              <span className="mt-1 block">Reviewed {item.reviewDate}</span>
            </p>
          </Link>
        </li>
      ))}
    </ol>
  );
}
