import React from "react";
import { getBookingStatusStyles } from "../../../../utils/feature";

const BookingTableRow = ({ booking, isSelected, onSelect, onViewDetails }) => {
  return (
    <tr className="hover:bg-slate-50/50 transition-colors group">
      <td className="p-4">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => onSelect(booking.id)}
          className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
        />
      </td>
      <td className="px-6 py-5">
        <span className="text-sm font-medium text-slate-500">{booking.id}</span>
      </td>
      <td className="px-6 py-5">
        <div className="flex items-center gap-3">
          <img
            src={booking.tenant.avatar}
            alt={booking.tenant.name}
            className="w-10 h-10 rounded-full ring-2 ring-white shadow-sm"
          />
          <div>
            <p className="text-sm font-semibold text-slate-900">
              {booking.tenant.name}
            </p>
            <p className="text-xs text-slate-500">{booking.tenant.email}</p>
          </div>
        </div>
      </td>
      <td className="px-6 py-5">
        <span className="text-sm font-medium text-slate-700">
          {booking.property.name}
        </span>
      </td>
      <td className="px-6 py-5">
        <span className="text-sm text-slate-600">{booking.dates}</span>
      </td>
      <td className="px-6 py-5">
        <span className="text-sm font-bold text-slate-900 tracking-tight">
          {booking.amount}
        </span>
      </td>
      <td className="px-6 py-5">
        <span
          className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold border ${getBookingStatusStyles(
            booking.status,
          )}`}
        >
          {booking.status}
        </span>
      </td>
      <td className="px-6 py-5">
        <button
          onClick={() => onViewDetails(booking)}
          className="text-blue-600 hover:text-blue-800 text-sm font-bold tracking-wider transition-colors"
        >
          DETAILS
        </button>
      </td>
    </tr>
  );
};

export default BookingTableRow;
