import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-950 p-8 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg ">
          <Link to="/">JAMES CONSULTING</Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link to="#about" className="text-white hover:text-gray-300">
            About
          </Link>
          <Link to="#projects" className="text-white hover:text-gray-300">
            Projects
          </Link>
          <Link to="#services" className="text-white hover:text-gray-300">
            Services
          </Link>
          <Link to="#plans" className="text-white hover:text-gray-300">
            Plans & Pricing
          </Link>
          <Link to="#tools" className="text-white hover:text-gray-300">
            Tools & Tips
          </Link>
          <Link to="#contact" className="text-white hover:text-gray-300">
            Contact
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <Link
            to="/login"
            className="text-white hover:text-gray-300 flex items-center"
          >
            Log In
          </Link>
          <Link
            to="/signup"
            className="text-white hover:text-gray-300 flex items-center"
          >
            Sign Up
          </Link>
          <Link
            to="/edit-profile"
            className="text-white hover:text-gray-300 flex items-center"
          >
            Edit Profile
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
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
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-blue-950">
          <Link to="/" className="block text-white hover:text-gray-300 p-4">
            Home
          </Link>
          <Link
            to="#about"
            className="block text-white hover:text-gray-300 p-4"
          >
            About
          </Link>
          <Link
            to="#projects"
            className="block text-white hover:text-gray-300 p-4"
          >
            Projects
          </Link>
          <Link
            to="#services"
            className="block text-white hover:text-gray-300 p-4"
          >
            Services
          </Link>
          <Link
            to="#plans"
            className="block text-white hover:text-gray-300 p-4"
          >
            Plans & Pricing
          </Link>
          <Link
            to="#tools"
            className="block text-white hover:text-gray-300 p-4"
          >
            Tools & Tips
          </Link>
          <Link
            to="#contact"
            className="block text-white hover:text-gray-300 p-4"
          >
            Contact
          </Link>
          <Link
            to="/login"
            className=" text-white hover:text-gray-300 p-4 flex items-center"
          >
            Log In
          </Link>
          <Link
            to="/signup"
            className=" text-white hover:text-gray-300 p-4 flex items-center"
          >
            Sign Up
          </Link>
          <Link
            to="/edit-profile"
            className=" text-white hover:text-gray-300 p-4 flex items-center"
          >
            Edit Profile
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
