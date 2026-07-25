"use client";

import { useTranslations } from "next-intl";
import { resume } from "@/data/resume";

/** Simple footer with name and year. */
export function Footer() {
  const year = new Date().getFullYear();
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-card-border px-6 py-8 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 text-sm text-muted sm:flex-row">
        <p>
          © {year} {resume.name}. {t("rights")}
        </p>
        <p className="text-muted/80">{t("builtWith")}</p>
      </div>
    </footer>
  );
}
