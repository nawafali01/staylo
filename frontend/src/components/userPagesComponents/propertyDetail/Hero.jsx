import React from "react";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { getGalleryData, formatBillsIncluded } from "../../../utils/feature";
import Gallery from "./Gallery";

const Hero = ({ property }) => {
  const { gallery, totalPhotos } = getGalleryData(property);

  return (
    <div className="py-6 px-12">
      <div className="flex items-center gap-4">
        <div className="bg-green-100 text-green-700 rounded-full px-3 py-0.5 text-sm font-medium border border-green-200">
          {property?.status ?? "Available"}
        </div>
      </div>

      <div className="flex justify-between items-start mt-2">
        <div className="flex flex-col gap-1">
          <h1 className="text-black text-4xl font-bold tracking-tight">{property.title}</h1>
          <div className="flex items-center gap-1.5 text-gray-500">
            <MapPinIcon className="w-4 h-4" />
            <p className="text-sm font-medium">{property.location}</p>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-blue-600 text-sm font-bold flex items-center gap-1">
              ⭐ {property?.rating ?? "N/A"}
            </span>
            <span className="text-gray-400 text-xs">({property?.reviewCount ?? 0} reviews)</span>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-blue-600 font-bold text-2xl">${property.price}</span>
            <span className="text-sm font-normal text-gray-400">/mo</span>
          </div>
          <p className="text-xs text-gray-400 mt-1">{formatBillsIncluded(property.billsIncluded)}</p>
        </div>
      </div>


      <Gallery gallery={gallery} totalPhotos={totalPhotos} />
    </div>
  );
};

export default Hero;
