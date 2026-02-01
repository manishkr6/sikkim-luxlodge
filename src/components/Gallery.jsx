import React, { useState, useEffect, useCallback } from "react";
import { assets } from "../assets/assets";

// Gallery data (unchanged)
const galleryItems = [
  {
    src: assets.guidHiking,
    title: "Guided Hiking in North Sikkim",
    description: "Explore pristine trails to Gurudongmar Lake and Yumthang Valley with expert local guides.",
    alt: "Guided hiking",
  },
  {
    src: assets.sunriseHiking,
    title: "Sunrise at Tso Lhamo Lake",
    description: "Witness magical Himalayan sunrise at one of the highest lakes in the world.",
    alt: "Sunrise hiking",
  },
  {
    src: assets.yogaSession,
    title: "Morning Yoga with Mountain Views",
    description: "Start your day with peaceful yoga sessions overlooking snow-capped peaks.",
    alt: "Yoga session",
  },
  {
    src: assets.cookingClass,
    title: "Traditional Sikkimese Cooking Class",
    description: "Learn to prepare authentic momos, gundruk soup, and local delicacies with homestay hosts.",
    alt: "Cooking class",
  },
  {
    src: assets.birdWatching,
    title: "Bird Watching in Khangchendzonga National Park",
    description: "Spot rare Himalayan species like the Blood Pheasant and Fire-tailed Myzornis.",
    alt: "Bird watching",
  },
  {
    src: assets.photoWalk,
    title: "Photography Walk in Gangtok",
    description: "Capture the vibrant markets, monasteries, and panoramic views with professional guidance.",
    alt: "Photo walk",
  },
  {
    src: assets.eastSikkim,
    title: "East Sikkim Landscapes",
    description: "Lush tea gardens, monasteries, and breathtaking views of the Kanchenjunga range.",
    alt: "East Sikkim landscape",
  },
];

const Gallery = ({ className = "mt-16" }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden"; // Prevent scroll behind modal
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") goToPrev();
      if (e.key === "ArrowRight") goToNext();
      if (e.key === "Escape") closeLightbox();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, goToPrev, goToNext]);

  return (
    <section className={`${className} py-12`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-10">
          <h3 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Moments & Experiences
          </h3>
          <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the soul of Sikkim through breathtaking landscapes, cultural encounters, and unforgettable adventures.
          </p>
        </div>

        {/* Grid of thumbnails */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {galleryItems.map((item, index) => (
            <button
              key={item.src}
              onClick={() => openLightbox(index)}
              className="group relative overflow-hidden rounded-xl shadow-md border border-gray-200 hover:shadow-2xl hover:border-teal-300 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-400"
              aria-label={`View ${item.title}`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white text-sm font-medium line-clamp-1">{item.title}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Full-screen Lightbox */}
        {lightboxOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
            onClick={closeLightbox}
          >
            <div
              className="relative w-full max-w-6xl max-h-[90vh] flex flex-col bg-gray-900/50 backdrop-blur-md rounded-2xl overflow-hidden border border-gray-700 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-6 z-20 text-white bg-gray-800/70 hover:bg-gray-700 rounded-full w-12 h-12 flex items-center justify-center text-2xl transition-all hover:scale-110"
                aria-label="Close gallery"
              >
                ×
              </button>

              {/* Main Photo – now fully visible */}
              <div className="flex-1 relative flex items-center justify-center p-4 md:p-8 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <img
                    src={galleryItems[currentIndex].src}
                    alt={galleryItems[currentIndex].title}
                    className="w-auto h-auto max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl"
                  />
                </div>
              </div>

              {/* Info Section */}
              <div className="px-6 py-5 bg-gray-900/90 border-t border-gray-800">
                <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3">
                  {galleryItems[currentIndex].title}
                </h3>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                  {galleryItems[currentIndex].description}
                </p>
              </div>

              {/* Thumbnails Navigation */}
              <div className="px-6 py-4 bg-gray-950/80 border-t border-gray-800 overflow-x-auto flex gap-3 scrollbar-hide">
                {galleryItems.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                      idx === currentIndex
                        ? "border-teal-400 scale-110 shadow-lg shadow-teal-500/30"
                        : "border-gray-700 hover:border-teal-500 hover:scale-105"
                    }`}
                  >
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={goToPrev}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-gray-800/70 hover:bg-gray-700 text-white rounded-full w-12 h-12 md:w-14 md:h-14 flex items-center justify-center text-3xl transition-all hover:scale-110"
                aria-label="Previous photo"
              >
                ‹
              </button>

              <button
                onClick={goToNext}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-gray-800/70 hover:bg-gray-700 text-white rounded-full w-12 h-12 md:w-14 md:h-14 flex items-center justify-center text-3xl transition-all hover:scale-110"
                aria-label="Next photo"
              >
                ›
              </button>

              {/* Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-5 py-2 rounded-full text-sm font-medium">
                {currentIndex + 1} / {galleryItems.length}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;