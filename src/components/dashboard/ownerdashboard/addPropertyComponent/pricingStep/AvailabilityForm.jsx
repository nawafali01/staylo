import PricingSection from "./PricingSection";
import PricingSelectField from "./PricingSelectField";
import { minRentalPeriods, maxRentalPeriods } from "../../../../../data";

export default function AvailabilityForm({ data, setField }) {
  return (
    <PricingSection label="Section 2: Availability">
      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2">
            Available From *
          </label>
          <input
            type="date"
            value={data.availableFrom || ""}
            onChange={(event) => setField("availableFrom", event.target.value)}
            className="w-full h-11 px-4 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
        </div>
        <PricingSelectField
          label="Min Rental Period"
          value={data.minRental || "6 Months"}
          options={minRentalPeriods}
          onChange={(v) => setField("minRental", v)}
        />
        <PricingSelectField
          label="Max Rental Period"
          value={data.maxRental || "No Limit"}
          options={maxRentalPeriods}
          onChange={(v) => setField("maxRental", v)}
        />
      </div>
    </PricingSection>
  );
}
