// components/ConfirmBooking/BookingCalendar.jsx

const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

// October 2024 starts on Tuesday = 2 empty cells
const dates = [
  null, null,
  1, 2, 3, 4, 5, 6,
  7, 8, 9, 10, 11, 12, 13,
  14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27,
  28, 29, 30, 31
]

const checkIn = 5
const checkOut = 10

const getStyle = (date) => {
  if (!date) return ''
  if (date === checkIn || date === checkOut)
    return 'bg-blue-600 text-white rounded-full'
  if (date > checkIn && date < checkOut)
    return 'bg-blue-100 text-blue-700 rounded-none'
  return 'text-gray-700 hover:bg-gray-100 rounded-full'
}

const ConfirmBookingCalendar = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5">

      {/* Title */}
      <h2 className="text-base font-semibold text-gray-900 mb-4">
        Booking Calendar
      </h2>

      {/* Month Navigation */}
      <div className="flex items-center justify-center gap-6 mb-4">
        <button className="text-gray-400 hover:text-gray-700 text-lg">‹</button>
        <span className="text-sm font-medium text-gray-900">October 2024</span>
        <button className="text-gray-400 hover:text-gray-700 text-lg">›</button>
      </div>

      {/* Day Names */}
      <div className="grid grid-cols-7 mb-2">
        {days.map((d) => (
          <div key={d} className="text-center text-xs text-gray-400 py-1">
            {d}
          </div>
        ))}
      </div>

      {/* Dates Grid */}
      <div className="grid grid-cols-7">
        {dates.map((date, i) => (
          <div
            key={i}
            className={`text-center text-sm py-2 cursor-pointer transition-colors ${getStyle(date)}`}
          >
            {date}
          </div>
        ))}
      </div>

    </div>
  )
}

export default ConfirmBookingCalendar