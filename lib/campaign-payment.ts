import { campaign } from "@/content/campaign";

/**
 * Red for a Reason payments.
 *
 * Online contributions are taken only through Paystack, and only when this
 * server has PAYSTACK_SECRET_KEY. The key is a Paystack secret key (not the
 * public key) for the Samaa Charity Projects account that should receive
 * campaign funds. It must never be exposed with a NEXT_PUBLIC_ prefix.
 *
 * Optional:
 * - NEXT_PUBLIC_SITE_URL — absolute origin used for the return page, for
 *   example https://example.org. If it is unset, the request host is used.
 * - PAYSTACK_CHANNELS — a comma-separated list of methods already enabled and
 *   tested on that Paystack account. Supported names: card, mobile_money,
 *   bank, bank_transfer. Methods that are not listed are not advertised.
 *   If the variable is unset, the payment page can still open, but this site
 *   does not name a method.
 *
 * This module does not invent an account number, a mobile-money number, or a
 * payment URL. If the secret is missing, callers must say that no payment was
 * taken. A successful donation is only the result of Paystack's verify API.
 */

const channels = {
  card: "Card",
  mobile_money: "Mobile money",
  bank: "Bank",
  bank_transfer: "Bank transfer",
} as const;

type Channel = keyof typeof channels;

export type CampaignPaymentConfig =
  | { configured: false }
  | { configured: true; methods: string[] };

function configuredChannels(): Channel[] {
  const raw = process.env.PAYSTACK_CHANNELS?.trim();
  if (!raw) return [];
  const allowed = new Set(Object.keys(channels));
  return raw
    .split(",")
    .map((item) => item.trim())
    .filter((item): item is Channel => allowed.has(item));
}

export function campaignPaymentConfig(): CampaignPaymentConfig {
  const secret = process.env.PAYSTACK_SECRET_KEY?.trim();
  if (!secret) return { configured: false };
  return {
    configured: true,
    methods: configuredChannels().map((channel) => channels[channel]),
  };
}

export function paymentOrigin(headerStore: { get(name: string): string | null }) {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");
  if (configured) return configured;
  const host = headerStore.get("x-forwarded-host") ?? headerStore.get("host");
  if (!host) return null;
  const proto = headerStore.get("x-forwarded-proto") ?? "https";
  return `${proto}://${host}`;
}

export type InitialiseResult =
  | { ok: true; authorizationUrl: string; reference: string }
  | { ok: false; reason: "unconfigured" | "failed" };

type InitialiseInput = {
  email: string;
  minor: number;
  anonymous: boolean;
  donorName: string;
  callbackUrl: string;
};

export async function initialiseCampaignPayment(input: InitialiseInput): Promise<InitialiseResult> {
  const secret = process.env.PAYSTACK_SECRET_KEY?.trim();
  if (!secret) return { ok: false, reason: "unconfigured" };

  const channelList = configuredChannels();
  const reference = `rfr_${crypto.randomUUID().replace(/-/g, "")}`;

  try {
    const response = await fetch("https://api.paystack.co/transaction/initialize", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${secret}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email: input.email,
        amount: input.minor,
        currency: "GHS",
        reference,
        callback_url: input.callbackUrl,
        ...(channelList.length > 0 ? { channels: channelList } : {}),
        metadata: {
          campaign: "red-for-a-reason",
          campaign_name: campaign.name,
          anonymous: input.anonymous,
          donor_name: input.anonymous ? "" : input.donorName,
        },
      }),
    });
    if (!response.ok) return { ok: false, reason: "failed" };
    const body = (await response.json()) as {
      status?: boolean;
      data?: { authorization_url?: string; reference?: string };
    };
    const authorizationUrl = body.data?.authorization_url;
    const returnedReference = body.data?.reference;
    if (!body.status || !authorizationUrl || !returnedReference) {
      return { ok: false, reason: "failed" };
    }
    return { ok: true, authorizationUrl, reference: returnedReference };
  } catch {
    return { ok: false, reason: "failed" };
  }
}

export type VerifiedPayment = {
  outcome: "received" | "cancelled" | "failed" | "pending" | "unmatched" | "unavailable";
  amountLabel?: string;
  currency?: string;
  reference?: string;
  email?: string;
  anonymous?: boolean;
};

type PaystackMetadata = {
  campaign?: string;
  anonymous?: boolean | string;
  donor_name?: string;
};

export async function verifyCampaignPayment(reference: string): Promise<VerifiedPayment> {
  const secret = process.env.PAYSTACK_SECRET_KEY?.trim();
  if (!secret || !/^[A-Za-z0-9_-]{8,100}$/.test(reference)) {
    return { outcome: "unavailable" };
  }

  try {
    const response = await fetch(
      `https://api.paystack.co/transaction/verify/${encodeURIComponent(reference)}`,
      {
        headers: { Authorization: `Bearer ${secret}`, Accept: "application/json" },
        cache: "no-store",
      },
    );
    if (!response.ok) return { outcome: "unavailable" };
    const body = (await response.json()) as {
      status?: boolean;
      data?: {
        status?: string;
        amount?: number;
        currency?: string;
        reference?: string;
        customer?: { email?: string };
        metadata?: PaystackMetadata | string | null;
      };
    };
    const data = body.data;
    if (!body.status || !data) return { outcome: "unavailable" };

    const metadata = typeof data.metadata === "string" ? safeMetadata(data.metadata) : data.metadata;
    if (metadata?.campaign !== "red-for-a-reason") return { outcome: "unmatched" };

    const anonymous = metadata.anonymous === true || metadata.anonymous === "true";
    const amount =
      typeof data.amount === "number" && data.currency === "GHS" ? data.amount / 100 : undefined;
    const shared = {
      amountLabel: amount !== undefined ? formatVerifiedCedis(amount) : undefined,
      currency: data.currency,
      reference: data.reference,
      email: data.customer?.email,
      anonymous,
    };

    if (data.status === "success") return { outcome: "received", ...shared };
    if (data.status === "abandoned") return { outcome: "cancelled", ...shared };
    if (data.status === "failed" || data.status === "reversed") return { outcome: "failed", ...shared };
    return { outcome: "pending", ...shared };
  } catch {
    return { outcome: "unavailable" };
  }
}

function safeMetadata(value: string): PaystackMetadata | null {
  try {
    const parsed = JSON.parse(value) as PaystackMetadata;
    return parsed && typeof parsed === "object" ? parsed : null;
  } catch {
    return null;
  }
}

function formatVerifiedCedis(amount: number) {
  const [whole, fraction = "00"] = amount.toFixed(2).split(".");
  const grouped = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return fraction === "00" ? `GH₵${grouped}` : `GH₵${grouped}.${fraction}`;
}
