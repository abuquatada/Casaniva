import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link
import img1 from "../assests/img1.jpg";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-10 px-4 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo Section */}
        <div className="flex justify-center md:justify-start">
          <img src={img1} alt="Skinn Logo" className="w-24" />
        </div>

        {/* Help & Information */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-3">Help & Information</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link to="/about" className="hover:text-white">
                About Us
              </Link>{" "}
              {/* Updated Link */}
            </li>
            {[
              "Help & Contact",
              "Delivery Information",
              "Track Order",
              "Cyber Security Policy",
            ].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-white">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-3">
            Sign Up To Receive Offers
          </h3>
          <div className="flex flex-col md:flex-row items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full md:w-auto px-4 py-2 bg-black border border-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
            <button className="mt-3 md:mt-0 md:ml-3 px-6 py-2 bg-white text-black font-semibold hover:bg-gray-300">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto mt-10 border-t border-gray-700 pt-6 flex flex-wrap justify-center md:justify-between items-center gap-6">
        {/* Social Media Links */}
        <div className="flex flex-wrap items-center space-x-4">
          <h3 className="text-lg font-semibold">Follow Us</h3>
          {[
            { icon: <FaFacebookF size={20} />, link: "#" },
            { icon: <FaInstagram size={20} />, link: "#" },
            { icon: <FaWhatsapp size={20} />, link: "#" },
            { icon: <FaEnvelope size={20} />, link: "#" },
          ].map(({ icon, link }, index) => (
            <a
              key={index}
              href={link}
              className="text-white hover:text-gray-400"
            >
              {icon}
            </a>
          ))}
        </div>

        {/* Copyright & Terms */}
        <div className="text-gray-400 text-sm text-center md:text-left">
          © 2025 Casaniva Limited. All Rights Reserved |
          <a href="#" className="hover:text-white">
            {" "}
            Terms & Conditions{" "}
          </a>{" "}
          |
          <a href="#" className="hover:text-white">
            {" "}
            Privacy Policy{" "}
          </a>
        </div>

        {/* Payment Icons */}
        <div className="flex flex-wrap justify-center space-x-4">
          <img
            src="https://www.skinn.in/on/demandware.static/-/Sites-Skinn-Library/default/dwd1ee5fd2/images/footer/visa-icon.svg"
            alt="Visa"
            className="w-10"
          />
          <img
            src="https://www.skinn.in/on/demandware.static/-/Sites-Skinn-Library/default/dwc0cb3dea/images/footer/payPal-icon.svg"
            alt="PayPal"
            className="w-10"
          />
          <img
            src="https://www.skinn.in/on/demandware.static/-/Sites-Skinn-Library/default/dw4e6a003b/images/footer/rupay-icon.svg"
            alt="RuPay"
            className="w-10"
          />
          <img
            src="https://www.skinn.in/on/demandware.static/-/Sites-Skinn-Library/default/dwe78b40c1/images/footer/axisbank-icon.svg"
            alt="Axis Bank"
            className="w-10"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
