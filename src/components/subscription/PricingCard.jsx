import React from "react";
import { useNavigate } from "react-router-dom";
import { SimpleCheckIcon } from "../../assets/svg";

// PricingCard — single plan card
const PricingCard = ({ plan, isAnnual }) => {
  const navigate = useNavigate();
  const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;

  const handleSubscribe = () => {
    navigate(`/payment/${plan.id}?billing=${isAnnual ? "annual" : "monthly"}`);
  };

  return (
    <div className="relative flex flex-col">
      {/* Most Popular Badge */}
      {plan.isMostPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
          <span className="bg-blue-600 text-white text-xs font-semibold tracking-widest px-5 py-1.5 rounded-full uppercase">
            Most Popular
          </span>
        </div>
      )}

      <div
        className={`flex flex-col flex-1 rounded-2xl p-8 bg-white ${plan.isMostPopular
          ? "border-2 border-blue-600 shadow-lg"
          : "border border-gray-200"
          }`}
      >
        {/* Tier Label */}
        <p className="text-xs font-semibold tracking-widest text-blue-500 uppercase mb-2">
          {plan.tier}
        </p>

        {/* Plan Name */}
        <h2 className="text-3xl font-bold text-gray-900 mb-1">{plan.name}</h2>

        {/* Tagline / Save Badge */}
        <div className="mb-5 h-6">
          {plan.saveBadge && isAnnual ? (
            <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
              {plan.saveBadge}
            </span>
          ) : plan.tagline ? (
            <p className="text-sm text-gray-500">{plan.tagline}</p>
          ) : null}
        </div>

        {/* Price */}
        <div className="mb-2">
          <span className="text-5xl font-extrabold text-gray-900">
            ${price}
          </span>
          {price > 0 && (
            <span className="text-sm text-gray-400 ml-1">/ month</span>
          )}
          {price === 0 && (
            <span className="text-sm text-gray-400 ml-1">/ forever</span>
          )}
        </div>

        {/* Annual Billed Note */}
        {plan.annualBilled && isAnnual && (
          <p className="text-xs text-gray-400 tracking-widest mb-5">
            {plan.annualBilled}
          </p>
        )}

        {/* Divider */}
        <hr className="border-gray-100 my-5" />

        {/* Features List */}
        <ul className="flex flex-col gap-3 mb-8 flex-1">
          {plan.features.map((feature, index) => (
            <li
              key={index}
              className="flex items-center gap-3 text-gray-700 text-sm font-medium"
            >
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-600 flex-shrink-0">
                <SimpleCheckIcon className="w-3 h-3 text-white" strokeWidth={3} />
              </span>
              {feature}
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <button
          onClick={handleSubscribe}
          className={`w-full py-3 rounded-xl text-sm font-bold tracking-widest uppercase transition-all duration-200 ${plan.ctaVariant === "solid"
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "border border-gray-300 text-gray-800 hover:border-blue-600 hover:text-blue-600"
            }`}
        >
          {plan.ctaLabel}
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
