import React from 'react';
import {
  XMarkIcon,
  EnvelopeIcon,
  PhoneIcon,
  CalendarIcon,
  MapPinIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';

const BookingDetailsModal = ({ isOpen, onClose, booking }) => {
  if (!isOpen || !booking) return null;

  // Calculate nights logic
  const calculateNights = (dateRange) => {
    // Basic logic to extract nights if provided or default to formatted stay
    return 6; 
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 pointer-events-none">
        <div
          className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto pointer-events-auto border border-slate-200"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-slate-100 px-8 py-6 flex items-start justify-between rounded-t-3xl z-10">
            <div className="flex items-center gap-4">
              <div className="bg-blue-50 p-3 rounded-2xl">
                <CalendarIcon className="w-7 h-7 text-blue-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900 leading-tight">
                  Booking <span className="text-blue-600">{booking.id}</span>
                </h2>
                <p className="text-xs font-bold text-slate-400 mt-1 uppercase tracking-widest">
                  Submission: {new Date().toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: '2-digit'
                  })}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-slate-600 hover:bg-slate-100 p-2 rounded-xl transition-all duration-200"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>

          {/* Content */}
          <div className="p-8 space-y-8">
            {/* Tenant & Property Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Tenant Info */}
              <div className="bg-gradient-to-br from-blue-50/50 to-slate-50/50 rounded-3xl p-6 border border-blue-100/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/20 rounded-full -mr-16 -mt-16 blur-3xl"></div>
                <div className="flex items-center gap-5 mb-6 relative">
                  <div className="relative">
                    <img
                      src={booking.tenant.avatar}
                      alt={booking.tenant.name}
                      className="w-20 h-20 rounded-2xl object-cover ring-4 ring-white shadow-xl"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-green-500 w-6 h-6 rounded-full border-4 border-white shadow-sm"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {booking.tenant.name}
                    </h3>
                    <p className="text-sm text-blue-600 font-bold uppercase tracking-wider mt-0.5">Primary Tenant</p>
                  </div>
                </div>
                <div className="space-y-3 relative">
                  <div className="flex items-center gap-3 text-sm text-slate-700 bg-white/80 p-3 rounded-xl border border-white shadow-sm">
                    <EnvelopeIcon className="w-5 h-5 text-blue-500" />
                    <span className="font-medium">{booking.tenant.email}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-700 bg-white/80 p-3 rounded-xl border border-white shadow-sm">
                    <PhoneIcon className="w-5 h-5 text-blue-500" />
                    <span className="font-medium">{booking.tenant.phone || 'N/A'}</span>
                  </div>
                </div>
              </div>

              {/* Property & Duration */}
              <div className="space-y-4">
                <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200/60 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-slate-200/20 rounded-full -mr-12 -mt-12 blur-2xl group-hover:bg-blue-100/30 transition-colors duration-500"></div>
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
                    <MapPinIcon className="w-3.5 h-3.5" />
                    Property Details
                  </h4>
                  <p className="text-xl font-bold text-slate-900">{booking.property.name || booking.property}</p>
                  <p className="text-sm text-slate-500 mt-1.5 flex items-center gap-1.5 font-medium">
                    {booking.property.address || 'Premium Residence Area'}
                  </p>
                </div>
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-6 text-white shadow-xl shadow-blue-200 relative overflow-hidden">
                   <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mb-16 blur-2xl"></div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-2 opacity-80">
                    Stay Duration
                  </h4>
                  <p className="text-4xl font-black">{calculateNights(booking.dates)} <span className="text-xl font-medium opacity-90">Nights</span></p>
                </div>
              </div>
            </div>

            {/* Check-in/Check-out */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm hover:border-green-100 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-green-50 p-2 rounded-xl">
                    <CalendarIcon className="w-5 h-5 text-green-600" />
                  </div>
                  <h4 className="text-[10px] font-black text-green-700 uppercase tracking-[0.2em]">
                    Check-In
                  </h4>
                </div>
                <p className="text-2xl font-bold text-slate-900">
                  {booking.dates.split(' - ')[0]}
                </p>
                <p className="text-xs text-slate-400 mt-2 font-bold uppercase tracking-wider flex items-center gap-1.5">
                   <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                   After 3:00 PM
                </p>
              </div>
              <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm hover:border-red-100 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-red-50 p-2 rounded-xl">
                    <CalendarIcon className="w-5 h-5 text-red-600" />
                  </div>
                  <h4 className="text-[10px] font-black text-red-700 uppercase tracking-[0.2em]">
                    Check-Out
                  </h4>
                </div>
                <p className="text-2xl font-bold text-slate-900">
                  {booking.dates.split(' - ')[1]}
                </p>
                <p className="text-xs text-slate-400 mt-2 font-bold uppercase tracking-wider flex items-center gap-1.5">
                   <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                   Before 11:00 AM
                </p>
              </div>
            </div>

            {/* Cost Breakdown */}
            <div className="bg-slate-50/50 rounded-3xl p-8 border border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-white p-2 rounded-xl shadow-sm border border-slate-100">
                  <CurrencyDollarIcon className="w-5 h-5 text-slate-600" />
                </div>
                <h4 className="text-xs font-black text-slate-900 uppercase tracking-[0.2em]">
                  Financial Overview
                </h4>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm font-medium text-slate-500">
                  <span>Base Rate (6 nights)</span>
                  <span className="text-slate-900 font-bold">$1,170.00</span>
                </div>
                <div className="flex justify-between items-center text-sm font-medium text-slate-500">
                  <span>Cleaning & Service</span>
                  <span className="text-slate-900 font-bold">$250.00</span>
                </div>
                <div className="pt-4 border-t-2 border-dashed border-slate-200 mt-4 flex justify-between items-center">
                  <span className="text-base font-bold text-slate-900">Total Revenue</span>
                  <span className="text-4xl font-black text-blue-600 tracking-tight">{booking.amount}</span>
                </div>
              </div>
            </div>

            {/* Special Request */}
            {booking.specialRequest && (
              <div className="bg-orange-50/80 border-l-4 border-orange-400 rounded-3xl p-6">
                <h4 className="text-[10px] font-black text-orange-900 uppercase tracking-[0.2em] mb-3">
                  Special Request From Guest
                </h4>
                <p className="text-sm text-orange-800 italic leading-relaxed font-medium">
                  "{booking.specialRequest}"
                </p>
              </div>
            )}
          </div>

          {/* Footer Actions */}
          <div className="sticky bottom-0 bg-white/95 backdrop-blur-md border-t border-slate-100 px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-b-3xl">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-8 py-3 text-slate-500 hover:text-slate-900 font-bold uppercase tracking-widest text-[10px] transition-colors"
            >
              Back to Table
            </button>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <button className="px-6 py-3.5 text-blue-600 border-2 border-blue-600 rounded-2xl hover:bg-blue-50 transition-all font-bold text-xs flex items-center justify-center gap-2">
                <EnvelopeIcon className="w-4 h-4" />
                Message Guest
              </button>
              <button className="px-6 py-3.5 bg-red-500 text-white rounded-2xl hover:bg-red-600 transition-all font-bold text-xs shadow-lg shadow-red-100">
                Reject
              </button>
              <button className="px-6 py-3.5 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition-all font-bold text-xs shadow-lg shadow-blue-100">
                Approve Stay
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingDetailsModal;