"use client";

import { useState } from "react";

export function CopyValue({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard access can be refused. The value is still on screen to copy by hand.
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="min-h-9 shrink-0 border border-border px-2 text-caption font-medium text-ink/75 hover:border-ink hover:text-ink"
      aria-label={`Copy ${label}`}
    >
      <span aria-live="polite">{copied ? "Copied" : "Copy"}</span>
    </button>
  );
}
