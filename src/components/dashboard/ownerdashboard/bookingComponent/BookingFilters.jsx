import React from 'react';
import { CalendarIcon, SparklesIcon } from '@heroicons/react/24/outline';

const BookingFilters = ({ activeTab, onTabChange, filterOptions }) => {
  return (
    <div className="flex items-center justify-between p-6 border-b border-slate-200">
      <div className="flex gap-2">
        {filterOptions.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
              activeTab === tab.id
                ? 'bg-indigo-50 text-indigo-700 shadow-sm'
                : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="flex gap-3">
        <button className="flex items-center gap-2 px-4 py-2.5 border border-slate-300 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors">
          <CalendarIcon className="w-4 h-4" />
          Date Range
        </button>
        <button className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors shadow-sm">
          <SparklesIcon className="w-4 h-4" />
          Bulk Actions
        </button>
      </div>
    </div>
  );
};

export default BookingFilters;
