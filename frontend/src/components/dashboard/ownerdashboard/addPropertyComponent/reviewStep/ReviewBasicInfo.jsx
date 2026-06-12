import ReviewCard from "./ReviewCard";
import InfoField from "./InfoField";

export default function ReviewBasicInfo({ data, onEdit }) {
  return (
    <ReviewCard
      title="Basic Info"
      subtitle="Essential property identity details"
      onEdit={() => onEdit(1)}
    >
      <div className="grid grid-cols-2 gap-x-8 gap-y-4">
        <InfoField label="Listing Name" value={data.title || "—"} big />
        <InfoField
          label="Property Type"
          value={data.propertyType || "—"}
          big
        />
        <div className="col-span-2">
          <InfoField
            label="Address"
            value={
              [data.streetAddress, data.city, data.province]
                .filter(Boolean)
                .join(", ") || "—"
            }
          />
        </div>
      </div>
    </ReviewCard>
  );
}
