import type { CopySection } from "@/content/programmes";

export const womenPage = {
  eyebrow: "Women empowerment",
  title: "Opportunity, dignity and independence for women.",
  introduction: [
    "Women should have opportunities to build livelihoods, participate in economic life and access the information and resources that support their wellbeing.",
    "Samaa Charity Projects' women empowerment focus brings together two connected areas: economic opportunity and menstrual health.",
  ],
  support: {
    label: "Donate to Women Empowerment",
    initiative: "women-empowerment",
  },
};

export const economicProgramme = {
  id: "economic",
  eyebrow: "Women's economic empowerment",
  title: "More opportunity. Greater independence.",
  paragraphs: [
    "Access to economic opportunity can help women strengthen their livelihoods, support their households and make decisions about their futures.",
    "Our focus is on supporting initiatives that help women pursue economic empowerment and greater financial independence.",
  ],
  sections: [
    {
      id: "participation",
      heading: "Economic participation",
      paragraphs: [
        "A livelihood is a way to take part in economic life: to earn, to decide, and to plan. Barriers to that participation can be practical, including skills, tools, markets, and the room to use them.",
        "Samaa Charity Projects treats economic participation as an area of focus. This page does not announce a training course, a grant, or a business programme already in operation.",
      ],
    },
    {
      id: "livelihoods",
      heading: "Livelihoods, skills, and resources",
      paragraphs: [
        "Skills and access to resources can widen the choices a woman has about work and income. They are means toward independence, not a promise of a particular outcome.",
        "Future initiatives in this area would be described here when they exist and can be explained accurately. Until then, the honest account is the focus itself.",
      ],
    },
    ] satisfies CopySection[],
};

export const menstrualProgramme = {
  id: "menstrual-health",
  eyebrow: "Menstrual health",
  title: "Menstrual health should never be a barrier to dignity.",
  paragraphs: [
    "Menstrual health is an important part of wellbeing. Yet the cost of essential menstrual products and limited access to reliable information can create barriers for some women and girls.",
    "Our focus is on promoting menstrual health education and improving access to essential products, including sanitary pads, for those who face financial barriers.",
  ],
  sections: [
    {
      id: "education",
      heading: "Menstrual health education",
      paragraphs: [
        "Clear information helps people understand menstruation as a part of health, ask questions, and sort fact from rumour. Education on this site is general. It is not personal medical advice.",
        "Samaa Charity Projects' focus includes menstrual health education. It does not replace a conversation with a qualified health professional about pain, a change in health, or care.",
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
        "You can send a note of intended support for future menstrual health activities, or write about a partnership or an offer of time.",
        "A note is an intention. It is not a receipt, and it does not confirm that an activity is open.",
      ],
    },
  ] satisfies CopySection[],
  sources: [
    {
      title: "Menstrual hygiene",
      publisher: "UNICEF",
      href: "https://www.unicef.org/wash/menstrual-hygiene",
      note: "Public overview of menstrual health and hygiene, including why information and products matter.",
    },
  ],
};
