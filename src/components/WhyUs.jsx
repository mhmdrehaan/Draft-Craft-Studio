export default function WhyUs() {
  const features = [
    { icon: "⚡", title: "Pengerjaan Cepat", desc: "Proyek selesai tepat waktu dengan kualitas terbaik" },
    { icon: "💎", title: "Kualitas Premium", desc: "Menggunakan teknologi terbaru dan best practices" },
    { icon: "🎯", title: "Custom Solution", desc: "Solusi sesuai kebutuhan bisnis Anda" },
    { icon: "🛠", title: "Support 24/7", desc: "Dukungan teknis & maintenance berkelanjutan" },
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold">Mengapa Pilih Kami?</h2>
        <div className="grid md:grid-cols-4 gap-8 mt-12">
          {features.map((f, i) => (
            <div key={i} className="p-6 text-center">
              <span className="text-3xl">{f.icon}</span>
              <h4 className="mt-3 text-xl font-semibold">{f.title}</h4>
              <p className="text-gray-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
