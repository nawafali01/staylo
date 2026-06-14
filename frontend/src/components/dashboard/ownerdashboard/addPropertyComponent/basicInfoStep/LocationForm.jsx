import { cities, provinces } from "../../../../../data";
import { ChevronDownIcon, LocationPinIcon, LocationMapPreview } from "../../../../../assets/svg";

export default function LocationForm({ data, setField }) {
  return (
    <div className="border-t border-gray-100 pt-6">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-lg font-bold text-gray-900">Location Details</h3>
        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-3 py-2 rounded-lg transition-colors">
          <LocationPinIcon className="w-3.5 h-3.5" />
          Pin on map
        </button>
      </div>
      <input
        value={data.streetAddress || ""}
        onChange={(event) => setField("streetAddress", event.target.value)}
        placeholder="Street Address"
        className="w-full h-11 px-4 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all mb-4"
      />
      <div className="grid grid-cols-2 gap-4 mb-5">
        {[
          ["city", "Select City", cities],
          ["province", "Select State/Province", provinces],
        ].map(([field, placeholder, options]) => (
          <div key={field} className="relative">
            <select
              value={data[field] || ""}
              onChange={(event) => setField(field, event.target.value)}
              className="w-full h-11 px-4 pr-10 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-800 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all cursor-pointer"
            >
              <option value="">{placeholder}</option>
              {options.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
            <ChevronDownIcon className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        ))}
      </div>

      <div className="w-full h-44 rounded-xl overflow-hidden bg-gray-200 relative">
        <LocationMapPreview className="w-full h-full" />
      </div>
    </div>
  );
}
