import { SimpleCheckIcon, ChevronDownIcon } from "../../../../assets/svg";
import {
  currencies,
  periods,
  minRentalPeriods,
  maxRentalPeriods,
  utilities,
  rulesToggles,
} from "../../../../data";

export default function PricingStep({ data, onChange, onNext, onBack }) {
  const set = (field, val) => onChange({ ...data, [field]: val });

  const toggleUtil = (key) => {
    const curr = data.utilities || {};
    set("utilities", { ...curr, [key]: !curr[key] });
  };

  const toggleRule = (key) => {
    const curr = data.rules || {};
    set("rules", { ...curr, [key]: !curr[key] });
  };

  const isValid = data.baseAmount && data.availableFrom;

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

      {/* ── Section 1: Pricing Details ── */}
      <Section label="Section 1: Pricing Details">
        <div className="grid grid-cols-3 gap-4 mb-4">
          <SelectField
            label="Currency"
            value={data.currency || "USD ($)"}
            options={currencies}
            onChange={(v) => set("currency", v)}
          />
          <div>
            <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2">
              Base Amount
            </label>
            <input
              type="number"
              value={data.baseAmount || ""}
              onChange={(event) => set("baseAmount", event.target.value)}
              placeholder="0.00"
              className="w-full h-11 px-4 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>
          <SelectField
            label="Period"
            value={data.period || "Per Month"}
            options={periods}
            onChange={(v) => set("period", v)}
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2">
              Security Deposit *
            </label>
            <input
              type="number"
              value={data.securityDeposit || ""}
              onChange={(event) => set("securityDeposit", event.target.value)}
              placeholder="e.g. 1500"
              className="w-full h-11 px-4 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>
          <div>
            <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2">
              Maintenance Fee
            </label>
            <input
              type="number"
              value={data.maintenanceFee || ""}
              onChange={(event) => set("maintenanceFee", event.target.value)}
              placeholder="e.g. 200"
              className="w-full h-11 px-4 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>
        </div>

        {/* Advance Payment */}
        <div className="bg-gray-50 rounded-xl border border-gray-200 p-4">
          <label className="flex items-center gap-3 cursor-pointer mb-3">
            <div
              onClick={() => set("requireAdvance", !data.requireAdvance)}
              className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all
                ${data.requireAdvance ? "bg-blue-600 border-blue-600" : "border-gray-300 bg-white"}`}
            >
              {data.requireAdvance && (
                <SimpleCheckIcon className="w-3 h-3 text-white stroke-[3]" />
              )}
            </div>
            <span className="text-sm font-semibold text-gray-700">
              Require Advance Payment
            </span>
          </label>
          {data.requireAdvance && (
            <div>
              <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2">
                Number of Months
              </label>
              <div className="flex items-center gap-3">
                <button
                  onClick={() =>
                    set(
                      "advanceMonths",
                      Math.max(1, (data.advanceMonths || 1) - 1),
                    )
                  }
                  className="w-9 h-9 rounded-lg border border-gray-200 bg-white text-gray-700 font-bold hover:bg-gray-100 transition-colors"
                >
                  −
                </button>
                <span className="text-lg font-bold text-gray-900 w-6 text-center">
                  {data.advanceMonths || 1}
                </span>
                <button
                  onClick={() =>
                    set("advanceMonths", (data.advanceMonths || 1) + 1)
                  }
                  className="w-9 h-9 rounded-lg border border-gray-200 bg-white text-gray-700 font-bold hover:bg-gray-100 transition-colors"
                >
                  +
                </button>
              </div>
            </div>
          )}
        </div>
      </Section>

      {/* ── Section 2: Availability ── */}
      <Section label="Section 2: Availability">
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2">
              Available From *
            </label>
            <input
              type="date"
              value={data.availableFrom || ""}
              onChange={(event) => set("availableFrom", event.target.value)}
              className="w-full h-11 px-4 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>
          <SelectField
            label="Min Rental Period"
            value={data.minRental || "6 Months"}
            options={minRentalPeriods}
            onChange={(v) => set("minRental", v)}
          />
          <SelectField
            label="Max Rental Period"
            value={data.maxRental || "No Limit"}
            options={maxRentalPeriods}
            onChange={(v) => set("maxRental", v)}
          />
        </div>
      </Section>

      {/* ── Section 3: Utilities ── */}
      <Section label="Section 3: Utilities Included">
        <div className="flex flex-wrap gap-4">
          {utilities.map((utility) => {
            const checked = data.utilities?.[utility.key];
            return (
              <label
                key={utility.key}
                className="flex items-center gap-2 cursor-pointer"
              >
                <div
                  onClick={() => toggleUtil(utility.key)}
                  className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all
                    ${checked ? "bg-blue-600 border-blue-600" : "border-gray-300 bg-white"}`}
                >
                  {checked && (
                    <SimpleCheckIcon className="w-3 h-3 text-white stroke-[3]" />
                  )}
                </div>
                <span className="text-sm text-gray-700">{utility.label}</span>
              </label>
            );
          })}
        </div>
      </Section>

      {/* ── Section 4: Rules ── */}
      <Section label="Section 4: Rules & Restrictions">
        <div className="flex flex-col gap-3">
          {rulesToggles.map((rule) => {
            const on = data.rules?.[rule.key];
            return (
              <div
                key={rule.key}
                className="flex items-center justify-between px-5 py-4 rounded-xl border border-gray-200 bg-gray-50"
              >
                <div>
                  <p className="text-sm font-semibold text-gray-800">
                    {rule.label}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">{rule.desc}</p>
                </div>
                <button
                  type="button"
                  onClick={() => toggleRule(rule.key)}
                  className={`relative w-12 h-6 rounded-full transition-colors flex-shrink-0
                    ${on ? "bg-blue-600" : "bg-gray-300"}`}
                >
                  <span
                    className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform
                    ${on ? "translate-x-6" : "translate-x-0"}`}
                  />
                </button>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Footer */}
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

function Section({ label, children }) {
  return (
    <div className="mb-6">
      <p className="text-[11px] font-bold text-blue-600 uppercase tracking-widest mb-4">
        {label}
      </p>
      <div className="bg-white rounded-xl border border-gray-200 p-5">
        {children}
      </div>
    </div>
  );
}

function SelectField({ label, value, options, onChange }) {
  return (
    <div>
      <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2">
        {label}
      </label>
      <div className="relative">
        <select
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="w-full h-11 px-4 pr-10 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-800 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all cursor-pointer"
        >
          {options.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
        <ChevronDownIcon className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
      </div>
    </div>
  );
}