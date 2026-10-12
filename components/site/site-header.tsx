"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { Logo } from "@/components/site/logo";
import { ButtonLink } from "@/components/ui/button";
import { mainNav, site, supportCta } from "@/content/site";
import { cn } from "@/lib/cn";

function isActive(pathname: string, href: string) {
  if (href === "/initiatives") return pathname === "/initiatives";
  return pathname === href;
}

export function SiteHeader() {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;
  const panelId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const desktop = window.matchMedia("(min-width: 1280px)");
    if (desktop.matches) return;

    const panel = panelRef.current;
    const content = document.getElementById("content");
    const footer = document.getElementById("site-footer");
    content?.setAttribute("inert", "");
    footer?.setAttribute("inert", "");
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenPath(null);
        menuButtonRef.current?.focus();
        return;
      }
      if (event.key !== "Tab" || !panel) return;
      const button = menuButtonRef.current;
      const items = [
        ...(button ? [button] : []),
        ...panel.querySelectorAll<HTMLElement>("a, button"),
      ];
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };

    const onDesktop = () => {
      if (desktop.matches) setOpenPath(null);
    };

    document.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onDesktop);
    return () => {
      content?.removeAttribute("inert");
      footer?.removeAttribute("inert");
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onDesktop);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-paper">
      <div className="mx-auto flex h-20 w-full max-w-page items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <Logo priority className="h-14 w-14 shrink-0" />
          <span className="font-display text-sm leading-none tracking-tight text-ink">
            Nana Boatemah
            <span className="mt-1 block">Foundation</span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-6 xl:flex">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(pathname, item.href) ? "page" : undefined}
              className={cn(
                "text-nav text-ink/80 hover:text-ink",
                isActive(pathname, item.href) &&
                  "text-link underline decoration-foundation underline-offset-4",
              )}
            >
              {item.label}
            </Link>
          ))}
          <ButtonLink href={supportCta.href} className="min-h-11 px-4">
            {supportCta.label}
          </ButtonLink>
        </nav>

        <button
          ref={menuButtonRef}
          type="button"
          className="inline-flex min-h-12 items-center px-3 font-sans text-nav font-medium xl:hidden"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpenPath(open ? null : pathname)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      <div
        id={panelId}
        ref={panelRef}
        inert={open ? undefined : true}
        aria-hidden={open ? undefined : true}
        className={cn(
          "fixed inset-x-0 top-20 bottom-0 z-40 overflow-y-auto bg-paper motion-safe:transition-opacity motion-safe:duration-300 xl:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <nav aria-label="Mobile" className="flex flex-col gap-2 px-6 py-8">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(pathname, item.href) ? "page" : undefined}
              className="border-b border-border py-4 font-display text-h3"
              onClick={() => setOpenPath(null)}
            >
              {item.label}
            </Link>
          ))}
          <ButtonLink
            href={supportCta.href}
            className="mt-6 w-full"
            onClick={() => setOpenPath(null)}
          >
            {supportCta.label}
          </ButtonLink>
          <p className="mt-6 max-w-sm text-caption text-muted-foreground">{site.description}</p>
        </nav>
      </div>
    </header>
  );
}
