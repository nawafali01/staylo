import React from "react";
import { MapPinIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { getStatusColor } from "../../../../utils/feature";

const PropertyCard = ({ property }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
      {/* Image */}
      <div className="relative h-64 bg-gray-200 overflow-hidden group">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <span
          className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold uppercase ${getStatusColor(property.status)}`}
        >
          {property.status}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-1 hover:text-blue-600 cursor-pointer transition-colors">
              {property.title}
            </h3>
            <div className="flex items-center gap-1 text-gray-600 text-sm">
              <MapPinIcon className="w-4 h-4" />
              <span>{property.location}</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-gray-900">
              ${property.price.toLocaleString()}
            </div>
            <div className="text-xs text-gray-500">/mo</div>
          </div>
        </div>

        {/* Note */}
        {property.note && (
          <div className="text-xs text-gray-500 italic mb-3 py-2 px-3 bg-gray-50 rounded-lg">
            {property.note}
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          {property.avatars && property.avatars.length > 0 ? (
            <div className="flex -space-x-2">
              {property.avatars.map((avatar, idx) => (
                <img
                  key={idx}
                  src={avatar}
                  alt="User avatar"
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                />
              ))}
              {property.avatarCount > 1 && (
                <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-semibold">
                  +{property.avatarCount}
                </div>
              )}
            </div>
          ) : (
            <div></div>
          )}

          <button className="text-blue-600 font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all group">
            Manage Property
            <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
