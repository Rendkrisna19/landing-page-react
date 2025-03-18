import React from "react";
import MapImage from "../assets/location image.jpg"; // Ganti dengan gambar peta yang sesuai

const Location = () => {
  const handleOpenMaps = () => {
    window.open(
      "https://www.google.com/maps?q=Binjai,+Kota+Binjai,+Sumatera+Utara&hl=id&z=12",
      "_blank"
    );
  };

  return (
    <div className="text-center py-10 px-4" id="location">
      <h2 className="text-2xl font-bold">
        Our location is <span className="text-pink-600">always near to you</span>
      </h2>
      <p className="text-sm text-gray-600 mt-2">Find the nearest store in your city</p>

      <button
        onClick={handleOpenMaps}
        className="bg-pink-600 text-white px-6 py-2 mt-4 rounded-lg shadow-lg hover:bg-pink-700 transition-all"
      >
        View Location
      </button>

      {/* Gambar Maps */}
      <div className="w-full max-w-4xl mx-auto mt-6 shadow-lg rounded-lg overflow-hidden">
        <img
          src={MapImage}
          alt="Location Map"
          className="w-full h-60 md:h-80 object-cover"
        />
      </div>
    </div>
  );
};

export default Location;
