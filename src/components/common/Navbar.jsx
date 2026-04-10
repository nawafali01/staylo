import { Link } from "react-router-dom";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { navLinks } from "../../data";
import logo from "../../assets/logo/stayloLogo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/20 backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto w-full px-6 h-20 flex items-center justify-between">

        <Link to="/home">
          <img src={logo} alt="Logo" className="h-24 w-auto cursor-pointer" />
        </Link>

        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
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

        <div className="hidden md:flex items-center gap-3">
          <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-yellow-900 transition-all duration-200 rounded-lg">
            Sign In
          </button>
          <button className="px-5 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg cursor-pointer hover:bg-amber-700 transition-all duration-200">
            Get Started
          </button>
        </div>

        <button
          className="md:hidden text-gray-600"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className="text-gray-600 hover:text-yellow-900 text-sm font-medium transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col gap-2 pt-2 border-t border-gray-100">
            <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-yellow-900 transition-all duration-200 rounded-lg text-left">
              Sign In
            </button>
            <button className="px-5 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-amber-700 transition-all duration-200">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;