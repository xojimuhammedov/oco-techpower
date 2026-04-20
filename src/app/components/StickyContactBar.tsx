import { Phone, Send } from "lucide-react";
import { useState, useEffect } from "react";

export function StickyContactBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-primary to-slate-800 text-white shadow-2xl border-t-4 border-accent animate-[slideUp_0.3s_ease-out]">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <div className="text-lg md:text-xl mb-1">
              Ready to Order? Get <span className="text-accent">Free Installation</span>
            </div>
            <div className="text-sm text-gray-300">
              Talk to our experts now • Same-day response guaranteed
            </div>
          </div>
          <div className="flex gap-3">
            <a
              href="tel:+998901395533"
              className="bg-accent text-white px-6 py-3 rounded-lg hover:bg-accent/90 transition-all hover:scale-105 inline-flex items-center gap-2 shadow-xl whitespace-nowrap"
            >
              <Phone className="w-5 h-5" />
              <span className="hidden sm:inline">Call Now</span>
            </a>
            <a
              href="https://t.me/ocotechpoweradmin"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 text-white px-6 py-3 rounded-lg hover:bg-white/20 transition-all backdrop-blur-sm border border-white/20 inline-flex items-center gap-2 whitespace-nowrap"
            >
              <Send className="w-5 h-5" />
              <span className="hidden sm:inline">Telegram</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
