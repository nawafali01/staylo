import { useRef } from "react";
import { UploadCloudIcon } from "../../../../assets/svg";

export default function PhotoUploader({ photos, handleFiles, removePhoto, handleDrop }) {
  const fileRef = useRef(null);

  return (
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
  );
}
