import React from "react";
import { PlusIcon } from "@heroicons/react/24/outline";

const EmptyStateCard = () => {
  return (
    <div className="bg-white rounded-2xl border-2 border-dashed border-gray-300 hover:border-blue-400 transition-colors cursor-pointer h-full min-h-[400px] flex flex-col items-center justify-center p-8 group">
      <div className="w-16 h-16 rounded-full bg-blue-50 group-hover:bg-blue-100 flex items-center justify-center mb-4 transition-colors">
        <PlusIcon className="w-8 h-8 text-blue-600" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">Curate New Space</h3>
      <p className="text-sm text-gray-500 text-center">
        Expand your architectural
        <br />
        portfolio
      </p>
    </div>
  );
};

export default EmptyStateCard;
