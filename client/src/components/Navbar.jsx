import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-3xl font-bold">
              <span className="text-[#FF6B6B]">AI</span>
              <span className="text-gray-900">Prompts</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-gray-900 hover:text-[#D64639] font-medium transition-colors ${
                isActive("/") ? "text-[#FF6B6B]" : ""
              }`}
            >
              Home
            </Link>
            <Link
              to="/prompts"
              className={`text-gray-900 hover:text-[#D64639] font-medium transition-colors ${
                isActive("/prompts") ? "text-[#FF6B6B]" : ""
              }`}
            >
              Prompts
            </Link>
            <Link
              to="/about"
              className={`text-gray-900 hover:text-[#D64639] font-medium transition-colors ${
                isActive("/about") ? "text-[#FF6B6B]" : ""
              }`}
            >
              About
            </Link>
            {/* <Link
              to="/contact"
              className="px-6 py-2.5 bg-[#FF6B6B] text-white rounded-full font-semibold hover:bg-[#D64639]  transition-colors duration-300"
            >
              Talk to Us
            </Link> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-900 hover:text-[#D64639] "
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className={`text-gray-900 hover:text-[#D64639] font-medium transition-colors ${
                  isActive("/") ? "text-[#FF6B6B]" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/prompts"
                className={`text-gray-900 hover:text-[#D64639] font-medium transition-colors ${
                  isActive("/prompts") ? "text-[#FF6B6B]" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Prompts
              </Link>
              <Link
                to="/about"
                className={`text-gray-900 hover:text-[#D64639] font-medium transition-colors ${
                  isActive("/about") ? "text-[#FF6B6B]" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              {/* <Link
                to="/contact"
                className="px-6 py-2.5 bg-[#FF6B6B] text-white rounded-full font-semibold hover:bg-[#D64639] transition-colors duration-300 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Talk to Us
              </Link> */}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
