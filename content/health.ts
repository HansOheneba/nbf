export const healthReviewDate = "12 October 2026";

export const healthDisclaimer =
  "This is general information for public awareness. It is not personal medical advice, a diagnosis, or a recommendation about treatment. Samaa Charity Projects does not provide medical care, testing, counselling, therapy, or crisis support. Questions about your own health, a test result, or care for someone else belong with a qualified healthcare professional.";

export type CitedSource = {
  title: string;
  publisher: string;
  href: string;
  note: string;
};

export const healthPage = {
  eyebrow: "Health",
  title: "Every person deserves access to care and understanding.",
  introduction: [
    "Health affects every part of life, from physical wellbeing to emotional resilience. Access to accurate information, appropriate care and supportive environments matters.",
    "Samaa Charity Projects' health focus includes sickle cell awareness and support, as well as mental health education and initiatives that encourage greater understanding of wellbeing.",
  ],
  support: {
    label: "Donate to Health",
    initiative: "health",
  },
};

export const healthSources = {
  who: {
    title: "Sickle-cell disease fact sheet",
    publisher: "World Health Organization",
    href: "https://www.who.int/news-room/fact-sheets/detail/sickle-cell-disease",
    note: "Fact sheet dated 6 August 2025. Used for the description of the condition, inheritance, and its public-health importance.",
  },
  cdcAbout: {
    title: "About sickle cell disease",
    publisher: "U.S. Centers for Disease Control and Prevention",
    href: "https://www.cdc.gov/sickle-cell/about/index.html",
    note: "Public overview of sickle cell disease, including how the condition is identified.",
  },
  cdcTrait: {
    title: "What is sickle cell trait?",
    publisher: "U.S. Centers for Disease Control and Prevention",
    href: "https://www.cdc.gov/sickle-cell/sickle-cell-trait/index.html",
    note: "Page dated 15 May 2024. Used for the difference between trait and disease, and for the inheritance pattern when both parents have trait.",
  },
  cdcScreening: {
    title: "Get screened to know your sickle cell status",
    publisher: "U.S. Centers for Disease Control and Prevention",
    href: "https://www.cdc.gov/sickle-cell/sickle-cell-trait/fact-sheet-get-screened-to-know-your-sickle-cell-status.html",
    note: "Fact sheet on screening, including newborn screening in the United States and why a blood test is used.",
  },
  whoMentalHealth: {
    title: "Mental health: strengthening our response",
    publisher: "World Health Organization",
    href: "https://www.who.int/news-room/fact-sheets/detail/mental-health-strengthening-our-response",
    note: "Fact sheet on mental health as part of overall wellbeing, and on why care and community matter. It is not a service offered by this website.",
  },
} as const satisfies Record<string, CitedSource>;

export const sickleCellSourceList: CitedSource[] = [
  healthSources.who,
  healthSources.cdcAbout,
  healthSources.cdcTrait,
  healthSources.cdcScreening,
];

export const mentalHealthSourceList: CitedSource[] = [healthSources.whoMentalHealth];
