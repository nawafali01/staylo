import { useState, useMemo } from "react";
import { revenueStatsData, revenuePeriodOptions } from "../../../../data";
import { buildSmoothPath } from "../../../../utils/feature";
import { RevenueSVG } from "../../../../assets/svg/RevenueOverviewChartSVG";

function RevenueOverviewChart() {
    const [activePeriod, setActivePeriod] = useState("1 Month");

    const chartWidth = 560;
    const chartHeight = 200;
    const chartPadding = 40;

    const { coords } = useMemo(() =>
        buildSmoothPath(revenueStatsData, chartWidth, chartHeight, chartPadding),
        [chartWidth, chartHeight, chartPadding]
    );

    return (
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 hover:shadow-md transition-shadow duration-300">

            <div className="flex items-center justify-between mb-6">
                <header>
                    <h3 className="font-bold text-slate-800 text-base leading-tight">Revenue Overview</h3>
                    <p className="text-[11px] text-slate-400 font-medium mt-1">Real-time performance analytics</p>
                </header>

                <nav className="flex items-center gap-1 bg-slate-50 border border-slate-100 rounded-xl p-1">
                    {revenuePeriodOptions.map((period) => (
                        <button
                            key={period}
                            onClick={() => setActivePeriod(period)}
                            className={`text-[10px] px-3 py-1.5 rounded-lg font-semibold transition-all duration-200 ${activePeriod === period
                                ? "bg-white text-blue-600 shadow-sm ring-1 ring-slate-100"
                                : "text-slate-400 hover:text-slate-600 hover:bg-slate-100/50"
                                }`}
                        >
                            {period}
                        </button>
                    ))}
                </nav>
            </div>

            <div className="w-full">
                <RevenueSVG
                    className="w-full h-auto overflow-visible"
                    style={{ maxHeight: "180px" }}
                />

                <div className="flex justify-between items-center px-1 mt-4 border-t border-slate-50 pt-3">
                    {revenueStatsData.map((item, index) => (
                        <span
                            key={`label-${index}`}
                            className={`text-[10px] font-bold tracking-wider ${index === coords.length - 1 ? "text-blue-600" : "text-slate-400"
                                }`}
                        >
                            {item.date}
                        </span>
                    ))}
                </div>
            </div>

        </div>
    );
}

export default RevenueOverviewChart;