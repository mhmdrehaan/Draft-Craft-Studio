export default function Contact() {
  const contacts = [
    { title: "📱 WhatsApp", value: "+62 812-3456-7890", desc: "Chat langsung untuk konsultasi" },
    { title: "📧 Email", value: "hello@devcraft.studio", desc: "Kirim detail proyek Anda" },
    { title: "💬 Telegram", value: "@DevCraftStudio", desc: "Fast response guaranteed" },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-indigo-500 to-purple-700 text-white text-center">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold">Hubungi Kami Sekarang!</h2>
        <p className="mt-2">Konsultasi GRATIS untuk proyek Anda</p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {contacts.map((c, i) => (
            <div key={i} className="bg-white/10 p-6 rounded-xl backdrop-blur-md hover:scale-105 transition">
              <h4 className="text-lg font-semibold">{c.title}</h4>
              <p className="mt-1">{c.value}</p>
              <p className="text-sm text-gray-200">{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <a href="https://wa.me/628123456789?text=Halo%20DevCraft%20Studio!%20Saya%20tertarik%20dengan%20layanan%20Anda" 
             target="_blank"
             className="px-6 py-3 rounded-full bg-gradient-to-r from-rose-500 to-orange-500 text-white font-semibold shadow-lg hover:scale-105 transition">
            💬 Chat WhatsApp Sekarang
          </a>
        </div>
      </div>
    </section>
  );
}
