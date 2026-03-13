import React from 'react';
import { Link } from 'react-router-dom'; // Navigation ke liye
import { UserIcon, BuildingOffice2Icon, CubeIcon, HomeIcon } from '@heroicons/react/24/outline';

const SignUpPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[800px]">
        
        {/* Left Side: Gradient Section */}
<div className="hidden md:flex flex-[1] bg-gradient-to-br from-blue-600 via-blue-400 to-white items-center justify-center p-20 relative overflow-hidden">
  <div className="absolute inset-0 opacity-20 pointer-events-none">
    <svg width="100%" height="100%" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
          <path d="M 50 0 L 0 0 0 50" fill="none" stroke="white" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
      <circle cx="90%" cy="10%" r="250" fill="none" stroke="white" strokeWidth="2" strokeDasharray="20 10" />
    </svg>
  </div>
  
  {/* Content Wrapper - Isko flex-col aur items-center kiya hai centering ke liye */}
  <div className="relative z-10 text-center max-w-lg flex flex-col items-center">
    
    {/* 1. Home Icon Top Par */}
    <div className="p-4 bg-white/20 backdrop-blur-md rounded-2xl mb-8 border border-white/30 shadow-lg">
      <HomeIcon className="h-10 w-10 text-white" />
    </div>

    {/* 2. Main Heading */}
    <h1 className="text-4xl font-black leading-[1.1] text-blue-900 mb-8 tracking-tight">
      The future of property<br /> 
      <span className="text-white drop-shadow-sm">booking is here.</span>
    </h1>

    {/* 3. Description Text */}
    <p className="text-xl text-gray-200 font-medium leading-relaxed mb-12">
      Manage listings, handle booking, and connect with verified tenants all in one beautiful interface.
    </p>

    {/* 4. Stats Section - 15k+, 98%, 50M+ */}
    <div className="grid grid-cols-3 gap-8 w-full pt-10 border-t border-blue-900/10">
      <div className="flex flex-col">
        <span className="text-3xl font-black text-blue-900">15k+</span>
        <span className="text-xs font-bold text-blue-800/60 uppercase tracking-widest mt-1">Active Properties</span>
      </div>
      <div className="flex flex-col">
        <span className="text-3xl font-black text-blue-900">98%</span>
        <span className="text-xs font-bold text-blue-800/60 uppercase tracking-widest mt-1">Success Rate</span>
      </div>
      <div className="flex flex-col">
        <span className="text-3xl font-black text-blue-900">50M+</span>
        <span className="text-xs font-bold text-blue-800/60 uppercase tracking-widest mt-1">Trusted Users</span>
      </div>
    </div>

  </div>
</div>

        {/* Right Side: Sign Up Form Section */}
        {/* 'flex items-center justify-center' lagaya hai taake content perfectly center ho jaye */}
        <div className="md:w-1/2 p-8 md:p-16 bg-white flex items-center justify-center overflow-y-auto">
          
          {/* Form Wrapper: 'max-w-md' aur 'w-full' content ko balanced rakhta hai */}
          <div className="w-full max-w-md">
            
            {/* Logo & Website Name */}
            <div className="flex items-center gap-2 mb-10">
              <div className="bg-indigo-600 p-1.5 rounded-lg">
                 <CubeIcon className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-800 tracking-tight">Staylo</span>
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h1>
            <p className="text-gray-500 mb-10">Please enter your details to get started.</p>

            <form className="space-y-5">
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">First Name</label>
                  <input type="text" placeholder="John" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition bg-gray-50/50" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Last Name</label>
                  <input type="text" placeholder="Doe" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition bg-gray-50/50" />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address</label>
                <input type="email" placeholder="name@example.com" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition bg-gray-50/50" />
              </div>

              {/* Password Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Password</label>
                  <input type="password" placeholder="••••••••" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition bg-gray-50/50" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Confirm Password</label>
                  <input type="password" placeholder="••••••••" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition bg-gray-50/50" />
                </div>
              </div>

              {/* Role Selection */}
              <div className="pt-2">
                <p className="text-sm font-semibold text-gray-700 mb-3">I am a...</p>
                <div className="grid grid-cols-2 gap-4">
                  <button type="button" className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-indigo-600 text-indigo-600 rounded-xl font-bold hover:bg-indigo-50 transition">
                    <UserIcon className="h-5 w-5" />
                    Tenant
                  </button>
                  <button type="button" className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-gray-100 text-gray-500 rounded-xl font-bold hover:border-indigo-600 hover:text-indigo-600 transition">
                    <BuildingOffice2Icon className="h-5 w-5" />
                    Owner
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-indigo-700 transform transition active:scale-[0.98] mt-6">
                Sign Up
              </button>
            </form>

            {/* Login Link Section */}
            <p className="text-center mt-8 text-gray-600 font-medium">
              Already have an account?{' '}
              <Link to="/signin" className="text-indigo-600 font-bold hover:underline underline-offset-4">
                Log In
              </Link>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;