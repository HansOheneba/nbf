export type InvolvementPath = {
  id: string;
  title: string;
  paragraphs: string[];
  cta: string;
  href: string;
};

export const involvementPaths: InvolvementPath[] = [
  {
    id: "donate",
    title: "Donate",
    paragraphs: [
      "A contribution helps a cause go further. Until a payment page is connected, the donate form records what you intend to give and which cause it is for.",
      "Sending that note does not take money and is not a receipt. If a payment link is configured for the site, the donate buttons use it instead.",
    ],
    cta: "Go to the donation note",
    href: "/donate",
  },
  {
    id: "volunteering",
    title: "Volunteer",
    paragraphs: [
      "Offering time starts with a conversation. There is not a list of open roles to apply for, and this page is not an application for a vacancy.",
      "If you have time, a skill, or a community connection you would like to offer, write and tell us what you can do. We will read your note and reply about what is possible.",
    ],
    cta: "Enquire about volunteering",
    href: "/get-involved?topic=volunteering#enquiry",
  },
  {
    id: "partnerships",
    title: "Explore partnerships",
    paragraphs: [
      "A partnership begins as a question between people or organisations who want to work on the same kind of need.",
      "If you represent a school, a clinic, a community group, or another organisation, send a short description of who you are and what you would like to explore. We will reply. A message is not an agreement that a partnership is open.",
    ],
    cta: "Enquire about a partnership",
    href: "/get-involved?topic=partnership#enquiry",
  },
  {
    id: "share",
    title: "Share an initiative",
    paragraphs: [
      "An initiative travels when someone shares a reliable explanation, corrects a misconception with care, or points another person to a page they can read for themselves.",
      "You can start with the programme pages and the sickle cell articles on this site. If you are planning a conversation, a class, or another activity and want to tell us about it, send an enquiry. That does not mean a placement is already open.",
    ],
    cta: "Tell us what you have in mind",
    href: "/contact?topic=awareness",
  },
];
