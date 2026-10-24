import { campaign } from "@/content/campaign";

/**
 * Set NEXT_PUBLIC_DONATION_URL when donations should open an external payment page.
 * Otherwise contribution links stay on /donate.
 * Red for a Reason uses the campaign payment form on this page.
 */
export const donationUrl = process.env.NEXT_PUBLIC_DONATION_URL?.trim() || undefined;

export const supportAreas = [
  { value: "general", label: "Any cause" },
  { value: "education", label: "Education" },
  { value: "literacy", label: "Literacy" },
  { value: "scholarship", label: "Scholarships" },
  { value: "health", label: "Health" },
  { value: "sickle-cell", label: "Sickle Cell" },
  { value: "mental-health", label: "Mental Health" },
  { value: "womens-health", label: "Women's Health" },
  { value: "empowerment", label: "Empowerment" },
  { value: "women-empowerment", label: "Women's Empowerment" },
  { value: "economic", label: "Economic Empowerment" },
  { value: "housing", label: "Housing" },
  { value: "fundraiser", label: "Red for a Reason" },
] as const;

export type SupportArea = (typeof supportAreas)[number]["value"];

const supportValues = new Set<string>(supportAreas.map((item) => item.value));

export function isSupportArea(value: string): value is SupportArea {
  return supportValues.has(value);
}

export function supportLabel(value: string) {
  return supportAreas.find((item) => item.value === value)?.label ?? "Any cause";
}

export function contributionHref(initiative?: string) {
  if (initiative === "fundraiser") return campaign.donateHref;
  if (donationUrl) return donationUrl;
  if (initiative && isSupportArea(initiative) && initiative !== "general") {
    return `/donate?initiative=${initiative}`;
  }
  return "/donate";
}

export const donatePage = {
  eyebrow: "Donate",
  title: "Give to the cause you want to support.",
  paragraphs: [
    "Direct your donation to education, health, or empowerment, or to a specific focus such as literacy, scholarships, sickle cell, women's health, or housing. Red for a Reason has its own payment form.",
    "Add your name, a way to reach you, and the amount you would like to give.",
  ],
};

/** Illustrative scale only. Not a cost for a named programme or a promised result. */
export const givingPerspective = {
  eyebrow: "A little, given often",
  items: [
    {
      figure: "£3,000",
      line: "a month, if 100 people give £1 a day",
      outcome: "School materials and a place in class.",
    },
    {
      figure: "£15,000",
      line: "a month, if 100 people give £5 a day",
      outcome: "Care and a safer place to live.",
    },
  ],
  note: "About what a daily gift adds up to. Your donation goes to the cause you choose.",
} as const;

export const taxNote = {
  title: "Is my donation tax-deductible?",
  text: "Eligible donations to Samaa Charity Projects may be tax-deductible, subject to the laws and regulations that apply where you pay tax. In Ghana, relief applies to gifts to organisations approved for that purpose by the Ghana Revenue Authority. Please ask us for a receipt, and speak to a tax adviser about your own situation.",
} as const;

/**
 * Bank and Mobile Money details for direct gifts.
 * A null value shows as a loading bar on the site. Fill these in only
 * with details the board has confirmed in writing. Never guess a number.
 */
export const directGiving = {
  bank: {
    title: "Bank transfer",
    rows: [
      { label: "Account name", value: "Samaa Charity Projects" },
      { label: "Bank", value: null },
      { label: "Branch", value: null },
      { label: "Account number", value: null },
      { label: "SWIFT / BIC", value: null },
    ],
    note: "Use your name and the cause as the reference, for example K MENSAH EDUCATION.",
  },
  momo: {
    title: "Mobile Money",
    rows: [
      { label: "Account name", value: "Samaa Charity Projects" },
      { label: "Network", value: null },
      { label: "Number", value: null },
    ],
    note: "Add the cause in the reference so we can direct your gift.",
  },
  online: {
    title: "Card or Mobile Money online",
    text: "Pay securely through our payment partner. Card and Mobile Money details stay with the provider and never touch this website.",
  },
} as const;
