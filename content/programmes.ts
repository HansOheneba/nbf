import { images, type GalleryImage } from "@/content/images";

export type CopySection = {
  id: string;
  heading: string;
  paragraphs: string[];
};

export type ProgrammeArea = {
  label: string;
  href: string;
  summary: string;
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
  areas: ProgrammeArea[];
};

export const programmes: Programme[] = [
  {
    slug: "education",
    href: "/education",
    navLabel: "Education",
    eyebrow: "Education",
    title: "Every learner deserves the opportunity to learn.",
    headline: "Every learner deserves the opportunity to learn.",
    summary:
      "We focus on two foundations of educational access: literacy and scholarships. From helping people develop reading and writing skills to supporting learners who face financial barriers to schooling, our aim is to help make learning more accessible.",
    image: images.readers,
    cta: "Explore Education",
    donateLabel: "Donate to Education",
    initiative: "education",
    areas: [
      {
        label: "Literacy",
        href: "/education/literacy",
        summary:
          "Reading and writing open doors to knowledge, communication and greater independence. We support opportunities to develop these essential skills and access materials for continued learning.",
      },
      {
        label: "Scholarships",
        href: "/education/scholarship",
        summary:
          "The cost of schooling can stand between a learner and their education. Our scholarship focus is on helping learners who cannot meet these costs access educational opportunities.",
      },
    ],
  },
  {
    slug: "health",
    href: "/health",
    navLabel: "Health",
    eyebrow: "Health",
    title: "Better health begins with access to care and understanding.",
    headline: "Better health begins with access to care and understanding.",
    summary:
      "Our health work focuses on sickle cell awareness and support, mental health education, and menstrual health. We aim to encourage informed conversations, improve access to reliable information and support efforts that help people navigate health challenges with greater understanding.",
    image: images.conversation,
    cta: "Explore Health",
    donateLabel: "Donate to Health",
    initiative: "health",
    areas: [
      {
        label: "Sickle Cell",
        href: "/health/sickle-cell",
        summary:
          "Accurate information and greater understanding can help challenge misconceptions about sickle cell disease. Our work includes awareness and support for efforts to help children in Africa living with sickle cell access medical facilities and treatment.",
      },
      {
        label: "Mental Health",
        href: "/health/mental-health",
        summary:
          "Mental wellbeing deserves understanding, not judgement. We focus on education and awareness that encourage more open conversations about wellbeing and the importance of appropriate support.",
      },
      {
        label: "Menstrual Health",
        href: "/health/menstrual-health",
        summary:
          "Menstrual health is a matter of dignity, knowledge and access. We focus on menstrual health education and supporting efforts to improve access to essential products, including sanitary pads, for those facing financial barriers.",
      },
    ],
  },
  {
    slug: "housing",
    href: "/empowerment/housing",
    navLabel: "Housing",
    eyebrow: "Housing",
    title: "Everyone deserves a safe place to call home.",
    headline: "Everyone deserves a safe place to call home.",
    summary:
      "A safe place to stay provides a foundation for security and stability. Our housing focus, within empowerment, is on developing initiatives that respond to homelessness and help make safe shelter more accessible to people who need it.",
    image: images.home,
    cta: "Explore Housing",
    donateLabel: "Donate to Housing",
    initiative: "housing",
    areas: [
      {
        label: "Shelter and Support",
        href: "/empowerment/housing#shelter",
        summary:
          "People experiencing homelessness can face significant barriers to finding safe accommodation. We want to support efforts that respond to this need with dignity and practical care.",
      },
    ],
  },
  {
    slug: "women-empowerment",
    href: "/women-empowerment",
    navLabel: "Women's Empowerment",
    eyebrow: "Women's Empowerment",
    title: "More opportunity. Greater independence. Better access.",
    headline: "More opportunity. Greater independence. Better access.",
    summary:
      "We focus on women's economic empowerment. Our aim is to support greater economic opportunity and help women pursue financial independence and participate in economic life.",
    image: images.portrait,
    cta: "Explore Women's Empowerment",
    donateLabel: "Donate to Women's Empowerment",
    initiative: "women-empowerment",
    areas: [
      {
        label: "Economic Empowerment",
        href: "/women-empowerment/economic",
        summary:
          "Economic opportunity can expand choices and strengthen livelihoods. We focus on initiatives that help women pursue greater financial independence and participate in economic life.",
      },
    ],
  },
];

export const causesPage = {
  eyebrow: "Our Causes",
  title: "A better future begins with access.",
  paragraphs: [
    "Access to education. Access to healthcare. A safe place to call home. The opportunity to build an independent future.",
    "Samaa Charity Projects focuses on initiatives that help address barriers to these essentials, supporting people and communities across Africa.",
  ],
  close: {
    title: "One shared purpose",
    paragraphs: [
      "The challenges people face may differ, but the need for opportunity, dignity and access connects them.",
      "Explore our causes, learn about the work and discover how you can contribute to a better future.",
    ],
    cta: "Support Our Work",
    href: "/donate",
  },
};

export function getProgramme(slug: string) {
  return programmes.find((item) => item.slug === slug);
}
