// src/components/DistrictPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { districtsData } from "../data/districtsData";

const DistrictPage = ({ districtKey }) => {
  const navigate = useNavigate();

  // You can import districtsData here or pass as prop
  const { info, topAttractions } = districtsData[districtKey];

  return (
    <section className="min-h-screen bg-gray-50">
      {/* Info Cards */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-15">
          {info.map((item, idx) => (
            <div
              key={idx}
              className={`
                ${item.color.split(" ")[0]} bg-opacity-80
                rounded-2xl shadow-md p-6 flex items-start gap-4
                border ${item.color.split(" ")[2] || "border-gray-200"}
                hover:shadow-xl hover:-translate-y-1 transition-all duration-300 md:w-100
              `}
            >
              <div
                className={`w-14 h-14 rounded-full flex items-center justify-center shadow-inner ${item.color.split(" ")[0].replace("-50", "-100")} ${item.color.split(" ")[1]} text-2xl font-bold`}
              >
                {item.icon}
              </div>
              <div className="flex-1">
                <p className="text-md text-gray-600 font-medium">
                  {item.title}
                </p>
                <p
                  className={`text-2xl font-semibold mt-1 ${item.color.split(" ")[1]}`}
                >
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Attractions */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold mb-8">Top Attractions</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {topAttractions.map((attr, idx) => (
            <div
              key={idx}
              className="
          bg-white rounded-xl shadow overflow-hidden
          w-[400px] mx-auto md:mx-0
          transition-all duration-300 ease-out
          hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]
          group
        "
            >
              <div className="relative overflow-hidden">
                <img
                  src={attr.img}
                  alt={attr.title}
                  className="
              h-50 w-full object-cover
              transition-transform duration-500 ease-out
              group-hover:scale-110
            "
                />
                {/* subtle overlay gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-5">
                <span className="text-xs bg-green-200/50 px-2 py-1 rounded">
                  {attr.tag}
                </span>
                <h3 className="mt-2 font-semibold text-lg group-hover:text-green-700 transition-colors">
                  {attr.title}
                </h3>
                <p className="mt-2 text-gray-600 text-sm">{attr.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* You can add more sections here later (festivals, transport, tips, faq) */}
    </section>
  );
};

export default DistrictPage;
