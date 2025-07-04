"use client";

import { useState } from "react";
import Link from "next/link";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative bg-gray-100 w-full z-20 py-4 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
              Dr. Serena Blake
            </Link>
          </div>

          {/* Hamburger menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center space-x-4">
            <NavLinks />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-gray-100 px-4 pb-4 transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col space-y-2">
          <NavLinks />
        </div>
      </div>
    </nav>
  );
}

function NavLinks() {
  const linkClass =
    "block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors text-sm sm:text-base md:text-lg";

  return (
    <>
      <Link href="#home" className={linkClass}>
        Home
      </Link>
      <Link href="#about" className={linkClass}>
        About
      </Link>
      <Link href="#services" className={linkClass}>
        Services
      </Link>
      <Link href="#rates" className={linkClass}>
        Rates
      </Link>
      <Link href="#contact" className={linkClass}>
        Contact
      </Link>
      <Link href="#" className={linkClass}>
        Blog
      </Link>
    </>
  );
}