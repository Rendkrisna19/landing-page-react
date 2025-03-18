import React, { useState, useEffect } from "react";
import { FaCircle } from "react-icons/fa";
import Img1 from "../assets/corosual1.jpg"; 
import Img2 from "../assets/corosual3.png";
import Img3 from "../assets/corosual4.png";

const slides = [
  { image: Img1, text: "Makanan lezat itu nyata" },
  { image: Img2, text: "daftar menu yang enak dan Terbaik" },
  { image: Img3, text: "Layanan Cafe yang sangat ramah" },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Ganti slide setiap 5 detik

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden pt-20 md:pt-24 text-modifikasi">
      {/* Slides */}
      <div className="w-full h-full flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0 h-full relative">
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Text di tengah */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/50">
              <h2 className="text-white text-xl md:text-3xl font-bold text-center">
                {slide.text}
              </h2>
            </div>
          </div>
        ))}
      </div>

      {/* Indicator Bulat */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <FaCircle
            key={index}
            className={`cursor-pointer transition-all duration-300 ${
              currentSlide === index ? "text-white opacity-100" : "text-gray-400 opacity-50"
            }`}
            size={10}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
