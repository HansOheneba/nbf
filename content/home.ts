export const homePage = {
  hero: {
    eyebrow: "Samaa Charity Projects",
    title: "Bridging the gap between circumstance and possibility.",
    paragraphs: [
      "We connect people who want to help with communities across Africa working to learn, heal and build a future of their own.",
      "Every gift, partnership and hour of time becomes a bridge: to a place in class, to care when it is needed, to a safe home and a fair start.",
    ],
    primary: { label: "Explore Causes", href: "/causes" },
    secondary: { label: "Get Involved", href: "/get-involved" },
  },
  purpose: {
    eyebrow: "What we stand for",
    mission: {
      label: "Our mission",
      statement:
        "To widen access to education, health and empowerment for people and communities across Africa, through initiatives built on dignity, partnership and accountability.",
    },
    vision: {
      label: "Our vision",
      statement:
        "An Africa where circumstance no longer decides who learns, who heals, and who gets to build a future.",
    },
    values: [
      { word: "Dignity", line: "Every person is met with respect, never pity." },
      { word: "Access", line: "We work on the barriers, not around them." },
      { word: "Together", line: "Change is shared work: givers, partners, communities." },
      { word: "Accountability", line: "Every cedi and every promise is accounted for." },
    ],
  },
  intro: {
    eyebrow: "Why Samaa",
    title: "Opportunity should not depend on circumstance.",
    paragraphs: [
      "For many people, barriers to education, healthcare, safe housing and economic opportunity can make everyday life harder and limit what the future holds.",
      "Samaa Charity Projects focuses on these interconnected needs through education, health, and empowerment. Health covers sickle cell, mental health, and women's health. Empowerment covers women's economic opportunity and housing.",
      "Our approach is centred on dignity, access and the belief that meaningful change begins by addressing the barriers people face.",
    ],
    cta: { label: "Discover Our Approach", href: "/about" },
  },
  focus: {
    eyebrow: "Our focus",
    title: "One shared purpose.",
    introduction:
      "Different challenges call for different forms of support. These causes touch lives, strengthen opportunities and help communities move forward.",
  },
  participate: {
    eyebrow: "How you can support",
    title: "There is more than one way to make a difference.",
    paragraphs: [
      "You can give, offer a skill, or help a cause reach further.",
      "Explore how you can support our initiatives, volunteer your time, discuss a partnership or contribute to a campaign.",
    ],
    routes: [
      { label: "Donate", href: "/donate", text: "Give to education, health, empowerment, housing, or a specific campaign." },
      { label: "Volunteer", href: "/get-involved#volunteering", text: "Offer time or a skill. There is no list of open roles." },
      { label: "Host a Susu Box", href: "/susu-box", text: "Keep a collection box at work, church or your shop. We collect it every three months." },
      { label: "Partnerships", href: "/get-involved#partnerships", text: "Start a conversation about working together." },
      { label: "Share an initiative", href: "/contact?topic=awareness", text: "Tell us about a conversation or activity you have in mind." },
    ],
  },
  close: {
    title: "A better future is something we can work towards together.",
    text: "Learn about the issues that matter, explore the causes we are developing and discover how you can contribute to a future shaped by greater access, dignity and opportunity.",
    cta: { label: "Explore Causes", href: "/causes" },
  },  philanthropy: {
    eyebrow: "The power of many",
    title: "Philanthropy is not a fortune. It is a habit.",
    lede: "We tend to think giving belongs to the wealthy. It does not. Most lasting change is paid for in small amounts, by ordinary people, again and again.",
    story: [
      { figure: "17.9 million", line: "adults live in Ghana." },
      { figure: "1 in 100", line: "If just one adult in every hundred said yes," },
      { figure: "GH₵10", line: "and gave GH₵10 a month, less than many of us spend on a meal out," },
      { figure: "GH₵21.5 million", line: "would be raised in a single year." },
    ],
    close: "Alone, it is loose change. Together, it is school fees paid, a child seen at a clinic, a roof that holds.",
    calculator: {
      title: "Try it with your own numbers.",
      peopleLabel: "How many people give",
      amountLabel: "Each gives, every month",
      resultLabel: "Together, in one year",
      people: [
        { label: "Your office", value: 50 },
        { label: "Your church", value: 500 },
        { label: "1 in 1,000 adults", value: 17_932 },
        { label: "1 in 100 adults", value: 179_317 },
      ],
      amounts: [5, 10, 20, 50],
    },
    note: "Illustrative arithmetic, not a forecast or the cost of a named programme. Adult population from the Ghana Statistical Service 2021 Population and Housing Census (17,931,673 people aged 18 and older).",
    sourceHref:
      "https://statsghana.gov.gh/gssmain/storage/img/marqueeupdater/2021%20PHC%20General%20Report%20Vol%203A,%203B%20and%203C%20Press%20release%20for%20General%20Report.pdf",
    cta: { label: "Give monthly", href: "/donate" },
    secondary: { label: "Host a Susu Box", href: "/susu-box" },
  },
};
