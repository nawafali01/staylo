import { Routes, Route, Navigate } from "react-router-dom";
import SignUpPage from "../pages/auth/SignUpPage";
import SignInPage from "../pages/auth/SignInPage";
import Home from "../pages/userPages/Home";
import About from "../pages/userPages/About";
import { navLinks } from "../data";
import ProtectedRoutes from "./ProtectedRoutes";
import PropertyListing from "../pages/userPages/PropertyListing";
import PropertyDetail from "../pages/userPages/PropertyDetail";
import ConfirmBookingPage from "../pages/userPages/ConfirmBookingPage";
import ContactPage from "../pages/userPages/Contact";
import UserDashboardPage from "../pages/userDashboardPages/Dashboard";
import UserDashboardBooking from "../pages/userDashboardPages/Booking";
import UserDashboardSaved from "../pages/userDashboardPages/Saved";
import UserDashboardMessagesPage from "../pages/userDashboardPages/Messages";
import UserdashboardSetting from "../pages/userDashboardPages/Setting";
import MainLayout from "../components/layout/ScreenPagesLayout";
import DashboardLayout from "../components/layout/DashboardLayout";
import AdminDashboardPage from "../pages/adminDashboardPages/Dashboard";
import AdminDashboardBooking from "../pages/adminDashboardPages/Booking";
import AdminDashboardProperty from "../pages/adminDashboardPages/Property";
import AdminDashboardUser from "../pages/adminDashboardPages/User";
import AdminDashboardReport from "../pages/adminDashboardPages/Report";
import AddNewProperty from "../pages/adminDashboardPages/AddNewProperty";
import { sidebarLinks, adminSidebarLinks, ownerSidebarLinks } from "../data";
import OwnerDashboardPage from "../pages/ownerDashboardPages/OwnerDashboardPage";
import OwnerProperties from "../pages/ownerDashboardPages/OwnerProperties";
import OwnerBookings from "../pages/ownerDashboardPages/OwnerBookings";
import OwnerEarning from "../pages/ownerDashboardPages/OwnerEarning";
import OwnerProfile from "../pages/ownerDashboardPages/OwnerProfile";
import MessagesIndex from "../components/common/messages/Index";
import Pricing from "../pages/userPages/Pricing";
import Payment from "../pages/userPages/Payment";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />

      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />

      <Route element={<MainLayout links={navLinks} />}>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/properties" element={<PropertyListing />} />
        <Route path="/property/:id" element={<PropertyDetail />} />
        <Route path="/confirm-booking/:id" element={<ConfirmBookingPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/payment/:planId" element={<Payment />} />
      </Route>

      {/* User Dashboard — only accessible by role: user */}
      <Route element={<ProtectedRoutes allowedRoles={["user"]} />}>
        <Route path="/user" element={<DashboardLayout links={sidebarLinks} />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<UserDashboardPage />} />
          <Route path="bookings" element={<UserDashboardBooking />} />
          <Route path="saved" element={<UserDashboardSaved />} />
          <Route path="message" element={<UserDashboardMessagesPage />} />
          <Route path="settings" element={<UserdashboardSetting />} />
        </Route>
      </Route>

      {/* Admin Dashboard — only accessible by role: admin */}
      <Route element={<ProtectedRoutes allowedRoles={["admin"]} />}>
        <Route
          path="/admin"
          element={<DashboardLayout links={adminSidebarLinks} isAdmin={true} />}
        >
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<AdminDashboardPage />} />
          <Route path="property" element={<AdminDashboardProperty />} />
          <Route path="bookings" element={<AdminDashboardBooking />} />
          <Route path="users" element={<AdminDashboardUser />} />
          <Route path="reports" element={<AdminDashboardReport />} />
          <Route path="add-property" element={<AddNewProperty />} />
          <Route path="message" element={<MessagesIndex dashboardType="admin" />} />
        </Route>
      </Route>

      {/* Owner Dashboard — only accessible by role: owner */}
      <Route element={<ProtectedRoutes allowedRoles={["owner"]} />}>
        <Route
          path="/owner"
          element={<DashboardLayout links={ownerSidebarLinks} />}
        >
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<OwnerDashboardPage />} />
          <Route path="properties" element={<OwnerProperties />} />
          <Route path="bookings" element={<OwnerBookings />} />
          <Route path="earning" element={<OwnerEarning />} />
          <Route path="profile" element={<OwnerProfile />} />
          <Route path="message" element={<MessagesIndex />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
