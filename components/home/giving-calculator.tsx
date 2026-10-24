"use client";

import { useEffect, useId, useRef, useState } from "react";
import { formatCedis } from "@/content/campaign";
import { homePage } from "@/content/home";
import { cn } from "@/lib/cn";

const { calculator } = homePage.philanthropy;

/** Eases the shown total towards the new one so a change is felt, not just read. */
function useCountUp(value: number) {
  const [shown, setShown] = useState(value);
  const from = useRef(value);

  useEffect(() => {
    const start = from.current;
    if (start === value) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      from.current = value;
      const frame = requestAnimationFrame(() => setShown(value));
      return () => cancelAnimationFrame(frame);
    }
    const began = performance.now();
    let frame = 0;
    const step = (time: number) => {
      const progress = Math.min(1, (time - began) / 700);
      const eased = 1 - Math.pow(1 - progress, 3);
      const next = Math.round(start + (value - start) * eased);
      from.current = next;
      setShown(next);
      if (progress < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [value]);

  return shown;
}

function compact(amount: number) {
  if (amount >= 1_000_000) return `GH₵${(amount / 1_000_000).toFixed(1)} million`;
  return formatCedis(amount);
}

export function GivingCalculator() {
  const id = useId();
  const [people, setPeople] = useState<number>(calculator.people[3].value);
  const [amount, setAmount] = useState<number>(calculator.amounts[1]);
  const total = people * amount * 12;
  const shown = useCountUp(total);

  return (
    <div className="grid gap-10 border border-white/15 bg-white/[0.04] p-5 sm:p-8 lg:grid-cols-12 lg:gap-12 lg:p-12">
      <div className="space-y-8 lg:col-span-6">
        <h3 className="text-h3 text-white">{calculator.title}</h3>
        <Choice
          name={`${id}-people`}
          legend={calculator.peopleLabel}
          options={calculator.people.map((option) => ({
            value: option.value,
            label: option.label,
            hint: option.value.toLocaleString("en-GB"),
          }))}
          selected={people}
          onSelect={setPeople}
        />
        <Choice
          name={`${id}-amount`}
          legend={calculator.amountLabel}
          options={calculator.amounts.map((value) => ({ value, label: formatCedis(value) }))}
          selected={amount}
          onSelect={setAmount}
        />
      </div>
      <div className="flex flex-col justify-end lg:col-span-6 lg:border-l lg:border-white/15 lg:pl-12">
        <p className="eyebrow text-white/60">{calculator.resultLabel}</p>
        <p
          className="mt-3 font-display text-[clamp(2rem,4.4vw,4.25rem)] leading-[0.95] tracking-[-0.04em] whitespace-nowrap text-forest tabular-nums"
          aria-live="polite"
        >
          <span className="sr-only">{compact(total)}</span>
          <span aria-hidden>{formatCedis(shown)}</span>
        </p>
        <p className="mt-4 text-body text-paper/75">
          {people.toLocaleString("en-GB")} {people === 1 ? "person" : "people"} × {formatCedis(amount)} ×
          12 months
        </p>
      </div>
    </div>
  );
}

function Choice({
  name,
  legend,
  options,
  selected,
  onSelect,
}: {
  name: string;
  legend: string;
  options: { value: number; label: string; hint?: string }[];
  selected: number;
  onSelect: (value: number) => void;
}) {
  return (
    <fieldset>
      <legend className="text-small font-medium text-white/80">{legend}</legend>
      <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {options.map((option) => (
          <label
            key={option.value}
            className={cn(
              "flex min-h-14 cursor-pointer flex-col justify-center border px-3 py-2 transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-white",
              option.value === selected
                ? "border-forest bg-forest text-white"
                : "border-white/20 text-white/85 hover:border-white/60",
            )}
          >
            <input
              className="sr-only"
              type="radio"
              name={name}
              value={option.value}
              checked={option.value === selected}
              onChange={() => onSelect(option.value)}
            />
            <span className="text-small font-medium leading-tight">{option.label}</span>
            {option.hint ? (
              <span className="text-caption text-current/70">{option.hint}</span>
            ) : null}
          </label>
        ))}
      </div>
    </fieldset>
  );
}
