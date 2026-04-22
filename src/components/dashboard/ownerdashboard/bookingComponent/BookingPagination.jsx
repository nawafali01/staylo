import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const BookingPagination = ({ currentPage, onPageChange, totalItems }) => {
  return (
    <div className="flex items-center justify-between px-6 py-4 border-t border-slate-200 bg-slate-50/50">
      <p className="text-sm text-slate-600">
        Showing 1-{totalItems < 8 ? totalItems : 8} of {totalItems} bookings
      </p>
      <div className="flex gap-2">
        <button className="p-2 rounded-lg border border-slate-300 hover:bg-white transition-colors disabled:opacity-50">
          <ChevronLeftIcon className="w-4 h-4 text-slate-600" />
        </button>
        {[1, 2, 3, '...', 6].map((page, idx) => (
          <button
            key={idx}
            onClick={() => typeof page === 'number' && onPageChange(page)}
            className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
              page === currentPage
                ? 'bg-blue-600 text-white'
                : 'border border-slate-300 text-slate-700 hover:bg-white'
            }`}
            disabled={page === '...'}
          >
            {page}
          </button>
        ))}
        <button className="p-2 rounded-lg border border-slate-300 hover:bg-white transition-colors">
          <ChevronRightIcon className="w-4 h-4 text-slate-600" />
        </button>
      </div>
    </div>
  );
};

export default BookingPagination;
