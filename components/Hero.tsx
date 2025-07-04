"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <div className="bg-gray-100">
      <section
        id="home"
        className="py-12 sm:py-16 md:py-24 min-h-[400px] flex items-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Psychological Care For
          </h1>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Change, Insight, and Well-Being
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white mb-6 leading-relaxed max-w-3xl mx-auto">
            Offering individual psychotherapy for adults via telehealth in
            Michigan and <span className="underline">most U.S. states</span> through PSYPACT participation
          </p>
          <Link
            href="#contact"
            className="inline-block bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 hover:bg-blue-700 uppercase rounded-full text-xs sm:text-sm md:text-base"
          >
            Schedule a consultation
          </Link>
        </div>
      </section>
    </div>
  );
}