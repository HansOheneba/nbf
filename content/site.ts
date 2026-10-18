import { events } from "@/content/events";

export const site = {
  name: "Samaa Charity Projects",
  shortName: "Samaa",
  description:
    "Samaa Charity Projects works towards education, health, and empowerment. Health includes sickle cell, mental health, and menstrual health. Empowerment includes women's economic opportunity and housing.",
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

export const donateCta = {
  label: "Donate",
  href: "/donate",
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
  groups?: NavGroup[];
};

export type NavGroup = {
  label: string;
  href: string;
  description: string;
  children: NavChild[];
};

export const causeWings: NavGroup[] = [
  {
    label: "Education",
    href: "/education",
    description: "Literacy and scholarships.",
    children: [
      {
        label: "Literacy",
        href: "/education/literacy",
        description: "Learning to read and write, and the materials to practise.",
      },
      {
        label: "Scholarships",
        href: "/education/scholarship",
        description: "Support toward the cost of schooling for learners who cannot meet it.",
      },
    ],
  },
  {
    label: "Health",
    href: "/health",
    description: "Sickle cell, mental health, and menstrual health.",
    children: [
      {
        label: "Sickle Cell",
        href: "/health/sickle-cell",
        description: "Facts, screening conversations, and Red for a Reason.",
      },
      {
        label: "Mental Health",
        href: "/health/mental-health",
        description: "Education and more understanding conversations about wellbeing.",
      },
      {
        label: "Menstrual Health",
        href: "/health/menstrual-health",
        description: "Education and access to essential products where cost is a barrier.",
      },
    ],
  },
  {
    label: "Empowerment",
    href: "/empowerment",
    description: "Women's economic opportunity and housing.",
    children: [
      {
        label: "Women's Empowerment",
        href: "/women-empowerment",
        description: "Economic opportunity and greater financial independence.",
      },
      {
        label: "Housing",
        href: "/empowerment/housing",
        description: "Shelter and support for people facing homelessness.",
      },
    ],
  },
];

export const mainNav: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Causes", href: "/causes", groups: causeWings },
  {
    label: "Events",
    href: "/events",
    children: events.map((item) => ({
      label: item.title,
      href: item.path,
      description: item.menuDescription,
      meta: item.dateLabel,
    })),
  },
  { label: "Contact", href: "/contact" },
];

export const legalNav = [{ label: "Privacy", href: "/privacy" }] as const;

export const programmePaths = [
  "/education",
  "/education/literacy",
  "/education/scholarship",
  "/health",
  "/health/sickle-cell",
  "/health/mental-health",
  "/health/menstrual-health",
  "/empowerment",
  "/empowerment/housing",
  "/women-empowerment",
  "/women-empowerment/economic",
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
  "/red-for-a-reason",
  "/red-for-a-reason/sponsor",
  "/red-for-a-reason/auction",
  "/red-for-a-reason/in-kind",
  "/red-for-a-reason/enquire",
  "/red-for-a-reason/rsvp",
  "/privacy",
];
