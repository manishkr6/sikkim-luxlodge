import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import AnimatedPage from "../components/AnimatedPage";
import Reveal from "../components/Reveal";
import Gallery from "../components/Gallery";

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 90,
    rotateX: 18,
    scale: 0.94,
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.9,
      ease: "easeOut",
    },
  }),
};

const About = () => {
  const highlights = [
    {
      title: "95% happy guests",
      desc: "Consistently rated high for comfort & service.",
    },
    {
      title: "4 districts in Sikkim",
      desc: "Curated stays across East, West, North & South Sikkim.",
    },
    {
      title: "Instant booking",
      desc: "Real-time availability with secure checkout.",
    },
  ];

  const pillars = [
    {
      title: "Who We Are",
      desc: "A travel-first team obsessed with making every stay feel effortless, from browsing to check-out.",
    },
    {
      title: "Our Mission",
      desc: "Remove the friction from booking so you focus on the journey, not the logistics.",
    },
    {
      title: "What We Offer",
      list: [
        "Luxury, boutique, and budget stays",
        "Verified partners and clear policies",
        "Flexible dates & transparent pricing",
        "In-app support when you need it",
      ],
    },
    {
      title: "Built With ❤️",
      desc: "Thoughtfully created to bring you the best of Sikkim — clean design, reliable information, and effortless booking so your focus stays on the journey, not the planning.",
    },
  ];

  const timeline = [
    {
      label: "Discover",
      detail: "Filter by district, price, and style to see curated stays.",
    },
    {
      label: "Decide",
      detail: "Deep room details, photos, amenities, and local context.",
    },
    { label: "Book", detail: "Secure, instant confirmation—no hidden steps." },
    {
      label: "Enjoy",
      detail: "Check-in guidance, local tips, and responsive support.",
    },
  ];

  return (
    <AnimatedPage className="pt-24 sm:pt-28 pb-16 md:pb-20 bg-gradient-to-b from-slate-50 via-white to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HERO */}
        <div className="relative bg-gradient-to-r from-indigo-400 via-blue-400 to-sky-400 rounded-2xl sm:rounded-3xl text-white p-6 sm:p-8 md:p-12 shadow-2xl overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_40%)]" />

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
            <div>
              <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-white/80">
                About Us
              </p>
              <h1 className="mt-2 sm:mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
                Crafted for travelers who want clarity, comfort, and zero
                friction.
              </h1>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-white/90">
                We connect you to handpicked stays with honest details,
                transparent pricing, and fast, secure booking—so every trip
                starts with confidence.
              </p>

              <div className="mt-5 sm:mt-6 flex flex-wrap gap-2 sm:gap-3">
                {["Curated stays", "Seamless booking", "Local insights"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/15 text-xs sm:text-sm backdrop-blur border border-white/10 hover:bg-white/25 transition"
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>
            </div>

            {/* Highlights */}
            <div className="grid gap-3 sm:gap-4 mt-6 md:mt-0">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur rounded-xl sm:rounded-2xl px-4 py-3 border border-white/10 shadow-sm hover:bg-white/20 transition"
                >
                  <p className="text-base sm:text-lg font-semibold">
                    {item.title}
                  </p>
                  <p className="text-white/85 text-xs sm:text-sm mt-1">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* GALLERY */}
        <Reveal>
          <Gallery className="mt-10 sm:mt-12 lg:mt-16" />
        </Reveal>

        {/* PILLARS */}
        <Reveal>
          <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {pillars.map((item, idx) => {
              const borderGlow = [
                "from-sky-200/40 via-white to-sky-200/40",
                "from-indigo-200/40 via-white to-indigo-200/40",
                "from-violet-200/40 via-white to-violet-200/40",
                "from-blue-200/40 via-white to-blue-200/40",
              ];

              const softBg = [
                "bg-sky-50/70",
                "bg-indigo-50/70",
                "bg-violet-50/70",
                "bg-blue-50/70",
              ];

              return (
                <div
                  key={idx}
                  className={`rounded-2xl p-px bg-gradient-to-br ${borderGlow[idx]} hover:-translate-y-1 transition-all`}
                >
                  <div
                    className={`rounded-2xl p-5 sm:p-6 h-full shadow-md hover:shadow-xl transition ${softBg[idx]}`}
                  >
                    <h2 className="text-lg sm:text-xl font-semibold mb-3 text-gray-900">
                      {item.title}
                    </h2>

                    {item.list ? (
                      <ul className="list-disc list-inside text-gray-600 text-sm sm:text-base space-y-1.5 sm:space-y-2">
                        {item.list.map((li) => (
                          <li key={li}>{li}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        {item.desc}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>

        {/* TIMELINE */}
        <Reveal>
          <div className="mt-12 sm:mt-16 bg-gradient-to-r from-sky-50 via-indigo-50 to-blue-50 rounded-2xl sm:rounded-3xl p-px shadow-lg">
            <div className="bg-white rounded-[18px] sm:rounded-[22px] p-5 sm:p-6 md:p-8">
              <h3 className="text-xl sm:text-2xl font-semibold mb-5 sm:mb-6 text-gray-900">
                How we make it easy
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
                {timeline.map((step, idx) => (
                  <div
                    key={idx}
                    className="group rounded-xl sm:rounded-2xl bg-white p-4 sm:p-5 border border-slate-100 hover:border-indigo-300 hover:-translate-y-1 hover:shadow-xl transition"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center font-semibold mb-3 group-hover:scale-110 transition">
                      {idx + 1}
                    </div>
                    <p className="font-semibold text-gray-900 text-base sm:text-lg">
                      {step.label}
                    </p>
                    <p className="text-gray-600 text-sm sm:text-base mt-1">
                      {step.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* FOOTER NOTE */}
        <div className="mt-12 sm:mt-14 text-center">
          <p className="text-gray-500 text-sm sm:text-base">
            Thank you for choosing us for your travel journey ✨
          </p>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default About;
