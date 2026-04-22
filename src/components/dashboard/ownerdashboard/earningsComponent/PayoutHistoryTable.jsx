import {
    BuildingLibraryIcon,
    CurrencyDollarIcon,
    DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";
import { payoutHistory } from "../../../../data";

const methodIcons = {
    bank: BuildingLibraryIcon,
    paypal: CurrencyDollarIcon,
    jazzcash: DevicePhoneMobileIcon,
};

export default function PayoutHistoryTable() {
    const headers = ["TRANSACTION ID", "DATE", "METHOD", "AMOUNT", "STATUS"];

    return (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-800 text-sm">Payout History</h3>
                <button className="text-xs text-blue-500 font-medium hover:underline flex items-center gap-1">
                    View All →
                </button>
            </div>

            <table className="w-full">
                <thead>
                    <tr className="border-b border-gray-50">
                        {headers.map((header) => (
                            <th
                                key={header}
                                className="text-left text-xs font-medium text-gray-400 pb-3 pr-4 last:pr-0"
                            >
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {payoutHistory.map((payout) => {
                        const MethodIcon = methodIcons[payout.methodIcon];
                        return (
                            <tr key={payout.id} className="border-b border-gray-50 last:border-0">
                                <td className="py-4 pr-4">
                                    <span className="text-sm font-medium text-gray-700">{payout.id}</span>
                                </td>
                                <td className="py-4 pr-4">
                                    <span className="text-sm text-gray-500">{payout.date}</span>
                                </td>
                                <td className="py-4 pr-4">
                                    <div className="flex items-center gap-2">
                                        {MethodIcon && <MethodIcon className="w-4 h-4 text-gray-400" />}
                                        <span className="text-sm text-gray-600">{payout.method}</span>
                                    </div>
                                </td>
                                <td className="py-4 pr-4">
                                    <span className="text-sm font-semibold text-gray-800">{payout.amount}</span>
                                </td>
                                <td className="py-4">
                                    <span
                                        className={`text-xs font-semibold px-2.5 py-1 rounded-lg ${payout.statusColor}`}
                                    >
                                        {payout.status}
                                    </span>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
