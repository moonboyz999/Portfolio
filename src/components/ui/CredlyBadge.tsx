"use client";

import Script from "next/script";
import { useId } from "react";

type CredlyBadgeProps = {
  /** Credly share badge UUID from the embed snippet. */
  badgeId: string;
  width?: number;
  height?: number;
  className?: string;
};

/**
 * Official Credly badge embed (div + embed.js).
 * Kept always mounted so Credly can initialize; parents control visibility.
 */
export function CredlyBadge({
  badgeId,
  width = 150,
  height = 270,
  className = "",
}: CredlyBadgeProps) {
  const id = useId();

  return (
    <div className={`flex justify-center ${className}`} data-credly-root={id}>
      <div
        data-iframe-width={String(width)}
        data-iframe-height={String(height)}
        data-share-badge-id={badgeId}
        data-share-badge-host="https://www.credly.com"
      />
      <Script
        src="https://cdn.credly.com/assets/utilities/embed.js"
        strategy="afterInteractive"
      />
    </div>
  );
}
