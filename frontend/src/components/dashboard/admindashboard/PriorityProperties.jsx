import React from "react";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { adminPriorityProperties } from "../../../data";

const PriorityProperties = () => {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900">Priority Properties</h2>
        <button className="text-blue-600 text-sm font-semibold hover:text-blue-700 transition-colors">
          Explore Portfolio
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {adminPriorityProperties.map((property) => (
          <div
            key={property.id}
            className="rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 group"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={property.image}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                alt={property.title}
              />
              <span
                className={`absolute top-3 left-3 text-xs font-semibold px-3 py-1.5 rounded-lg shadow-sm ${
                  property.tag === "MANAGED"
                    ? "bg-blue-500 text-white"
                    : "bg-orange-500 text-white"
                }`}
              >
                {property.tag}
              </span>
            </div>
            <div className="p-5">
              <h4 className="font-bold text-base text-gray-900 mb-2">
                {property.title}
              </h4>
              <p className="text-sm text-gray-500 flex items-center gap-1.5 mb-4">
                <MapPinIcon className="w-4 h-4" /> {property.location}
              </p>
              <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                <span className="text-sm font-medium text-gray-600 flex items-center gap-2 whitespace-nowrap">
                  <div
                    className={`w-2 h-2 rounded-full flex-shrink-0 ${
                      property.status === "Occupied"
                        ? "bg-green-500"
                        : "bg-orange-400"
                    }`}
                  />
                  {property.status}
                </span>
                <button className="text-sm font-semibold text-blue-600 hover:text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors whitespace-nowrap">
                  Manage
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriorityProperties;
