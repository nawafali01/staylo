import React from "react";
import Filter from "../components/propertyListingCard/Filter";
import PropertySearch from "../components/propertyListingCard/PropertySearch.jsx";
import PropertyCard from "../components/propertyListingCard/PropertyCard.jsx";
import { Properties } from "../data";

const PropertyListing = () => {
  return (
    <>
      <div className="flex gap-6 p-6 bg-gray-50 min-h-screen">
        <Filter />
        <div className="flex-1">
          <PropertySearch />
          <div className="grid grid-cols-3 gap-4 mt-4">
            {Properties.map(property=>(
              <PropertyCard key={property.id} Properties={property} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyListing;
