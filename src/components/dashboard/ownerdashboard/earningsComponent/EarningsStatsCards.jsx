import {
  WalletIcon,
  ArrowTrendingUpIcon,
  ClockIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/outline";
import { earningsStats } from "../../../../data";

const EarningsCard = ({ stat, icon }) => (
  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex flex-col gap-2">
    <div className="flex items-center justify-between">
      <div className="p-2 bg-gray-50 rounded-xl">
        {icon}
      </div>
      <span className={`text-xs font-semibold px-2 py-1 rounded-lg ${stat.badgeColor}`}>
        {stat.badge}
      </span>
    </div>
    <p className="text-xs text-gray-400 mt-1">{stat.label}</p>
    <p className={`text-xl font-bold leading-tight ${stat.valueColor}`}>
      {stat.value}
    </p>
  </div>
);

export default function EarningsStatsCards() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <EarningsCard 
        stat={earningsStats[0]} 
        icon={<WalletIcon className="w-5 h-5 text-gray-500" />} 
      />
      <EarningsCard 
        stat={earningsStats[1]} 
        icon={<ArrowTrendingUpIcon className="w-5 h-5 text-gray-500" />} 
      />
      <EarningsCard 
        stat={earningsStats[2]} 
        icon={<ClockIcon className="w-5 h-5 text-gray-500" />} 
      />
      <EarningsCard 
        stat={earningsStats[3]} 
        icon={<CalendarDaysIcon className="w-5 h-5 text-gray-500" />} 
      />
    </div>
  );
}
