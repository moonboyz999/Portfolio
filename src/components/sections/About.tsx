import { resume } from "@/data/resume";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

/** Career objective / about section. */
export function About() {
  return (
    <Section
      id="about"
      title="About"
      subtitle="Who I am and what I care about as an engineer."
    >
      <Reveal>
        <p className="max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
          {resume.about}
        </p>
      </Reveal>
    </Section>
  );
}
