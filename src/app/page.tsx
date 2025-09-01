// src/app/page.tsx

import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 bg-blue-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Vision To The World</h1>
          <p className="text-xl mb-8">See The World With Us</p>
          <a
            href="/packages"
            className="bg-yellow-500 text-black px-8 py-3 rounded-full font-bold hover:bg-yellow-400 inline-block"
          >
            🌍 View Packages
          </a>
        </div>
      </section>

      {/* YouTube Section */}
      <section className="py-16 bg-gray-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Travel Inspiration</h2>
          <p className="mb-8 max-w-2xl mx-auto text-gray-300">
            Watch real journeys and get inspired for your next adventure.
          </p>
          <div className="flex justify-center">
            <div className="aspect-video max-w-4xl w-full rounded-lg overflow-hidden shadow-2xl">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/videoseries?list=LL"
                title="Vision To The World - Travel Vlogs"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
          <div className="mt-8">
            <a
              href="https://www.youtube.com/@visiontotheworld"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-600 text-white px-6 py-3 rounded-full font-medium hover:bg-red-700 transition"
            >
              🔔 Subscribe on YouTube
            </a>
          </div>
        </div>
      </section>

      {/* Components */}
      <WhatsAppButton />
      <Footer />
    </div>
  );
}
