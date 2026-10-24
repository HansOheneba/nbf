"use server";

import type { InquiryState } from "@/content/inquiry";
import { susuBoxPage, susuPlaceLabel } from "@/content/susu-box";
import { deliverInquiry } from "@/lib/inquiry-delivery";

const failedMessage = "Your request could not be sent. Please try again in a little while.";

const unconfiguredMessage =
  "Susu Box requests are not open online just yet. Please try again soon, or write to us through the contact page.";

function clean(value: FormDataEntryValue | null) {
  return String(value ?? "").trim();
}

export async function submitSusuBoxRequest(
  _previous: InquiryState,
  formData: FormData,
): Promise<InquiryState> {
  if (clean(formData.get("company"))) {
    return {
      status: "success",
      message: "Thank you. Your request has been sent.",
      fieldErrors: {},
    };
  }

  const name = clean(formData.get("name"));
  const email = clean(formData.get("email"));
  const phone = clean(formData.get("phone"));
  const placeType = clean(formData.get("placeType"));
  const placeName = clean(formData.get("placeName"));
  const location = clean(formData.get("location"));
  const boxes = clean(formData.get("boxes"));
  const message = clean(formData.get("message"));
  const fieldErrors: Record<string, string> = {};

  if (name.length < 1 || name.length > 120) {
    fieldErrors.name = "Enter your name.";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 200) {
    fieldErrors.email = "Enter an email address like name@example.com.";
  }
  if (phone && !/^[+\d][\d\s()-]{6,20}$/.test(phone)) {
    fieldErrors.phone = "Enter a phone number using digits, spaces and an optional +, or leave it blank.";
  }
  if (!susuPlaceLabel(placeType)) {
    fieldErrors.placeType = "Choose where the box will live.";
  }
  if (placeName.length < 1 || placeName.length > 160) {
    fieldErrors.placeName = "Enter the name of the place, such as your company or church.";
  }
  if (location.length < 2 || location.length > 300) {
    fieldErrors.location = "Enter the area and town, such as East Legon, Accra.";
  }
  const count = Number(boxes);
  if (!Number.isInteger(count) || count < 1 || count > susuBoxPage.maxBoxes) {
    fieldErrors.boxes = `Choose between 1 and ${susuBoxPage.maxBoxes} boxes.`;
  }
  if (message.length > 2000) {
    fieldErrors.message = "Shorten the message to 2,000 characters or fewer.";
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
    enquiryType: "susu-box",
    source: "susu-box",
    message: [
      `Place: ${placeName} (${susuPlaceLabel(placeType)})`,
      `Location: ${location}`,
      `Boxes: ${count}`,
      `Phone: ${phone || "Not given"}`,
      "",
      message || "No message was included.",
    ].join("\n"),
  });

  if (!result.delivered) {
    console.error(`Susu Box request was not delivered (${result.reason}).`);
    return {
      status: "error",
      message: result.reason === "unconfigured" ? unconfiguredMessage : failedMessage,
      fieldErrors: {},
    };
  }

  return {
    status: "success",
    message: "Thank you. We have your request and will be in touch to arrange delivery.",
    fieldErrors: {},
  };
}
