import { toast } from "react-hot-toast";

export const handleLogout = (navigate) => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  toast.success("Logged out successfully!");
  if (navigate) {
    navigate("/signin");
  } else {
    window.location.href = "/signin";
  }
};
