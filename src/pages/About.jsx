import React from "react";
import { motion } from "framer-motion";
import AnimatedPage from "../components/AnimatedPage";
import Reveal from "../components/Reveal";
import Gallery from "../components/Gallery";
import { assets } from "../assets/assets";

// ────────────────────────────────────────────────
// Lucide icons
// ────────────────────────────────────────────────
import {
  // Pillars
  UsersRound,
  Target,
  Hotel,
  HeartHandshake,
  // Timeline
  Search,
  ListChecks,
  CalendarCheck,
  Mountain,
} from "lucide-react";

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
      desc: "A travel-first team obsessed with making every stay feel effortless, from browsing to check-out. We curate authentic Sikkim experiences with passion and local expertise.",
      icon: UsersRound,
    },
    {
      title: "Our Mission",
      desc: "Remove booking friction so you focus on the journey, not logistics. We simplify travel planning with transparency and deliver seamless, memorable stays from start to finish.",
      icon: Target,
    },
    {
      title: "What We Offer",
      list: [
        "Luxury, boutique, and budget stays",
        "Flexible dates & transparent pricing",
        "In-app support when you need it",
      ],
      icon: Hotel,
    },
    {
      title: "Built With ❤️",
      desc: "Thoughtfully created to bring you the best of Sikkim — clean design, reliable information, and effortless booking so your focus stays on the journey, not the planning.",
      icon: HeartHandshake,
    },
  ];

  const timeline = [
    {
      label: "Discover",
      detail: "Filter by district, price, and style to see curated stays.",
      icon: Search,
    },
    {
      label: "Decide",
      detail: "Deep room details, photos, amenities, and local context.",
      icon: ListChecks,
    },
    {
      label: "Book",
      detail: "Secure, instant confirmation—no hidden steps.",
      icon: CalendarCheck,
    },
    {
      label: "Enjoy",
      detail: "Check-in guidance, local tips, and responsive support.",
      icon: Mountain,
    },
  ];

  return (
    <AnimatedPage className="pt-24 sm:pt-28 pb-16 md:pb-20 bg-gradient-to-b from-slate-50 via-white to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HERO SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16 md:mb-20">
          <div className="space-y-6 lg:space-y-8">
            <Reveal>
              <p className="text-sm md:text-base uppercase tracking-wider text-teal-700 font-medium">
                ABOUT LUXLODGE
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-gray-900 leading-tight">
                Crafted for travelers who want clarity, comfort, and zero
                friction.
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                We connect you to handpicked stays with honest details,
                transparent pricing, and fast, secure booking—so every trip
                starts with confidence.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="flex flex-wrap gap-3 md:gap-4">
                {[
                  "Curated stays",
                  "Seamless booking",
                  "Local insights",
                  "24/7 support",
                ].map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 rounded-full bg-teal-50 text-teal-800 text-sm font-medium shadow-sm hover:bg-teal-100 transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200/80">
              <img
                src={assets.aboutHero || assets.contactImg}
                alt="LuxLodge Sikkim Experience"
                className="w-full h-full object-cover aspect-[4/3] sm:aspect-[3/2] lg:aspect-square brightness-95 contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white drop-shadow-md">
                <p className="text-sm md:text-base font-medium">
                  Gangtok • Sikkim
                </p>
                <p className="text-xs md:text-sm opacity-90">
                  Where every stay feels like home
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* HIGHLIGHTS */}
        <Reveal>
          <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-3 mt-12 md:mt-16">
            {highlights.map((item, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={idx}
                className="bg-white rounded-2xl p-6 border border-gray-200 shadow-md hover:shadow-xl hover:border-teal-200 transition-all duration-300"
              >
                <p className="text-2xl md:text-3xl font-bold text-teal-700">
                  {item.title}
                </p>
                <p className="mt-3 text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </Reveal>

        {/* GALLERY */}
        <Reveal>
          <Gallery className="mt-16 lg:mt-20" />
        </Reveal>

        {/* PILLARS */}
        <Reveal>
          <div className="mt-16 lg:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {pillars.map((item, idx) => {
              const Icon = item.icon;

              return (
                <div
                  key={idx}
                  className={`
                    group relative rounded-2xl overflow-hidden
                    bg-white shadow-sm hover:shadow-2xl transition-all duration-400 ease-out
                    border border-gray-100/80 border-teal-300/70
                    hover:-translate-y-3 hover:scale-[1.02]
                  `}
                >
                  <div className="h-1.5 bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-600" />

                  <div className="p-6 lg:p-8 flex flex-col items-start h-full">
                    {Icon && (
                      <div
                        className="
                          mb-5 p-4 rounded-2xl bg-teal-50/80 text-teal-600 
                          group-hover:bg-teal-100 group-hover:text-teal-700 
                          transition-all duration-300 transform group-hover:rotate-3
                        "
                      >
                        <Icon size={40} strokeWidth={1.6} />
                      </div>
                    )}

                    <h3
                      className="
                        text-2xl font-semibold tracking-tight text-gray-900 
                        group-hover:text-teal-800 transition-colors duration-300 mb-4
                      "
                    >
                      {item.title}
                    </h3>

                    {item.list ? (
                      <ul className="space-y-3 text-gray-700 leading-relaxed text-[15.5px] lg:text-base mt-1">
                        {item.list.map((li, i) => (
                          <li
                            key={i}
                            className="
                              pl-7 relative
                              before:content-['✓'] before:absolute before:left-0 before:text-teal-500
                              before:font-bold before:text-lg before:-translate-y-0.5
                              group-hover:before:text-teal-600 transition-colors
                            "
                          >
                            {li}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-600 leading-relaxed text-[15.5px] lg:text-base">
                        {item.desc}
                      </p>
                    )}
                  </div>

                  <div
                    className="
                      absolute inset-0 rounded-2xl pointer-events-none
                      bg-gradient-to-br from-teal-50/0 via-transparent to-cyan-50/0
                      opacity-0 group-hover:opacity-30 transition-opacity duration-500
                    "
                  />
                </div>
              );
            })}
          </div>
        </Reveal>

        {/* TIMELINE */}
        <Reveal>
          <div className="mt-16 lg:mt-20 bg-gradient-to-r from-teal-50 via-cyan-50 to-sky-50 rounded-3xl p-px shadow-xl">
            <div className="bg-white rounded-[22px] p-6 md:p-10 lg:p-12">
              <h3 className="text-2xl md:text-3xl font-semibold mb-10 text-center text-gray-900">
                How we make it easy
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {timeline.map((step, idx) => {
                  const Icon = step.icon;

                  return (
                    <div
                      key={idx}
                      className="
                        group relative rounded-2xl bg-white p-6 md:p-7
                        border border-slate-100 border-teal-300
                        hover:-translate-y-2 hover:shadow-xl
                        transition-all duration-400 ease-out
                        overflow-hidden
                      "
                    >
                      <div
                        className="
                        absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-teal-400 to-cyan-500
                        opacity-70 group-hover:opacity-100 transition-opacity
                      "
                      />

                      <div className="relative z-10 flex flex-col items-start h-full">
                        {Icon && (
                          <div
                            className="
                            mb-5 p-3.5 rounded-xl bg-teal-50/80 text-teal-600 
                            group-hover:bg-teal-100 group-hover:text-teal-700 
                            group-hover:scale-110 group-hover:rotate-6
                            transition-all duration-300
                          "
                          >
                            <Icon size={36} strokeWidth={1.7} />
                          </div>
                        )}

                        <div
                          className="
                          absolute top-5 right-5 w-9 h-9 rounded-full 
                          bg-teal-50/60 text-teal-700 font-semibold text-lg 
                          flex items-center justify-center
                          group-hover:bg-teal-100 transition-colors
                        "
                        >
                          {idx + 1}
                        </div>

                        <p className="font-semibold text-xl text-gray-900 mb-3 group-hover:text-teal-800 transition-colors">
                          {step.label}
                        </p>

                        <p className="text-gray-650 leading-relaxed text-[15px] md:text-base">
                          {step.detail}
                        </p>
                      </div>

                      <div
                        className="
                        absolute inset-0 rounded-2xl pointer-events-none
                        bg-gradient-to-br from-teal-50/0 to-cyan-50/0
                        opacity-0 group-hover:opacity-30 transition-opacity duration-500
                      "
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>

        {/* FOOTER NOTE */}
        <div className="mt-16 text-center">
          <p className="text-gray-500">
            Thank you for choosing us for your travel journey ✨
          </p>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default About;
