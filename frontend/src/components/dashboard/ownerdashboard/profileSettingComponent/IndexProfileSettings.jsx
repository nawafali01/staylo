import {
  genderOptions,
  nationalityOptions,
  phoneCountryCodes,
  unsavedChangesNotice,
} from "../../../../data";

import ProfilePhoto from "./ProfilePhoto";
import PrivacyBanner from "./PrivacyBanner";
import { InputField, SelectField } from "./FormFields";
import { useProfileSettings } from "../../../../utils/feature";

export default function IndexProfileSettings() {
  const {
    profile,
    address,
    hasUnsaved,
    handleProfileChange,
    handleAddressChange,
    saveChanges,
    discardChanges,
  } = useProfileSettings();

  return (
    <div className="min-h-screen bg-[#F8FAFC] p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        <header className="mb-8">
          <h1 className="text-2xl font-extrabold text-slate-800 tracking-tight">
            Profile Settings
          </h1>
          <p className="text-sm text-slate-500 mt-1 font-medium">
            Manage your account information and preferences
          </p>
        </header>

        {hasUnsaved && (
          <div className="mb-6 flex items-center justify-between bg-amber-50 border border-amber-100 rounded-2xl px-5 py-3.5 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-100 text-amber-600 text-sm font-bold">
                !
              </span>
              <p className="text-sm text-amber-800 font-semibold">
                {unsavedChangesNotice}
              </p>
            </div>
            <button
              onClick={discardChanges}
              className="text-xs font-bold text-amber-600 uppercase tracking-wider hover:text-amber-800 transition"
            >
              Discard
            </button>
          </div>
        )}

        <div className="bg-white rounded-[24px] shadow-sm border border-slate-100 overflow-hidden grid grid-cols-1 md:grid-cols-[280px_1fr]">
          <ProfilePhoto profile={profile} />

          <div className="p-6 md:p-10 space-y-12">
            <section>
              <div className="flex items-center gap-2.5 mb-8">
                <span className="text-lg bg-blue-50 p-2 rounded-xl">👤</span>
                <h2 className="text-base font-bold text-slate-800">General Information</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                <InputField
                  label="Full Name"
                  value={profile.fullName}
                  onChange={(e) => handleProfileChange("fullName", e.target.value)}
                />
                <InputField
                  label="Email Address"
                  type="email"
                  value={profile.email}
                  className="bg-slate-50 text-slate-400"
                  disabled
                />

                <div className="flex gap-3">
                  <div className="w-32 shrink-0">
                    <SelectField
                      label="Code"
                      options={phoneCountryCodes.map((c) => ({
                        value: c.code,
                        label: `${c.flag} ${c.code}`,
                      }))}
                    />
                  </div>
                  <InputField
                    label="Phone Number"
                    value={profile.phone}
                    onChange={(e) => handleProfileChange("phone", e.target.value)}
                  />
                </div>

                <InputField label="Alternative Phone" placeholder="Optional" />

                <InputField
                  label="Date of Birth"
                  type="date"
                  value={profile.dateOfBirth}
                  onChange={(e) => handleProfileChange("dateOfBirth", e.target.value)}
                />

                <SelectField
                  label="Gender"
                  options={genderOptions}
                  value={profile.gender}
                  onChange={(e) => handleProfileChange("gender", e.target.value)}
                />

                <SelectField
                  label="Nationality"
                  options={nationalityOptions}
                  value={profile.nationality}
                  onChange={(e) => handleProfileChange("nationality", e.target.value)}
                />

                <InputField
                  label="ID / Passport Number"
                  value={profile.idPassport}
                  onChange={(e) => handleProfileChange("idPassport", e.target.value)}
                />
              </div>
            </section>

            <hr className="border-slate-100" />

            <section>
              <div className="flex items-center gap-2.5 mb-8">
                <span className="text-lg bg-blue-50 p-2 rounded-xl">📍</span>
                <h2 className="text-base font-bold text-slate-800">Residential Address</h2>
              </div>

              <div className="space-y-6">
                <InputField
                  label="Address Line 1"
                  value={address.addressLine1}
                  onChange={(e) => handleAddressChange("addressLine1", e.target.value)}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                  <InputField
                    label="City"
                    value={address.city}
                    onChange={(e) => handleAddressChange("city", e.target.value)}
                  />
                  <InputField
                    label="State / Province"
                    value={address.state}
                    onChange={(e) => handleAddressChange("state", e.target.value)}
                  />
                  <SelectField
                    label="Country"
                    options={nationalityOptions}
                    value={address.country}
                    onChange={(e) => handleAddressChange("country", e.target.value)}
                  />
                  <InputField
                    label="Postal Code"
                    value={address.postalCode}
                    onChange={(e) => handleAddressChange("postalCode", e.target.value)}
                  />
                </div>
              </div>
            </section>

            <div className="flex justify-end items-center gap-4 pt-4 border-t border-slate-50">
              <button
                onClick={discardChanges}
                className="px-6 py-2.5 text-sm font-bold text-slate-400 hover:text-slate-600 transition"
              >
                Cancel
              </button>
              <button
                onClick={saveChanges}
                className="px-10 py-3 bg-blue-600 text-white rounded-xl text-sm font-bold shadow-xl shadow-blue-100 hover:bg-blue-700 active:scale-[0.98] transition-all"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>

        <PrivacyBanner />
      </div>
    </div>
  );
}