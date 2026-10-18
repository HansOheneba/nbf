"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { DonationLink } from "@/components/campaign/donation-link";
import { campaign } from "@/content/campaign";

const storageKey = "samaa-red-for-a-reason-notice";

export function EventNotice() {
  const pathname = usePathname() ?? "";
  const [open, setOpen] = useState(false);
  const onEvent = pathname === campaign.path || pathname.startsWith(`${campaign.path}/`);
  const panelRef = useRef<HTMLElement>(null);
  const titleId = useId();

  useEffect(() => {
    if (onEvent) return;
    try {
      if (window.sessionStorage.getItem(storageKey) === "dismissed") return;
    } catch {
      return;
    }
    const timer = window.setTimeout(() => setOpen(true), 400);
    return () => window.clearTimeout(timer);
  }, [onEvent]);

  useEffect(() => {
    const root = document.documentElement;
    if (!open || onEvent) {
      root.removeAttribute("data-event-notice");
      root.style.removeProperty("--event-notice-offset");
      return;
    }

    const panel = panelRef.current;
    if (!panel) return;

    const apply = () => {
      const rect = panel.getBoundingClientRect();
      const gap = 12;
      const fromBottom = Math.max(0, window.innerHeight - rect.top + gap);
      const offset = `${Math.ceil(fromBottom)}px`;
      root.style.setProperty("--event-notice-offset", offset);
      root.dataset.eventNotice = "open";
      const hero = document.querySelector<HTMLElement>(".home-hero-space");
      const title = document.querySelector<HTMLElement>(".home-hero h1");
      const narrow = window.matchMedia("(max-width: 79.999rem)").matches;
      if (hero) hero.style.paddingBottom = narrow ? offset : "";
      if (title) {
        if (narrow) {
          title.style.maxWidth = "";
        } else {
          const titleLeft = title.getBoundingClientRect().left;
          const room = rect.left - titleLeft - 28;
          title.style.maxWidth = room > 280 ? `${Math.floor(room)}px` : "";
        }
      }
    };

    apply();
    const observer = new ResizeObserver(apply);
    observer.observe(panel);
    window.addEventListener("resize", apply);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", apply);
      root.removeAttribute("data-event-notice");
      root.style.removeProperty("--event-notice-offset");
      const hero = document.querySelector<HTMLElement>(".home-hero-space");
      const title = document.querySelector<HTMLElement>(".home-hero h1");
      if (hero) hero.style.paddingBottom = "";
      if (title) title.style.maxWidth = "";
    };
  }, [open, onEvent]);

  if (!open || onEvent) return null;

  function dismiss() {
    try {
      window.sessionStorage.setItem(storageKey, "dismissed");
    } catch {
      // Session storage can be unavailable. Closing still applies for this view.
    }
    setOpen(false);
  }

  return (
    <aside
      ref={panelRef}
      data-theme="campaign"
      className="notice-in event-notice fixed inset-x-3 z-30 overflow-x-clip border border-campaign-deep/15 bg-paper shadow-[0_16px_40px_rgba(42,10,16,0.18)] xl:inset-x-auto xl:right-4 xl:w-[min(24rem,calc(100vw-2rem))]"
      style={{ bottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
      aria-labelledby={titleId}
    >
      <div className="h-1 bg-campaign" aria-hidden />
      <div className="event-notice-body px-3 py-3 sm:px-4 sm:py-4">
        <div className="event-notice-head flex items-center justify-between gap-3">
          <p className="event-notice-kicker text-caption font-semibold tracking-[0.12em] text-campaign-deep uppercase">
            {campaign.notice.eyebrow}
          </p>
          <button
            type="button"
            className="inline-flex min-h-11 shrink-0 items-center px-1 text-small font-medium text-ink/70 hover:text-ink"
            aria-label="Dismiss announcement"
            onClick={dismiss}
          >
            Dismiss
            <span aria-hidden className="ml-1">
              ×
            </span>
          </button>
        </div>
        <p id={titleId} className="event-notice-title mt-2 font-display text-[1.35rem] leading-[1.15] text-ink">
          {campaign.tagline}
        </p>
        <p className="event-notice-copy mt-2 text-small leading-snug text-ink/80">
          {campaign.notice.description}
        </p>
        <div className="event-notice-actions mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
          <DonationLink initiative="fundraiser" className="min-h-11 px-4">
            {campaign.donateLabel}
          </DonationLink>
          <Link
            href={campaign.path}
            className="event-notice-link inline-flex min-h-11 items-center text-small font-medium text-campaign-deep underline decoration-campaign-deep/40 underline-offset-4"
            onClick={dismiss}
          >
            {campaign.exploreLabel}
          </Link>
        </div>
      </div>
    </aside>
  );
}
