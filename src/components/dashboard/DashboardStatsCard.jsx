import { CalendarIcon, HomeIcon, HeartIcon, MapPinIcon } from "@heroicons/react/24/outline";
const iconMap = {
  calendar: CalendarIcon,
  home: HomeIcon,
  heart: HeartIcon,
  mappin: MapPinIcon,
};
export default function DashboardStatsCard({ label,badge, value, icon }) {
  const Icon = iconMap[icon];
  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex flex-col gap-2">
        <div className="flex items-center justify-between">
            <Icon className="w-6 h-6 text-blue-600" />
            {badge && (
          <span className="text-xs font-semibold bg-blue-50 text-blue-600 px-2 py-1 rounded-full">
            {badge}
          </span>
        )}

        </div>
        <p className="text-3xl font-bold text-slate-900">{value}</p>
      <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase">{label}</p>
    </div>
  );
}