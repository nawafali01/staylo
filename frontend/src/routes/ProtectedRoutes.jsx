import { Navigate, Outlet } from "react-router-dom";
import { toast } from "react-hot-toast";

const ProtectedRoutes = ({ allowedRoles }) => {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  if (!token) {
    return <Navigate to="/signin" />;
  }

  if (allowedRoles && !allowedRoles.includes(user?.role)) {
    toast.error("Unauthorized access! Access Denied.");
    return <Navigate to="/home" />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;
