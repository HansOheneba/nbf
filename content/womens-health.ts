import type { CopySection } from "@/content/programmes";
import { healthDisclaimer, healthReviewDate } from "@/content/health";

export const womensHealthPage = {
  eyebrow: "Women's Health",
  title: "Women's health is a matter of dignity, knowledge and access.",
  introduction: [
    "Women's health is a matter of dignity, knowledge and access. Our focus begins with menstrual health education and supporting efforts to improve access to essential products, including sanitary pads, for those facing financial barriers.",
    "This focus sits within Samaa Charity Projects' health work. The cost of essential products and limited access to reliable information can create barriers for some women and girls. This page does not describe products already being distributed.",
  ],
  reviewDate: healthReviewDate,
  disclaimer: healthDisclaimer,
  sources: [
    {
      title: "Menstrual hygiene",
      publisher: "UNICEF",
      href: "https://www.unicef.org/wash/menstrual-hygiene",
      note: "Public overview of menstrual health and hygiene, including why information and products matter.",
    },
  ],
  support: {
    label: "Donate to Women's Health",
    initiative: "womens-health",
  },
};

export const womensHealthSections: CopySection[] = [
  {
    id: "education",
    heading: "Health education for women and girls",
    paragraphs: [
      "Clear information helps women and girls understand their health, ask questions, and sort fact from rumour. Menstrual health is where our education begins. Education on this site is general. It is not personal medical advice.",
      "Samaa Charity Projects' focus includes women's health education. It does not replace a conversation with a qualified health professional about pain, a change in health, or care.",
    ],
  },
  {
    id: "stigma",
    heading: "Stigma and misinformation",
    paragraphs: [
      "Silence and misconception can make an ordinary part of health feel shameful. Challenging that means using plain language, reliable sources, and respect.",
      "Nothing on this page asks anyone to share personal health details. The contact form is not a place for medical information.",
    ],
  },
  {
    id: "products",
    heading: "Access to essential products",
    paragraphs: [
      "Sanitary pads and other essential menstrual products cost money. Where that cost is a barrier, access to them is part of dignity, school, work, and everyday life.",
      "Improving affordability and availability is a focus. This page does not say that products are currently being distributed, and it does not describe an established distribution programme.",
    ],
  },
  {
    id: "contribute",
    heading: "Ways to contribute",
    paragraphs: [
      "You can donate to women's health, or write about a partnership or an offer of time.",
    ],
  },
];
