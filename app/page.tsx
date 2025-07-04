"use client";

import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import FAQSection from "../components/FAQSection";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="pb-12 sm:pb-16 px-4 sm:px-8 md:px-16 bg-gray-100">
        <NavBar />
        <Hero />
      </div>
      <About />
      <Services />
      <FAQSection />
      <ContactForm />
    </div>
  );
}