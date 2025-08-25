export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-700 overflow-hidden">
      {/* Background Draft Grid */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><rect width='40' height='40' fill='none' stroke='rgba(255,255,255,0.3)' stroke-width='0.5'/></svg>")`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Floating UI blocks */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-28 h-16 bg-white/20 backdrop-blur-md rounded-lg animate-floatSlow" />
        <div className="absolute bottom-32 right-24 w-32 h-20 bg-rose-400/30 rounded-lg animate-floatSlow delay-200" />
        <div className="absolute bottom-16 left-1/3 w-24 h-14 bg-emerald-400/30 rounded-lg animate-floatSlow delay-500" />
      </div>
      
      <div className="relative z-10 text-center text-white px-6">
        
        {/* Logo */}
        {/* <div className="flex justify-center mb-6">
  <img 
    src="/draftLogo.png" 
    alt="CodeCraft Studios Logo" 
    className="w-20 h-20 md:w-28 md:h-28 drop-shadow-lg"
  />
</div> */}

        {/* Judul dengan animasi typing */}
        <h1 
          className="overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-3 text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent inline-block"
          style={{
            animation: 'typing 3s steps(20, end), blink-caret 0.75s step-end infinite'
          }}
        >
          CodeCraft Studios
        </h1>
        
        <p 
          className="mt-4 text-lg md:text-xl opacity-90"
          style={{ animation: 'slideInUp 1s ease-out 0.3s both' }}
        >
          Merancang & Membangun Website Impian Anda
        </p>
        <p 
          className="mt-1 text-lg"
          style={{ animation: 'slideInUp 1s ease-out 0.5s both' }}
        >
          🚀 Website Premium | 🎨 UI/UX Design | 🤖 Solusi Digital
        </p>
        
        <div 
          className="mt-6 flex flex-wrap justify-center gap-4"
          style={{ animation: 'slideInUp 1s ease-out 0.6s both' }}
        >
          <a
            href="#contact"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Mulai Proyek
          </a>
          <a
            href="#services"
            className="px-6 py-3 rounded-full border border-white/40 text-white backdrop-blur hover:bg-white/10 transition-all duration-300"
          >
            Lihat Layanan
          </a>
        </div>
      </div>
      
      <style>{`
        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }
        
        @keyframes blink-caret {
          from, to { border-color: transparent; }
          50% { border-color: white; }
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes floatSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        
        .animate-floatSlow {
          animation: floatSlow 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
