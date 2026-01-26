import React from "react";
import { useNavigate } from "react-router-dom";

import eastHero from "../../assets/east-sikkim.jpg";
import DistrictPage from "../DistrictPage";

const EastSikkim = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-gray-50">
      {/* ================= HERO ================= */}
      <div className="relative h-[70vh] md:h-[80vh]">
        <img
          src={eastHero}
          alt="East Sikkim"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/50 to-transparent" />

        <div className="absolute bottom-12 left-6 md:left-12 lg:left-20 right-6 text-white max-w-4xl">
          <button
            onClick={() => navigate(-1)}
            className="mb-5 inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white/20 backdrop-blur hover:bg-white/30 transition text-sm"
          >
            ← Back to Districts
          </button>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            East Sikkim
          </h1>
          <p className="mt-4 text-lg text-gray-200 max-w-2xl">
            The capital region of Sikkim, known for its vibrant culture,
            monasteries, and stunning views of Kanchenjunga.
          </p>
        </div>
      </div>

      <DistrictPage districtKey="east" />

      {/* ================= FESTIVALS & ACCOMMODATION ================= */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* Left Column - Festivals & Events */}
        <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group">
          <h3 className="font-bold text-xl sm:text-2xl mb-6 text-gray-900 group-hover:text-blue-700 transition-colors">
            Festivals & Events
          </h3>

          <div className="space-y-5 sm:space-y-6">
            {[
              { name: "Losar", desc: "Cultural celebration" },
              { name: "Saga Dawa", desc: "Cultural celebration" },
              { name: "Dasain", desc: "Cultural celebration" },
            ].map((item, idx) => (
              <div
                key={item.name}
                className="flex items-start gap-4 transition-all duration-300 hover:bg-amber-50/50 p-3 rounded-xl group/item bg-orange-100/50"
              >
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center shrink-0 text-xl shadow-sm transition-transform duration-300 group-hover/item:scale-110 group-hover/item:rotate-12">
                  ⭐
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 group-hover/item:text-amber-700 transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-sm text-gray-600 mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Accommodation + Transportation */}
        <div className="space-y-5 sm:space-y-6">
          {/* Accommodation Options */}
          <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-xl shadow-sm transition-transform duration-300 group-hover:scale-110">
                🏨
              </div>
              <h3 className="font-bold text-lg sm:text-xl text-gray-900 group-hover:text-blue-700 transition-colors">
                Accommodation Options
              </h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {["Luxury Hotels", "Boutique Resorts", "Homestays"].map(
                (label) => (
                  <span
                    key={label}
                    className="px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium cursor-pointer transition-all duration-300 hover:bg-blue-100 hover:text-blue-800 hover:scale-105 hover:shadow-sm active:scale-95"
                  >
                    {label}
                  </span>
                ),
              )}
            </div>
          </div>

          {/* Transportation */}
          <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-xl shadow-sm transition-transform duration-300 group-hover:scale-110">
                🚌
              </div>
              <h3 className="font-bold text-lg sm:text-xl text-gray-900 group-hover:text-blue-700 transition-colors">
                Transportation
              </h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {["Taxis", "Shared Jeeps", "Cable Car"].map((label) => (
                <span
                  key={label}
                  className="px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium cursor-pointer transition-all duration-300 hover:bg-blue-100 hover:text-blue-800 hover:scale-105 hover:shadow-sm active:scale-95"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ================= TRAVEL TIPS ================= */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl shadow-xl overflow-hidden mx-4 sm:mx-6 md:mx-10 lg:mx-20 xl:mx-32">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 py-10 md:py-12">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8 text-center md:text-left">
            Travel Tips for East Sikkim
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
            {/* Left column */}
            <div className="space-y-5 md:space-y-6">
              {/* Permits Required */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0 text-xl">
                  🌐
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-white">
                    Permits Required
                  </h4>
                  <p className="text-blue-100 mt-1 text-sm sm:text-base leading-relaxed">
                    Indian nationals need ILP, foreigners require Protected Area
                    Permit (PAP)
                  </p>
                </div>
              </div>

              {/* Road Conditions */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0 text-xl">
                  🛣️
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-white">
                    Road Conditions
                  </h4>
                  <p className="text-blue-100 mt-1 text-sm sm:text-base leading-relaxed">
                    Mountain roads can be narrow and winding, travel during
                    daylight hours
                  </p>
                </div>
              </div>
            </div>

            {/* Right column */}
            <div className="space-y-5 md:space-y-6">
              {/* Weather Preparedness */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0 text-xl">
                  ❄️
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-white">
                    Weather Preparedness
                  </h4>
                  <p className="text-blue-100 mt-1 text-sm sm:text-base leading-relaxed">
                    Carry warm clothing regardless of season, weather can change
                    rapidly
                  </p>
                </div>
              </div>

              {/* Altitude Sickness */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0 text-xl">
                  ❤️
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-white">
                    Altitude Sickness
                  </h4>
                  <p className="text-blue-100 mt-1 text-sm sm:text-base leading-relaxed">
                    Acclimatize properly, stay hydrated, and avoid alcohol
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== FAQ ========================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 md:mb-4 tracking-tight">
            Frequently Asked Questions – East Sikkim
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Quick answers about Gangtok, Tsomgo Lake, Nathula Pass, Rumtek
            Monastery and city life
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 sm:space-y-5 md:space-y-6">
          {[
            {
              icon: "🌐",
              q: "Do I need any permit for East Sikkim / Gangtok?",
              a: "Gangtok and most of East Sikkim are open access for Indian nationals — no permit needed. For Nathula Pass and Tsomgo Lake, Indian nationals need Inner Line Permit (ILP) — easily available online or at check-posts. Foreign nationals require Protected Area Permit (PAP).",
            },
            {
              icon: "📅",
              q: "What is the best time to visit East Sikkim?",
              a: "March to June (spring & summer) and September to November (autumn) offer pleasant weather, clear Kanchenjunga views, and vibrant rhododendrons. Winters are cold with possible snow; monsoon (July–Aug) brings heavy rain and landslide risk.",
            },
            {
              icon: "🚌",
              q: "How do I reach East Sikkim / Gangtok?",
              a: "Fly to Bagdogra (IXB) ~124 km away or New Jalpaiguri (NJP) railway station → shared jeep / private taxi to Gangtok (4–5 hours). Gangtok is the main hub with good road connectivity from Siliguri.",
            },
            {
              icon: "🛕",
              q: "What are the must-visit spiritual places in East Sikkim?",
              a: "Rumtek Monastery (seat of Karmapa), Enchey Monastery, Do Drul Chorten stupa, Namgyal Institute of Tibetology, and Hanuman Tok temple. Gangtok has many peaceful monasteries and temples.",
            },
            {
              icon: "🎒",
              q: "What should I pack for East Sikkim?",
              a: "Warm layers (evenings cool), waterproof jacket (sudden rain), good walking shoes, sunglasses, sunscreen, power bank, medicines (including altitude sickness pills), reusable water bottle, and ID/permit documents.",
            },
          ].map((faq, idx) => (
            <details
              key={faq.q}
              className={`
          group bg-gradient-to-br from-white/95 to-gray-50/95
          backdrop-blur-xl border border-white/60 rounded-xl sm:rounded-2xl
          shadow-lg overflow-hidden
          transition-all duration-500 ease-out
          hover:shadow-2xl hover:-translate-y-1
          animate-fade-in-up
        `}
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              <summary
                className={`
            flex items-center gap-3 sm:gap-4 px-5 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6
            cursor-pointer
            text-base sm:text-lg md:text-xl font-semibold text-gray-900
            transition-all duration-400
            hover:text-blue-700
            group-open:text-blue-700
          `}
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-blue-100/80 flex items-center justify-center text-lg sm:text-xl shadow-sm flex-shrink-0">
                  {faq.icon}
                </div>
                {faq.q}
                <span
                  className={`
              ml-auto text-xl sm:text-2xl md:text-3xl text-gray-500
              transition-transform duration-400
              group-open:rotate-180
            `}
                >
                  ▼
                </span>
              </summary>

              <div
                className={`
            px-5 sm:px-6 lg:px-8 pb-5 sm:pb-6 pt-1 sm:pt-2
            text-gray-700 text-sm sm:text-base leading-relaxed
            border-t border-gray-100/80
            bg-white/40 backdrop-blur-sm
          `}
              >
                {faq.a}
              </div>
            </details>
          ))}
        </div>

        {/* CTA Footer */}
        <div className="text-center mt-10 sm:mt-12 md:mt-16">
          <p className="text-base sm:text-lg text-gray-700 mb-5 md:mb-6">
            Still have questions?
          </p>
          <a
            href="#contact"
            onClick={() => navigate("/contact")}
            className={`
        inline-flex items-center gap-2
        px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 rounded-full
        bg-gradient-to-r from-blue-600 to-blue-700
        text-white font-medium sm:font-semibold text-sm sm:text-base
        shadow-lg hover:shadow-xl
        hover:from-blue-700 hover:to-blue-800
        transition-all duration-300
        active:scale-95
      `}
          >
            Contact Us →
          </a>
        </div>
      </div>
    </section>
  );
};

export default EastSikkim;
