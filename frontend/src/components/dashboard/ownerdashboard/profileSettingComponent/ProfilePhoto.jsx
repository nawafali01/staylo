import { Label } from "./FormFields";
import { EditIcon } from "../../../../assets/svg";

const ProfilePhoto = ({ profile }) => {
  return (
    <div className="bg-white p-8 border-r border-slate-50 flex flex-col items-center border-b md:border-b-0">
      <div className="relative mb-4">
        <div className="w-28 h-28 rounded-full overflow-hidden ring-4 ring-blue-50 shadow-inner bg-slate-100">
          {profile.avatar ? (
            <img
              src={profile.avatar}
              alt={profile.fullName}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-400 to-indigo-500 text-white text-2xl font-bold">
              {profile.fullName.charAt(0)}
            </div>
          )}
        </div>

        <button className="absolute bottom-1 right-1 bg-blue-600 p-2 rounded-full border-2 border-white shadow-sm text-white hover:bg-blue-700 transition active:scale-90">
          <EditIcon className="w-3.5 h-3.5" />
        </button>
      </div>

      <h3 className="font-bold text-slate-800 text-center text-lg leading-tight">
        {profile.fullName}
      </h3>
      <p className="text-xs text-slate-400 mb-6 font-medium">{profile.role}</p>

      <button className="w-full py-2.5 bg-blue-600 text-white rounded-xl text-xs font-bold shadow-lg shadow-blue-100 hover:bg-blue-700 transition active:scale-[0.98] mb-3">
        Change Photo
      </button>
      <button className="text-xs font-bold text-red-400 hover:text-red-500 transition-colors">
        Remove Photo
      </button>

      <div className="w-full mt-8">
        <Label>Account Status</Label>
        <div className="flex items-center gap-2 bg-green-50 text-green-700 px-3 py-2.5 rounded-xl border border-green-100">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[11px] font-bold uppercase tracking-wider">
            {profile.accountStatus}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfilePhoto;
