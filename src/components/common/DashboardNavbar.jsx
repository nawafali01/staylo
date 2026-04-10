import React from "react";
import { BellIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { userData } from "../../data/index";

export default function DashboardNavbar() {
  const { userName, userRole, userImage, searchPlaceholder } = userData;

  return (
    <header className="bg-white border-b border-slate-200 h-16 flex items-center justify-between px-8 sticky top-0 z-10">
      <div className="relative w-96">
        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
          <MagnifyingGlassIcon className="h-5 w-5" />
        </span>
        <input
          type="text"
          className="block w-full pl-10 pr-3 py-2 border border-slate-200 rounded-lg text-sm bg-slate-50 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
          placeholder={searchPlaceholder}
        />
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-lg transition-colors relative">
          <BellIcon className="h-6 w-6" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>

        <div className="h-8 w-[1px] bg-slate-200 mx-2"></div>

        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-sm font-semibold text-slate-900">{userName}</p>{" "}
            {/* Get ho gaya! */}
            <p className="text-xs text-slate-500">{userRole}</p>{" "}
            {/* Get ho gaya! */}
          </div>
          <img
            src={userImage}
            alt="User profile"
            className="h-10 w-10 rounded-full border border-slate-200"
          />
        </div>
      </div>
    </header>
  );
}
