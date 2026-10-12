import { images, type GalleryImage } from "@/content/images";

export const eventsPage = {
  eyebrow: "Events & gatherings",
  title: "A gathering with a purpose.",
  description:
    "We bring people together around causes that deserve attention, understanding and support. Each gathering is an opportunity to connect with a purpose beyond the evening itself.",
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
    image: images.gathering,
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
  eyebrow: "Nana Boatemah Foundation · Fundraising event",
  heroTitle: "An evening that makes a difference.",
  heroCopy:
    "One evening. A shared purpose. An opportunity to help children living with sickle cell access the medical care and treatment they need.",
  supportLabel: "A fundraising evening with a raffle.",
  donateLabel: "Donate to the Cause",
  exploreLabel: "Explore the Event",
  why: {
    title: "Behind every cause, there are people.",
    paragraphs: [
      "For children living with sickle cell, access to appropriate medical care and treatment matters. Yet the challenges families face can make that access difficult.",
      "This December, Nana Boatemah Foundation is bringing people together around a shared purpose: raising funds to help children in Africa living with sickle cell access medical facilities and treatment.",
      "Whether you attend, contribute or take part in the evening's raffle, you can help bring attention and support to a cause that deserves it.",
    ],
    image: images.conversation,
  },
  purpose: {
    title: "More than an evening together.",
    paragraphs: [
      "This fundraiser is an opportunity to bring people together around a cause that deserves attention and support.",
      "The funds raised are intended to help children in Africa living with sickle cell access medical facilities and treatment. By supporting the fundraiser, participants can contribute to this purpose and help bring greater awareness to the challenges surrounding sickle cell disease.",
    ],
  },
  evening: {
    title: "Come together for a cause.",
    paragraphs: [
      "The evening will include a raffle as part of the fundraising event, giving guests another way to participate in the occasion.",
    ],
    image: images.portrait,
    cta: "Ask about the raffle",
    href: "/contact?topic=fundraiser",
  },
  attend: {
    title: "Attend the Event",
    text: "Write to the foundation if you would like to be there. A message is an enquiry. It does not reserve a place.",
    cta: "Enquire about attending",
    href: "/contact?topic=fundraiser",
    image: images.learning,
  },
  share: {
    title: "Share the Cause",
    text: "Pass the campaign on. Your device can share it, or the link can be copied.",
    cta: "Share the Campaign",
  },
  close: {
    title: "Be part of the difference.",
    text: "Support the fundraiser, help spread the word, and join us in making this evening count.",
    contribute: "Make a Contribution",
    share: "Share the Campaign",
    image: images.profile,
  },
};
