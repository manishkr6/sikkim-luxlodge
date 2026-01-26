import React from "react";
import { useNavigate } from "react-router-dom";
import { districtsData } from "../data/districtsData";

const DistrictPage = ({ districtKey }) => {
  const navigate = useNavigate();

  const { info, topAttractions } = districtsData[districtKey];

  return (
    <section className="min-h-screen bg-gray-50">
      {/* Info Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {info.map((item, idx) => (
            <div
              key={idx}
              className={`
          ${item.color.split(" ")[0]} bg-opacity-80
          rounded-2xl shadow-md p-5 sm:p-6 flex items-start gap-4
          border ${item.color.split(" ")[2] || "border-gray-200"}
          hover:shadow-xl hover:-translate-y-1 transition-all duration-300
          w-full
        `}
            >
              <div
                className={`w-14 h-14 rounded-full flex items-center justify-center shadow-inner ${item.color.split(" ")[0].replace("-50", "-100")} ${item.color.split(" ")[1]} text-2xl font-bold flex-shrink-0`}
              >
                {item.icon}
              </div>
              <div className="flex-1">
                <p className="text-base sm:text-md text-gray-600 font-medium">
                  {item.title}
                </p>
                <p
                  className={`text-xl sm:text-2xl font-semibold mt-1 ${item.color.split(" ")[1]}`}
                >
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Attractions */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center md:text-left">
          Top Attractions
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {topAttractions.map((attr, idx) => (
            <div
              key={idx}
              className="
          bg-white rounded-xl shadow-md overflow-hidden
          transition-all duration-300 ease-out
          hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]
          group
          w-full
        "
            >
              <div className="relative overflow-hidden">
                <img
                  src={attr.img}
                  alt={attr.title}
                  className="
              w-full h-48 sm:h-56 object-cover
              transition-transform duration-500 ease-out
              group-hover:scale-110
            "
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-5 sm:p-6">
                <span className="inline-block text-xs bg-green-200/50 px-2.5 py-1 rounded-full mb-3">
                  {attr.tag}
                </span>
                <h3 className="mt-1 font-semibold text-lg sm:text-xl group-hover:text-green-700 transition-colors">
                  {attr.title}
                </h3>
                <p className="mt-3 text-gray-600 text-sm sm:text-base leading-relaxed">
                  {attr.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DistrictPage;
