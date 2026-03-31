import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Home from './pages/home/Home';
import About from './pages/about/About';
import PropertyListing from './pages/property/PropertyListing';
import SignUpPage from './components/auth/SignUpPage';
import SignInPage from './components/auth/SignInPage';
import Property from './pages/property/PropertyDetail';
import ConfirmBookingLayout from './components/ConfirmBooking/ConfirmBookingLayout';
import ContactPage from './pages/contact/Contact';
import Dashboard from './pages/dashboard/DashboardPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/signin" />} />

        {/* Auth Pages */}
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />

        {/* Main Pages */}
        <Route path="/home" element={<><Navbar /><Home /><Footer /></>} />
        <Route path="/about" element={<><Navbar /><About /><Footer /></>} />
        <Route path="/properties" element={<><Navbar /><PropertyListing /><Footer /></>} />
        <Route path="/property/:id" element={<><Navbar /><Property /><Footer /></>} />
        <Route path="/confirm-booking/:id" element={<><Navbar /><ConfirmBookingLayout /><Footer /></>} />
        <Route path="/contact" element={<><Navbar /><ContactPage /><Footer /></>} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;