import React, { useMemo } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { pricingPlans, STRIPE_PUBLIC_KEY } from "../../data";
import CheckoutForm from "./CheckoutForm";
import { SimpleCheckIcon } from "../../assets/svg";

// Initialize Stripe outside of component to avoid recreating it on every render
const stripePromise = loadStripe(STRIPE_PUBLIC_KEY);

const PaymentPage = () => {
  const { planId } = useParams();
  const [searchParams] = useSearchParams();
  const isAnnual = searchParams.get("billing") === "annual";

  const selectedPlan = useMemo(() => {
    return pricingPlans.find((plan) => plan.id === planId) || pricingPlans[1];
  }, [planId]);

  const price = isAnnual ? selectedPlan.annualPrice : selectedPlan.monthlyPrice;

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Order Summary */}
          <div className="w-full lg:w-5/12 space-y-8">
            <div>
              <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
                Complete your <span className="text-blue-600">subscription.</span>
              </h1>
              <p className="text-gray-500 text-lg leading-relaxed">
                Join our premium network of property owners and start scaling your portfolio today.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-gray-100/50">
              <div className="flex justify-between items-center mb-6">
                <span className="text-sm font-semibold text-blue-600 uppercase tracking-widest">
                  {selectedPlan.tier}
                </span>
                <span className="bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full">
                  {isAnnual ? "Annual Billing" : "Monthly Billing"}
                </span>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedPlan.name}</h2>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-extrabold text-gray-900">${price}</span>
                <span className="text-gray-400 font-medium">/ month</span>
              </div>

              <hr className="border-gray-50 mb-8" />

              <ul className="space-y-4">
                {selectedPlan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-600 font-medium">
                    <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <SimpleCheckIcon className="w-3 h-3 text-blue-600" strokeWidth={3} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              {isAnnual && (
                <div className="mt-8 p-4 bg-green-50 rounded-2xl border border-green-100 text-green-700 text-sm font-semibold text-center">
                  ✨ You're saving 20% with annual billing!
                </div>
              )}
            </div>

            <div className="flex items-center gap-6 px-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-300 tracking-tighter">STRUCT</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-300 tracking-tighter">URBANIST</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-300 tracking-tighter">SKYLINE</p>
              </div>
            </div>
          </div>

          {/* Checkout Form Container */}
          <div className="w-full lg:w-7/12">
            <div className="bg-white rounded-3xl p-8 lg:p-12 border border-gray-100 shadow-2xl shadow-gray-200/40 relative overflow-hidden">
              {/* Decorative Gradient */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -mr-32 -mt-32 opacity-50"></div>
              
              <div className="relative">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                  Payment Details
                  <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                </h3>
                
                <Elements stripe={stripePromise}>
                  <CheckoutForm planPrice={price} planName={selectedPlan.name} />
                </Elements>
              </div>
            </div>

            <p className="text-center text-gray-400 text-sm mt-8 px-10">
              By completing your subscription, you agree to Staylo's 
              <a href="#" className="text-blue-600 font-semibold hover:underline mx-1">Terms of Service</a> 
              and 
              <a href="#" className="text-blue-600 font-semibold hover:underline mx-1">Privacy Policy</a>.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
