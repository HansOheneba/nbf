import type { CopySection } from "@/content/programmes";
import {
  healthDisclaimer,
  healthReviewDate,
  mentalHealthSourceList,
} from "@/content/health";

export const mentalHealthPage = {
  eyebrow: "Mental health",
  title: "A conversation can be a meaningful place to start.",
  introduction: [
    "Mental health is an important part of overall wellbeing. Understanding it requires more than recognising a diagnosis; it also means challenging stigma, listening with compassion and helping people find reliable information and appropriate support.",
    "Samaa Charity Projects' mental health focus is centred on education, awareness and encouraging healthier conversations about wellbeing.",
  ],
  landingTitle: "Mental wellbeing deserves understanding, not judgement.",
  landingSummary:
    "Mental wellbeing deserves understanding, not judgement. We focus on education and awareness that encourage more open conversations about wellbeing and the importance of appropriate support.",
  reviewDate: healthReviewDate,
  disclaimer: healthDisclaimer,
  sources: mentalHealthSourceList,
  support: {
    label: "Donate to Mental Health",
    initiative: "mental-health",
  },
};

export const mentalHealthSections: CopySection[] = [
  {
    id: "what-it-means",
    heading: "What mental health means",
    paragraphs: [
      "The World Health Organization describes mental health as a state of mental wellbeing that helps people cope with the stresses of life, realise their abilities, learn and work well, and contribute to their community. It is more than the absence of a mental disorder.",
      "That definition is a public-health description, not a diagnosis. This page cannot tell you, or anyone else, what your mental health is. A qualified professional is the person who can assess an individual situation.",
    ],
  },
  {
    id: "misconceptions",
    heading: "Common misconceptions",
    paragraphs: [
      "One misconception is that mental health only matters when someone is in crisis, or that talking about it is a sign of weakness. Another is that awareness material can stand in for care. Neither is fair.",
      "People can need information, a respectful conversation, and, separately, professional support. Confusing those things makes it harder to find the right next step.",
    ],
  },
  {
    id: "conversations",
    heading: "Supporting respectful conversations",
    paragraphs: [
      "A useful conversation leaves room for someone to speak without being judged, and it does not press them for details they do not want to share. Listening is part of it. So is knowing when you are not the right person to give advice.",
      "Samaa Charity Projects encourages those conversations as education and awareness. The organisation does not provide counselling, therapy, or crisis intervention.",
    ],
  },
  {
    id: "support",
    heading: "Reliable information and professional support",
    paragraphs: [
      "The World Health Organization fact sheet linked on this page is a starting point for general understanding. It is not a treatment plan, and it is not a service directory for a particular country.",
      "If you or someone else needs care, speak with a qualified health professional or the health service where you live. If someone is in immediate danger, contact the local emergency service. Do not send symptoms or personal health details through the forms on this website.",
    ],
  },
  {
    id: "initiatives",
    heading: "Supporting future mental health education",
    paragraphs: [
      "You can donate to mental health education, or write about time, a skill, or a partnership you would like to discuss.",
      "This page does not announce a clinic, a helpline run by the organisation, or a completed programme.",
    ],
  },
];
