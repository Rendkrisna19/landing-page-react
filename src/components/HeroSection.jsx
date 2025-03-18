import React from "react";
import Img1 from "../assets/corosual3.png"; // Ganti sesuai gambar yang ingin ditampilkan

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center px-4 md:px-10 lg:px-20 pt-40 md:pt-42 ">
      {/* Hero Image */}
      <div className="w-full max-w-6xl mx-auto h-[80vh] md:h-[85vh] rounded-lg overflow-hidden shadow-lg relative mb-20">
        {/* Gambar */}
        <img
          src={Img1}
          alt="Hero Banner"
          className="w-full h-full object-cover"
        />
        
        {/* Overlay & Text */}
        {/* <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <h2 className="text-white text-2xl md:text-4xl font-bold text-center px-4">
            Makanan lezat itu <span className="text-pink-500">nyata</span>
          </h2>
        </div> */}
      </div>
    </div>
  );
};

export default HeroSection;
