import { getRequestConfig } from "next-intl/server";
import { isLocale } from "./locales";

/**
 * Server-side next-intl config (default locale).
 * Client switching is handled by LanguageProvider + NextIntlClientProvider.
 */
export default getRequestConfig(async () => {
  const locale = "en";
  if (!isLocale(locale)) {
    throw new Error(`Unsupported locale: ${locale}`);
  }

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
