export function BaseLayer({ children, className = "" }) {
  return (
    <div className={`absolute inset-0 z-0 bg-[#717171] ${className}`}>
      {children}
    </div>
  );
}

export function DottedLayer({ children, className = "" }) {
  return (
    <div
      className={`relative z-10 min-h-screen w-full ${className}`}
      style={{
        backgroundImage:
          "radial-gradient(circle, transparent 0, transparent 1px, #101010 1px)",
        backgroundSize: "24px 24px",
      }}
    >
      {children}
    </div>
  );
}

export default function MainLayerBg({ children, className = "" }) {
  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <BaseLayer />
      <DottedLayer>{children}</DottedLayer>
    </div>
  );
}
