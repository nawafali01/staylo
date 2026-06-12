import {
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
} from "@heroicons/react/24/outline";

const BookingFilters = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="flex items-center justify-between bg-gray-200 h-20 mb-6">
      <div className="flex gap-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${activeTab === tab
                ? "bg-blue-50 text-blue-600"
                : "bg-gray-50 text-gray-600 hover:bg-gray-100"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <div className="relative">
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Find by guest or ID..."
            className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
          />
        </div>
        <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50">
          <AdjustmentsHorizontalIcon className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default BookingFilters;
