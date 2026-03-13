import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Home from './pages/home/Home';
import About from './pages/about/About';
import SignUpPage from './components/auth/SignUpPage';
import SignInPage from './components/auth/SignInPage';
import Property from './pages/property/PropertyDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default route redirects to SignIn */}
        <Route path="/" element={<Navigate to="/signin" />} />

        {/* Auth Pages (No Navbar or Footer) */}
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />

        {/* Main Pages (With Navbar and Footer) */}
        <Route path="/home" element={<><Navbar /><Home /><Footer /></>} />
        <Route path="/about" element={<><Navbar /><About /><Footer /></>} />
      <Route path="/property/:id" element={<><Navbar /><Property /><Footer /></>} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;