// src/components/Hero.jsx
import React from "react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white min-h-screen flex items-center pt-24"
    >
      <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <div className="space-y-6">
          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">
            Jasa Pembuatan <span className="text-yellow-300">Website</span> &{" "}
            <span className="text-yellow-300">Aplikasi</span> Profesional 🚀
          </h1>
          <p className="text-lg text-gray-200">
            Spesialis Website & Aplikasi untuk kebutuhan{" "}
            <strong>Bisnis, Startup, dan E-Commerce</strong>. Gratis Domain,
            Hosting, dan <span className="font-semibold">Maintenance Selamanya</span>.
          </p>

          {/* Dropdown Layanan */}
          <div>
            <select className="px-4 py-3 rounded-xl w-full text-yellow-300 focus:ring-2 focus:ring-yellow-300 border-2 border-white">
              <option value="">Pilih Layanan...</option>
              <option value="website">Website</option>
              <option value="android">Aplikasi Android</option>
              <option value="ios">Aplikasi iOS</option>
              <option value="ecommerce">E-Commerce</option>
            </select>
          </div>

          {/* Reviews */}
          <div className="flex items-center gap-2">
            <div className="flex text-yellow-400 text-xl">{"★".repeat(5)}</div>
            <span className="text-gray-200">
              Dari <strong>100+ Reviews</strong> asli pelanggan Webnusa
            </span>
          </div>
        </div>

        {/* Image / Visual Section */}
        <div className="relative">
          <img
            src="/public/hero3.png" // taruh gambar di folder public
            alt="Webnusa Hero"
            className="w-full max-w-md mx-auto drop-shadow-2xl rounded-2xl"
          />

         
        </div>
      </div>
    </section>
  );
}
