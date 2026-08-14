"use client";

import { useMessages, useTranslations } from "next-intl";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";

type ExperienceItem = {
  company: string;
  title: string;
  period: string;
  bullets: string[];
};

type EducationItem = {
  degree: string;
  school: string;
  year: string;
  gpa?: string;
  bullets: string[];
};

/**
 * Work / internship experience plus education.
 */
export function Experience() {
  const t = useTranslations("experience");
  const messages = useMessages();
  const content = messages.content as {
    softwareEngineering?: ExperienceItem[];
    additionalExperience?: ExperienceItem[];
    education: EducationItem[];
  };
  const softwareEngineering = content.softwareEngineering ?? [];
  const additionalExperience = content.additionalExperience ?? [];
  const education = content.education ?? [];

  return (
    <Section
      id="experience"
      title={t("title")}
      subtitle={t("subtitle")}
    >
      <div className="space-y-8">
        <div>
          <h3 className="mb-4 text-sm font-medium uppercase tracking-[0.15em] text-muted">
            {t("softwareEngineering")}
          </h3>
          <div className="space-y-4">
            {softwareEngineering.map((job, index) => (
              <Reveal key={`${job.company}-${job.title}`} delayMs={index * 60}>
                <Card>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">
                        {job.title}
                      </h4>
                      <p className="text-accent">{job.company}</p>
                    </div>
                    <p className="text-sm text-muted">{job.period}</p>
                  </div>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted">
                    {job.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>

        {additionalExperience.length > 0 ? (
          <div>
            <h3 className="mb-4 text-sm font-medium uppercase tracking-[0.15em] text-muted">
              {t("additionalExperience")}
            </h3>
            <div className="space-y-4">
              {additionalExperience.map((job, index) => (
                <Reveal key={`${job.company}-${job.title}`} delayMs={index * 60}>
                  <Card>
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                      <div>
                        <h4 className="text-lg font-semibold text-foreground">
                          {job.title}
                        </h4>
                        <p className="text-accent">{job.company}</p>
                      </div>
                      <p className="text-sm text-muted">{job.period}</p>
                    </div>
                    <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted">
                      {job.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        ) : null}

        <div>
          <h3 className="mb-4 text-sm font-medium uppercase tracking-[0.15em] text-muted">
            {t("education")}
          </h3>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <Reveal key={`${edu.degree}-${edu.school}`} delayMs={index * 60}>
                <Card>
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                    <div className="min-w-0 flex-1">
                      <h4 className="text-lg font-semibold leading-snug text-foreground">
                        {edu.degree}
                      </h4>
                      <p className="mt-1 break-words text-sm leading-relaxed text-accent sm:text-base">
                        {edu.school}
                      </p>
                    </div>
                    <p className="shrink-0 text-sm text-muted sm:text-right">
                      {edu.year}
                      {edu.gpa ? ` · ${t("gpa")} ${edu.gpa}` : ""}
                    </p>
                  </div>
                  {edu.bullets.length > 0 ? (
                    <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted">
                      {edu.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  ) : null}
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
