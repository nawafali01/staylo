import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { navLinks } from "../../data";
import logo from "../../assets/logo/stayloLogo.png";
import { handleLogout } from "../../utils/authUtils";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("token"));
  }, [location]);

  const onLogout = () => {
    handleLogout(navigate);
    setIsLoggedIn(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/20 backdrop-blur-lg border-b border-gray-200 h-20 flex items-center px-6">
      <div className="max-w-7xl mx-auto w-full px-6 py-4">
        <div className="grid grid-cols-3 items-center">

          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img src={logo} alt="Logo" className="h-24 w-auto cursor-pointer" />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex justify-center">
            <ul className="flex items-center gap-8 list-none m-0 p-0">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-gray-600 hover:text-yellow-900 transition-all duration-200 text-sm font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center justify-end gap-3">
            {isLoggedIn ? (
              <>
                <button
                  onClick={() => {
                    const user = JSON.parse(localStorage.getItem("user"));
                    if (user?.role === "admin") navigate("/admin/dashboard");
                    else if (user?.role === "owner") navigate("/owner/dashboard");
                    else navigate("/user/dashboard");
                  }}
                  className="px-5 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg cursor-pointer hover:bg-blue-700 transition-all duration-200"
                >
                  Dashboard
                </button>
                <button
                  onClick={onLogout}
                  className="px-5 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg cursor-pointer hover:bg-blue-700 transition-all duration-200"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/signin"
                className="px-5 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg cursor-pointer hover:bg-blue-700 transition-all duration-200"
              >
                Sign In
              </Link>
            )}
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
