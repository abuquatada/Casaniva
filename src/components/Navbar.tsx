import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Function to close the menu when clicking a menu item
  const handleMenuClick = () => {
    setIsOpen(false); // Close mobile menu
    setDropdownOpen(false); // Close dropdown as well
  };

  return (
    <nav className="flex justify-between items-center px-6 py-4 border-b shadow-md bg-white relative z-50">
      {/* Left Section (Logo) */}
      <div className="text-2xl  tracking-wide">
        <span className="text-black">CASANIVA</span>
      </div>

      {/* Center Section (Nav Links) */}
      <ul
        className={`absolute top-16 left-0 w-full bg-white shadow-md lg:shadow-none lg:static lg:flex lg:justify-center lg:space-x-8 text-lg font-medium transition-all duration-300 ${
          isOpen ? "block p-6 space-y-4 text-center" : "hidden lg:flex"
        }`}
      >
        <li className="hover:text-gray-500 cursor-pointer">
          <Link to="/" onClick={handleMenuClick}>
            HOME
          </Link>
        </li>
        <li className="hover:text-gray-500 cursor-pointer">
          <Link to="/about" onClick={handleMenuClick}>
            ABOUT
          </Link>
        </li>

        {/* Products Dropdown */}
        <li className="relative cursor-pointer" ref={dropdownRef}>
          <button
            className="flex items-center justify-center w-full lg:w-auto hover:text-gray-500"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            aria-haspopup="true"
            aria-expanded={dropdownOpen}
          >
            PRODUCTS
            <ChevronDown size={16} className="ml-1" />
          </button>

          {/* Dropdown for Mobile & Desktop */}
          {dropdownOpen && (
            <div className="lg:absolute lg:top-full lg:left-0 lg:mt-2 lg:w-48 bg-white shadow-md rounded-md p-2">
              {[
                "Face Care",
                "Hair Care",
                "Body Care (Soaps & Cleansers)",
                "Herbal & Natural Coloring",
              ].map((item) => (
                <div
                  key={item}
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={handleMenuClick} // Close menu when clicking an item
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </li>

        <li className="hover:text-gray-500 cursor-pointer">
          <Link to="/gifting" onClick={handleMenuClick}>
            GIFTING
          </Link>
        </li>
        <li className="hover:text-gray-500 cursor-pointer">
          <Link to="/sale" onClick={handleMenuClick}>
            SALE
          </Link>
        </li>
      </ul>

      {/* Right Section (Icons) */}
      <div className="hidden lg:flex space-x-5 text-xl">
        <button className="hover:text-gray-500" aria-label="Search">
          🔍
        </button>
        <button className="hover:text-gray-500" aria-label="User">
          👤
        </button>
        <button className="relative hover:text-gray-500" aria-label="Wishlist">
          ❤️
          <span className="absolute -top-2 -right-2 bg-black text-white text-xs px-2 rounded-full">
            0
          </span>
        </button>
        <button className="relative hover:text-gray-500" aria-label="Cart">
          🛒
          <span className="absolute -top-2 -right-2 bg-black text-white text-xs px-2 rounded-full">
            0
          </span>
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className="lg:hidden text-2xl"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
    </nav>
  );
};

export default Navbar;
