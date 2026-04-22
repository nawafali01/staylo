import { cities, listingCategories, propertyTypes, provinces } from "../../../../data";
import { ChevronDownIcon, LocationPinIcon } from "../../../../assets/svg";

export default function BasicInfoStep({ data, onChange, onNext }) {
  const set = (field, val) => onChange({ ...data, [field]: val });

  const isValid =
    data.title &&
    data.description &&
    data.propertyType &&
    data.listingCategory &&
    data.streetAddress &&
    data.city &&
    data.province;

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
      {/* Listing Name & Type */}
      <div className="grid grid-cols-[1fr_200px] gap-4 mb-5">
        <div>
          <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2">
            Listing Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={data.title || ""}
            onChange={(event) => set("title", event.target.value)}
            placeholder="e.g. Modern Minimalist Villa"
            className="w-full h-11 px-4 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </div>
        <div>
          <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2">
            Property Type
          </label>
          <div className="relative">
            <select
              value={data.propertyType || "Residential Apartment"}
              onChange={(event) => set("propertyType", event.target.value)}
              className="w-full h-11 px-4 pr-10 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-800 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all cursor-pointer"
            >
              {propertyTypes.map((type) => (
                <option key={type}>{type}</option>
              ))}
            </select>
            <ChevronDownIcon className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Listing Category */}
      <div className="mb-5">
        <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2">
          Listing Category
        </label>
        <div className="grid grid-cols-2 gap-3">
          {listingCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => set("listingCategory", category)}
              className={`h-12 rounded-xl border-2 text-sm font-semibold transition-all
                ${
                  (data.listingCategory || "For Rent") === category
                    ? "border-blue-600 bg-blue-50 text-blue-700"
                    : "border-gray-200 bg-gray-50 text-gray-600 hover:border-gray-300"
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Description */}
      <div className="mb-7">
        <div className="flex justify-between items-center mb-2">
          <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">
            Property Description
          </label>
          <span className="text-[11px] text-gray-400">
            {(data.description || "").length} / 1000
          </span>
        </div>
        <textarea
          value={data.description || ""}
          onChange={(event) =>
            event.target.value.length <= 1000 && set("description", event.target.value)
          }
          placeholder="Describe the architectural highlights, amenities, and surroundings..."
          rows={5}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
        />
      </div>

      {/* Location */}
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
          onChange={(event) => set("streetAddress", event.target.value)}
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
                onChange={(event) => set(field, event.target.value)}
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

        {/* SVG Map Placeholder */}
        <div className="w-full h-44 rounded-xl overflow-hidden bg-gray-200 relative">
          <svg
            className="w-full h-full"
            viewBox="0 0 600 180"
            preserveAspectRatio="xMidYMid slice"
          >
            <rect width="600" height="180" fill="#d1d5db" />
            {[
              [0, 60, 600, 60, 12],
              [0, 120, 600, 120, 12],
              [100, 0, 100, 180, 8],
              [250, 0, 250, 180, 8],
              [400, 0, 400, 180, 8],
              [520, 0, 520, 180, 8],
            ].map(([x1, y1, x2, y2, w], index) => (
              <line
                key={index}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#e5e7eb"
                strokeWidth={w}
              />
            ))}
            {[
              [10, 10, 80, 40],
              [120, 10, 120, 40],
              [260, 10, 130, 40],
              [420, 10, 90, 40],
              [10, 70, 80, 40],
              [120, 70, 120, 40],
              [260, 70, 130, 40],
              [420, 70, 90, 40],
              [10, 130, 80, 40],
              [120, 130, 120, 40],
              [260, 130, 130, 40],
              [420, 130, 90, 40],
            ].map(([x, y, w, h], index) => (
              <rect
                key={index}
                x={x}
                y={y}
                width={w}
                height={h}
                fill="#c4c9d4"
                rx="2"
              />
            ))}
            <circle cx="300" cy="90" r="14" fill="#2563EB" opacity="0.9" />
            <circle cx="300" cy="90" r="6" fill="white" />
          </svg>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-end mt-8">
        <button
          onClick={onNext}
          disabled={!isValid}
          className={`px-8 py-3 rounded-xl text-sm font-bold tracking-wide transition-all
            ${isValid ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg" : "bg-gray-200 text-gray-400 cursor-not-allowed"}`}
        >
          Next →
        </button>
      </div>
    </div>
  );
}
