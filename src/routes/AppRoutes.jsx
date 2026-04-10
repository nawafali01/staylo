import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Home from '../pages/Home';
import About from '../pages/About';
import PropertyListing from '../pages/PropertyListing';
import SignUpPage from '../pages/auth/SignUpPage';
import SignInPage from '../pages/auth/SignInPage';
import PropertyDetail from '../pages/PropertyDetail';
import ConfirmBookingPage from '../pages/ConfirmBookingPage';
import ContactPage from '../pages/Contact';
import UserDashboardPage from '../pages/UserDashboardPage';
import UserDashboardBooking from '../pages/UserDashboardBooking';
import UserDashboardSaved from '../pages/UserDashboardSaved';
import UserDashboardMessagesPage from '../pages/UserDashboardMessages';
import UserdashboardSetting from '../pages/UserDashboardSetting';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/signin" />} />

      {/* Auth Pages */}
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/signin" element={<SignInPage />} />

      {/* Main Pages */}
      <Route path="/home" element={<><Navbar /><Home /><Footer /></>} />
      <Route path="/about" element={<><Navbar /><About /><Footer /></>} />
      <Route path="/properties" element={<><Navbar /><PropertyListing /><Footer /></>} />
      <Route path="/property/:id" element={<><Navbar /><PropertyDetail /><Footer /></>} />
      <Route path="/confirm-booking/:id" element={<><Navbar /><ConfirmBookingPage /><Footer /></>} />
      <Route path="/contact" element={<><Navbar /><ContactPage /><Footer /></>} />
      <Route path="/dashboard" element={<UserDashboardPage />} />
      <Route path="/bookings" element={<UserDashboardBooking />} />
      <Route path="/saved" element={<UserDashboardSaved />} />
      <Route path="/messages" element={<UserDashboardMessagesPage />} />
      <Route path="/settings" element={<UserdashboardSetting />} />
    </Routes>
  );
};

export default AppRoutes;
