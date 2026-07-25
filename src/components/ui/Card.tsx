import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Bordered dark card used by project and experience blocks.
 * Neon border glow on hover for the cyberpunk look.
 */
export function Card({ children, className = "" }: CardProps) {
  return (
    <article
      className={`rounded-2xl border border-card-border bg-card p-6 backdrop-blur-sm transition-all duration-300 hover:border-accent/60 hover:shadow-[0_0_24px_rgba(0,229,255,0.15)] ${className}`}
    >
      {children}
    </article>
  );
}
