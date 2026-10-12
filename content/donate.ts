/**
 * Set NEXT_PUBLIC_DONATION_URL to an approved payment page when one exists.
 * Until then, contribution links open the enquiry on /donate.
 * That form records an intention. It does not take payment.
 */
export const donationUrl = process.env.NEXT_PUBLIC_DONATION_URL?.trim() || undefined;

export function contributionHref() {
  return donationUrl ?? "/donate";
}

export const donatePage = {
  eyebrow: "Contribute",
  title: "A note of what you intend to give.",
  paragraphs: [
    "This fundraiser is meant to help children in Africa living with sickle cell access medical facilities and treatment.",
    "There is no card payment on this page. Send your name, a way to reply, and, if you want, the amount you intend to contribute. The foundation reads that note. Sending it does not move any money, and it is not a receipt.",
  ],
};
