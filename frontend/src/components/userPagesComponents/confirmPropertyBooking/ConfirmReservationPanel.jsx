import React from "react";
import { serviceFee, occupancyTax, mockReservationData } from "../../../data";

const ConfirmReservationPanel = ({ property }) => {
  const total = property.price + serviceFee + occupancyTax;

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      <h2 className="text-base font-semibold text-gray-900 mb-5">
        Reservation details
      </h2>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="border border-gray-200 rounded-lg px-3 py-2">
          <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">
            Check-in
          </p>
          <p className="text-sm text-gray-900">{mockReservationData.checkIn}</p>
        </div>
        <div className="border border-gray-200 rounded-lg px-3 py-2">
          <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">
            Check-out
          </p>
          <p className="text-sm text-gray-900">{mockReservationData.checkOut}</p>
        </div>
      </div>

      <div className="flex items-center justify-between border border-gray-200 rounded-lg px-3 py-3 mb-5">
        <div>
          <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">
            Guests
          </p>
          <p className="text-sm text-gray-900">{mockReservationData.guests}</p>
        </div>
        <span className="text-gray-400">▾</span>
      </div>

      <p className="text-sm font-semibold text-gray-900 mb-3">Price Summary</p>
      <div className="space-y-2 mb-4">
        <div className="flex justify-between text-sm text-gray-500">
          <span>${property.price.toLocaleString()} × {mockReservationData.nights} nights</span>
          <span>${(property.price * mockReservationData.nights).toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-sm text-gray-500">
          <span>Service Fee</span>
          <span>${serviceFee}</span>
        </div>
        <div className="flex justify-between text-sm text-gray-500">
          <span>Occupancy taxes</span>
          <span>${occupancyTax}</span>
        </div>
      </div>

      <div className="border-t border-gray-100 my-4" />

      <div className="flex justify-between items-center mb-5">
        <span className="text-sm font-semibold text-gray-900">Total (USD)</span>
        <span className="text-xl font-semibold text-gray-900">
          ${total.toLocaleString()}
        </span>
      </div>

      <p className="text-xs text-gray-400 uppercase tracking-wide mb-2">
        Payment Method
      </p>
      <div className="flex items-center justify-between border border-gray-200 rounded-lg px-3 py-3 mb-5">
        <span className="text-sm text-gray-900">
          {mockReservationData.paymentMethod}
        </span>
        <span className="text-gray-400">▾</span>
      </div>

      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-3 rounded-lg transition-colors">
        Confirm and Pay
      </button>

      <p className="text-xs text-gray-400 text-center mt-3 leading-relaxed">
        By clicking the button above, you agree to our{" "}
        <span className="underline cursor-pointer">Terms of Service</span> and{" "}
        <span className="underline cursor-pointer">Cancellation Policy</span>.
      </p>
    </div>
  );
};

export default ConfirmReservationPanel;
