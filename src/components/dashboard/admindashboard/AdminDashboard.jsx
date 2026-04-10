import React from "react";
import StatsOverview from "./StatsOverview";
import RecentActivity from "./RecentActivity";
import PriorityProperties from "./PriorityProperties";
import RecentUsersTable from "./RecentUsersTable";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Admin Dashboard
        </h1>
        <p className="text-gray-600">
          Welcome back, <span className="font-semibold">Alexander Wright</span>
        </p>
      </div>

      <StatsOverview />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
        <div className="lg:col-span-5">
          <RecentActivity />
        </div>
        <div className="lg:col-span-7">
          <PriorityProperties />
        </div>
      </div>

      <RecentUsersTable />
    </div>
  );
};

export default AdminDashboard;
