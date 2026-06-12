import { ArrowDownOnSquareIcon } from "@heroicons/react/24/outline";
import SparklineChart from "../../../../assets/svg/SparklineChart.svg";
import { portfolioHealthMetrics, portfolioUserGrowth } from "../../../../data";

export default function PortfolioHealth() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col justify-between h-full">
      <h3 className="text-lg font-semibold text-gray-900 mb-5">
        Portfolio Health
      </h3>

      <div className="flex flex-col gap-5 mb-6">
        {portfolioHealthMetrics.map((metric) => (
          <div key={metric.label}>
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-sm text-gray-600">{metric.label}</span>
              <span className={`text-sm font-semibold ${metric.textColor}`}>
                {metric.value}%
              </span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2">
              <div
                className={`${metric.color} h-2 rounded-full transition-all duration-500`}
                style={{ width: `${metric.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-600">
            {portfolioUserGrowth.label}
          </span>
          <span
            className={`text-sm font-semibold ${portfolioUserGrowth.textColor}`}
          >
            {portfolioUserGrowth.value}
          </span>
        </div>
        <img
          src={`${SparklineChart}#${portfolioUserGrowth.sparklinePoints}`}
          className="w-full h-14"
          aria-hidden="true"
        />
      </div>

      <div className="flex items-center justify-between mt-auto">
        <button className="text-blue-600 text-sm font-medium hover:underline transition-colors">
          View Detailed Demographics
        </button>
        <button className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors shadow-sm">
          <ArrowDownOnSquareIcon className="w-4 h-4 text-white" />
        </button>
      </div>
    </div>
  );
}
