import React, { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="shadow-md">
      <div className="max-w-7xl  px-4 py-1 flex items-center justify-between">
        {/* Brand / Logo */}
        <h1 className="text-xl font-semibold text-[#f26c23] mt-4 mr-6">Filmopedia</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 items-center mt-4 ">
          <a href="#" className="text-[#f26c23] hover:text-primary">Home</a>
          <a href="#" className="text-[#f26c23] hover:text-primary">About</a>
          <a href="#" className="text-[#f26c23] hover:text-primary">Contact</a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="relative z-50 flex flex-col justify-between w-8 h-6 md:hidden focus:outline-none"
        >
          <span
            className={`h-[2px] w-full bg-gray-900 rounded transition-transform duration-300 ${
              open ? "translate-y-[8px] rotate-45" : ""
            }`}
          ></span>
          <span
            className={`h-[2px] w-full bg-gray-900 rounded transition-opacity duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`h-[2px] w-full bg-gray-900 rounded transition-transform duration-300 ${
              open ? "-translate-y-[8px] -rotate-45" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <nav
        className={`md:hidden bg-white border-t border-gray-100 transition-all duration-300 overflow-hidden ${
          open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-3 flex flex-col space-y-2">
          <a
            href="#"
            onClick={() => setOpen(false)}
            className="block px-2 py-2 rounded hover:bg-gray-100 text-gray-700"
          >
            Home
          </a>
          <a
            href="#"
            onClick={() => setOpen(false)}
            className="block px-2 py-2 rounded hover:bg-gray-100 text-gray-700"
          >
            About
          </a>
          <a
            href="#"
            onClick={() => setOpen(false)}
            className="block px-2 py-2 rounded hover:bg-gray-100 text-gray-700"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
