import { Phone, ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    { name: "Ceramic Coating", href: "/services/ceramic-coating" },
    { name: "Machine Polishing", href: "/services/machine-polishing" },
    { name: "Full Interior Valet", href: "/services/full-interior-valet" },
    { name: "Paint Correction", href: "/services/paint-correction" },
    { name: "Clay Bar Treatment", href: "/services/clay-bar-treatment" }
  ];

  const areas = [
    { name: "West End", href: "/areas/west-end-car-valeting" },
    { name: "Bearsden", href: "/areas/bearsden-car-valeting" },
    { name: "Southside", href: "/areas/southside-car-valeting" },
    { name: "Newton Mearns", href: "/areas/newton-mearns-car-valeting" },
    { name: "Milngavie", href: "/areas/milngavie-car-valeting" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background-dark/95 backdrop-blur-md border-b border-[var(--color-border-dark)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/" className="flex flex-col relative z-10">
              <span className="text-2xl font-heading italic tracking-widest text-primary">GLASGOW</span>
              <span className="text-xs font-sans tracking-[0.3em] uppercase opacity-60 -mt-1 text-white">Car Valeting</span>
            </Link>
            <img src="/fox-logo.png" alt="Fox Logo" className="h-16 w-auto object-contain -ml-2 -mt-2 transform scale-110" />
          </div>

          <div className="hidden md:flex flex-1 justify-center items-center gap-10">
            {/* Services Dropdown */}
            <div className="relative group h-20 flex items-center">
              <button className="text-white text-xs font-bold tracking-widest uppercase flex items-center gap-1 hover:text-primary transition-colors">
                Services <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
              </button>
              <div className="absolute top-20 left-1/2 -translate-x-1/2 w-64 bg-[#111] border border-[var(--color-border-dark)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-2xl">
                <div className="p-2 flex flex-col">
                  {services.map((service, index) => (
                    <Link key={index} to={service.href} className="text-gray-300 hover:text-primary hover:bg-[#1a1a1a] px-4 py-3 text-sm transition-colors border-b border-[var(--color-border-dark)] last:border-0">
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Areas Dropdown */}
            <div className="relative group h-20 flex items-center">
              <button className="text-white text-xs font-bold tracking-widest uppercase flex items-center gap-1 hover:text-primary transition-colors">
                Areas <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
              </button>
              <div className="absolute top-20 left-1/2 -translate-x-1/2 w-56 bg-[#111] border border-[var(--color-border-dark)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-2xl">
                <div className="p-2 flex flex-col">
                  {areas.map((area, index) => (
                    <Link key={index} to={area.href} className="text-gray-300 hover:text-primary hover:bg-[#1a1a1a] px-4 py-3 text-sm transition-colors border-b border-[var(--color-border-dark)] last:border-0">
                      {area.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/journal" className="text-white text-xs font-bold tracking-widest uppercase hover:text-primary transition-colors">
              Journal
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <div className="flex flex-col text-right">
              <span className="text-[10px] uppercase tracking-widest opacity-50 text-white">Inquiries</span>
              <a href="tel:07435740502" className="text-sm font-medium text-white hover:text-primary transition-colors">0743 574 0502</a>
            </div>
            <a
              href="/#book"
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
        <div className="md:hidden bg-background-dark border-b border-[var(--color-border-dark)] shadow-2xl max-h-[80vh] overflow-y-auto">
          <div className="px-6 pt-6 pb-8 flex flex-col gap-6">
            
            <div className="flex flex-col gap-4">
              <span className="text-primary text-[10px] tracking-widest uppercase font-bold">Services</span>
              {services.map((service, index) => (
                <Link key={index} to={service.href} className="text-white text-lg pl-4 border-l-2 border-[var(--color-border-dark)]" onClick={() => setIsMenuOpen(false)}>
                  {service.name}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-4 mt-4">
              <span className="text-primary text-[10px] tracking-widest uppercase font-bold">Areas Covered</span>
              {areas.map((area, index) => (
                <Link key={index} to={area.href} className="text-white text-lg pl-4 border-l-2 border-[var(--color-border-dark)]" onClick={() => setIsMenuOpen(false)}>
                  {area.name}
                </Link>
              ))}
            </div>

            <Link to="/journal" className="text-white text-xl font-bold mt-4" onClick={() => setIsMenuOpen(false)}>
              Auto Care Journal
            </Link>

            <div className="pt-6 mt-4 border-t border-[var(--color-border-dark)] flex flex-col gap-6">
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest opacity-50 mb-1 text-white">Inquiries</span>
                <a href="tel:07435740502" className="text-lg font-medium text-white hover:text-primary transition-colors">0743 574 0502</a>
              </div>
              <a
                href="/#book"
                onClick={() => setIsMenuOpen(false)}
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
