import { images, type GalleryImage } from "@/content/images";
import {
  healthDisclaimer,
  healthReviewDate,
  healthSources,
  type CitedSource,
} from "@/content/health";

export type ArticleSection = {
  id: string;
  heading: string;
  paragraphs: string[];
};

export type Article = {
  slug: string;
  title: string;
  summary: string;
  kind: string;
  image: GalleryImage;
  reviewDate: string;
  disclaimer: string;
  sections: ArticleSection[];
  sources: CitedSource[];
  related: string[];
};

export const articles: Article[] = [
  {
    slug: "sickle-cell-disease-basics",
    title: "Sickle Cell Disease: Understanding the Basics",
    summary:
      "What sickle cell disease is, how it is inherited, and why a public explanation still has to stay close to the health authorities that publish the facts.",
    kind: "Educational article",
    image: images.library,
    reviewDate: healthReviewDate,
    disclaimer: healthDisclaimer,
    related: ["sickle-cell-trait-and-disease", "knowing-your-sickle-cell-status"],
    sources: [healthSources.who, healthSources.cdcAbout, healthSources.cdcTrait],
    sections: [
      {
        id: "an-inherited-condition",
        heading: "An inherited blood disorder",
        paragraphs: [
          "Sickle cell disease is a group of inherited blood disorders. It is present because of genes passed from parents to a child. It is not an infection, and it does not spread through ordinary contact.",
          "The World Health Organization describes the cause as a mutation in the HBB gene, which carries the instructions for haemoglobin. Haemoglobin is the protein in red blood cells that carries oxygen. When a person inherits two copies of the altered gene, one from each parent, they have sickle cell disease. Sickle cell anaemia, in which both copies instruct the body to make haemoglobin S, is the most severe form WHO names.",
          "The U.S. Centers for Disease Control and Prevention describes several types. The type depends on the genes inherited. Alongside haemoglobin S from both parents, a person may inherit haemoglobin S together with another haemoglobin change, such as haemoglobin C or beta-thalassemia. Severity differs. This article does not try to sort one person’s type from another’s. That is a clinical question.",
        ],
      },
      {
        id: "in-the-blood",
        heading: "What changes in the blood",
        paragraphs: [
          "CDC’s overview puts the change in plain sight. Usual red blood cells are round. They move through small blood vessels and carry oxygen. In sickle cell disease, abnormal haemoglobin can make red blood cells hard, sticky, and curved, in the shape that gives the condition its name. Those cells die earlier than usual, so the body is short of red blood cells. They can also jam in small vessels and slow or block blood flow.",
          "WHO connects that blockage to pain and to injury in organs. The fact sheet lists complications that can include sudden episodes of severe pain, anaemia, stroke, serious infections, kidney problems, and risks in pregnancy. CDC adds acute chest syndrome, a dangerous problem in the lungs, among the complications it names. None of this is a checklist for deciding that someone has the condition. Pain and tiredness have many causes. Only a blood test, read by a qualified professional, identifies sickle cell disease.",
        ],
      },
      {
        id: "who-is-affected",
        heading: "Who is affected, and what that does not mean",
        paragraphs: [
          "WHO says sickle cell disease is most common in people of African, Mediterranean, Middle Eastern, and Indian descent. The same fact sheet, citing estimates for 2021, reports about 7.74 million people living with the disease worldwide and about 515,000 babies born with it that year, with nearly 80 percent of cases in sub-Saharan Africa. The concentration is a reason for public awareness. It is not a reason to assume that anyone from those parts of the world has the condition, or that people with other ancestry cannot have it.",
          "CDC notes that in the United States the condition is often found at birth through newborn screening. What a health system offers depends on the country. A global number is context. It is not a description of Nana Boatemah Foundation’s work, and this foundation has not published impact figures of its own.",
        ],
      },
      {
        id: "why-the-basics-matter",
        heading: "Why the basics are worth sharing",
        paragraphs: [
          "A short, accurate account gives people something better than a rumour. It can help a family ask a clearer question, tell disease from trait, and know that testing exists. WHO includes public awareness among the responses to sickle cell disease as a public-health issue. Sharing a sourced explanation is one small part of that. It does not treat anyone.",
          "If you want the distinction between trait and disease, or a closer look at screening, read the other two articles in this series. For a decision about your own health, speak with a qualified healthcare professional. The source pages linked below are the documents this article was checked against.",
        ],
      },
    ],
  },
  {
    slug: "sickle-cell-trait-and-disease",
    title: "Sickle Cell Trait and Sickle Cell Disease: What's the Difference?",
    summary:
      "Trait and disease are related, and they are not interchangeable. Here is the distinction health authorities draw, including how trait is passed on.",
    kind: "Educational article",
    image: images.conversation,
    reviewDate: healthReviewDate,
    disclaimer: healthDisclaimer,
    related: ["sickle-cell-disease-basics", "knowing-your-sickle-cell-status"],
    sources: [healthSources.cdcTrait, healthSources.who, healthSources.cdcAbout],
    sections: [
      {
        id: "two-results",
        heading: "Two results that often get collapsed into one",
        paragraphs: [
          "People often hear “sickle cell” and stop there. Health authorities do not. Sickle cell disease is an illness caused by inheriting altered haemoglobin genes from both parents. Sickle cell trait is the result of inheriting one sickle cell gene and one usual gene. CDC states that people with trait usually do not have the symptoms of sickle cell disease. WHO says the same: people with trait usually do not exhibit symptoms of the disease.",
          "The practical difference is large. A person with trait is usually well, and still carries a gene they can pass on. A person with the disease may live with pain, anaemia, infection risk, and other complications, and needs medical care rather than a correction of vocabulary. Using one name for both can frighten someone who only carries the gene, and it can make light of what the disease involves.",
        ],
      },
      {
        id: "how-it-is-passed-on",
        heading: "How trait is passed on",
        paragraphs: [
          "CDC explains the pattern when both parents have sickle cell trait. For any child there is a 50 percent, or 1 in 2, chance of sickle cell trait. There is a 25 percent, or 1 in 4, chance of sickle cell disease. There is the same 25 percent chance that the child will have neither trait nor disease. Each pregnancy is a new event. The pattern does not mean that one child in four of a family will certainly have the disease.",
          "Other pairings matter too. CDC’s screening fact sheet says a person with trait could have a baby with sickle cell disease if their partner has the disease, trait, or another abnormal haemoglobin gene, such as haemoglobin C or beta-thalassemia. This article does not turn those pairings into a table of odds. A genetic counsellor or another qualified clinician can do that for a real result. What is safe to say here is that trait is not “nothing,” because the gene can be inherited, and it is also not the disease itself.",
        ],
      },
      {
        id: "living-with-trait",
        heading: "What CDC says about living with trait",
        paragraphs: [
          "Most people with sickle cell trait do not have symptoms of the disease. CDC also says that some people with trait do experience complications, and that in rare cases extreme conditions can be harmful. The examples it gives include very low oxygen, dehydration, high altitude, and extremely intense physical effort, such as hard training in severe heat or at altitude. Blood in the urine, a problem in the spleen, and eye trouble after an injury are among the uncommon problems CDC discusses. More research, CDC says, is needed to explain why some people with trait are affected and others are not.",
          "Those points are a reason to tell a clinician that you have trait if you are planning strenuous activity, travel to high altitude, or you notice symptoms such as blood in the urine. They are not a reason to treat trait as if it were sickle cell disease, and they are not advice about how an individual should train or travel. Personal risk is a medical conversation.",
        ],
      },
      {
        id: "why-the-word-matters",
        heading: "Why the distinction belongs in public conversation",
        paragraphs: [
          "Stigma grows where the words are blurry. Someone may hide a family history because they think trait means they are ill. Someone else may dismiss a person living with the disease because they have met people with trait who are well. Accurate language is a form of respect. It lets people ask for a test, explain a result, and support one another without guessing.",
          "If you do not know whether you have trait, disease, or neither, the next article is about screening. Knowing the difference on the page is not the same as knowing your own status.",
        ],
      },
    ],
  },
  {
    slug: "knowing-your-sickle-cell-status",
    title: "Knowing Your Sickle Cell Status",
    summary:
      "Status means the result of a proper blood test. This article explains why health authorities ask people to find out, and what a screening result does and does not settle.",
    kind: "Educational article",
    image: images.profile,
    reviewDate: healthReviewDate,
    disclaimer: healthDisclaimer,
    related: ["sickle-cell-disease-basics", "sickle-cell-trait-and-disease"],
    sources: [healthSources.cdcScreening, healthSources.cdcTrait, healthSources.cdcAbout, healthSources.who],
    sections: [
      {
        id: "what-status-means",
        heading: "What “status” means",
        paragraphs: [
          "CDC uses “sickle cell status” for the answer to a specific question: does a person have sickle cell disease, sickle cell trait, or neither? The fact sheet is direct about how that answer is found. Blood tests have to be done. Feeling well is not a result. A family story, however important, is not a result either.",
          "WHO and CDC both describe diagnosis as a blood test that looks for the abnormal haemoglobin. CDC says that in children born in the United States, the condition is most often found through newborn screening, and that further tests can be used. The name of the test and the way results are reported can differ by laboratory and by country. A clinician is the person who should interpret a report.",
        ],
      },
      {
        id: "why-find-out",
        heading: "Why find out",
        paragraphs: [
          "CDC says getting screened matters a great deal for people at an age when they may have children, because the genes can be passed on. Knowing your own status, and a partner’s, is what makes an informed conversation about that possibility possible. If both people have trait, CDC’s trait page sets out a 1 in 4 chance that a child will have sickle cell disease, a 1 in 2 chance of trait, and a 1 in 4 chance of neither. If a partner has the disease or another haemoglobin change, the implications are different, and they need a professional explanation.",
          "There is a second reason, and it is about care rather than family planning. CDC says newborns should be screened even when they look healthy. If sickle cell disease is not found and treated, it can lead to severe health problems and even death early in childhood. That is an argument for screening programmes and for follow-up, not a prediction about any one child. Adults who do not know their status, including people who missed newborn screening or who were born where it was not offered, can ask about a test.",
        ],
      },
      {
        id: "newborn-screening",
        heading: "Newborn screening, and why local advice still matters",
        paragraphs: [
          "CDC’s fact sheet describes newborn screening in the United States. Babies should be screened as early as 24 to 48 hours after birth. All 50 states and the District of Columbia include sickle cell status in newborn screening. CDC also says a positive screen means a condition is likely and that the baby’s doctor needs to arrange more testing to be sure. Infants born in the United States after 2006 should have newborn screening information in the medical record, and a parent can ask the child’s physician about it.",
          "That is a description of one health system. It is not a map of every country. WHO stresses early diagnosis because it helps prevent complications, without setting out a single worldwide programme on the fact sheet used here. If you are outside the United States, or you are unsure what was done when you or your child was born, ask a local clinic or a qualified healthcare professional. Nana Boatemah Foundation does not run screening, store results, or book appointments.",
        ],
      },
      {
        id: "after-a-result",
        heading: "After a result",
        paragraphs: [
          "A result is information, not a set of instructions from this website. People with trait are usually well and can pass the gene on. People with sickle cell disease need medical care that this foundation does not provide. CDC suggests talking with a doctor or health clinic about testing if you may be at risk, and asking a physician, a local clinic, or a community sickle cell organisation where testing is available near you. Which of those exists depends on where you live.",
          "Please do not send symptoms, test results, or another person’s medical details through the contact form. Use it for questions about the foundation. Use a health service for questions about a body. The pages linked below are the ones this article was checked against on the review date.",
        ],
      },
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function relatedArticles(article: Article) {
  return article.related
    .map((slug) => getArticle(slug))
    .filter((item): item is Article => Boolean(item));
}
