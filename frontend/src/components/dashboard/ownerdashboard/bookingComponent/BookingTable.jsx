import React from 'react';
import BookingTableRow from './BookingTableRow';

const BookingTable = ({ bookings, selectedBookings, onSelectAll, onSelectBooking, onViewDetails }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-slate-50 border-b border-slate-200">
          <tr>
            <th className="w-12 p-4">
              <input
                type="checkbox"
                onChange={onSelectAll}
                checked={selectedBookings.length === bookings.length && bookings.length > 0}
                className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
              />
            </th>
            <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
              Booking ID
            </th>
            <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
              Tenant
            </th>
            <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
              Property
            </th>
            <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
              Dates
            </th>
            <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
              Amount
            </th>
            <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200">
          {bookings.map((booking) => (
            <BookingTableRow
              key={booking.id}
              booking={booking}
              isSelected={selectedBookings.includes(booking.id)}
              onSelect={onSelectBooking}
              onViewDetails={onViewDetails}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingTable;