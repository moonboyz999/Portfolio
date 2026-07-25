type BadgeProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * Pill-shaped tag used for skills and project tech stacks.
 * Cyan neon border for the cyberpunk theme.
 */
export function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-accent/30 bg-accent-soft px-3 py-1 font-mono text-xs tracking-wide text-accent ${className}`}
    >
      {children}
    </span>
  );
}
