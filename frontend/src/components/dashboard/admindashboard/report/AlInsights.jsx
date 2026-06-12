import bulbIcon from "../../../../assets/svg/bulb.svg";
import { aiInsightsData } from "../../../../data";

export default function AIInsights() {
  const d = aiInsightsData;

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col h-full">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
          <img
            src={bulbIcon}
            alt="AI Insights"
            className="w-5 h-5 text-blue-600"
          />
        </div>
        <h3 className="text-lg font-semibold text-gray-900">{d.heading}</h3>
      </div>

      <p className="text-sm text-gray-600 leading-relaxed mb-5">
        {d.body}{" "}
        <span className="font-semibold text-blue-600">{d.highlight}</span>{" "}
        {d.body2}{" "}
        <span className="font-semibold text-gray-900">{d.location}</span>{" "}
        {d.body3}
      </p>

      <div className="mt-auto flex items-center gap-4 rounded-lg overflow-hidden border border-gray-100">
        <img
          src={d.topPerformerImage}
          alt={d.topPerformerName}
          className="w-24 h-20 object-cover flex-shrink-0"
        />
        <div className="py-2 pr-3">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
            {d.topPerformerLabel}
          </p>
          <p className="text-base font-bold text-gray-900">
            {d.topPerformerName}
          </p>
          <p className="text-sm text-blue-600 font-medium mt-0.5">
            {d.topPerformerStat}
          </p>
        </div>
      </div>
    </div>
  );
}
