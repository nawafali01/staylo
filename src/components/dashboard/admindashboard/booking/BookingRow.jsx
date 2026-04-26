import {
  getPaymentStyle,
  getStatusStyle,
  getStatusDot,
} from "../../../../utils/feature";

const BookingRow = ({ booking }) => {
  return (
    <tr className="border-b border-gray-100 hover:bg-gray-50">
      <td className="py-4 px-4">
        <div className="flex items-center gap-3">
          <img
            src={booking.property.image}
            alt={booking.property.name}
            className="w-16 h-12 rounded-lg object-cover"
          />
          <div>
            <div className="font-medium text-gray-900">
              {booking.property.name}
            </div>
            <div className="text-sm text-gray-500">
              {booking.property.location}
            </div>
          </div>
        </div>
      </td>

      <td className="py-4 px-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-700 text-white flex items-center justify-center font-medium">
            {booking.guest.avatar}
          </div>
          <div>
            <div className="font-medium text-gray-900">
              {booking.guest.name}
            </div>
            <div className="text-sm text-gray-500">{booking.guest.email}</div>
          </div>
        </div>
      </td>

      <td className="py-4 px-4">
        <div className="font-medium text-gray-900">
          {booking.bookingDates.checkIn} -
        </div>
        <div className="font-medium text-gray-900">
          {booking.bookingDates.checkOut}
        </div>
        <div className="text-sm text-gray-500">
          {booking.bookingDates.nights} Nights
        </div>
      </td>

      <td className="py-4 px-4">
        <span
          className={`px-3 py-1 rounded-md text-xs font-medium ${getPaymentStyle(booking.payment)}`}
        >
          {booking.payment}
        </span>
      </td>

      <td className="py-4 px-4">
        <div className="flex items-center gap-2">
          <span
            className={`w-2 h-2 rounded-full ${getStatusDot(booking.status)}`}
          ></span>
          <span className={`font-medium ${getStatusStyle(booking.status)}`}>
            {booking.status}
          </span>
        </div>
      </td>

      <td className="py-4 px-4">
        <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
          View Details
        </button>
      </td>
    </tr>
  );
};

export default BookingRow;
