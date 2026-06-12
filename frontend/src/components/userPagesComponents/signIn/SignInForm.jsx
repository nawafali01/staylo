import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginSuccess } from "../../../redux/slices/authSlice";
import { EmailIcon, LockIcon, EyeIcon } from "../../../assets/svg";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const correctPassword = "admin123";

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));


      if (password !== correctPassword) {
        throw new Error("Email ya password galat hai");
      }

      const fakeUser = {
        id: 1,
        email: email,
        name: "Test User",
        role: "admin",
      };
      const fakeToken = "dummy-token-123";

      dispatch(
        loginSuccess({
          user: fakeUser,
          token: fakeToken,
        }),
      );

      if (fakeUser.role === "admin") {
        navigate("/admin/dashboard");
      } else if (fakeUser.role === "owner") {
        navigate("/owner/dashboard");
      } else {
        navigate("/dashboard");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="md:w-1/2 p-8 md:p-16 bg-white flex items-center justify-center overflow-y-auto">
      <div className="w-full max-w-md">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">
            Welcome back
          </h1>
          <p className="text-gray-500 mb-6">
            Please enter your details to sign in
          </p>

          {error && (
            <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-100 rounded-xl animate-pulse">
              {error}
            </div>
          )}
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
                <EmailIcon className="w-5 h-5" />
              </span>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                <LockIcon className="w-5 h-5" />
              </span>
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-11 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600"
              >
                <EyeIcon className="w-5 h-5" />
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

          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-[#3b82f6] hover:bg-blue-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-200 transition-all active:scale-[0.98] mt-6 text-lg ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
          >
            {loading ? "Processing..." : "Sign In to Dashboard"}
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-600 font-bold hover:underline">
            Sign up for free
          </a>
        </div>

        {/* Social logins niche waale wese hi rahenge */}
      </div>
    </div>
  );
};

export default SignInForm;
