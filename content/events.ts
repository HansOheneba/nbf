import { campaign } from "@/content/campaign";
import { images, type GalleryImage } from "@/content/images";

export const eventsPage = {
  eyebrow: "Events",
  title: "A gathering with a purpose.",
  description:
    "Samaa Charity Projects brings people together around work that deserves attention and support. Red for a Reason, on 19 December 2026, is a charity tennis campaign for children in Africa living with sickle cell disease.",
};

export type FoundationEvent = {
  slug: string;
  path: string;
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
    path: campaign.path,
    title: campaign.name,
    dateLabel: "19 December 2026",
    dateTime: campaign.dateTime,
    summary:
      "A charity tennis campaign for children in Africa living with sickle cell disease. Entrance to the afternoon at Accra Lawn Tennis Club is limited. Request to attend, or support the cause without being there.",
    menuDescription: "Charity tennis campaign for children living with sickle cell disease.",
    image: images.campaign,
    venue: campaign.venue,
    startTime: "Guests from 3:30 pm",
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
