import React from "react";
import S5 from "../Images/S5.png";
import S6 from "../Images/S6.png";
import S7 from "../Images/S7.png";

function AboutUs() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        {/* About Us Header with Lines */}
        <div className="flex items-center justify-center mb-6">
          <hr className="border-gray-300 flex-grow" />
          <h2 className="text-4xl font-bold m-6">About Us</h2> {/* Increased text size */}
          <hr className="border-gray-300 flex-grow" />
        </div>

        {/* Text Section */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Text Content */}
          <div className="md:w-1/2 text-left">
            <h3 className="text-3xl font-semibold italic mb-4"> {/* Increased text size */}
              Because every picture tells a story, let me help you tell yours.
            </h3>
            <p className="text-gray-600 text-lg mb-6 font-medium"> {/* Increased text size */}
              Starz Production is a well-known production house that ensures
              your moments are captured with elegance. From weddings and engagements, we are here to make every occasion memorable. {/* Removed maternity shoots */}
            </p>
            <p className="text-gray-600 text-lg mb-6 font-medium"> {/* Increased text size */}
              We offer clear pricing structures with pre-defined goals and timelines, making us the right choice for your special events.
            </p>
            <h1 className="underline text-black text-lg"> {/* Increased text size */}
              Read More
            </h1>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 grid grid-cols-2 gap-4 mt-10 md:mt-0">
            <div className="w-full h-64 bg-white shadow-lg rounded-lg overflow-hidden animate-slideIn">
              <img src={S7} alt="Event 1" className="w-full h-full object-cover" />
            </div>
            <div className="w-full h-64 bg-white shadow-lg rounded-lg overflow-hidden animate-slideIn">
              <img src={S6} alt="Event 2" className="w-full h-full object-cover" />
            </div>
            <div className="col-span-2 w-full h-72 bg-white shadow-lg rounded-lg overflow-hidden animate-fadeIn">
              <img src={S5} alt="Event 3" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
