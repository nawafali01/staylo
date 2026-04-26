import { useState } from "react";
import {
    BuildingLibraryIcon,
    CurrencyDollarIcon,
    DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";
import { paymentMethods } from "../../../../data";
import MethodButton from "./MethodButton";

export default function RequestPayoutCard() {
    const [selectedMethod, setSelectedMethod] = useState("bank");
    const [amount, setAmount] = useState("145000");

    return (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <h3 className="font-semibold text-gray-800 text-sm mb-1">Request Payout</h3>
            <p className="text-xs text-gray-400 mb-4">
                Funds are available for immediate withdrawal to your linked accounts.
            </p>

            <div className="bg-blue-50 rounded-xl p-4 mb-4">
                <p className="text-xs font-semibold text-blue-400 uppercase tracking-wide mb-1">
                    Available Balance
                </p>
                <p className="text-2xl font-bold text-blue-700">PKR 212,400</p>
            </div>

            <div className="mb-4">
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
                    Payment Method
                </p>
                <div className="flex gap-2">
                    <MethodButton
                        method={paymentMethods[0]}
                        icon={<BuildingLibraryIcon className="w-5 h-5" />}
                        isActive={selectedMethod === "bank"}
                        onClick={() => setSelectedMethod("bank")}
                    />
                    <MethodButton
                        method={paymentMethods[1]}
                        icon={<CurrencyDollarIcon className="w-5 h-5" />}
                        isActive={selectedMethod === "paypal"}
                        onClick={() => setSelectedMethod("paypal")}
                    />
                    <MethodButton
                        method={paymentMethods[2]}
                        icon={<DevicePhoneMobileIcon className="w-5 h-5" />}
                        isActive={selectedMethod === "jazzcash"}
                        onClick={() => setSelectedMethod("jazzcash")}
                    />
                </div>
            </div>

            <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Amount</p>
                    <button className="text-xs text-blue-500 font-medium hover:underline">
                        Request Full Amount
                    </button>
                </div>
                <div className="flex items-center gap-2 border border-gray-100 rounded-xl px-3 py-2.5">
                    <span className="text-sm text-gray-400">PKR</span>
                    <input
                        type="text"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="flex-1 text-sm font-semibold text-gray-800 outline-none bg-transparent"
                    />
                </div>
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm py-3 rounded-xl transition-colors">
                Submit Request
            </button>

            <p className="text-xs text-gray-400 text-center mt-3">
                Standard processing takes 1–3 business days. Expedited transfers may incur fees.
            </p>
        </div>
    );
}