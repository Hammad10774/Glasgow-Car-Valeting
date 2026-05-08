import { Phone, ChevronRight, Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks: { name: string; href: string }[] = [];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background-dark/95 backdrop-blur-md border-b border-[var(--color-border-dark)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <a href="/" className="flex flex-col relative z-10">
              <span className="text-2xl font-heading italic tracking-widest text-primary">GLASGOW</span>
              <span className="text-xs font-sans tracking-[0.3em] uppercase opacity-60 -mt-1">Car Valeting</span>
            </a>
            <img src="/fox-logo.png" alt="Fox Logo" className="h-16 w-auto object-contain -ml-2 -mt-2 transform scale-110" />
          </div>

          <div className="hidden md:flex flex-1"></div>

          <div className="hidden md:flex items-center gap-6">
            <div className="flex flex-col text-right">
              <span className="text-[10px] uppercase tracking-widest opacity-50">Inquiries</span>
              <a href="tel:07435740502" className="text-sm font-medium hover:text-primary transition-colors">0743 574 0502</a>
            </div>
            <a
              href="#book"
              className="bg-primary hover:bg-white text-black transition-all duration-300 px-6 py-3 font-sans font-bold text-xs uppercase tracking-widest flex items-center gap-2 group"
            >
              SCHEDULE
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-primary focus:outline-none p-2"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background-dark border-b border-[var(--color-border-dark)] shadow-2xl">
          <div className="px-6 pt-6 pb-8 flex flex-col gap-6">

            <div className="pt-6 border-t border-[var(--color-border-dark)] flex flex-col gap-6">
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest opacity-50 mb-1">Inquiries</span>
                <a href="tel:07435740502" className="text-lg font-medium hover:text-primary transition-colors">0743 574 0502</a>
              </div>
              <a
                href="#book"
                className="bg-primary hover:bg-white text-black transition-all duration-300 px-6 py-4 font-sans font-bold text-xs uppercase tracking-widest flex items-center justify-center"
              >
                SCHEDULE VALET
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
