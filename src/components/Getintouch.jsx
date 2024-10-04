import React from "react";
import H1 from "../Images/hero2.webp";

function GetInTouch() {
  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center transition-all duration-300 ease-in-out"
      style={{ backgroundImage: `url(${H1})` }}
    >
      {/* Overlay for dimming background image */}
      <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 ease-in-out"></div>

      {/* Form container */}
      <div className="relative z-10 bg-white rounded-lg shadow-lg p-6 sm:p-8 lg:w-1/2 w-full max-w-md backdrop-blur-md sm:bg-white sm:bg-opacity-100 transition-all duration-300 ease-in-out">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-800 transition-colors duration-300 ease-in-out ">
          Get In Touch
        </h2>

        {/* Form */}
        <form className="space-y-4 animate-fadeIn">
          {/* First and Last Name */}
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 ease-in-out hover:border-blue-500"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 ease-in-out hover:border-blue-500"
              required
            />
          </div>

          {/* Email and Phone */}
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 ease-in-out hover:border-blue-500"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone No"
              className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 ease-in-out hover:border-blue-500"
              required
            />
          </div>

          {/* Message */}
          <textarea
            name="message"
            placeholder="I would like to discuss..."
            className="w-full h-48 p-2 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none transition-all duration-200 ease-in-out hover:border-blue-500"
            required
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full p-2 sm:p-3 bg-black text-white rounded-md hover:bg-gray-800 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default GetInTouch;
