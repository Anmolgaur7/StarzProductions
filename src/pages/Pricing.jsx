import React from "react";
import image from "../Images/p1.gif";
import image2 from "../Images/S3.jpg";
import Aboutp from "../components/Aboutp";
import Packages from "../components/Packages";

function Pricing() {
  return (
    <div>
      {/* Hero Section with Image and Text */}
      <header className="relative h-screen bg-gray-900">
        {/* Image Slider */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        {/* Text Content */}
        <div className="container mx-auto px-4 flex flex-col justify-center items-center h-full relative z-10">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 animate-fadeIn">
            Photoshoot Pricing List
          </h1>
          <p className="text-gray-200 font-semibold text-xl md:text-2xl mb-6 animate-slideIn">
            Starz Productions offers you the best photoshoot at the most
            affordable price.
          </p>
        </div>
      </header>

      <Aboutp />
      <div className="relative w-full h-[170px] md:h-[300px] lg:h-[370px] overflow-hidden">
        {/* Background Image */}
        <img
          src={image2}
          alt="Wedding"
          className="w-full h-full object-cover opacity-80"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30 flex justify-center items-center">
          {/* Text */}
          <h1 className="text-white text-center text-2xl md:text-4xl lg:text-5xl font-bold">
            Wedding Photography & Videography Packages
          </h1>
        </div>
      </div>
      {/* Photography Packages */}
      <Packages />

      <div className="flex justify-center gap-10  items-center bg-gray-300 py-10 px-8 animate-fadeIn">
        <h1 className="text-2xl font-semibold text-gray-800">
          For Pricing, kindly contact us
        </h1>

        <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-gray-800 transition duration-300 ease-in-out">
          <span>→</span>
          <span>Contact Me</span>
        </button>
      </div>
    </div>
  );
}

export default Pricing;
