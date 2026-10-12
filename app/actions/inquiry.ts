"use server";

import { isEnquiryValue, type InquiryState } from "@/content/inquiry";
import { deliverInquiry } from "@/lib/inquiry-delivery";

const deliveryMessage =
  "Your message could not be sent. Please try again in a little while.";

function clean(value: FormDataEntryValue | null) {
  return String(value ?? "").trim();
}

export async function submitInquiry(
  _previous: InquiryState,
  formData: FormData,
): Promise<InquiryState> {
  if (clean(formData.get("company"))) {
    return {
      status: "success",
      message: "Thank you. Your message has been sent.",
      fieldErrors: {},
    };
  }

  const name = clean(formData.get("name"));
  const email = clean(formData.get("email"));
  const enquiryType = clean(formData.get("enquiryType"));
  const message = clean(formData.get("message"));
  const source = clean(formData.get("source"));
  const fieldErrors: Record<string, string> = {};

  if (name.length < 1 || name.length > 120) {
    fieldErrors.name = "Enter your name.";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 200) {
    fieldErrors.email = "Enter an email address like name@example.com.";
  }
  if (!isEnquiryValue(enquiryType)) {
    fieldErrors.enquiryType = "Choose an enquiry type.";
  }
  if (message.length < 10 || message.length > 5000) {
    fieldErrors.message = "Enter a message of at least 10 characters.";
  }
  if (source !== "contact" && source !== "get-involved") {
    return {
      status: "error",
      message: "The form could not be submitted. Please reload the page and try again.",
      fieldErrors,
    };
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Please check the form and try again.",
      fieldErrors,
    };
  }

  const result = await deliverInquiry({
    name,
    email,
    enquiryType,
    message,
    source,
  });

  if (!result.delivered) {
    console.error(`Inquiry was not delivered (${result.reason}).`);
    return {
      status: "error",
      message: deliveryMessage,
      fieldErrors: {},
    };
  }

  return {
    status: "success",
    message: "Thank you. Your message has been sent, and we will read it.",
    fieldErrors: {},
  };
}
