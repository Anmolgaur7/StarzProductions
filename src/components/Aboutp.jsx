import React from "react";
import aboutImage from "../Images/p2.jpg"; // Replace with your image path

function Aboutp() {
  return (
    <div className="relative flex flex-col lg:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden p-6 lg:p-20">
      {/* Left Section: Image */}
      <div className="relative lg:w-1/2 w-full animate-slideIn flex justify-center lg:justify-start">
        <div
          className="overflow-hidden rounded-lg shadow-lg 
          transform transition-transform duration-1000 ease-in-out 
          hover:scale-105"
        >
          <img
            src={aboutImage}
            alt="Photographer"
            className="object-cover w-full h-80 lg:h-96 transition-all duration-500 ease-in-out"
          />
        </div>
      </div>

      {/* Right Section: Text */}
      <div
        className="lg:w-1/2 w-full lg:pl-4 pt-6 lg:pt-0 text-left 
        relative animate-fadeIn bg-white bg-opacity-90 rounded-xl p-10 lg:p-14 shadow-2xl 
        transform transition-transform duration-700 ease-in-out hover:-translate-y-2"
      >
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          Hello! We Are Starz Photography Production House
        </h2>
        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          I am Prince, a Professional Photographer and Founder/CEO of Starz
          Photography. I started shooting pictures and videos long ago with just
          a smartphone. To carry out my skills further, I joined and started
          assisting some well-known and big photographers in the industry. Later
          I studied professional photography in Chandigarh for certification, and
          now here I am. Call us for any photoshoot events like Engagement,
          Pre-wedding, or Wedding.
        </p>

        {/* Action Button */}
        <a
          href="#contact"
          className="inline-block bg-gradient-to-r from-black via-gray-800 to-gray-600 text-white text-lg font-semibold py-3 px-6 rounded-full 
          transition-transform transform hover:scale-110"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
}

export default Aboutp;
