import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Chefs", path: "/chefs" },
  ];

  const menuItems = [
    { name: "Fast Food", path: "/fast-food" },
    { name: "Casual Dining", path: "/casual-dining" },
    { name: "Mains", path: "/mains" },
    { name: "Beverages", path: "/beverages" },
    { name: "Desserts", path: "/desserts" },
    { name: "Cafés & Bakeries", path: "/cafes-bakeries" },
    { name: "Starters", path: "/starts" },
  ];

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const whatsappNumber = "+1234567890"; // ← YOUR NUMBER!
  const whatsappMessage = "Hi! I'd like to order from Flavor Haven menu! 🍔";

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleWhatsApp = () => {
    const whatsappURL = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappURL, "_blank");
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Navigation Bar */}
      <nav className="w-full px-2 sm:px-4 lg:px-8 py-3 sm:py-4 bg-white shadow-sm z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="text-xl sm:text-2xl lg:text-3xl font-bold">
            <span className="text-black">Flavor</span>
            <span className="text-yellow-500">Haven</span>
          </div>

          {/* Desktop Navigation (lg and up) */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-black hover:text-yellow-500 transition duration-300"
              >
                {item.name}
              </Link>
            ))}

            {/* Menu Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className="flex items-center space-x-1 text-black hover:text-yellow-500 transition duration-300"
              >
                <span>Menu</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                className={`absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50 overflow-hidden transition-all duration-300 ${
                  isDropdownOpen
                    ? "opacity-100 translate-y-0 max-h-96"
                    : "opacity-0 -translate-y-2 max-h-0"
                }`}
              >
                {menuItems.map((item, index) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="block px-4 py-3 text-black hover:bg-yellow-50 transition duration-200"
                    style={{
                      transitionDelay: isDropdownOpen ? `${index * 50}ms` : "0ms",
                    }}
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <button
              onClick={handleWhatsApp}
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-2 rounded-lg transition duration-300 whitespace-nowrap"
            >
              Order Now
            </button>
          </div>

          {/* Tablet Navigation (md to lg) */}
          <div className="hidden md:flex lg:hidden items-center space-x-4">
            <button
              onClick={handleWhatsApp}
              className="bg-yellow-500 text-black font-semibold px-4 py-2 rounded-lg"
            >
              Order
            </button>
            <button className="text-2xl" onClick={toggleMobileMenu}>
              ☰
            </button>
          </div>

          {/* Mobile Navigation (up to md) */}
          <button className="md:hidden text-2xl" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-40 flex flex-col">
          <div className="p-4 border-b flex justify-between items-center">
            <div className="text-2xl font-bold">
              <span className="text-black">Flavor</span>
              <span className="text-yellow-500">Haven</span>
            </div>
            <button onClick={toggleMobileMenu} className="text-2xl">
              ✕
            </button>
          </div>

          <div className="flex-1 py-4 space-y-2 px-4 overflow-y-auto">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block py-3 px-4 text-lg hover:bg-yellow-50 rounded"
                onClick={toggleMobileMenu}
              >
                {item.name}
              </Link>
            ))}
            <div className="border-t pt-4">
              <div className="font-semibold py-3 px-4">Menu</div>
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block py-3 px-4 text-base hover:bg-yellow-50 rounded"
                  onClick={toggleMobileMenu}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="p-4 bg-yellow-500">
            <button
              onClick={handleWhatsApp}
              className="w-full py-4 text-black font-semibold text-lg flex items-center justify-center space-x-2"
            >
              {/* ✅ ICON REMOVED HERE */}
              Order Now
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;