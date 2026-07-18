import React, { useState, useEffect } from 'react';
import { ArrowUp, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface PopupsProps {
  onOpenQuoteModal: () => void;
  setCurrentPage: (page: string) => void;
}

export default function Popups({ onOpenQuoteModal, setCurrentPage }: PopupsProps) {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsAppClick = () => {
    const msg = encodeURIComponent("Hello Namya EcoPack sales team. I am interested in requesting your sugarcane bagasse product catalogue and container-load pricing.");
    window.open(`https://wa.me/917041969067?text=${msg}`, '_blank');
  };

  return (
    <>
      {/* Floating Buttons: WhatsApp & Scroll To Top */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3">
        {/* Scroll To Top */}
        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              onClick={handleScrollToTop}
              className="bg-white text-slate-800 p-3.5 rounded-full shadow-lg border border-slate-100 hover:bg-slate-50 transition-all duration-200"
              title="Back to Top"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* WhatsApp Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleWhatsAppClick}
          className="bg-emerald-500 text-white p-4 rounded-full shadow-xl hover:bg-emerald-600 transition-all duration-200 flex items-center justify-center relative group"
          title="Chat with export manager on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 fill-white text-emerald-500" />
          <span className="absolute right-full mr-3 bg-slate-900 text-white text-xs font-semibold py-1.5 px-3 rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            WhatsApp Trade Desk (Live)
          </span>
          {/* Pulse notification dot */}
          <span className="absolute top-0 right-0 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-red-500"></span>
          </span>
        </motion.button>
      </div>
    </>
  );
}
