import ReviewCard from "./ReviewCard";

export default function ReviewPhotos({ photos, onEdit }) {
  if (!photos || photos.length === 0) return null;

  return (
    <ReviewCard
      title="Photos"
      subtitle="Property media"
      onEdit={() => onEdit(3)}
    >
      <div className="grid grid-cols-5 gap-2">
        {photos.slice(0, 4).map((photo, index) => (
          <div
            key={photo.id}
            className={`relative rounded-xl overflow-hidden ${index === 0 ? "col-span-2 row-span-2" : ""}`}
            style={{ aspectRatio: "1" }}
          >
            <img
              src={photo.url}
              alt=""
              className="w-full h-full object-cover"
            />
            {index === 0 && (
              <span className="absolute top-2 left-2 text-[9px] font-bold bg-blue-600 text-white px-2 py-0.5 rounded-md">
                COVER PHOTO
              </span>
            )}
          </div>
        ))}
        {photos.length > 4 && (
          <div
            className="relative rounded-xl overflow-hidden bg-gray-900 flex items-center justify-center"
            style={{ aspectRatio: "1" }}
          >
            <span className="text-white font-bold text-sm">
              +{photos.length - 4} More
            </span>
          </div>
        )}
      </div>
    </ReviewCard>
  );
}
