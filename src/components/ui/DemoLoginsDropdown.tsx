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

const OPEN_EASE = "ease-out";
const CLOSE_EASE = "ease-out";

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
  const [visiblePasswords, setVisiblePasswords] = useState<Set<string>>(new Set());
  const panelId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const busyRef = useRef(false);

  const prefersReducedMotion = useCallback(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  const togglePasswordVisibility = useCallback((email: string) => {
    setVisiblePasswords((prev) => {
      const next = new Set(prev);
      if (next.has(email)) {
        next.delete(email);
      } else {
        next.add(email);
      }
      return next;
    });
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
        `height 0.3s ${OPEN_EASE}`,
        `opacity 0.3s ease`,
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
      `height 0.3s ${CLOSE_EASE}`,
      `opacity 0.3s ease`,
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
            {logins.map((login) => {
              const isPasswordVisible = visiblePasswords.has(login.email);
              const displayPassword = isPasswordVisible
                ? login.password
                : "●".repeat(login.password.length);

              return (
                <li
                  key={`${login.role}-${login.email}`}
                  className="demo-logins-item"
                >
                  <div className="demo-logins-item-content">
                    <div className="demo-logins-role">{login.role}</div>
                    <div className="demo-logins-creds-group">
                      <span className="demo-logins-email">{login.email}</span>
                      <div className="demo-logins-password-row">
                        <span className="demo-logins-password">
                          {displayPassword}
                        </span>
                        <button
                          type="button"
                          className="demo-logins-password-toggle"
                          onClick={() => togglePasswordVisibility(login.email)}
                          aria-label={
                            isPasswordVisible
                              ? `Hide password for ${login.email}`
                              : `Show password for ${login.email}`
                          }
                          title={
                            isPasswordVisible ? "Hide password" : "Show password"
                          }
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden
                          >
                            {isPasswordVisible ? (
                              <>
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                <circle cx="12" cy="12" r="3" />
                              </>
                            ) : (
                              <>
                                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                                <path d="M1 1l22 22" />
                              </>
                            )}
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
