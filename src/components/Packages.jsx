import React from "react";
import aboutImage from "../Images/E2.png";
import W1 from "../Images/w1.jpg"; // Replace with your image path // Replace with your image path

const PhotographyPackage = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex items-center justify-center mb-6">
        <hr className="border-gray-300 flex-grow" />
        <h2 className="text-4xl font-bold m-6">Wedding Events</h2>{" "}
        {/* Increased text size */}
        <hr className="border-gray-300 flex-grow" />
      </div>

      {/* Wedding Events Package Section */}
      <div className="flex flex-col lg:flex-row items-center">
        {/* Left Section: Package Details */}
        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
          <div className="bg-white rounded-lg shadow-lg p-8 transition-transform duration-300 hover:scale-105">
            <h3 className="text-xl font-bold mb-4 border-b-2 border-gray-300 pb-2">
              For Haldi
            </h3>
            <ul className="mb-6 text-gray-700 text-base">
              <li>• Traditional Photography - Bride (Soft Copies of Event)</li>
              <li>
                • Traditional Videography (Min 30 - 60 minutes shots video)
              </li>
              <li>• Total Work Duration 4 Hours</li>
            </ul>

            <h3 className="text-xl font-bold mb-4 border-b-2 border-gray-300 pb-2">
              For Engagement
            </h3>
            <ul className="mb-6 text-gray-700 text-base">
              <li>• Pre-Engagement Shoot</li>
              <li>• Candid Photography (With Soft Copies)</li>
              <li>• Traditional Videography (Min 30 - 60 minutes)</li>
              <li>• Total Work Duration 4 - 6 Hours</li>
            </ul>

            <h3 className="text-xl font-bold mb-4 border-b-2 border-gray-300 pb-2">
              For Pre-Wedding
            </h3>
            <ul className="mb-6 text-gray-700 text-base">
              <li>• Romantic Photoshoot</li>
              <li>• Location-based Shoots</li>
              <li>• Video Highlights of the Day</li>
              <li>• Total Work Duration 4 - 8 Hours</li>
            </ul>

            <h3 className="text-xl font-bold mb-4 border-b-2 border-gray-300 pb-2">
              For Wedding
            </h3>
            <ul className="mb-6 text-gray-700 text-base">
              <li>• Traditional Photography (With Soft Copies)</li>
              <li>• Candid Photography (With Soft Copies)</li>
              <li>
                • Traditional Videography (Min 60 - 90 minutes shots + 3 - 5
                minutes highlights)
              </li>
              <li>• Total Work Duration 6 - 8 Hours</li>
            </ul>

            <h3 className="text-xl font-bold mb-4 border-b-2 border-gray-300 pb-2">
              Photo Album
            </h3>
            <ul className="text-gray-700 text-base">
              <li>• One Album</li>
              <li>• Album NT THICK GLOSSY PAPER, size 12" x 36"</li>
              <li>• Max 250 Photos. 30 Pages</li>
            </ul>
          </div>
        </div>

        {/* Right Section: Image */}
        {/* Right Section: Image */}
        <div className="lg:w-1/2 w-full flex justify-center">
          <img
            src={W1}
            alt="Bride"
            className="rounded-lg shadow-lg object-cover w-full h-[400px] lg:h-[500px] transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>

      {/* Other Events Package Section */}
      <div className="flex items-center justify-center mb-6 mt-10">
        <hr className="border-gray-300 flex-grow" />
        <h2 className="text-4xl font-bold m-6">Other Events</h2>{" "}
        {/* Increased text size */}
        <hr className="border-gray-300 flex-grow" />
      </div>

      <div className="flex flex-col lg:flex-row items-center">
        {/* Left Section: Package Details */}
        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
          <div className="bg-white rounded-lg shadow-lg p-8 transition-transform duration-300 hover:scale-105">
            <h3 className="text-xl font-bold mb-4 border-b-2 border-gray-300 pb-2">
              For Corporate Events
            </h3>
            <ul className="mb-6 text-gray-700 text-base">
              <li>• Professional Photography for Corporate Functions</li>
              <li>• Event Coverage (Min 4 - 8 Hours)</li>
              <li>• Video Highlights and Edits</li>
              <li>• Total Work Duration 4 - 8 Hours</li>
            </ul>

            <h3 className="text-xl font-bold mb-4 border-b-2 border-gray-300 pb-2">
              For Birthday Parties
            </h3>
            <ul className="mb-6 text-gray-700 text-base">
              <li>• Candid Photography (With Soft Copies)</li>
              <li>• Thematic Photoshoots</li>
              <li>• Event Highlights (Video)</li>
              <li>• Total Work Duration 4 - 6 Hours</li>
            </ul>

            <h3 className="text-xl font-bold mb-4 border-b-2 border-gray-300 pb-2">
              For Other Celebrations
            </h3>
            <ul className="text-gray-700 text-base">
              <li>• Family Gatherings and Anniversaries</li>
              <li>• Custom Packages Available</li>
              <li>• Total Work Duration Flexible</li>
            </ul>
          </div>
        </div>

        {/* Right Section: Image for Other Events */}
        <div className="lg:w-1/2 w-full flex justify-center">
          <img
            src={aboutImage}
            alt="Other Events"
            className="rounded-lg shadow-lg object-cover w-full h-80 lg:h-96 transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default PhotographyPackage;
