import React from "react";
import { recentActivity } from "../../../data";

const RecentActivity = () => {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm h-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900">Recent Activity</h2>
        <button className="text-blue-600 text-sm font-semibold hover:text-blue-700 transition-colors">
          View All
        </button>
      </div>
      <div className="space-y-5">
        {recentActivity.map((item) => (
          <div key={item.id} className="flex items-start justify-between gap-4">
            <div className="flex gap-3 flex-1">
              <img
                src={item.userImage}
                className="w-11 h-11 rounded-full object-cover ring-2 ring-gray-100"
                alt={item.userName}
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-900 leading-relaxed">
                  <span className="font-semibold">{item.userName}</span>{" "}
                  {item.action} {item.target}
                </p>
                <p className="text-xs text-gray-400 mt-1">{item.time}</p>
              </div>
            </div>
            <span
              className={`text-xs font-semibold px-2.5 py-1 rounded-md whitespace-nowrap ${
                item.status === "PENDING"
                  ? "bg-orange-50 text-orange-600"
                  : item.status === "APPROVED"
                    ? "bg-blue-50 text-blue-600"
                    : "bg-red-50 text-red-600"
              }`}
            >
              {item.status}
            </span>
          </div>
        ))}
      </div>
      <button className="w-full mt-6 py-3 border border-gray-200 rounded-xl text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-colors">
        Load More History
      </button>
    </div>
  );
};

export default RecentActivity;
