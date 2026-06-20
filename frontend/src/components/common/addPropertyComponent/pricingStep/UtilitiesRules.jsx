import PricingSection from "./PricingSection";
import { SimpleCheckIcon } from "../../../../assets/svg";
import { utilities, rulesToggles } from "../../../../data";

export default function UtilitiesRules({ data, toggleUtil, toggleRule }) {
  return (
    <>
      <PricingSection label="Section 3: Utilities Included">
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
      </PricingSection>

      <PricingSection label="Section 4: Rules & Restrictions">
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
      </PricingSection>
    </>
  );
}
