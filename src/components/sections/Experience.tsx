import { resume } from "@/data/resume";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Work / internship experience plus education.
 */
export function Experience() {
  return (
    <Section
      id="experience"
      title="Experience"
      subtitle="Internship work and formal education."
    >
      <div className="space-y-8">
        <div>
          <h3 className="mb-4 text-sm font-medium uppercase tracking-[0.15em] text-muted">
            Work
          </h3>
          <div className="space-y-4">
            {resume.experience.map((job, index) => (
              <Reveal key={job.company} delayMs={index * 60}>
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

        <div>
          <h3 className="mb-4 text-sm font-medium uppercase tracking-[0.15em] text-muted">
            Education
          </h3>
          <div className="space-y-4">
            {resume.education.map((edu, index) => (
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
                      {edu.gpa ? ` · GPA ${edu.gpa}` : ""}
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
