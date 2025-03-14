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
    beforeChange: (_, newIndex) => setCurrentSlide(newIndex),
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
    <div className="flex justify-center items-center bg-black text-white py-10 relative mb-12">
      <div className="w-11/12 md:w-4/5 flex flex-col md:flex-row items-center gap-6 relative">
        {/* Image for Mobile (Appears First) */}
        <div className="w-full md:w-1/2 flex justify-center">
          <motion.img
            src={slides[currentSlide].image}
            alt="Perfume"
            className="w-[300px] md:w-[500px] h-auto object-cover rounded-lg shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center text-center px-4 md:px-10">
          <motion.h2
            className="text-2xl md:text-3xl font-semibold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {slides[currentSlide].title}
          </motion.h2>

          <motion.p
            className="text-gray-300 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            "{slides[currentSlide].quote}"
          </motion.p>

          {/* Slider Navigation */}
          <div className="w-full mt-6">
            <Slider {...settings}>
              {slides.map((_, index) => (
                <div key={index}></div> // Empty divs just for navigation
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel1;
