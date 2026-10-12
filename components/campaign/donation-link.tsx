import Link from "next/link";
import type { ReactNode } from "react";
import { buttonClass } from "@/components/ui/button";
import { contributionHref } from "@/content/donate";

type Variant = "primary" | "secondary" | "inverse" | "on-dark";

export function DonationLink({
  children,
  variant = "primary",
  className,
}: {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  const href = contributionHref();
  const external = href.startsWith("http");

  return (
    <Link
      href={href}
      className={buttonClass(variant, className)}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </Link>
  );
}
