import React from "react";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section>
      <div className="bg-gray-100 bg-opacity-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-black animate-fadeIn">
            Get in Touch
          </h2>

          {/* Contact Card */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            {/* Image and Info */}
            <div className="w-full md:w-1/2 bg-white shadow-lg rounded-lg overflow-hidden animate-slideIn">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Don't Hesitate.</h3>
                <p className="text-gray-600 mb-4">
                  Contact me if you have any questions or concerns. I'll be happy
                  to make a cool shot or process your raw footage.
                </p>
                <p className="text-gray-800 font-semibold">
                Wedding Videography & Photography || STARZ PRODUCTIN ||, Shop No. 27 Ground Floor, opposite Pizza planet, 9A, Sector 9, Chandigarh, 160009
                </p>
                <p className="text-gray-800">Email: Starzproductionofficial@gmail.com</p>
                <p className="text-gray-800 mb-4">Call: +91 7590088592</p>

                {/* Social Links */}
                <div className="flex gap-4 mt-4">
                  <Link to="https://www.instagram.com/starz__production?utm_source=qr&igsh=MTRpb21pNHdoMGR1MA==" className="text-pink-600 text-2xl">
                    <FaInstagram />
                  </Link>
                  <a href="https://www.youtube.com/" className="text-red-600 text-2xl">
                    <FaYoutube />
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="w-full md:w-1/2 bg-white shadow-lg rounded-lg p-6 animate-fadeIn delay-500">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">
                Drop Us a Line
              </h3>
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:border-pink-500"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:border-pink-500"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:border-pink-500"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Phone No"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:border-pink-500"
                    required
                  />
                </div>
                <textarea
                  placeholder="I would like to discuss"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:border-pink-500 mb-4"
                  rows="4"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 transition-all duration-300"
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>

          {/* Google Map Embed */}
          <div className="mt-8 animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-black animate-fadeIn">
            You can meet us at
          </h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d109727.36366578589!2d76.71190777766931!3d30.747060064837147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x390fed7da1b9b193%3A0xeff6fde3905a966b!2sShop%20No.%2027%20Ground%20Floor%2C%20opposite%20Pizza%20planet%2C%209A%2C%20Sector%209%2C%20Chandigarh%2C%20160009!3m2!1d30.747086099999997!2d76.79430909999999!5e0!3m2!1sen!2sin!4v1728137956814!5m2!1sen!2sin"
              width="100%" // Responsive width
              height="450" // Fixed height
              title="Google Maps" // Title for screen readers
              style={{ border: 0 }} // No border
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-lg" // Style to make it look nice
            ></iframe>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-10  items-center bg-gray-300 py-10 px-8 animate-fadeIn">
        <h1 className="text-2xl font-semibold text-gray-800">
        Are You Ready To Capture Your Memories...?
        </h1>
       </div>
    </section>
  );
};

export default Contact;
