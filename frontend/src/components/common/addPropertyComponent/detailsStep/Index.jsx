import React from 'react';
import { roomDetailsFields } from "../../../../data";

export default function RoomDetailsIndex({ data, setField }) {
  return (
    <div className="mb-7">
      <div className="flex items-center gap-2 mb-5">
        <div className="w-1 h-5 bg-blue-600 rounded-full" />
        <h3 className="text-base font-bold text-gray-900">Room Details</h3>
      </div>
      <div className="grid grid-cols-3 gap-4 mb-4">
        {roomFields.map(([field, label, placeholder, type]) => (
          <div key={field}>
            <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2">
              {label}
            </label>
            <input
              type={type}
              value={data[field] || ""}
              onChange={(event) => setField(field, event.target.value)}
              placeholder={placeholder}
              className="w-full h-11 px-4 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2">
            YEAR BUILT
          </label>
          <input
            type="text"
            value={data.yearBuilt || ""}
            onChange={(event) => setField("yearBuilt", event.target.value)}
            placeholder="YYYY"
            className="w-full h-11 px-4 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
        </div>
        <div>
          <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2">
            PARKING SPACES
          </label>
          <div className="flex items-center gap-0 h-11">
            <button
              onClick={() =>
                setField("parking", Math.max(0, (data.parking || 0) - 1))
              }
              className="w-11 h-11 rounded-l-xl border border-gray-200 bg-gray-50 text-gray-600 text-lg font-bold hover:bg-gray-100 transition-colors flex items-center justify-center"
            >
              −
            </button>
            <div className="flex-1 h-11 border-t border-b border-gray-200 bg-gray-50 flex items-center justify-center text-sm font-semibold text-gray-800">
              {data.parking || 0}
            </div>
            <button
              onClick={() => setField("parking", (data.parking || 0) + 1)}
              className="w-11 h-11 rounded-r-xl border border-gray-200 bg-blue-600 text-white text-lg font-bold hover:bg-blue-700 transition-colors flex items-center justify-center"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
