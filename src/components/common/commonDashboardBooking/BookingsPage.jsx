import Sidebar from "../../dashboard/userdashboard/Sidebar";
import DashboardNavbar from "../../dashboard/userdashboard/DashboardNavbar";
import BookingCard from "./BookingCard";
import { bookings } from "../../../data/index";
import {
  QuestionMarkCircleIcon,
  ArrowRightStartOnRectangleIcon,
} from "@heroicons/react/24/outline";
export default function BookingsPage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar
        extraButtons={
          <>
            <button className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-500 hover:bg-slate-50 transition-all">
              <QuestionMarkCircleIcon className="w-4 h-4" />
              SUPPORT
            </button>
            <button className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-500 hover:bg-slate-50 transition-all">
              <ArrowRightStartOnRectangleIcon className="w-4 h-4" />
              LOGOUT
            </button>
          </>
        }
      />

      <div className="flex-1 flex flex-col">
        <DashboardNavbar />
        <main className="flex-1 p-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-1">
            My Bookings
          </h1>
          <p className="text-sm text-gray-400 mb-8">
            Manage your upcoming and past property stays.
          </p>
          <div>
            {bookings.map((booking) => (
              <BookingCard key={booking.id} booking={booking} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
