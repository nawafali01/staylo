import { Link } from "react-router-dom";
import {
  RectangleStackIcon,
  HomeModernIcon,
  ArrowsPointingOutIcon,
  StarIcon,
  MapPinIcon,
  UsersIcon,
  BuildingOfficeIcon,
} from "@heroicons/react/24/outline";
import { getOwnerPropertyStatusStyles } from "../../../../utils/feature";

const PropertyCard = ({ property }) => {
  const statusStyles = getOwnerPropertyStatusStyles(property.status);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative h-64">
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4">
          <span
            className={`${statusStyles.badge} px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5`}
          >
            <span
              className={`w-2 h-2 rounded-full ${statusStyles.dot}`}
            ></span>
            {statusStyles.text}
          </span>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900">
            {property.name}
          </h3>
          <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded">
            <StarIcon className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-semibold text-gray-900">
              {property.rating}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-gray-600 mb-4">
          <MapPinIcon className="w-4 h-4" />
          <span className="text-sm">{property.location}</span>
        </div>

        <div className="flex items-center gap-4 mb-5 pb-5 border-b border-gray-100">
          {property.isCommercial ? (
            <>
              <div className="flex items-center gap-2 text-gray-700">
                <BuildingOfficeIcon className="w-4.5 h-4.5" />
                <span className="text-sm font-medium">
                  {property.rooms} Rooms
                </span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <UsersIcon className="w-4.5 h-4.5" />
                <span className="text-sm font-medium">
                  {property.capacity} Capacity
                </span>
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center gap-2 text-gray-700">
                <RectangleStackIcon className="w-4.5 h-4.5" />
                <span className="text-sm font-medium">
                  {property.beds} Beds
                </span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <HomeModernIcon className="w-4.5 h-4.5" />
                <span className="text-sm font-medium">
                  {property.baths} Baths
                </span>
              </div>
            </>
          )}
          <div className="flex items-center gap-2 text-gray-700">
            <ArrowsPointingOutIcon className="w-4.5 h-4.5" />
            <span className="text-sm font-medium">
              {property.sqft.toLocaleString()} sqft
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between mb-5">
          <div className="flex items-baseline gap-1">
            <span className="text-xl font-bold text-blue-600">
              ${property.price.toLocaleString()}
            </span>
            <span className="text-[10px] text-gray-500 font-medium">/mo</span>
          </div>
          <div className="flex items-center gap-2">
            <span
              className={`w-1.5 h-1.5 rounded-full ${statusStyles.dot}`}
            ></span>
            <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">
              {property.statusLabel}
            </span>
          </div>
        </div>

        <div className="flex gap-2">
          <button className="flex-1 px-3 py-1.5 border border-gray-300 text-gray-700 rounded-lg text-xs font-semibold hover:bg-gray-50 transition-colors">
            Edit
          </button>
          <button className="flex-1 px-3 py-1.5 bg-blue-600 text-white rounded-lg text-xs font-semibold hover:bg-blue-700 transition-colors">
            <Link to={`/owner/property-details/${property.id}`}>View Details</Link>
          </button>
        </div>

        <button className="w-full mt-2 px-3 py-1.5 border border-orange-300 text-orange-600 rounded-lg text-xs font-semibold hover:bg-orange-50 transition-colors">
          Manage Bookings
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;
