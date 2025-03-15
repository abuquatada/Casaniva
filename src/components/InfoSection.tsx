import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { RiRefund2Fill } from "react-icons/ri";
import { MdVerified } from "react-icons/md";
import { Link } from "react-router-dom";

const benefits = [
  {
    icon: (
      <MdVerified className="text-3xl text-gray-700" aria-label="Verified" />
    ),
    title: "100% ORIGINAL",
    description: "All products are original",
  },
  {
    icon: (
      <RiRefund2Fill className="text-3xl text-gray-700" aria-label="Refund" />
    ),
    title: "7-Day RETURN",
    description: "Use our hassle-free method to return.",
  },
  {
    icon: (
      <FaShippingFast
        className="text-3xl text-gray-700"
        aria-label="Shipping"
      />
    ),
    title: "Free Shipping",
    description: "Free Shipping & Returns all across India.",
  },
];

const InfoSection = () => {
  return (
    <div className="bg-gray-100 py-8 px-6">
      {/* Top Icons Section */}
      <div className="flex flex-wrap justify-center md:justify-between items-center text-center gap-6 md:gap-12 border-b pb-6">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex items-center gap-3 text-center md:text-left"
          >
            {benefit.icon}
            <div>
              <h3 className=" text-lg">{benefit.title}</h3>
              <p className="text-sm text-gray-600">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Description Section */}
      <div className="mt-6 text-gray-800">
        <h2 className="text-xl mb-3 text-left">| OUR PROMISE |</h2>
        <p className="text-sm leading-relaxed text-left">
          We don’t just create skincare; we create experiences that uplift,
          rejuvenate, and empower. Whether it’s a deeply hydrating moisturizer,
          a glow-boosting serum, or a refreshing rice scrub, each product is
          made to bring out your skin’s natural radiance.
        </p>
        <h3 className=" text-lg mt-3 text-left">
          GLOW NATURALLY WITH CASANIVA
        </h3>
        <p className="text-sm text-left leading-relaxed">
          Explore our collection & experience the beauty of pure skincare.
        </p>

        {/* Know More Button */}
        <div className="mt-5 text-left">
          <Link
            to="/about"
            className="text-black underline hover:text-gray-700 transition-all"
            aria-label="Learn more about Casaniva skincare"
          >
            KNOW MORE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
