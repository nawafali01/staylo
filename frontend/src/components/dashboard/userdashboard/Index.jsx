import DashboardStatsCard from "./DashboardStatsCard";
import RecentBookings from "./RecentBookings";
import SavedProperties from "./SavedProperties";
import { userDashboardStatsData } from "../../../data/index";

export default function UserDashboardIndex() {
  return (
    <>
      <h2 className="text-3xl font-bold text-slate-900">User Dashboard</h2>
      <p className="text-slate-500 mt-1 mb-8">
        Welcome back,{" "}
        <span className="text-blue-600 font-semibold">Alexander</span>. Here's
        what's happening with your properties.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {userDashboardStatsData.map((stat) => (
          <DashboardStatsCard key={stat.id} {...stat} />
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentBookings />
        <SavedProperties />
      </div>
    </>
  );
}
