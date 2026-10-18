"use server";

import { auctionLotKinds, inKindKinds, isCampaignEnquiryKind } from "@/content/campaign";
import type { InquiryState } from "@/content/inquiry";
import { deliverInquiry } from "@/lib/inquiry-delivery";

const failedMessage = "Your enquiry could not be sent. Nothing was submitted. Please try again in a little while.";

function clean(value: FormDataEntryValue | null) {
  return String(value ?? "").trim();
}

function labelFor(options: readonly { value: string; label: string }[], value: string) {
  return options.find((item) => item.value === value)?.label;
}

export async function submitCampaignEnquiry(
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

  const kind = clean(formData.get("kind"));
  const name = clean(formData.get("name"));
  const email = clean(formData.get("email"));
  const organisation = clean(formData.get("organisation"));
  const role = clean(formData.get("role"));
  const offerKind = clean(formData.get("offerKind"));
  const message = clean(formData.get("message"));
  const fieldErrors: Record<string, string> = {};

  if (!isCampaignEnquiryKind(kind)) {
    return {
      status: "error",
      message: "The form could not be submitted. Please reload the page and try again.",
      fieldErrors: {},
    };
  }

  if (name.length < 1 || name.length > 120) fieldErrors.name = "Enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 200) {
    fieldErrors.email = "Enter an email address like name@example.com.";
  }
  if (organisation.length > 160) fieldErrors.organisation = "Enter a shorter organisation name.";
  if (role.length > 120) fieldErrors.role = "Enter a shorter role.";

  if (kind === "sponsorship" && organisation.length < 2) {
    fieldErrors.organisation = "Enter the organisation you are writing for.";
  }

  if (kind === "auction" && !labelFor(auctionLotKinds, offerKind)) {
    fieldErrors.offerKind = "Choose the kind of lot you want to offer.";
  }
  if (kind === "in-kind" && !labelFor(inKindKinds, offerKind)) {
    fieldErrors.offerKind = "Choose the kind of support you want to offer.";
  }

  const minimum = kind === "rsvp" ? 0 : kind === "general" || kind === "sponsorship" ? 10 : 20;
  if (message.length < minimum || message.length > 5000) {
    fieldErrors.message =
      kind === "rsvp"
        ? "Shorten the note to 5,000 characters or fewer."
        : minimum === 10
          ? "Enter a message of at least 10 characters."
          : "Describe the offer in at least 20 characters, including what is included and any limit.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Please check the form and try again. Nothing was submitted.",
      fieldErrors,
    };
  }

  const enquiryType =
    kind === "sponsorship"
      ? "campaign-sponsorship"
      : kind === "auction"
        ? "campaign-auction"
        : kind === "in-kind"
          ? "campaign-in-kind"
          : kind === "rsvp"
            ? "campaign-rsvp"
            : "campaign-general";

  const lines = [
    kind === "sponsorship" ? `Organisation: ${organisation}` : "",
    kind === "sponsorship" && role ? `Role: ${role}` : "",
    kind !== "sponsorship" && organisation ? `Organisation: ${organisation}` : "",
    kind === "auction" ? `Lot offered: ${labelFor(auctionLotKinds, offerKind)}` : "",
    kind === "in-kind" ? `Support offered: ${labelFor(inKindKinds, offerKind)}` : "",
    kind === "rsvp" ? "Request: one place at the 19 December 2026 afternoon." : "",
    "",
    message || (kind === "rsvp" ? "No note was included." : ""),
    "",
    "This message is an enquiry only. It does not confirm a partnership, auction lot, in-kind gift, or place at the event.",
  ].filter((line) => line !== "");

  const result = await deliverInquiry({
    name,
    email,
    enquiryType,
    message: lines.join("\n"),
    source: "campaign",
  });

  if (!result.delivered) {
    console.error(`Campaign enquiry was not delivered (${result.reason}).`);
    return {
      status: "error",
      message: failedMessage,
      fieldErrors: {},
    };
  }

  const confirmation =
    kind === "sponsorship"
      ? "Thank you. Your partnership enquiry has been sent. It is not a confirmed sponsorship."
      : kind === "auction"
        ? "Thank you. Your offer has been sent. It is not a confirmed auction lot until it is agreed in writing."
        : kind === "in-kind"
          ? "Thank you. Your offer has been sent. It is not accepted, and it is not counted as cash, until it is agreed."
          : kind === "rsvp"
            ? "Thank you. Your request to attend has been sent. It does not confirm your place. Our team will get in touch about availability."
            : "Thank you. Your message has been sent. A reply does not reserve a place at the afternoon.";

  return { status: "success", message: confirmation, fieldErrors: {} };
}
