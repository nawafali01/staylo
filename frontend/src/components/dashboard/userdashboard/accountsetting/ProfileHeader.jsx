import { CameraIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import UpdateProfileModal from "../../../modal/userDashboard/UpdateProfileModal";

const ProfileHeader = ({
  email,
  phone,
  onUpdateClick,
  profileImg,
  onImageClick,
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col items-center text-center">
        <div
          className="relative mb-4 group cursor-pointer"
          onClick={onImageClick}
        >
          <img
            src={profileImg}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-blue-50 transition group-hover:opacity-90"
          />
          <div className="absolute bottom-1 right-1 bg-blue-600 p-2 rounded-full border-2 border-white text-white shadow-lg">
            <CameraIcon className="w-4 h-4" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Nawaf Ali</h2>
        {/* <span className="text-blue-600 font-semibold text-xs bg-blue-50 px-3 py-1 rounded-full mt-2 uppercase tracking-wider">
          2021F-MULBSIT-007
        </span> */}
        <p className="text-gray-500 text-sm mt-3">{email}</p>
      </div>
      <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-lg font-bold text-gray-800 uppercase tracking-tight">
            Personal Information
          </h3>
          <button
            onClick={onUpdateClick}
            className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all shadow-md shadow-purple-100"
          >
            <PencilSquareIcon className="w-4 h-4" /> Update Profile
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
          <div>
            <p className="text-[10px] font-black text-gray-400 uppercase">
              Name
            </p>
            <p className="text-gray-900 font-semibold mt-1">Ali</p>
          </div>
          <div>
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">
              CNIC
            </p>
            <p className="text-gray-900 font-semibold mt-1">34603-4568538-1</p>
          </div>
          <div>
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">
              Contact No.
            </p>
            <p className="text-gray-900 font-semibold mt-1">
              {phone || "0317-7193530"}
            </p>
          </div>
          <div>
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">
              Registration No.
            </p>
            <p className="text-gray-900 font-semibold mt-1 uppercase">
              4567-g456-87
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
