export type Locale = "en" | "ms" | "zh";

export const LOCALES: Locale[] = ["en", "ms", "zh"];

export const LOCALE_STORAGE_KEY = "portfolio-locale";

/** Maps the spoken-language labels in resume data to site locales. */
export const localeByLanguageName: Record<string, Locale> = {
  English: "en",
  Malay: "ms",
  Mandarin: "zh",
};

export function isLocale(value: string): value is Locale {
  return LOCALES.includes(value as Locale);
}
