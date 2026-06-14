import { twoFactor } from "../../../../data/index";

const AccountSettingsSecurity = ({ onEnable }) => {
  return (
    <div className="relative overflow-hidden rounded-2xl p-7 bg-gradient-to-br from-blue-600 to-blue-700">
      
    
      <div className="absolute right-7 bottom-4 text-[80px] opacity-10 select-none">
        🛡️
      </div>

    
      <h3 className="text-white font-bold text-lg mb-2">
        {twoFactor.title}
      </h3>
      <p className="text-blue-200 text-sm mb-5 max-w-sm">
        {twoFactor.description}
      </p>
      <button
        onClick={onEnable}
        className="bg-white text-blue-600 font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-blue-50 transition duration-200"
      >
        {twoFactor.buttonText}
      </button>
    </div>
  );
};

export default AccountSettingsSecurity;