import {
  CheckCircleIcon,
  ChartBarIcon,
  UserIcon,
  BuildingOfficeIcon,
  CalendarIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/outline";

const StatsOverview = () => {
  const stats = [
    { id: 1, title: 'TOTAL USERS', value: '1,240', percentage: '+12%', color: 'bg-blue-500', icon: UserIcon },
    { id: 2, title: 'TOTAL PROPERTIES', value: '450', percentage: '+5.4%', color: 'bg-blue-500', icon: BuildingOfficeIcon },
    { id: 3, title: 'TOTAL BOOKINGS', value: '820', percentage: '+22%', color: 'bg-blue-500', icon: CalendarIcon },
    { id: 4, title: 'PENDING APPROVALS', value: '15', percentage: 'High Priority', color: 'bg-orange-500', icon: ClipboardDocumentListIcon }
  ];

  return (
    <div className="mb-8">
      {/* Header with Buttons */}
      <div className="flex items-center justify-end gap-3 mb-6 -mt-20">
        <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium">
          <CheckCircleIcon className="w-5 h-5" />
          Approve Listings
        </button>
        <button className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
          <ChartBarIcon className="w-5 h-5" />
          Generate Reports
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-xl ${item.color} bg-opacity-10`}>
                  <Icon className="w-6 h-6 text-gray-700" />
                </div>
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    item.id === 4
                      ? "bg-orange-50 text-orange-600"
                      : "bg-blue-50 text-blue-600"
                  }`}
                >
                  {item.percentage}
                </span>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-1">
                  {item.value}
                </h3>
                <p className="text-sm text-gray-500 font-medium">
                  {item.title}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StatsOverview;
