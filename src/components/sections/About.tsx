"use client";

import { useTranslations } from "next-intl";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

/** Career objective / about section. */
export function About() {
  const t = useTranslations("about");

  return (
    <Section id="about" title={t("title")} subtitle={t("subtitle")}>
      <Reveal>
        <p className="max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
          {t("body")}
        </p>
      </Reveal>
    </Section>
  );
}
