import { weeklyIntensity, weeklyStats } from "../../../../data";

export default function WeeklyIntensityCard() {
  const maxVal = Math.max(...weeklyIntensity.map((dayData) => dayData.value));

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
      <h3 className="font-semibold text-gray-800 text-sm mb-4">
        Weekly Intensity
      </h3>

      <div className="flex items-end gap-2 h-16 mb-3">
        {weeklyIntensity.map((dayData) => (
          <div key={dayData.day} className="flex-1 flex flex-col items-center gap-1">
            <div
              className={`w-full rounded-t-md transition-all ${dayData.day === "THU" ? "bg-blue-600" : "bg-blue-100"
                }`}
              style={{ height: `${(dayData.value / maxVal) * 56}px` }}
            />
          </div>
        ))}
      </div>
      <div className="flex gap-2 mb-4">
        {weeklyIntensity.map((dayData) => (
          <div key={dayData.day} className="flex-1 text-center">
            <span
              className={`text-xs font-medium ${dayData.day === "THU" ? "text-blue-600" : "text-gray-400"
                }`}
            >
              {dayData.day}
            </span>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-50 pt-3 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-400">Highest Day</span>
          <span className="text-xs font-semibold text-orange-500">
            {weeklyStats.highestDay}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-400">Daily Average</span>
          <span className="text-xs font-semibold text-gray-700">
            {weeklyStats.dailyAverage}
          </span>
        </div>
      </div>
    </div>
  );
}
