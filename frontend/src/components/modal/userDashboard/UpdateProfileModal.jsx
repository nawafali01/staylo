import { XMarkIcon, CameraIcon } from "@heroicons/react/24/outline";
import FormInput from "../../dashboard/userdashboard/setting/AccountSettingsInput";

const UpdateProfileModal = ({
  isOpen,
  onClose,
  fullName,
  setFullName,
  phone,
  setPhone,
  email,
  setEmail,
  profileImg,
  onImageClick,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl w-full max-w-xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200"
      >
        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-900">
            Update Profile Details
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition"
          >
            <XMarkIcon className="w-6 h-6 text-gray-400" />
          </button>
        </div>

        <div className="p-8">
          <div className="flex flex-col items-center mb-8">
            <div
              className="relative group cursor-pointer"
              onClick={onImageClick}
            >
              <img
                src={profileImg}
                alt="Preview"
                className="w-24 h-24 rounded-full object-cover border-2 border-purple-100 group-hover:opacity-80 transition"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <CameraIcon className="w-8 h-8 text-white drop-shadow-md" />
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-2">Click photo to change</p>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormInput
                label="FULL NAME"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
              <FormInput
                label="PHONE"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <FormInput
              label="EMAIL ADDRESS"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex justify-end gap-3 mt-10">
            <button
              onClick={onClose}
              className="px-6 py-2 text-gray-600 font-medium hover:bg-gray-50 rounded-lg transition"
            >
              Cancel
            </button>
            <button className="bg-purple-600 text-white px-8 py-2 rounded-lg font-bold shadow-lg shadow-purple-100 hover:bg-purple-700 transition">
              Update Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfileModal;
