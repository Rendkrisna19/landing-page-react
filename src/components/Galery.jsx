import React from "react";
import Img1 from "../assets/corosual1.jpg";
import Img2 from "../assets/corosual3.png";

const Galery = () => {
  return (
    <div className="w-full max-w-6xl mx-auto py-10 px-4 md:px-10 lg:px-20 text-center">
      <h2 className="text-2xl font-bold">Get more with our <span className="text-pink-500">deals</span></h2>

      {/* Grid Layout */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {[Img1, Img2].map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={image}
              alt={`Gallery ${index + 1}`}
              className="w-full h-60 object-cover"
            />
          </div>
        ))}
      </div>

      <p className="text-right mt-4 text-pink-600 cursor-pointer hover:underline">View All</p>
    </div>
  );
};

export default Galery;
