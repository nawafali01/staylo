import { furnishingOptions } from "../../../../data";

export default function FurnishingStatus({ data, setField }) {
  return (
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
            onClick={() => setField("furnishing", option.value)}
            className={`flex flex-col items-center gap-2 py-5 rounded-xl border-2 transition-all
              ${data.furnishing === option.value
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
  );
}
