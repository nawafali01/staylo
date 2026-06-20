import { usePhotosStep } from "../../../utils/feature";
import PhotoUploader from "./photosStep/PhotoUploader";
import MediaLinksForm from "./photosStep/MediaLinksForm";
import TipsAndChecklist from "./photosStep/TipsAndChecklist";

export default function PhotosStep({ data, onChange, onNext, onBack }) {
  const { photos, handleFiles, removePhoto, handleDrop, checklistDone } = usePhotosStep(data, onChange);

  return (
    <div className="flex gap-6">
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

          <PhotoUploader 
            photos={photos} 
            handleFiles={handleFiles} 
            removePhoto={removePhoto} 
            handleDrop={handleDrop} 
          />

          <MediaLinksForm data={data} onChange={onChange} />

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

      <TipsAndChecklist checklistDone={checklistDone} />
    </div>
  );
}
