import React from "react";
import MapImage from "../assets/location image.jpg"; // Ganti dengan gambar peta yang sesuai

const Location = () => {
  const cafeLatitude = 3.5952; // Ganti dengan koordinat cafe
  const cafeLongitude = 98.6722;

  const handleOpenMaps = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const mapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${latitude},${longitude}&destination=${cafeLatitude},${cafeLongitude}&travelmode=driving`;
          window.open(mapsUrl, "_blank");
        },
        (error) => {
          console.error("Error getting location: ", error);
          alert("Unable to retrieve your location. Please enable location access.");
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  return (
    <div className="text-center py-10 px-4" id="location">
      <h2 className="text-2xl font-bold">
        Our location is <span className="text-pink-600">always near to you</span>
      </h2>
      <p className="text-sm text-gray-600 mt-2">
        Find the best route to our cafe!
      </p>

      <button
        onClick={handleOpenMaps}
        className="bg-pink-600 text-white px-6 py-2 mt-4 rounded-lg shadow-lg hover:bg-pink-700 transition-all"
      >
        Get Directions
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
