import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { pendingAlert } from "../../../../data";

export default function PayoutAlertBanner() {
  return (
    <div className="flex items-center gap-3 bg-orange-50 border border-orange-200 rounded-xl px-4 py-3 mb-6">
      <InformationCircleIcon className="w-5 h-5 text-orange-500 shrink-0" />
      <p className="text-sm text-orange-800">{pendingAlert.message}</p>
    </div>
  );
}
