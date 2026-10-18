"use server";

import { headers } from "next/headers";
import { campaign, parseCedis, suggestedAmounts, type DonationState } from "@/content/campaign";
import { initialiseCampaignPayment, paymentOrigin } from "@/lib/campaign-payment";

const presets = new Set<string>(suggestedAmounts.map(String));

function clean(value: FormDataEntryValue | null) {
  return String(value ?? "").trim();
}

export async function submitCampaignDonation(
  _previous: DonationState,
  formData: FormData,
): Promise<DonationState> {
  if (clean(formData.get("company"))) {
    return {
      status: "error",
      message: "This submission could not be accepted. No payment has been taken.",
      fieldErrors: {},
    };
  }

  const choice = clean(formData.get("amountChoice"));
  const other = clean(formData.get("amountOther"));
  const name = clean(formData.get("name"));
  const email = clean(formData.get("email"));
  const anonymous = clean(formData.get("anonymous")) === "yes";
  const fieldErrors: Record<string, string> = {};

  const parsed = presets.has(choice) ? parseCedis(choice) : choice === "other" ? parseCedis(other) : null;
  if (!parsed) {
    fieldErrors.amount = "Choose a suggested amount, or enter another amount.";
  } else if (!parsed.ok) {
    fieldErrors.amount = parsed.error;
  }

  if (!anonymous && (name.length < 1 || name.length > 120)) {
    fieldErrors.name = "Enter your name, or choose to give without public acknowledgement.";
  } else if (name.length > 120) {
    fieldErrors.name = "Enter a shorter name.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 200) {
    fieldErrors.email = "Enter an email address like name@example.com. It is used for the receipt.";
  }

  if (Object.keys(fieldErrors).length > 0 || !parsed || !parsed.ok) {
    return {
      status: "error",
      message: "Please check the form and try again. No payment has been taken.",
      fieldErrors,
    };
  }

  const origin = paymentOrigin(await headers());
  if (!origin) {
    return {
      status: "error",
      message: "The payment page could not be opened. No payment has been taken. Please try again in a little while.",
      fieldErrors: {},
    };
  }

  const result = await initialiseCampaignPayment({
    email,
    minor: parsed.minor,
    anonymous,
    donorName: name,
    callbackUrl: `${origin}${campaign.returnPath}`,
  });

  if (!result.ok) {
    return {
      status: "error",
      message: "The payment page could not be opened. No payment has been taken. Please try again in a little while.",
      fieldErrors: {},
    };
  }

  return {
    status: "redirect",
    message: "Opening the secure payment page. No contribution is received until that payment is confirmed.",
    fieldErrors: {},
    redirectUrl: result.authorizationUrl,
  };
}
