import React, { useState, useRef, useEffect } from "react";
import {
  BellIcon,
  MagnifyingGlassIcon,
  ArrowLeftOnRectangleIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { userData } from "../../data/index";
import { useNavigate } from "react-router-dom";

export default function DashboardNavbar() {
  const { userName, userRole, userImage, searchPlaceholder } = userData;

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleProfileClick = () => {
    navigate("/dashboard/settings");
    setIsOpen(false);
  };

  const handleBellClick = () => {
    navigate("/dashboard/messages");
  };

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
        <button
          onClick={handleBellClick}
          className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-lg transition-colors relative"
        >
          <BellIcon className="h-6 w-6" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>

        <div className="h-8 w-[1px] bg-slate-200 mx-2"></div>

        <div className="relative" ref={dropdownRef}>
          <div
            className="flex items-center gap-3 cursor-pointer p-1 hover:bg-slate-50 rounded-lg transition-all"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="text-right hidden sm:block">
              <p className="text-sm font-semibold text-slate-900">{userName}</p>
              <p className="text-xs text-slate-500">{userRole}</p>
            </div>
            <img
              src={userImage}
              alt="User profile"
              className="h-10 w-10 rounded-full border border-slate-200"
            />
          </div>

          {isOpen && (
            <div className="absolute right-0 mt-2 w-64 bg-white border border-slate-200 rounded-xl shadow-xl z-50 overflow-hidden">
              <div
                className="p-4 hover:bg-slate-50 cursor-pointer transition-colors border-b border-slate-100"
                onClick={handleProfileClick}
              >
                <div className="flex items-center gap-3">
                  <img
                    src={userImage}
                    className="h-12 w-12 rounded-full border border-slate-100"
                    alt=""
                  />
                  <div>
                    <p className="font-bold text-slate-900 text-sm">
                      {userName}
                    </p>
                    <p className="text-xs text-blue-600 font-medium hover:underline">
                      Update Profile
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-1">
                <button
                  className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-slate-600 hover:bg-red-50 hover:text-red-600 transition-all rounded-lg"
                  onClick={() => {
                    console.log("Logging out...");
                    setIsOpen(false);
                  }}
                >
                  <ArrowLeftOnRectangleIcon className="h-5 w-5" />
                  <span>Log Out</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
