import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
};

/**
 * Shared section wrapper — gives every page block the same id, padding,
 * max-width, and heading style so the layout stays consistent.
 */
export function Section({
  id,
  title,
  subtitle,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 px-6 py-20 sm:px-8 lg:px-12 ${className}`}
      aria-labelledby={`${id}-heading`}
    >
      <div className="mx-auto w-full max-w-5xl">
        <header className="mb-10">
          <h2
            id={`${id}-heading`}
            className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            <span className="mb-2 block font-mono text-sm font-medium uppercase tracking-[0.25em] text-accent">
              //{id}
            </span>
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-3 max-w-2xl text-muted">{subtitle}</p>
          ) : null}
          <div
            className="mt-4 h-px w-20 bg-accent shadow-[0_0_12px_rgba(0,229,255,0.8)]"
            aria-hidden="true"
          />
        </header>
        {children}
      </div>
    </section>
  );
}
