export const aboutIntro = {
  eyebrow: "About us",
  title: "A better-informed world begins with us.",
  paragraphs: [
    "Nana Boatemah Foundation is being built around a simple belief: awareness matters. When people have access to reliable information, they are better equipped to ask questions, challenge misconceptions and make informed decisions.",
    "Our focus is on bringing important issues into the conversation, encouraging understanding and creating opportunities for people to participate in positive change.",
    "We are beginning with a focus on sickle cell awareness, helping make conversations about the condition more visible, accessible and informed.",
  ],
};

export type AboutSection = {
  id: string;
  title: string;
  paragraphs: string[];
};

export const aboutSections: AboutSection[] = [
  {
    id: "awareness",
    title: "Awareness",
    paragraphs: [
      "Awareness is the moment an issue becomes speakable. A subject moves out of silence, and a person has room to ask what it means rather than relying on rumour.",
      "For this foundation, awareness is a starting point rather than a finished claim. We want important issues, beginning with sickle cell, to be named clearly and without shame, so that a conversation can actually begin.",
    ],
  },
  {
    id: "education",
    title: "Education",
    paragraphs: [
      "Education is how attention becomes useful. It is a clear explanation, a source a person can check, and language that someone else can pass on without distorting it.",
      "The articles on this site are written for that purpose. They stay close to public guidance from health authorities, and they say where each fact comes from, so a reader can go further than a single page.",
    ],
  },
  {
    id: "understanding",
    title: "Understanding",
    paragraphs: [
      "Understanding is slower than a headline. It asks people to learn the difference between similar ideas, to notice a misconception, and to stay with a subject long enough to treat it fairly.",
      "Sickle cell disease and sickle cell trait are one example. They are related, and they are not the same thing. Holding that distinction carefully is part of a more informed conversation.",
    ],
  },
  {
    id: "participation",
    title: "Participation",
    paragraphs: [
      "A more informed public is made by many people. Sharing a reliable page, offering a skill, or asking how a conversation might travel further are all ways to take part.",
      "If you want to support awareness, offer your time, or explore a partnership, the next step is a message. Tell us what you have in mind. We will read it and reply.",
    ],
  },
];
