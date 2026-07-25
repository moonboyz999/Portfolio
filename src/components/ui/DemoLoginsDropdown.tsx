"use client";

import {
  useCallback,
  useId,
  useRef,
  useState,
  type ReactNode,
} from "react";
import type { DemoLogin } from "@/types/resume";
import { useTranslations } from "next-intl";

type DemoLoginsDropdownProps = {
  logins: DemoLogin[];
  /** Actions that sit on the same row as the Demo logins toggle (e.g. Live demo). */
  leading?: ReactNode;
};

const OPEN_EASE = "cubic-bezier(0.16, 1, 0.3, 1)";
const CLOSE_EASE = "cubic-bezier(0.4, 0, 0.2, 1)";

/**
 * Collapsible demo credentials.
 * Uses an imperative height transition (0px ↔ measured px ↔ auto) so the
 * expand/collapse feels smooth instead of jumping.
 */
export function DemoLoginsDropdown({
  logins,
  leading,
}: DemoLoginsDropdownProps) {
  const t = useTranslations("projects");
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const busyRef = useRef(false);

  const prefersReducedMotion = useCallback(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  const handleToggle = useCallback(() => {
    const panel = panelRef.current;
    const inner = innerRef.current;
    if (!panel || !inner || busyRef.current) return;

    if (prefersReducedMotion()) {
      setOpen((prev) => !prev);
      panel.style.height = "";
      panel.style.opacity = "";
      panel.style.transition = "none";
      return;
    }

    if (!open) {
      // Open: 0 → exact content height, then unlock to auto.
      setOpen(true);
      busyRef.current = true;
      panel.style.transition = "none";
      panel.style.height = "0px";
      panel.style.opacity = "0";
      // Force layout so the browser registers the starting point.
      void panel.offsetHeight;

      const target = inner.scrollHeight;
      panel.style.transition = [
        `height 0.55s ${OPEN_EASE}`,
        `opacity 0.4s ease`,
      ].join(", ");
      panel.style.height = `${target}px`;
      panel.style.opacity = "1";

      const onEnd = (event: Event) => {
        if (!(event instanceof TransitionEvent)) return;
        if (event.propertyName !== "height") return;
        panel.style.transition = "";
        panel.style.height = "auto";
        busyRef.current = false;
        panel.removeEventListener("transitionend", onEnd);
      };
      panel.addEventListener("transitionend", onEnd);
      return;
    }

    // Close: lock current height, then animate to 0.
    busyRef.current = true;
    const current = inner.scrollHeight;
    panel.style.transition = "none";
    panel.style.height = `${current}px`;
    panel.style.opacity = "1";
    void panel.offsetHeight;

    panel.style.transition = [
      `height 0.42s ${CLOSE_EASE}`,
      `opacity 0.28s ease`,
    ].join(", ");
    panel.style.height = "0px";
    panel.style.opacity = "0";

    const onEnd = (event: Event) => {
      if (!(event instanceof TransitionEvent)) return;
      if (event.propertyName !== "height") return;
      setOpen(false);
      panel.style.transition = "";
      panel.style.height = "";
      busyRef.current = false;
      panel.removeEventListener("transitionend", onEnd);
    };
    panel.addEventListener("transitionend", onEnd);
  }, [open, prefersReducedMotion]);

  if (logins.length === 0) return null;

  return (
    <div className="demo-logins-dropdown">
      <div className="demo-logins-row">
        {leading}
        <button
          type="button"
          className={`demo-logins-toggle ${open ? "is-open" : ""}`}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={handleToggle}
        >
          {t("demoLogins")}
          <svg
            className={`demo-logins-chevron ${open ? "is-open" : ""}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
      </div>

      <div
        id={panelId}
        ref={panelRef}
        className={`demo-logins-panel ${open ? "is-open" : ""}`}
        aria-hidden={!open}
      >
        <div ref={innerRef} className="demo-logins-panel__inner">
          <ul className="demo-logins-list">
            {logins.map((login) => (
              <li
                key={`${login.role}-${login.email}`}
                className="demo-logins-item"
              >
                <span className="demo-logins-role">{login.role}</span>
                <span className="demo-logins-creds">
                  {login.email} · {login.password}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
