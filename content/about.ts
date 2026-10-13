import { programmes } from "@/content/programmes";

export const aboutIntro = {
  eyebrow: "About Samaa",
  title: "Built around the things that matter.",
  paragraphs: [
    "Samaa Charity Projects is focused on areas of need that have a direct bearing on people's lives and future opportunities.",
    "From access to education and health to the need for safe shelter and greater economic opportunity for women, our causes are centred on reducing barriers and supporting dignity.",
    "We believe charitable work should be grounded in real needs, communicated honestly and developed with respect for the people and communities it seeks to serve.",
  ],
};

export const aboutPurpose = {
  id: "purpose",
  title: "Our purpose",
  paragraphs: [
    "Every person deserves the opportunity to learn, live with dignity, access essential care and build a better future.",
    "At Samaa Charity Projects, we focus on practical areas of need — from education and health to housing and women's empowerment. Through initiatives centred on access, opportunity and dignity, we aim to support people and communities facing barriers to the essentials of a fulfilling life.",
    "That is the direction of this website. It is not presented here as a formally adopted mission statement, and it is not a record of completed projects.",
  ],
};

export const aboutApproach = {
  id: "approach",
  title: "Our approach",
  paragraphs: [
    "The causes are organised around needs that connect. A person kept from school, from care, from a safe place to sleep, or from the means to earn can feel those limits at once.",
    "Samaa Charity Projects treats those needs as areas to develop with care: named clearly, explained without spectacle, and offered as ways for people to take part rather than as claims of what has already been achieved.",
    "Initiatives are centred on Africa. Where a page cites a health authority, the citation is there so a reader can check the source. Where a page describes a focus, it describes a direction, not a finished programme.",
  ],
};

export const aboutAreas = programmes.map((item) => ({
  title: item.navLabel,
  href: item.href,
  text: item.summary,
}));

export const aboutSupport = {
  id: "support",
  title: "How you can support",
  paragraphs: [
    "There is more than one way to take part. A contribution note, an offer of time, a partnership conversation, or a message about sharing an initiative are all open routes on this site.",
    "None of those forms confirms a payment, a placement, or a partnership. They tell Samaa Charity Projects what you would like to discuss. We will read the message and reply.",
  ],
};
