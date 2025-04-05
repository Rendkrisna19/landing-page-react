import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Import gambar (bebas diganti dengan gambar real per cabang)
import StoreA from "../assets/Solaria.png";
import StoreB from "../assets/corosual1.jpg";
import StoreC from "../assets/corosual3.png";
import StoreD from "../assets/fb.png";
import StoreE from "../assets/iconig.jpg";
import StoreF from "../assets/iconx.png";
import StoreG from "../assets/jamur.png";
import StoreH from "../assets/lobak.png";
import StoreI from "../assets/iconx.png";

// Data cabang dengan koordinat lat & lng (dummy)
const allStores = [
  { name: "Solaria Mall A", address: "Jl. Sudirman No.1, Jakarta", image: StoreA, lat: -6.2146, lng: 106.8451 },
  { name: "Solaria Mall B", address: "Jl. Thamrin No.2, Jakarta", image: StoreB, lat: -6.2088, lng: 106.8456 },
  { name: "Solaria Mall C", address: "Jl. Gatot Subroto No.3, Jakarta", image: StoreC, lat: -6.2300, lng: 106.8133 },
  { name: "Solaria Mall D", address: "Jl. Asia Afrika No.4, Bandung", image: StoreD, lat: -6.9175, lng: 107.6191 },
  { name: "Solaria Mall E", address: "Jl. Merdeka No.5, Surabaya", image: StoreE, lat: -7.2575, lng: 112.7521 },
  { name: "Solaria Mall F", address: "Jl. Diponegoro No.6, Semarang", image: StoreF, lat: -6.9849, lng: 110.4188 },
  { name: "Solaria Mall G", address: "Jl. Slamet Riyadi No.7, Solo", image: StoreG, lat: -7.5666, lng: 110.8166 },
  { name: "Solaria Mall H", address: "Jl. Ahmad Yani No.8, Medan", image: StoreH, lat: 3.5952, lng: 98.6722 },
  { name: "Solaria Mall I", address: "Jl. Panglima Polim No.9, Bali", image: StoreI, lat: -8.4095, lng: 115.1889 },
];

// Fungsi hitung jarak dua titik koordinat (dalam KM)
function getDistance(lat1, lon1, lat2, lon2) {
  const toRad = (x) => (x * Math.PI) / 180;
  const R = 6371; // Radius Bumi km
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

export default function Thumnail() {
  const [nearbyStores, setNearbyStores] = useState([]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const userLat = position.coords.latitude;
        const userLng = position.coords.longitude;

        const filtered = allStores
          .map((store) => {
            const distance = getDistance(userLat, userLng, store.lat, store.lng);
            return { ...store, distance };
          })
          .filter((store) => store.distance <= 5)
          .sort((a, b) => a.distance - b.distance)
          .slice(0, 6);

        setNearbyStores(filtered);
      });
    }
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-6 pt-40 md:pt-28 mb-4">
      <h2 className="text-3xl font-bold text-center text-gray-800">
        Cabang <span className="text-pink-700 mb-4">Terdekat</span>
      </h2>

      {nearbyStores.length === 0 ? (
        <p className="text-center mt-6 text-gray-500">Sedang mencari cabang terdekat Anda...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-6">
          {nearbyStores.map((store, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white p-4 shadow-lg shadow-pink-200 border border-pink-600 
                       transition-all duration-300 
                      hover:bg-pink-600 hover:text-white rounded-xl"
            >
              <img
                src={store.image}
                alt={store.name}
                className="w-full h-40 object-cover rounded-md mb-3 transition-all duration-300"
              />
              <h3 className="text-xl font-semibold transition-all duration-300">{store.name}</h3>
              <p className="text-gray-500 text-sm mt-1 transition-all duration-300">{store.address}</p>
              <p className="text-xs text-gray-400 mt-1">
                ± {store.distance.toFixed(2)} km dari lokasi Anda
              </p>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
