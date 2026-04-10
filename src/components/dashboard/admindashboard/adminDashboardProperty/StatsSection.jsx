import React from "react";
import { ArrowTrendingUpIcon } from "@heroicons/react/24/outline";
import { statsPropertyData } from "../../../../data";
import StatsCard from "./StatisticCard";

const StatsSection = () => {
  const getIconComponent = (iconName) => {
    switch (iconName) {
      case "TrendingUp":
        return <ArrowTrendingUpIcon className="w-6 h-6" />;
      default:
        return null;
    }
  };

  return (
    <div className="grid grid-cols-3 gap-6 mb-8">
      {statsPropertyData.map((stat) => (
        <StatsCard
          key={stat.id}
          icon={getIconComponent(stat.icon)}
          label={stat.label}
          value={stat.value}
          subtitle={stat.subtitle}
          variant={stat.variant}
        />
      ))}
    </div>
  );
};

export default StatsSection;
