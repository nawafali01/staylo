import { IDENTITY_BADGE } from "../../data/index";

const AccountSettingsBadge = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm flex gap-4 items-start">
      <div className="w-11 h-11 rounded-full bg-blue-50 flex items-center justify-center border-2 border-blue-600 shrink-0">
        <span className="text-xl">✅</span>
      </div>

      <div>
        <p className="font-bold text-sm text-gray-900 mb-1">
          {IDENTITY_BADGE.title}
        </p>
        <p className="text-sm text-gray-500 leading-relaxed">
          {IDENTITY_BADGE.description}
        </p>
      </div>
    </div>
  );
};

export default AccountSettingsBadge;
