import React, { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import Logo from "../Images/logo.jpeg";
import { Link } from "react-router-dom";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show or hide the button based on scroll position
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Smooth scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <footer className="bg-black text-white py-10 px-6 md:px-12 flex flex-col justify-between items-start transition-all duration-300 ease-in-out w-full">
      {/* Logo Section */}
      <div className="flex flex-col md:flex-row justify-between items-center w-full mb-8">
        {/* Logo */}
        <div className="mb-6 md:mb-0">
          <img src={Logo} alt="Starz Productions" className="w-32" />
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-6">
          <Link to="#" className="hover:text-red-400 transition duration-200">
            <FaFacebookF size={24} />
          </Link>
          <Link
            to="https://www.instagram.com/starz__production?utm_source=qr&igsh=MTRpb21pNHdoMGR1MA=="
            className="hover:text-red-400 transition duration-200"
          >
            <FaInstagram size={24} />
          </Link>
          <Link to="#" className="hover:text-red-400 transition duration-200">
            <FaTwitter size={24} />
          </Link>
          <Link to="#" className="hover:text-red-400 transition duration-200">
            <FaLinkedinIn size={24} />
          </Link>
        </div>
      </div>

      {/* Main Footer Sections */}
      <div className="flex flex-col md:flex-row justify-between w-full space-y-8 md:space-y-0 md:space-x-8">
        {/* Contact Information */}
        <div className="flex flex-col w-full md:w-1/4">
          <h2 className="text-2xl font-bold mb-4 border-b-2 border-red-500 pb-2">
            Contact Us
          </h2>
          <p className="mb-2">Email:</p>
          <a
            href="mailto:support@starzproductions.com"
            className="hover:text-red-400 transition duration-200"
          >
            Starzproductionofficial@gmail.com
          </a>
          <p className="mb-2 mt-2">Phone:</p>
          <a
            href="tel:+917208659598"
            className="hover:text-red-400 transition duration-200"
          >
            +91 7590088592
          </a>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col w-full md:w-1/4">
          <h2 className="text-2xl font-bold mb-4 border-b-2 border-red-500 pb-2">
            Quick Links
          </h2>
          <ul className="space-y-2">
            <li>
              <Link
                to="/about"
                className="hover:text-red-400 transition duration-200"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/pricing"
                className="hover:text-red-400 transition duration-200"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                className="hover:text-red-400 transition duration-200"
              >
                All Galleries
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-red-400 transition duration-200"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Photoshoots */}
        <div className="flex flex-col w-full md:w-1/4">
          <h2 className="text-2xl font-bold mb-4 border-b-2 border-red-500 pb-2">
            Photoshoots
          </h2>
          <ul className="space-y-2">
            {["Engagement", "Pre-Wedding", "Wedding", "Events"].map((shoot) => (
              <li key={shoot}>
                <Link
                  to="/pricing"
                  className="hover:text-red-400 transition duration-200"
                >
                  {shoot}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Subscription */}
        <div className="flex flex-col w-full md:w-1/4">
          <h2 className="text-2xl font-bold mb-4 border-b-2 border-red-500 pb-2">
            Have a Question?
          </h2>
          <p className="mb-4">
            Just enter your email, and we will contact you soon.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="p-3 rounded-l-md text-black focus:outline-none transition-all duration-300 ease-in-out"
            />
            <button className="bg-red-500 text-white p-3 rounded-r-md hover:bg-red-600 transition duration-300 ease-in-out">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-16 right-10 bg-red-500 text-white p-4 rounded-full font-extrabold shadow-lg hover:bg-red-600 transition duration-300 ease-in-out transform hover:scale-110"
          aria-label="Scroll to Top"
        >
          ↑
        </button>
      )}

      {/* WhatsApp Chat Button */}
      <a
        href="https://wa.me/+917208659598" // Change to your WhatsApp number
        className="fixed bottom-16 left-10 bg-green-500 text-white p-4 rounded-full font-extrabold shadow-lg hover:bg-green-600 transition duration-300 ease-in-out transform hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={24} />
      </a>
    </footer>
  );
};

export default Footer;
