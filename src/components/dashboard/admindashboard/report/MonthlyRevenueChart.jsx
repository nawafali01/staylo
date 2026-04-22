import { useState } from "react";
import { monthlyRevenueData, revenueChartTabs } from "../../../../data";

export default function MonthlyRevenueChart() {
  const [activeTab, setActiveTab] = useState("Monthly");
  const maxValue = Math.max(...monthlyRevenueData.map((data) => data.value));

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            Monthly Revenue
          </h3>
          <p className="text-sm text-gray-500 mt-0.5">
            Performance across the fiscal year
          </p>
        </div>
        <div className="flex bg-gray-100 rounded-lg p-1 gap-1">
          {revenueChartTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                activeTab === tab
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-end gap-2 h-44">
        {monthlyRevenueData.map((bar) => {
          const height = Math.round((bar.value / maxValue) * 100);
          return (
            <div
              key={bar.month}
              className="flex flex-col items-center flex-1 gap-1"
            >
              <div
                className="w-full flex items-end"
                style={{ height: "160px" }}
              >
                <div
                  className={`w-full rounded-t-md transition-all duration-300 ${
                    bar.active ? "bg-blue-600" : "bg-gray-200"
                  }`}
                  style={{ height: `${height}%` }}
                />
              </div>
              <span className="text-[10px] text-gray-400 font-medium">
                {bar.month}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
