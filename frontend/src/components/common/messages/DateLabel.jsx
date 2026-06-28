import React from 'react';

const DateLabel = ({ label }) => (
  <div className="flex items-center justify-center my-4">
    <span className="text-[11px] font-semibold text-slate-400 bg-slate-100 rounded-full px-3 py-1 tracking-wide">
      {label}
    </span>
  </div>
);

export default DateLabel;
