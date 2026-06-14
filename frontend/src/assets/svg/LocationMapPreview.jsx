export default function LocationMapPreview({ className = "w-full h-full", ...props }) {
  return (
    <svg
      className={className}
      viewBox="0 0 600 180"
      preserveAspectRatio="xMidYMid slice"
      {...props}
    >
      <rect width="600" height="180" fill="#d1d5db" />
      {[
        [0, 60, 600, 60, 12],
        [0, 120, 600, 120, 12],
        [100, 0, 100, 180, 8],
        [250, 0, 250, 180, 8],
        [400, 0, 400, 180, 8],
        [520, 0, 520, 180, 8],
      ].map(([x1, y1, x2, y2, w], index) => (
        <line
          key={`line-${index}`}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="#e5e7eb"
          strokeWidth={w}
        />
      ))}
      {[
        [10, 10, 80, 40],
        [120, 10, 120, 40],
        [260, 10, 130, 40],
        [420, 10, 90, 40],
        [10, 70, 80, 40],
        [120, 70, 120, 40],
        [260, 70, 130, 40],
        [420, 70, 90, 40],
        [10, 130, 80, 40],
        [120, 130, 120, 40],
        [260, 130, 130, 40],
        [420, 130, 90, 40],
      ].map(([x, y, w, h], index) => (
        <rect
          key={`rect-${index}`}
          x={x}
          y={y}
          width={w}
          height={h}
          fill="#c4c9d4"
          rx="2"
        />
      ))}
      <circle cx="300" cy="90" r="14" fill="#2563EB" opacity="0.9" />
      <circle cx="300" cy="90" r="6" fill="white" />
    </svg>
  );
}
