"use client";

import Image from "next/image";

export default function Services() {
  const sections = [
    {
      image: "https://images.pexels.com/photos/5710930/pexels-photo-5710930.jpeg?auto=compress&cs=tinysrgb&w=800&h=525&dpr=1",
      title: "Anxiety & Stress Management",
      description:
        "Learn effective techniques to manage anxiety and reduce stress in daily life. Our expert therapists guide you through mindfulness and coping strategies. Find calm and balance with personalized support.",
    },
    {
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800&h=525&dpr=1",
      title: "Relationship Counseling",
      description:
        "Strengthen your relationships through open communication and understanding. Our counselors help couples navigate challenges and build stronger bonds. Rekindle connection with tailored guidance.",
    },
    {
      image: "https://images.pexels.com/photos/3755440/pexels-photo-3755440.jpeg?auto=compress&cs=tinysrgb&w=800&h=525&dpr=1",
      title: "Trauma Recovery",
      description:
        "Begin your healing journey with compassionate, trauma-informed care. Our specialists provide safe spaces to process and overcome past experiences. Reclaim your strength with expert support.",
    },
  ];

  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10">Area of Focus</h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {sections.map((section, index) => (
          <div key={index} className="text-center">
            <div className="flex justify-center">
              <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden relative">
                <Image
                  src={section.image}
                  alt={section.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, 256px"
                />
              </div>
            </div>
            <h3 className="mt-4 text-base sm:text-lg md:text-xl font-medium text-gray-900">{section.title}</h3>
            <p className="mt-2 text-sm sm:text-base text-gray-600 line-clamp-3">{section.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}