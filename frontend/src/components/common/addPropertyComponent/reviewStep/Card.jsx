import React from 'react';
import { EditIcon } from "../../../../assets/svg";

export default function Card({ title, subtitle, onEdit, children }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
      <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
        <div>
          <h3 className="text-base font-bold text-gray-900 leading-none mb-1">
            {title}
          </h3>
          <p className="text-xs text-gray-400">{subtitle}</p>
        </div>
        <button
          onClick={onEdit}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-blue-600 font-bold hover:bg-blue-50 transition-colors"
        >
          <EditIcon className="w-3.5 h-3.5" />
          <span className="text-[10px] uppercase tracking-widest">Edit</span>
        </button>
      </div>
      <div className="px-6 py-5">{children}</div>
    </div>
  );
}
