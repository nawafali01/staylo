import { StarIcon } from "@heroicons/react/24/solid";
import { propertyPerformanceData } from "../../../../data/index.js";

const PropertyPerformance = () => {
  const performance = propertyPerformanceData;

  return (
    <div className="bg-white rounded-4xl p-5 border border-gray-100 shadow-sm">
      <h3 className="text-base font-bold text-gray-900 mb-5">Property Performance</h3>
      
      <div className="space-y-8">
        {performance.map((item) => (
          <div key={item.id} className="flex items-center gap-4 group">
            <img 
              src={item.image} 
              alt={item.name} 
              className="w-16 h-16 rounded-2xl object-cover shadow-sm group-hover:scale-110 transition-transform"
            />
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-sm font-bold text-gray-900 truncate pr-2">{item.name}</h4>
                <div className="flex items-center gap-1 shrink-0">
                  <StarIcon className="w-3.5 h-3.5 text-orange-500" />
                  <span className="text-xs font-bold text-gray-900">{item.rating}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${item.color} rounded-full transition-all duration-1000`} 
                    style={{ width: `${(item.bookings / 150) * 100}%` }}
                  ></div>
                </div>
                <span className="text-[10px] font-bold text-gray-400 uppercase shrink-0">
                  {item.bookings} Bookings
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyPerformance;
