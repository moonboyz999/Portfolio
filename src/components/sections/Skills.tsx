"use client";

import { useTranslations } from "next-intl";
import { resume } from "@/data/resume";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { CertificationHoverCard } from "@/components/ui/CertificationHoverCard";
import { useLanguage } from "@/i18n/LanguageProvider";
import { localeByLanguageName } from "@/i18n/locales";

/**
 * Skills badges, spoken languages, and certifications.
 * Clicking a spoken language switches the whole site locale via next-intl.
 */
export function Skills() {
  const t = useTranslations("skills");
  const { locale, setLocale, isSwitching } = useLanguage();

  const skillGroupTitles = [
    t("skillGroups.languages"),
    t("skillGroups.frameworks"),
    t("skillGroups.other"),
  ];

  return (
    <Section
      id="skills"
      title={t("title")}
      subtitle={t("subtitle")}
      className="bg-surface/40"
    >
      <div className="grid gap-6 lg:grid-cols-3">
        <Reveal className="self-start lg:col-span-2">
          <Card className="min-h-[26rem]">
            <h3 className="mb-5 text-lg font-semibold text-foreground">
              {t("technical")}
            </h3>
            <div className="space-y-5">
              {resume.skillGroups.map((group, index) => (
                <div key={group.title}>
                  <p className="mb-2 text-sm font-medium text-muted">
                    {skillGroupTitles[index] ?? group.title}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <Badge key={skill}>{skill}</Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </Reveal>

        <div className="space-y-6">
          <Reveal delayMs={80}>
            <Card>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {t("languages")}
              </h3>
              <p className="mb-4 text-[11px] text-muted">{t("languageHint")}</p>
              <ul className="space-y-2">
                {resume.languages.map((lang) => {
                  const langLocale = localeByLanguageName[lang.name];
                  const isActive = langLocale === locale;

                  return (
                    <li key={lang.name}>
                      <button
                        type="button"
                        disabled={isSwitching}
                        onClick={() => {
                          if (langLocale) setLocale(langLocale);
                        }}
                        className={`flex w-full items-center justify-between rounded-lg px-2 py-2 text-sm transition-colors disabled:cursor-wait disabled:opacity-60 ${
                          isActive
                            ? "bg-accent-soft text-accent"
                            : "text-foreground hover:bg-accent/10 hover:text-accent"
                        }`}
                        aria-pressed={isActive}
                        aria-label={`Switch site language to ${lang.name}`}
                      >
                        <span>{lang.name}</span>
                        <span className={isActive ? "text-accent" : "text-muted"}>
                          {lang.level}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </Card>
          </Reveal>

          <Reveal delayMs={140}>
            <Card>
              <h3 className="mb-4 text-lg font-semibold text-foreground">
                {t("certifications")}
              </h3>
              <ul className="space-y-2">
                {resume.certifications.map((cert) => (
                  <li key={cert.name}>
                    <CertificationHoverCard cert={cert} />
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
