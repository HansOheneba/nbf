import { events } from "@/content/events";
import { initiatives } from "@/content/initiatives";

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

export type NavChild = {
  label: string;
  href: string;
  description: string;
  meta?: string;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

export const mainNav: NavItem[] = [
  { label: "About", href: "/about" },
  {
    label: "Initiatives",
    href: "/initiatives",
    children: initiatives.map((item) => ({
      label: item.title,
      href: `/initiatives/${item.slug}`,
      description: item.menuDescription,
    })),
  },
  {
    label: "Events",
    href: "/events",
    children: events.map((item) => ({
      label: item.title,
      href: `/events/${item.slug}`,
      description: item.menuDescription,
      meta: item.dateLabel,
    })),
  },
  { label: "Stories & Resources", href: "/stories" },
  { label: "Contact", href: "/contact" },
];

export const legalNav = [{ label: "Privacy", href: "/privacy" }] as const;

export const sitemapPaths = [
  "/",
  "/about",
  "/initiatives",
  ...initiatives.map((item) => `/initiatives/${item.slug}`),
  "/events",
  ...events.map((item) => `/events/${item.slug}`),
  "/stories",
  "/get-involved",
  "/contact",
  "/donate",
  "/privacy",
];
