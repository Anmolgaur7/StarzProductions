import React, { useState, useEffect } from "react";
import WeddingImage from "../Images/S3.jpg"; // Use your image paths
import EngagementImage from "../Images/E1.png";
import EventImage from "../Images/E2.png";
import { Link } from "react-router-dom";

const slides = [
  {
    title: "Wedding Photography",
    description: "Capture the magical moments of your wedding with elegance and style.",
    image: WeddingImage,
  },
  {
    title: "Engagement Photography",
    description: "Let us capture the love and excitement leading to your big day.",
    image: EngagementImage,
  },
  {
    title: "Event Photography",
    description: "We make every event unforgettable with stunning photography.",
    image: EventImage,
  },
];

function Service() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Auto-switch every 5 seconds
    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <>
    <div className="flex items-center justify-center mb-6">
          <hr className="border-gray-300 flex-grow" />
          <h2 className="text-4xl font-bold m-6">Services</h2>
          <hr className="border-gray-300 flex-grow" />
        </div>
    <section className="relative w-full h-[90vh] overflow-hidden bg-gray-50">
      {/* Slide Container */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out transform ${
            currentSlide === index ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center md:justify-start">
            <div className="w-full md:w-2/3 lg:w-1/2 bg-white/80 p-8 md:p-12 rounded-3xl shadow-xl m-4 transform transition-all duration-700 hover:scale-105 hover:shadow-2xl">
              <div className="border border-gray-200 rounded-lg p-6 transition-transform duration-700 hover:rotate-1 hover:shadow-lg">
                <h2 className="text-3xl md:text-5xl font-semibold mb-4 text-gray-900">
                  {slide.title}
                </h2>
                <p className="text-md md:text-lg text-gray-700 mb-6">
                  {slide.description}
                </p>
                <div className="flex space-x-6">
                <button className="bg-red-500 hover rounded-lg p-3">
                <Link to="/gallery"
                    className="text-md md:text-lg  text-white  transition-colors duration-300"
                  >
                    SEE ALBUM
                  </Link>
                </button>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-10 w-full flex justify-center space-x-4 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 md:w-5 md:h-5 rounded-full border-2 transition-all duration-300 ${
              currentSlide === index ? "bg-red-600 border-red-600" : "bg-gray-400 border-gray-200"
            } hover:scale-110`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
    </>
  );
}

export default Service;
