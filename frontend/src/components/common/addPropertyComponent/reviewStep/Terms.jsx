import React from 'react';
import { SimpleCheckIcon, InfoExclamationIcon } from "../../../../assets/svg";
import { reviewTermsData } from "../../../../data";

export default function Terms({ agreed, setAgreed }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
      <label className="flex items-start gap-3 cursor-pointer mb-4">
        <div
          onClick={() => setAgreed(!agreed)}
          className={`w-5 h-5 rounded border-2 mt-0.5 flex items-center justify-center flex-shrink-0 transition-all
            ${agreed ? "bg-blue-600 border-blue-600" : "border-gray-300 bg-white"}`}
        >
          {agreed && (
            <SimpleCheckIcon className="w-3 h-3 text-white stroke-[3]" />
          )}
        </div>
        <div>
          <p className="text-sm font-bold text-gray-800 mb-1">
            {reviewTermsData.title}
          </p>
          <p className="text-xs text-gray-500 leading-relaxed">
            {reviewTermsData.description}
          </p>
        </div>
      </label>
      <div className="flex items-start gap-2 bg-orange-50 border border-orange-200 rounded-xl px-4 py-3">
        <InfoExclamationIcon className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
        <p className="text-xs text-orange-700 font-medium">
          {reviewTermsData.warning}
        </p>
      </div>
    </div>
  );
}
