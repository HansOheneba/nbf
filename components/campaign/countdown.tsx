"use client";

import { useSyncExternalStore } from "react";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { campaign } from "@/content/campaign";
import { cn } from "@/lib/cn";

const target = Date.parse(campaign.startsAt);

/** One shared clock, ticking once a second while anything is listening. */
function subscribe(onTick: () => void) {
  const timer = window.setInterval(onTick, 1000);
  return () => window.clearInterval(timer);
}

function nowInSeconds() {
  return Math.floor(Date.now() / 1000);
}

/** The server cannot know the visitor's moment, so it renders placeholders. */
function serverSnapshot() {
  return null;
}

type Remaining = { days: number; hours: number; minutes: number; seconds: number };

function remaining(now: number | null): Remaining | null {
  if (now === null) return null;
  const left = Math.max(0, Math.floor(target / 1000) - now);
  return {
    days: Math.floor(left / 86_400),
    hours: Math.floor((left % 86_400) / 3_600),
    minutes: Math.floor((left % 3_600) / 60),
    seconds: left % 60,
  };
}

function useRemaining() {
  return remaining(useSyncExternalStore(subscribe, nowInSeconds, serverSnapshot));
}

const units = [
  { key: "days", label: "Days" },
  { key: "hours", label: "Hours" },
  { key: "minutes", label: "Minutes" },
  { key: "seconds", label: "Seconds" },
] as const;

function isOver(time: Remaining | null) {
  return time !== null && time.days + time.hours + time.minutes + time.seconds === 0;
}

function Digits({ value, pad }: { value: number | undefined; pad: number }) {
  const text = value === undefined ? "–".repeat(pad) : String(value).padStart(pad, "0");
  return (
    <span key={text} className={cn("block tabular-nums", value !== undefined && "flip-in")}>
      {text}
    </span>
  );
}

function TennisBall({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className={className}>
      <circle cx="24" cy="24" r="22" fill="var(--campaign-ball)" />
      <path
        d="M6 12c8 4 12 10 12 12s-4 8-12 12M42 12c-8 4-12 10-12 12s4 8 12 12"
        fill="none"
        stroke="#fff"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** A full-width scoreboard band for the homepage and the campaign page. */
export function CountdownBand({ showActions = true }: { showActions?: boolean }) {
  const time = useRemaining();
  const over = isOver(time);
  const label = time
    ? `${time.days} days, ${time.hours} hours and ${time.minutes} minutes until ${campaign.name}`
    : `Counting down to ${campaign.name}`;

  return (
    <section
      data-theme="campaign"
      aria-label={`Countdown to ${campaign.name}`}
      className="relative overflow-hidden bg-campaign-deep text-white"
    >
      {/* Court lines, drawn faintly behind the scoreboard. */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full text-white/[0.07]"
        preserveAspectRatio="none"
        viewBox="0 0 1200 400"
      >
        <g fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="40" y="30" width="1120" height="340" />
          <line x1="40" y1="80" x2="1160" y2="80" />
          <line x1="40" y1="320" x2="1160" y2="320" />
          <line x1="600" y1="30" x2="600" y2="370" strokeDasharray="6 10" />
          <line x1="320" y1="80" x2="320" y2="320" />
          <line x1="880" y1="80" x2="880" y2="320" />
          <line x1="320" y1="200" x2="880" y2="200" />
        </g>
      </svg>

      <Container className="relative grid gap-10 py-14 lg:grid-cols-12 lg:items-center lg:py-20">
        <div className="lg:col-span-4">
          <div className="relative mb-8 h-16 w-12" aria-hidden>
            <TennisBall className="ball-bounce absolute bottom-3 left-0 h-12 w-12" />
            <span className="ball-shadow absolute bottom-0 left-1 block h-2 w-10 rounded-[50%] bg-black" />
          </div>
          <p className="eyebrow text-campaign-ball">
            {campaign.name} · {campaign.dateLabel}
          </p>
          <h2 className="mt-3 text-h1 uppercase">
            {over ? "Game, set, match." : "Countdown to first serve."}
          </h2>
          <p className="mt-4 max-w-sm text-body text-white/80">
            {over
              ? "Thank you to everyone who served, gave and showed up for children living with sickle cell."
              : `${campaign.venue}. Guests from ${campaign.arrival}. ${campaign.tagline}`}
          </p>
        </div>

        <div className="lg:col-span-8">
          <p className="sr-only" aria-live="off">
            {label}
          </p>
          <ol aria-hidden className="grid grid-cols-4 gap-2 sm:gap-3">
            {units.map((unit) => {
              const seconds = unit.key === "seconds";
              return (
                <li
                  key={unit.key}
                  className={cn(
                    "relative flex flex-col items-center overflow-hidden border px-1 pt-4 pb-3 sm:pt-6 sm:pb-4",
                    seconds
                      ? "border-campaign-ball bg-campaign-ball text-campaign-deep"
                      : "border-white/15 bg-white/[0.06]",
                  )}
                >
                  <span className="relative font-display text-[clamp(2.4rem,9vw,7rem)] leading-none">
                    <Digits value={time?.[unit.key]} pad={2} />
                    {/* The hinge line of a flip card. */}
                    <span
                      className={cn(
                        "absolute -inset-x-6 top-1/2 h-px",
                        seconds ? "bg-campaign-deep/25" : "bg-black/45",
                      )}
                    />
                  </span>
                  <span
                    className={cn(
                      "mt-3 text-[0.625rem] font-semibold tracking-[0.18em] uppercase sm:text-eyebrow",
                      seconds ? "text-campaign-deep/80" : "text-white/65",
                    )}
                  >
                    {unit.label}
                  </span>
                </li>
              );
            })}
          </ol>
          {showActions ? (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {campaign.attend.requestsOpen ? (
                <ButtonLink href={campaign.rsvpHref} variant="inverse">
                  {campaign.rsvpLabel}
                </ButtonLink>
              ) : null}
              <ButtonLink
                href={campaign.donateHref}
                variant={campaign.attend.requestsOpen ? "on-dark" : "inverse"}
              >
                {campaign.donateLabel}
              </ButtonLink>
              <ButtonLink href={campaign.path} variant="on-dark">
                {campaign.exploreLabel}
              </ButtonLink>
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}

/** A small inline countdown for cards and listings. */
export function CountdownInline({ className }: { className?: string }) {
  const time = useRemaining();
  if (isOver(time)) return null;

  return (
    <p className={cn("flex flex-wrap items-baseline gap-x-4 gap-y-1", className)}>
      <span className="sr-only">Time until {campaign.name}: </span>
      {units.map((unit) => (
        <span key={unit.key} className="flex items-baseline gap-1">
          <span className="font-display text-h2 text-campaign tabular-nums">
            <Digits value={time?.[unit.key]} pad={2} />
          </span>
          <span className="text-caption font-semibold tracking-[0.12em] text-ink/60 uppercase">
            {unit.label}
          </span>
        </span>
      ))}
    </p>
  );
}

/** Compact scoreboard tiles for a dark hero. */
export function CountdownTiles({ className }: { className?: string }) {
  const time = useRemaining();
  if (isOver(time)) return null;

  return (
    <div className={className}>
      <p className="eyebrow text-white/60">Until first serve</p>
      <p className="sr-only">
        {time
          ? `${time.days} days, ${time.hours} hours and ${time.minutes} minutes until ${campaign.name}`
          : `Counting down to ${campaign.name}`}
      </p>
      <ol aria-hidden className="mt-3 grid max-w-md grid-cols-4 gap-2">
        {units.map((unit) => {
          const seconds = unit.key === "seconds";
          return (
            <li
              key={unit.key}
              className={cn(
                "flex flex-col items-center border px-1 py-3",
                seconds
                  ? "border-campaign-ball bg-campaign-ball text-campaign-deep"
                  : "border-white/15 bg-white/[0.06]",
              )}
            >
              <span className="font-display text-[clamp(1.75rem,5vw,2.5rem)] leading-none">
                <Digits value={time?.[unit.key]} pad={2} />
              </span>
              <span
                className={cn(
                  "mt-2 text-[0.625rem] font-semibold tracking-[0.16em] uppercase",
                  seconds ? "text-campaign-deep/80" : "text-white/60",
                )}
              >
                {unit.label}
              </span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
