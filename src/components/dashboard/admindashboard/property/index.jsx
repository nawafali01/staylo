import React, { useState } from "react";
import StatsSection from "./StatsSection";
import FilterTabs from "./FilterTabs";
import PropertiesGrid from "./PropertiesGrid";

const AdminPropertyPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  return (
    <div className="flex-1 bg-gray-50 p-8 overflow-y-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Properties</h1>
        <p className="text-gray-600">
          Manage all property listings with curated oversight.
        </p>
      </div>

      <StatsSection />

      <FilterTabs
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />

      <PropertiesGrid />
    </div>
  );
};

export default AdminPropertyPage;
