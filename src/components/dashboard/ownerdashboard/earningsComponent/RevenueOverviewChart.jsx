import { useState } from "react";
import { revenueChartData, chartPeriods } from "../../../../data";
import { buildSmoothPath } from "../../../../utils/feature";

export default function RevenueOverviewChart() {
    const [activePeriod, setActivePeriod] = useState("1 Month");
    const width = 560;
    const height = 200;
    const padding = 40;

    const { path, coords } = buildSmoothPath(revenueChartData, width, height, padding);

    const areaPath =
        path +
        ` L ${coords[coords.length - 1].x} ${height - padding} L ${coords[0].x} ${height - padding} Z`;

    return (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <div className="flex items-start justify-between mb-4">
                <div>
                    <h3 className="font-semibold text-gray-800 text-sm">Revenue Overview</h3>
                    <p className="text-xs text-gray-400">Performance over selected period</p>
                </div>
                <div className="flex items-center gap-1 bg-gray-50 rounded-xl p-1">
                    {chartPeriods.map((period) => (
                        <button
                            key={period}
                            onClick={() => setActivePeriod(period)}
                            className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all ${activePeriod === period
                                    ? "bg-white text-blue-600 shadow-sm"
                                    : "text-gray-400 hover:text-gray-600"
                                }`}
                        >
                            {period}
                        </button>
                    ))}
                </div>
            </div>

            <div className="w-full overflow-hidden">
                <svg
                    viewBox={`0 0 ${width} ${height}`}
                    className="w-full"
                    preserveAspectRatio="none"
                    style={{ height: 180 }}
                >
                    <defs>
                        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.15" />
                            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.01" />
                        </linearGradient>
                    </defs>

                    {/* Area fill */}
                    <path d={areaPath} fill="url(#chartGradient)" />

                    {/* Line */}
                    <path
                        d={path}
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />

                    {/* Data points */}
                    {coords.map((coord, index) => (
                        <g key={index}>
                            <circle cx={coord.x} cy={coord.y} r="4" fill="white" stroke="#3b82f6" strokeWidth="2" />
                            {index === coords.length - 2 && (
                                <circle cx={coord.x} cy={coord.y} r="6" fill="#3b82f6" opacity="0.2" />
                            )}
                        </g>
                    ))}
                </svg>

                {/* X-axis labels */}
                <div className="flex justify-between px-2 mt-1">
                    {revenueChartData.map((data, index) => (
                        <span
                            key={index}
                            className={`text-xs ${data.date === "CURRENT" ? "text-blue-500 font-semibold" : "text-gray-400"
                                }`}
                        >
                            {data.date}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
