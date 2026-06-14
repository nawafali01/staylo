import React from "react";
import { Link } from "react-router-dom"; // React Router import karein
import logo from "../../assets/logo/stayloLogo.png";
import { footerSections, footerDescription } from "../../data";

const Footer = () => {
  return (
    <footer className="bg-[#001b3d] text-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 mb-10">
        <div className="lg:col-span-2">
          {/* Logo ko Home par link kiya */}
          <Link to="/" className="flex items-center gap-4 mb-6 w-fit group">
            <div className="w-12 h-12 flex items-center justify-center overflow-hidden">
              <img
                src={logo}
                alt="Staylo Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-3xl font-bold tracking-tight">Staylo</span>
          </Link>
          <p className="text-gray-400 leading-relaxed text-lg max-w-sm">
            {footerDescription}
          </p>
        </div>

        {footerSections.map((section) => (
          <div key={section.title}>
            <h4 className="text-lg font-bold mb-6 text-blue-400">
              {section.title}
            </h4>
            <ul className="space-y-4 text-gray-400">
              {section.links.map((link) => (
                <li key={link}>
                  {/* Har link ko dynamic route par bheja */}
                  <Link
                    to={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
                    className="hover:text-white cursor-pointer transition-colors block w-fit"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto border-t border-gray-800 pt-8 text-center">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Staylo Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
