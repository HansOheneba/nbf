export const site = {
  name: "Nana Boatemah Foundation",
  shortName: "NBF",
  description:
    "Nana Boatemah Foundation focuses on awareness, education, and understanding, beginning with sickle cell.",
  /**
   * Set NEXT_PUBLIC_SITE_URL when the production domain is known.
   * Canonical URLs and the sitemap use it when it is present.
   */
  url: process.env.NEXT_PUBLIC_SITE_URL || undefined,
  copyrightYear: "2026",
} as const;

export const supportCta = {
  label: "Get Involved",
  href: "/get-involved",
} as const;

export const mainNav = [
  { label: "About", href: "/about" },
  { label: "Initiatives", href: "/initiatives" },
  { label: "Sickle Cell Awareness", href: "/initiatives/sickle-cell-awareness" },
  { label: "Stories & Resources", href: "/stories" },
  { label: "Contact", href: "/contact" },
] as const;

export const legalNav = [{ label: "Privacy", href: "/privacy" }] as const;

export const sitemapPaths = [
  "/",
  "/about",
  "/initiatives",
  "/initiatives/sickle-cell-awareness",
  "/stories",
  "/get-involved",
  "/contact",
  "/privacy",
] as const;
