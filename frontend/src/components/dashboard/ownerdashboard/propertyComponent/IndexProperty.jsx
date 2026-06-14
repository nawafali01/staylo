import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PlusIcon } from "@heroicons/react/24/outline";
import PropertyCard from "./PropertyCard";
import FilterBar from "./FilterBar";
import AddPropertyModal from "../../../modal/ownerDashboardmodal/AddPropertyModal";
import { openAddPropertyModal } from "../../../../redux/slices/modalSlice";
import { ownerPropertiesData } from "../../../../data/index";
import {
  filterPropertiesData,
  sortPropertiesData,
} from "../../../../utils/feature";

const IndexProperty = () => {
  const dispatch = useDispatch();
  const addPropertyModalOpen = useSelector(
    (state) => state.modal.addPropertyModalOpen,
  );

  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("Newest");

  const filteredProperties = sortPropertiesData(
    filterPropertiesData(ownerPropertiesData, activeFilter, searchQuery),
    sortBy,
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>

              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  My Properties
                </h1>
                <p className="text-gray-600 mt-1">
                  Manage and track your listed properties
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                Quick Actions
              </button>
              <button
                onClick={() => dispatch(openAddPropertyModal())}
                className="px-5 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                <PlusIcon className="w-5 h-5" />
                Add New Property
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-6">
        <FilterBar
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          sortBy={sortBy}
          onSortChange={() =>
            setSortBy(sortBy === "Newest" ? "Oldest" : "Newest")
          }
        />

        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No properties found</p>
            <p className="text-gray-400 text-sm mt-2">
              Try adjusting your filters or search query
            </p>
          </div>
        )}
      </div>

      {/* Add Property Modal */}
      <AddPropertyModal isOpen={addPropertyModalOpen} />
    </div>
  );
};

export default IndexProperty;
