import React from "react";
import { socialLogins } from "../../data";
import emailIcon from "../../assets/svg/email.svg?raw";
import lockIcon from "../../assets/svg/password.svg?raw";
import eyeIcon from "../../assets/svg/show-password.svg?raw";

const SignInForm = () => {
  return (
    <div className="md:w-1/2 p-8 md:p-16 bg-white flex items-center justify-center overflow-y-auto">
      <div className="w-full max-w-md">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">
            Welcome back
          </h1>
          <p className="text-gray-500 mb-10">
            Please enter your details to sign in
          </p>
        </div>

        <form className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
                <span
                  dangerouslySetInnerHTML={{ __html: emailIcon }}
                  className="w-5 h-5"
                />
              </span>
              <input
                type="email"
                className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm"
                placeholder="name@company.com"
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-semibold text-gray-700">
                Password
              </label>
              <a
                href="#"
                className="text-xs font-bold text-blue-600 hover:text-blue-700"
              >
                Forgot password?
              </a>
            </div>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
                <span
                  dangerouslySetInnerHTML={{ __html: lockIcon }}
                  className="w-5 h-5"
                />
              </span>
              <input
                type="password"
                className="w-full pl-11 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm"
                placeholder="••••••••"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600"
              >
                <span
                  dangerouslySetInnerHTML={{ __html: eyeIcon }}
                  className="w-5 h-5"
                />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <label className="text-sm text-gray-600">
              Keep me logged in for 30 days
            </label>
          </div>

          <button className="w-full bg-[#3b82f6] hover:bg-blue-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-200 transition-all active:scale-[0.98] mt-6 text-lg">
            Sign In to Dashboard
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-600 font-bold hover:underline">
            Sign up for free
          </a>
        </div>

        <div className="relative my-8 text-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-100"></div>
          </div>
          <span className="relative bg-white px-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            Or continue with
          </span>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {socialLogins.map((login) => (
            <button
              key={login.name}
              className="flex items-center justify-center gap-2 border border-gray-200 py-3 rounded-xl hover:bg-gray-50 transition-all text-sm font-bold text-gray-700"
            >
              <img src={login.icon} className="w-5 h-5" alt={login.name} />{" "}
              {login.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
