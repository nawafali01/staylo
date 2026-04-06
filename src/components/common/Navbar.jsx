import { Link } from "react-router-dom"; // 1. Link import karein
import { navLinks } from "../../data";
import logo from "../../assets/logo/stayloLogo.png";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/20 backdrop-blur-lg border-b border-gray-200 h-20 flex items-center px-6">
      <div className="max-w-7xl mx-auto w-full px-6 py-4  ">
        {" "}
        {/* w-full add kiya taake grid sahi kaam kare */}
        <div className="grid grid-cols-3 items-center">
          {/* Logo - Click karne par Home par jaye */}
          <div className="flex items-center">
            <Link to="/home">
              <img
                src={logo}
                alt="Logo"
                className="h-24 w-auto cursor-pointer"
              />
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

          {/* Buttons */}
          <div className="flex items-center justify-end gap-3">
            <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-yellow-900  transition-all duration-200 rounded-lg  ">
              Sign In
            </button>
            <button className="px-5 py-2 bg-blue-600  text-white text-sm font-medium rounded-lg cursor-pointer hover:bg-amber-700 transition-all duration-200">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
