import PropertyIdentityForm from "./basicInfoStep/Index";
import LocationForm from "./basicInfoStep/LocationForm";
import { useBasicInfoStep } from "../../../utils/feature";

export default function BasicInfoStep({ data, onChange, onNext }) {
  const { setField, isValid } = useBasicInfoStep(data, onChange);

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
      <PropertyIdentityForm data={data} setField={setField} />
      <LocationForm data={data} setField={setField} />

      <div className="flex justify-end mt-8">
        <button
          onClick={onNext}
          disabled={!isValid}
          className={`px-8 py-3 rounded-xl text-sm font-bold tracking-wide transition-all
            ${isValid ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg" : "bg-gray-200 text-gray-400 cursor-not-allowed"}`}
        >
          Next →
        </button>
      </div>
    </div>
  );
}
