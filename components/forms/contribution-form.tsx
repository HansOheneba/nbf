"use client";

import Link from "next/link";
import { useActionState, useEffect, useId, useRef, type ReactNode } from "react";
import { submitContribution } from "@/app/actions/contribution";
import { buttonClass } from "@/components/ui/button";
import { initialInquiryState } from "@/content/inquiry";

const inputClass = "mt-2 w-full border border-border bg-white px-3 py-3 text-body text-ink";

export function ContributionForm() {
  const formId = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, pending] = useActionState(submitContribution, initialInquiryState);

  useEffect(() => {
    if (state.status === "success") formRef.current?.reset();
    if (state.status !== "error") return;
    const first = Object.keys(state.fieldErrors)[0];
    if (first) document.getElementById(`${formId}-${first}`)?.focus();
  }, [state, formId]);

  return (
    <form ref={formRef} action={formAction} noValidate aria-describedby={`${formId}-note`}>
      <p id={`${formId}-note`} className="text-small text-ink/80">
        Name and email are required. The amount and message are optional. Please do not
        include symptoms, test results, or other medical details.
      </p>
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
        <Field
          id={`${formId}-amount`}
          label="Intended amount"
          hint="Optional. A number only, with no currency symbol. Leaving it blank is fine."
          error={state.fieldErrors.amount}
        >
          <input
            id={`${formId}-amount`}
            name="amount"
            type="text"
            inputMode="decimal"
            autoComplete="off"
            aria-invalid={state.fieldErrors.amount ? true : undefined}
            aria-describedby={
              state.fieldErrors.amount ? `${formId}-amount-error` : `${formId}-amount-hint`
            }
            className={inputClass}
          />
        </Field>
        <Field
          id={`${formId}-message`}
          label="Message"
          hint="Optional."
          error={state.fieldErrors.message}
        >
          <textarea
            id={`${formId}-message`}
            name="message"
            rows={5}
            aria-invalid={state.fieldErrors.message ? true : undefined}
            aria-describedby={
              state.fieldErrors.message ? `${formId}-message-error` : `${formId}-message-hint`
            }
            className={inputClass}
          />
        </Field>
      </div>
      <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor={`${formId}-company`}>Company</label>
        <input id={`${formId}-company`} name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <button
        type="submit"
        className={buttonClass("primary", "mt-6 disabled:cursor-wait disabled:opacity-70")}
        disabled={pending}
      >
        {pending ? "Sending…" : "Send contribution note"}
      </button>
      <p className="mt-4 text-caption text-muted-foreground">
        <Link href="/privacy" className="underline underline-offset-2">
          How this form handles your note
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
  hint,
  error,
  children,
}: {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-small font-medium">
        {label}
      </label>
      {hint ? (
        <p id={`${id}-hint`} className="mt-1 text-caption text-muted-foreground">
          {hint}
        </p>
      ) : null}
      {children}
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-caption font-medium text-deep">
          {error}
        </p>
      ) : null}
    </div>
  );
}
