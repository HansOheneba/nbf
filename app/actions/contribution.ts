"use server";

import { isSupportArea, supportLabel } from "@/content/donate";
import type { InquiryState } from "@/content/inquiry";
import { deliverInquiry } from "@/lib/inquiry-delivery";

const failedMessage = "Your donation could not be sent. Please try again in a little while.";

const unconfiguredMessage = "Your donation could not be sent just now. Please try again later.";

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
      message: "Thank you. Your donation has been received.",
      fieldErrors: {},
    };
  }

  const name = clean(formData.get("name"));
  const email = clean(formData.get("email"));
  const amount = clean(formData.get("amount"));
  const message = clean(formData.get("message"));
  const initiative = clean(formData.get("initiative"));
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
  if (!isSupportArea(initiative)) {
    fieldErrors.initiative = "Choose the area you want to support.";
  } else if (initiative === "fundraiser") {
    fieldErrors.initiative = "Red for a Reason gifts use the campaign payment form on this page. This form does not take that payment.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Please check the form and try again.",
      fieldErrors,
    };
  }

  const area = isSupportArea(initiative) ? initiative : "general";
  const enquiryType =
    area === "general" ? "support" : area === "sickle-cell" ? "sickle-cell" : area;
  const result = await deliverInquiry({
    name,
    email,
    enquiryType,
    message: [`Area: ${supportLabel(area)}`, "", message || "No message was included."].join(
      "\n",
    ),
    source: "donate",
    ...(amount ? { amount } : {}),
  });

  if (!result.delivered) {
    console.error(`Donation was not delivered (${result.reason}).`);
    return {
      status: "error",
      message: result.reason === "unconfigured" ? unconfiguredMessage : failedMessage,
      fieldErrors: {},
    };
  }

  return {
    status: "success",
    message:
      "Thank you. Your donation has been received.",
    fieldErrors: {},
  };
}
