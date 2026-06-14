import React from "react";
import { pricingHero, billingToggle } from "../../data";

const PricingHero = ({ isAnnual, onToggle }) => {
  return (
    <div className="text-center mb-14">
      <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
        {pricingHero.heading}{" "}
        <span className="text-blue-600">{pricingHero.headingHighlight}</span>
      </h1>

      <p className="text-gray-500 text-base max-w-xl mx-auto leading-relaxed mb-10">
        {pricingHero.subheading}
      </p>

      <div className="flex items-center justify-center gap-4">
        <span
          className={`text-sm font-medium ${!isAnnual ? "text-gray-900" : "text-gray-400"
            }`}
        >
          {billingToggle.monthly}
        </span>

        <button
          onClick={onToggle}
          className={`relative w-12 h-6 rounded-full transition-colors duration-300 focus:outline-none ${isAnnual ? "bg-blue-600" : "bg-gray-300"
            }`}
        >
          <span
            className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-300 ${isAnnual ? "translate-x-6" : "translate-x-0"
              }`}
          />
        </button>

        <span
          className={`text-sm font-medium ${isAnnual ? "text-gray-900" : "text-gray-400"
            }`}
        >
          {billingToggle.annually}
        </span>
        <span className="bg-orange-100 text-orange-600 text-xs font-bold px-3 py-1 rounded-full">
          {billingToggle.saveBadge}
        </span>
      </div>
    </div>
  );
};

export default PricingHero;
