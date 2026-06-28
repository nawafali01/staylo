import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginSuccess } from "../../../redux/slices/authSlice";
import { EmailIcon, LockIcon, EyeIcon } from "../../../assets/svg";
import { toast } from "react-hot-toast";
import GoogleAuthButton from "../../common/GoogleAuthButton";
import Loader from "../../common/Loader";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:8000/api/v1/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await response.json();
      console.log("Backend Login Response Data:", data);

      if (!response.ok) {
        throw new Error(data.message || "Invalid email or password!");
      }

      const token = data?.data?.accessToken || data?.token;
      const user = data?.data?.user || data?.user;

      if (token) localStorage.setItem("token", token);
      if (user) localStorage.setItem("user", JSON.stringify(user));

      if (user) {
        dispatch(loginSuccess({ user, token }));
      }

      toast.success("Logged in successfully!");
      navigate("/pricing");
    } catch (err) {
      toast.error(err.message || "Server connection error. Please try again later.");
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
                disabled={loading}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm disabled:opacity-50"
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
                minLength={6}
                disabled={loading}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-11 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm disabled:opacity-50"
                placeholder="••••••••"
              />
              <button
                type="button"
                disabled={loading}
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 dynamic-eye-toggle"
              >
                <EyeIcon className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="rememberMe"
              disabled={loading}
              className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 disabled:opacity-50"
            />
            <label htmlFor="rememberMe" className="text-sm text-gray-600 selection:bg-transparent">
              Keep me logged in for 30 days
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`relative z-50 w-full bg-[#3b82f6] hover:bg-blue-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-200 transition-all active:scale-[0.98] mt-6 text-lg flex items-center justify-center gap-2 ${loading ? "opacity-70 cursor-not-allowed" : ""
              }`}
          >
            {loading ? (
              <>
                <Loader />
                <span>Processing...</span>
              </>
            ) : (
              "Sign In to Dashboard"
            )}
          </button>
        </form>

        <div className="relative my-8 text-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-100"></div>
          </div>
          <span className="relative bg-white px-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            Or continue with
          </span>
        </div>

        <GoogleAuthButton label="Sign in with Google" />

        <div className="mt-8 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-600 font-bold hover:underline">
            Sign up for free
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;