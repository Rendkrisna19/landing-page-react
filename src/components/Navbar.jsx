import React, { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "../assets/logo-makanan-roti-cup-cake.png"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 bg-white shadow-md z-50 p-4 border-b border-gray-300 flex justify-between items-center px-6">
      {/* Logo + Text */}
      <div className="flex items-center gap-2">
        <img src={Logo} alt="Logo" className="w-14 h-14" />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 text-sm font-semibold">
        {[
          { name: "Menu", to: "menu" },
          { name: "Promo", to: "promo" },
          { name: "Location", to: "location" },
          { name: "Contact Us", to: "contact" },
          { name: "About Us", to: "about" },
        ].map((item, index) => (
          <li key={index}>
            <Link
              to={item.to}
              smooth={true}
              duration={500}
              offset={-80} // Sesuaikan dengan tinggi navbar
              className="cursor-pointer text-pink-600 hover:text-gray-600 transition-all duration-300"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Hamburger Menu - Diberi Jarak Sedikit dari Ujung Kanan */}
      <div className="md:hidden pr-3">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg p-4 md:hidden">
          <ul className="flex flex-col gap-4 text-center">
            {[
              { name: "Menu", to: "menu" },
              { name: "Promo", to: "promo" },
              { name: "Location", to: "location" },
              { name: "Contact Us", to: "contact" },
              { name: "About Us", to: "about" },
            ].map((item, index) => (
              <li key={index}>
                <Link
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="cursor-pointer text-pink-600 hover:text-gray-600 transition-all duration-300"
                  onClick={() => setIsOpen(false)} 
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
