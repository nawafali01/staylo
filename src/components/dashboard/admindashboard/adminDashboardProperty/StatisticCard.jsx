import React from "react";

const StatsCard = ({ icon, label, value, subtitle, variant = "secondary" }) => {
  if (variant === "primary") {
    return (
      <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white">
        <div className="flex items-center gap-2 mb-3">
          {icon}
          <span className="text-sm font-medium opacity-90">{label}</span>
        </div>
        <div className="text-4xl font-bold mb-1">{value}</div>
        {subtitle && <div className="text-sm opacity-80">{subtitle}</div>}
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-200">
      <div className="text-xs font-semibold text-gray-500 mb-2 tracking-wide">
        {label}
      </div>
      <div className="text-4xl font-bold text-gray-900">{value}</div>
    </div>
  );
};

export default StatsCard;
