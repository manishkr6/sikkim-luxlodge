import React from "react";
import { useNavigate } from "react-router-dom";

import southHero from "../../assets/south-sikkim.jpg";
import DistrictPage from "../DistrictPage";

const SouthSikkim = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-gray-50">
      {/* ================= HERO ================= */}
      <div className="relative h-[70vh] md:h-[80vh]">
        <img
          src={southHero}
          alt="East Sikkim"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />

        <div className="absolute bottom-12 left-6 md:left-12 lg:left-20 right-6 text-white max-w-4xl">
          <button
            onClick={() => navigate(-1)}
            className="mb-5 inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white/20 backdrop-blur hover:bg-white/30 transition text-sm"
          >
            ← Back to Districts
          </button>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            South Sikkim
          </h1>
          <p className="mt-4 text-lg text-gray-200 max-w-2xl">
            The capital region of Sikkim, known for its vibrant culture,
            monasteries, and stunning views of Kanchenjunga.
          </p>
        </div>
      </div>

      <DistrictPage districtKey="south" />

      {/* ================= FESTIVALS & ACCOMMODATION ================= */}

      <div className="max-w-6xl mx-auto px-6 pb-16 grid md:grid-cols-2 gap-8">
        {/* Left Column - Festivals & Events */}
        <div className="bg-white rounded-2xl shadow-lg p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group">
          <h3 className="font-bold text-2xl mb-6 text-gray-900 group-hover:text-blue-700 transition-colors">
            Festivals & Events
          </h3>

          <div className="space-y-6">
            {[
              { name: "Saga Dawa", desc: "Buddhist festival of enlightenment" },
              { name: "Losar", desc: "Tibetan New Year celebrations" },
              { name: "Buddha Jayanti", desc: "Buddha's birthday festival" },
            ].map((item, idx) => (
              <div
                key={item.name}
                className="flex items-start gap-4 transition-all duration-300 hover:bg-amber-50/50 p-3 rounded-xl group/item bg-orange-100/50"
              >
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 text-xl shadow-sm transition-transform duration-300 group-hover/item:scale-110 group-hover/item:rotate-12">
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
        <div className="space-y-6">
          {/* Accommodation Options */}
          <div className="bg-white rounded-2xl shadow-lg p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-xl shadow-sm transition-transform duration-300 group-hover:scale-110">
                🏨
              </div>
              <h3 className="font-bold text-xl text-gray-900 group-hover:text-blue-700 transition-colors">
                Accommodation Options
              </h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {[
                "Homestays",
                "Resorts",
                "Luxury Hotels",
                "Pilgrim Guesthouses",
              ].map((label) => (
                <span
                  key={label}
                  className="px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium cursor-pointer transition-all duration-300 hover:bg-blue-100 hover:text-blue-800 hover:scale-105 hover:shadow-sm active:scale-95"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Transportation */}
          <div className="bg-white rounded-2xl shadow-lg p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-xl shadow-sm transition-transform duration-300 group-hover:scale-110">
                🚌
              </div>
              <h3 className="font-bold text-xl text-gray-900 group-hover:text-blue-700 transition-colors">
                Transportation
              </h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {[
                "Taxis",
                "Shared Jeeps",
                "Cable Car (Namchi)",
                "Private Cab",
              ].map((label) => (
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
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl shadow-xl overflow-hidden ml-4 mr-4 sm:ml-10 sm:mr-10">
        <div className="max-w-7xl mx-auto px-6 py-10 md:py-12">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center md:text-left">
            Travel Tips for South Sikkim
          </h3>

          <div className="grid md:grid-cols-2 gap-8 md:gap-10">
            {/* Left column */}
            <div className="space-y-6">
              {/* Permits */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0 text-xl">
                  🌐
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Permits</h4>
                  <p className="text-blue-100 mt-1 text-sm leading-relaxed">
                    No special permit needed for Namchi, Ravangla, Char Dham,
                    Buddha Park. Open access for Indian nationals.
                  </p>
                </div>
              </div>

              {/* Road Conditions */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0 text-xl">
                  🛣️
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">
                    Road Conditions
                  </h4>
                  <p className="text-blue-100 mt-1 text-sm leading-relaxed">
                    Roads are generally good but hilly — careful driving around
                    curves. Monsoon landslides possible.
                  </p>
                </div>
              </div>
            </div>

            {/* Right column */}
            <div className="space-y-6">
              {/* Weather Preparedness */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0 text-xl">
                  ❄️
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">
                    Weather Preparedness
                  </h4>
                  <p className="text-blue-100 mt-1 text-sm leading-relaxed">
                    Mild climate — light jacket for evenings. Sudden rain common
                    — carry umbrella/raincoat.
                  </p>
                </div>
              </div>

              {/* Pilgrimage & Health */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0 text-xl">
                  ❤️
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">
                    Pilgrimage & Health
                  </h4>
                  <p className="text-blue-100 mt-1 text-sm leading-relaxed">
                    Many stairs at Char Dham & Buddha Park — wear comfortable
                    shoes. Stay hydrated during long sightseeing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===============FAQ===============  */}
      <div className="max-w-6xl mx-auto px-5 sm:px-6 py-16 md:py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Frequently Asked Questions – South Sikkim
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Quick answers about Ravangla, Namchi, Char Dham, Buddha Park and
            spiritual sites
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-5 md:space-y-6">
          {[
            {
              icon: "🌐",
              q: "Do I need any permit for South Sikkim (Namchi, Ravangla)?",
              a: "No — South Sikkim (Namchi, Ravangla, Char Dham, Buddha Park, Temi Tea Garden) is open access for Indian nationals. No special permit required. Foreign nationals usually need only the standard Protected Area Permit / RAP (often obtained on arrival or via agent).",
            },
            {
              icon: "📅",
              q: "What is the best time to visit South Sikkim?",
              a: "March–June and September–November offer pleasant weather, clear skies for Buddha Park views, and blooming tea gardens. Spring brings rhododendrons; autumn gives crisp mountain air. Monsoon (July–Aug) is wet; winter can be cold but peaceful.",
            },
            {
              icon: "🚌",
              q: "How do I reach South Sikkim / Namchi or Ravangla?",
              a: "Fly to Bagdogra (IXB) or New Jalpaiguri (NJP) → shared jeep/taxi to Namchi/Ravangla (≈4–5 hours). From Gangtok it's about 2–3 hours by road. Ravangla is a good base for both Namchi Char Dham and Buddha Park.",
            },
            {
              icon: "🛕",
              q: "Is South Sikkim mainly for spiritual / religious tourism?",
              a: "Yes — famous for the 108-ft Guru Padmasambhava statue, Char Dham complex (replica of major Indian pilgrimage sites), Ravangla Buddha Park, and Temi Tea Garden. It's peaceful, scenic, and less crowded than Gangtok or North Sikkim.",
            },
            {
              icon: "🎒",
              q: "What should I pack for South Sikkim?",
              a: "Comfortable walking shoes (for temple steps), light jacket (evenings cool), umbrella/raincoat (sudden showers), sunscreen, camera for panoramic views, reusable bottle, and ID/proof documents.",
            },
          ].map((faq, idx) => (
            <details
              key={faq.q}
              className={`
          group bg-gradient-to-br from-white/95 to-gray-50/95
          backdrop-blur-xl border border-white/60 rounded-2xl
          shadow-lg overflow-hidden
          transition-all duration-500 ease-out
          hover:shadow-2xl hover:-translate-y-1
          animate-fade-in-up
        `}
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <summary
                className={`
            flex items-center gap-4 px-6 sm:px-8 py-5 sm:py-6
            cursor-pointer
            text-lg sm:text-xl font-semibold text-gray-900
            transition-all duration-400
            hover:text-blue-700
            group-open:text-blue-700
          `}
              >
                {/* Icon Circle */}
                <div className="w-10 h-10 rounded-full bg-blue-100/80 flex items-center justify-center text-xl shadow-sm flex-shrink-0">
                  {faq.icon}
                </div>
                {faq.q}
                <span
                  className={`
              ml-auto text-2xl sm:text-3xl text-gray-500
              transition-transform duration-400
              group-open:rotate-180
            `}
                >
                  ▼
                </span>
              </summary>

              <div
                className={`
            px-6 sm:px-8 pb-6 pt-2
            text-gray-700 text-base leading-relaxed
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
        <div className="text-center mt-12 sm:mt-16">
          <p className="text-lg text-gray-700 mb-6">Still have questions?</p>
          <a
            href="#contact"
            className={`
        inline-flex items-center gap-2
        px-7 py-3.5 rounded-full
        bg-gradient-to-r from-blue-600 to-blue-700
        text-white font-semibold text-base
        shadow-lg hover:shadow-xl
        hover:from-blue-700 hover:to-blue-800
        transition-all duration-300
        active:scale-95
      `}
            onClick={() => navigate("/contact")}
          >
            Contact Us →
          </a>
        </div>
      </div>
    </section>
  );
};

export default SouthSikkim;
