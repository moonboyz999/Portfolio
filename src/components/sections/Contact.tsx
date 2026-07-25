"use client";

import { useTranslations } from "next-intl";
import { resume } from "@/data/resume";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import {
  LinkedInIcon,
  LocationIcon,
  MailIcon,
  PhoneIcon,
} from "@/components/ui/icons";

/** Contact block — email, phone, LinkedIn, and location all public. */
export function Contact() {
  const t = useTranslations("contact");

  const items = [
    {
      label: t("email"),
      value: resume.email,
      href: `mailto:${resume.email}`,
      icon: MailIcon,
    },
    {
      label: t("phone"),
      value: resume.phone,
      href: `tel:${resume.phone.replace(/\s/g, "")}`,
      icon: PhoneIcon,
    },
    {
      label: t("linkedIn"),
      value: "khairul-izwan-haziz",
      href: resume.linkedin,
      icon: LinkedInIcon,
      external: true,
    },
    {
      label: t("location"),
      value: resume.location,
      href: undefined,
      icon: LocationIcon,
    },
  ] as const;

  return (
    <Section id="contact" title={t("title")} subtitle={t("subtitle")}>
      <Reveal>
        <Card>
          <div className="grid gap-4 sm:grid-cols-2">
            {items.map((item) => {
              const Icon = item.icon;
              const content = (
                <>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wider text-muted">
                      {item.label}
                    </span>
                    <span className="text-sm text-foreground">{item.value}</span>
                  </span>
                </>
              );

              if (item.href) {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={
                      "external" in item && item.external ? "_blank" : undefined
                    }
                    rel={
                      "external" in item && item.external
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="flex items-center gap-3 rounded-xl border border-transparent p-3 transition-colors hover:border-card-border hover:bg-surface"
                  >
                    {content}
                  </a>
                );
              }

              return (
                <div
                  key={item.label}
                  className="flex items-center gap-3 rounded-xl p-3"
                >
                  {content}
                </div>
              );
            })}
          </div>
        </Card>
      </Reveal>
    </Section>
  );
}
