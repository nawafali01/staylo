import renewalIcon from "../../../../assets/svg/renewal.svg";
import { upcomingRenewals, urgencyStyles } from "../../../../data";

export default function UpcomingRenewals() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col h-full">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-9 h-9 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0">
          <img src={renewalIcon} alt="Renewals" className="w-5 h-5" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900">
          Upcoming Renewals
        </h3>
      </div>

      <div className="flex flex-col divide-y divide-gray-100">
        {upcomingRenewals.map((tenant) => (
          <div
            key={tenant.id}
            className="flex items-center justify-between py-3 first:pt-0 last:pb-0"
          >
            <div className="flex items-center gap-3">
              {tenant.avatar ? (
                <img
                  src={tenant.avatar}
                  alt={tenant.name}
                  className="w-9 h-9 rounded-full object-cover"
                />
              ) : (
                <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-xs font-semibold text-gray-600">
                  {tenant.name.charAt(0)}
                </div>
              )}
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  {tenant.name}
                </p>
                <p className="text-xs text-gray-500">{tenant.unit}</p>
              </div>
            </div>

            <span
              className={`text-xs font-semibold px-2.5 py-1 rounded-md ${urgencyStyles[tenant.urgency]}`}
            >
              EXPIRING {tenant.daysLeft}D
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
