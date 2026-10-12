"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useActionState, useEffect, useId, useRef, Suspense, type ReactNode } from "react";
import { submitInquiry } from "@/app/actions/inquiry";
import { buttonClass } from "@/components/ui/button";
import { enquiryTypes, initialInquiryState, isEnquiryValue } from "@/content/inquiry";

const inputClass =
  "mt-2 w-full border border-border bg-white px-3 py-3 text-body text-ink";

type InquiryFormProps = {
  source: "contact" | "get-involved";
  submitLabel: string;
  defaultEnquiry?: string;
};

export function InquiryForm({ source, submitLabel, defaultEnquiry }: InquiryFormProps) {
  const formId = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, pending] = useActionState(submitInquiry, initialInquiryState);
  const selected =
    defaultEnquiry && isEnquiryValue(defaultEnquiry) ? defaultEnquiry : "";

  useEffect(() => {
    if (state.status === "success") formRef.current?.reset();
    if (state.status !== "error") return;
    const first = Object.keys(state.fieldErrors)[0];
    if (first) document.getElementById(`${formId}-${first}`)?.focus();
  }, [state, formId]);

  return (
    <form
      ref={formRef}
      action={formAction}
      noValidate
      aria-describedby={`${formId}-note`}
    >
      <p id={`${formId}-note`} className="text-small text-ink/80">
        Tell us what you would like to discuss. Please do not include symptoms,
        test results, or other medical details.
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
          id={`${formId}-enquiryType`}
          label="Enquiry type"
          error={state.fieldErrors.enquiryType}
        >
          <select
            id={`${formId}-enquiryType`}
            name="enquiryType"
            required
            defaultValue={selected}
            aria-invalid={state.fieldErrors.enquiryType ? true : undefined}
            aria-describedby={
              state.fieldErrors.enquiryType ? `${formId}-enquiryType-error` : undefined
            }
            className={inputClass}
          >
            <option value="">Select an enquiry type</option>
            {enquiryTypes.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </Field>
        <Field id={`${formId}-message`} label="Message" error={state.fieldErrors.message}>
          <textarea
            id={`${formId}-message`}
            name="message"
            rows={6}
            required
            aria-invalid={state.fieldErrors.message ? true : undefined}
            aria-describedby={state.fieldErrors.message ? `${formId}-message-error` : undefined}
            className={inputClass}
          />
        </Field>
      </div>
      <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor={`${formId}-company`}>Company</label>
        <input
          id={`${formId}-company`}
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <input type="hidden" name="source" value={source} />
      <button
        type="submit"
        className={buttonClass("primary", "mt-6 disabled:cursor-wait disabled:opacity-70")}
        disabled={pending}
      >
        {pending ? "Sending…" : submitLabel}
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

export function TopicInquiryForm(props: Omit<InquiryFormProps, "defaultEnquiry">) {
  const topic = useSearchParams().get("topic") ?? undefined;
  return <InquiryForm {...props} key={topic ?? "general"} defaultEnquiry={topic} />;
}

export function GetInvolvedInquiry(props: Omit<InquiryFormProps, "defaultEnquiry" | "source">) {
  return (
    <Suspense fallback={<InquiryForm {...props} source="get-involved" />}>
      <TopicInquiryForm {...props} source="get-involved" />
    </Suspense>
  );
}

export function ContactInquiry(props: Omit<InquiryFormProps, "defaultEnquiry" | "source">) {
  return (
    <Suspense fallback={<InquiryForm {...props} source="contact" />}>
      <TopicInquiryForm {...props} source="contact" />
    </Suspense>
  );
}
