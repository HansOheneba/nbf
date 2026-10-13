import { images, type GalleryImage } from "@/content/images";

export type CopySection = {
  id: string;
  heading: string;
  paragraphs: string[];
};

export type Programme = {
  slug: string;
  href: string;
  navLabel: string;
  eyebrow: string;
  title: string;
  headline: string;
  summary: string;
  image: GalleryImage;
  cta: string;
  donateLabel: string;
  initiative: string;
};

export const programmes: Programme[] = [
  {
    slug: "education",
    href: "/education",
    navLabel: "Education",
    eyebrow: "Education",
    title: "Every learner deserves the chance to move forward.",
    headline: "A chance to learn can change what comes next.",
    summary:
      "Education opens doors to knowledge, confidence and opportunity. Yet the cost of schooling and essential learning resources can prevent less-privileged children and learners from accessing the education they deserve. Our education focus is on helping reduce these barriers and supporting better access to learning opportunities.",
    image: images.readers,
    cta: "Explore Education",
    donateLabel: "Donate to Education",
    initiative: "education",
  },
  {
    slug: "health",
    href: "/health",
    navLabel: "Health",
    eyebrow: "Health",
    title: "Every person deserves access to care and understanding.",
    headline: "Health is about more than getting through the day.",
    summary:
      "Access to health information, appropriate care and emotional support matters at every stage of life. Our health focus includes sickle cell awareness and support, alongside mental health education and initiatives that encourage greater understanding of wellbeing.",
    image: images.conversation,
    cta: "Explore Health",
    donateLabel: "Donate to Health",
    initiative: "health",
  },
  {
    slug: "housing",
    href: "/housing",
    navLabel: "Housing",
    eyebrow: "Housing",
    title: "A safe place to call home matters.",
    headline: "Everyone deserves a place to feel safe.",
    summary:
      "A safe place to sleep and live is fundamental to dignity and wellbeing. People experiencing homelessness can face difficult barriers to finding shelter and stability. Our housing focus is on developing support for people facing homelessness and exploring shelter initiatives that respond to this need.",
    image: images.home,
    cta: "Explore Housing",
    donateLabel: "Donate to Housing",
    initiative: "housing",
  },
  {
    slug: "women-empowerment",
    href: "/women-empowerment",
    navLabel: "Women empowerment",
    eyebrow: "Women empowerment",
    title: "Opportunity, dignity and independence for women.",
    headline: "When women have more opportunities, possibilities expand.",
    summary:
      "Economic independence and access to essential health resources can make a meaningful difference in women's lives. Our women empowerment focus brings together economic opportunity, menstrual health education and improved access to essential menstrual products for those who face financial barriers.",
    image: images.portrait,
    cta: "Explore Women Empowerment",
    donateLabel: "Donate to Women Empowerment",
    initiative: "women-empowerment",
  },
];

export const causesPage = {
  eyebrow: "Causes",
  title: "Four causes. One shared purpose.",
  introduction:
    "Different challenges call for different forms of support. These causes touch lives, strengthen opportunities and help communities move forward.",
};

export function getProgramme(slug: string) {
  return programmes.find((item) => item.slug === slug);
}
