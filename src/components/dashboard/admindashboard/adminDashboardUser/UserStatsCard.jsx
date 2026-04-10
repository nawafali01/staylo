export default function UserStatsCard({
  title,
  value,
  trend,
  trendUp,
  icon,
  color,
}) {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow">
      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
        {title}
      </p>
      <p className="text-3xl font-bold text-gray-900 mb-3">{value}</p>
      <div className="flex items-center gap-2">
        <span
          className={`text-sm ${color || (trendUp ? "text-green-600" : "text-gray-500")}`}
        >
          {icon}
        </span>
        <span
          className={`text-sm ${color || (trendUp ? "text-green-600" : "text-gray-600")}`}
        >
          {trend}
        </span>
      </div>
    </div>
  );
}
