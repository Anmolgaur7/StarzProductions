import React, { useState } from "react";
import i1 from "../Images/E1.png";
import i2 from "../Images/E2.png";
import i4 from "../Images/S1.png";
import i5 from "../Images/S2.png";
import i6 from "../Images/S3.jpg";
import i7 from "../Images/S5.png";
import i8 from "../Images/S6.png";
import i9 from "../Images/S7.png";
import image from "../Images/h2.gif";
import O1 from "../Images/o1.jpg";
import O2 from "../Images/o3.jpg";

// Array of images
const images = [i1, i2,O1,O2,i4, i5, i6, i7, i8, i9];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <header className="relative h-screen bg-gray-900">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="container mx-auto px-4 flex flex-col justify-center items-center h-full relative z-10">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 animate-fadeIn">
            Starz Productions Gallery
          </h1>
          <p className="text-gray-200 font-semibold text-xl md:text-2xl mb-6 animate-slideIn">
            Check out our amazing gallery of photoshoots and events.
          </p>
        </div>
      </header>

      <div className="flex items-center justify-center mb-6">
        <hr className="border-gray-300 flex-grow" />
        <h2 className="text-4xl font-bold mt-4 ">Gallery</h2>
        <hr className="border-gray-300 flex-grow" />
      </div>

      <div className="text-center py-8 bg-white">
        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden group cursor-pointer"
              onClick={() => openModal(image)}
            >
              {/* Setting object-cover and max height to avoid overflow */}
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-72 object-cover transform transition duration-500 group-hover:scale-110 group-hover:shadow-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-white text-lg font-semibold">View Photo</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Enlarging Image */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
            <div className="relative">
              <img
                src={selectedImage}
                alt="Enlarged View"
                className="w-auto h-auto max-h-screen max-w-full"
              />
              <button
                className="absolute top-2 right-2 text-white text-xl bg-black p-2 rounded-full"
                onClick={closeModal}
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Gallery;
