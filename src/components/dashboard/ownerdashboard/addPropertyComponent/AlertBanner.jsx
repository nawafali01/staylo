import { WarningTriangleIcon, InfoExclamationIcon } from "../../../assets/svg";

export default function AlertBanner({ type = "info", text }) {
  const isWarning = type === "warning";

  return (
    <div
      className={`flex items-start gap-3 rounded-xl px-4 py-3 mb-6 border
      ${isWarning
          ? "bg-orange-50 border-orange-200"
          : "bg-orange-50 border-orange-200"
        }`}
    >
      {isWarning ? (
        <WarningTriangleIcon className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
      ) : (
        <InfoExclamationIcon className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
      )}
      <p className="text-sm text-orange-700 font-medium">{text}</p>
    </div>
  );
}
