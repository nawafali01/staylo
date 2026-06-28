import React from 'react';
import { EditIcon } from "../../../../assets/svg";

export default function Financials({ data, onEdit }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-base font-bold text-gray-900">Financials</h3>
          <p className="text-xs text-gray-400">Rent and deposit details</p>
        </div>
        <button
          onClick={() => onEdit(4)}
          className="flex items-center gap-1 text-blue-600 text-xs font-semibold hover:text-blue-700"
        >
          <EditIcon className="w-3.5 h-3.5" />
          Edit
        </button>
      </div>
      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
        Monthly Rent
      </p>
      <p className="text-3xl font-bold text-gray-900 mb-1">
        {data.baseAmount
          ? `$${Number(data.baseAmount).toLocaleString()}`
          : "—"}
      </p>
      <p className="text-xs text-gray-400 mb-4">USD/mo</p>
      {data.securityDeposit && (
        <div className="flex justify-between py-2 border-t border-gray-100">
          <span className="text-sm text-gray-600">Security Deposit</span>
          <span className="text-sm font-bold text-gray-900">
            ${Number(data.securityDeposit).toLocaleString()}
          </span>
        </div>
      )}
      <div className="flex justify-between py-2 border-t border-gray-100">
        <span className="text-sm text-gray-600">Utilities</span>
        <span className="text-sm font-bold text-gray-900">
          {Object.values(data.utilities || {}).some(Boolean)
            ? "Included"
            : "Not Included"}
        </span>
      </div>

      {/* Rules */}
      {Object.entries(data.rules || {}).some(([, value]) => value) && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">
            Property Rules
          </p>
          <ul className="flex flex-col gap-2">
            {data.rules?.petsAllowed && (
              <li className="text-xs text-gray-600 flex items-center gap-2">
                <span>🐾</span> Small pets welcome
              </li>
            )}
            {!data.rules?.smokingAllowed && (
              <li className="text-xs text-gray-600 flex items-center gap-2">
                <span>🚭</span> No Smoking allowed
              </li>
            )}
            {data.rules?.childrenWelcome && (
              <li className="text-xs text-gray-600 flex items-center gap-2">
                <span>👨‍👩‍👧</span> Children welcome
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
