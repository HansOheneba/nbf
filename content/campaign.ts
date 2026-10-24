import { healthDisclaimer, healthReviewDate } from "@/content/health";
import { images } from "@/content/images";

export const campaignPath = "/red-for-a-reason";

export const campaignDonateHref = "/donate?initiative=fundraiser";

export const suggestedAmounts = [100, 250, 500, 1000] as const;

export type SuggestedAmount = (typeof suggestedAmounts)[number];

export const campaignEnquiryKinds = [
  "sponsorship",
  "auction",
  "in-kind",
  "general",
  "rsvp",
] as const;

export type CampaignEnquiryKind = (typeof campaignEnquiryKinds)[number];

export const auctionLotKinds = [
  { value: "artwork", label: "Original artwork" },
  { value: "hospitality", label: "Hospitality" },
  { value: "professional-services", label: "A defined professional service" },
  { value: "tennis", label: "A tennis experience" },
  { value: "experience", label: "Another experience" },
  { value: "other", label: "Something else, clearly described" },
] as const;

export const inKindKinds = [
  { value: "venue", label: "Venue or court support" },
  { value: "refreshments", label: "Food and drink" },
  { value: "photography", label: "Photography or video" },
  { value: "print", label: "Printing and signage" },
  { value: "equipment", label: "Tennis equipment or coaching" },
  { value: "media", label: "Media support" },
  { value: "transport", label: "Transport" },
  { value: "other", label: "Another cost the campaign would otherwise pay" },
] as const;

export type DonationState = {
  status: "idle" | "error" | "unconfigured" | "redirect";
  message: string;
  fieldErrors: Record<string, string>;
  redirectUrl?: string;
};

export const initialDonationState: DonationState = {
  status: "idle",
  message: "",
  fieldErrors: {},
};

export function isCampaignEnquiryKind(value: string): value is CampaignEnquiryKind {
  return (campaignEnquiryKinds as readonly string[]).includes(value);
}

export function formatCedis(amount: number) {
  const [whole, fraction = "00"] = amount.toFixed(2).split(".");
  const grouped = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return fraction === "00" ? `GH₵${grouped}` : `GH₵${grouped}.${fraction}`;
}

/**
 * Parses a cedi amount. Suggested buttons are prompts, not prices.
 * Returns the value in cedis and in minor units (pesewas) for a payment provider.
 */
export function parseCedis(raw: string):
  | { ok: true; cedis: number; minor: number }
  | { ok: false; error: string } {
  const value = raw.trim().replace(/,/g, "").replace(/^(GH₵|GHS|₵)\s*/i, "");
  if (!/^\d+(\.\d{1,2})?$/.test(value)) {
    return { ok: false, error: "Enter an amount in cedis, such as 100 or 100.50." };
  }
  const cedis = Number(value);
  if (!Number.isFinite(cedis) || cedis < 1) {
    return { ok: false, error: "Enter at least GH₵1." };
  }
  if (cedis > 1_000_000) {
    return { ok: false, error: "Enter GH₵1,000,000 or less." };
  }
  return { ok: true, cedis, minor: Math.round(cedis * 100) };
}

export const campaign = {
  path: campaignPath,
  donateHref: campaignDonateHref,
  sponsorHref: `${campaignPath}/sponsor`,
  auctionHref: `${campaignPath}/auction`,
  inKindHref: `${campaignPath}/in-kind`,
  enquireHref: `${campaignPath}/enquire`,
  rsvpHref: `${campaignPath}/rsvp`,
  returnPath: `${campaignPath}/donate/return`,
  name: "Red for a Reason",
  tagline: "Every Serve Makes a Difference.",
  organiser: "Samaa Charity Projects",
  dateLabel: "Saturday, 19 December 2026",
  dateTime: "2026-12-19",
  /** Guest arrival in Accra (GMT, no daylight saving). The countdown runs to this moment. */
  startsAt: "2026-12-19T15:30:00Z",
  arrival: "3:30 pm",
  venue: "Accra Lawn Tennis Club, Accra",
  donateLabel: "Donate to the Cause",
  exploreLabel: "Explore the Campaign",
  rsvpLabel: "Request a place",
  images: {
    hero: images.campaign,
    event: images.campaignServe,
    wide: images.campaignCourt,
  },
  notice: {
    eyebrow: "Red for a Reason · 19 December 2026",
    description:
      "Join Samaa Charity Projects in supporting children in Africa living with sickle cell disease. Our charity tennis campaign brings together fundraising, partnerships and community support to help address barriers to appropriate care.",
  },
  home: {
    eyebrow: "Red for a Reason",
    copy: "A charity tennis afternoon for children in Africa living with sickle cell disease. Come and join us at the club, or give from wherever you are.",
  },
  hero: {
    eyebrow: "A Samaa Charity Projects initiative",
    copy: "A charity tennis afternoon for children in Africa living with sickle cell disease. Come to play, to cheer, or simply to give.",
  },
  why: {
    eyebrow: "Why red",
    lines: ["Red is the blood.", "Red is the cause.", "Red is a call to act."],
    text: "Sickle cell disease is an inherited blood disorder. Red cells turn rigid and block blood flow, bringing pain, anaemia and other complications. Children are especially vulnerable, and access to care is not equal.",
    review: "General information only. Not personal medical advice, a diagnosis, or a promise about anyone’s care.",
  },
  afternoon: {
    eyebrow: "The afternoon",
    title: "Good people. Good tennis. One reason.",
    lede: "An easy-going afternoon at the club. Bring your racket, or just bring yourself.",
    runOfShow: [
      { time: "3:30 pm", title: "Arrivals", text: "Refreshments, music and a warm welcome." },
      { time: "4:00 pm", title: "Give tennis a try", text: "Short coached drills for every level, first-timers included." },
      { time: "4:45 pm", title: "The match", text: "A friendly exhibition match, played for the cause." },
      { time: "5:30 pm", title: "Why we are here", text: "A short talk on sickle cell, then our live appeal." },
      { time: "6:00 pm", title: "The auction", text: "A handful of special lots, all for the cause." },
      { time: "6:30 pm", title: "Stay a while", text: "Food, drinks and good company to close the day." },
    ],
    note: "Times are a guide and may shift a little on the day. Wear a touch of red, if you like.",
  },
  attend: {
    /** Set to false once enough requests are in. The forms and buttons switch to the closed message. */
    requestsOpen: true,
    title: "Come and join us.",
    text: "Request a place and our team will be in touch to confirm the details.",
    smallPrint: "Space at the club is limited, so every place is confirmed by our team before the day.",
    closed: {
      title: "Requests are now closed.",
      text: "Thank you to everyone who asked to join us. You can still be part of the day by giving, or by sharing the campaign.",
    },
  },
  ways: {
    title: "Four ways to be part of it.",
    intro: "On court on the day, or from anywhere in the world.",
    items: [
      { title: "Give", text: "Before, on, or after the day.", href: campaignDonateHref },
      { title: "Partner", text: "Bring your organisation behind the cause.", href: `${campaignPath}/sponsor` },
      { title: "Offer a lot", text: "Donate something special to the auction.", href: `${campaignPath}/auction` },
      { title: "Give in kind", text: "Cover something we would otherwise buy.", href: `${campaignPath}/in-kind` },
    ],
  },
  donate: {
    eyebrow: "Red for a Reason",
    title: "Give without attending.",
    paragraphs: [
      "Suggested amounts are prompts, not prices. They are not tied to a medicine, a test, or a promised result.",
      "Gifts support awareness, and care-related help agreed with partners. Samaa Charity Projects does not choose patients or treatment.",
    ],
  },
  money: {
    title: "Every cedi accounted for.",
    lede: "Gifts support two things: awareness and education about sickle cell, and care-related help agreed with healthcare partners. We report what is actually received, never what is promised.",
    detailsLabel: "How we handle the money",
    priorities: [
      {
        label: "Awareness and education",
        items: ["Reviewed materials", "Public awareness", "Community education", "Accurate information"],
      },
      {
        label: "Care-related support",
        items: ["Medication through an agreed route", "Support that partners identify", "Only after it is approved"],
      },
    ],
    clinical:
      "Care-related money is spent only after the need, the route, and the check are agreed in writing. Clinicians decide eligibility and treatment. No healthcare partner is named here until that is agreed.",
    raised:
      "Cash in, minus receipted event costs. That net figure is what we call raised, and nothing is published until it comes from reconciled records.",
    separateLabel: "Counted separately, never as cash raised",
    separate: ["Unpaid sponsorship", "Pledges not yet received", "Winning bids not yet paid", "In-kind gifts"],
    report: "A later account will show money in, costs, and what was delivered. It will not name a child.",
  },
  sponsor: {
    title: "A partnership for the cause, not a logo beside a tennis court.",
    lede: "Red for a Reason invites organisations to support children in Africa living with sickle cell disease. The conversation is about a defined contribution and a clear account of what it did. Nothing on this page is a confirmed sponsorship, a published price, or a final commercial term.",
    value: [
      {
        title: "Social impact",
        text: "A clearly described initiative for children living with sickle cell disease, not a general association with a sports day.",
      },
      {
        title: "A credible campaign",
        text: "Association with a children’s health campaign run by Samaa Charity Projects, with the cause named in full.",
      },
      {
        title: "People inside the organisation",
        text: "Where it is agreed, awareness sessions, volunteering, or internal fundraising for staff.",
      },
      {
        title: "A wider conversation",
        text: "A structured way to meet the campaign’s philanthropic community. It does not include access to patients, medical records, or clinical decisions.",
      },
      {
        title: "An account of the work",
        text: "Reporting of funds actually received, activities delivered, and what can be verified. Outcomes are not promised in advance.",
      },
    ],
    terms: [
      "A follow-up conversation comes before any proposal.",
      "A written proposal then sets out the contribution, the payment date, the recognition on offer, and any limit on how funds may be used.",
      "In-kind support is recorded separately and is not counted as cash.",
      "Media coverage is never guaranteed.",
      "A name or logo is used only with written permission.",
      "No enquiry on this form creates a partnership.",
    ],
  },
  auction: {
    title: "Offer a lot. It is not public until it is agreed.",
    lede: "The charity auction is one of the ways the afternoon raises money. Lots are few, specific, and agreed in writing before anyone is asked to bid. Sending this form offers a lot. It does not confirm one, and this page does not list lots, because none are confirmed for publication.",
    welcomed: [
      "Original artwork, with notes the artist is willing to stand behind",
      "Hospitality, such as a stay or a meal, with the dates and the limit stated",
      "A defined block of professional time, never an open-ended promise",
      "A tennis experience, such as a lesson, a small clinic, or a club session",
      "Another experience whose inclusions and exclusions can be written down",
    ],
    terms:
      "Every lot needs written terms before it can be shown: what is included, any maximum, who may redeem it, whether it can be transferred, when it starts and expires, how it is booked, and what is excluded or charged. A winning bid is not money raised until it is paid. Clinical services are not invited. Decisions about care stay with clinicians.",
  },
  inKind: {
    title: "Give something the campaign would otherwise have to buy.",
    lede: "In-kind support reduces the cost of putting on the campaign. It is thanked, recorded, and reported on its own line. It is never added to cash raised. An offer here is not accepted until Samaa Charity Projects agrees it with you.",
    examples: [
      "Venue or court support",
      "Food and drink",
      "Photography and video",
      "Printing and signage",
      "Tennis equipment or coaching",
      "Media support",
      "Transport",
    ],
  },
  enquire: {
    title: "Ask about the campaign.",
    lede: "Use this form for any other question about the campaign. Requests for a place, partnerships, auction lots and in-kind gifts each have their own form.",
  },
  rsvp: {
    title: "Come and join us.",
    lede: "Join us on Saturday, 19 December 2026 at Accra Lawn Tennis Club, Accra. Leave your name and email, and our team will be in touch to confirm the details.",
  },
  close: {
    title: "Every serve has the same reason.",
    text: "Can't make it on the day? Give from wherever you are, or pass this on to someone who would want to know.",
  },
  footer: {
    summary:
      "Red for a Reason is a charity tennis campaign by Samaa Charity Projects, supporting children in Africa living with sickle cell disease.",
  },
  disclaimer: healthDisclaimer,
  reviewDate: healthReviewDate,
} as const;
