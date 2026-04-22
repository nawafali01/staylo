import React, { useState } from "react";
import {
  MagnifyingGlassIcon,
  BellIcon,
  QuestionMarkCircleIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import BookingsStats from "./BookingStats";
import BookingFilters from "./BookingFilter";
import BookingsTable from "./BokkingTable";
import {
  bookingsData,
  bookingFilterTabs,
  tableHeaders,
} from "../../../../data";

const BookingsPage = () => {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Page Title */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Bookings</h2>
          <p className="text-gray-600">
            Track and manage all property reservations from one central
            workspace.
          </p>
        </div>

        {/* Stats Cards */}
        <BookingsStats stats={bookingsData.stats} />

        {/* Filters */}
        <BookingFilters
          tabs={bookingFilterTabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        {/* Bookings Table */}
        <BookingsTable
          bookings={bookingsData.bookings}
          headers={tableHeaders}
        />
      </div>
    </div>
  );
};

export default BookingsPage;
