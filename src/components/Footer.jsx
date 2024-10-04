import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-12 flex flex-col md:flex-row justify-between items-start transition-all duration-300 ease-in-out w-full">
      {/* Main Footer Sections */}
      <div className="flex flex-col md:flex-row justify-between w-full space-y-8 md:space-y-0 md:space-x-8">
        {/* Contact Information */}
        <div className="flex flex-col w-full md:w-1/4">
          <h2 className="text-2xl font-bold mb-4 border-b-2 border-red-500 pb-2">Contact Us</h2>
          <p className="mb-2">Email:</p>
          <a href="mailto:support@starzproductions.com" className="hover:text-red-400 transition duration-200">
            Starzproductionofficial@gmail.com
          </a>
          <p className="mb-2 mt-2">Phone:</p>
          <a href="tel:+917208659598" className="hover:text-red-400 transition duration-200">
            +91 7590088592
          </a>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col w-full md:w-1/4">
          <h2 className="text-2xl font-bold mb-4 border-b-2 border-red-500 pb-2">Quick Links</h2>
          <ul className="space-y-2">
            {["About Us", "Pricing", "All Galleries", "Protected Gallery", "Contact Us"].map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-red-400 transition duration-200">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Photoshoots */}
        <div className="flex flex-col w-full md:w-1/4">
          <h2 className="text-2xl font-bold mb-4 border-b-2 border-red-500 pb-2">Photoshoots</h2>
          <ul className="space-y-2">
            {["Engagement", "Pre-Wedding", "Wedding", "Events"].map((shoot) => (
              <li key={shoot}>
                <a href="#" className="hover:text-red-400 transition duration-200">{shoot}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Subscription */}
        <div className="flex flex-col w-full md:w-1/4">
          <h2 className="text-2xl font-bold mb-4 border-b-2 border-red-500 pb-2">Have a Question?</h2>
          <p className="mb-4">Just enter your email, and we will contact you soon.</p>
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
    </footer>
  );
};

export default Footer;
