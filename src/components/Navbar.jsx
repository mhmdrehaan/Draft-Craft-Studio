// src/components/Navbar.jsx
import React from "react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-600 to-purple-700 shadow-lg z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-white text-blue-600 font-extrabold px-3 py-2 rounded-xl shadow">
            WN
          </div>
          <span className="text-white text-xl font-bold">Webnusa</span>
        </div>

        {/* Menu */}
        <nav className="hidden md:flex gap-6 text-white font-medium">
          <a href="#home" className="hover:text-yellow-300 transition">
            Home
          </a>
         
          <a href="#services" className="hover:text-yellow-300 transition">
            Services
          </a>
          <a href="#portfolio" className="hover:text-yellow-300 transition">
            Portfolio
          </a>
          <a href="#contact" className="hover:text-yellow-300 transition">
            Contact Us
          </a>
        </nav>

        {/* CTA Button */}
        <a
          href="#pricing"
          className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-4 py-2 rounded-xl font-semibold transition"
        >
          Cek Harga
        </a>
      </div>
    </header>
  );
}
