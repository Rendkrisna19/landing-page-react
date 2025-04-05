import React from "react";
import Img1 from "../assets/corosual1.jpg";
import Img2 from "../assets/corosual3.png";
import BgLeft from "../assets/jamur.png"; // Background kiri
import BgRight from "../assets/lobak.png"; // Background kanan

const Galery = () => {
  return (
    <div className="relative w-full max-w-screen-xl mx-auto py-10 px-4 md:px-10 lg:px-20 text-center overflow-hidden">
      {/* Background Kiri */}
      <img
        src={BgLeft}
        alt="Background Left"
        className="absolute bottom-[-2px] left-0 md:left-[-250px] max-w-[400px] md:max-w-[600px] opacity-80 pointer-events-none hidden md:block z-[-1]"
      />

      {/* Background Kanan */}
      <img
        src={BgRight}
        alt="Background Right"
        className="absolute bottom-[-100px] right-0 md:right-[-222px] max-w-[400px] md:max-w-[600px] opacity-80 pointer-events-none hidden md:block z-[-1]"
      />

      <h2 className="text-2xl md:text-3xl font-bold">
        Get more with our <span className="text-pink-500">deals</span>
      </h2>

      {/* Grid Layout */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {[Img1, Img2].map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={image}
              alt={`Gallery ${index + 1}`}
              className="w-full h-60 md:h-72 object-cover"
            />
          </div>
        ))}
      </div>

      <p className="text-right mt-4 text-pink-600 cursor-pointer hover:underline">
        View All
      </p>
    </div>
  );
};

export default Galery;
