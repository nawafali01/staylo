import AccountSettingsCard from "./AccountSettingsCard";
import AccountSettingsInput from "./AccountSettingsInput";
import AccountSettingsRow from "./AccountSettingsRow";
import AccountSettingsToggle from "./AccountSettingsToggle";
import AccountSettingsSecurity from "./AccountSettingsSecurity";
import AccountSettingsBadge from "./AccountSettingsBadge";
import {
  languageOptions,
  notificationItems,
  settingsData,
} from "../../../../data/index";
import { useUserDashboardSetting } from "../../../../utils/feature";

const UserDashboardSetting = () => {
  const {
    fullName,
    setFullName,
    phone,
    setPhone,
    email,
    setEmail,
    notifications,
    handleNotifChange,
    profileVisible,
    setProfileVisible,
    language,
    setLanguage,
  } = useUserDashboardSetting();

  return (
    <>
      <div className="mb-7">
        <h1 className="text-2xl font-bold text-gray-900">
          {settingsData.pageTitle}
        </h1>
        <p className="mt-1.5 text-sm text-gray-500">{settingsData.pageDesc}</p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[1fr_380px] gap-6">
        <div className="flex flex-col gap-6">
          <AccountSettingsCard>
            <div className="flex items-center gap-2.5 mb-6">
              <span className="text-xl">👥</span>
              <h2 className="text-lg font-bold text-gray-900">
                {settingsData.accountCardTitle}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <AccountSettingsInput
                label="FULL NAME"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
              <AccountSettingsInput
                label="PHONE NUMBER"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                optional
              />
            </div>

            <div className="mb-4">
              <AccountSettingsInput
                label="EMAIL ADDRESS"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-7">
              <AccountSettingsInput
                label="PASSWORD"
                type="password"
                value="••••••••••••"
                readOnly
                actionLabel="Change"
                onAction={() => alert("Change password clicked")}
              />
            </div>

            <div className="flex items-center gap-3">
              <button className="bg-blue-600 text-white font-semibold px-5 py-2.5 rounded-lg text-sm hover:bg-blue-700 transition">
                Save Changes
              </button>
              <button className="text-gray-700 font-medium text-sm hover:underline transition">
                Cancel
              </button>
            </div>
          </AccountSettingsCard>

          <AccountSettingsSecurity
            onEnable={() => alert("2FA setup started")}
          />
        </div>

        <div className="flex flex-col gap-6">
          <AccountSettingsCard className="p-7">
            <div className="flex items-center gap-2.5 mb-6">
              <span className="text-lg">⚙️</span>
              <h2 className="text-lg font-bold text-gray-900">
                {settingsData.preferencesCardTitle}
              </h2>
            </div>

            <p className="text-[11px] font-semibold text-gray-400 tracking-wider mb-3">
              NOTIFICATIONS
            </p>
            <div className="flex flex-col gap-4 mb-6">
              {notificationItems.map((item) => (
                <AccountSettingsRow
                  key={item.key}
                  Icon={item.icon}
                  label={item.label}
                  value={notifications[item.key]}
                  onChange={handleNotifChange(item.key)}
                />
              ))}
            </div>

            <p className="text-[11px] font-semibold text-gray-400 tracking-wider mb-3">
              PRIVACY
            </p>
            <div className="border border-gray-200 rounded-xl p-4 flex items-center justify-between mb-6">
              <div>
                <p className="text-sm font-semibold text-gray-900 m-0">
                  {settingsData.visibilityTitle}
                </p>
                <p className="text-xs text-gray-500 mt-0.5">
                  {settingsData.visibilityDesc}
                </p>
              </div>
              <AccountSettingsToggle
                value={profileVisible}
                onChange={setProfileVisible}
              />
            </div>

            <p className="text-[11px] font-semibold text-gray-400 tracking-wider mb-3">
              LANGUAGE & REGION
            </p>
            <div className="relative">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-full px-3.5 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-900 outline-none appearance-none cursor-pointer bg-white"
              >
                {languageOptions.map((language) => (
                  <option key={language}>{language}</option>
                ))}
              </select>
              <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-xs text-gray-400">
                ▼
              </span>
            </div>
          </AccountSettingsCard>

          <AccountSettingsBadge />
        </div>
      </div>
    </>
  );
};

export default UserDashboardSetting;
