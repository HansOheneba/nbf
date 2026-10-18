"use client";

import Link from "next/link";
import { useActionState, useEffect, useId, useRef, type ReactNode } from "react";
import { submitCampaignEnquiry } from "@/app/actions/campaign-enquiry";
import { buttonClass } from "@/components/ui/button";
import { auctionLotKinds, inKindKinds, type CampaignEnquiryKind } from "@/content/campaign";
import { initialInquiryState } from "@/content/inquiry";

const inputClass = "mt-2 w-full border border-border bg-white px-3 py-3 text-body text-ink";

const submitLabels: Record<CampaignEnquiryKind, string> = {
  sponsorship: "Send partnership enquiry",
  auction: "Send lot offer",
  "in-kind": "Send in-kind offer",
  general: "Send enquiry",
  rsvp: "Request to attend",
};

export function CampaignEnquiryForm({ kind }: { kind: CampaignEnquiryKind }) {
  const formId = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, pending] = useActionState(submitCampaignEnquiry, initialInquiryState);

  useEffect(() => {
    if (state.status === "success") formRef.current?.reset();
    if (state.status !== "error") return;
    const first = Object.keys(state.fieldErrors)[0];
    if (first) document.getElementById(`${formId}-${first}`)?.focus();
  }, [state, formId]);

  const offerOptions = kind === "auction" ? auctionLotKinds : kind === "in-kind" ? inKindKinds : null;

  return (
    <form ref={formRef} action={formAction} noValidate aria-describedby={`${formId}-note`}>
      <p id={`${formId}-note`} className="text-small text-ink/80">
        {kind === "rsvp"
          ? "Leave your name and the email we should use to reach you. Entrance is limited. This request does not confirm your place. Please do not include symptoms, test results, or other medical details."
          : "Please do not include symptoms, test results, or other medical details. Sending this form does not confirm a partnership, a lot, a gift, or a place at the afternoon."}
      </p>
      <input type="hidden" name="kind" value={kind} />
      <div className="mt-6 space-y-5">
        <Field id={`${formId}-name`} label="Name" error={state.fieldErrors.name}>
          <input
            id={`${formId}-name`}
            name="name"
            type="text"
            autoComplete="name"
            required
            aria-invalid={state.fieldErrors.name ? true : undefined}
            aria-describedby={state.fieldErrors.name ? `${formId}-name-error` : undefined}
            className={inputClass}
          />
        </Field>
        <Field id={`${formId}-email`} label="Email" error={state.fieldErrors.email}>
          <input
            id={`${formId}-email`}
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-invalid={state.fieldErrors.email ? true : undefined}
            aria-describedby={state.fieldErrors.email ? `${formId}-email-error` : undefined}
            className={inputClass}
          />
        </Field>
        {kind === "rsvp" ? null : (
        <Field
          id={`${formId}-organisation`}
          label={kind === "sponsorship" ? "Organisation" : "Organisation, if you are writing for one"}
          error={state.fieldErrors.organisation}
        >
          <input
            id={`${formId}-organisation`}
            name="organisation"
            type="text"
            autoComplete="organization"
            required={kind === "sponsorship"}
            aria-invalid={state.fieldErrors.organisation ? true : undefined}
            aria-describedby={
              state.fieldErrors.organisation ? `${formId}-organisation-error` : undefined
            }
            className={inputClass}
          />
        </Field>
        )}
        {kind === "sponsorship" ? (
          <Field id={`${formId}-role`} label="Your role" error={state.fieldErrors.role}>
            <input
              id={`${formId}-role`}
              name="role"
              type="text"
              autoComplete="organization-title"
              aria-invalid={state.fieldErrors.role ? true : undefined}
              aria-describedby={state.fieldErrors.role ? `${formId}-role-error` : undefined}
              className={inputClass}
            />
          </Field>
        ) : null}
        {offerOptions ? (
          <Field
            id={`${formId}-offerKind`}
            label={kind === "auction" ? "Kind of lot" : "Kind of support"}
            error={state.fieldErrors.offerKind}
          >
            <select
              id={`${formId}-offerKind`}
              name="offerKind"
              required
              defaultValue=""
              aria-invalid={state.fieldErrors.offerKind ? true : undefined}
              aria-describedby={state.fieldErrors.offerKind ? `${formId}-offerKind-error` : undefined}
              className={inputClass}
            >
              <option value="">Select one</option>
              {offerOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </Field>
        ) : null}
        <Field
          id={`${formId}-message`}
          label={
            kind === "rsvp"
              ? "Note, if you have one"
              : kind === "general" || kind === "sponsorship"
                ? "Message"
                : "What you are offering"
          }
          error={state.fieldErrors.message}
        >
          <textarea
            id={`${formId}-message`}
            name="message"
            rows={kind === "rsvp" ? 4 : 6}
            required={kind !== "rsvp"}
            aria-invalid={state.fieldErrors.message ? true : undefined}
            aria-describedby={state.fieldErrors.message ? `${formId}-message-error` : undefined}
            className={inputClass}
          />
        </Field>
      </div>
      <div className="h-0 overflow-hidden" aria-hidden="true">
        <label htmlFor={`${formId}-company`}>Company</label>
        <input id={`${formId}-company`} name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <button
        type="submit"
        className={buttonClass("primary", "mt-6 disabled:cursor-wait disabled:opacity-70")}
        disabled={pending}
      >
        {pending ? "Sending…" : submitLabels[kind]}
      </button>
      <p className="mt-4 text-caption text-muted-foreground">
        <Link href="/privacy" className="underline underline-offset-2">
          How this form handles your message
        </Link>
      </p>
      <p
        role="status"
        className={`mt-4 text-small font-medium ${state.status === "error" ? "text-deep" : "text-ink"}`}
        aria-live="polite"
      >
        {state.message}
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
