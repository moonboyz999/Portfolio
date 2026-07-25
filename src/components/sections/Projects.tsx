import { resume } from "@/data/resume";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { ExternalLinkIcon } from "@/components/ui/icons";

/** Project cards grid — award badge shows when a project has one. */
export function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="Selected work across IoT, web platforms, and POS systems."
      className="bg-surface/40"
    >
      <div className="grid gap-6 md:grid-cols-2">
        {resume.projects.map((project, index) => (
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
                {project.tech.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>

              {(project.liveUrl || project.repoUrl) && (
                <div className="mt-auto flex gap-3 pt-5 text-sm">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-accent hover:underline"
                    >
                      Live demo
                      <ExternalLinkIcon />
                    </a>
                  ) : null}
                  {project.repoUrl ? (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-accent hover:underline"
                    >
                      Code
                      <ExternalLinkIcon />
                    </a>
                  ) : null}
                </div>
              )}
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
