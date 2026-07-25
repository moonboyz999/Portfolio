"use client";

import { useMessages, useTranslations } from "next-intl";
import { resume } from "@/data/resume";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { DemoLoginsDropdown } from "@/components/ui/DemoLoginsDropdown";
import { ExternalLinkIcon } from "@/components/ui/icons";

type ProjectCopy = {
  title: string;
  description: string;
  highlights: string[];
  award?: string;
};

/** Project cards grid — award badge shows when a project has one. */
export function Projects() {
  const t = useTranslations("projects");
  const messages = useMessages();
  const projects = (messages.content as { projects: ProjectCopy[] }).projects;

  return (
    <Section
      id="projects"
      title={t("title")}
      subtitle={t("subtitle")}
      className="bg-surface/40"
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => {
          const meta = resume.projects[index];
          if (!meta) return null;

          return (
            <Reveal key={project.title} delayMs={index * 70}>
              <Card className="flex h-full flex-col">
                <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
                  <h3 className="text-lg font-semibold text-foreground">
                    {project.title}
                  </h3>
                  {project.award ? (
                    <span className="rounded-full bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent">
                      {project.award}
                    </span>
                  ) : null}
                </div>

                <p className="text-sm leading-relaxed text-muted">
                  {project.description}
                </p>

                {project.highlights.length > 0 ? (
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted">
                    {project.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}

                <div className="mt-4 flex flex-wrap gap-2">
                  {meta.tech.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>

                {(meta.liveUrl ||
                  meta.repoUrl ||
                  (meta.demoLogins && meta.demoLogins.length > 0)) && (
                  <div className="mt-auto pt-5 text-sm">
                    {meta.demoLogins?.length ? (
                      <DemoLoginsDropdown
                        logins={meta.demoLogins}
                        leading={
                          <>
                            {meta.liveUrl ? (
                              <a
                                href={meta.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="live-demo-btn"
                              >
                                <span
                                  className="live-demo-btn__shine"
                                  aria-hidden
                                />
                                <span className="relative">{t("liveDemo")}</span>
                                <ExternalLinkIcon className="relative h-4 w-4" />
                              </a>
                            ) : null}
                            {meta.repoUrl ? (
                              <a
                                href={meta.repoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-accent transition-colors hover:underline"
                              >
                                {t("code")}
                                <ExternalLinkIcon />
                              </a>
                            ) : null}
                          </>
                        }
                      />
                    ) : (
                      <div className="flex flex-wrap items-center gap-3">
                        {meta.liveUrl ? (
                          <a
                            href={meta.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="live-demo-btn"
                          >
                            <span className="live-demo-btn__shine" aria-hidden />
                            <span className="relative">{t("liveDemo")}</span>
                            <ExternalLinkIcon className="relative h-4 w-4" />
                          </a>
                        ) : null}
                        {meta.repoUrl ? (
                          <a
                            href={meta.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-accent transition-colors hover:underline"
                          >
                            {t("code")}
                            <ExternalLinkIcon />
                          </a>
                        ) : null}
                      </div>
                    )}
                  </div>
                )}
              </Card>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
