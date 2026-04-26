import { useState } from "react";
import { stepBanners } from "../../../../data";
import StepProgress from "./StepProgress";
import AlertBanner from "./AlertBanner";
import BasicInfoStep from "./BasicInfoStep";
import DetailsStep from "./DetailsStep";
import PhotosStep from "./PhotosStep";
import PricingStep from "./PricingStep";
import ReviewStep from "./ReviewStep";

export default function AddPropertyFeature() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    listingCategory: "For Rent",
    propertyType: "Residential Apartment",
  });

  const banner = stepBanners[step];

  return (
    <div className="max-w-[860px] w-full">

      <div className="mb-5">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
          Add New Property
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Fill in the details to list your asset in the digital estate
          ecosystem.
        </p>
      </div>

      {banner && <AlertBanner type={banner.type} text={banner.text} />}

      <StepProgress currentStep={step} />

      {step === 1 && (
        <BasicInfoStep
          data={formData}
          onChange={setFormData}
          onNext={() => setStep(2)}
        />
      )}
      {step === 2 && (
        <DetailsStep
          data={formData}
          onChange={setFormData}
          onNext={() => setStep(3)}
          onBack={() => setStep(1)}
        />
      )}
      {step === 3 && (
        <PhotosStep
          data={formData}
          onChange={setFormData}
          onNext={() => setStep(4)}
          onBack={() => setStep(2)}
        />
      )}
      {step === 4 && (
        <PricingStep
          data={formData}
          onChange={setFormData}
          onNext={() => setStep(5)}
          onBack={() => setStep(3)}
        />
      )}
      {step === 5 && (
        <ReviewStep
          data={formData}
          onBack={() => setStep(4)}
          onEdit={(s) => setStep(s)}
        />
      )}
    </div>
  );
}
