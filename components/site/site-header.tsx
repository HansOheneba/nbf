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
        <nav aria-label="Mobile" className="flex flex-col gap-2 px-6 py-8">
          {mainNav.map((item) => (
            <div key={item.href} className="border-b border-border">
              <Link
                href={item.href}
                aria-current={isActive(pathname, item.href) ? "page" : undefined}
                className="block py-4 font-display text-h3"
                onClick={() => setOpenPath(null)}
              >
                {item.label}
              </Link>
              {item.groups?.map((group) => (
                <div key={group.href} className="pb-3">
                  <Link
                    href={group.href}
                    aria-current={
                      pathname === group.href || pathname.startsWith(`${group.href}/`)
                        ? "page"
                        : undefined
                    }
                    className="block py-2 font-display text-h4"
                    onClick={() => setOpenPath(null)}
                  >
                    {group.label}
                  </Link>
                  {group.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      aria-current={pathname === child.href ? "page" : undefined}
                      className="block py-2 pl-4 text-body text-ink/80"
                      onClick={() => setOpenPath(null)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ))}
              {item.children?.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  aria-current={pathname === child.href ? "page" : undefined}
                  className="block py-3 text-body text-ink/80"
                  onClick={() => setOpenPath(null)}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          ))}
          <ButtonLink
            href={donateCta.href}
            className="mt-6 w-full"
            onClick={() => setOpenPath(null)}
          >
            {donateCta.label}
          </ButtonLink>
          <ButtonLink
            href={supportCta.href}
            variant="secondary"
            className="w-full"
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
