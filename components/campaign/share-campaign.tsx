"use client";

import { useState } from "react";
import { buttonClass } from "@/components/ui/button";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "inverse" | "on-dark";

export function ShareCampaign({
  path,
  title,
  text,
  label,
  variant = "secondary",
  className,
}: {
  path: string;
  title: string;
  text: string;
  label: string;
  variant?: Variant;
  className?: string;
}) {
  const [notice, setNotice] = useState("");

  async function share() {
    const url = new URL(path, window.location.origin).toString();
    if (typeof navigator.share === "function") {
      try {
        await navigator.share({ title, text, url });
        setNotice("The campaign link was shared.");
        return;
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") {
          setNotice("");
          return;
        }
      }
    }
    try {
      await navigator.clipboard.writeText(url);
      setNotice("The campaign link has been copied.");
    } catch {
      setNotice("The link could not be copied from this browser. Copy the address from the bar instead.");
    }
  }

  return (
    <div>
      <button type="button" onClick={share} className={buttonClass(variant, cn("w-full sm:w-auto", className))}>
        {label}
      </button>
      <p role="status" aria-live="polite" className="mt-3 min-h-6 text-small">
        {notice}
      </p>
    </div>
  );
}
