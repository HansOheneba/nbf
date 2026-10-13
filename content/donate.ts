/**
 * Set NEXT_PUBLIC_DONATION_URL to an approved payment page when one exists.
 * Until then, contribution links open the enquiry on /donate.
 * That form records an intention. It does not take payment.
 */
export const donationUrl = process.env.NEXT_PUBLIC_DONATION_URL?.trim() || undefined;

export const supportAreas = [
  { value: "general", label: "Any cause" },
  { value: "education", label: "Education" },
  { value: "health", label: "Health" },
  { value: "sickle-cell", label: "Sickle cell" },
  { value: "mental-health", label: "Mental health education" },
  { value: "housing", label: "Housing" },
  { value: "women-empowerment", label: "Women empowerment" },
  { value: "menstrual-health", label: "Menstrual health" },
  { value: "fundraiser", label: "The 19 December 2026 fundraiser" },
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
  if (donationUrl) return donationUrl;
  if (initiative && isSupportArea(initiative) && initiative !== "general") {
    return `/donate?initiative=${initiative}`;
  }
  return "/donate";
}

export const donatePage = {
  eyebrow: "Donate",
  title: "A note of what you intend to give.",
  paragraphs: [
    "There is no card payment on this page. Send your name, a way to reply, the area you want to support, and, if you want, the amount you intend to contribute.",
    "Samaa Charity Projects reads that note. Sending it does not move any money, and it is not a receipt.",
  ],
};
