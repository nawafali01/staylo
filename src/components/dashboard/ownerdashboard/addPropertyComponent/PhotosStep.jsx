import { useRef } from "react";
import { mediaChecklist, proTips } from "../../../../data";
import { 
  UploadCloudIcon, 
  DoubleLinkIcon, 
  PlayCircleIcon, 
  SimpleCheckIcon 
} from "../../../../assets/svg";

export default function PhotosStep({ data, onChange, onNext, onBack }) {
  const fileRef = useRef(null);
  const photos = data.photos || [];

  const handleFiles = (event) => {
    const files = Array.from(event.target.files);
    const newPhotos = files.map((file, index) => ({
      id: Date.now() + index,
      name: file.name,
      url: URL.createObjectURL(file),
    }));
    onChange({ ...data, photos: [...photos, ...newPhotos] });
  };

  const removePhoto = (id) =>
    onChange({ ...data, photos: photos.filter((photo) => photo.id !== id) });

  const handleDrop = (event) => {
    event.preventDefault();
    const files = Array.from(event.dataTransfer.files);
    const newPhotos = files.map((file, index) => ({
      id: Date.now() + index,
      name: file.name,
      url: URL.createObjectURL(file),
    }));
    onChange({ ...data, photos: [...photos, ...newPhotos] });
  };

  // Checklist: mark first 3 done if photos exist
  const checklistDone = {
    exterior: photos.length >= 1,
    living: photos.length >= 2,
    bedroom: photos.length >= 3,
    floorplan: false,
    amenities: false,
  };

  return (
    <div className="flex gap-6">
      {/* Left Column */}
      <div className="flex-1 min-w-0">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-1">
              Photos & Media
            </h2>
            <p className="text-sm text-gray-500">
              Showcase your property to potential high-value tenants.
            </p>
          </div>

          {/* Upload Area */}
          <div className="mb-2">
            <div className="flex items-center justify-between mb-3">
              <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">
                Property Photos <span className="text-red-500">*</span>
              </label>
              <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">
                REQUIRED
              </span>
            </div>

            <div
              onDragOver={(event) => event.preventDefault()}
              onDrop={handleDrop}
              onClick={() => fileRef.current?.click()}
              className="border-2 border-dashed border-blue-300 rounded-xl bg-blue-50/40 flex flex-col items-center justify-center py-10 cursor-pointer hover:bg-blue-50 hover:border-blue-400 transition-all mb-4"
            >
              <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center mb-3">
                <UploadCloudIcon className="w-6 h-6 text-blue-500" />
              </div>
              <p className="text-sm font-semibold text-gray-700 mb-1">
                Drag & drop images here
              </p>
              <p className="text-sm text-gray-500">
                or{" "}
                <span className="text-blue-600 font-semibold">
                  browse files
                </span>{" "}
                from your computer
              </p>
              <p className="text-[10px] text-gray-400 mt-2 uppercase tracking-widest">
                Supports JPG, PNG, WEBP (min 1920×1080px)
              </p>
              <input
                ref={fileRef}
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                onChange={handleFiles}
              />
            </div>

            {/* Photo Grid */}
            {photos.length > 0 && (
              <div className="grid grid-cols-4 gap-2">
                {photos.map((photo, index) => (
                  <div
                    key={photo.id}
                    className="relative group aspect-square rounded-xl overflow-hidden border-2 border-gray-200"
                  >
                    <img
                      src={photo.url}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                    {index === 0 && (
                      <div className="absolute top-1.5 left-1.5">
                        <span className="text-[9px] font-bold bg-blue-600 text-white px-1.5 py-0.5 rounded-md">
                          COVER PHOTO
                        </span>
                      </div>
                    )}
                    <button
                      onClick={(event) => {
                        event.stopPropagation();
                        removePhoto(photo.id);
                      }}
                      className="absolute top-1.5 right-1.5 w-5 h-5 bg-red-500 text-white rounded-full text-xs font-bold flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Video Tour */}
          <div className="border border-gray-200 rounded-xl p-5 mb-4">
            <div className="flex items-center justify-between mb-3">
              <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">
                Video Tour
              </label>
              <span className="text-[10px] font-bold text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
                OPTIONAL
              </span>
            </div>
            <div className="flex gap-3">
              <div className="flex-1 flex items-center gap-2 h-11 px-4 rounded-xl border border-gray-200 bg-gray-50">
                <DoubleLinkIcon className="w-4 h-4 text-gray-400 flex-shrink-0" />
                <input
                  type="text"
                  value={data.videoUrl || ""}
                  onChange={(event) =>
                    onChange({ ...data, videoUrl: event.target.value })
                  }
                  placeholder="YouTube or Vimeo URL"
                  className="flex-1 bg-transparent text-sm text-gray-800 placeholder-gray-400 focus:outline-none"
                />
              </div>
              <button className="px-4 h-11 rounded-xl bg-gray-800 text-white text-sm font-semibold flex items-center gap-2 hover:bg-gray-900 transition-colors">
                <PlayCircleIcon className="w-4 h-4" />
                Preview
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-2 italic">
              Videos provide an immersive experience and increase engagement by
              300%.
            </p>
          </div>

          {/* Virtual Tour */}
          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center justify-between mb-3">
              <label className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">
                Virtual Tour
              </label>
              <span className="text-[10px] font-bold text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
                OPTIONAL
              </span>
            </div>
            <div className="flex items-center gap-2 h-11 px-4 rounded-xl border border-gray-200 bg-gray-50">
              <span className="text-gray-400">🔗</span>
              <input
                type="text"
                value={data.virtualTourUrl || ""}
                onChange={(event) =>
                  onChange({ ...data, virtualTourUrl: event.target.value })
                }
                placeholder="Matterport or 360 Tour Link"
                className="flex-1 bg-transparent text-sm text-gray-800 placeholder-gray-400 focus:outline-none"
              />
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-between mt-8 pt-4 border-t border-gray-100">
            <button
              onClick={onBack}
              className="px-6 py-3 rounded-xl border-2 border-gray-200 text-sm font-bold text-gray-600 hover:border-gray-300 hover:bg-gray-50 transition-all flex items-center gap-2"
            >
              ← Back
            </button>
            <div className="flex gap-3">
              <button className="px-5 py-3 rounded-xl border-2 border-gray-200 text-sm font-bold text-gray-600 hover:bg-gray-50 transition-all">
                Save Draft
              </button>
              <button
                onClick={onNext}
                className="px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-2"
              >
                Next Step →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-64 flex-shrink-0 flex flex-col gap-4">
        {/* Pro Tips */}
        <div className="bg-blue-600 rounded-2xl p-5">
          <h3 className="text-white font-bold text-base mb-4">
            Pro Tips for Photography
          </h3>
          <ul className="flex flex-col gap-3">
            {proTips.map((tip, index) => (
              <li key={index} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-300 mt-1.5 flex-shrink-0" />
                <p className="text-blue-100 text-xs leading-relaxed">{tip}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Media Checklist */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
          <h3 className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-4">
            Media Checklist
          </h3>
          <ul className="flex flex-col gap-3">
            {mediaChecklist.map((item) => {
              const done = checklistDone[item.key];
              return (
                <li
                  key={item.key}
                  className="flex items-center justify-between"
                >
                  <span
                    className={`text-sm ${done ? "text-gray-800 font-medium" : "text-gray-400"}`}
                  >
                    {item.label}
                  </span>
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center
                    ${done ? "bg-green-500 border-green-500" : "border-gray-300"}`}
                  >
                    {done && (
                      <SimpleCheckIcon className="w-3 h-3 text-white stroke-[3]" />
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
