import StatCard from "./StatCard.jsx";
import PropertySection from "./PropertySection.jsx";
import ActivitySection from "./ActivitySection.jsx";
import PropertyPerformance from "./PropertyPerformance.jsx";
import UserTable from "./UserTable.jsx";
import Header from "./Header.jsx";
import { ownerDashboardStatsData as dashboardStats } from "../../../../data/index.js";

const OwnerIndex = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 overflow-hidden">
      <main className="max-w-[1600px] mx-auto px-8 py-10">
        <Header />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {dashboardStats.map((stat, index) => (
            <StatCard key={index} stat={stat} />
          ))}
        </div>

        <div className="mb-10">
          <PropertySection />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[2.2fr_0.8fr] gap-6">
          <ActivitySection />
          <div className="space-y-6">
            <PropertyPerformance />
            <UserTable />
          </div>
        </div>
      </main>
    </div>
  );
};

export default OwnerIndex;
