"use client";

import { useMemo, useState } from "react";
import { resume } from "@/data/resume";
import { useActiveSection } from "@/hooks/useActiveSection";
import { smoothScrollTo } from "@/lib/smoothScroll";
import { CloseIcon, MenuIcon } from "@/components/ui/icons";

/**
 * Sticky top navigation.
 * Uses <button> (not <a href="#...">) so the browser never does a hard hash jump —
 * we always drive the scroll ourselves with smoothScrollTo.
 */
export function Navbar() {
  const [open, setOpen] = useState(false);

  const sectionIds = useMemo(
    () => resume.navLinks.map((link) => link.href.replace("#", "")),
    [],
  );
  const activeId = useActiveSection(sectionIds);

  const goTo = (id: string) => {
    setOpen(false);
    smoothScrollTo(id);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-accent/20 bg-background/70 backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12"
        aria-label="Primary"
      >
        <button
          type="button"
          onClick={() => goTo("home")}
          className="font-[family-name:var(--font-display)] text-sm font-semibold tracking-[0.15em] text-accent neon-text transition-colors hover:text-foreground"
        >
          {resume.name.split(" ").slice(0, 2).join(" ")}
        </button>

        <ul className="hidden items-center gap-1 md:flex">
          {resume.navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeId === id;
            return (
              <li key={link.href}>
                <button
                  type="button"
                  onClick={() => goTo(id)}
                  className={`rounded-full px-3 py-1.5 text-sm transition-colors ${
                    isActive
                      ? "bg-accent-soft text-accent"
                      : "text-muted hover:text-foreground"
                  }`}
                  aria-current={isActive ? "true" : undefined}
                >
                  {link.label}
                </button>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          className="rounded-lg p-2 text-foreground md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {open ? (
        <ul
          id="mobile-nav"
          className="space-y-1 border-t border-card-border px-6 py-4 md:hidden"
        >
          {resume.navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeId === id;
            return (
              <li key={link.href}>
                <button
                  type="button"
                  onClick={() => goTo(id)}
                  className={`block w-full rounded-lg px-3 py-2 text-left text-sm ${
                    isActive
                      ? "bg-accent-soft text-accent"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {link.label}
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </header>
  );
}
