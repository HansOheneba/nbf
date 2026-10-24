const listedEnquiryTypes = [
  { value: "question", label: "A question" },
  { value: "education", label: "Education" },
  { value: "literacy", label: "Literacy" },
  { value: "scholarship", label: "Scholarships" },
  { value: "health", label: "Health" },
  { value: "sickle-cell", label: "Sickle Cell" },
  { value: "mental-health", label: "Mental Health" },
  { value: "womens-health", label: "Women's Health" },
  { value: "empowerment", label: "Empowerment" },
  { value: "women-empowerment", label: "Women's Empowerment" },
  { value: "economic", label: "Economic Empowerment" },
  { value: "housing", label: "Housing" },
  { value: "awareness", label: "Sharing an initiative" },
  { value: "volunteering", label: "Volunteering" },
  { value: "partnership", label: "A partnership" },
  { value: "collaboration", label: "A collaboration" },
  { value: "support", label: "Supporting a cause" },
  { value: "safeguarding", label: "A safeguarding concern" },
  { value: "fundraiser", label: "Red for a Reason" },
  { value: "other", label: "Something else" },
] as const;

const campaignEnquiryTypes = [
  { value: "campaign-sponsorship", label: "Red for a Reason sponsorship" },
  { value: "campaign-auction", label: "Red for a Reason auction lot" },
  { value: "campaign-in-kind", label: "Red for a Reason in-kind support" },
  { value: "campaign-general", label: "Red for a Reason enquiry" },
  { value: "campaign-rsvp", label: "Red for a Reason attendance request" },
] as const;

const otherEnquiryTypes = [{ value: "susu-box", label: "Susu Box request" }] as const;

export const enquiryTypes = [
  ...listedEnquiryTypes,
  ...campaignEnquiryTypes,
  ...otherEnquiryTypes,
] as const;

/** Shown on the general contact and Get Involved forms. */
export const publicEnquiryTypes = listedEnquiryTypes;

export type EnquiryValue = (typeof enquiryTypes)[number]["value"];

const enquiryValues = new Set<string>(enquiryTypes.map((item) => item.value));

export function isEnquiryValue(value: string): value is EnquiryValue {
  return enquiryValues.has(value);
}

export function enquiryLabel(value: string) {
  return enquiryTypes.find((item) => item.value === value)?.label ?? value;
}

export type InquiryState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors: Record<string, string>;
};

export const initialInquiryState: InquiryState = {
  status: "idle",
  message: "",
  fieldErrors: {},
};
