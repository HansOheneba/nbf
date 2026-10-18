import { healthDisclaimer, healthReviewDate } from "@/content/health";
import { images } from "@/content/images";

export const campaignPath = "/red-for-a-reason";

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
  donateHref: `${campaignPath}#donate`,
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
    copy: "A charity tennis campaign supporting children in Africa living with sickle cell disease. Entrance to the afternoon is limited. Request to attend, and we will get in touch. You can also give without being there.",
  },
  cause: {
    title: "The reason is the red blood cell.",
    paragraphs: [
      "Sickle cell disease is an inherited blood disorder. It affects haemoglobin, the protein in red blood cells that carries oxygen. Red cells can become rigid and crescent-shaped, and those cells can block blood flow.",
      "That can bring pain episodes, anaemia, infections and other complications. Children are especially vulnerable, and the practical barriers in front of appropriate care are part of what this campaign is here to address.",
      "Red for a Reason keeps that cause at the centre. The colour is the blood, and it is the colour long associated with sickle cell awareness. It is also a call to act: give, partner, offer a lot, or share. This is not a social tennis afternoon. Every serve, every bid and every cedi has one reason.",
    ],
    review:
      "This is general information for public awareness, using the same public sources as the sickle cell page on this website. It is not personal medical advice, a diagnosis, or a promise about anyone’s care.",
  },
  nameReasons: [
    {
      title: "Red is the blood",
      text: "Sickle cell disease is a disorder of the red blood cell. The campaign colour keeps that fact in view.",
    },
    {
      title: "Red is the cause",
      text: "Red and burgundy are widely associated with sickle cell awareness, so the campaign sits beside that wider movement.",
    },
    {
      title: "Red is a call to act",
      text: "The point is to move from understanding to a contribution: a gift, a partnership, an auction lot, or a share.",
    },
  ],
  model: {
    title: "Four ways support comes in.",
    intro:
      "Entrance to the afternoon is limited, and a request to attend does not confirm a place. The cause, and the chance to support it, are open to everyone whether or not you come. In-kind help lowers what the campaign has to spend. It is recorded on its own line and is never counted as cash raised.",
    items: [
      {
        title: "Individual giving",
        text: "Donations before, during and after the afternoon, including from people who cannot attend.",
        href: `${campaignPath}#donate`,
        cta: "Donate to the Cause",
      },
      {
        title: "Corporate partnership",
        text: "A written partnership for organisations that want to support the cause. No sponsor is confirmed on this page.",
        href: `${campaignPath}/sponsor`,
        cta: "Discuss a partnership",
      },
      {
        title: "Charity auction",
        text: "A small number of lots, each agreed in writing before it is shown. An offer is not a confirmed lot.",
        href: `${campaignPath}/auction`,
        cta: "Offer an auction lot",
      },
      {
        title: "In-kind support",
        text: "Goods or services the campaign would otherwise have to buy. Recorded separately from cash.",
        href: `${campaignPath}/in-kind`,
        cta: "Offer in-kind support",
      },
    ],
  },
  event: {
    eyebrow: "The afternoon",
    title: "Good people. Good tennis. A reason to come together.",
    paragraphs: [
      "On Saturday, 19 December 2026, Samaa Charity Projects brings people together at Accra Lawn Tennis Club for an afternoon of tennis, community and collective action in support of children in Africa living with sickle cell disease.",
      "From 3:30 pm, join us for a friendly tennis match, beginner-friendly activities, conversations about sickle cell, fundraising and an afternoon spent supporting a cause that matters.",
    ],
    attend: {
      title: "Be part of the afternoon",
      text: "If you would like to join us, we would love to hear from you. Entrance is limited, so request to attend through the form below. Our team will get in touch about availability. Submitting a request does not confirm your place, and attendance is arranged in advance.",
    },
    purposeTitle: "An afternoon with a purpose",
    activities: [
      {
        title: "Friendly tennis match",
        text: "Enjoy a six-player match played in support of the cause.",
      },
      {
        title: "Give tennis a try",
        text: "Take part in voluntary, beginner-friendly drills in small coached groups.",
      },
      {
        title: "Learn and understand",
        text: "Explore why sickle cell awareness, accurate information and access to appropriate care matter.",
      },
      {
        title: "Give what you can",
        text: "Support the campaign through a live fundraising appeal, at a level that works for you.",
      },
      {
        title: "Support through the auction",
        text: "Discover items and experiences contributed in support of the cause.",
      },
      {
        title: "Connect and share",
        text: "Enjoy refreshments, meet others and discover more ways to get involved.",
      },
    ],
    dressTitle: "Come as you are. Bring a little red if you can.",
    dress:
      "Red is the colour of our campaign, and wearing a touch of it is a lovely way to show your support. It is entirely optional. What matters is the purpose that brings us together.",
    awayTitle: "Can't make it on the day?",
    away: "You can still be part of Red for a Reason. Make a donation, explore a partnership, contribute an auction item or help spread the word.",
    close: "Every serve makes a difference. Every contribution matters.",
  },
  donate: {
    eyebrow: "Give from anywhere",
    title: "You do not need to attend to make a difference.",
    paragraphs: [
      "Give before the afternoon, on the day, or afterwards. The amounts below are suggestions. They are not prices, and they are not tied to a medicine, a test, or a promised result.",
      "Gifts to Red for a Reason are intended for two kinds of work: awareness and education, and care-related support agreed with the right partners. No percentage split is set until those needs and costs are agreed. Samaa Charity Projects does not choose patients, medicines, or treatment.",
    ],
  },
  funds: {
    title: "What the money is for.",
    intro:
      "Two priorities guide the campaign. A fixed split between them will not be announced until needs and costs have been agreed with partners.",
    priorities: [
      {
        label: "Awareness and education",
        items: [
          "Medically reviewed educational materials",
          "Approved public awareness activities",
          "Community education with appropriate partners",
          "Communications that support an accurate understanding of sickle cell disease",
        ],
      },
      {
        label: "Care-related support",
        items: [
          "Agreed medication support through an approved route",
          "Therapy or related support identified by partners",
          "Other needs that are clearly defined and approved before money is spent",
        ],
      },
    ],
    clinical:
      "Before care-related funds are spent, the need, the delivery route, and the way spending is checked are to be agreed in writing. Qualified staff identify which children are eligible. Clinical decisions stay with clinicians. No organisation is named on this page as a healthcare partner. A partnership is described only after it has been agreed and permission has been given.",
  },
  accountability: {
    title: "What will be reported, and what will not.",
    paragraphs: [
      "The campaign intends to report actual money. Cash received means sponsorship that has been paid, donations that have arrived, and auction payments that have been collected. Approved, receipted event costs are then subtracted. What remains is the net available for the cause, and that net figure is the one that should be described as raised for children’s support.",
      "There is no fundraising total on this page. A public figure will be published only when it comes from reconciled records.",
    ],
    separate: [
      "Sponsorship promised in writing but not yet paid",
      "Individual pledges that have not yet been received",
      "Winning auction bids that have not yet been paid",
      "In-kind contributions, valued on their own line",
    ],
    report:
      "The later account is intended to show funds received, event expenditure, net funds, how money was allocated, the activities carried out, confirmation from the institutions involved, and any remaining balance. It will not name a child or describe a child’s history or treatment. A pledge is not a donation received.",
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
    text: "Pass the campaign on, or give from wherever you are. The children the campaign exists for are not named here, and they should not have to be.",
  },
  footer: {
    summary:
      "Red for a Reason is a charity tennis campaign by Samaa Charity Projects, supporting children in Africa living with sickle cell disease.",
  },
  disclaimer: healthDisclaimer,
  reviewDate: healthReviewDate,
} as const;
