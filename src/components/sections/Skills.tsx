import { resume } from "@/data/resume";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Skills badges, spoken languages, and certifications —
 * all pulled from resume.ts so updates stay in one place.
 */
export function Skills() {
  return (
    <Section
      id="skills"
      title="Skills"
      subtitle="Tools and languages I use to ship software."
      className="bg-surface/40"
    >
      <div className="grid gap-6 lg:grid-cols-3">
        <Reveal className="lg:col-span-2">
          <Card>
            <h3 className="mb-5 text-lg font-semibold text-foreground">
              Technical Skills
            </h3>
            <div className="space-y-5">
              {resume.skillGroups.map((group) => (
                <div key={group.title}>
                  <p className="mb-2 text-sm font-medium text-muted">
                    {group.title}
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
              <h3 className="mb-4 text-lg font-semibold text-foreground">
                Languages
              </h3>
              <ul className="space-y-2">
                {resume.languages.map((lang) => (
                  <li
                    key={lang.name}
                    className="flex items-center justify-between text-sm"
                  >
                    <span className="text-foreground">{lang.name}</span>
                    <span className="text-muted">{lang.level}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>

          <Reveal delayMs={140}>
            <Card>
              <h3 className="mb-4 text-lg font-semibold text-foreground">
                Certifications
              </h3>
              <ul className="space-y-2">
                {resume.certifications.map((cert) => (
                  <li
                    key={cert.name}
                    className="flex items-center justify-between text-sm"
                  >
                    <span className="text-foreground">{cert.name}</span>
                    <span className="text-muted">{cert.year}</span>
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
