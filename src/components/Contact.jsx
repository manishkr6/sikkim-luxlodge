import React, { useState } from "react";
import axios from "axios";
import { assets } from "../assets/assets";
import Reveal from "./Reveal";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState({ show: false, type: "", message: "" });

  const showToast = (type, message) => {
    setToast({ show: true, type, message });
    setTimeout(() => setToast({ show: false, type: "", message: "" }), 4000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic client-side validation
    if (!name.trim() || !email.trim() || !message.trim()) {
      showToast("error", "Please fill in all fields");
      return;
    }

    setSending(true);

    const dataToSend = { name, email, message };

    try {
      const response = await axios.post(
        "http://localhost:5000/api/contact",
        dataToSend
      );

      // Success
      showToast("success", response.data.message || "Message sent successfully!");

      // Clear form
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Form submission error:", error);
      const errMsg =
        error.response?.data?.message ||
        "Failed to send message. Please try again.";
      showToast("error", errMsg);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero banner */}
      <div className="relative h-48 sm:h-64 md:h-80 lg:h-[28rem] xl:h-[32rem] overflow-hidden">
        <img
          src={assets.contactImg}
          alt="Contact banner"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-5 sm:px-8 md:px-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-bold tracking-tight">
            Contact Us
          </h1>
          <nav className="mt-3 text-sm sm:text-base text-white/80">
            <a href="/" className="hover:text-white underline transition">
              Home
            </a>
            <span className="mx-3">/</span>
            <span className="font-medium">Contact</span>
          </nav>
        </div>
      </div>

      {/* Main content */}
      <section className="py-12 sm:py-16 md:py-20 px-5 sm:px-6 lg:px-8 xl:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-start">
              {/* Contact Info */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <p className="text-sm uppercase tracking-wider text-red-600 font-medium">
                  Contact Us
                </p>
                <h2 className="mt-3 text-3xl sm:text-4xl font-playfair text-gray-900">
                  Get In Touch
                </h2>
                <p className="mt-4 text-gray-600 leading-relaxed text-base">
                  Have a question or need help with your booking? Reach us by
                  phone, email or send a message using the form below.
                </p>

                <div className="mt-8 space-y-6 text-gray-700">
                  <div className="flex items-start gap-4">
                    <svg
                      className="w-6 h-6 text-red-500 mt-1 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2a10 10 0 100 20 10 10 0 000-20zM8 11h8v2H8z" />
                    </svg>
                    <div>
                      <div className="text-sm text-gray-500">Address</div>
                      <div className="font-medium">Gangtok, Sikkim 737101</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <svg
                      className="w-6 h-6 text-red-500 mt-1 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.54.57 1 1 0 011 1v3.5a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.54 1 1 0 01-.24 1.01l-2.2 2.2z" />
                    </svg>
                    <div>
                      <div className="text-sm text-gray-500">Phone</div>
                      <a
                        href={`tel:${assets?.hotelDummyData?.contact || "+91 12345 67890"}`}
                        className="font-medium text-red-600 hover:underline"
                      >
                        {assets?.hotelDummyData?.contact || "+91 12345 67890"}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <svg
                      className="w-6 h-6 text-red-500 mt-1 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                    <div>
                      <div className="text-sm text-gray-500">Email</div>
                      <a
                        href="mailto:support@example.com"
                        className="font-medium text-red-600 hover:underline"
                      >
                        support@example.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6 sm:p-8 lg:p-10 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl sm:text-3xl font-playfair text-gray-900">
                  Write Us A Message
                </h3>

                <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    required
                    className="w-full rounded-full border border-gray-200 px-5 py-3 text-base outline-none focus:border-red-400 focus:ring-2 focus:ring-red-200 transition"
                  />

                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email"
                    required
                    className="w-full rounded-full border border-gray-200 px-5 py-3 text-base outline-none focus:border-red-400 focus:ring-2 focus:ring-red-200 transition"
                  />

                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={5}
                    placeholder="Your Message..."
                    required
                    className="w-full rounded-2xl border border-gray-200 px-5 py-4 text-base outline-none resize-none focus:border-red-400 focus:ring-2 focus:ring-red-200 transition"
                  />

                  <button
                    type="submit"
                    disabled={sending}
                    className={`w-full py-3.5 px-8 rounded-full text-white font-medium transition-all
                      ${
                        sending
                          ? "bg-red-400 cursor-not-allowed"
                          : "bg-red-600 hover:bg-red-700 active:bg-red-800"
                      }`}
                  >
                    {sending ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </div>

            {/* Google Map */}
            <div className="mt-12 lg:mt-16 rounded-2xl overflow-hidden shadow-xl border border-gray-200">
              <iframe
                title="Gangtok location map"
                src="https://www.google.com/maps?q=Gangtok+Sikkim&output=embed"
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[28rem] border-0"
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Toast Notification */}
      {toast.show && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 min-w-[320px] max-w-[90vw] px-4">
          <div
            className={`flex items-center justify-between gap-4 px-5 py-4 rounded-xl shadow-2xl text-white font-medium transition-all duration-300 transform
              ${toast.type === "success" ? "bg-green-600" : "bg-red-600"}`}
          >
            <span>{toast.message}</span>
            <button
              onClick={() => setToast({ show: false, type: "", message: "" })}
              className="text-white/80 hover:text-white text-xl leading-none"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;