import SuccessModal from "./SuccessModal";
import { useReviewStep } from "../../../../utils/feature";
import ReviewBasicInfo from "./reviewStep/ReviewBasicInfo";
import ReviewPropertyDetails from "./reviewStep/ReviewPropertyDetails";
import ReviewPhotos from "./reviewStep/ReviewPhotos";
import ReviewTerms from "./reviewStep/ReviewTerms";
import ReviewFinancials from "./reviewStep/ReviewFinancials";

export default function ReviewStep({ data, onBack, onEdit }) {
  const { 
    agreed, 
    setAgreed, 
    submitted, 
    setSubmitted, 
    amenitiesList 
  } = useReviewStep(data);

  return (
    <>
      <div className="grid grid-cols-[1fr_280px] gap-6">
        {/* Left */}
        <div className="flex flex-col gap-5">
          <ReviewBasicInfo data={data} onEdit={onEdit} />
          
          <ReviewPropertyDetails 
            data={data} 
            amenitiesList={amenitiesList} 
            onEdit={onEdit} 
          />

          <ReviewPhotos photos={data.photos} onEdit={onEdit} />

          <ReviewTerms agreed={agreed} setAgreed={setAgreed} />

          {/* Footer Buttons */}
          <div className="flex justify-between pb-8">
            <button
              onClick={onBack}
              className="px-6 py-3 rounded-xl border-2 border-gray-200 text-sm font-bold text-gray-600 hover:bg-gray-50 transition-all"
            >
              ← Back
            </button>
            <div className="flex gap-3">
              <button className="px-5 py-3 rounded-xl border-2 border-gray-200 text-sm font-bold text-gray-600 hover:bg-gray-50 transition-all">
                Save as Draft
              </button>
              <button
                disabled={!agreed}
                onClick={() => agreed && setSubmitted(true)}
                className={`px-8 py-3 rounded-xl text-sm font-bold shadow-md transition-all
                  ${agreed ? "bg-blue-600 hover:bg-blue-700 text-white hover:shadow-lg" : "bg-gray-200 text-gray-400 cursor-not-allowed"}`}
              >
                Submit for Review
              </button>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-5">
          <ReviewFinancials data={data} onEdit={onEdit} />
        </div>
      </div>

      {submitted && <SuccessModal />}
    </>
  );
}
