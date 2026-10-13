import type { CopySection } from "@/content/programmes";

export const educationPage = {
  eyebrow: "Education",
  title: "Every learner deserves the chance to move forward.",
  introduction: [
    "Education can open doors to opportunity, confidence and independence. But school-related costs and the price of essential learning resources can place education beyond the reach of some families.",
    "Samaa Charity Projects' education focus is on helping less-privileged learners access educational opportunities and the resources they need to participate in learning.",
  ],
  support: {
    label: "Donate to Education",
    initiative: "education",
  },
};

export const educationSections: CopySection[] = [
  {
    id: "barriers",
    heading: "Barriers to educational access",
    paragraphs: [
      "The cost of schooling, uniforms, transport, and the materials a learner needs can decide whether someone is able to take part. Those costs are not the same in every place, and this page does not set out a list of fees or a count of people affected.",
      "What is clear is the shape of the barrier: when learning depends on money a family does not have, the chance to move forward narrows. Samaa Charity Projects is focused on that gap.",
    ],
  },
  {
    id: "resources",
    heading: "Learning resources and educational opportunity",
    paragraphs: [
      "Books, a place to study, and a way into a classroom or another learning setting are practical parts of an education. Without them, ability and effort are not enough.",
      "Supporting access means paying attention to those resources, and to the wider opportunity to learn, rather than treating education as a slogan.",
    ],
  },
  {
    id: "focus",
    heading: "A focus on less-privileged learners",
    paragraphs: [
      "The education work is aimed at learners for whom cost and lack of resources stand in the way. It is a focus Samaa Charity Projects is developing.",
      "This site does not describe a scholarship scheme, a school, or a completed education programme. Those would be named here only if they were underway and could be described accurately.",
    ],
  },
  {
    id: "contribute",
    heading: "Ways to contribute",
    paragraphs: [
      "You can send a note of support for education-related initiatives, or write about time, a skill, or a partnership you would like to discuss.",
      "A contribution note records an intention. It does not take payment. An enquiry is a conversation, not confirmation that a role or a project is open.",
    ],
  },
];
