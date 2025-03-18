import React, { useState, useEffect } from "react";
import { FaCircle } from "react-icons/fa";
import Img1 from "../assets/menu1.jpg";
import Img2 from "../assets/menu2.jpg";
import Img3 from "../assets/menu3.jpg";
import Img4 from "../assets/menu4.jpg";
import Img5 from "../assets/burger.jpg";
import Img6 from "../assets/menu6.jpg";

const menuItems = [
  { image: Img1, title: "Nasi Goreng", description: "Nasi goreng spesial dengan topping lezat." },
  { image: Img2, title: "Sate Ayam", description: "Sate ayam bumbu kacang khas Indonesia." },
  { image: Img3, title: "Mie Ayam", description: "Mie ayam dengan kuah gurih dan ayam cincang." },
  { image: Img4, title: "Ayam Geprek", description: "Ayam goreng renyah dengan sambal pedas." },
  { image: Img5, title: "Burger", description: "Burger daging sapi dengan keju dan sayuran segar." },
  { image: Img6, title: "Pizza", description: "Pizza dengan topping melimpah dan keju mozzarella." },
];

const FavoritMenu = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerSlide = window.innerWidth < 768 ? 1 : 3; // HP Grid 1, Desktop Grid 3
  const totalSlides = Math.ceil(menuItems.length / itemsPerSlide);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides); // Looping infinite
    }, 5000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <div className="w-full max-w-6xl mx-auto text-center py-10 px-4 md:px-8" id="menu">
      <h2 className="text-2xl font-bold mb-6">Favorite Menu</h2>

      {/* Carousel Container */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
            <div key={slideIndex} className="min-w-full grid grid-cols-1 md:grid-cols-3 gap-6">
              {menuItems
                .slice(slideIndex * itemsPerSlide, slideIndex * itemsPerSlide + itemsPerSlide)
                .map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center bg-white border border-gray-300 rounded-xl shadow-lg p-4"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-40 h-40 rounded-full object-cover shadow-md"
                    />
                    <h3 className="mt-4 font-semibold text-lg">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
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
    </div>
  );
};

export default FavoritMenu;
