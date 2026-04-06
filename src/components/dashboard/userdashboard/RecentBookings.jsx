import React from "react";
import { recentBookings } from "../../../data/index";

export default function RecentBookings() {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
      <div className="p-6 border-b border-slate-50 flex items-center justify-between">
        <h3 className="text-lg font-bold text-slate-900">Recent Bookings</h3>
        <button className="text-sm font-semibold text-blue-600 hover:text-blue-700">
          View All
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-slate-50/50 text-slate-500 text-[11px] font-bold uppercase tracking-widest">
            <tr>
              <th className="px-6 py-4">Property</th>
              <th className="px-6 py-4">Dates</th>
              <th className="px-6 py-4 text-center">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {recentBookings.map((booking) => (
              <tr
                key={booking.id}
                className="hover:bg-slate-50/50 transition-colors"
              >
                <td className="px-6 py-4">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      {booking.name}
                    </p>
                    <p className="text-xs text-slate-500">{booking.location}</p>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-slate-600">
                  {booking.dates}
                </td>
                <td className="px-6 py-4 text-center">
                  <span
                    className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${
                      booking.status === "BOOKED"
                        ? "bg-blue-50 text-blue-600 border-blue-100"
                        : booking.status === "COMPLETED"
                          ? "bg-green-50 text-green-600 border-green-100"
                          : "bg-red-50 text-red-600 border-red-100"
                    }`}
                  >
                    {booking.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
