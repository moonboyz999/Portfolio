"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { resume } from "@/data/resume";
import { Reveal } from "@/components/ui/Reveal";
import { SmoothScrollButton } from "@/components/ui/SmoothScrollButton";
import {
  DownloadIcon,
  LinkedInIcon,
  LocationIcon,
  MailIcon,
  PhoneIcon,
} from "@/components/ui/icons";

/**
 * Top of the page — name, role, short pitch, headshot, and CTAs.
 * Uses the headshot from public/ and links to projects + resume PDF.
 */
export function Hero() {
  const t = useTranslations("hero");

  return (
    <section
      id="home"
      className="hero-glow scroll-mt-24 px-6 pb-16 pt-16 sm:px-8 sm:pt-24 lg:px-12"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto grid w-full max-w-5xl items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal>
          <p className="mb-3 font-mono text-sm font-medium uppercase tracking-[0.25em] text-accent">
            {t("eyebrow")}
          </p>
          <h1
            id="hero-heading"
            className="font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-foreground neon-text sm:text-5xl lg:text-6xl"
          >
            {resume.name}
          </h1>
          <p className="mt-3 text-xl text-accent sm:text-2xl">{t("role")}</p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {t("tagline")}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted">
            <span className="inline-flex items-center gap-2">
              <LocationIcon className="h-4 w-4 text-accent" />
              {resume.location}
            </span>
            <a
              href={`mailto:${resume.email}`}
              className="inline-flex items-center gap-2 transition-colors hover:text-accent"
            >
              <MailIcon className="h-4 w-4 text-accent" />
              {resume.email}
            </a>
            <a
              href={`tel:${resume.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 transition-colors hover:text-accent"
            >
              <PhoneIcon className="h-4 w-4 text-accent" />
              {resume.phone}
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <SmoothScrollButton
              targetId="projects"
              className="inline-flex items-center justify-center rounded-full bg-accent-strong px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_20px_rgba(0,150,255,0.45)] transition-all hover:bg-accent hover:shadow-[0_0_28px_rgba(0,229,255,0.55)]"
            >
              {t("viewProjects")}
            </SmoothScrollButton>
            <a
              href={resume.resumePdfPath}
              download
              className="inline-flex items-center justify-center gap-2 rounded-full border border-accent/40 bg-surface px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <DownloadIcon className="h-4 w-4" />
              {t("downloadResume")}
            </a>
            <a
              href={resume.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-accent/30 px-4 py-2.5 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
              aria-label="LinkedIn profile"
            >
              <LinkedInIcon className="h-4 w-4" />
              {t("linkedIn")}
            </a>
          </div>
        </Reveal>

        <Reveal delayMs={120} className="flex justify-center lg:justify-end">
          <div className="relative">
            <div
              className="absolute -inset-3 rounded-3xl bg-accent/25 blur-2xl"
              aria-hidden="true"
            />
            <div className="relative h-64 w-64 overflow-hidden rounded-3xl border border-accent/50 bg-card shadow-[0_0_30px_rgba(0,229,255,0.25)] sm:h-72 sm:w-72">
              <Image
                src={resume.headshotPath}
                alt={`Portrait of ${resume.name}`}
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 640px) 256px, 288px"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
