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
  arrival: "3:30 pm",
  venue: "Accra Lawn Tennis Club, Accra",
  donateLabel: "Donate to the Cause",
  exploreLabel: "Explore the Campaign",
  rsvpLabel: "Request to attend",
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
    copy: "A charity tennis campaign for children in Africa living with sickle cell disease. Entrance to the afternoon is limited. Request to attend, and we will get in touch. Anyone can give without being there.",
  },
  hero: {
    eyebrow: "A Samaa Charity Projects initiative",
    copy: "A charity tennis afternoon for children in Africa living with sickle cell disease. Places are limited. You can also give without coming.",
  },
  cause: {
    title: "The reason is the red blood cell.",
    paragraphs: [
      "Sickle cell disease is an inherited blood disorder. Red cells can become rigid and block blood flow, which can bring pain, anaemia and other complications. Children are especially vulnerable.",
    ],
    review: "General information only. Not personal medical advice, a diagnosis, or a promise about anyone’s care.",
  },
  nameReasons: [
    {
      title: "Red is the blood",
      text: "A disorder of the red blood cell.",
    },
    {
      title: "Red is the cause",
      text: "The colour long used for sickle cell awareness.",
    },
    {
      title: "Red is a call to act",
      text: "Give, partner, offer a lot, or share.",
    },
  ],
  model: {
    title: "Four ways to take part.",
    intro: "Open whether or not you attend. In-kind help is recorded on its own line, never as cash.",
    items: [
      {
        title: "Give",
        text: "Before, on the day, or after. You do not need a place.",
        href: campaignDonateHref,
        cta: "Donate to the Cause",
      },
      {
        title: "Partner",
        text: "A written partnership. Nothing here is a confirmed sponsor.",
        href: `${campaignPath}/sponsor`,
        cta: "Discuss a partnership",
      },
      {
        title: "Offer a lot",
        text: "Few lots, each agreed in writing before it is shown.",
        href: `${campaignPath}/auction`,
        cta: "Offer an auction lot",
      },
      {
        title: "Give in kind",
        text: "Something the campaign would otherwise have to buy.",
        href: `${campaignPath}/in-kind`,
        cta: "Offer in-kind support",
      },
    ],
  },
  event: {
    eyebrow: "The afternoon",
    title: "Good people. Good tennis. One reason.",
    paragraphs: [
      "From 3:30 pm: a friendly match, beginner drills, a conversation about sickle cell, and a chance to give.",
    ],
    attend: {
      title: "Request a place",
      text: "Places are limited. Leave your name and we will be in touch. A request does not confirm a place.",
    },
    purposeTitle: "On the day",
    activities: [
      { title: "Friendly match", text: "Six players, for the cause." },
      { title: "Give tennis a try", text: "Short drills, in small coached groups." },
      { title: "The cause", text: "Why sickle cell, and why care matters." },
      { title: "A live appeal", text: "Give at a level that works for you." },
      { title: "Auction", text: "Lots agreed before anyone is asked to bid." },
      { title: "People", text: "Refreshments, and others here for the same reason." },
    ],
    dressTitle: "A touch of red is welcome.",
    dress: "It is optional.",
    awayTitle: "Not coming?",
    away: "You can still give, partner, or offer a lot.",
  },
  donate: {
    eyebrow: "Red for a Reason",
    title: "Give without attending.",
    paragraphs: [
      "Suggested amounts are prompts, not prices. They are not tied to a medicine, a test, or a promised result.",
      "Gifts support awareness, and care-related help agreed with partners. Samaa Charity Projects does not choose patients or treatment.",
    ],
  },
  funds: {
    title: "What a gift supports.",
    intro: "Two priorities. No split is set until needs and costs are agreed.",
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
  },
  accountability: {
    title: "Counted when it arrives.",
    paragraphs: [
      "Cash in, minus receipted event costs. That net figure is what we call raised. Nothing is published here until it comes from reconciled records.",
    ],
    separate: ["Unpaid sponsorship", "Pledges not yet received", "Winning bids not yet paid", "In-kind gifts"],
    report: "A later account will show money in, costs, and what was delivered. It will not name a child. A pledge is not a donation received.",
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
    lede: "Use this form for a question that is not a request for a place, a partnership, an auction lot, or an in-kind gift. A message here does not reserve a seat.",
  },
  rsvp: {
    title: "Request to attend.",
    lede: "Entrance to the afternoon of Saturday, 19 December 2026 at Accra Lawn Tennis Club, Accra, is limited. Leave your name and email, and our team will get in touch about availability. Sending this form does not confirm your place, and attendance is arranged in advance.",
  },
  close: {
    title: "Every serve has the same reason.",
    text: "Pass it on, or give from wherever you are. No child is named here.",
  },
  footer: {
    summary:
      "Red for a Reason is a charity tennis campaign by Samaa Charity Projects, supporting children in Africa living with sickle cell disease.",
  },
  disclaimer: healthDisclaimer,
  reviewDate: healthReviewDate,
} as const;
