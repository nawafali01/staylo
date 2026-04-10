import React from "react";
import { propertiesData } from "../../../../data";
import PropertyCard from "./PropertyCard";
import EmptyStateCard from "./EmptyStateCard";

const PropertiesGrid = () => {
  return (
    <div className="grid grid-cols-3 gap-6 mb-8">
      {propertiesData.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
      <EmptyStateCard />
    </div>
  );
};

export default PropertiesGrid;
