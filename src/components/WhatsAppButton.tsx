// src/components/WhatsAppButton.tsx
'use client';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/17164305246"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center space-x-2 bg-green-500 text-white px-4 py-3 rounded-full hover:bg-green-600 shadow-lg"
    >
      <span>💬</span>
      <span>Support</span>
    </a>
  );
}
