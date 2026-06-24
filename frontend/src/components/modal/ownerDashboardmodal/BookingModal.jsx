import React from 'react';
import {
  XMarkIcon,
  EnvelopeIcon,
  PhoneIcon,
  CalendarIcon,
  MapPinIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';

const BookingHeader = ({ bookingId, onClose }) => (
  <div className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-slate-100 px-8 py-6 flex items-start justify-between rounded-t-3xl z-10">
    <div className="flex items-center gap-4">
      <div className="bg-blue-50 p-3 rounded-2xl">
        <CalendarIcon className="w-7 h-7 text-blue-600" />
      </div>
      <div>
        <h2 className="text-2xl font-bold text-slate-900 leading-tight">
          Booking <span className="text-blue-600">{bookingId}</span>
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
);

const TenantDetails = ({ tenant }) => (
  <div className="bg-gradient-to-br from-blue-50/50 to-slate-50/50 rounded-3xl p-6 border border-blue-100/50 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/20 rounded-full -mr-16 -mt-16 blur-3xl"></div>
    <div className="flex items-center gap-5 mb-6 relative">
      <div className="relative">
        <img
          src={tenant.avatar}
          alt={tenant.name}
          className="w-20 h-20 rounded-2xl object-cover ring-4 ring-white shadow-xl"
        />
        <div className="absolute -bottom-1 -right-1 bg-green-500 w-6 h-6 rounded-full border-4 border-white shadow-sm"></div>
      </div>
      <div>
        <h3 className="text-xl font-bold text-slate-900">{tenant.name}</h3>
        <p className="text-sm text-blue-600 font-bold uppercase tracking-wider mt-0.5">Primary Tenant</p>
      </div>
    </div>
    <div className="space-y-3 relative">
      <div className="flex items-center gap-3 text-sm text-slate-700 bg-white/80 p-3 rounded-xl border border-white shadow-sm">
        <EnvelopeIcon className="w-5 h-5 text-blue-500" />
        <span className="font-medium">{tenant.email}</span>
      </div>
      <div className="flex items-center gap-3 text-sm text-slate-700 bg-white/80 p-3 rounded-xl border border-white shadow-sm">
        <PhoneIcon className="w-5 h-5 text-blue-500" />
        <span className="font-medium">{tenant.phone || 'N/A'}</span>
      </div>
    </div>
  </div>
);

const PropertyDetails = ({ property, dates }) => {
  const calculateNights = (dateStr) => {
    try {
      const parts = dateStr.split(' - ');
      if (parts.length !== 2) return 6;
      const start = new Date(parts[0] + ', ' + new Date().getFullYear());
      const end = new Date(parts[1] + ', ' + new Date().getFullYear());
      const diffTime = Math.abs(end - start);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays || 6;
    } catch (e) {
      return 6;
    }
  };

  const nights = calculateNights(dates);

  return (
    <div className="space-y-4 flex flex-col h-full">
      <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200/60 relative overflow-hidden group flex-1">
        <div className="absolute top-0 right-0 w-24 h-24 bg-slate-200/20 rounded-full -mr-12 -mt-12 blur-2xl group-hover:bg-blue-100/30 transition-colors duration-500"></div>
        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
          <MapPinIcon className="w-3.5 h-3.5" />
          Property Details
        </h4>
        <p className="text-xl font-bold text-slate-900">{property.name || property}</p>
        <p className="text-sm text-slate-500 mt-1.5 flex items-center gap-2 font-medium">
          {property.address || 'Premium Residence Area'}
        </p>
      </div>
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-6 text-white shadow-xl shadow-blue-200 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mb-16 blur-2xl"></div>
        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-2 opacity-80">Stay Duration</h4>
        <p className="text-4xl font-black">{nights} <span className="text-xl font-medium opacity-90">Nights</span></p>
      </div>
    </div>
  );
};

const FinancialOverview = ({ amount, nights = 6 }) => {
  const numericAmount = parseFloat(amount.replace('$', '').replace(',', '')) || 0;
  const cleaningFee = 250;
  const baseRate = numericAmount - cleaningFee;

  return (
    <div className="bg-slate-50/50 rounded-3xl p-8 border border-slate-100">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-white p-2 rounded-xl shadow-sm border border-slate-100">
          <CurrencyDollarIcon className="w-5 h-5 text-slate-600" />
        </div>
        <h4 className="text-xs font-black text-slate-900 uppercase tracking-[0.2em]">Financial Overview</h4>
      </div>
      <div className="space-y-4">
        <div className="flex justify-between items-center text-sm font-medium text-slate-500">
          <span>Base Rate ({nights} nights)</span>
          <span className="text-slate-900 font-bold">${baseRate.toLocaleString()}</span>
        </div>
        <div className="flex justify-between items-center text-sm font-medium text-slate-500">
          <span>Cleaning & Service</span>
          <span className="text-slate-900 font-bold">${cleaningFee.toLocaleString()}</span>
        </div>
        <div className="pt-4 border-t-2 border-dashed border-slate-200 mt-4 flex justify-between items-center">
          <span className="text-base font-bold text-slate-900">Total Revenue</span>
          <span className="text-4xl font-black text-blue-600 tracking-tight">{amount}</span>
        </div>
      </div>
    </div>
  );
};

const BookingActions = ({ onClose }) => (
  <div className="sticky bottom-0 bg-white/95 backdrop-blur-md border-t border-slate-100 px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-b-3xl">
    <button onClick={onClose} className="w-full sm:w-auto px-8 py-3 text-slate-500 hover:text-slate-900 font-bold uppercase tracking-widest text-[10px] transition-colors">
      Back to Table
    </button>
    <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
      <button className="px-6 py-3.5 text-blue-600 border-2 border-blue-600 rounded-2xl hover:bg-blue-50 transition-all font-bold text-xs flex items-center justify-center gap-2">
        <EnvelopeIcon className="w-4 h-4" /> Message Guest
      </button>
      <button className="px-6 py-3.5 bg-red-500 text-white rounded-2xl hover:bg-red-600 transition-all font-bold text-xs shadow-lg shadow-red-100">Reject</button>
      <button className="px-6 py-3.5 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition-all font-bold text-xs shadow-lg shadow-blue-100">Approve Stay</button>
    </div>
  </div>
);

const BookingDetailsModal = ({ isOpen, onClose, booking }) => {
  if (!isOpen || !booking) return null;

  const calculateNights = (dateStr) => {
    try {
      const parts = dateStr.split(' - ');
      if (parts.length !== 2) return 6;
      const start = new Date(parts[0] + ', ' + new Date().getFullYear());
      const end = new Date(parts[1] + ', ' + new Date().getFullYear());
      const diffTime = Math.abs(end - start);
      return Math.ceil(diffTime / (1000 * 60 * 60 * 24)) || 6;
    } catch (e) {
      return 6;
    }
  };

  const nights = calculateNights(booking.dates);

  return (
    <>
      <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[100] transition-opacity" onClick={onClose} />
      <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 pointer-events-none">
        <div className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto pointer-events-auto border border-slate-200 animate-in fade-in zoom-in duration-200" onClick={(e) => e.stopPropagation()}>
          <BookingHeader bookingId={booking.id} onClose={onClose} />
          <div className="p-8 space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <TenantDetails tenant={booking.tenant} />
              <PropertyDetails property={booking.property} dates={booking.dates} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm hover:border-green-100 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-green-50 p-2 rounded-xl"><CalendarIcon className="w-5 h-5 text-green-600" /></div>
                  <h4 className="text-[10px] font-black text-green-700 uppercase tracking-[0.2em]">Check-In</h4>
                </div>
                <p className="text-2xl font-bold text-slate-900">{booking.dates.split(' - ')[0]}</p>
                <div className="text-xs text-slate-400 mt-2 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>After 3:00 PM
                </div>
              </div>
              <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm hover:border-red-100 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-red-50 p-2 rounded-xl"><CalendarIcon className="w-5 h-5 text-red-600" /></div>
                  <h4 className="text-[10px] font-black text-red-700 uppercase tracking-[0.2em]">Check-Out</h4>
                </div>
                <p className="text-2xl font-bold text-slate-900">{booking.dates.split(' - ')[1]}</p>
                <div className="text-xs text-slate-400 mt-2 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>Before 11:00 AM
                </div>
              </div>
            </div>

            <FinancialOverview amount={booking.amount} nights={nights} />

            {booking.specialRequest && (
              <div className="bg-orange-50/80 border-l-4 border-orange-400 rounded-3xl p-6">
                <h4 className="text-[10px] font-black text-orange-900 uppercase tracking-[0.2em] mb-3">Special Request From Guest</h4>
                <p className="text-sm text-orange-800 italic leading-relaxed font-medium">"{booking.specialRequest}"</p>
              </div>
            )}
          </div>
          <BookingActions onClose={onClose} />
        </div>
      </div>
    </>
  );
};

export default BookingDetailsModal;