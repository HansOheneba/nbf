import { enquiryLabel } from "@/content/inquiry";

export type InquiryPayload = {
  name: string;
  email: string;
  enquiryType: string;
  message: string;
  source: "contact" | "get-involved";
};

export type DeliveryResult =
  | { delivered: true }
  | { delivered: false; reason: "unconfigured" | "failed" };

/**
 * Delivery needs one of these environments:
 * - INQUIRY_WEBHOOK_URL, a server-side URL that accepts a JSON POST
 * - or RESEND_API_KEY, INQUIRY_TO_EMAIL, and INQUIRY_FROM_EMAIL
 *   (INQUIRY_FROM_EMAIL must be a sender Resend has verified)
 * Nothing is stored when delivery is not configured or does not succeed.
 */
export async function deliverInquiry(input: InquiryPayload): Promise<DeliveryResult> {
  const webhook = process.env.INQUIRY_WEBHOOK_URL?.trim();
  const resendKey = process.env.RESEND_API_KEY?.trim();
  const to = process.env.INQUIRY_TO_EMAIL?.trim();
  const from = process.env.INQUIRY_FROM_EMAIL?.trim();
  const submittedAt = new Date().toISOString();

  if (webhook) {
    try {
      const response = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...input, submittedAt }),
      });
      return response.ok ? { delivered: true } : { delivered: false, reason: "failed" };
    } catch {
      return { delivered: false, reason: "failed" };
    }
  }

  if (resendKey && to && from) {
    try {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from,
          to: [to],
          reply_to: input.email,
          subject: `Enquiry: ${enquiryLabel(input.enquiryType)} — ${input.name.replace(/[\r\n]+/g, " ")}`,
          text: [
            `Name: ${input.name}`,
            `Email: ${input.email}`,
            `Enquiry: ${enquiryLabel(input.enquiryType)}`,
            `Page: ${input.source}`,
            `Sent: ${submittedAt}`,
            "",
            input.message,
          ].join("\n"),
        }),
      });
      return response.ok ? { delivered: true } : { delivered: false, reason: "failed" };
    } catch {
      return { delivered: false, reason: "failed" };
    }
  }

  return { delivered: false, reason: "unconfigured" };
}
