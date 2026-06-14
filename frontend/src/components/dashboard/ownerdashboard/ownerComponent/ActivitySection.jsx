import { ownerBookingsData } from "../../../../data/index.js";
import { getBookingStatusStyles } from "../../../../utils/feature.js";
import { AdjustmentsHorizontalIcon, ArrowDownTrayIcon } from "@heroicons/react/24/outline";

const ActivitySection = () => {
  return (
    <section className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm overflow-hidden">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Recent Bookings</h2>
          <p className="text-xs text-gray-500 mt-1 font-medium">Monitoring your latest transactions</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2.5 bg-gray-50 rounded-xl text-gray-500 hover:text-blue-600 transition-colors border border-gray-100">
            <AdjustmentsHorizontalIcon className="w-5 h-5" />
          </button>
          <button className="p-2.5 bg-gray-50 rounded-xl text-gray-500 hover:text-blue-600 transition-colors border border-gray-100">
            <ArrowDownTrayIcon className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-gray-50">
              <th className="pb-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest px-4">Tenant</th>
              <th className="pb-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest px-4">Property</th>
              <th className="pb-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest px-4">Dates</th>
              <th className="pb-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest px-4 text-center">Status</th>
              <th className="pb-4 text-[11px] font-bold text-gray-400 uppercase tracking-widest px-4 text-right">Amount</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {ownerBookingsData.slice(0, 5).map((booking) => (
              <tr key={booking.id} className="group hover:bg-gray-50/50 transition-colors cursor-pointer">
                <td className="py-4 px-4">
                  <div className="flex items-center gap-3">
                    <img 
                      src={booking.tenant.avatar} 
                      alt={booking.tenant.name} 
                      className="w-10 h-10 rounded-xl object-cover ring-2 ring-gray-50"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-gray-900">{booking.tenant.name}</h4>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <h4 className="text-sm font-semibold text-gray-700">{booking.property.name}</h4>
                </td>
                <td className="py-4 px-4">
                  <span className="text-xs font-medium text-gray-500">{booking.dates}</span>
                </td>
                <td className="py-4 px-4 text-center">
                  <span className={`text-[10px] font-bold px-3 py-1 rounded-lg border uppercase tracking-wider ${getBookingStatusStyles(booking.status)}`}>
                    {booking.status}
                  </span>
                </td>
                <td className="py-4 px-4 text-right">
                  <span className="text-sm font-bold text-gray-900">{booking.amount}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ActivitySection;
