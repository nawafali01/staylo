import React from "react";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import { filterTabs } from "../../../../data";

const FilterTabs = ({ activeFilter, setActiveFilter }) => {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex gap-3">
        {filterTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveFilter(tab.id)}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              activeFilter === tab.id
                ? "bg-gray-900 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <button className="text-blue-600 font-medium flex items-center gap-2 hover:text-blue-700">
        <AdjustmentsHorizontalIcon className="w-4 h-4" />
        Advanced Filters
      </button>
    </div>
  );
};

export default FilterTabs;
