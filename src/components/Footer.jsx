import React from "react";
import Logo from "../assets/logo-makanan-roti-cup-cake.png";
import FacebookIcon from "../assets/fb.png";
import InstagramIcon from "../assets/iconig.jpg";
import TiktokIcon from "../assets/tiktokicon.png";
import TwitterIcon from "../assets/iconx.png";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 mt-10 text-gray-700" id="contact">
      <div className="px-6 pt-10 max-w-screen-xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        
        {/* Kolom 1: Logo & Sosial Media */}
        <div>
          <img src={Logo} alt="Logo" className="w-20 h-20 object-contain mb-4 " />
          <div className="flex gap-3">
            <img src={FacebookIcon} alt="Facebook" className="w-8 h-8 cursor-pointer hover:opacity-75" />
            <img src={InstagramIcon} alt="Instagram" className="w-8 h-8 cursor-pointer hover:opacity-75" />
            <img src={TiktokIcon} alt="Tiktok" className="w-8 h-8 cursor-pointer hover:opacity-75" />
            <img src={TwitterIcon} alt="Twitter" className="w-8 h-8 cursor-pointer hover:opacity-75" />
          </div>
        </div>

        {/* Kolom 2: Links - Informasi */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">Information</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-pink-500 cursor-pointer transition">News</li>
            <li className="hover:text-pink-500 cursor-pointer transition">Contact Us</li>
            <li className="hover:text-pink-500 cursor-pointer transition">About</li>
            <li className="hover:text-pink-500 cursor-pointer transition">Career</li>
          </ul>
        </div>

        {/* Kolom 3: Links - Legal & Sertifikat */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
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
