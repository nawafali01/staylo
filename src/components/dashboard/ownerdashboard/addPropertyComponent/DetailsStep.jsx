import { SimpleCheckIcon } from "../../../../assets/svg";
import {
  furnishingOptions,
  lifestyleAmenities,
  infrastructureItems,
} from "../../../../data";

export default function DetailsStep({ data, onChange, onNext, onBack }) {
  const set = (field, val) => onChange({ ...data, [field]: val });

  const toggleAmenity = (key) => {
    const current = data.amenities || {};
    set("amenities", { ...current, [key]: !current[key] });
  };

  const toggleInfra = (key) => {
    const current = data.infrastructure || {};
    set("infrastructure", { ...current, [key]: !current[key] });
  };

  const isValid =
    data.bedrooms && data.bathrooms && data.propertySize && data.furnishing;

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
      {/* Header */}
      <div className="mb-7">
        <h2 className="text-2xl font-bold text-gray-900 mb-1">
          Property Details
        </h2>
        <p className="text-sm text-gray-500">
          Provide the structural and functional specifications of the estate.
        </p>
      </div>

      {/* ── Room Details ── */}
      <div className="mb-7">
        <div className="flex items-center gap-2 mb-5">
          <div className="w-1 h-5 bg-blue-600 rounded-full" />
          <h3 className="text-base font-bold text-gray-900">Room Details</h3>
        </div>
        <div className="grid grid-cols-3 gap-4 mb-4">
          {[
            ["bedrooms", "NUMBER OF BEDROOMS *", "e.g. 3", "number"],
            ["bathrooms", "NUMBER OF BATHROOMS *", "e.g. 2", "number"],
            ["propertySize", "PROPERTY SIZE *", "Size", "text"],
          ].map(([field, label, placeholder, type]) => (
            <div key={field}>
              <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2">
                {label}
              </label>
              <input
                type={type}
                value={data[field] || ""}
                onChange={(event) => set(field, event.target.value)}
                placeholder={placeholder}
                className="w-full h-11 px-4 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2">
              YEAR BUILT
            </label>
            <input
              type="text"
              value={data.yearBuilt || ""}
              onChange={(event) => set("yearBuilt", event.target.value)}
              placeholder="YYYY"
              className="w-full h-11 px-4 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>
          <div>
            <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2">
              PARKING SPACES
            </label>
            <div className="flex items-center gap-0 h-11">
              <button
                onClick={() =>
                  set("parking", Math.max(0, (data.parking || 0) - 1))
                }
                className="w-11 h-11 rounded-l-xl border border-gray-200 bg-gray-50 text-gray-600 text-lg font-bold hover:bg-gray-100 transition-colors flex items-center justify-center"
              >
                −
              </button>
              <div className="flex-1 h-11 border-t border-b border-gray-200 bg-gray-50 flex items-center justify-center text-sm font-semibold text-gray-800">
                {data.parking || 0}
              </div>
              <button
                onClick={() => set("parking", (data.parking || 0) + 1)}
                className="w-11 h-11 rounded-r-xl border border-gray-200 bg-blue-600 text-white text-lg font-bold hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Furnishing Status ── */}
      <div className="mb-7">
        <div className="flex items-center gap-2 mb-5">
          <div className="w-1 h-5 bg-blue-600 rounded-full" />
          <h3 className="text-base font-bold text-gray-900">
            Furnishing Status <span className="text-red-500">*</span>
          </h3>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {furnishingOptions.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => set("furnishing", option.value)}
              className={`flex flex-col items-center gap-2 py-5 rounded-xl border-2 transition-all
                ${
                  data.furnishing === option.value
                    ? "border-blue-600 bg-blue-50"
                    : "border-gray-200 bg-gray-50 hover:border-gray-300"
                }`}
            >
              <span className="text-2xl">{option.icon}</span>
              <span
                className={`text-[11px] font-bold tracking-wider ${data.furnishing === option.value ? "text-blue-700" : "text-gray-500"}`}
              >
                {option.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* ── Lifestyle Amenities ── */}
      <div className="mb-7">
        <div className="flex items-center gap-2 mb-5">
          <div className="w-1 h-5 bg-blue-600 rounded-full" />
          <h3 className="text-base font-bold text-gray-900">
            Lifestyle Amenities
          </h3>
        </div>
        <div className="grid grid-cols-4 gap-3">
          {lifestyleAmenities.map((item) => {
            const checked = data.amenities?.[item.key];
            return (
              <label
                key={item.key}
                className="flex items-center gap-2 cursor-pointer group"
              >
                <div
                  onClick={() => toggleAmenity(item.key)}
                  className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 transition-all
                    ${checked ? "bg-blue-600 border-blue-600" : "border-gray-300 bg-white"}`}
                >
                  {checked && (
                    <SimpleCheckIcon className="w-3 h-3 text-white stroke-[3]" />
                  )}
                </div>
                <span className="text-sm text-gray-700 group-hover:text-gray-900">
                  {item.icon} {item.label}
                </span>
              </label>
            );
          })}
        </div>
      </div>

      {/* ── Infrastructure & Safety ── */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-5">
          <div className="w-1 h-5 bg-blue-600 rounded-full" />
          <h3 className="text-base font-bold text-gray-900">
            Infrastructure & Safety
          </h3>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {infrastructureItems.map((item) => {
            const on = data.infrastructure?.[item.key];
            return (
              <div
                key={item.key}
                className="flex items-center justify-between px-4 py-3 rounded-xl border border-gray-200 bg-gray-50"
              >
                <span className="text-sm text-gray-700 font-medium">
                  {item.label}
                </span>
                {/* Toggle */}
                <button
                  type="button"
                  onClick={() => toggleInfra(item.key)}
                  className={`relative w-11 h-6 rounded-full transition-colors flex-shrink-0
                    ${on ? "bg-blue-600" : "bg-gray-300"}`}
                >
                  <span
                    className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform
                    ${on ? "translate-x-5" : "translate-x-0"}`}
                  />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between pt-4 border-t border-gray-100">
        <button
          onClick={onBack}
          className="px-6 py-3 rounded-xl border-2 border-gray-200 text-sm font-bold text-gray-600 hover:border-gray-300 hover:bg-gray-50 transition-all"
        >
          ← Back
        </button>
        <button
          onClick={onNext}
          disabled={!isValid}
          className={`px-8 py-3 rounded-xl text-sm font-bold tracking-wide transition-all
            ${isValid ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg" : "bg-gray-200 text-gray-400 cursor-not-allowed"}`}
        >
          Next: Property Media →
        </button>
      </div>
    </div>
  );
}