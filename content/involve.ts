export type InvolvementPath = {
  id: string;
  title: string;
  paragraphs: string[];
  cta: string;
  topic: "awareness" | "volunteering" | "partnership";
};

export const involvementPaths: InvolvementPath[] = [
  {
    id: "awareness",
    title: "Spreading awareness",
    paragraphs: [
      "Awareness moves when someone shares an explanation they trust, corrects a misconception with care, or points another person to a source they can read for themselves.",
      "You can start with the sickle cell pages and the educational articles on this site. If you are planning a conversation, a class, or another awareness activity and want to tell us about it, send an enquiry and describe what you have in mind.",
    ],
    cta: "Enquire about awareness",
    topic: "awareness",
  },
  {
    id: "volunteering",
    title: "Volunteering",
    paragraphs: [
      "Offering time starts with a conversation. There is not a list of open roles to apply for, and this page is not an application for a vacancy.",
      "If you have time, a skill, or a community connection you would like to offer, write and tell us what you can do. We will read your note and reply about what is possible.",
    ],
    cta: "Enquire about volunteering",
    topic: "volunteering",
  },
  {
    id: "partnerships",
    title: "Exploring partnerships",
    paragraphs: [
      "A partnership begins as a question between people or organisations who want to work towards the same kind of public understanding.",
      "If you represent a school, a clinic, a community group, or another organisation, and you have an idea connected to awareness or education, send a short description of who you are and what you would like to explore. We will reply.",
    ],
    cta: "Enquire about a partnership",
    topic: "partnership",
  },
];
