import { steps } from "../../../../data";
import { SimpleCheckIcon } from "../../../../assets/svg";

export default function StepProgress({ currentStep }) {
  return (
    <div className="flex items-center w-full mb-8">
      {steps.map((step, index) => {
        const isActive = step.id === currentStep;
        const isDone = step.id < currentStep;

        return (
          <div
            key={step.id}
            className="flex items-center flex-1 last:flex-none"
          >
            <div className="flex flex-col items-center gap-1.5">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all
                ${isActive
                    ? "bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-200"
                    : isDone
                      ? "bg-blue-600 border-blue-600 text-white"
                      : "bg-white border-gray-300 text-gray-400"
                  }`}
              >
                {isDone ? (
                  <SimpleCheckIcon className="w-4 h-4 stroke-[2.5]" />
                ) : (
                  step.id
                )}
              </div>
              <span
                className={`text-[10px] font-bold tracking-wider whitespace-nowrap
                ${isActive ? "text-blue-600" : isDone ? "text-blue-500" : "text-gray-400"}`}
              >
                {step.label}
              </span>
            </div>

            {index < steps.length - 1 && (
              <div className="flex-1 h-0.5 mx-2 mb-5">
                <div
                  className={`h-full rounded-full transition-all duration-500
                  ${isDone ? "bg-blue-500" : "bg-gray-200"}`}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
