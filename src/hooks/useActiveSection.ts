"use client";

import { useEffect, useState } from "react";

/**
 * Watches which page section is currently in view and returns its id.
 * The Navbar uses this to highlight the active link as you scroll.
 *
 * @param sectionIds - list of element ids to observe (without the #)
 * @returns the id of the section closest to the top of the viewport
 */
export function useActiveSection(sectionIds: string[]): string {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    if (sectionIds.length === 0) return;

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Prefer the intersecting section nearest the top of the screen.
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
          );

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        // Trigger when a section crosses the upper third of the viewport.
        rootMargin: "-20% 0px -55% 0px",
        threshold: 0,
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
}
