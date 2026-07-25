/**
 * Fixed cyberpunk backdrop: neon orbs, drifting grid, Tron-style light trails,
 * scanlines, and a sweep beam. Decorative only (aria-hidden).
 */
export function CyberBackground() {
  return (
    <div className="cyber-bg" aria-hidden="true">
      <div className="cyber-orb cyber-orb--cyan" />
      <div className="cyber-orb cyber-orb--blue" />
      <div className="cyber-orb cyber-orb--pink" />

      {/* Shared perspective plane so trails ride on the same grid floor */}
      <div className="cyber-grid-plane">
        <div className="cyber-grid" />
        <div className="tron-trails">
          {/* Horizontal “bikes” racing across grid rows */}
          <span className="tron-bike tron-bike--h tron-bike--cyan" style={{ top: "28%" }} />
          <span
            className="tron-bike tron-bike--h tron-bike--pink tron-bike--reverse"
            style={{ top: "48%", animationDuration: "5.5s", animationDelay: "-1.2s" }}
          />
          <span
            className="tron-bike tron-bike--h tron-bike--blue"
            style={{ top: "68%", animationDuration: "4.2s", animationDelay: "-2.4s" }}
          />
          {/* Vertical “bikes” racing down grid columns */}
          <span
            className="tron-bike tron-bike--v tron-bike--cyan"
            style={{ left: "32%", animationDuration: "6s", animationDelay: "-0.8s" }}
          />
          <span
            className="tron-bike tron-bike--v tron-bike--pink"
            style={{ left: "58%", animationDuration: "4.8s", animationDelay: "-2s" }}
          />
          <span
            className="tron-bike tron-bike--v tron-bike--blue tron-bike--reverse-v"
            style={{ left: "78%", animationDuration: "7s", animationDelay: "-3.5s" }}
          />
        </div>
      </div>

      <div className="cyber-beam" />
      <div className="cyber-scanlines" />
    </div>
  );
}
