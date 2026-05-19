export default function AutoDetailingLanding() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Auto Restaurācija & Premium Detailings
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed">
              Pilna auto atjaunošana, krāsas korekcija, keramiskais pārklājums,
              salona detailings un premium aprūpe klasiskajiem un modernajiem auto.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-white text-black px-8 py-4 rounded-2xl font-semibold text-lg hover:scale-105 transition">
                Pieteikt Vizīti
              </button>

              <button className="border border-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white hover:text-black transition">
                Skatīt Darbus
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Mūsu Pakalpojumi
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Profesionāli auto kopšanas un restaurācijas risinājumi ar uzmanību
              katrai detaļai.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Auto Restaurācija',
                text: 'Klasisko un bojāto auto pilna atjaunošana līdz perfekcijai.',
              },
              {
                title: 'Premium Detailings',
                text: 'Salona un virsbūves dziļā tīrīšana ar premium līdzekļiem.',
              },
              {
                title: 'Keramiskais Pārklājums',
                text: 'Ilgstoša krāsas aizsardzība un spīdums vairākus gadus.',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800 hover:border-white/30 transition shadow-2xl"
              >
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-12 flex-wrap gap-4">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-3">
                Pēdējie Projekti
              </h2>
              <p className="text-gray-400 text-lg">
                Daži no mūsu jaunākajiem restaurācijas un detailinga darbiem.
              </p>
            </div>

            <button className="border border-white px-6 py-3 rounded-2xl hover:bg-white hover:text-black transition">
              Skatīt Visu
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1200&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1200&auto=format&fit=crop',
            ].map((img, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-3xl group"
              >
                <img
                  src={img}
                  alt="Auto projekts"
                  className="h-[350px] w-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-24 px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1486006920555-c77dcf18193c?q=80&w=1400&auto=format&fit=crop"
              alt="Darbnīca"
              className="rounded-3xl shadow-2xl"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              Kāpēc Izvēlēties Mūs?
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed">
              Mēs specializējamies augstākās kvalitātes auto restaurācijā un
              detailingā, apvienojot pieredzi, modernās tehnoloģijas un rūpes
              par katru detaļu.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div>
                <h3 className="text-4xl font-bold">10+</h3>
                <p className="text-gray-400 mt-2">Gadu pieredze</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold">500+</h3>
                <p className="text-gray-400 mt-2">Apmierināti klienti</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold">
            Gatavs Piešķirt Auto Jaunu Dzīvi?
          </h2>

          <p className="text-gray-400 text-xl leading-relaxed">
            Sazinies ar mums jau šodien un rezervē savu detailinga vai
            restaurācijas projektu.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <button className="bg-white text-black px-8 py-4 rounded-2xl font-semibold text-lg hover:scale-105 transition">
              Zvanīt Tagad
            </button>

            <button className="border border-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white hover:text-black transition">
              Rakstīt WhatsApp
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
