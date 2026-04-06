import React from "react";
import { dashboardStatsCardIconMap } from "../../../data/index";

export default function DashboardStatsCard({ icon, value, label, badge }) {
  const Icon = dashboardStatsCardIconMap[icon];

  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 bg-blue-50 rounded-xl">
          {Icon && <Icon className="h-6 w-6 text-blue-600" />}
        </div>
        {badge && (
          <span className="text-[10px] font-bold bg-green-50 text-green-600 px-2.5 py-1 rounded-full uppercase tracking-wider">
            {badge}
          </span>
        )}
      </div>
      <div>
        <h4 className="text-2xl font-bold text-slate-900 mb-1">{value}</h4>
        <p className="text-sm font-medium text-slate-500">{label}</p>
      </div>
    </div>
  );
}
