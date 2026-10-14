import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "inverse" | "on-dark";

const variants: Record<Variant, string> = {
  primary: "bg-primary text-primary-foreground hover:bg-primary-hover",
  secondary:
    "border border-secondary/25 bg-transparent text-secondary hover:border-secondary hover:bg-secondary hover:text-secondary-foreground",
  inverse: "bg-paper text-ink hover:bg-white",
  "on-dark":
    "border border-white/45 bg-transparent text-white hover:bg-white hover:text-ink",
};

export function buttonClass(variant: Variant = "primary", className?: string) {
  return cn(
    "inline-flex max-w-full min-h-12 items-center justify-center gap-2 px-5 text-center font-sans text-button font-medium whitespace-normal transition-colors duration-200 motion-reduce:transition-none",
    variants[variant],
    className,
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  onClick,
  "aria-current": ariaCurrent,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  onClick?: () => void;
  "aria-current"?: "page";
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={ariaCurrent}
      className={buttonClass(variant, className)}
    >
      {children}
    </Link>
  );
}

export function TextLink({
  href,
  children,
  light = false,
}: {
  href: string;
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex max-w-full items-center gap-2 font-sans text-button font-medium underline decoration-1 underline-offset-4",
        light
          ? "text-white decoration-white/50 hover:decoration-white"
          : "text-link decoration-link/40 hover:text-link-hover hover:decoration-link-hover",
      )}
    >
      <span className="min-w-0">{children}</span>
      <Arrow />
    </Link>
  );
}

function Arrow() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className="h-4 w-4 shrink-0">
      <path
        d="M2.5 8h11M9 3.5 13.5 8 9 12.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}
