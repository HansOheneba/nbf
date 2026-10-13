import { events } from "@/content/events";

export const site = {
  name: "Samaa Charity Projects",
  shortName: "Samaa",
  description:
    "Samaa Charity Projects works towards access to education, health, housing, and women's empowerment, with initiatives centred on Africa.",
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

export const causeNav: NavChild[] = [
  {
    label: "Education",
    href: "/education",
    description: "Access to learning for people who face the cost of schooling and resources.",
  },
  {
    label: "Health",
    href: "/health",
    description: "Sickle cell awareness and support, alongside mental health education.",
  },
  {
    label: "Sickle cell",
    href: "/health/sickle-cell",
    description: "Facts, screening conversations, and the December 2026 fundraiser.",
  },
  {
    label: "Mental health",
    href: "/health/mental-health",
    description: "Education and more understanding conversations about wellbeing.",
  },
  {
    label: "Housing",
    href: "/housing",
    description: "Developing support for people facing homelessness, including shelter.",
  },
  {
    label: "Women empowerment",
    href: "/women-empowerment",
    description: "Economic opportunity and menstrual health education and access.",
  },
];

export const mainNav: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Causes", href: "/causes", children: causeNav },
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
  { label: "Contact", href: "/contact" },
];

export const legalNav = [{ label: "Privacy", href: "/privacy" }] as const;

export const programmePaths = [
  "/education",
  "/health",
  "/health/sickle-cell",
  "/health/mental-health",
  "/housing",
  "/women-empowerment",
] as const;

export const sitemapPaths = [
  "/",
  "/about",
  "/causes",
  ...programmePaths,
  "/events",
  ...events.map((item) => `/events/${item.slug}`),
  "/stories",
  "/get-involved",
  "/contact",
  "/donate",
  "/privacy",
];
