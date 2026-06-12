import { MagnifyingGlassIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { filterOptions } from "../../../../data/index";

const FilterBar = ({
  activeFilter,
  onFilterChange,
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
}) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg mb-6">
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1 max-w-md relative">
          <MagnifyingGlassIcon
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
          />
          <input
            type="text"
            placeholder="Search properties..."
            value={searchQuery}
            onChange={(event) => onSearchChange(event.target.value)}
            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="flex gap-2">
          {filterOptions.map((filter) => (
            <button
              key={filter.id}
              onClick={() => onFilterChange(filter.id)}
              className={`px-4 py-2.5 rounded-lg font-medium transition-colors ${activeFilter === filter.id
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="relative">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors">
            <span>Property Type: All</span>
            <ChevronDownIcon className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="mt-4 flex justify-end">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Sort by:</span>
          <button
            onClick={onSortChange}
            className="text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            {sortBy} <ChevronDownIcon className="w-4 h-4 inline ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
