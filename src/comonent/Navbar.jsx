import React, { useState } from "react";
import assets from "../assets/assets";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#0E456A] text-white">
      <div className="container mx-auto flex items-center justify-between p-4 px-20">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10  rounded-full flex items-center justify-center text-white">
       <img src={assets.logo} alt="" />
          </div>
        </div>

        {/* Links Section */}
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-gray-300">
            Home
          </a>
          <a href="#services" className="hover:text-gray-300">
            Services
          </a>
          <a href="#about" className="hover:text-gray-300">
            About Us
          </a>
          <a href="#contact" className="hover:text-gray-300">
            Contact Us
          </a>
          <a href="#team" className="hover:text-gray-300">
            Team
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-blue-700 text-white p-4 space-y-2">
          <a href="#home" className="block hover:text-gray-300">
            Home
          </a>
          <a href="#services" className="block hover:text-gray-300">
            Services
          </a>
          <a href="#about" className="block hover:text-gray-300">
            About Us
          </a>
          <a href="#contact" className="block hover:text-gray-300">
            Contact Us
          </a>
          <a href="#team" className="block hover:text-gray-300">
            Team
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
