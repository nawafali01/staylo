import React from 'react';

export default function Section({ label, children }) {
  return (
    <div className="mb-6">
      <p className="text-[11px] font-bold text-blue-600 uppercase tracking-widest mb-4">
        {label}
      </p>
      <div className="bg-white rounded-xl border border-gray-200 p-5">
        {children}
      </div>
    </div>
  );
}
