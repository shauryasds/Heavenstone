import React from 'react';
import { MessageSquare } from 'lucide-react';

export const WhatsAppButton = () => {
  const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent(
    'Hi Havenstone Realty! I am interested in exploring property listings in Delhi NCR.'
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 bg-emerald-500 hover:bg-emerald-600 text-white p-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center border-2 border-white group focus:outline-none"
    >
      <MessageSquare className="w-6 h-6 fill-white" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 group-hover:ml-2 text-xs font-bold uppercase tracking-wider">
        Chat on WhatsApp
      </span>
    </a>
  );
};
