import React from "react";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { detailPropertySummaryAmenities } from "../../data";

const DetailPropertySummary = ({ property }) => {
  return (
    <div className="rounded-xl border border-gray-200 overflow-hidden bg-white">
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-56 object-cover"
      />
      <div className="flex items-start justify-between px-5 pt-4 pb-2">
        <div>
          <h2 className="text-base font-semibold text-gray-900">
            {property.title}
          </h2>
          <p className="text-sm text-gray-400 mt-1 flex items-center gap-2">
            <MapPinIcon className="w-4 h-4 text-blue-600" />
            {property.location}
          </p>
        </div>
        <div className="text-right">
          <span className="text-xl font-semibold text-blue-600">
            ${property.price.toLocaleString()}
          </span>
          <span className="text-xs text-gray-400 block">/mo</span>
        </div>
      </div>
      <div className="flex gap-2 px-5 pb-5">
        {detailPropertySummaryAmenities.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className="flex-1 bg-gray-50 border border-gray-100 rounded-lg py-2 px-3 text-center"
            >
              <Icon className="w-5 h-5 text-blue-600 mx-auto mb-1" />
              <span className="text-xs text-gray-500">
                {property[item.valueKey]} {item.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DetailPropertySummary;
