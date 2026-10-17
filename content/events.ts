import { images, type GalleryImage } from "@/content/images";

export const eventsPage = {
  eyebrow: "Events",
  title: "A gathering with a purpose.",
  description:
    "Samaa Charity Projects brings people together around work that deserves attention and support. The evening of 19 December 2026 is a fundraiser for children in Africa living with sickle cell.",
};

export type FoundationEvent = {
  slug: string;
  title: string;
  dateLabel: string;
  dateTime: string;
  summary: string;
  menuDescription: string;
  image: GalleryImage;
  venue?: string;
  startTime?: string;
};

export const events: FoundationEvent[] = [
  {
    slug: "sickle-cell-fundraiser",
    title: "Sickle Cell Fundraiser",
    dateLabel: "19 December 2026",
    dateTime: "2026-12-19",
    summary:
      "An evening dedicated to raising funds to help children in Africa living with sickle cell access medical facilities and treatment. A raffle will form part of the evening.",
    menuDescription:
      "A fundraising evening, with a raffle, for children in Africa living with sickle cell.",
    image: images.campaign,
  },
];

export function getEvent(slug: string) {
  return events.find((item) => item.slug === slug);
}

export function isUpcoming(event: FoundationEvent, today: string) {
  return event.dateTime >= today;
}

export function upcomingEvents(today: string) {
  return events.filter((event) => isUpcoming(event, today));
}

export function pastEvents(today: string) {
  return events.filter((event) => !isUpcoming(event, today));
}

export const featuredEvent = events[0];

export const fundraiserCampaign = {
  path: "/events/sickle-cell-fundraiser",
  eyebrow: "A cause worth supporting",
  heroTitle: "An evening that makes a difference.",
  heroCopy:
    "One evening. A shared purpose. An opportunity to help children living with sickle cell access the medical care and treatment they need.",
  homeCopy:
    "One evening. A shared purpose. An opportunity to help children in Africa living with sickle cell access medical facilities and treatment.",
  supportLabel: "19 December 2026. A fundraising evening with a raffle.",
  donateLabel: "Donate to the Cause",
  exploreLabel: "Discover the Fundraiser",
  notice: {
    eyebrow: "Upcoming fundraiser",
    description:
      "Help support access to medical facilities and treatment for children in Africa living with sickle cell. A raffle will form part of the evening.",
  },
  shareLabel: "Share the Campaign",
  why: {
    title: "Behind the evening, there is a purpose.",
    paragraphs: [
      "For children living with sickle cell, access to appropriate medical care and treatment matters. Yet the challenges families face can make that access difficult.",
      "On 19 December 2026, Samaa Charity Projects is bringing people together around a shared purpose: raising funds to help children in Africa living with sickle cell access medical facilities and treatment.",
      "Whether you contribute, ask about attending, or take part in the evening's raffle, you can help bring attention and support to this cause.",
    ],
    image: images.opp,
  },
  purpose: {
    title: "More than an evening together.",
    paragraphs: [
      "This fundraiser is an opportunity to bring people together around a cause that deserves attention and support.",
      "The funds raised are intended to help children in Africa living with sickle cell access medical facilities and treatment. Supporting the fundraiser is a way to contribute to that purpose and to the wider conversation about sickle cell disease.",
    ],
  },
  evening: {
    title: "Come together for a cause.",
    paragraphs: [
      "A raffle will form part of the evening, giving guests another way to participate.",
      "Venue, start time, ticket price, and raffle prizes are not confirmed on this page. Writing to us is an enquiry. It does not reserve a place or buy a ticket.",
    ],
    image: images.conversation,
    cta: "Ask about the evening",
    href: "/contact?topic=fundraiser",
  },
  attend: {
    title: "Ask about attending",
    text: "Write if you would like to be there. A message is an enquiry. It does not reserve a place.",
    cta: "Enquire about attending",
    href: "/contact?topic=fundraiser",
    image: images.gathering,
  },
  share: {
    title: "Share the Campaign",
    text: "Pass the campaign on. Your device can share it, or the link can be copied.",
    cta: "Share the Campaign",
  },
  close: {
    title: "Be part of the difference.",
    text: "Support the fundraiser and help the purpose of the evening travel further.",
    contribute: "Donate to the Cause",
    share: "Share the Campaign",
    image: images.hero,
  },
};
