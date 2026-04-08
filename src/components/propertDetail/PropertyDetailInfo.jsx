import React from "react";
import { propertyInfoIconMap } from "../../data";

const PropertyDetailInfo = ({ property }) => {
  return (
    <>
     <div className="flex items-center gap-3 md:gap-6 px-4 md:px-12 py-6 border-t border-b border-gray-200 mb-8">
  <div className="flex items-center gap-2 md:gap-3">
    <span className="text-xl md:text-2xl">🛏️</span>
    <div>
      <p className="font-semibold text-gray-900 text-xs md:text-sm">
        {property.beds} Bedrooms
      </p>
      <p className="text-xs text-gray-400">{property.bedType}</p>
    </div>
  </div>
  <div className="flex items-center gap-2 md:gap-3">
    <span className="text-xl md:text-2xl">🚿</span>
    <div>
      <p className="font-semibold text-gray-900 text-xs md:text-sm">
        {property.baths} Bathrooms
      </p>
      <p className="text-xs text-gray-400">{property.bathroomType}</p>
    </div>
  </div>
  <div className="flex items-center gap-2 md:gap-3">
    <span className="text-xl md:text-2xl">📐</span>
    <div>
      <p className="font-semibold text-gray-900 text-xs md:text-sm">
        {property.sqft} sqft
      </p>
      <p className="text-xs text-gray-400">{property.areaType}</p>
    </div>
  </div>
</div>

      {(() => {
        const description = property?.description ?? [];
        const amenities = property?.amenities ?? [];
        const totalAmenities = property?.totalAmenities ?? amenities.length;

        return (
          <>
            <div className="mb-8 px-12 text-justify">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                About this property
              </h2>
              {description.map((para, index) => (
                <p
                  key={index}
                  className="text-gray-700 text-lg leading-relaxed mb-3"
                >
                  {para}
                </p>
              ))}
              <button className="text-blue-600 text-lg font-medium hover:underline">
                Show more →
              </button>
            </div>

            <div className="px-12">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Amenities
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 mb-5">
                  {amenities.map((amenity, index) => {
                    const Icon = propertyInfoIconMap[amenity.icon];
                    return (
                      <div
                        key={index}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        {Icon ? (
                          <Icon className="w-4 h-4 text-blue-600" />
                        ) : null}{" "}
                        {amenity.label}
                      </div>
                    );
                  })}
                </div>
                <button className="border border-gray-300 text-gray-700 text-sm px-5 py-2.5 rounded-xl hover:bg-gray-50 transition-colors">
                  Show all {totalAmenities} amenities
                </button>
              </div>
            </div>
          </>
        );
      })()}

      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src={property.hostImage} className="w-12 h-12 rounded-full" />
          <div>
            <p className="font-semibold text-gray-900 text-sm">
              Hosted by {property.hostName}
            </p>
            <p className="text-xs text-gray-400">
              Joined in {property.hostJoined}{" "}
              {property.isSuperhost && (
                <>
                  • <span className="text-blue-600">Superhost</span>
                </>
              )}
            </p>
          </div>
        </div>
        <button className="bg-blue-600 text-white text-sm px-2 py-1 md:px-5 py-2.5 rounded-xl">
          Contact Owner
        </button>
      </div>
    </>
  );
};

export default PropertyDetailInfo;
