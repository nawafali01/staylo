import { usePricingStep } from "../../../utils/feature";
import PricingDetails from "./pricingStep/PricingDetails";
import AvailabilityForm from "./pricingStep/AvailabilityForm";
import UtilitiesRules from "./pricingStep/UtilitiesRules";

export default function PricingStep({ data, onChange, onNext, onBack }) {
  const { setField, toggleUtil, toggleRule, isValid } = usePricingStep(data, onChange);

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
      <div className="mb-7">
        <h2 className="text-2xl font-bold text-gray-900 mb-1">
          Pricing & Availability
        </h2>
        <p className="text-sm text-gray-500">
          Set your pricing structure, availability, and property rules.
        </p>
      </div>

      <PricingDetails data={data} setField={setField} />
      <AvailabilityForm data={data} setField={setField} />
      <UtilitiesRules data={data} toggleUtil={toggleUtil} toggleRule={toggleRule} />

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
          Next Step →
        </button>
      </div>
    </div>
  );
}
