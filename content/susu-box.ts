export const susuBoxPage = {
  path: "/susu-box",
  eyebrow: "The Samaa Susu Box",
  title: "Small change. Shared change.",
  lede: "Keep a Samaa Susu Box where you work, worship or trade. Drop in your loose change, a note on payday, whatever you can spare. Every three months we come and collect it, count it and tell you what it raised.",
  steps: [
    {
      title: "Request a box",
      text: "Tell us where it will live and how many you need. One box for a small office, a few for a church or market.",
    },
    {
      title: "We bring it to you",
      text: "Each box is sealed and numbered, so every collection can be matched to the place it came from.",
    },
    {
      title: "Fill it, a little at a time",
      text: "Coins, notes, the change from lunch. Nothing is too small. It adds up quietly while you get on with your day.",
    },
    {
      title: "We collect every three months",
      text: "Two members of the team open and count the box together, record the total, and send you a note of what it raised.",
    },
  ],
  cadence: {
    months: 3,
    label: "Collected every three months",
  },
  promises: {
    title: "How the money is looked after",
    items: [
      "Boxes are sealed and numbered before they leave us.",
      "Two people open and count each box together. One person never handles it alone.",
      "Every count is recorded against the box number and shared with the host.",
      "The money goes to the cause you choose, or to wherever the need is greatest.",
    ],
  },
  placeTypes: [
    { value: "workplace", label: "Workplace or office" },
    { value: "worship", label: "Church or mosque" },
    { value: "school", label: "School or university" },
    { value: "shop", label: "Shop, salon or market stall" },
    { value: "home", label: "Home or family" },
    { value: "other", label: "Somewhere else" },
  ],
  maxBoxes: 10,
} as const;

export type SusuPlaceType = (typeof susuBoxPage.placeTypes)[number]["value"];

export function susuPlaceLabel(value: string) {
  return susuBoxPage.placeTypes.find((item) => item.value === value)?.label;
}
