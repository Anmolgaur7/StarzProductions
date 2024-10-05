import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Images/logo.jpg";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-gray-200 shadow-md py-6">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800">
            <Link to='/'>
            <div className="flex justify-center gap-3 items-center">
            <img src={Logo} alt="Logo" className="w-14 h-14 rounded-full md:w-20 h-20 " />
            Starz Productions
            </div>
            </Link>
          </div>
          {/* Hamburger Icon for small screens */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              <svg
                className="w-6 h-6 text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
          {/* Menu Links */}
          <ul
            className={`flex space-x-8 md:flex md:space-x-8 md:items-center ${
              isOpen ? "hidden" : "hidden"
            } md:block`}
          >
            <li className="text-xl text-gray-600 hover:text-gray-800">
              <Link to="/">Home</Link>
            </li>
            <li className="text-xl text-gray-600 hover:text-gray-800">
              <Link to="/pricing">Pricing</Link>
            </li>
            <li className="text-xl text-gray-600 hover:text-gray-800">
            <Link to="/gallery">Gallery</Link>
              </li>
            <li className="text-xl text-gray-600 hover:text-gray-800">
            <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="animate-fadeIn">
          <div className="md:hidden bg-gray-200 px-4 py-4 rounded-3xl">
            <ul className="space-y-4">
              <li className="text-xl text-gray-600 hover:text-gray-800">
                <Link to="/">Home</Link>
              </li>
              <li className="text-xl text-gray-600 hover:text-gray-800">
                <Link to="/pricing">Pricing</Link>
              </li>
              <li className="text-xl text-gray-600 hover:text-gray-800">
                <Link to="/gallery">Gallery</Link>
                </li>
              <li className="text-xl text-gray-600 hover:text-gray-800">
              <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>    
        </div>
      )}
    </>
  );
}
export default Navbar;
