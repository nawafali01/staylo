import React from "react";
import signInBg from "../../assets/svg/signup.svg";

const SignInPanel = () => {
  return (
    <div className="hidden md:flex flex-[1.2] bg-gradient-to-br from-blue-600 via-blue-400 to-white items-center justify-center p-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <img src={signInBg} alt="" className="w-full h-full object-fill" />
      </div>

      <div className="relative z-10 text-center max-w-xl flex flex-col items-center">
        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-black leading-[1.2] mb-8 tracking-tight w-full">
          <span className="text-blue-900 block whitespace-nowrap">
            Elevate your property
          </span>
          <span className="text-white drop-shadow-sm block mt-1 whitespace-nowrap">
            management game.
          </span>
        </h1>

        <div className="h-1.5 w-24 bg-blue-700 mx-auto mb-8 rounded-full"></div>

        <p className="text-base md:text-lg lg:text-xl text-black font-medium leading-relaxed max-w-sm md:max-w-md mx-auto">
          Join thousands of property owners who trust Staylo for a seamless
          booking experience and efficient workflow management.
        </p>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-20"></div>
    </div>
  );
};

export default SignInPanel;
