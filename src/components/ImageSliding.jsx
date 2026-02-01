// src/components/HomeHero.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { east_sikkim_assets, north_sikkim_assets, south_sikkim_assets, west_sikkim_assets } from '../assets/assets';

const images = [
  east_sikkim_assets.mg_marg,
  west_sikkim_assets.Pemayangtse_monastery,
  north_sikkim_assets.gurudongmar_lake,
  south_sikkim_assets.char_dham,
  east_sikkim_assets.banjhakiri_falls,
  west_sikkim_assets.singshore_bridge,
];

const HomeHero = () => {
  return (
    <section className="relative w-full h-[60vh] sm:h-[65vh] min-h-[460px] sm:min-h-[520px] overflow-hidden bg-white">
      {/* Very light fade at top/bottom for polish on white bg */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/70 z-10 pointer-events-none" />

      {/* Moving images carousel */}
      <div className="absolute inset-0 flex items-center">
        <motion.div
          className="flex flex-nowrap"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 50,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'loop',
          }}
        >
          {images.concat(images).map((src, idx) => (
            <div
              key={idx}
              className="
                flex-shrink-0 
                w-[220px] xs:w-[260px] sm:w-[340px] lg:w-[400px] 
                h-[340px] xs:h-[400px] sm:h-[500px] 
                mx-2 xs:mx-3 sm:mx-5 lg:mx-6 
                rounded-xl sm:rounded-2xl lg:rounded-3xl 
                overflow-hidden 
                shadow-xl border border-gray-200
              "
            >
              <img
                src={src}
                alt={`Luxury stay in Sikkim ${idx + 1}`}
                className="w-full h-full object-cover brightness-95"
                loading={idx < images.length ? 'eager' : 'lazy'}
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Hero content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8">
        <h1 className="
          text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
          font-bold font-playfair 
          text-gray-900 
          mb-3 xs:mb-4 sm:mb-6 
          tracking-tight leading-tight
        ">
          Discover Your Perfect Stay in Sikkim
        </h1>

        <p className="
          text-sm xs:text-base sm:text-lg md:text-xl 
          text-gray-700 
          max-w-xl sm:max-w-3xl lg:max-w-4xl 
          mb-5 xs:mb-6 sm:mb-8 md:mb-10 
          leading-relaxed px-2 sm:px-0
        ">
          Handpicked luxury, boutique & cozy homestays • Instant booking • Local secrets included
        </p>

        <div className="flex flex-col xs:flex-row gap-4 xs:gap-5 sm:gap-6">
          <button className="
            px-7 py-3.5 xs:px-8 xs:py-4 sm:px-10 sm:py-5 
            bg-teal-600 hover:bg-teal-700 
            text-white font-semibold 
            rounded-full sm:rounded-xl 
            text-sm xs:text-base sm:text-lg 
            shadow-lg transition-all duration-300 
            hover:scale-105 active:scale-100
            min-w-[160px] xs:min-w-[180px]
          ">
            Explore Stays
          </button>

          <button className="
            px-7 py-3.5 xs:px-8 xs:py-4 sm:px-10 sm:py-5 
            bg-transparent border-2 border-gray-400 
            text-gray-700 font-semibold 
            rounded-full sm:rounded-xl 
            text-sm xs:text-base sm:text-lg 
            hover:border-gray-600 hover:bg-gray-50 
            transition-all duration-300
            min-w-[160px] xs:min-w-[180px]
          ">
            See All Districts
          </button>
        </div>
      </div>

      {/* Small scroll indicator */}
      <div className="absolute bottom-5 xs:bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="w-8 xs:w-9 h-12 xs:h-14 border-2 border-gray-300 rounded-full flex items-center justify-center">
          <div className="w-1.5 h-3.5 xs:h-4 bg-teal-500 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HomeHero;