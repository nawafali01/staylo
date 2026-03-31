import { HeartIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { savedProperties } from "../../data/index";


export default function SavedProperties(){
    return(
        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
            <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-slate-900">Saved Properties</h3>
        <button className="text-blue-600 text-sm font-semibold">Explore More</button>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {savedProperties.map((property)=>(
            <div key={property.id} className="border border-slate-100 rounded-xl overflow-hidden">
                <div className="bg-slate-100 h-32 relative">
                 <button className="absolute top-2 right-2 bg-white rounded-full p-1">
                <HeartIcon className="w-4 h-4 text-red-500" />
              </button>
              <div className="absolute bottom-2 left-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-lg">
                ${property.price.toLocaleString()} / month
              </div>
                </div>
                <div className="p-3">
                    <p className="font-bold text-slate-900 text-sm">{property.name}</p>
                    <div className="flex items-center gap-1 text-slate-400 text-xs mt-1">
                <MapPinIcon className="w-3 h-3" />
                {property.location}
              </div>
              <div className="flex gap-3 text-xs text-slate-500 mt-2">
                <span>🛏 {property.beds} Bedrooms</span>
                <span>🚿 {property.baths} Bathrooms</span>
              </div>
              <button className="w-full mt-3 py-2 border border-blue-600 text-blue-600 text-xs font-bold rounded-lg hover:bg-blue-50 transition">
                View Details
              </button>
                </div>
            </div>
        ))}
      </div>
        </div>
    );
}