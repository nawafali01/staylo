import React, { useState } from "react";
import Filter from "./Filter.jsx";
import Search from "./Search.jsx";
import Card from "./Card.jsx";
import { properties } from "../../../data";
import {
  AdjustmentsHorizontalIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Button from "../common/Button";

// Filter configuration moved to main index
const filterData = {
  bedrooms: ["Any", "+1", "+2", "+3", "+4"],
  propertyTypes: ["House", "Apartment", "Condo", "TownHouse"],
};

const Index = () => {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className="bg-gray-50 min-h-screen p-4 md:p-6">
      <div className="md:hidden mb-4">
        <Search />
        <Button
          onClick={() => setShowFilter(true)}
          variant="secondary"
          className="mt-3 flex items-center gap-2 text-sm"
        >
          <AdjustmentsHorizontalIcon className="w-5 h-5" />
          Filters
        </Button>
      </div>

      {showFilter && (
        <div
          className="fixed inset-0 z-50 bg-black/40 md:hidden"
          onClick={() => setShowFilter(false)}
        >
          <div
            className="absolute left-0 top-0 h-full w-[280px] bg-white p-4 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <span className="font-bold text-gray-800">Filters</span>
              <button onClick={() => setShowFilter(false)}>
                <XMarkIcon className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            <Filter data={filterData} />
          </div>
        </div>
      )}

      <div className="hidden md:flex gap-6">
        <div className="w-[300px]">
          <Filter data={filterData} />
        </div>
        <div className="flex-1">
          <Search />
          <div className="grid grid-cols-3 gap-6 mt-6">
            {properties.map((property) => (
              <Card key={property.id} property={property} />
            ))}
          </div>
        </div>
      </div>
      <div className="md:hidden grid grid-cols-1 gap-4">
        {properties.map((property) => (
          <Card key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default Index;
