import React, { useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel1 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  const slides = [
    {
      title: "Hair care",
      image:
        "https://www.skinn.in/on/demandware.static/-/Sites-Skinn-Library/default/dw9e9fb0b1/images/homepage/perfume.png",
      quote: "The way you smell is just as important as the way you dress.",
    },
    {
      title: "Body care",
      image:
        "https://www.skinn.in/on/demandware.static/-/Sites-Skinn-Library/default/dwecf28205/images/homepage/glass-flower.png",
      quote:
        "A perfume is like a signature, a way to leave your mark wherever you go.",
    },
  ];

  return (
    <div className="flex justify-center items-center bg-black text-white py-10 relative mb-[120px]">
      <div className="w-11/12 md:w-4/5 flex flex-col md:flex-row items-center gap-4 relative">
        {/* Left Image */}
        <div className="md:w-1/2 relative h-[500px] overflow-visible">
          <motion.img
            src={slides[currentSlide].image}
            alt="Perfume"
            className="w-[611px] h-[665px] object-cover rounded-lg shadow-lg absolute bottom-[-150px] left-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 p-10 rounded-lg shadow-lg flex flex-col justify-center text-center max-w-md">
          {/* Animated Heading (No Repetition) */}
          <motion.h2
            className="text-3xl font-semibold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {slides[currentSlide].title}
          </motion.h2>

          {/* Animated Quote (No Repetition) */}
          <motion.p
            className="text-gray-300 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            "{slides[currentSlide].quote}"
          </motion.p>

          {/* Hidden Slider for Navigation */}
          <Slider {...settings}>
            {slides.map((_, index) => (
              <div key={index}></div> // Empty divs just for navigation
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Carousel1;
