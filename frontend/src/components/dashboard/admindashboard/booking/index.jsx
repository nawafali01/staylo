import React, { useState } from "react";
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

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Bookings</h2>
          <p className="text-gray-600">
            Track and manage all property reservations from one central
            workspace.
          </p>
        </div>

        <BookingsStats stats={bookingsData.stats} />

        <BookingFilters
          tabs={bookingFilterTabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        <BookingsTable
          bookings={bookingsData.bookings}
          headers={tableHeaders}
        />
      </div>
    </div>
  );
};

export default BookingsPage;
