"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { fundraiserCampaign } from "@/content/events";

const storageKey = "samaa-event-notice";

export function EventNotice() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const onEvent = pathname === fundraiserCampaign.path;

  useEffect(() => {
    if (onEvent) return;
    if (window.sessionStorage.getItem(storageKey) === "dismissed") return;
    const timer = window.setTimeout(() => setOpen(true), 900);
    return () => window.clearTimeout(timer);
  }, [onEvent]);

  if (!open || onEvent) return null;

  function dismiss() {
    window.sessionStorage.setItem(storageKey, "dismissed");
    setOpen(false);
  }

  return (
    <aside
      className="notice-in fixed right-4 bottom-4 z-50 w-[min(22rem,calc(100vw-2rem))] border border-border bg-paper shadow-[0_16px_40px_rgba(23,23,23,0.16)]"
      aria-label="Upcoming fundraiser"
    >
      <div className="flex items-start gap-4 border-l-4 border-campaign-deep p-4">
        <div className="min-w-0 flex-1">
          <p className="text-caption font-semibold tracking-[0.12em] text-campaign-deep uppercase">
            19 December 2026
          </p>
          <p className="mt-2 font-display text-h4 text-ink">A sickle cell fundraiser is coming up.</p>
          <p className="mt-2 text-small text-ink/80">
            An evening to help children in Africa living with sickle cell access medical facilities
            and treatment. A raffle will form part of the evening.
          </p>
          <Link
            href={fundraiserCampaign.path}
            className="mt-3 inline-flex text-small font-medium text-campaign-deep underline decoration-campaign-deep/40 underline-offset-4"
            onClick={dismiss}
          >
            Discover the Fundraiser
          </Link>
        </div>
        <button
          type="button"
          className="shrink-0 text-small text-ink/70 hover:text-ink"
          onClick={dismiss}
        >
          Close
        </button>
      </div>
    </aside>
  );
}
