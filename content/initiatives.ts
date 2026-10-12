import { images, type GalleryImage } from "@/content/images";
import {
  healthDisclaimer,
  healthReviewDate,
  sickleCellSourceList,
  type CitedSource,
} from "@/content/health";

export type InitiativeSection = {
  id: string;
  heading: string;
  paragraphs: string[];
};

export const initiativesPage = {
  eyebrow: "Our initiatives",
  title: "Every important issue deserves attention.",
  paragraphs: [
    "Our initiatives are centred on issues that deserve greater understanding, informed conversations and meaningful community engagement.",
    "Sickle cell awareness is one area of focus. As the foundation develops, this page will bring together its initiatives, campaigns and educational work, making it easier to understand each cause and find ways to participate.",
  ],
};

export type Initiative = {
  slug: string;
  title: string;
  summary: string;
  introduction: string[];
  image: GalleryImage;
  sections: InitiativeSection[];
  sources: CitedSource[];
  reviewDate: string;
  disclaimer: string;
  cta: { label: string; href: string };
};

export const initiatives: Initiative[] = [
  {
    slug: "sickle-cell-awareness",
    title: "Sickle cell awareness",
    summary:
      "Understanding sickle cell disease starts with knowing the facts. Through awareness and education, we can encourage informed conversations, challenge stigma and help more people understand the importance of knowing their sickle cell status.",
    introduction: [
      "Sickle cell disease is an inherited blood disorder that can have a significant impact on health and everyday life. Yet misconceptions about the condition and the difference between sickle cell disease and sickle cell trait can make informed conversations difficult.",
      "Understanding starts with accurate information. Knowing your sickle cell status, asking questions and speaking with qualified health professionals can help people make informed decisions.",
      "Nana Boatemah Foundation seeks to make sickle cell awareness part of a wider conversation about knowledge, understanding and informed choices.",
    ],
    image: images.library,
    reviewDate: healthReviewDate,
    disclaimer: healthDisclaimer,
    cta: {
      label: "Learn About Sickle Cell",
      href: "/initiatives/sickle-cell-awareness",
    },
    sources: sickleCellSourceList,
    sections: [
      {
        id: "what-it-is",
        heading: "What sickle cell disease is",
        paragraphs: [
          "Sickle cell disease is a group of inherited blood disorders. The World Health Organization describes it as a condition caused by a change in the gene that instructs the body how to make haemoglobin, the protein in red blood cells that carries oxygen. Red blood cells can become rigid and sickle-shaped. Those cells can block blood flow, which can cause severe pain and damage to organs.",
          "The U.S. Centers for Disease Control and Prevention explains the same idea in everyday language: healthy red blood cells are round and move through small blood vessels, while in sickle cell disease they can become hard and sticky, die early, and clog the flow of blood. That shortage of red blood cells is a form of anaemia. Pain, infection, and other complications can follow. How the condition shows up differs from person to person, and from one type of sickle cell disease to another.",
          "WHO notes that the condition is most common in people whose ancestry is African, Mediterranean, Middle Eastern, or Indian. Citing 2021 estimates, WHO reports that about 7.74 million people were living with sickle cell disease worldwide, with nearly 80 percent of cases in sub-Saharan Africa. Those figures describe a global public-health picture. They are not results from this foundation.",
          "The condition is inherited. It is not caught by touch, by sharing food, or by being near someone who has it. WHO explains that a person develops sickle cell disease when they inherit an altered haemoglobin gene from each parent. A blood test is how the condition is identified. This page cannot tell you whether you or anyone else has it.",
        ],
      },
      {
        id: "trait-and-disease",
        heading: "Sickle cell disease and sickle cell trait",
        paragraphs: [
          "Sickle cell trait is not the same thing as sickle cell disease. CDC describes trait as what a person has when they inherit one sickle cell gene and one usual haemoglobin gene. People with trait usually do not have the symptoms of sickle cell disease. They can still pass the gene to their children.",
          "WHO draws the same line: one altered copy and one usual copy means trait, and people with trait usually do not show the symptoms of the disease. Two altered copies, one from each parent, is how sickle cell disease occurs.",
          "CDC sets out the chances when both parents have sickle cell trait. For any child, there is a 1 in 2 chance of inheriting trait, a 1 in 4 chance of inheriting sickle cell disease, and a 1 in 4 chance of inheriting neither. Those chances apply to each pregnancy. They are not a prediction about a particular family, and other gene combinations can also matter. A qualified healthcare professional or genetic counsellor is the right person to explain a specific result.",
          "Confusing the two is one reason stigma and misunderstanding take hold. Someone can carry trait, live without the illness, and still have a reason to know their status before having children. Someone living with the disease needs understanding, not suspicion. The longer explanation is in our article on the difference between trait and disease.",
        ],
      },
      {
        id: "why-awareness",
        heading: "Why awareness and accurate information matter",
        paragraphs: [
          "Misconceptions make ordinary conversations harder. People may not know that the condition is inherited, may treat trait and disease as the same thing, or may never have heard why a blood test matters. Silence leaves those ideas unchallenged.",
          "Awareness, in the sense this foundation uses the word, means making room for a better conversation. It means a fact can be checked, a question can be asked without shame, and a person can find a public source rather than a rumour. WHO treats sickle cell disease as an important public-health concern and includes public understanding among the ways the burden of the condition can be addressed. Education does not replace medical care. It can help more people know when care, testing, or a conversation with a clinician is the right next step.",
          "Nana Boatemah Foundation is contributing educational pages and links to health authorities. That is the work described here. It is not a record of clinics run, people treated, or funds raised.",
        ],
      },
      {
        id: "screening",
        heading: "Screening, and speaking with a healthcare professional",
        paragraphs: [
          "CDC uses the phrase “knowing your sickle cell status” for the result of a blood test that shows whether a person has sickle cell disease, sickle cell trait, or neither. Status is not something a person can reliably judge by how they feel, or by family stories alone. The fact sheet says a blood test is required.",
          "CDC says screening is especially important for people who may have children, because sickle cell disease and trait are passed through genes. The same fact sheet notes that a person with trait could have a child with sickle cell disease if their partner has sickle cell disease, trait, or another haemoglobin change such as haemoglobin C or beta-thalassemia. Only a clinician can explain what a particular pair of results means.",
          "For babies, CDC says screening should happen even when a newborn looks healthy, because sickle cell disease can cause severe health problems early in life if it is not found and treated. In the United States, CDC says babies are screened in all 50 states and the District of Columbia, as early as 24 to 48 hours after birth, as part of newborn screening. A positive newborn screen still needs follow-up testing. It is not, by itself, the final word.",
          "Screening programmes are not the same in every country. This foundation does not carry out tests and cannot tell you where to go. Ask a qualified healthcare professional, a local clinic, or the health service where you live what test is used and how to read the result. Do not send test results or medical details through the form on this website.",
        ],
      },
      {
        id: "further-information",
        heading: "Where to find trustworthy information",
        paragraphs: [
          "The sources linked on this page are public pages from the World Health Organization and the U.S. Centers for Disease Control and Prevention. They are the references used for the facts above. Health guidance is updated, so the dated pages themselves are a better authority than a summary of them.",
          "On this website, three shorter articles go further into the basics of the disease, the difference between trait and disease, and knowing your status. They are educational resources, written for sharing. They are not personal stories, and they are not a substitute for the source pages or for a clinician.",
        ],
      },
    ],
  },
];

export function getInitiative(slug: string) {
  return initiatives.find((item) => item.slug === slug);
}

export const featuredInitiative = initiatives[0];
