import React from 'react';

const SignInPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[800px]">

        {/* Left Side: Main Form Section */}
        <div className="md:w-1/2 p-8 md:p-16 bg-white flex items-center justify-center overflow-y-auto">
          {/* Form Wrapper */}
          <div className="w-full max-w-md">

            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">Welcome back</h1>
              <p className="text-gray-500 mb-10">Please enter your details to sign in</p>
            </div>

            <form className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
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
                  <label className="text-sm font-semibold text-gray-700">Password</label>
                  <a href="#" className="text-xs font-bold text-blue-600 hover:text-blue-700">Forgot password?</a>
                </div>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                  </span>
                  <input
                    type="password"
                    className="w-full pl-11 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm"
                    placeholder="••••••••"
                  />
                  <button type="button" className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                <label className="text-sm text-gray-600">Keep me logged in for 30 days</label>
              </div>

              <button className="w-full bg-[#3b82f6] hover:bg-blue-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-200 transition-all active:scale-[0.98] mt-6 text-lg">
                Sign In to Dashboard
              </button>
            </form>

            <div className="mt-8 text-center text-sm text-gray-600">
              Don't have an account? <a href="/signup" className="text-blue-600 font-bold hover:underline">Sign up for free</a>
            </div>

            <div className="relative my-8 text-center">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-100"></div></div>
              <span className="relative bg-white px-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Or continue with</span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 border border-gray-200 py-3 rounded-xl hover:bg-gray-50 transition-all text-sm font-bold text-gray-700">
                <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-5 h-5" alt="Google" /> Google
              </button>
              <button className="flex items-center justify-center gap-2 border border-gray-200 py-3 rounded-xl hover:bg-gray-50 transition-all text-sm font-bold text-gray-700">
                <img src="https://www.svgrepo.com/show/303108/apple-black-logo.svg" className="w-5 h-5" alt="Apple" /> Apple
              </button>
            </div>
          </div>
        </div>

        {/* --- Right Side: Larger Gradient Section --- */}
        <div className="hidden md:flex flex-[1.2] bg-gradient-to-br from-blue-600 via-blue-400 to-white items-center justify-center p-16 relative overflow-hidden">

          {/* Stroke-style Background Pattern */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <svg width="100%" height="100%" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                  <path d="M 50 0 L 0 0 0 50" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />

              {/* Abstract Large Outlined Shapes (Strokes) */}
              <circle cx="90%" cy="10%" r="250" fill="none" stroke="white" strokeWidth="2" strokeDasharray="20 10" />
              <path d="M-100 600 Q 200 400 500 800" fill="none" stroke="white" strokeWidth="1.5" opacity="0.5" />
              <path d="M200 -100 Q 400 300 800 100" fill="none" stroke="blue" strokeWidth="1" opacity="0.3" />
            </svg>
          </div>

          {/* Main Content Area */}
          <div className="relative z-10 text-center max-w-xl flex flex-col items-center">

            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-black leading-[1.2] mb-8 tracking-tight w-full">
              <span className="text-blue-900 block whitespace-nowrap">Elevate your property</span>
              <span className="text-white drop-shadow-sm block mt-1 whitespace-nowrap">management game.</span>
            </h1>

            <div className="h-1.5 w-24 bg-blue-700 mx-auto mb-8 rounded-full"></div>

            <p className="text-base md:text-lg lg:text-xl text-black font-medium leading-relaxed max-w-sm md:max-w-md mx-auto">
              Join thousands of property owners who trust Staylo for a seamless booking experience and efficient workflow management.
            </p>
          </div>

          {/* Bottom Decorative Stroke */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-20"></div>
        </div>

      </div>
    </div>
  );
};

export default SignInPage;