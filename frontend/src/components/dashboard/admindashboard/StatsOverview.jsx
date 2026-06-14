import {
  CheckCircleIcon,
  ChartBarIcon,
  UserIcon,
  BuildingOfficeIcon,
  CalendarIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/outline";
import { adminStatsOverviewData } from "../../../data";

const StatsOverview = () => {
  return (

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {adminStatsOverviewData.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-xl ${item.color} bg-opacity-10`}>
                  <Icon className="w-6 h-6 text-gray-700" />
                </div>
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    item.id === 4
                      ? "bg-orange-50 text-orange-600"
                      : "bg-blue-50 text-blue-600"
                  }`}
                >
                  {item.percentage}
                </span>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-1">
                  {item.value}
                </h3>
                <p className="text-sm text-gray-500 font-medium">
                  {item.title}
                </p>
              </div>
            </div>
          );
        })}
      </div>
  );
};

export default StatsOverview;
