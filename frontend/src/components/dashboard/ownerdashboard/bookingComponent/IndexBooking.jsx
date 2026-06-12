import React, { useState } from "react";
import BookingStats from "./BookingStats";
import BookingFilters from "./BookingFilters";
import BookingTable from "./BookingTable";
import BookingDetailsModal from ".././../../modal/ownerDashboardmodal/BookingModal";
import {
  bookingStatsData,
  ownerBookingsData,
  bookingFilterOptions,
} from "../../../../data";
import { filterBookingsData } from "../../../../utils/feature";

const IndexBooking = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedBookings, setSelectedBookings] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBookingForModal, setSelectedBookingForModal] = useState(null);

  const filteredBookings = filterBookingsData(ownerBookingsData, activeTab);

  const handleSelectAll = (event) => {
    if (event.target.checked) {
      setSelectedBookings(filteredBookings.map((booking) => booking.id));
    } else {
      setSelectedBookings([]);
    }
  };

  const handleSelectBooking = (id) => {
    if (selectedBookings.includes(id)) {
      setSelectedBookings(selectedBookings.filter((bookingId) => bookingId !== id));
    } else {
      setSelectedBookings([...selectedBookings, id]);
    }
  };

  const handleViewDetails = (booking) => {
    setSelectedBookingForModal(booking);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedBookingForModal(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40">
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2 tracking-tight">
            Bookings
          </h1>
          <p className="text-slate-600 text-lg">
            Manage all your property reservations
          </p>
        </div>

        <BookingStats stats={bookingStatsData} />

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200/60 overflow-hidden">
          <BookingFilters
            activeTab={activeTab}
            onTabChange={setActiveTab}
            filterOptions={bookingFilterOptions}
          />
          <BookingTable
            bookings={filteredBookings}
            selectedBookings={selectedBookings}
            onSelectAll={handleSelectAll}
            onSelectBooking={handleSelectBooking}
            onViewDetails={handleViewDetails}
          />
        </div>
      </div>

      <BookingDetailsModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        booking={selectedBookingForModal}
      />
    </div>
  );
};

export default IndexBooking;