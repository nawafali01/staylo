import { mediaChecklist, proTips } from "../../../../data";
import { SimpleCheckIcon } from "../../../../assets/svg";

export default function TipsAndChecklist({ checklistDone }) {
  return (
    <div className="w-64 flex-shrink-0 flex flex-col gap-4">
      <div className="bg-blue-600 rounded-2xl p-5">
        <h3 className="text-white font-bold text-base mb-4">
          Pro Tips for Photography
        </h3>
        <ul className="flex flex-col gap-3">
          {proTips.map((tip, index) => (
            <li key={index} className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-300 mt-1.5 flex-shrink-0" />
              <p className="text-blue-100 text-xs leading-relaxed">{tip}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
        <h3 className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-4">
          Media Checklist
        </h3>
        <ul className="flex flex-col gap-3">
          {mediaChecklist.map((item) => {
            const done = checklistDone[item.key];
            return (
              <li
                key={item.key}
                className="flex items-center justify-between"
              >
                <span
                  className={`text-sm ${done ? "text-gray-800 font-medium" : "text-gray-400"}`}
                >
                  {item.label}
                </span>
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center
                  ${done ? "bg-green-500 border-green-500" : "border-gray-300"}`}
                >
                  {done && (
                    <SimpleCheckIcon className="w-3 h-3 text-white stroke-[3]" />
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
