import { cn } from "@/lib/cn";

export function Motif({
  className,
  tone = "foundation",
}: {
  className?: string;
  tone?: "foundation" | "deep" | "paper";
}) {
  const fill =
    tone === "paper" ? "bg-paper" : tone === "deep" ? "bg-deep" : "bg-foundation";

  return (
    <div aria-hidden="true" className={cn("pointer-events-none absolute", className)}>
      <span
        className={cn(
          "absolute block h-40 w-28 rounded-[62%_38%_58%_42%/48%_62%_38%_52%] opacity-90 motion-safe:animate-motif motion-reduce:animate-none",
          fill,
        )}
      />
      <span
        className={cn(
          "absolute top-16 left-14 block h-28 w-36 rounded-[42%_58%_40%_60%/58%_36%_64%_42%] opacity-80 motion-safe:animate-motif-slow motion-reduce:animate-none",
          fill,
        )}
      />
    </div>
  );
}
