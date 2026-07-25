/** Cancel token so a new click can stop an in-flight scroll. */
let activeFrame = 0;

/**
 * Sets scroll position instantly (one animation frame).
 * Avoids CSS scroll-behavior and unsupported ScrollOptions values.
 */
function setScrollY(y: number) {
  const top = Math.max(0, y);
  // Direct assignment is the most reliable across browsers.
  document.documentElement.scrollTop = top;
  document.body.scrollTop = top;
}

/**
 * Smoothly animates the page to a section.
 * Always animates on nav clicks (shortened if the OS asks for less motion).
 *
 * @param targetId - element id without the # (e.g. "projects")
 */
export function smoothScrollTo(targetId: string): void {
  const el = document.getElementById(targetId);
  if (!el) return;

  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  // Still animate a little when reduced-motion is on — user asked for smooth nav.
  const durationMs = prefersReduced ? 450 : 1000;

  const headerOffset = 88;
  const targetY = Math.max(
    0,
    el.getBoundingClientRect().top + window.scrollY - headerOffset,
  );

  const startY = window.scrollY || document.documentElement.scrollTop;
  const distance = targetY - startY;
  if (Math.abs(distance) < 1) return;

  const startTime = performance.now();
  const frameId = ++activeFrame;

  // Ease-in-out: slow → fast → soft stop (feels like a glide, not a jump).
  const easeInOutCubic = (t: number) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  const step = (now: number) => {
    if (frameId !== activeFrame) return;

    const progress = Math.min((now - startTime) / durationMs, 1);
    setScrollY(startY + distance * easeInOutCubic(progress));

    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      // Update URL after landing so the browser never jumps for the hash.
      window.history.replaceState(null, "", `#${targetId}`);
    }
  };

  requestAnimationFrame(step);
}
