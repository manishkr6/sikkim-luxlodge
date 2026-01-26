import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { assets, districts } from "../assets/assets";

const Hero = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    destination: "",
    checkIn: "",
    checkOut: "",
    guests: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const params = new URLSearchParams();
    const destinationLower = formData.destination.trim();

    const matchingDistrict = districts.find(
      (d) => d.toLowerCase() === destinationLower.toLowerCase(),
    );

    if (matchingDistrict) {
      params.append("district", matchingDistrict);
    } else if (formData.destination.trim()) {
      params.append("search", formData.destination.trim());
    }

    if (formData.checkIn) params.append("checkIn", formData.checkIn);
    if (formData.checkOut) params.append("checkOut", formData.checkOut);
    if (formData.guests) params.append("guests", formData.guests);

    navigate(`/rooms${params.toString() ? `?${params}` : ""}`);
    scrollTo(0, 0);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id === "destinationInput" ? "destination" : e.target.id]:
        e.target.value,
    });
  };

  return (
    <div className="relative flex flex-col items-start justify-center px-6 md:p-16 lg:p-32 text-white h-screen overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0">
        {/* Image 1 - starts visible */}
        <div
          className="absolute inset-0 bg-no-repeat bg-cover bg-center transition-opacity duration-[2000ms] ease-in-out opacity-100 animate-slide-1"
          style={{ backgroundImage: `url("/src/assets/sikkim.jpg")` }}
        />

        {/* Image 2 */}
        <div
          className="absolute inset-0 bg-no-repeat bg-cover bg-center transition-opacity duration-[2000ms] ease-in-out opacity-0 animate-slide-2"
          style={{ backgroundImage: `url("/src/assets/east-sikkim.jpg")` }}
        />

        {/* Image 3 */}
        <div
          className="absolute inset-0 bg-no-repeat bg-cover bg-center transition-opacity duration-[2000ms] ease-in-out opacity-0 animate-slide-3"
          style={{ backgroundImage: `url("/src/assets/west-sikkim.jpg")` }}
        />

        {/* Image 4 */}
        <div
          className="absolute inset-0 bg-no-repeat bg-cover bg-center transition-opacity duration-[2000ms] ease-in-out opacity-0 animate-slide-4"
          style={{ backgroundImage: `url("/src/assets/north-sikkim.jpg")` }}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10">
        <p className="bg-[#49B9FF]/50 px-3.5 py-1 rounded-full mt-20 w-fit backdrop-blur-md">
          The Ultimate Hotel Experience
        </p>

        <h1 className="font-playfair text-2xl md:text-5xl md:text-[56px] md:leading-[56px] font-bold md:font-extrabold max-w-xl mt-4">
          Discover Your Perfect Gateway Destination
        </h1>

        <p className="max-w-130 mt-2 text-sm md:text-base text-white/90">
          Unparalleled luxury and comfort await at the world's most exclusive
          hotels and resorts. Start your journey today.
        </p>

        {/* Search card - unchanged */}
        <div className="mt-8">
          <form
            onSubmit={handleSubmit}
            className="bg-white/90 text-gray-600 rounded-xl px-6 py-4
            flex flex-col md:flex-row gap-4 max-md:mx-auto
            backdrop-blur-xl border border-white/40
            shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
          >
            <div>
              <div className="flex items-center gap-2">
                <img src={assets.calenderIcon} alt="" className="h-4" />
                <label htmlFor="destinationInput">Destination</label>
              </div>
              <input
                list="destinations"
                id="destinationInput"
                type="text"
                className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
                placeholder="Type here"
                value={formData.destination}
                onChange={handleChange}
                required
              />
              <datalist id="destinations">
                {districts.map((district, index) => (
                  <option value={district} key={index} />
                ))}
              </datalist>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <img src={assets.calenderIcon} alt="" className="h-4" />
                <label htmlFor="checkIn">Check in</label>
              </div>
              <input
                id="checkIn"
                type="date"
                className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
                value={formData.checkIn}
                onChange={handleChange}
              />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <img src={assets.calenderIcon} alt="" className="h-4" />
                <label htmlFor="checkOut">Check out</label>
              </div>
              <input
                id="checkOut"
                type="date"
                className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
                value={formData.checkOut}
                onChange={handleChange}
              />
            </div>

            <div className="flex md:flex-col max-md:gap-2 max-md:items-center">
              <label htmlFor="guests">Guests</label>
              <input
                min={1}
                max={4}
                id="guests"
                type="number"
                className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none max-w-16"
                placeholder="0"
                value={formData.guests}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="flex items-center justify-center gap-1 rounded-md
              bg-black py-3 px-4 text-white my-auto cursor-pointer
              max-md:w-full max-md:py-1"
            >
              <img src={assets.searchIcon} alt="searchIcon" className="h-7" />
              <span>Search</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
