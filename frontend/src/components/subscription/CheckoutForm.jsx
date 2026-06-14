import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { stripeCardStyle } from "../../data";
import {
  SuccessCheckIcon,
  ErrorInfoIcon,
  LoadingSpinner,
  ShieldLockIcon,
  CreditCardIcon,
} from "../../assets/svg";

const CheckoutForm = ({ planPrice, planName }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [succeeded, setSucceeded] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setProcessing(true);

    const cardElement = elements.getElement(CardElement);

    const { error: paymentError, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (paymentError) {
      setError(paymentError.message);
      setProcessing(false);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setTimeout(() => {
        setProcessing(false);
        setSucceeded(true);
        setError(null);
      }, 2000);
    }
  };

  if (succeeded) {
    return (
      <div className="text-center py-10">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <SuccessCheckIcon className="w-10 h-10 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Payment Successful!</h3>
        <p className="text-gray-500 mb-8">
          Welcome to the {planName}. Your subscription is now active.
        </p>
        <button
          onClick={() => (window.location.href = "/owner/dashboard")}
          className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
        >
          GO TO DASHBOARD
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <label className="block text-sm font-semibold text-gray-700 uppercase tracking-wider">
          Card Details
        </label>
        <div className="p-4 border border-gray-200 rounded-xl bg-gray-50 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100 transition-all">
          <CardElement options={stripeCardStyle} />
        </div>
      </div>

      {error && (
        <div className="p-4 bg-red-50 border border-red-100 text-red-600 rounded-xl text-sm font-medium flex items-center gap-3">
          <ErrorInfoIcon className="w-5 h-5" />
          {error}
        </div>
      )}

      <button
        disabled={processing || !stripe}
        type="submit"
        className={`w-full py-4 rounded-xl text-sm font-bold tracking-widest uppercase transition-all duration-300 relative overflow-hidden ${processing
          ? "bg-gray-100 text-gray-400 cursor-not-allowed"
          : "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-200"
          }`}
      >
        {processing ? (
          <div className="flex items-center justify-center gap-3">
            <LoadingSpinner className="h-5 w-5 text-gray-400" />
            PROCESSING...
          </div>
        ) : (
          `PAY $${planPrice} NOW`
        )}
      </button>

      <div className="flex items-center justify-center gap-4 text-gray-400 text-xs">
        <div className="flex items-center gap-1">
          <ShieldLockIcon className="w-4 h-4" />
          SECURE ENCRYPTED
        </div>
        <span>•</span>
        <div className="flex items-center gap-1">
          <CreditCardIcon className="w-4 h-4" />
          STRIPE POWERED
        </div>
      </div>
    </form>
  );
};

export default CheckoutForm;
