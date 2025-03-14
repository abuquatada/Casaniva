import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { RiRefund2Fill } from "react-icons/ri";
import { MdVerified } from "react-icons/md";
import { Link } from "react-router-dom";

const InfoSection = () => {
  return (
    <div className="bg-gray-100 py-8 px-6">
      {/* Top Icons Section */}
      <div className="flex flex-wrap justify-center md:justify-between items-center text-center gap-6 md:gap-12 border-b pb-6">
        <div className="flex items-center gap-3">
          <MdVerified className="text-3xl text-gray-700" />
          <div>
            <h3 className="font-semibold text-lg">100% ORIGINAL</h3>
            <p className="text-sm text-gray-600">
              All products are original and go through strict quality checks.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <RiRefund2Fill className="text-3xl text-gray-700" />
          <div>
            <h3 className="font-semibold text-lg">7-Day RETURN</h3>
            <p className="text-sm text-gray-600">
              Use our hassle-free method to return.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <FaShippingFast className="text-3xl text-gray-700" />
          <div>
            <h3 className="font-semibold text-lg">Free Shipping</h3>
            <p className="text-sm text-gray-600">
              Free Shipping & Returns all across India.
            </p>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="mt-6 text-gray-800">
        <h2 className="text-xl font-semibold mb-3">
          Indulge in a world of scents:{" "}
          <span className="font-bold">Perfumes for All</span>
        </h2>
        <p className="text-sm leading-relaxed">
          Explore an enchanting collection from{" "}
          <span className="font-semibold">SKINN By Titan</span> that captivates
          the senses. Our exquisite range of{" "}
          <span className="font-semibold">perfumes</span> offers an unparalleled
          sensory experience, meticulously crafted for every individual’s unique
          taste and style.
        </p>
        <p className="text-sm leading-relaxed mt-3">
          From fresh and invigorating aromas to elegant and sophisticated
          blends, our collection embraces the art of perfumery, ensuring a scent
          for every occasion and mood.
        </p>
        <p className="text-sm leading-relaxed mt-3">
          With our <span className="font-semibold">"Perfumes for All"</span>{" "}
          motto, discover a world of scents that ignite your imagination and
          allow you to express yourself through{" "}
          <span className="font-semibold">fragrance</span>. Buy your favorite{" "}
          <span className="font-semibold">perfume</span> conveniently{" "}
          <span className="font-semibold">online</span> today!
        </p>

        <div className="mt-5">
          <Link
            to="/know-more"
            className="text-black font-semibold underline hover:text-gray-700 transition-all"
          >
            KNOW MORE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
