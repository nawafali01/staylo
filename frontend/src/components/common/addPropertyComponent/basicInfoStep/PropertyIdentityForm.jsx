import { listingCategories, propertyTypes } from "../../../../data";
import { ChevronDownIcon } from "../../../../assets/svg";

export default function PropertyIdentityForm({ data, setField }) {
  return (
    <>
      <div className="grid grid-cols-[1fr_200px] gap-4 mb-5">
        <div>
          <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2">
            Listing Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={data.title || ""}
            onChange={(event) => setField("title", event.target.value)}
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
              onChange={(event) => setField("propertyType", event.target.value)}
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

      <div className="mb-5">
        <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2">
          Listing Category
        </label>
        <div className="grid grid-cols-2 gap-3">
          {listingCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setField("listingCategory", category)}
              className={`h-12 rounded-xl border-2 text-sm font-semibold transition-all
                ${(data.listingCategory || "For Rent") === category
                  ? "border-blue-600 bg-blue-50 text-blue-700"
                  : "border-gray-200 bg-gray-50 text-gray-600 hover:border-gray-300"
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

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
            event.target.value.length <= 1000 && setField("description", event.target.value)
          }
          placeholder="Describe the architectural highlights, amenities, and surroundings..."
          rows={5}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
        />
      </div>
    </>
  );
}
