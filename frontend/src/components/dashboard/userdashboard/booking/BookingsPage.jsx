import BookingCard from "./BookingCard";
import { bookings } from "../../../../data/index";

export default function BookingsPage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
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
  );
}
