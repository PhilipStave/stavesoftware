const ITEMS = ["Salg", "Produkt", "Teknologi", "Design", "Vekst", "Eierandel"];

export default function MarqueeBand() {
  return (
    <div
      style={{
        position: "relative",
        borderTop: "1px solid rgba(242,239,233,.1)",
        borderBottom: "1px solid rgba(242,239,233,.1)",
        overflow: "hidden",
        padding: "22px 0",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "max-content",
          animation: "marquee 30s linear infinite",
          fontFamily: "var(--font-archivo), sans-serif",
          fontWeight: 800,
          fontSize: 20,
          letterSpacing: ".12em",
          textTransform: "uppercase",
          whiteSpace: "nowrap",
          color: "rgba(242,239,233,.85)",
        }}
      >
        {[0, 1].map((rep) =>
          ITEMS.map((item, i) => (
            <span key={`${rep}-${i}`} style={{ display: "contents" }}>
              <span style={{ padding: "0 40px" }}>{item}</span>
              <span style={{ color: "#8fb8e0" }}>✦</span>
            </span>
          ))
        )}
      </div>
    </div>
  );
}
