import { useState } from 'react'
import logo from './assets/LillGarage_logo_balts.png'

const phone = '+37126652162'
const whatsappNumber = '37126652162'
const email = 'info@lillgarage.lv'

const services = [
  {
    number: '01',
    title: 'Virsbūves mazgāšana',
    text: 'Profesionāla virsbūves mazgāšana, vaskošana un rūpīga ārējā kopšana.',
    icon: '🚘',
  },
  {
    number: '02',
    title: 'Salona tīrīšana',
    text: 'No ikdienas tīrīšanas līdz pilnai salona dziļajai ķīmiskajai tīrīšanai.',
    icon: '✦',
  },
  {
    number: '03',
    title: 'Virsbūves pulēšana',
    text: 'Spīduma atjaunošana, skrāpējumu samazināšana un krāsas korekcija.',
    icon: '◉',
  },
  {
    number: '04',
    title: 'Keramiskā aizsardzība',
    text: 'Ilgstoša krāsas aizsardzība, hidrofobitāte un dziļš spīdums.',
    icon: '◇',
  },
  {
    number: '05',
    title: 'Premium kopšana',
    text: 'Kompleksi auto kopšanas risinājumi tiem, kuri vēlas maksimumu.',
    icon: '◆',
  },
]

const advantages = [
  {
    title: 'Profesionāla pieeja',
    text: 'Katram automobilim pieejam individuāli.',
    icon: '✓',
  },
  {
    title: 'Kvalitatīvi līdzekļi',
    text: 'Izmantojam profesionālus detailing produktus no ražotāja Zvizzer.',
    icon: '✦',
  },
  {
    title: 'Precizitāte',
    text: 'Uzmanība detaļām katrā darba posmā.',
    icon: '◎',
  },
  {
    title: 'Rūpes par auto',
    text: 'Mērķis ir ne tikai tīrs auto, bet izcils rezultāts.',
    icon: '♢',
  },
]

function openWhatsApp(message = '') {
  const url = `https://wa.me/${whatsappNumber}${
    message ? `?text=${encodeURIComponent(message)}` : ''
  }`

  window.open(url, '_blank', 'noopener,noreferrer')
}

function scrollToBooking() {
  document.getElementById('booking')?.scrollIntoView({
    behavior: 'smooth',
  })
}

export default function AutoDetailingLanding() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    service: '',
    message: '',
  })

  function handleSubmit(event) {
    event.preventDefault()

    const message = [
      'Sveiki! Vēlos pieteikt vizīti LillGarage.',
      '',
      `Vārds: ${form.name}`,
      `Telefons: ${form.phone}`,
      `Pakalpojums: ${form.service || 'Nav norādīts'}`,
      `Ziņa: ${form.message || 'Nav norādīta'}`,
    ].join('\n')

    openWhatsApp(message)
  }

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-black text-white font-sans">

      {/* NAVIGATION */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="mx-auto max-w-7xl px-4 md:px-8 pt-4">
          <nav className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/75 px-5 py-3 backdrop-blur-xl">

            <button
              onClick={() =>
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }
              className="text-sm font-bold tracking-[0.25em] text-white"
            >
              LILL<span className="text-red-500">GARAGE</span>
            </button>

            <div className="hidden md:flex items-center gap-8 text-sm font-semibold uppercase tracking-wider">
              <a href="#services" className="hover:text-red-500 transition">
                Pakalpojumi
              </a>

              <a href="#about" className="hover:text-red-500 transition">
                Par mums
              </a>

              <a href="#booking" className="hover:text-red-500 transition">
                Kontakti
              </a>
            </div>

            <button
              onClick={scrollToBooking}
              className="rounded-full bg-red-600 px-5 py-2.5 text-sm font-bold uppercase tracking-wide transition hover:bg-red-500 hover:scale-105"
            >
              Pieteikt vizīti
            </button>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden">

        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=85&w=2200&auto=format&fit=crop')",
          }}
        />

        {/* Dark overlays */}
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/65 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />

        {/* Red glow */}
        <div className="absolute -right-40 top-1/4 h-[500px] w-[500px] rounded-full bg-red-600/20 blur-[140px]" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-28 pb-20 md:px-10">

          <div className="grid w-full items-center gap-12 lg:grid-cols-2">

            <div className="max-w-3xl">

              {/* Logo */}
              <img
                src={logo}
                alt="LillGarage"
                className="mb-10 w-64 md:w-80 lg:w-[28rem]"
              />

              <div className="mb-5 flex items-center gap-4">
                <span className="h-px w-14 bg-red-500" />
                <span className="text-sm font-bold uppercase tracking-[0.35em] text-red-400">
                  Profesionāla auto kopšana
                </span>
              </div>

              <h1 className="text-5xl font-black uppercase leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
                Auto
                <br />
                <span className="text-red-500">Detailing</span>
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-relaxed text-gray-300 md:text-xl">
                Profesionāla virsbūves un salona kopšana,
                pulēšana, keramiskā aizsardzība un premium detailing.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">

                <button
                  onClick={scrollToBooking}
                  className="rounded-full bg-red-600 px-7 py-4 text-base font-black uppercase tracking-wide shadow-[0_0_35px_rgba(220,38,38,0.45)] transition hover:bg-red-500 hover:scale-105"
                >
                  Pieteikt vizīti →
                </button>

                <button
                  onClick={() => openWhatsApp()}
                  className="rounded-full border border-green-500 bg-green-500/10 px-7 py-4 text-base font-black uppercase tracking-wide text-green-400 transition hover:bg-green-500 hover:text-white hover:scale-105"
                >
                  WhatsApp
                </button>

              </div>

              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-gray-400">
                <a
                  href={`tel:${phone}`}
                  className="transition hover:text-white"
                >
                  ☎ +371 26652162
                </a>

                <a
                  href={`mailto:${email}`}
                  className="transition hover:text-white"
                >
                  ✉ {email}
                </a>
              </div>
            </div>

            {/* Hero side info */}
            <div className="hidden lg:block">
              <div className="ml-auto max-w-sm rounded-3xl border border-red-500/30 bg-black/55 p-7 backdrop-blur-md">

                <p className="text-xs font-bold uppercase tracking-[0.35em] text-red-400">
                  LillGarage
                </p>

                <h2 className="mt-4 text-3xl font-black uppercase">
                  Tavs auto.
                  <br />
                  Mūsu rūpes.
                </h2>

                <div className="my-7 h-px bg-gradient-to-r from-red-500 to-transparent" />

                <div className="space-y-5 text-sm text-gray-300">
                  <div>
                    <p className="font-bold text-white">
                      Virsbūves kopšana
                    </p>
                    <p>Tīrība un aizsardzība.</p>
                  </div>

                  <div>
                    <p className="font-bold text-white">
                      Salona detailing
                    </p>
                    <p>Tīrs, svaigs un rūpīgi kopts salons.</p>
                  </div>

                  <div>
                    <p className="font-bold text-white">
                      Virsbūves detailing
                    </p>
                    <p>Atjaunots spīdums un dziļums.</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="relative overflow-hidden bg-[#050505] py-24 md:py-32"
      >

        <div className="absolute left-0 top-1/3 h-96 w-96 rounded-full bg-red-600/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6 md:px-10">

          <div className="mb-14 flex items-end justify-between gap-6">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-red-500">
                Mūsu pakalpojumi
              </p>

              <h2 className="text-4xl font-black uppercase md:text-6xl">
                Kopšana bez
                <span className="text-red-500"> kompromisiem.</span>
              </h2>
            </div>

            <p className="hidden max-w-sm text-right text-gray-500 md:block">
              Profesionāli auto kopšanas risinājumi ar uzmanību
              katrai detaļai.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">

            {services.map((service) => (
              <div
                key={service.number}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#171717] to-[#080808] p-6 transition duration-300 hover:-translate-y-2 hover:border-red-500/70 hover:shadow-[0_15px_50px_rgba(220,38,38,0.18)]"
              >

                <div className="absolute right-4 top-3 text-5xl font-black text-white/[0.04]">
                  {service.number}
                </div>

                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-red-500/40 bg-red-500/10 text-2xl text-red-400">
                  {service.icon}
                </div>

                <h3 className="min-h-[58px] text-xl font-black uppercase leading-tight">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-gray-500">
                  {service.text}
                </p>

                <button
                  onClick={scrollToBooking}
                  className="mt-7 text-sm font-bold uppercase tracking-wide text-red-500 transition group-hover:text-red-400"
                >
                  Uzzināt vairāk →
                </button>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ABOUT / ADVANTAGES */}
      <section
        id="about"
        className="relative overflow-hidden border-y border-white/5 bg-black py-24 md:py-32"
      >

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.09),transparent_55%)]" />

        <div className="relative mx-auto max-w-7xl px-6 md:px-10">

          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-red-500">
              Kāpēc izvēlēties LillGarage?
            </p>

            <h2 className="mt-4 text-4xl font-black uppercase md:text-6xl">
              Rezultāts, ko
              <span className="text-red-500"> redz.</span>
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-gray-400">
              Mūsu mērķis nav vienkārši nomazgāt automobili.
              Mēs rūpējamies par tā izskatu, aizsardzību un ilgtermiņa vērtību.
            </p>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            {advantages.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 text-center transition hover:border-red-500/50"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-red-500/40 bg-red-500/10 text-2xl text-red-400">
                  {item.icon}
                </div>

                <h3 className="mt-6 text-xl font-black uppercase">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-gray-500">
                  {item.text}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* BOOKING / CONTACT */}
      <section
        id="booking"
        className="relative overflow-hidden bg-[#070707] py-24 md:py-32"
      >

        <div className="absolute left-0 top-0 h-full w-1/3 bg-red-600/[0.04]" />
        <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-red-600/10 blur-[130px]" />

        <div className="relative mx-auto max-w-7xl px-6 md:px-10">

          <div className="grid gap-14 lg:grid-cols-2">

            {/* Contact info */}
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-red-500">
                Sazinies ar mums
              </p>

              <h2 className="mt-4 text-5xl font-black uppercase leading-none md:text-7xl">
                Gatavs
                <br />
                <span className="text-red-500">spīdēt?</span>
              </h2>

              <p className="mt-7 max-w-xl text-lg leading-relaxed text-gray-400">
                Pastāsti mums par savu auto un vēlamo pakalpojumu.
                Sazināsimies ar Tevi un vienosimies par ērtāko vizītes laiku.
              </p>

              <div className="mt-10 space-y-5">

                <a
                  href={`tel:${phone}`}
                  className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-red-500/50"
                >
                  <span className="text-3xl text-red-500">☎</span>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-500">
                      Telefons
                    </p>
                    <p className="mt-1 text-xl font-bold">
                      +371 26652162
                    </p>
                  </div>
                </a>

                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-red-500/50"
                >
                  <span className="text-3xl text-red-500">✉</span>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-500">
                      E-pasts
                    </p>
                    <p className="mt-1 text-xl font-bold">
                      {email}
                    </p>
                  </div>
                </a>

              </div>

              <button
                onClick={() => openWhatsApp()}
                className="mt-7 rounded-full border border-green-500 bg-green-500/10 px-7 py-4 font-black uppercase tracking-wide text-green-400 transition hover:bg-green-500 hover:text-white"
              >
                Sazināties WhatsApp →
              </button>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-red-500/20 bg-gradient-to-b from-[#151515] to-[#080808] p-6 shadow-2xl md:p-9"
            >

              <div className="mb-8">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-red-500">
                  Pieteikums
                </p>

                <h3 className="mt-2 text-3xl font-black uppercase">
                  Piesaki savu auto
                </h3>
              </div>

              <div className="space-y-5">

                <div>
                  <label className="mb-2 block text-sm font-bold text-gray-400">
                    Vārds
                  </label>

                  <input
                    required
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Tavs vārds"
                    className="w-full rounded-xl border border-white/10 bg-black px-4 py-4 text-white outline-none transition placeholder:text-gray-700 focus:border-red-500"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-gray-400">
                    Telefons
                  </label>

                  <input
                    required
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+371..."
                    className="w-full rounded-xl border border-white/10 bg-black px-4 py-4 text-white outline-none transition placeholder:text-gray-700 focus:border-red-500"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-gray-400">
                    Vēlamais pakalpojums
                  </label>

                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/10 bg-black px-4 py-4 text-white outline-none transition focus:border-red-500"
                  >
                    <option value="">Izvēlies pakalpojumu</option>
                    <option>Virsbūves mazgāšana</option>
                    <option>Salona tīrīšana</option>
                    <option>Virsbūves pulēšana</option>
                    <option>Krāsas korekcija</option>
                    <option>Keramiskais pārklājums</option>
                    <option>Premium kopšanas komplekts</option>
                    <option>Cits</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-gray-400">
                    Ziņa
                  </label>

                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Pastāsti par savu auto..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-black px-4 py-4 text-white outline-none transition placeholder:text-gray-700 focus:border-red-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-red-600 px-6 py-4 font-black uppercase tracking-wide shadow-[0_0_30px_rgba(220,38,38,0.25)] transition hover:bg-red-500 hover:scale-[1.01]"
                >
                  Nosūtīt pieteikumu →
                </button>

                <p className="text-center text-xs text-gray-600">
                  Pieteikums tiks nosūtīts WhatsApp.
                </p>

              </div>
            </form>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-black">

        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-10">

          <img
            src={logo}
            alt="LillGarage"
            className="w-44"
          />

          <div className="flex flex-wrap gap-6 text-sm font-bold uppercase tracking-wider text-gray-500">
            <a href="#services" className="hover:text-white transition">
              Pakalpojumi
            </a>

            <a href="#about" className="hover:text-white transition">
              Par mums
            </a>

            <a href="#booking" className="hover:text-white transition">
              Kontakti
            </a>
          </div>

          <div className="text-right text-sm text-gray-600">
            <p>© {new Date().getFullYear()} LillGarage</p>
            <p className="mt-1">Tavs auto — mūsu rūpes.</p>
          </div>

        </div>
      </footer>

    </div>
  )
}