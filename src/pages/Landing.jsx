import React, { useState, useEffect } from "react";
import S1 from "../Images/S1.png";
import S2 from "../Images/S2.png";
import S3 from "../Images/S3.jpg";
import AboutUs from "../components/Aboutus";
import Testimonials from "../components/Testimonials";
import Services from "../components/Services";
import GetInTouch from "../components/Getintouch";

function Landing() {
  const images = [S2, S1, S3];
  const texts = ["Wedding", "Engagement", "Events"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState(0);
  const [fade, setFade] = useState(true); // Controls the fade animation

  // Automatically change image every 3 seconds
  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(imageInterval);
  }, [images.length]);

  // Automatically change text every 3 seconds with fade effect
  useEffect(() => {
    const textInterval = setInterval(() => {
      setFade(false); // Trigger fade-out animation

      setTimeout(() => {
        setCurrentText((prevText) => (prevText + 1) % texts.length);
        setFade(true); // Trigger fade-in after text changes
      }, 500); // Fade-out duration before changing text
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(textInterval);
  }, [texts.length]);

  return (
    <div>
      {/* Hero Section */}
      <header className="relative h-screen">
        {/* Image Slider */}
        <div className="absolute inset-0">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
                currentIndex === index ? "opacity-100" : "opacity-0"
              }`}
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          ))}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        {/* Text Content */}
        <div className="container mx-auto px-4 flex flex-col justify-center items-center h-full relative z-10">
          <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">
            Make it Professional
          </h1>
          <p
            className={`text-gray-200 font-bold text-7xl md:text-9xl mb-6 transition-opacity duration-500 ease-in-out ${
              fade ? "fade-in" : "fade-out"
            }`}
          >
            {texts[currentText]}
          </p>
          <a
            href="#"
            className="bg-red-600 text-white px-6 py-3 m-6 rounded-full text-lg hover:bg-blue-700 transition-colors"
          >
            View Portfolio
          </a>
        </div>
      </header>

      {/* About Us Section */}
      <AboutUs />
      <Services />
      <Testimonials />
      <GetInTouch />
    </div>
  );
}

export default Landing;
