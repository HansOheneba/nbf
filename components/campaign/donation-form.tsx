"use client";

import Link from "next/link";
import { useActionState, useEffect, useId, useRef, useState, type ReactNode } from "react";
import { submitCampaignDonation } from "@/app/actions/campaign-donation";
import { buttonClass } from "@/components/ui/button";
import { formatCedis, initialDonationState, suggestedAmounts } from "@/content/campaign";

const inputClass = "mt-2 w-full border border-border bg-white px-3 py-3 text-body text-ink";

function formatMoneyInput(raw: string) {
  const digits = raw.replace(/[^\d.]/g, "");
  const dot = digits.indexOf(".");
  const whole = (dot === -1 ? digits : digits.slice(0, dot)).replace(/^0+(?=\d)/, "");
  const fraction = dot === -1 ? "" : digits.slice(dot + 1).replace(/\D/g, "").slice(0, 2);
  const grouped = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  if (dot === -1) return grouped;
  return `${grouped || "0"}.${fraction}`;
}

export function DonationForm({ methods }: { methods: string[] }) {
  const formId = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const [choice, setChoice] = useState("");
  const [otherAmount, setOtherAmount] = useState("");
  const [state, formAction, pending] = useActionState(submitCampaignDonation, initialDonationState);
  const fieldErrors = state?.fieldErrors ?? {};
  const status = state?.status ?? "idle";

  useEffect(() => {
    if (status !== "redirect" || !state?.redirectUrl) return;
    window.location.assign(state.redirectUrl);
  }, [state, status]);

  useEffect(() => {
    if (status !== "error") return;
    const first = Object.keys(fieldErrors)[0];
    const target =
      first === "amount" && choice === "other"
        ? `${formId}-amountOther`
        : first === "amount"
          ? `${formId}-amount`
          : `${formId}-${first}`;
    document.getElementById(target)?.focus();
  }, [status, fieldErrors, formId, choice]);

  const alert = status === "error" || status === "unconfigured";

  return (
    <form ref={formRef} action={formAction} noValidate aria-describedby={`${formId}-note`}>
      <div id={`${formId}-note`} className="space-y-3 text-small text-ink/80">
        <p>
          You will continue to a secure payment page. This website does not see or store your card
          or mobile-money details. A contribution is received only after that payment is confirmed.
        </p>
        {methods.length > 0 ? <p>Pay by {methods.join(", ")}.</p> : null}
      </div>

      <fieldset className="mt-6" aria-describedby={fieldErrors.amount ? `${formId}-amount-error` : undefined}>
        <legend id={`${formId}-amount`} className="text-small font-medium" tabIndex={-1}>
          Amount in Ghana cedis
        </legend>
        <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
          {suggestedAmounts.map((amount) => (
            <label
              key={amount}
              onClick={() => setChoice(String(amount))}
              className="cursor-pointer border border-border bg-white has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:checked]:border-campaign-deep has-[:checked]:bg-campaign-deep has-[:checked]:text-white"
            >
              <input
                className="sr-only"
                type="radio"
                name="amountChoice"
                value={amount}
                required
                onChange={() => setChoice(String(amount))}
              />
              <span className="flex min-h-14 items-center justify-center px-3 font-display text-h4">
                {formatCedis(amount)}
              </span>
            </label>
          ))}
          <label
            onClick={() => setChoice("other")}
            className="cursor-pointer border border-border bg-white has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:checked]:border-campaign-deep has-[:checked]:bg-campaign-deep has-[:checked]:text-white"
          >
            <input
              className="sr-only"
              type="radio"
              name="amountChoice"
              value="other"
              required
              onChange={() => setChoice("other")}
            />
            <span className="flex min-h-14 items-center justify-center px-3 font-display text-h4">
              Other
            </span>
          </label>
        </div>
        {fieldErrors.amount ? (
          <p id={`${formId}-amount-error`} className="mt-2 text-caption font-medium text-deep">
            {fieldErrors.amount}
          </p>
        ) : (
          <p className="mt-2 text-caption text-muted-foreground">
            Suggestions only. Not a price for treatment.
          </p>
        )}
      </fieldset>

      {choice === "other" ? (
        <div className="mt-5">
          <label htmlFor={`${formId}-amountOther`} className="text-small font-medium">
            Other amount
          </label>
          <div className="mt-2 flex border border-border bg-white focus-within:outline focus-within:outline-2 focus-within:outline-offset-2">
            <span className="flex items-center pl-3 font-display text-h4 mr-5" aria-hidden="true">
              GH₵
            </span>
            <input
              id={`${formId}-amountOther`}
              name="amountOther"
              type="text"
              inputMode="decimal"
              autoComplete="off"
              value={otherAmount}
              onChange={(event) => setOtherAmount(formatMoneyInput(event.target.value))}
              className="w-full bg-transparent px-2 py-3 text-body text-ink outline-none"
            />
          </div>
        </div>
      ) : null}

      <div className="mt-5 space-y-5">
        <Field id={`${formId}-name`} label="Name" error={fieldErrors.name}>
          <input
            id={`${formId}-name`}
            name="name"
            type="text"
            autoComplete="name"
            aria-invalid={fieldErrors.name ? true : undefined}
            aria-describedby={fieldErrors.name ? `${formId}-name-error` : `${formId}-name-hint`}
            className={inputClass}
          />
        </Field>
        <p id={`${formId}-name-hint`} className="-mt-3 text-caption text-muted-foreground">
          Required unless you choose to give without public acknowledgement.
        </p>
        <Field id={`${formId}-email`} label="Email" error={fieldErrors.email}>
          <input
            id={`${formId}-email`}
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-invalid={fieldErrors.email ? true : undefined}
            aria-describedby={fieldErrors.email ? `${formId}-email-error` : undefined}
            className={inputClass}
          />
        </Field>
        <label className="flex items-start gap-3 text-small text-ink/85">
          <input
            name="anonymous"
            type="checkbox"
            value="yes"
            className="mt-1 h-4 w-4 accent-[var(--campaign-deep)]"
          />
          <span>
            Do not include my name in public acknowledgements. The email address is still used so a
            receipt can be sent.
          </span>
        </label>
      </div>

      <div className="h-0 overflow-hidden" aria-hidden="true">
        <label htmlFor={`${formId}-company`}>Company</label>
        <input id={`${formId}-company`} name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <button
        type="submit"
        className={buttonClass("primary", "mt-6 w-full disabled:cursor-wait disabled:opacity-70 sm:w-auto")}
        disabled={pending || status === "redirect"}
      >
        {pending || status === "redirect" ? "Opening payment…" : "Continue to payment"}
      </button>
      {status === "redirect" && state?.redirectUrl ? (
        <p className="mt-4 text-small">
          <a className="font-medium underline underline-offset-4" href={state.redirectUrl}>
            Continue to the payment page
          </a>
        </p>
      ) : null}
      <p className="mt-4 text-caption text-muted-foreground">
        <Link href="/privacy" className="underline underline-offset-2">
          How donation details are handled
        </Link>
      </p>
      <p
        role="status"
        className={`mt-4 text-small font-medium ${alert ? "text-deep" : "text-ink"}`}
        aria-live="polite"
      >
        {state?.message}
      </p>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-small font-medium">
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-caption font-medium text-deep">
          {error}
        </p>
      ) : null}
    </div>
  );
}
