import React from 'react';
import logo from '../../assets/logo/stayloLogo.png';
import { footerSections } from '../../data';

const Footer = () => {
  return (
    <footer className="bg-[#001b3d] text-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 mb-10">

        {/* Logo & Heading Section */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 flex items-center justify-center overflow-hidden">
              <img src={logo} alt="Staylo Logo" className="w-full h-full object-contain" />
            </div>
            <span className="text-3xl font-bold tracking-tight">Staylo</span>
          </div>
          <p className="text-gray-400 leading-relaxed text-lg max-w-sm">
            Leading the way in modern real estate solutions. We make finding,
            investing, and managing properties simple, transparent, and efficient
            for everyone.
          </p>
        </div>

        {/* Links Sections */}
        {footerSections.map((section) => (
          <div key={section.title}>
            <h4 className="text-lg font-bold mb-6 text-blue-400">{section.title}</h4>
            <ul className="space-y-4 text-gray-400">
              {section.links.map((link) => (
                <li key={link} className="hover:text-white cursor-pointer transition-colors w-fit">
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto border-t border-gray-800 pt-8 text-center">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} PropertyCards Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;