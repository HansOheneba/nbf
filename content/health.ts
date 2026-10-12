export const healthReviewDate = "12 October 2026";

export const healthDisclaimer =
  "This is general information for public awareness. It is not personal medical advice, a diagnosis, or a recommendation about treatment. Nana Boatemah Foundation does not provide medical care, testing, or counselling. Questions about your own health, a test result, or care for someone else belong with a qualified healthcare professional.";

export type CitedSource = {
  title: string;
  publisher: string;
  href: string;
  note: string;
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
} as const satisfies Record<string, CitedSource>;

export const sickleCellSourceList: CitedSource[] = [
  healthSources.who,
  healthSources.cdcAbout,
  healthSources.cdcTrait,
  healthSources.cdcScreening,
];
