import { PlusIcon } from "@heroicons/react/24/outline";
import UserStatsCard from "./UserStatsCard";
import UserDirectoryTable from "./UserDirectoryTable";
import { userStatistics, usersList } from "../../../../data";

export default function UsersManagement() {
  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Users</h2>
            <p className="text-gray-600 mt-1">
              Manage platform users and access controls.
            </p>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors shadow-sm">
            <PlusIcon className="w-5 h-5" />
            Add New User
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {userStatistics.map((stat, index) => (
            <UserStatsCard
              key={index}
              title={stat.title}
              value={stat.value}
              trend={stat.trend}
              trendUp={stat.trendUp}
              icon={stat.icon}
              color={stat.color}
            />
          ))}
        </div>

        <UserDirectoryTable users={usersList} />
      </div>
    </div>
  );
}
