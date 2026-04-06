import React from "react";
import { Link } from "react-router-dom";
import {
  UserIcon,
  BuildingOffice2Icon,
  CubeIcon,
} from "@heroicons/react/24/outline";
import { userRoles, signUpIconMap as iconMap } from "../../data";

const SignUpForm = () => {
  return (
    <div className="md:w-1/2 p-8 md:p-16 bg-white flex items-center justify-center overflow-y-auto">
      <div className="w-full max-w-md">
        <div className="flex items-center gap-2 mb-10">
          <div className="bg-indigo-600 p-1.5 rounded-lg">
            <CubeIcon className="h-6 w-6 text-white" />
          </div>
          <span className="text-2xl font-bold text-gray-800 tracking-tight">
            Staylo
          </span>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Create Account
        </h1>
        <p className="text-gray-500 mb-10">
          Please enter your details to get started.
        </p>

        <form className="space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                First Name
              </label>
              <input
                type="text"
                placeholder="John"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition bg-gray-50/50"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Doe"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition bg-gray-50/50"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
              Email Address
            </label>
            <input
              type="email"
              placeholder="name@example.com"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition bg-gray-50/50"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition bg-gray-50/50"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition bg-gray-50/50"
              />
            </div>
          </div>

          <div className="pt-2">
            <p className="text-sm font-semibold text-gray-700 mb-3">
              I am a...
            </p>
            <div className="grid grid-cols-2 gap-4">
              {userRoles.map((role) => {
                const Icon = iconMap[role.icon];
                return (
                  <button
                    key={role.id}
                    type="button"
                    className={`flex items-center justify-center gap-2 px-4 py-3 border-2 rounded-xl font-bold transition ${
                      role.id === "tenant"
                        ? "border-indigo-600 text-indigo-600 hover:bg-indigo-50"
                        : "border-gray-100 text-gray-500 hover:border-indigo-600 hover:text-indigo-600"
                    }`}
                  >
                    {Icon && <Icon className="h-5 w-5" />}
                    {role.label}
                  </button>
                );
              })}
            </div>
          </div>

          <button className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-indigo-700 transform transition active:scale-[0.98] mt-6">
            Sign Up
          </button>
        </form>

        <p className="text-center mt-8 text-gray-600 font-medium">
          Already have an account?{" "}
          <Link
            to="/signin"
            className="text-indigo-600 font-bold hover:underline underline-offset-4"
          >
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;
