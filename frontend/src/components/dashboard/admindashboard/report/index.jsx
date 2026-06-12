import {
  ArrowDownOnSquareIcon,
  DocumentChartBarIcon,
} from "@heroicons/react/24/outline";
import ReportStatsCard from "./ReportStatsCard";
import MonthlyRevenueChart from "./MonthlyRevenueChart";
import PortfolioHealth from "./PortfolioHealth";
import AIInsights from "./AlInsights";
import UpcomingRenewals from "./UpcomingRenewals";
import { reportStats } from "../../../../data";

export default function ReportsManagement() {
  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Reports</h2>
            <p className="text-gray-600 mt-1">
              View system analytics and portfolio performance.
            </p>
          </div>
          <button className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 px-5 py-2.5 rounded-lg font-medium flex items-center gap-2 transition-colors shadow-sm">
            <ArrowDownOnSquareIcon className="w-5 h-5" />
            Export Data
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {reportStats.map((stat) => (
            <ReportStatsCard key={stat.id} {...stat} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2">
            <MonthlyRevenueChart />
          </div>
          <div>
            <PortfolioHealth />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <AIInsights />
          <UpcomingRenewals />
        </div>
      </div>
    </div>
  );
}
