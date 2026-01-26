import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import roomImg1 from "../assets/east-sikkim.jpg";
import roomImg2 from "../assets/west-sikkim.jpg";
import roomImg3 from "../assets/north-sikkim.jpg";
import roomImg4 from "../assets/south-sikkim.jpg";
import "./SikkimDistrict.css";

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

const SikkimDistrict = () => {
  const navigate = useNavigate();

  return (
    <section className="px-4 sm:px-6 md:px-16 lg:px-24 py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 text-center"
        >
          Explore Sikkim by District
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-500 text-center max-w-2xl mx-auto"
        >
          Discover handpicked tours and travel experiences across East, West,
          North, and South Sikkim. Choose a district to see curated tours,
          treks, sightseeing packages, adventure activities, and guided journeys
          for that region.
        </motion.p>

        {/* Cards */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
          {[
            {
              label: "East Sikkim",
              description:
                "Gangtok city tours, Tsomgo Lake & Nathula day trips, Rumtek monastery visits, MG Marg walking tours, and cultural experiences.",
              key: "East Sikkim",
              image: roomImg1,
            },
            {
              label: "West Sikkim",
              description:
                "Kanchenjunga base camp treks, Yuksom historical walks, Khecheopalri Lake & Pemayangtse monastery tours, and scenic village explorations.",
              key: "West Sikkim",
              image: roomImg2,
            },
            {
              label: "North Sikkim",
              description:
                "Gurudongmar Lake high-altitude tours, Yumthang Valley flower valley trips, Zero Point snow adventures, Lachen-Lachung village stays & hot spring excursions.",
              key: "North Sikkim",
              image: roomImg3,
            },
            {
              label: "South Sikkim",
              description:
                "Char Dham pilgrimage tours, Ravangla Buddha Park & Guru Padmasambhava statue visits, Temi Tea Garden walks, Maenam Wildlife Sanctuary treks, and spiritual sightseeing packages.",
              key: "South Sikkim",
              image: roomImg4,
            },
          ].map((district, index) => (
            <motion.button
              key={district.key}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{
                rotateX: -6,
                rotateY: 6,
                scale: 1.04,
              }}
              onClick={() => {
                navigate(`/travel/${district.key.split(" ")[0].toLowerCase()}`);
                scrollTo(0, 0);
              }}
              className="district-cinematic group relative overflow-hidden rounded-2xl cursor-pointer min-h-70 sm:min-h-80 lg:min-h-95"
            >
              {/* Clear Image */}
              <div
                className="district-photo absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${district.image})` }}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/40 to-black/25 group-hover:from-black/45 group-hover:via-black/30 group-hover:to-black/15 transition-colors duration-500" />

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full p-4 sm:p-5 lg:p-6 text-center">
                <span className="text-xs sm:text-sm md:text-base font-medium tracking-wide text-gray-200 uppercase">
                  Sikkim District
                </span>

                <div className="mt-2 sm:mt-3">
                  <span className="block text-xl sm:text-2xl md:text-3xl font-bold text-white drop-shadow-xl">
                    {district.label}
                  </span>
                  <span className="mt-2 sm:mt-3 block text-xs sm:text-sm md:text-base text-gray-200/95 line-clamp-3 sm:line-clamp-none">
                    {district.description}
                  </span>
                </div>

                <span className="mt-4 sm:mt-6 inline-flex items-center text-xs sm:text-sm md:text-base font-medium text-emerald-200 group-hover:text-white transition">
                  Explore tours
                  <span className="ml-2 text-lg sm:text-xl">→</span>
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SikkimDistrict;
