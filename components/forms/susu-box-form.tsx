"use client";

import Link from "next/link";
import { useActionState, useEffect, useId, useRef, type ReactNode } from "react";
import { submitSusuBoxRequest } from "@/app/actions/susu-box";
import { buttonClass } from "@/components/ui/button";
import { initialInquiryState } from "@/content/inquiry";
import { susuBoxPage } from "@/content/susu-box";

const inputClass = "mt-2 w-full border border-border bg-white px-3 py-3 text-body text-ink";

export function SusuBoxForm() {
  const formId = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, pending] = useActionState(submitSusuBoxRequest, initialInquiryState);

  useEffect(() => {
    if (state.status === "success") formRef.current?.reset();
    if (state.status !== "error") return;
    const first = Object.keys(state.fieldErrors)[0];
    if (first) document.getElementById(`${formId}-${first}`)?.focus();
  }, [state, formId]);

  const describe = (field: string, hint = false) =>
    state.fieldErrors[field] ? `${formId}-${field}-error` : hint ? `${formId}-${field}-hint` : undefined;

  return (
    <form ref={formRef} action={formAction} noValidate aria-describedby={`${formId}-note`}>
      <p id={`${formId}-note`} className="text-small text-ink/80">
        Everything is required except phone and message. Sending this form is a request, not a
        commitment. We will be in touch to arrange delivery.
      </p>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <Field id={`${formId}-name`} label="Your name" error={state.fieldErrors.name}>
          <input
            id={`${formId}-name`}
            name="name"
            type="text"
            autoComplete="name"
            required
            aria-invalid={state.fieldErrors.name ? true : undefined}
            aria-describedby={describe("name")}
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
            aria-describedby={describe("email")}
            className={inputClass}
          />
        </Field>
        <Field
          id={`${formId}-phone`}
          label="Phone"
          hint="Optional. Useful for arranging collection."
          error={state.fieldErrors.phone}
        >
          <input
            id={`${formId}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            aria-invalid={state.fieldErrors.phone ? true : undefined}
            aria-describedby={describe("phone", true)}
            className={inputClass}
          />
        </Field>
        <Field id={`${formId}-placeType`} label="Where will it live?" error={state.fieldErrors.placeType}>
          <select
            id={`${formId}-placeType`}
            name="placeType"
            required
            defaultValue=""
            aria-invalid={state.fieldErrors.placeType ? true : undefined}
            aria-describedby={describe("placeType")}
            className={inputClass}
          >
            <option value="" disabled>
              Choose a place
            </option>
            {susuBoxPage.placeTypes.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </Field>
        <Field
          id={`${formId}-placeName`}
          label="Name of the place"
          hint="Your company, church, school or shop."
          error={state.fieldErrors.placeName}
        >
          <input
            id={`${formId}-placeName`}
            name="placeName"
            type="text"
            autoComplete="organization"
            required
            aria-invalid={state.fieldErrors.placeName ? true : undefined}
            aria-describedby={describe("placeName", true)}
            className={inputClass}
          />
        </Field>
        <Field
          id={`${formId}-boxes`}
          label="How many boxes?"
          error={state.fieldErrors.boxes}
        >
          <select
            id={`${formId}-boxes`}
            name="boxes"
            required
            defaultValue="1"
            aria-invalid={state.fieldErrors.boxes ? true : undefined}
            aria-describedby={describe("boxes")}
            className={inputClass}
          >
            {Array.from({ length: susuBoxPage.maxBoxes }, (_, index) => index + 1).map((count) => (
              <option key={count} value={count}>
                {count}
              </option>
            ))}
          </select>
        </Field>
        <div className="sm:col-span-2">
          <Field
            id={`${formId}-location`}
            label="Area and town"
            hint="Where we should deliver and collect, such as Airport City, Accra."
            error={state.fieldErrors.location}
          >
            <input
              id={`${formId}-location`}
              name="location"
              type="text"
              autoComplete="address-level2"
              required
              aria-invalid={state.fieldErrors.location ? true : undefined}
              aria-describedby={describe("location", true)}
              className={inputClass}
            />
          </Field>
        </div>
        <div className="sm:col-span-2">
          <Field
            id={`${formId}-message`}
            label="Anything else?"
            hint="Optional. A cause you would like it to support, or the best time to drop by."
            error={state.fieldErrors.message}
          >
            <textarea
              id={`${formId}-message`}
              name="message"
              rows={4}
              aria-invalid={state.fieldErrors.message ? true : undefined}
              aria-describedby={describe("message", true)}
              className={inputClass}
            />
          </Field>
        </div>
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
        {pending ? "Sending…" : "Request a Susu Box"}
      </button>
      <p className="mt-4 text-caption text-muted-foreground">
        <Link href="/privacy" className="underline underline-offset-2">
          How we handle your details
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
