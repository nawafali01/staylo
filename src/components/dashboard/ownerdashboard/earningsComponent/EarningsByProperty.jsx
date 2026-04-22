import {
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
} from "@heroicons/react/24/outline";
import { propertiesEarnings } from "../../../../data";

function OccupancyBar({ percent }) {
  return (
    <div className="w-28 h-1.5 bg-gray-100 rounded-full overflow-hidden">
      <div
        className="h-full bg-blue-500 rounded-full"
        style={{ width: `${percent}%` }}
      />
    </div>
  );
}

export default function EarningsByProperty() {
  const headers = ["PROPERTY", "BOOKINGS", "OCCUPANCY", "REVENUE", "TREND"];

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
      <h3 className="font-semibold text-gray-800 text-sm mb-4">
        Earnings by Property
      </h3>

      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-50">
            {headers.map((header) => (
                <th
                  key={header}
                  className="text-left text-xs font-medium text-gray-400 pb-3 pr-4 last:pr-0"
                >
                  {header}
                </th>
              ),
            )}
          </tr>
        </thead>
        <tbody>
          {propertiesEarnings.map((property) => (
            <tr key={property.id} className="border-b border-gray-50 last:border-0">
              {/* Property */}
              <td className="py-4 pr-4">
                <div className="flex items-center gap-3">
                  <img
                    src={property.image}
                    alt={property.name}
                    className="w-12 h-10 rounded-xl object-cover shrink-0"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-800 leading-tight">
                      {property.name}
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">
                      {property.address}
                    </p>
                  </div>
                </div>
              </td>

              {/* Bookings */}
              <td className="py-4 pr-4">
                <span className="text-sm text-gray-700 font-medium">
                  {property.bookings}
                </span>
              </td>

              {/* Occupancy */}
              <td className="py-4 pr-4">
                <OccupancyBar percent={property.occupancy} />
              </td>

              {/* Revenue */}
              <td className="py-4 pr-4">
                <span className="text-sm font-semibold text-gray-800">
                  {property.revenue}
                </span>
              </td>

              {/* Trend */}
              <td className="py-4">
                {property.trend === "up" ? (
                  <ArrowTrendingUpIcon className="w-5 h-5 text-green-500" />
                ) : (
                  <ArrowTrendingDownIcon className="w-5 h-5 text-red-400" />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
