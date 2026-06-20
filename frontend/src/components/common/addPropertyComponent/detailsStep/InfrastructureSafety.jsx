import { infrastructureItems } from "../../../../data";

export default function InfrastructureSafety({ data, toggleInfra }) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-5">
        <div className="w-1 h-5 bg-blue-600 rounded-full" />
        <h3 className="text-base font-bold text-gray-900">
          Infrastructure & Safety
        </h3>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {infrastructureItems.map((item) => {
          const on = data.infrastructure?.[item.key];
          return (
            <div
              key={item.key}
              className="flex items-center justify-between px-4 py-3 rounded-xl border border-gray-200 bg-gray-50"
            >
              <span className="text-sm text-gray-700 font-medium">
                {item.label}
              </span>

              <button
                type="button"
                onClick={() => toggleInfra(item.key)}
                className={`relative w-11 h-6 rounded-full transition-colors flex-shrink-0
                  ${on ? "bg-blue-600" : "bg-gray-300"}`}
              >
                <span
                  className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform
                  ${on ? "translate-x-5" : "translate-x-0"}`}
                />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
