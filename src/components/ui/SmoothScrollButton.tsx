"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";
import { smoothScrollTo } from "@/lib/smoothScroll";

type SmoothScrollButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  /** Section id to scroll to (without #). */
  targetId: string;
  children: ReactNode;
};

/**
 * Button that glides the page to a section — no hash jump from the browser.
 */
export function SmoothScrollButton({
  targetId,
  children,
  onClick,
  type = "button",
  ...rest
}: SmoothScrollButtonProps) {
  return (
    <button
      type={type}
      {...rest}
      onClick={(event) => {
        smoothScrollTo(targetId);
        onClick?.(event);
      }}
    >
      {children}
    </button>
  );
}
