import React from "react";
import { useNavigate } from "react-router-dom";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import { occupantOptions } from "../../../data";

const Booking = ({ property }) => {
  const navigate = useNavigate();

  return (
    <div className="border border-gray-200 rounded-2xl p-6 shadow-md sticky top-24 bg-white">
      <div className="flex items-center justify-between mb-5">
        <p className="text-2xl font-bold text-gray-900">
          ${property.price.toLocaleString()}{" "}
          <span className="text-sm font-normal text-gray-400">/mo</span>
        </p>
        {property.isVerified && (
          <span className="text-xs text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
            ✅ Verified Property
          </span>
        )}
      </div>

      <div className="grid grid-cols-2 gap-3 mb-3">
        <div className="border border-gray-200 rounded-xl p-3">
          <p className="text-xs text-gray-400 mb-1">MOVE IN</p>
          <div className="flex items-center gap-2">
            <CalendarDaysIcon className="w-4 h-4 text-gray-400" />
            <input
              type="date"
              className="text-sm text-gray-700 w-full outline-none"
            />
          </div>
        </div>
        <div className="border border-gray-200 rounded-xl p-3">
          <p className="text-xs text-gray-400 mb-1">MOVE OUT</p>
          <div className="flex items-center gap-2">
            <CalendarDaysIcon className="w-4 h-4 text-gray-400" />
            <input
              type="date"
              className="text-sm text-gray-700 w-full outline-none"
            />
          </div>
        </div>
      </div>

      <div className="border border-gray-200 rounded-xl p-3 mb-5">
        <p className="text-xs text-gray-400 mb-1">OCCUPANTS</p>
        <select className="text-sm text-gray-700 w-full outline-none bg-transparent">
          {occupantOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>

      <div className="space-y-3 mb-5">
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Monthly Rent</span>
          <span className="font-medium text-gray-800">
            ${property.price.toLocaleString()}
          </span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Security Deposit</span>
          <span className="font-medium text-gray-800">
            ${property.securityDeposit.toLocaleString()}
          </span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Platform Fee</span>
          <span className="font-medium text-green-500">
            {property.platformFee === 0 ? "Free" : `$${property.platformFee}`}
          </span>
        </div>
        <div className="border-t border-gray-100 pt-3 flex justify-between font-bold text-gray-900">
          <span>Total</span>
          <span>
            ${property.price.toLocaleString()}{" "}
            <span className="text-xs font-normal text-gray-400">/mo</span>
          </span>
        </div>
      </div>

      <button
        onClick={() => navigate(`/confirm-booking/${property.id}`)}
        className="w-full bg-blue-600 text-white py-3.5 rounded-xl font-semibold hover:bg-blue-700 transition-colors text-sm mb-2"
      >
        Book Now
      </button>
      <p className="text-center text-xs text-gray-400 mb-4">
        You won't be charged yet
      </p>
    </div>
  );
};

export default Booking;
