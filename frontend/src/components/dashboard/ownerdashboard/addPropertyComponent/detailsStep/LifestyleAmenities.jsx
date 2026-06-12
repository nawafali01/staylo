import { SimpleCheckIcon } from "../../../../../assets/svg";
import { lifestyleAmenities } from "../../../../../data";

export default function LifestyleAmenities({ data, toggleAmenity }) {
  return (
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
  );
}
