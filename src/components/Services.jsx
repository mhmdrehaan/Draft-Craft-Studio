export default function Services() {
  const services = [
    {
      icon: "🌐",
      title: "Website Development",
      desc: "Buat website profesional yang responsif dan modern untuk bisnis Anda",
      features: ["Desain Custom & Responsif", "SEO Optimized", "Loading Cepat", "Admin Panel Mudah", "SSL Certificate"],
    },
    {
      icon: "📱",
      title: "Mobile Apps",
      desc: "Aplikasi mobile iOS & Android yang user-friendly dan powerful",
      features: ["Native & Hybrid", "UI/UX Modern", "Push Notifications", "Database Integration", "App Store Ready"],
    },
    {
      icon: "🤖",
      title: "AI Chatbot",
      desc: "Bot cerdas untuk WhatsApp, Telegram, dan platform lainnya",
      features: ["Auto Reply 24/7", "AI Natural Language", "Multi Platform", "Custom Commands", "Analytics Dashboard"],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-100 to-gray-300">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800">Layanan Kami</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {services.map((s, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
              <span className="text-4xl">{s.icon}</span>
              <h3 className="mt-4 text-2xl font-semibold text-gray-800">{s.title}</h3>
              <p className="text-gray-600 mt-2">{s.desc}</p>
              <ul className="mt-4 text-left space-y-2">
                {s.features.map((f, j) => (
                  <li key={j} className="before:content-['✓'] before:text-green-600 before:mr-2 text-gray-700">{f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
