import { GlobeAltIcon, CalendarIcon, KeyIcon } from "@heroicons/react/24/outline";

const Features = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h3 className="text-4xl font-extrabold text-gray-900 mb-4">
            Simple. Fast. Reliable.
          </h3>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            Three easy steps to your new home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col items-center text-center p-8 border border-gray-100 rounded-2xl hover:shadow-xl transition-all duration-300 bg-gray-50/50">
            <div className="mb-6 bg-white p-4 rounded-full shadow-sm">
              <GlobeAltIcon className="w-12 h-12 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              Browser listings
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Explore high-quality properties with verified virtual tours and detailed documentation.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-8 border border-gray-100 rounded-2xl hover:shadow-xl transition-all duration-300 bg-gray-50/50">
            <div className="mb-6 bg-white p-4 rounded-full shadow-sm">
              <CalendarIcon className="w-12 h-12 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              Instant Booking
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Secure your favorite spot instantly with our simplified digital contract system.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-8 border border-gray-100 rounded-2xl hover:shadow-xl transition-all duration-300 bg-gray-50/50">
            <div className="mb-6 bg-white p-4 rounded-full shadow-sm">
              <KeyIcon className="w-12 h-12 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              Move in Ready
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Pick up your keys and enjoy your move-in ready, professionally managed home.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;
