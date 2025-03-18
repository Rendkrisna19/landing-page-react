import React, { useState, useEffect } from "react";
import { FaCircle } from "react-icons/fa";
import Img1 from "../assets/corosual1.jpg";
import Img2 from "../assets/corosual3.png";
import Img3 from "../assets/corosual4.png";
import Img4 from "../assets/menu1.jpg";
import Img5 from "../assets/menu2.jpg";
import Img6 from "../assets/menu6.jpg";

const galleryImages = [Img1, Img2, Img3, Img4, Img5, Img6];

const Galery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerSlide = window.innerWidth < 768 ? 1 : 2; // HP Grid 1, Desktop Grid 2
  const totalSlides = Math.ceil(galleryImages.length / itemsPerSlide);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000); // Ganti slide setiap 5 detik

    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <div className="w-full max-w-6xl mx-auto py-10 text-center">
      <h2 className="text-2xl font-bold">Get more with our deals</h2>

      {/* Carousel Container */}
      <div className="relative overflow-hidden mt-6">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
            <div key={slideIndex} className="min-w-full grid grid-cols-1 md:grid-cols-2 gap-6">
              {galleryImages
                .slice(slideIndex * itemsPerSlide, slideIndex * itemsPerSlide + itemsPerSlide)
                .map((image, index) => (
                  <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
                    <img
                      src={image}
                      alt={`Gallery ${index + 1}`}
                      className="w-full h-60 object-cover transition-all duration-500 ease-in-out group-hover:brightness-100 brightness-75"
                    />
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>

      {/* Indicator Bulat */}
      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <FaCircle
            key={index}
            className={`cursor-pointer transition-all duration-300 ${
              currentSlide === index ? "text-pink-600 opacity-100" : "text-gray-400 opacity-50"
            }`}
            size={10}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>

      <p className="text-right mt-4 text-pink-600 cursor-pointer hover:underline">View All</p>
    </div>
  );
};

export default Galery;
