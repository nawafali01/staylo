import React from "react";
import { savedProperties } from "../../../data/index";

export default function SavedProperties() {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
      <div className="p-6 border-b border-slate-50 flex items-center justify-between">
        <h3 className="text-lg font-bold text-slate-900">Saved Properties</h3>
        <button className="text-sm font-semibold text-blue-600 hover:text-blue-700">
          Explore New
        </button>
      </div>
      <div className="p-6 space-y-4">
        {savedProperties.map((property) => (
          <div
            key={property.id}
            className="flex gap-4 p-4 rounded-xl border border-slate-50 hover:border-blue-100 transition-colors group cursor-pointer"
          >
            <div className="w-20 h-20 bg-slate-100 rounded-lg overflow-hidden flex-shrink-0">
              <img
                src={`https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=200&q=80`}
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all"
              />
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-bold text-slate-900 mb-1">
                {property.name}
              </h4>
              <p className="text-xs text-slate-500 mb-2">{property.location}</p>
              <div className="flex items-center justify-between">
                <p className="text-sm font-bold text-blue-600">
                  ${property.price.toLocaleString()}
                  <span className="text-[10px] text-slate-400 font-normal">
                    /mo
                  </span>
                </p>
                <div className="flex gap-2 text-[10px] text-slate-400">
                  <span>{property.beds} Bed</span>
                  <span>{property.baths} Bath</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
