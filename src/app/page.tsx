// src/app/page.tsx

import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-20 bg-blue-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Vision To The World</h1>
          <p className="text-xl mt-4">See The World With Us</p>
          <a href="/packages" className="bg-yellow-500 text-black px-6 py-3 rounded-full mt-6 inline-block">
            🌍 View Packages
          </a>
        </div>
      </section>

      <WhatsAppButton />
      <Footer />
    </div>
  );
}
