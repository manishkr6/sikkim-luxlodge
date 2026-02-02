import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { useUser, SignInButton, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Travel", path: "/travel", isDropdown: true },
    { name: "Hotels", path: "/rooms" },
    { name: "Experience", path: "/experience" },
    { name: "Contact", path: "/contact" },
  ];

  const sikkimRegions = [
    { name: "East Sikkim", id: "east" },
    { name: "West Sikkim", id: "west" },
    { name: "South Sikkim", id: "south" },
    { name: "North Sikkim", id: "north" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [openMobileTravel, setOpenMobileTravel] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const { isLoaded, isSignedIn } = useUser();

  const searchRef = useRef(null);

  useEffect(() => {
    if (location.pathname !== "/") {
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isSearchOpen && searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
    };

    if (isSearchOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isSearchOpen]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/rooms?search=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery("");
    }
  };

  const closeAll = () => {
    setIsMenuOpen(false);
    setOpenMobileTravel(false);
    setIsSearchOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${
        isScrolled
          ? "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4"
          : "py-4 md:py-6"
      }`}
    >
      {/* Logo */}
      <Link to="/" onClick={closeAll}>
        <img
          src={assets.logo}
          alt="logo"
          className={`h-9 ${!isScrolled && "invert opacity-80"}`}
        />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-6 lg:gap-10">
        {navLinks.map((link) => (
          <div key={link.name} className="relative group">
            {link.isDropdown ? (
              <>
                <Link
                  to={link.path}
                  className={`flex items-center gap-1.5 relative pb-1 ${
                    isScrolled ? "text-gray-700" : "text-white"
                  }`}
                  onClick={closeAll}
                >
                  <span>{link.name}</span>
                  <svg
                    className={`w-4 h-4 transition-transform group-hover:rotate-180 ${
                      isScrolled ? "text-gray-600" : "text-white/90"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-current transition-all duration-300 w-0 group-hover:w-full ${
                      isScrolled ? "bg-gray-700" : "bg-white"
                    }`}
                  />
                </Link>

                {/* Dropdown */}
                <div
                  className={`
                    absolute left-0 top-full mt-2 w-52 bg-white shadow-xl rounded-lg py-2 
                    opacity-0 invisible pointer-events-none translate-y-1
                    group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto group-hover:translate-y-0
                    transition-all duration-150 ease-in-out z-50
                  `}
                >
                  {sikkimRegions.map((region) => (
                    <Link
                      key={region.id}
                      to={`/travel/${region.id}`}
                      className="block px-5 py-2.5 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                      onClick={closeAll}
                    >
                      {region.name}
                    </Link>
                  ))}
                </div>
              </>
            ) : (
              <Link
                to={link.path}
                className={`relative pb-1 ${
                  isScrolled ? "text-gray-700" : "text-white"
                }`}
                onClick={closeAll}
              >
                <span>{link.name}</span>
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-current transition-all duration-300 w-0 hover:w-full ${
                    isScrolled ? "bg-gray-700" : "bg-white"
                  }`}
                />
              </Link>
            )}
          </div>
        ))}
      </div>

      {/* Desktop Right Section */}
      <div className="hidden md:flex items-center gap-4">
        <div className="relative" ref={searchRef}>
          <img
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            src={assets.searchIcon}
            alt="search"
            className={`h-7 cursor-pointer ${isScrolled ? "invert" : ""}`}
          />

          {isSearchOpen && (
            <form
              onSubmit={handleSearch}
              className="absolute right-0 top-full mt-2 bg-white shadow-lg rounded-lg p-4 min-w-80 z-50"
            >
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search hotels..."
                className="w-full outline-none text-base"
                autoFocus
              />
            </form>
          )}
        </div>

        {!isLoaded ? (
          <div className="w-9 h-9 bg-gray-200 rounded-full animate-pulse" />
        ) : isSignedIn ? (
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: "w-9 h-9",
              },
            }}
          />
        ) : (
          <SignInButton mode="modal">
            <button className="bg-black text-white px-8 py-2.5 rounded-full font-medium">
              Login
            </button>
          </SignInButton>
        )}
      </div>

      {/* Mobile Icons */}
      <div className="md:hidden flex items-center gap-4">
        <img
          src={assets.searchIcon}
          alt="search"
          className={`h-6 cursor-pointer ${isScrolled ? "invert" : ""}`}
          onClick={() => setIsSearchOpen(!isSearchOpen)}
        />

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex flex-col justify-between w-6 h-5 focus:outline-none"
        >
          <span
            className={`block h-0.5 w-full bg-current transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2.5" : ""
            } ${isScrolled ? "bg-gray-900" : "bg-white"}`}
          />
          <span
            className={`block h-0.5 w-full bg-current transition-opacity duration-300 ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            } ${isScrolled ? "bg-gray-900" : "bg-white"}`}
          />
          <span
            className={`block h-0.5 w-full bg-current transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
            } ${isScrolled ? "bg-gray-900" : "bg-white"}`}
          />
        </button>
      </div>

      {/* Mobile Search */}
      {isSearchOpen && (
        <div
          ref={searchRef}
          className="md:hidden absolute left-0 right-0 top-full mt-2 bg-white shadow-lg rounded-b-lg p-4 z-50"
        >
          <form onSubmit={handleSearch} className="flex items-center">
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search hotels..."
              className="flex-1 outline-none text-base py-2 px-3 border border-gray-300 rounded-l-md"
              autoFocus
            />
            <button
              type="submit"
              className="bg-black text-white px-4 py-2 rounded-r-md font-medium"
            >
              Search
            </button>
          </form>
        </div>
      )}

      {/* Mobile Full-Screen Menu */}
      <div
        className={`fixed inset-0 bg-white flex flex-col items-center justify-center gap-6 transition-transform duration-500 z-40 md:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-6 right-6 text-4xl text-gray-800 hover:text-gray-500 transition-colors"
          aria-label="Close menu"
        >
          ×
        </button>

        <div className="flex flex-col items-center gap-10 w-full max-w-xs text-center">
          {navLinks.map((link) => {
            if (link.isDropdown) {
              return (
                <div key={link.name} className="w-full">
                  {/* Travel with link + separate toggle arrow */}
                  <div className="w-full flex items-center justify-center gap-3 py-3">
                    <Link
                      to={link.path}
                      className="text-2xl font-medium text-gray-800 hover:text-gray-600 transition-colors"
                      onClick={closeAll}
                    >
                      {link.name}
                    </Link>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setOpenMobileTravel(!openMobileTravel);
                      }}
                      className="p-1 text-gray-800 hover:text-gray-600"
                    >
                      <svg
                        className={`w-6 h-6 transition-transform ${openMobileTravel ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  </div>

                  {openMobileTravel && (
                    <div className="mt-4 flex flex-col gap-5">
                      {sikkimRegions.map((region) => (
                        <Link
                          key={region.id}
                          to={`/travel/${region.id}`}
                          className="text-xl text-gray-700 hover:text-gray-900 transition-colors py-2"
                          onClick={closeAll}
                        >
                          {region.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.name}
                to={link.path}
                className="text-2xl font-medium text-gray-800 hover:text-gray-600 transition-colors"
                onClick={closeAll}
              >
                {link.name}
              </Link>
            );
          })}

          <div className="mt-12">
            {!isLoaded ? (
              <div className="w-32 h-10 bg-gray-200 rounded-full animate-pulse" />
            ) : !isSignedIn ? (
              <SignInButton mode="modal">
                <button className="bg-black text-white px-12 py-4 rounded-full text-xl font-medium">
                  Login
                </button>
              </SignInButton>
            ) : (
              <UserButton afterSignOutUrl="/" />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;