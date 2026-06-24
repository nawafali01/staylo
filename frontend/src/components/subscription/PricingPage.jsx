import React, { useState } from "react";
import PricingHero from "./PricingHero";
import PricingCard from "./PricingCard";
import { pricingPlans, trustedBrands, trustedLabel } from "../../data";

const PricingPage = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <main className="flex-1 max-w-6xl mx-auto w-full px-6 py-20">
        <PricingHero
          isAnnual={isAnnual}
          onToggle={() => setIsAnnual((prev) => !prev)}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} isAnnual={isAnnual} />
          ))}
        </div>

        <div className="mt-24 text-center">
          <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-8">
            {trustedLabel}
          </p>
          <div className="flex flex-wrap justify-center gap-12">
            {trustedBrands.map((brand) => (
              <span
                key={brand}
                className="text-xl font-bold text-gray-300 tracking-widest"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default PricingPage;
