export const enquiryTypes = [
  { value: "question", label: "A question" },
  { value: "education", label: "Education" },
  { value: "health", label: "Health" },
  { value: "sickle-cell", label: "Sickle cell" },
  { value: "mental-health", label: "Mental health" },
  { value: "housing", label: "Housing" },
  { value: "women-empowerment", label: "Women's economic empowerment" },
  { value: "menstrual-health", label: "Menstrual health" },
  { value: "awareness", label: "Sharing an initiative" },
  { value: "volunteering", label: "Volunteering" },
  { value: "partnership", label: "A partnership" },
  { value: "collaboration", label: "A collaboration" },
  { value: "support", label: "Supporting a cause" },
  { value: "fundraiser", label: "The 19 December fundraiser" },
  { value: "other", label: "Something else" },
] as const;

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
