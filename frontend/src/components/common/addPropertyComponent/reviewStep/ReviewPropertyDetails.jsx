import ReviewCard from "./ReviewCard";
import { reviewPropertyDetailsConfig } from "../../../../data";

export default function ReviewPropertyDetails({ data, amenitiesList, onEdit }) {
  const getFormattedValue = (item, data) => {
    if (item.format === "furnishing" && data.furnishing) {
      return data.furnishing.charAt(0).toUpperCase() + data.furnishing.slice(1) + " Furnished";
    }
    if (item.suffix && data[item.key]) {
      return `${data[item.key]}${item.suffix}`;
    }
    return data[item.key] || "—";
  };

  return (
    <ReviewCard
      title="Property Details"
      subtitle="Space, layout, and amenities"
      onEdit={() => onEdit(2)}
    >
      <div className="grid grid-cols-4 gap-3 mb-5">
        {reviewPropertyDetailsConfig.map((item) => (
          <div
            key={item.label}
            className="border border-gray-200 rounded-xl p-3 bg-gray-50"
          >
            <div className="text-lg mb-1">{item.icon}</div>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-0.5">
              {item.label}
            </p>
            <p className="text-sm font-bold text-gray-800">
              {getFormattedValue(item, data)}
            </p>
          </div>
        ))}
      </div>
      {amenitiesList.length > 0 && (
        <div>
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
            Key Amenities
          </p>
          <div className="flex flex-wrap gap-2">
            {amenitiesList.map((amenity) => (
              <span
                key={amenity}
                className="text-xs font-medium text-gray-600 bg-gray-100 border border-gray-200 px-3 py-1 rounded-full capitalize"
              >
                {amenity}
              </span>
            ))}
          </div>
        </div>
      )}
    </ReviewCard>
  );
}
