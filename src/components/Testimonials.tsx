import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

const testimonials = [
  {
    id: 1,
    name: "Babun S.",
    date: "12/24/24",
    review: "Good 👍😊",
    rating: 5,
  },
  {
    id: 2,
    name: "Pavankumar N.",
    date: "12/21/24",
    review: "Good product. Timely delivery.",
    rating: 5,
  },
  {
    id: 3,
    name: "Rajib C.",
    date: "12/16/24",
    review:
      "People even offer you discounts for sorting products at the cart. Fast shipping, nice packaging, and great product. It's a winning combination. Great work, Team!",
    rating: 5,
  },
];

const Testimonials: React.FC = () => {
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <div className="py-10 px-4 md:px-12 lg:px-24 text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">TESTIMONIALS</h2>

      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="text-orange-500" />
          ))}
          <span className="text-gray-600 text-lg">138 reviews</span>
        </div>
        <a href="#" className="text-blue-600 hover:underline text-lg">
          See All Reviews
        </a>
      </div>

      <div className="relative">
        <Slider ref={sliderRef} {...settings}>
          {testimonials.map((item) => (
            <div key={item.id} className="p-4">
              <div className="border rounded-lg shadow-md p-6 text-left bg-white">
                <p className="text-gray-500 text-sm">{item.date}</p>
                <h3 className="text-lg font-semibold mt-1">
                  {item.name}{" "}
                  <span className="text-blue-500">• Verified Buyer</span>
                </h3>
                <div className="flex items-center my-2">
                  {[...Array(item.rating)].map((_, i) => (
                    <FaStar key={i} className="text-orange-500" />
                  ))}
                </div>
                <p className="text-lg font-medium text-gray-800">
                  {item.review}
                </p>
              </div>
            </div>
          ))}
        </Slider>

        {/* Custom Navigation Buttons with Functionality */}
        <button
          aria-label="Previous testimonial"
          onClick={() => sliderRef.current?.slickPrev()}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-blue-600 text-3xl z-10"
        >
          <BsArrowLeftCircle />
        </button>
        <button
          aria-label="Next testimonial"
          onClick={() => sliderRef.current?.slickNext()}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-blue-600 text-3xl z-10"
        >
          <BsArrowRightCircle />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
