import React from "react";
import { FaFacebookF, FaTiktok, FaInstagram, FaXTwitter } from "react-icons/fa6";
import Logo from "../assets/logo-makanan-roti-cup-cake.png"; 

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 mt-10 text-gray-700" id="contact">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-6 px-4">
        {/* Logo & Sosial Media */}
        <div className="flex flex-col items-center md:items-start">
          <img src={Logo} alt="Logo" className="w-20 h-20 object-contain" />
          <div className="flex gap-3 mt-4">
            <FaFacebookF className="text-gray-500 hover:text-[#FF6B6B] transition text-xl cursor-pointer" />
            <FaTiktok className="text-gray-500 hover:text-[#FF6B6B] transition text-xl cursor-pointer" />
            <FaInstagram className="text-gray-500 hover:text-[#FF6B6B] transition text-xl cursor-pointer" />
            <FaXTwitter className="text-gray-500 hover:text-[#FF6B6B] transition text-xl cursor-pointer" />
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-between flex-1 text-sm gap-10">
          <ul className="space-y-2">
            <li className="hover:text-pink-500 cursor-pointer transition">News</li>
            <li className="hover:text-pink-500 cursor-pointer transition">Contact Us</li>
            <li className="hover:text-pink-500 cursor-pointer transition">About</li>
            <li className="hover:text-pink-500 cursor-pointer transition">Career</li>
          </ul>
          <ul className="space-y-2">
            <li className="hover:text-pink-500 cursor-pointer transition">Outlet Location</li>
            <li className="hover:text-pink-500 cursor-pointer transition">Halal Certificate</li>
            <li className="hover:text-pink-500 cursor-pointer transition">Terms and Conditions</li>
            <li className="hover:text-pink-500 cursor-pointer transition">Privacy Policy</li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-6 text-sm text-gray-500">
        © {new Date().getFullYear()} Fast Food. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
