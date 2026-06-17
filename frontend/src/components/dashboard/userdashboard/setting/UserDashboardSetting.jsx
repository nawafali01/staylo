import { useState, useRef } from "react";
import { toast } from "react-hot-toast";
import {
  LockClosedIcon,
  Cog6ToothIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import AccountSettingsCard from "./AccountSettingsCard";
import FormInput from "./AccountSettingsInput";
import AccountSettingsRow from "./AccountSettingsRow";
import AccountSettingsToggle from "./AccountSettingsToggle";
import AccountSettingsSecurity from "./AccountSettingsSecurity";
import AccountSettingsBadge from "./AccountSettingsBadge";
import ProfileHeader from "./ProfileHeader";
import UpdateProfileModal from "../../../modal/userDashboard/UpdateProfileModal";
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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profileImg, setProfileImg] = useState(
    "https://via.placeholder.com/150",
  );
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setProfileImg(URL.createObjectURL(file));
  };

  return (
    <div className="max-w-7xl mx-auto">
      <input
        type="file"
        hidden
        ref={fileInputRef}
        onChange={handleImageChange}
        accept="image/*"
      />

      <ProfileHeader
        fullName={fullName}
        email={email}
        phone={phone}
        profileImg={profileImg}
        onUpdateClick={() => setIsModalOpen(true)}
        onImageClick={() => fileInputRef.current.click()}
      />

      <div className="grid grid-cols-1 xl:grid-cols-[1fr_380px] gap-6">
        <div className="flex flex-col gap-6">
          <AccountSettingsCard>
            <div className="flex items-center gap-2.5 mb-6">
              <LockClosedIcon className="w-5 h-5 text-blue-600" />
              <h2 className="text-lg font-bold text-gray-900 uppercase">
                Update Password
              </h2>
            </div>
            <div className="space-y-4 mb-7">
              <FormInput
                label="OLD PASSWORD"
                type="password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormInput
                  label="NEW PASSWORD"
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                <FormInput
                  label="CONFIRM PASSWORD"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>
            <button className="bg-blue-600 text-white font-semibold px-6 py-2.5 rounded-lg text-sm hover:bg-blue-700 transition">
              Save Password
            </button>
          </AccountSettingsCard>
          <AccountSettingsSecurity onEnable={() => toast.success("2FA started")} />
        </div>

        <div className="flex flex-col gap-6">
          <AccountSettingsCard className="p-7">
            <div className="flex items-center gap-2.5 mb-6">
              <Cog6ToothIcon className="w-5 h-5 text-blue-600" />
              <h2 className="text-lg font-bold text-gray-900">
                {settingsData.preferencesCardTitle}
              </h2>
            </div>
            <p className="text-[11px] font-semibold text-gray-400 tracking-wider mb-3 uppercase">
              Notifications
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

            <p className="text-[11px] font-semibold text-gray-400 tracking-wider mb-3 uppercase">
              Privacy
            </p>
            <div className="border border-gray-200 rounded-xl p-4 flex items-center justify-between mb-6">
              <div>
                <p className="text-sm font-semibold text-gray-900">
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

            <p className="text-[11px] font-semibold text-gray-400 tracking-wider mb-3 uppercase">
              Language & Region
            </p>
            <div className="relative mb-6">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-full px-3.5 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-900 outline-none appearance-none cursor-pointer bg-white"
              >
                {languageOptions.map((lang) => (
                  <option key={lang} value={lang}>
                    {lang}
                  </option>
                ))}
              </select>
              <ChevronDownIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>
          </AccountSettingsCard>
          <AccountSettingsBadge />
        </div>
      </div>

      <UpdateProfileModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        fullName={fullName}
        setFullName={setFullName}
        phone={phone}
        setPhone={setPhone}
        email={email}
        setEmail={setEmail}
        profileImg={profileImg}
        onImageClick={() => fileInputRef.current.click()}
      />
    </div>
  );
};

export default UserDashboardSetting;
