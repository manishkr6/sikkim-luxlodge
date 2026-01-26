import React from "react";
import { useNavigate } from "react-router-dom";

import westHero from "../../assets/west-sikkim.jpg";
import DistrictPage from "../DistrictPage";

const WestSikkim = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-gray-50">
      {/* ================= HERO ================= */}
      <div className="relative h-[70vh] md:h-[80vh]">
        <img
          src={westHero}
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
            West Sikkim
          </h1>
          <p className="mt-4 text-lg text-gray-200 max-w-2xl">
            The capital region of Sikkim, known for its vibrant culture,
            monasteries, and stunning views of Kanchenjunga.
          </p>
        </div>
      </div>

      <DistrictPage districtKey="west" />

      {/* ================= FESTIVALS & ACCOMMODATION ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* Left Column - Festivals & Events */}
        <div className="bg-white rounded-2xl shadow-lg p-5 sm:p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group">
          <h3 className="font-bold text-xl sm:text-2xl mb-5 sm:mb-6 text-gray-900 group-hover:text-blue-700 transition-colors">
            Festivals & Events
          </h3>

          <div className="space-y-5 sm:space-y-6">
            {[
              {
                name: "Losoong",
                desc: "Sikkimese New Year with masked dances",
              },
              { name: "Saga Dawa", desc: "Buddhist festival of enlightenment" },
              {
                name: "Flower Show (Yumthang)",
                desc: "Spring rhododendron celebrations",
              },
            ].map((item, idx) => (
              <div
                key={item.name}
                className="flex items-start gap-3 sm:gap-4 transition-all duration-300 hover:bg-amber-50/50 p-3 rounded-xl group/item bg-orange-100/50"
              >
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 text-xl shadow-sm transition-transform duration-300 group-hover/item:scale-110 group-hover/item:rotate-12">
                  ⭐
                </div>
                <div>
                  <h4 className="font-semibold text-base sm:text-lg text-gray-800 group-hover/item:text-amber-700 transition-colors">
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
          <div className="bg-white rounded-2xl shadow-lg p-5 sm:p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group">
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-xl shadow-sm transition-transform duration-300 group-hover:scale-110">
                🏨
              </div>
              <h3 className="font-bold text-lg sm:text-xl text-gray-900 group-hover:text-blue-700 transition-colors">
                Accommodation Options
              </h3>
            </div>

            <div className="flex flex-wrap gap-2 sm:gap-3">
              {["Homestays", "Resorts", "Tourist Cottages", "Camping"].map(
                (label) => (
                  <span
                    key={label}
                    className="px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-blue-50 text-blue-700 text-xs sm:text-sm font-medium cursor-pointer transition-all duration-300 hover:bg-blue-100 hover:text-blue-800 hover:scale-105 hover:shadow-sm active:scale-95"
                  >
                    {label}
                  </span>
                ),
              )}
            </div>
          </div>

          {/* Transportation */}
          <div className="bg-white rounded-2xl shadow-lg p-5 sm:p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group">
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-xl shadow-sm transition-transform duration-300 group-hover:scale-110">
                🚌
              </div>
              <h3 className="font-bold text-lg sm:text-xl text-gray-900 group-hover:text-blue-700 transition-colors">
                Transportation
              </h3>
            </div>

            <div className="flex flex-wrap gap-2 sm:gap-3">
              {["Shared Jeeps", "Private Cab", "Organized Tours"].map(
                (label) => (
                  <span
                    key={label}
                    className="px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-blue-50 text-blue-700 text-xs sm:text-sm font-medium cursor-pointer transition-all duration-300 hover:bg-blue-100 hover:text-blue-800 hover:scale-105 hover:shadow-sm active:scale-95"
                  >
                    {label}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ================= TRAVEL TIPS ================= */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl shadow-xl overflow-hidden mx-4 sm:mx-6 md:mx-10 lg:mx-20 xl:mx-32">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 py-8 md:py-10 lg:py-12">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8 text-center md:text-left">
            Travel Tips for West Sikkim
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
            {/* Left column */}
            <div className="space-y-5 md:space-y-6">
              {/* Permits */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0 text-lg sm:text-xl">
                  🌐
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-white">
                    Permits
                  </h4>
                  <p className="text-blue-100 mt-1 text-sm sm:text-base leading-relaxed">
                    Most areas are open — no special permit needed for Pelling,
                    Yuksom, Khecheopalri. Treks to Dzongri/Goecha La require
                    Inner Line Permit.
                  </p>
                </div>
              </div>

              {/* Road Conditions */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0 text-lg sm:text-xl">
                  🛣️
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-white">
                    Road Conditions
                  </h4>
                  <p className="text-blue-100 mt-1 text-sm sm:text-base leading-relaxed">
                    Roads to Pelling can be narrow & steep — drive cautiously,
                    avoid night travel, check for landslides in monsoon.
                  </p>
                </div>
              </div>
            </div>

            {/* Right column */}
            <div className="space-y-5 md:space-y-6">
              {/* Weather Preparedness */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0 text-lg sm:text-xl">
                  ❄️
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-white">
                    Weather Preparedness
                  </h4>
                  <p className="text-blue-100 mt-1 text-sm sm:text-base leading-relaxed">
                    Evenings are cold even in summer — carry layers. Sudden fog
                    & rain common; always carry raincoat.
                  </p>
                </div>
              </div>

              {/* Altitude & Health */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0 text-lg sm:text-xl">
                  ❤️
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-white">
                    Altitude & Health
                  </h4>
                  <p className="text-blue-100 mt-1 text-sm sm:text-base leading-relaxed">
                    Higher areas like Rabdentse & Pemayangtse can cause mild
                    altitude issues — stay hydrated, take it slow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =============== FAQ =============== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 md:mb-4 tracking-tight">
            Frequently Asked Questions – West Sikkim
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Quick answers about Pelling, Yuksom, Khecheopalri Lake, Rabdentse
            and Kanchenjunga views
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 sm:space-y-5 md:space-y-6">
          {[
            {
              icon: "🌐",
              q: "Do I need any permit for West Sikkim (Pelling, Yuksom)?",
              a: "No special permit is required for most tourist areas (Pelling, Yuksom, Khecheopalri Lake, Pemayangtse Monastery). Some remote trekking routes (Dzongri / Goecha La) require Inner Line Permit / trekking permit.",
            },
            {
              icon: "📅",
              q: "What is the best time to visit West Sikkim?",
              a: "March–June (spring/summer) and September–November (autumn) offer the clearest Kanchenjunga views, pleasant weather, and blooming rhododendrons. Winters are cold with snow; monsoon brings heavy rain and road risks.",
            },
            {
              icon: "🚌",
              q: "How do I reach West Sikkim / Pelling?",
              a: "Fly to Bagdogra (IXB) or New Jalpaiguri (NJP) → shared jeep / private taxi to Pelling (5–6 hours). From Gangtok it's about 4–5 hours by road. No direct flights or trains — road travel is the main option.",
            },
            {
              icon: "🏞️",
              q: "Why is West Sikkim famous for Kanchenjunga views?",
              a: "Pelling, Pemayangtse Monastery, Rabdentse Ruins, and Khecheopalri viewpoint offer some of the best panoramic sunrise/sunset views of Kanchenjunga in Sikkim — especially clear in spring and autumn mornings.",
            },
            {
              icon: "🎒",
              q: "What should I pack for West Sikkim?",
              a: "Warm layers (evenings/nights cold), rain jacket (sudden showers), good walking shoes for monastery/trek paths, binoculars/camera for views, sunscreen, power bank, basic medicines, and ID/permit copies if trekking.",
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

export default WestSikkim;
