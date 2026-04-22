import { useState } from "react";
import {
  userProfile,
  residentialAddress,
  genderOptions,
  nationalityOptions,
  phoneCountryCodes,
  unsavedChangesNotice,
} from "../../../../data";

import ProfilePhoto from "./ProfilePhoto";
import PrivacyBanner from "./PrivacyBanner";
import { InputField, SelectField } from "./FormFields";

export default function IndexProfileSettings() {
  const [profile, setProfile] = useState(userProfile);
  const [address, setAddress] = useState(residentialAddress);
  const [hasUnsaved, setHasUnsaved] = useState(true);

  const handleProfileChange = (field, value) => {
    setProfile({ ...profile, [field]: value });
    setHasUnsaved(true);
  };

  const handleAddressChange = (field, value) => {
    setAddress({ ...address, [field]: value });
    setHasUnsaved(true);
  };

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
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-100 text-amber-600 text-sm">
                !
              </span>
              <p className="text-sm text-amber-800 font-semibold">
                {unsavedChangesNotice}
              </p>
            </div>
            <button
              onClick={() => setHasUnsaved(false)}
              className="text-xs font-bold text-amber-600 uppercase tracking-wider hover:text-amber-800"
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
                <h2 className="text-base font-bold text-slate-800">
                  General Information
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                <InputField
                  label="Full Name"
                  value={profile.fullName}
                  onChange={(event) =>
                    handleProfileChange("fullName", event.target.value)
                  }
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
                      options={phoneCountryCodes.map((country) => ({
                        value: country.code,
                        label: `${country.flag} ${country.code}`,
                      }))}
                    />
                  </div>
                  <InputField
                    label="Phone Number"
                    value={profile.phone}
                    onChange={(event) =>
                      handleProfileChange("phone", event.target.value)
                    }
                  />
                </div>

                <InputField label="Alternative Phone" placeholder="Optional" />
                <InputField
                  label="Date of Birth"
                  type="date"
                  value={profile.dateOfBirth}
                  onChange={(event) =>
                    handleProfileChange("dateOfBirth", event.target.value)
                  }
                />
                <SelectField
                  label="Gender"
                  options={genderOptions}
                  value={profile.gender}
                />
                <SelectField
                  label="Nationality"
                  options={nationalityOptions}
                  value={profile.nationality}
                />
                <InputField
                  label="ID / Passport Number"
                  value={profile.idPassport}
                  onChange={(event) =>
                    handleProfileChange("idPassport", event.target.value)
                  }
                />
              </div>
            </section>

            <hr className="border-slate-100" />

            <section>
              <div className="flex items-center gap-2.5 mb-8">
                <span className="text-lg bg-blue-50 p-2 rounded-xl">📍</span>
                <h2 className="text-base font-bold text-slate-800">
                  Residential Address
                </h2>
              </div>

              <div className="space-y-6">
                <InputField
                  label="Address Line 1"
                  value={address.addressLine1}
                  onChange={(event) =>
                    handleAddressChange("addressLine1", event.target.value)
                  }
                />
                <InputField
                  label="Address Line 2 (Optional)"
                  placeholder="Suite, floor, etc."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                  <InputField
                    label="City"
                    value={address.city}
                    onChange={(event) =>
                      handleAddressChange("city", event.target.value)
                    }
                  />
                  <InputField
                    label="State / Province"
                    value={address.state}
                    onChange={(event) =>
                      handleAddressChange("state", event.target.value)
                    }
                  />
                  <SelectField
                    label="Country"
                    options={nationalityOptions}
                    value={address.country}
                  />
                  <InputField
                    label="Postal Code"
                    value={address.postalCode}
                    onChange={(event) =>
                      handleAddressChange("postalCode", event.target.value)
                    }
                  />
                </div>
              </div>
            </section>

            <div className="flex justify-end items-center gap-4 pt-4 border-t border-slate-50">
              <button className="px-6 py-2.5 text-sm font-bold text-slate-400 hover:text-slate-600 transition">
                Cancel
              </button>
              <button
                onClick={() => {
                  console.log("Saved Data:", { profile, address });
                  setHasUnsaved(false);
                }}
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
