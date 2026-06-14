import { statusStyles, priceStyles } from "../../../../data/index";

export default function BookingCard({ booking }) {
  return (
    <div className="flex bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-gray-300 transition-all">
      <img
        src={booking.image}
        alt={booking.name}
        className={`w-48 min-w-48 object-cover ${booking.imageGrayscale ? "grayscale" : ""}`}
      />

      <div className="flex-1 p-5 flex flex-col justify-between">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              {booking.name}
            </h3>
            <p className="text-sm text-gray-400 mt-1">{booking.location}</p>
          </div>
          <span
            className={`text-xs font-medium px-3 py-1 rounded-md ${statusStyles[booking.status]}`}
          >
            {booking.status}
          </span>
        </div>

        <div className="flex gap-10">
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">
              Check-in
            </p>
            <p className="text-sm font-medium text-gray-800">
              {booking.checkIn}
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">
              Check-out
            </p>
            <p className="text-sm font-medium text-gray-800">
              {booking.checkOut}
            </p>
          </div>
        </div>
      </div>

      <div className="w-44 min-w-44 border-l border-gray-100 flex flex-col items-center justify-center gap-4 p-5">
        <div className="text-center">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">
            {booking.priceLabel}
          </p>
          <p
            className={`text-2xl font-bold ${priceStyles[booking.priceColor]}`}
          >
            {booking.price}
          </p>
        </div>
        <button
          className={`w-full py-2 rounded-lg text-sm font-medium transition-all ${
            booking.priceColor === "blue"
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "border border-gray-200 text-gray-500 hover:bg-gray-50"
          }`}
        >
          View Details
        </button>
      </div>
    </div>
  );
}
