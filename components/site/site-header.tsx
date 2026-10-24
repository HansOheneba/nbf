"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useEffect, useId, useRef, useState } from "react";
import { Logo } from "@/components/site/logo";
import { ButtonLink } from "@/components/ui/button";
import {
  donateCta,
  mainNav,
  programmePaths,
  site,
  supportCta,
  type NavChild,
  type NavGroup,
  type NavItem,
} from "@/content/site";
import { cn } from "@/lib/cn";

const causePaths = ["/causes", ...programmePaths];

function isActive(pathname: string, href: string) {
  if (href === "/causes") {
    return causePaths.some((path) => pathname === path || pathname.startsWith(`${path}/`));
  }
  if (href === "/events") {
    return pathname === href || pathname.startsWith(`${href}/`);
  }
  return pathname === href;
}

function hasMenu(item: NavItem) {
  return Boolean(item.groups?.length || item.children?.length);
}

function menuDomId(href: string) {
  return `site-menu-${href.replaceAll("/", "")}`;
}

export function SiteHeader() {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;
  const panelId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeTimer = useRef<number | null>(null);
  const lastTriggerRef = useRef<HTMLAnchorElement | null>(null);
  const [menuState, setMenuState] = useState<{ href: string; path: string } | null>(null);
  const openMenuHref = menuState?.path === pathname ? menuState.href : null;

  function clearCloseTimer() {
    if (closeTimer.current === null) return;
    window.clearTimeout(closeTimer.current);
    closeTimer.current = null;
  }

  function openMenu(href: string, trigger?: HTMLAnchorElement | null) {
    clearCloseTimer();
    if (trigger) lastTriggerRef.current = trigger;
    setMenuState({ href, path: pathname });
  }

  function closeMenu() {
    clearCloseTimer();
    setMenuState(null);
  }

  function scheduleClose() {
    clearCloseTimer();
    closeTimer.current = window.setTimeout(() => setMenuState(null), 180);
  }

  useEffect(() => {
    return () => clearCloseTimer();
  }, []);

  useEffect(() => {
    if (!openMenuHref) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setMenuState(null);
      lastTriggerRef.current?.focus();
    };

    const onPointer = (event: PointerEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      if (target.closest(`[data-mega-menu="${openMenuHref}"]`)) return;
      setMenuState(null);
    };

    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [openMenuHref]);

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
      <div className="mx-auto flex h-[var(--header-h)] w-full max-w-page items-center justify-between gap-3 px-4 sm:gap-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center">
          <Logo priority variant="lockup" className="h-12 w-auto xl:h-14" />
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-6 self-stretch xl:flex"
          onMouseLeave={scheduleClose}
        >
          {mainNav.map((item) => {
            const menuOpen = openMenuHref === item.href;
            return (
              <Fragment key={item.href}>
                <Link
                  href={item.href}
                  data-mega-menu={hasMenu(item) ? item.href : undefined}
                  aria-current={isActive(pathname, item.href) ? "page" : undefined}
                  aria-expanded={hasMenu(item) ? menuOpen : undefined}
                  aria-controls={hasMenu(item) ? menuDomId(item.href) : undefined}
                  onMouseEnter={(event) =>
                    hasMenu(item) ? openMenu(item.href, event.currentTarget) : scheduleClose()
                  }
                  onFocus={(event) =>
                    hasMenu(item) ? openMenu(item.href, event.currentTarget) : closeMenu()
                  }
                  className={cn(
                    "inline-flex items-center text-nav text-ink/80 hover:text-ink",
                    isActive(pathname, item.href) &&
                      "text-link underline decoration-forest underline-offset-4",
                  )}
                >
                  {item.label}
                </Link>
                {hasMenu(item) ? (
                  <MegaMenu
                    item={item}
                    open={menuOpen}
                    pathname={pathname}
                    onNavigate={closeMenu}
                    onPointerEnter={() => openMenu(item.href)}
                  />
                ) : null}
              </Fragment>
            );
          })}
          <span
            className="flex items-center gap-2 self-center"
            onMouseEnter={scheduleClose}
            onFocus={closeMenu}
          >
            <ButtonLink href={supportCta.href} variant="secondary" className="min-h-11 px-4">
              {supportCta.label}
            </ButtonLink>
            <ButtonLink
              href={donateCta.href}
              aria-current={pathname === donateCta.href ? "page" : undefined}
              className="min-h-11 px-4"
            >
              {donateCta.label}
            </ButtonLink>
          </span>
        </nav>

        <button
          ref={menuButtonRef}
          type="button"
          className="inline-flex min-h-11 shrink-0 items-center px-3 font-sans text-nav font-medium xl:hidden"
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
          "fixed inset-x-0 top-[var(--header-h)] bottom-0 z-40 w-full overflow-x-clip overflow-y-auto bg-paper motion-safe:transition-opacity motion-safe:duration-300 xl:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <MobileNav key={pathname} pathname={pathname} onNavigate={() => setOpenPath(null)} />
      </div>
    </header>
  );
}

function MobileNav({ pathname, onNavigate }: { pathname: string; onNavigate: () => void }) {
  const activeHref = mainNav.find((item) => hasMenu(item) && isActive(pathname, item.href))?.href ?? null;
  // Undefined means "follow the page": the section holding the current page starts open.
  const [chosen, setChosen] = useState<string | null | undefined>(undefined);
  const expanded = chosen === undefined ? activeHref : chosen;

  return (
    <nav aria-label="Mobile" className="flex min-h-full flex-col px-5 pt-4 pb-8 sm:px-6">
      <ol className="border-t border-border">
        {mainNav.map((item, index) => {
          const current = isActive(pathname, item.href);
          const open = expanded === item.href;
          const sectionId = `mobile-${menuDomId(item.href)}`;
          return (
            <li key={item.href} className="border-b border-border">
              <div className="flex items-center gap-3">
                <span aria-hidden className="w-7 shrink-0 font-display text-small text-forest tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <Link
                  href={item.href}
                  aria-current={current ? "page" : undefined}
                  className={cn(
                    "min-w-0 flex-1 py-4 font-display text-h3",
                    current && "text-deep",
                  )}
                  onClick={onNavigate}
                >
                  {item.label}
                </Link>
                {hasMenu(item) ? (
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={sectionId}
                    aria-label={`${open ? "Hide" : "Show"} ${item.label} pages`}
                    onClick={() => setChosen(open ? null : item.href)}
                    className={cn(
                      "flex h-11 w-11 shrink-0 items-center justify-center border transition-colors",
                      open ? "border-ink bg-ink text-white" : "border-border text-ink",
                    )}
                  >
                    <svg viewBox="0 0 16 16" aria-hidden="true" className="h-4 w-4">
                      <path d="M2 8h12" stroke="currentColor" strokeWidth="1.6" />
                      <path
                        d="M8 2v12"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        className={cn("origin-center transition-transform duration-300", open && "scale-y-0")}
                      />
                    </svg>
                  </button>
                ) : null}
              </div>
              {hasMenu(item) ? (
                <div
                  id={sectionId}
                  inert={open ? undefined : true}
                  className={cn(
                    "grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none",
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="pb-5 pl-10">
                      {item.groups ? (
                        <div className="space-y-3">
                          {item.groups.map((group) => (
                            <MobileGroup
                              key={group.href}
                              group={group}
                              pathname={pathname}
                              onNavigate={onNavigate}
                            />
                          ))}
                        </div>
                      ) : null}
                      {item.children ? (
                        <ul className="space-y-2">
                          {item.children.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                aria-current={pathname === child.href ? "page" : undefined}
                                onClick={onNavigate}
                                className="block border-l-2 border-forest bg-white px-4 py-3"
                              >
                                {child.meta ? (
                                  <span className="block text-caption font-semibold tracking-[0.08em] text-deep uppercase">
                                    {child.meta}
                                  </span>
                                ) : null}
                                <span className="mt-1 block font-display text-h4">{child.label}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                      <Link
                        href={item.href}
                        onClick={onNavigate}
                        className="mt-4 inline-flex min-h-11 items-center text-small font-medium text-deep underline decoration-deep/30 underline-offset-4"
                      >
                        All {item.label.toLowerCase()}
                      </Link>
                    </div>
                  </div>
                </div>
              ) : null}
            </li>
          );
        })}
      </ol>

      <div className="mt-8 grid gap-3">
        <ButtonLink href={donateCta.href} className="w-full" onClick={onNavigate}>
          {donateCta.label}
        </ButtonLink>
        <ButtonLink href={supportCta.href} variant="secondary" className="w-full" onClick={onNavigate}>
          {supportCta.label}
        </ButtonLink>
      </div>
      <p className="mt-auto max-w-sm pt-10 text-caption text-muted-foreground">{site.description}</p>
    </nav>
  );
}

function MobileGroup({
  group,
  pathname,
  onNavigate,
}: {
  group: NavGroup;
  pathname: string;
  onNavigate: () => void;
}) {
  const current = pathname === group.href;
  return (
    <div className="bg-white p-4">
      <Link
        href={group.href}
        aria-current={current ? "page" : undefined}
        onClick={onNavigate}
        className="block"
      >
        <span className={cn("block font-display text-h4", current && "text-deep")}>{group.label}</span>
        <span className="mt-0.5 block text-caption text-muted-foreground">{group.description}</span>
      </Link>
      <ul className="mt-3 border-l border-border">
        {group.children.map((child) => {
          const childCurrent = pathname === child.href || pathname.startsWith(`${child.href}/`);
          return (
            <li key={child.href}>
              <Link
                href={child.href}
                aria-current={childCurrent ? "page" : undefined}
                onClick={onNavigate}
                className={cn(
                  "-ml-px flex min-h-11 items-center gap-3 border-l-2 pl-4 text-body",
                  childCurrent ? "border-forest font-medium text-deep" : "border-transparent text-ink/80",
                )}
              >
                {child.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function MegaMenu({
  item,
  open,
  pathname,
  onNavigate,
  onPointerEnter,
}: {
  item: NavItem;
  open: boolean;
  pathname: string;
  onNavigate: () => void;
  onPointerEnter: () => void;
}) {
  const groups = item.groups ?? [];
  const children = item.children ?? [];
  if (groups.length > 0) {
    return (
      <div
        id={menuDomId(item.href)}
        data-mega-menu={item.href}
        aria-label={item.label}
        inert={open ? undefined : true}
        onMouseEnter={onPointerEnter}
        className={cn(
          "absolute inset-x-0 top-full z-40 border-b border-border bg-paper",
          open ? "block" : "hidden",
        )}
      >
        <div className="mx-auto w-full max-w-page px-8 py-10">
          <div className="grid items-start gap-8 xl:grid-cols-3">
            {groups.map((group) => {
              const current = pathname === group.href || pathname.startsWith(`${group.href}/`);
              return (
                <Link
                  key={group.href}
                  href={group.href}
                  aria-current={current ? "page" : undefined}
                  onClick={onNavigate}
                  className="block max-w-sm py-2 hover:text-ink"
                >
                  <span
                    className={cn(
                      "block font-display text-h3",
                      current && "underline decoration-forest underline-offset-4",
                    )}
                  >
                    {group.label}
                  </span>
                  <span className="mt-2 block text-small text-muted-foreground">{group.description}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div
      id={menuDomId(item.href)}
      data-mega-menu={item.href}
      aria-label={item.label}
      inert={open ? undefined : true}
      onMouseEnter={onPointerEnter}
      className={cn(
        "absolute inset-x-0 top-full z-40 border-b border-border bg-paper",
        open ? "block" : "hidden",
      )}
    >
      <div className="mx-auto grid w-full max-w-page items-end gap-10 px-8 py-10 xl:grid-cols-12">
        <div className="xl:col-span-7">
          <p className="eyebrow text-deep">{item.label}</p>
          <ul className="mt-4">
            {children.map((child) => (
              <li key={child.href} className="border-b border-border">
                <ChildLink child={child} pathname={pathname} onNavigate={onNavigate} />
              </li>
            ))}
          </ul>
        </div>
        <div className="xl:col-span-4 xl:col-start-9">
          <Link
            href={item.href}
            onClick={onNavigate}
            className="inline-flex min-h-11 items-center font-display text-h4 text-link underline decoration-link/40 underline-offset-4 hover:text-link-hover"
          >
            All {item.label.toLowerCase()}
          </Link>
        </div>
      </div>
    </div>
  );
}

function ChildLink({
  child,
  pathname,
  onNavigate,
}: {
  child: NavChild;
  pathname: string;
  onNavigate: () => void;
}) {
  const current = pathname === child.href;
  return (
    <Link
      href={child.href}
      aria-current={current ? "page" : undefined}
      onClick={onNavigate}
      className="block py-4 hover:text-ink"
    >
      {child.meta ? (
        <span className="block text-caption font-medium text-deep">{child.meta}</span>
      ) : null}
      <span
        className={cn(
          "mt-1 block font-display text-h4",
          current && "underline decoration-forest underline-offset-4",
        )}
      >
        {child.label}
      </span>
      <span className="mt-2 block max-w-md text-small text-muted-foreground">
        {child.description}
      </span>
    </Link>
  );
}
