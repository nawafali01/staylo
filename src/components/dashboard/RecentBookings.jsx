import {recentBookings} from '../../data/index';
const statusStyles = {
  BOOKED: "bg-blue-50 text-blue-600",
  COMPLETED: "bg-green-50 text-green-600",
  CANCELLED: "bg-red-50 text-red-500",
};

export default function RecentBookings(){
    return(
        <div className='bg-white rounded-2xl p-6 border border-slate-100 shadow-sm'>
            <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-slate-900">Recent Bookings</h3>
        <button className="text-blue-600 text-sm font-semibold">View All</button>
      </div>
      <div className='flex flex-col gap-5'>
       {recentBookings.map((booking)=>(
         <div key={booking.id} className="flex items-center justify-between py-3 border-b border-slate-100 last:border-0">
            <div>
              <p className="font-semibold text-slate-800 text-sm">{booking.name}</p>
              <p className="text-xs text-slate-400">{booking.location}</p>
              <p className="text-xs text-slate-400">{booking.dates}</p>
            </div>
            <div className="flex flex-col items-end gap-1">
                <span className={`text-xs font-bold px-2 py-1 rounded-full ${statusStyles[booking.status]}`}>
                {booking.status}
              </span>
              <button className="text-blue-600 text-xs font-semibold">
                {booking.status === "COMPLETED" ? "Receipt" : booking.status === "CANCELLED" ? "Rebook" : "Details"}
              </button>
            </div>
         </div>
       ))}
      </div>
        </div>
    );
}