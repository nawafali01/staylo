// src/components/admin/UserDirectoryTable.jsx

import React from "react";
import {
  ArrowDownOnSquareIcon,
  AdjustmentsHorizontalIcon,
} from "@heroicons/react/24/outline";

export default function UserDirectoryTable({ users }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      {/* Table Header */}
      <div className="flex items-center justify-between p-6 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Directory</h3>
        <div className="flex gap-2">
          <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <AdjustmentsHorizontalIcon className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <ArrowDownOnSquareIcon className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Table Column Headers */}
      <div className="grid grid-cols-12 gap-4 px-6 py-3 bg-gray-50 border-b border-gray-200">
        <div className="col-span-5 text-xs font-semibold text-gray-500 uppercase tracking-wider">
          User
        </div>
        <div className="col-span-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
          Role
        </div>
        <div className="col-span-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
          Status
        </div>
        <div className="col-span-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
          Action
        </div>
      </div>

      {/* Table Body */}
      <div className="divide-y divide-gray-200">
        {users.map((user) => (
          <div
            key={user.id}
            className="grid grid-cols-12 gap-4 px-6 py-4 hover:bg-gray-50 transition-colors items-center"
          >
            {/* User Info */}
            <div className="col-span-5 flex items-center gap-3">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-medium text-gray-900">{user.name}</p>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
            </div>

            {/* Role Badge */}
            <div className="col-span-2">
              <span
                className={`inline-flex px-3 py-1 rounded-md text-sm font-medium ${
                  user.role === "Owner"
                    ? "bg-blue-50 text-blue-700"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {user.role}
              </span>
            </div>

            {/* Status */}
            <div className="col-span-3">
              <div className="flex items-center gap-2">
                <div
                  className={`w-2 h-2 rounded-full ${
                    user.status === "Active" ? "bg-green-500" : "bg-gray-300"
                  }`}
                />
                <span
                  className={`text-sm font-medium ${
                    user.status === "Active" ? "text-gray-900" : "text-gray-500"
                  }`}
                >
                  {user.status}
                </span>
              </div>
            </div>

            {/* Action Button */}
            <div className="col-span-2">
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors">
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
