import React from "react";

const Location = () => {
  const handleOpenMaps = () => {
    window.open("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127419.09354200462!2d98.41880055148872!3d3.6224920443618904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3030d60114970f8d%3A0x3039d80b220cbd0!2sBinjai%2C%20Kota%20Binjai%2C%20Sumatera%20Utara!5e0!3m2!1sid!2sid!4v1742306328602!5m2!1sid!2sid", "_blank");
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
      {/* Embed Google Maps */}
      <div className="w-full max-w-4xl mx-auto mt-6 shadow-lg rounded-lg overflow-hidden">
        <iframe
          className="w-full h-60 md:h-80"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127419.09354200462!2d98.41880055148872!3d3.6224920443618904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3030d60114970f8d%3A0x3039d80b220cbd0!2sBinjai%2C%20Kota%20Binjai%2C%20Sumatera%20Utara!5e0!3m2!1sid!2sid!4v1742306328602!5m2!1sid!2sid"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Location;
