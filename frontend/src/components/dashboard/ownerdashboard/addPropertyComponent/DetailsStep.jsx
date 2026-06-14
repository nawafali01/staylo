import { useDetailsStep } from "../../../../utils/feature";
import RoomDetailsForm from "./detailsStep/RoomDetailsForm";
import FurnishingStatus from "./detailsStep/FurnishingStatus";
import LifestyleAmenities from "./detailsStep/LifestyleAmenities";
import InfrastructureSafety from "./detailsStep/InfrastructureSafety";

export default function DetailsStep({ data, onChange, onNext, onBack }) {
  const { setField, toggleAmenity, toggleInfra, isValid } = useDetailsStep(data, onChange);

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
      <div className="mb-7">
        <h2 className="text-2xl font-bold text-gray-900 mb-1">
          Property Details
        </h2>
        <p className="text-sm text-gray-500">
          Provide the structural and functional specifications of the estate.
        </p>
      </div>

      <RoomDetailsForm data={data} setField={setField} />
      <FurnishingStatus data={data} setField={setField} />
      <LifestyleAmenities data={data} toggleAmenity={toggleAmenity} />
      <InfrastructureSafety data={data} toggleInfra={toggleInfra} />

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