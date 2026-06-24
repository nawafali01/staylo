import React from "react";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { detailPropertySummaryAmenities } from "../../../data";

const Summary = ({ property }) => {
  return (
    <div className="rounded-xl border border-gray-200 overflow-hidden bg-white">
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-56 object-cover"
      />
      <div className="flex items-start justify-between px-5 pt-4 pb-2">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            {property.title}
          </h2>
          <p className="text-sm text-gray-500 mt-1 flex items-center gap-1.5">
            <MapPinIcon className="w-4 h-4 text-gray-400" />
            {property.location}
          </p>
        </div>
        <div className="text-right">
          <span className="text-3xl font-bold text-blue-600">
            ${property.price.toLocaleString()}
          </span>
          <span className="text-xs text-gray-400 block tracking-wide">/night</span>
        </div>
      </div>
      <div className="flex gap-2 px-5 pb-5">
        {detailPropertySummaryAmenities.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className="flex flex-col items-center justify-center flex-1 bg-gray-50/50 hover:bg-gray-50 transition-colors border border-gray-100 rounded-xl py-3 px-2"
            >
              <Icon className="w-5 h-5 text-blue-600 mb-2" />
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                {property[item.valueKey]} {item.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Summary;
