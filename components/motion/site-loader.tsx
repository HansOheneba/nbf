"use client";

import { useEffect, useRef, useState } from "react";
import Loader from "@/components/ui/loader";

const STORAGE_KEY = "nbf-site-loader";
const PLAY_MS = 2000;
const FADE_MS = 500;

function introAlreadySeen() {
  if (document.documentElement.dataset.siteLoader === "skip") return true;
  try {
    return window.sessionStorage.getItem(STORAGE_KEY) === "seen";
  } catch {
    return false;
  }
}

function rememberIntro() {
  try {
    window.sessionStorage.setItem(STORAGE_KEY, "seen");
  } catch {
    // Private browsing can reject storage. The loader still ends.
  }
}

export function SiteLoader() {
  const [finished, setFinished] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || introAlreadySeen()) {
      const hide = window.setTimeout(() => setFinished(true), 0);
      return () => window.clearTimeout(hide);
    }

    const root = rootRef.current;
    const html = document.documentElement;
    const previousHtmlOverflow = html.style.overflow;
    const previousBodyOverflow = document.body.style.overflow;
    let released = false;

    const releasePage = () => {
      if (released) return;
      released = true;
      html.style.overflow = previousHtmlOverflow;
      document.body.style.overflow = previousBodyOverflow;
    };

    if (root) root.style.animation = "none";
    html.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    let active = true;
    const leaveTimer = window.setTimeout(() => {
      if (!active) return;
      rememberIntro();
      root?.classList.add("is-leaving");
    }, PLAY_MS);
    const doneTimer = window.setTimeout(() => {
      if (!active) return;
      releasePage();
      setFinished(true);
    }, PLAY_MS + FADE_MS);

    return () => {
      active = false;
      releasePage();
      window.clearTimeout(leaveTimer);
      window.clearTimeout(doneTimer);
    };
  }, []);

  if (finished) return null;

  return (
    <div
      ref={rootRef}
      className="site-loader fixed inset-0 z-[80] overflow-hidden bg-paper transition-opacity duration-500 ease-out"
      aria-hidden="true"
    >
      <Loader />
    </div>
  );
}
