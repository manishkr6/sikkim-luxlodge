import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { useUser, SignInButton, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Hotels", path: "/rooms" },
    { name: "Experience", path: "/experience" },
    { name: "Contact", path: "/contact" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  // ✅ CLERK AUTH STATE
  const { isSignedIn } = useUser();

  const searchRef = useRef(null);

  useEffect(() => {
    if (location.pathname !== "/") {
      setIsScrolled(true);
      return;
    } else {
      setIsScrolled(false);
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  // Close search on outside click (works on both desktop and mobile)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isSearchOpen &&
        searchRef.current &&
        !searchRef.current.contains(event.target)
      ) {
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

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${
        isScrolled
          ? "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4"
          : "py-4 md:py-6"
      }`}
    >
      {/* Logo */}
      <Link to="/">
        <img
          src={assets.logo}
          alt="logo"
          className={`h-9 ${!isScrolled && "invert opacity-80"}`}
        />
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-4 lg:gap-8">
        {navLinks.map((link, i) => (
          <a
            key={i}
            href={link.path}
            className={`group flex flex-col gap-0.5 ${
              isScrolled ? "text-gray-700" : "text-white"
            }`}
          >
            {link.name}
            <div
              className={`${
                isScrolled ? "bg-gray-700" : "bg-white"
              } h-0.5 w-0 group-hover:w-full transition-all duration-300`}
            />
          </a>
        ))}
      </div>

      {/* Desktop Right */}
      <div className="hidden md:flex items-center gap-4">
        <div className="relative" ref={searchRef}>
          <img
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            src={assets.searchIcon}
            alt="search"
            className={`${isScrolled && `invert`} h-7 cursor-pointer`}
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
                className="w-full outline-none"
                autoFocus
              />
            </form>
          )}
        </div>

        {/* ✅ AUTH SECTION */}
        {isSignedIn ? (
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
            <button className="bg-black text-white px-8 py-2.5 rounded-full">
              Login
            </button>
          </SignInButton>
        )}
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden flex items-center gap-4">
        <img
          src={assets.searchIcon}
          alt="search"
          className={`h-6 cursor-pointer ${isScrolled && "invert"}`}
          onClick={() => setIsSearchOpen(!isSearchOpen)}
        />

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex flex-col justify-between w-6 h-5 focus:outline-none"
        >
          <span
            className={`block h-0.5 w-full bg-gray-900 transition-transform duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2.5" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-gray-900 transition-opacity duration-300 ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-gray-900 transition-transform duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Search Form */}
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
              className="bg-blue-600 text-white px-4 py-2 rounded-r-md font-medium"
            >
              Search
            </button>
          </form>
        </div>
      )}

      {/* Mobile Menu - with Close Button */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-6 transition-transform duration-500 z-40 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-6 right-6 text-3xl text-gray-800 hover:text-gray-500 transition-colors"
          aria-label="Close menu"
        >
          ✕
        </button>

        {/* Nav Links */}
        {navLinks.map((link, i) => (
          <a
            key={i}
            href={link.path}
            className="text-2xl font-medium text-gray-800 hover:text-blue-600 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            {link.name}
          </a>
        ))}

        {/* Auth in Mobile */}
        <div className="mt-8">
          {!isSignedIn ? (
            <SignInButton mode="modal">
              <button className="bg-black text-white px-10 py-3 rounded-full text-lg">
                Login
              </button>
            </SignInButton>
          ) : (
            <UserButton afterSignOutUrl="/" />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;