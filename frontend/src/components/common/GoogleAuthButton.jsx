import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginSuccess } from "../../redux/slices/authSlice";
import { toast } from "react-hot-toast";

const GoogleAuthButton = ({ label = "Continue with Google" }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoogleAuth = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log("Google Login Response:", tokenResponse);
      
      try {
        // Send the access token to our backend
        // We assume the backend route is /api/v1/users/google-auth
        const response = await fetch("http://localhost:8000/api/v1/users/google-auth", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            accessToken: tokenResponse.access_token,
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Google Authentication failed!");
        }

        const token = data?.data?.accessToken || data?.token;
        const user = data?.data?.user || data?.user;

        if (token) localStorage.setItem("token", token);
        if (user) localStorage.setItem("user", JSON.stringify(user));

        if (user) {
          dispatch(loginSuccess({ user, token }));
        }

        toast.success("Signed in with Google successfully!");
        
        // Redirection Flow: Login -> Payment (via Pricing)
        // Redirecting to pricing as it is the step before payment
        navigate("/pricing");

      } catch (error) {
        console.error("Google Auth Error:", error);
        toast.error(error.message || "Something went wrong with Google Sign-In");
      }
    },
    onError: (error) => {
      console.error("Google Login Failed:", error);
      toast.error("Google Login Failed. Please try again.");
    },
  });

  return (
    <button
      type="button"
      onClick={() => handleGoogleAuth()}
      className="flex items-center justify-center gap-3 w-full border border-gray-200 py-3.5 rounded-xl hover:bg-gray-50 transition-all text-sm font-bold text-gray-700 shadow-sm"
    >
      <img
        src="https://www.svgrepo.com/show/355037/google.svg"
        className="w-5 h-5"
        alt="Google"
      />
      {label}
    </button>
  );
};

export default GoogleAuthButton;
