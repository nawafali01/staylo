import PayoutAlertBanner from "./PayoutAlertBanner";
import EarningsStatsCards from "./EarningsStatsCards";
import RevenueOverviewChart from "./RevenueOverviewChart";
import EarningsByProperty from "./EarningsByProperty";
import RequestPayoutCard from "./RequestPayoutCard";
import WeeklyIntensityCard from "./WeeklyIntensityCard";
import PayoutHistoryTable from "./PayoutHistoryTable";

export default function EarningsPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">

      <PayoutAlertBanner />
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Earnings & Payouts</h1>
        <p className="text-sm text-gray-400 mt-1">
          Track your revenue and manage payouts across your entire digital
          estate.
        </p>
      </div>
      <EarningsStatsCards />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">

        <div className="lg:col-span-2">
          <RevenueOverviewChart />
        </div>
        <div>
          <RequestPayoutCard />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-10">
        <div className="lg:col-span-2 mb-10">
          <EarningsByProperty />
        </div>
        <div>
          <WeeklyIntensityCard />
        </div>
      </div>
      <PayoutHistoryTable />
    </div>
  );
}
