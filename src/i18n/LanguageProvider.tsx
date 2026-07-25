"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  useTransition,
  type ReactNode,
} from "react";
import { NextIntlClientProvider } from "next-intl";
import {
  isLocale,
  LOCALE_STORAGE_KEY,
  type Locale,
} from "./locales";
import en from "./messages/en.json";
import ms from "./messages/ms.json";
import zh from "./messages/zh.json";

const messagesByLocale = { en, ms, zh } as const;

const htmlLangByLocale: Record<Locale, string> = {
  en: "en",
  ms: "ms",
  zh: "zh-CN",
};

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  isSwitching: boolean;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

/**
 * Wraps the app with next-intl and handles locale switching.
 * Shows a short loading animation while the language changes.
 */
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [ready, setReady] = useState(false);
  const [isSwitching, setIsSwitching] = useState(false);
  const [, startTransition] = useTransition();

  useEffect(() => {
    const saved = window.localStorage.getItem(LOCALE_STORAGE_KEY);
    if (saved && isLocale(saved)) {
      setLocaleState(saved);
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    document.documentElement.lang = htmlLangByLocale[locale];
  }, [locale, ready]);

  const setLocale = useCallback(
    (next: Locale) => {
      if (next === locale || isSwitching) return;

      setIsSwitching(true);

      // Fade out, swap language, then fade back in with enhanced animations.
      window.setTimeout(() => {
        startTransition(() => {
          setLocaleState(next);
          window.localStorage.setItem(LOCALE_STORAGE_KEY, next);
        });

        window.setTimeout(() => {
          setIsSwitching(false);
        }, 350);
      }, 380);
    },
    [locale, isSwitching, startTransition],
  );

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      isSwitching,
    }),
    [locale, setLocale, isSwitching],
  );

  return (
    <LanguageContext.Provider value={value}>
      <NextIntlClientProvider
        locale={locale}
        messages={messagesByLocale[locale]}
        timeZone="Asia/Kuala_Lumpur"
      >
        <div
          className={`locale-content ${isSwitching ? "is-switching" : ""}`}
          aria-busy={isSwitching}
        >
          {children}
        </div>

        <div
          className={`locale-switch-overlay ${isSwitching ? "is-visible" : ""}`}
          aria-hidden={!isSwitching}
        >
          <div className="locale-switch-spinner" />
          <p className="locale-switch-label">Switching language…</p>
        </div>
      </NextIntlClientProvider>
    </LanguageContext.Provider>
  );
}

/** Locale controls (active language + switcher). Use next-intl hooks for copy. */
export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}
