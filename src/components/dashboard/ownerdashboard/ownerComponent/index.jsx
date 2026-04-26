
import StatCard from "./StatCard.jsx";
import PropertySection from "./PropertySection.jsx";
import ActivitySection from "./ActivitySection.jsx";
import { ownerDashboardStatsData as dashboardStats } from "../../../../data/index.js";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";

const OwnerIndex = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 overflow-hidden">
      <div className="dashboard-layout">
        <div className="hidden lg:block lg:w-[240px] fixed left-0 top-0 h-full border-r border-gray-100 bg-white">

        </div>
        <div className="flex-1 lg:ml-[240px] overflow-hidden">


          <main className="px-4 py-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Overview</h1>
                <p className="text-gray-500">Here&apos;s what&apos;s happening with your properties today.</p>
              </div>
              <button className="bg-white border border-gray-300 rounded-xl px-4 py-2 text-sm font-medium hover:bg-gray-50 transition-colors">
                <CalendarDaysIcon className="w-4 h-4 inline mr-2" />
                This Week
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {dashboardStats.map((stat, index) => (
                <StatCard key={index} stat={stat} />
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <PropertySection />
              <ActivitySection />
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default OwnerIndex;
