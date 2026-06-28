import {
  calendarDays,
  calendarDates,
  bookingCheckIn,
  bookingCheckOut,
} from "../../../data";
import { getStyle } from "../../../utils/feature";

const Calendar = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5">
      <h2 className="text-base font-semibold text-gray-900 mb-4">
        Booking Calendar
      </h2>
      <div className="flex items-center justify-center gap-6 mb-4">
        <button className="text-gray-400 hover:text-gray-700 text-lg">‹</button>
        <span className="text-sm font-medium text-gray-900">October 2024</span>
        <button className="text-gray-400 hover:text-gray-700 text-lg">›</button>
      </div>
      <div className="grid grid-cols-7 mb-2">
        {calendarDays.map((day) => (
          <div key={day} className="text-center text-xs text-gray-400 py-1">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7">
        {calendarDates.map((date, i) => (
          <div
            key={i}
            className={`text-center text-sm py-2 cursor-pointer transition-colors ${getStyle(date, bookingCheckIn, bookingCheckOut)}`}
          >
            {date}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
