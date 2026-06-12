import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PlusIcon } from "@heroicons/react/24/outline";
import StatsSection from "./StatsSection";
import FilterTabs from "./FilterTabs";
import PropertiesGrid from "./PropertiesGrid";
import AddPropertyModal from "../../../modal/ownerDashboardmodal/AddPropertyModal";
import { openAddPropertyModal } from "../../../../redux/slices/modalSlice";

const AdminPropertyPage = () => {
  const dispatch = useDispatch();
  const addPropertyModalOpen = useSelector(
    (state) => state.modal.addPropertyModalOpen
  );
  const [activeFilter, setActiveFilter] = useState("all");

  return (
    <div className="flex-1 bg-gray-50 overflow-y-auto">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              {/* Added Sub-tabs like Owner Dashboard */}
              <div className="flex gap-6 mb-4">
                <button className="text-sm font-semibold text-gray-900 border-b-2 border-blue-600 pb-2">
                  My Properties
                </button>
                <button className="text-sm font-medium text-blue-600 pb-2 hover:text-blue-700">
                  All Properties
                </button>
                <button className="text-sm font-medium text-gray-500 pb-2 hover:text-gray-700">
                  Vacant
                </button>
                <button className="text-sm font-medium text-gray-500 pb-2 hover:text-gray-700">
                  Occupied
                </button>
              </div>

              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                Properties
              </h1>
              <p className="text-gray-600">
                Manage all property listings with curated oversight.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors hidden sm:block">
                Quick Actions
              </button>
              <button
                onClick={() => dispatch(openAddPropertyModal())}
                className="px-5 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2 shadow-lg shadow-blue-500/20"
              >
                <PlusIcon className="w-5 h-5 font-bold" />
                Add New Property
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8">
        <StatsSection />

        <FilterTabs
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />

        <PropertiesGrid />
      </div>

      {/* Add Property Modal */}
      <AddPropertyModal isOpen={addPropertyModalOpen} />
    </div>
  );
};

export default AdminPropertyPage;
