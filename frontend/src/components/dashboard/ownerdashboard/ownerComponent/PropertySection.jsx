import { ownerPropertiesData } from "../../../../data/index.js";
import { getOwnerPropertyStatusStyles } from "../../../../utils/feature.js";

const PropertySection = () => {
  return (
    <section className="mb-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900">
          My Properties Overview
        </h2>
        <button className="text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors">
          View All
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
        {ownerPropertiesData.slice(0, 3).map((property) => {
          const status = getOwnerPropertyStatusStyles(property.status);
          return (
            <div
              key={property.id}
              className="bg-white rounded-4xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="relative h-56">
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div
                  className={`absolute top-4 right-4 px-4 py-1.5 rounded-xl text-[10px] font-bold uppercase tracking-widest backdrop-blur-md ${status.badge} shadow-lg shadow-black/5`}
                >
                  {status.text}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                  {property.name}
                </h3>
                <p className="text-xs font-medium text-gray-500 mb-6 flex items-center gap-1">
                  <span className="text-blue-500">📍</span> {property.location}
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-2 h-2 rounded-full ${status.dot} animate-pulse`}
                      ></div>
                      <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                        {property.occupancyStatus === "occupied"
                          ? "92% Occupancy"
                          : "0% Occupancy"}
                      </span>
                    </div>
                  </div>
                  <button className="px-5 py-2 bg-gray-50 text-gray-700 rounded-xl text-xs font-bold hover:bg-blue-600 hover:text-white transition-all active:scale-95 shadow-sm">
                    Manage
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PropertySection;
