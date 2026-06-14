import { privacyNotice } from "../../../../data";
import { PrivacyLockIcon } from "../../../../assets/svg";

const PrivacyBanner = () => (
  <footer className="mt-6 p-4 bg-white border border-slate-100 rounded-2xl flex flex-col sm:flex-row items-center justify-between shadow-sm gap-4">
    <div className="flex items-center gap-3">
      <div className="p-2.5 bg-blue-50 rounded-xl text-blue-500 shrink-0">
        <PrivacyLockIcon className="w-5 h-5" />
      </div>
      <div>
        <p className="text-xs font-bold text-slate-700">
          Data Protection Notice
        </p>
        <p className="text-[11px] text-slate-400 leading-tight">
          {privacyNotice.text}
        </p>
      </div>
    </div>
    <a
      href={privacyNotice.policyUrl}
      className="text-xs font-bold text-slate-600 border border-slate-200 px-5 py-2.5 rounded-xl hover:bg-slate-50 transition shrink-0"
    >
      {privacyNotice.buttonLabel}
    </a>
  </footer>
);

export default PrivacyBanner;
