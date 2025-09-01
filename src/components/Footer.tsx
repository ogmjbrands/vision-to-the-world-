// src/components/Footer.tsx
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center items-center mb-4">
          <Image src="/logo.png" alt="Vision To The World" width={40} height={40} />
          <span className="font-bold text-xl ml-2">Vision To The World</span>
        </div>
        <p className="text-gray-300 mb-6">Making global travel easy, affordable, and unforgettable.</p>
      </div>
    </footer>
  );
}
