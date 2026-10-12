"use server";

import type { InquiryState } from "@/content/inquiry";
import { deliverInquiry } from "@/lib/inquiry-delivery";

const failedMessage =
  "Your note could not be sent. Please try again in a little while. No payment has been taken.";

const unconfiguredMessage =
  "This note could not be sent, because the foundation's enquiry route is not connected. Nothing was stored, and no payment has been taken.";

function clean(value: FormDataEntryValue | null) {
  return String(value ?? "").trim();
}

export async function submitContribution(
  _previous: InquiryState,
  formData: FormData,
): Promise<InquiryState> {
  if (clean(formData.get("company"))) {
    return {
      status: "success",
      message: "Thank you. Your note has been sent. No payment has been taken.",
      fieldErrors: {},
    };
  }

  const name = clean(formData.get("name"));
  const email = clean(formData.get("email"));
  const amount = clean(formData.get("amount"));
  const message = clean(formData.get("message"));
  const fieldErrors: Record<string, string> = {};

  if (name.length < 1 || name.length > 120) {
    fieldErrors.name = "Enter your name.";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 200) {
    fieldErrors.email = "Enter an email address like name@example.com.";
  }
  if (amount && !/^\d+(\.\d{1,2})?$/.test(amount)) {
    fieldErrors.amount = "Enter an amount as a number, such as 25 or 25.00, or leave it blank.";
  } else if (amount && Number(amount) <= 0) {
    fieldErrors.amount = "Enter an amount above zero, or leave it blank.";
  } else if (amount && Number(amount) > 1_000_000) {
    fieldErrors.amount = "Enter a smaller amount, or leave it blank.";
  }
  if (message.length > 5000) {
    fieldErrors.message = "Shorten the message to 5,000 characters or fewer.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Please check the form and try again. No payment has been taken.",
      fieldErrors,
    };
  }

  const result = await deliverInquiry({
    name,
    email,
    enquiryType: "fundraiser",
    message: message || "No message was included.",
    source: "donate",
    ...(amount ? { amount } : {}),
  });

  if (!result.delivered) {
    console.error(`Contribution note was not delivered (${result.reason}).`);
    return {
      status: "error",
      message: result.reason === "unconfigured" ? unconfiguredMessage : failedMessage,
      fieldErrors: {},
    };
  }

  return {
    status: "success",
    message:
      "Thank you. Your note of intent has been sent. No money has been taken, and this is not a receipt.",
    fieldErrors: {},
  };
}
