import React from 'react';
import { getBookingStatColor } from '../../../../utils/feature';

const BookingStats = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/60 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
        >
          <p className="text-xs font-semibold text-slate-500 tracking-wider mb-3 uppercase">
            {stat.label}
          </p>
          <p className={`text-5xl font-bold mb-2 ${getBookingStatColor(stat.color)}`}>
            {stat.value}
          </p>
          <p className="text-sm text-slate-600">{stat.subtext}</p>
        </div>
      ))}
    </div>
  );
};

export default BookingStats;
