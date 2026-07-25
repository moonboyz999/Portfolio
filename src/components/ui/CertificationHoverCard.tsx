"use client";

import { useTranslations } from "next-intl";
import type { Certification } from "@/types/resume";
import { CredlyBadge } from "@/components/ui/CredlyBadge";

type CertificationHoverCardProps = {
  cert: Certification;
};

/**
 * Cert row: hover expands this card to reveal the Credly badge on a white panel.
 * Click opens Credly to verify. Badge is non-interactive so the link click works.
 */
export function CertificationHoverCard({ cert }: CertificationHoverCardProps) {
  const t = useTranslations("cert");
  const canVerify = Boolean(cert.credlyUrl);

  const className = `group block rounded-xl border border-transparent p-3 transition-all duration-300 ${
    canVerify
      ? "cursor-pointer hover:border-accent/40 hover:bg-accent/5 focus-visible:border-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
      : ""
  }`;

  const body = (
    <>
      <div className="flex items-center justify-between gap-3 text-sm">
        <span className="font-medium text-foreground">{cert.name}</span>
        <span className="shrink-0 text-muted">{cert.year}</span>
      </div>

      {canVerify ? (
        <p className="mt-2 text-center text-[11px] text-muted transition-colors group-hover:text-accent group-focus-within:text-accent">
          <span className="group-hover:hidden group-focus-within:hidden">
            {t("hoverHint")}
          </span>
          <span className="hidden group-hover:inline group-focus-within:inline">
            {t("clickHint")}
          </span>
        </p>
      ) : null}

      {cert.credlyBadgeId ? (
        <div className="grid grid-rows-[0fr] opacity-0 transition-[grid-template-rows,opacity,margin] duration-300 ease-out group-hover:mt-3 group-hover:grid-rows-[1fr] group-hover:opacity-100 group-focus-within:mt-3 group-focus-within:grid-rows-[1fr] group-focus-within:opacity-100">
          <div className="min-h-0 overflow-hidden">
            <div className="pointer-events-none flex justify-center rounded-xl bg-white p-3 shadow-inner">
              <CredlyBadge badgeId={cert.credlyBadgeId} />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );

  if (!canVerify) {
    return <div className={className}>{body}</div>;
  }

  return (
    <a
      href={cert.credlyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={t("verifyLabel", { name: cert.name })}
    >
      {body}
    </a>
  );
}
