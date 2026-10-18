import { TextLink } from "@/components/ui/button";
import { givingPerspective } from "@/content/donate";
import { cn } from "@/lib/cn";

export function GivingPerspective({
  tone = "paper",
  donateHref,
}: {
  tone?: "paper" | "on-dark";
  donateHref?: string;
}) {
  const onDark = tone === "on-dark";

  return (
    <aside className={cn(onDark ? "max-w-xl bg-ink/60 px-4 py-4 sm:px-5" : "max-w-md")}>
      <p className={cn("eyebrow", onDark ? "text-white/75" : "text-deep")}>
        {givingPerspective.eyebrow}
      </p>
      <ul
        className={cn(
          "mt-4 grid gap-4",
          onDark ? "grid-cols-1 min-[30rem]:grid-cols-2" : "grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-1",
        )}
      >
        {givingPerspective.items.map((item) => (
          <li key={item.figure}>
            <p className={cn("font-display text-h3", onDark ? "text-white" : "text-ink")}>
              {item.figure}
            </p>
            <p className={cn("mt-1 text-small", onDark ? "text-white/80" : "text-ink/75")}>
              {item.line}
            </p>
            <p className={cn("mt-2 text-small", onDark ? "text-white/90" : "text-ink/85")}>
              {item.outcome}
            </p>
          </li>
        ))}
      </ul>
      <p className={cn("mt-4 text-caption", onDark ? "text-white/70" : "text-muted-foreground")}>
        {givingPerspective.note}
      </p>
      {donateHref ? (
        <div className="mt-4">
          <TextLink href={donateHref} light={onDark}>
            Donate
          </TextLink>
        </div>
      ) : null}
    </aside>
  );
}
