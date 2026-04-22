import React from "react";
import { HomeIcon } from "@heroicons/react/24/outline";
import signUpBg from "../../../assets/svg/signin.svg";
import { signUpStats } from "../../../data/index";

const SignUpPanel = () => {
  return (
    <div className="hidden md:flex flex-1 bg-gradient-to-br from-blue-600 via-blue-400 to-white items-center justify-center p-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <img src={signUpBg} alt="" className="w-full h-full object-fill" />
      </div>

      <div className="relative z-10 text-center max-w-lg flex flex-col items-center">
        <div className="p-4 bg-white/20 backdrop-blur-md rounded-2xl mb-8 border border-white/30 shadow-lg">
          <HomeIcon className="h-10 w-10 text-white" />
        </div>

        <h1 className="text-4xl font-black leading-[1.1] text-blue-900 mb-8 tracking-tight">
          The future of property
          <br />
          <span className="text-white drop-shadow-sm">booking is here.</span>
        </h1>

        <p className="text-xl text-gray-200 font-medium leading-relaxed mb-12">
          Manage listings, handle booking, and connect with verified tenants all
          in one beautiful interface.
        </p>

        <div className="grid grid-cols-3 gap-8 w-full pt-10 border-t border-blue-900/10">
          {signUpStats.map((stat, index) => (
            <div key={index} className="flex flex-col">
              <span className="text-3xl font-black text-blue-900">{stat.value}</span>
              <span className="text-xs font-bold text-blue-800/60 uppercase tracking-widest mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SignUpPanel;
