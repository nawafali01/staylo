import { useState } from "react";
import SuccessModal from "./SuccessModal";
import { 
  SimpleCheckIcon, 
  InfoExclamationIcon, 
  EditIcon 
} from "../../../../assets/svg";

export default function ReviewStep({ data, onBack, onEdit }) {
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const amenitiesList = Object.entries(data.amenities || {})
    .filter(([, value]) => value)
    .map(([key]) => key);

  const infraList = Object.entries(data.infrastructure || {})
    .filter(([, value]) => value)
    .map(([key]) => key);

  return (
    <>
      <div className="grid grid-cols-[1fr_280px] gap-6">
        {/* Left */}
        <div className="flex flex-col gap-5">
          {/* Basic Info Card */}
          <ReviewCard
            title="Basic Info"
            subtitle="Essential property identity details"
            onEdit={() => onEdit(1)}
          >
            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              <InfoField label="Listing Name" value={data.title || "—"} big />
              <InfoField
                label="Property Type"
                value={data.propertyType || "—"}
                big
              />
              <div className="col-span-2">
                <InfoField
                  label="Address"
                  value={
                    [data.streetAddress, data.city, data.province]
                      .filter(Boolean)
                      .join(", ") || "—"
                  }
                />
              </div>
            </div>
          </ReviewCard>

          {/* Property Details Card */}
          <ReviewCard
            title="Property Details"
            subtitle="Space, layout, and amenities"
            onEdit={() => onEdit(2)}
          >
            <div className="grid grid-cols-4 gap-3 mb-5">
              {[
                { icon: "🛏️", label: "Bedrooms", value: data.bedrooms || "—" },
                {
                  icon: "🚿",
                  label: "Bathrooms",
                  value: data.bathrooms || "—",
                },
                {
                  icon: "📐",
                  label: "Total Area",
                  value: data.propertySize ? `${data.propertySize} sqft` : "—",
                },
                {
                  icon: "🛋️",
                  label: "Furnishing",
                  value: data.furnishing
                    ? data.furnishing.charAt(0).toUpperCase() +
                      data.furnishing.slice(1) +
                      " Furnished"
                    : "—",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="border border-gray-200 rounded-xl p-3 bg-gray-50"
                >
                  <div className="text-lg mb-1">{item.icon}</div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-0.5">
                    {item.label}
                  </p>
                  <p className="text-sm font-bold text-gray-800">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
            {amenitiesList.length > 0 && (
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
                  Key Amenities
                </p>
                <div className="flex flex-wrap gap-2">
                  {amenitiesList.map((amenity) => (
                    <span
                      key={amenity}
                      className="text-xs font-medium text-gray-600 bg-gray-100 border border-gray-200 px-3 py-1 rounded-full capitalize"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </ReviewCard>

          {/* Photos preview */}
          {(data.photos || []).length > 0 && (
            <ReviewCard
              title="Photos"
              subtitle="Property media"
              onEdit={() => onEdit(3)}
            >
              <div className="grid grid-cols-5 gap-2">
                {(data.photos || []).slice(0, 4).map((photo, index) => (
                  <div
                    key={photo.id}
                    className={`relative rounded-xl overflow-hidden ${index === 0 ? "col-span-2 row-span-2" : ""}`}
                    style={{ aspectRatio: "1" }}
                  >
                    <img
                      src={photo.url}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                    {index === 0 && (
                      <span className="absolute top-2 left-2 text-[9px] font-bold bg-blue-600 text-white px-2 py-0.5 rounded-md">
                        COVER PHOTO
                      </span>
                    )}
                  </div>
                ))}
                {(data.photos || []).length > 4 && (
                  <div
                    className="relative rounded-xl overflow-hidden bg-gray-900 flex items-center justify-center"
                    style={{ aspectRatio: "1" }}
                  >
                    <span className="text-white font-bold text-sm">
                      +{data.photos.length - 4} More
                    </span>
                  </div>
                )}
              </div>
            </ReviewCard>
          )}

          {/* Terms */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
            <label className="flex items-start gap-3 cursor-pointer mb-4">
              <div
                onClick={() => setAgreed(!agreed)}
                className={`w-5 h-5 rounded border-2 mt-0.5 flex items-center justify-center flex-shrink-0 transition-all
                  ${agreed ? "bg-blue-600 border-blue-600" : "border-gray-300 bg-white"}`}
              >
                {agreed && (
                  <SimpleCheckIcon className="w-3 h-3 text-white stroke-[3]" />
                )}
              </div>
              <div>
                <p className="text-sm font-bold text-gray-800 mb-1">
                  I agree to the Terms & Conditions
                </p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  By submitting this listing, you confirm that all information
                  provided is accurate and that you have the legal right to list
                  this property. Your listing will be reviewed within 24–48
                  hours before going live.
                </p>
              </div>
            </label>
            <div className="flex items-start gap-2 bg-orange-50 border border-orange-200 rounded-xl px-4 py-3">
              <InfoExclamationIcon className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-orange-700 font-medium">
                Your property will be submitted for admin review. This typically
                takes 24-48 hours.
              </p>
            </div>
          </div>

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
          {/* Financials */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-base font-bold text-gray-900">
                  Financials
                </h3>
                <p className="text-xs text-gray-400">
                  Rent and deposit details
                </p>
              </div>
              <button
                onClick={() => onEdit(4)}
                className="flex items-center gap-1 text-blue-600 text-xs font-semibold hover:text-blue-700"
              >
                <EditIcon className="w-3.5 h-3.5" />
                Edit
              </button>
            </div>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
              Monthly Rent
            </p>
            <p className="text-3xl font-bold text-gray-900 mb-1">
              {data.baseAmount
                ? `$${Number(data.baseAmount).toLocaleString()}`
                : "—"}
            </p>
            <p className="text-xs text-gray-400 mb-4">USD/mo</p>
            {data.securityDeposit && (
              <div className="flex justify-between py-2 border-t border-gray-100">
                <span className="text-sm text-gray-600">Security Deposit</span>
                <span className="text-sm font-bold text-gray-900">
                  ${Number(data.securityDeposit).toLocaleString()}
                </span>
              </div>
            )}
            <div className="flex justify-between py-2 border-t border-gray-100">
              <span className="text-sm text-gray-600">Utilities</span>
              <span className="text-sm font-bold text-gray-900">
                {Object.values(data.utilities || {}).some(Boolean)
                  ? "Included"
                  : "Not Included"}
              </span>
            </div>

            {/* Rules */}
            {Object.entries(data.rules || {}).some(([, value]) => value) && (
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">
                  Property Rules
                </p>
                <ul className="flex flex-col gap-2">
                  {data.rules?.petsAllowed && (
                    <li className="text-xs text-gray-600 flex items-center gap-2">
                      <span>🐾</span> Small pets welcome
                    </li>
                  )}
                  {!data.rules?.smokingAllowed && (
                    <li className="text-xs text-gray-600 flex items-center gap-2">
                      <span>🚭</span> No Smoking allowed
                    </li>
                  )}
                  {data.rules?.childrenWelcome && (
                    <li className="text-xs text-gray-600 flex items-center gap-2">
                      <span>👨‍👩‍👧</span> Children welcome
                    </li>
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {submitted && <SuccessModal />}
    </>
  );
}

function ReviewCard({ title, subtitle, onEdit, children }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
      <div className="flex items-start justify-between mb-5">
        <div>
          <h3 className="text-base font-bold text-gray-900">{title}</h3>
          <p className="text-xs text-gray-400">{subtitle}</p>
        </div>
        <button
          onClick={onEdit}
          className="flex items-center gap-1 text-blue-600 text-xs font-semibold hover:text-blue-700 transition-colors"
        >
          <EditIcon className="w-3.5 h-3.5" />
          Edit
        </button>
      </div>
      {children}
    </div>
  );
}

function InfoField({ label, value, big }) {
  return (
    <div>
      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
        {label}
      </p>
      <p className={`font-bold text-gray-900 ${big ? "text-base" : "text-sm"}`}>
        {value}
      </p>
    </div>
  );
}
