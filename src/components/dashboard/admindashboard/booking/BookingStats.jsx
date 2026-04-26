import { ArrowDownIcon } from "@heroicons/react/24/outline";
import { formatCurrency } from "../../../../utils/feature";

const BookingsStats = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="text-sm text-gray-600 mb-2">TOTAL REVENUE</div>
        <div className="text-4xl font-bold text-blue-600 mb-2">
          ${formatCurrency(stats.totalRevenue)}
        </div>
        <div className="flex items-center text-sm text-red-600">
          <ArrowDownIcon className="w-4 h-4 mr-1" />+{stats.revenueChange}% from
          last month
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="text-sm text-gray-600 mb-2">TOTAL BOOKINGS</div>
        <div className="text-4xl font-bold text-gray-900 mb-2">
          {stats.totalBookings}
        </div>
        <div className="text-sm text-gray-500">
          Across {stats.totalLocations} locations
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="text-sm text-gray-600 mb-2">ACTIVE BOOKINGS</div>
        <div className="text-4xl font-bold text-gray-900 mb-2">
          {stats.activeBookings}
        </div>
        <div className="h-1 bg-orange-500 w-16 rounded mt-3"></div>
      </div>
    </div>
  );
};

export default BookingsStats;
