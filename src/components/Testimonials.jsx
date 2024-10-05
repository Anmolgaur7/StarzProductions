import React, { useEffect, useState } from "react";

const testimonialsData = [
  {
    name: "Neha Belidage",
    date: "2 years ago",
    rating: 5,
    text: "Prince is a hardworking and talented guy and he will always ensure you are comfortable during shoots. Good quality work with value for money! Definitely.",
    img: "https://via.placeholder.com/50",
  },
  {
    name: "Amar Vhadade",
    date: "2 years ago",
    rating: 5,
    text: "Excellent Photography Service & the best quality of pictures! Overall I am totally satisfied with Starz Productions. He is very professional and will make the best.",
    img: "https://via.placeholder.com/50",
  },
  {
    name: "Mrunmayee Dhupkar",
    date: "2 years ago",
    rating: 5,
    text: "Starz Productions is just outstanding! Pictures taken by him are fabulous. I am in love with his work ❤️",
    img: "https://via.placeholder.com/50",
  },
  {
    name: "Rajesh Kumar",
    date: "1 year ago",
    rating: 5,
    text: "The team at Starz Productions made our wedding unforgettable. Their attention to detail and professionalism were top-notch!",
    img: "https://via.placeholder.com/50",
  },
  {
    name: "Sita Devi",
    date: "1 year ago",
    rating: 5,
    text: "I loved the maternity shoot! Prince made me feel so comfortable and the photos turned out beautiful.",
    img: "https://via.placeholder.com/50",
  },
  {
    name: "Anil Sharma",
    date: "6 months ago",
    rating: 5,
    text: "I highly recommend Starz Productions! They captured my event perfectly and the quality was exceptional.",
    img: "https://via.placeholder.com/50",
  },
  {
    name: "Pooja Gupta",
    date: "8 months ago",
    rating: 5,
    text: "Prince's creativity and professionalism shine through in every shot. I couldn't be happier with the results!",
    img: "https://via.placeholder.com/50",
  },
  {
    name: "Ravi Verma",
    date: "5 months ago",
    rating: 5,
    text: "I was impressed by the entire process from start to finish. The photos are breathtaking!",
    img: "https://via.placeholder.com/50",
  },
  {
    name: "Simran Kaur",
    date: "3 months ago",
    rating: 5,
    text: "The best photography experience I've ever had! The team made everything so enjoyable.",
    img: "https://via.placeholder.com/50",
  },
  {
    name: "Karan Singh",
    date: "1 month ago",
    rating: 5,
    text: "Starz Productions exceeded my expectations! Their attention to detail is unmatched.",
    img: "https://via.placeholder.com/50",
  },
];

function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(1);

  // Move to the next testimonial every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % Math.ceil(testimonialsData.length / itemsToShow));
    }, 5000);

    return () => clearInterval(interval);
  }, [itemsToShow]);

  // Update the number of testimonials to show based on window size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsToShow(1);
      } else {
        setItemsToShow(3);
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Get the testimonials to display based on the current index
  const getCurrentTestimonials = () => {
    const start = current * itemsToShow;
    return testimonialsData.slice(start, start + itemsToShow);
  };

  const displayedTestimonials = getCurrentTestimonials();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        {/* Testimonials Header */}
        <div className="flex items-center justify-center mb-6">
          <hr className="border-gray-300 flex-grow" />
          <h2 className="text-4xl font-bold m-6">Testimonials</h2>
          <hr className="border-gray-300 flex-grow" />
        </div>

        {/* Testimonials Slider */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${current * (100 / itemsToShow)}%)` }}
          >
            {testimonialsData.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-100 p-6 rounded-lg shadow-lg w-full md:w-1/3 flex-shrink-0"
              >
                <div className="flex items-center justify-center mb-4">
                  {/* <img src={testimonial.img} alt={testimonial.name} className="rounded-full w-12 h-12 mr-3" /> */}
                </div>
                <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                <p className="text-gray-600 mb-2">{testimonial.date}</p>
                <div className="flex justify-center mb-2">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <span key={starIndex} className="text-yellow-500">★</span>
                  ))}
                </div>
                <p className="text-gray-600">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
