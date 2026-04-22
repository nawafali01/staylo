export default function ReportStatsCard({
  label,
  value,
  badge,
  badgeType,
  subtitle,
  highlighted,
}) {
  const badgeStyles = {
    up: "bg-green-100 text-green-700",
    stable: "bg-orange-100 text-orange-600",
    highlight: "text-white text-lg font-bold",
  };

  if (highlighted) {
    return (
      <div className="bg-blue-600 rounded-xl p-6 text-white flex flex-col justify-between">
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-200">
            {label}
          </p>
          <span className="text-xl font-bold">↗</span>
        </div>
        <p className="text-4xl font-bold mb-1">{value}</p>
        <p className="text-sm text-blue-200">{subtitle}</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow flex flex-col justify-between">
      <div className="flex items-center justify-between mb-3">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
          {label}
        </p>
        {badge && (
          <span
            className={`text-xs font-semibold px-2 py-0.5 rounded-full ${badgeStyles[badgeType] || "bg-gray-100 text-gray-600"}`}
          >
            {badge}
          </span>
        )}
      </div>
      <p className="text-3xl font-bold text-gray-900 mb-2">{value}</p>
      <p className="text-sm text-gray-500">{subtitle}</p>
    </div>
  );
}
