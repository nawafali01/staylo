import React from 'react';
import Section from "./Section";
import SelectField from "./SelectField";
import { currencies, periods } from "../../../../data";
import { SimpleCheckIcon } from "../../../../assets/svg";

export default function PricingDetailsIndex({ data, setField }) {
  return (
    <Section label="Section 1: Pricing Details">
      <div className="grid grid-cols-3 gap-4 mb-4">
        <SelectField
          label="Currency"
          value={data.currency || "USD ($)"}
          options={currencies}
          onChange={(v) => setField("currency", v)}
        />
        <div>
          <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-2">
            Base Amount
          </label>
          <input
            type="number"
            value={data.baseAmount || ""}
            onChange={(event) => setField("baseAmount", event.target.value)}
            placeholder="0.00"
            className="w-full h-11 px-4 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
        </div>
        <SelectField
          label="Period"
          value={data.period || "Per Month"}
          options={periods}
          onChange={(v) => setField("period", v)}
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
            onChange={(event) => setField("securityDeposit", event.target.value)}
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
            onChange={(event) => setField("maintenanceFee", event.target.value)}
            placeholder="e.g. 200"
            className="w-full h-11 px-4 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
        </div>
      </div>

      <div className="bg-gray-50 rounded-xl border border-gray-200 p-4">
        <label className="flex items-center gap-3 cursor-pointer mb-3">
          <div
            onClick={() => setField("requireAdvance", !data.requireAdvance)}
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
                  setField(
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
                  setField("advanceMonths", (data.advanceMonths || 1) + 1)
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
  );
}
