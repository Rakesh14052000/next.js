"use client";

export default function About() {
  return (
    <section id="about" className="py-12 sm:py-16 bg-white mx-4 sm:mx-8 md:mx-16 lg:mx-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">
              About Dr. Serena Blake
            </h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
              Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of experience and over 500 client sessions. She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma. Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to creating a safe, supportive space for you to thrive.
            </p>

            <div className="text-gray-700 text-sm sm:text-base space-y-2">
              <p><strong>📍 Location:</strong> 1287 Maplewood Drive, Los Angeles, CA 90026</p>
              <p><strong>📞 Phone:</strong> <a href="tel:3235550192" className="text-blue-600 hover:underline">(323) 555-0192</a></p>
              <p><strong>📧 Email:</strong> <a href="mailto:serena@blakepsychology.com" className="text-blue-600 hover:underline">serena@blakepsychology.com</a></p>
              <p><strong>🕒 Office Hours:</strong></p>
              <ul className="list-disc list-inside ml-4">
                <li>In-person: Tue & Thu, 10 AM–6 PM</li>
                <li>Virtual via Zoom: Mon, Wed & Fri, 1 PM–5 PM</li>
              </ul>
              <p><strong>🧠 Experience:</strong> 8 years of practice, 500+ sessions</p>
            </div>
          </div>

          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <img
              src="/image.jpg"
              alt="Dr. Serena Blake"
              className="w-full h-auto max-h-[700px] object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}