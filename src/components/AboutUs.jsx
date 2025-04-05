import React from "react";
import { motion } from "framer-motion";
import SolariaLogo from "../assets/Solaria.png";
import SejarahLogo from "../assets/solariasejarah.jpg"

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-white px-6 md:px-16 py-16 space-y-16 pt-30 md:pt-34">
      
      {/* Bagian About Us */}
      <motion.div
        className="w-full md:w-4/5 text-center md:text-left"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-lg text-gray-800 mb-2">Solaria <span className="text-pink-500 italic">Profile</span></h2>
        <h1 className="text-3xl md:text-4xl font-bold text-pink-500 leading-tight">
          Dari Visi & Misi menjadi Kebanggaan Indonesia.
        </h1>
        <p className="mt-6 text-gray-700 leading-relaxed">
          Sebagai salah satu restoran cepat saji terbesar di Indonesia, Solaria terus berkembang
          dengan ratusan cabang di berbagai kota. Kami berkomitmen untuk menghadirkan makanan
          berkualitas dengan cita rasa khas Indonesia.
        </p>
      </motion.div>

      {/* Bagian Visi & Misi + Logo */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full md:w-4/5">
        
        {/* Bagian Visi & Misi */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Visi */}
          <motion.div
            className="bg-pink-500 text-white p-6 mt-8 rounded-lg shadow-lg shadow-pink-200 border border-pink-500 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "white";
              e.currentTarget.style.color = "black";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#ec4899";
              e.currentTarget.style.color = "white";
            }}
          >
            <h3 className="text-xl font-semibold">Visi</h3>
            <p className="mt-2 text-sm">
              Menjadi restoran terbaik yang menghadirkan pengalaman kuliner khas Indonesia
              dengan harga terjangkau dan layanan berkualitas tinggi.
            </p>
          </motion.div>

          {/* Misi */}
          <motion.div
            className="bg-white text-gray-900 p-6 mt-6 rounded-lg shadow-lg shadow-pink-200 borderborder-pink-500 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#ec4899";
              e.currentTarget.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "white";
              e.currentTarget.style.color = "black";
            }}
          >
            <h3 className="text-xl font-semibold text-gray-900">Misi</h3>
            <ul className="mt-2 list-disc list-inside text-sm text-gray-900">
              <li>Menyajikan makanan berkualitas tinggi dengan rasa otentik Indonesia.</li>
              <li>Memberikan pengalaman makan yang nyaman dan modern.</li>
              <li>Memperluas jaringan cabang untuk menjangkau lebih banyak pelanggan.</li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bagian Logo */}
        <motion.div
          className="md:w-1/3 flex justify-center mt-10 md:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={SolariaLogo}
            alt="Solaria Logo"
            className="w-64 h-auto bg-white p-4"
          />
        </motion.div>
      </div>

      {/* Bagian Sejarah */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full md:w-4/5">
        
        {/* Teks Sejarah */}
        <motion.div
          className="md:w-1/2 text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold text-pink-500 mb-4">Sejarah</h2>
          <p className="text-gray-700 leading-relaxed">
            Pendiri Tercinta, Bapak Alim Husin membangun fondasi yang kokoh bagi
            Grup pada tahun 1967 dengan mendirikan UD Logam Jawa, industri rumah
            tangga peralatan dapur aluminium.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Sebelum mendirikan Perusahaan ini, Bapak Alim Husin yang bermigrasi
            dari Tiongkok ke Indonesia pada usia muda, terlibat dalam sejumlah
            usaha bisnis dan mendirikan usaha kecil-kecilan. Pada tahun 1971, PT
            Maspion dan disusul oleh PT Indal.
          </p>
        </motion.div>

        {/* Logo Sejarah */}
        <motion.div
          className="md:w-1/3 flex justify-center mt-10 md:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={SejarahLogo} 
            alt="Logo Sejarah"
            className="w-full h-auto p-4 "
          />
        </motion.div>
      </div>
      {/* Bagian Cerita Sukses Solaria */}
      <div className="w-full md:w-4/5 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-700 mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Cerita Sukses <span className="text-pink-500">Solaria</span>
        </motion.h2>
        <p className="text-gray-600 text-lg">
          Perjalanan Solaria dalam membangun bisnis kuliner yang sukses di Indonesia.
        </p>
        
        {/* Video YouTube */}
        <motion.div
          className="mt-8 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/1DNAbD98dn4?si=utlBlvmq5jiKwkGz"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="rounded-lg shadow-lg"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
