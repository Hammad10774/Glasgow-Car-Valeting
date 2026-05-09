import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border-dark)] bg-background-dark text-white" id="contact">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          <div className="flex flex-col">
            <h3 className="text-xl font-bold mb-6 font-heading">GLASGOW CAR VALETING</h3>
            <p className="text-sm text-gray-400 mb-6">Premium mobile car valeting & detailing service. We bring the ultimate clean directly to your driveway.</p>
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 border border-[var(--color-border-dark)] rounded-full flex items-center justify-center text-[10px] text-primary font-heading italic">
                G.C.V
              </div>
            </div>
          </div>
          
          <div className="flex flex-col">
            <h4 className="text-sm uppercase tracking-widest opacity-40 mb-6">Premium Services</h4>
            <ul className="space-y-3">
              <li><Link to="/services/ceramic-coating" className="text-sm text-gray-300 hover:text-primary transition-colors">Ceramic Coating</Link></li>
              <li><Link to="/services/machine-polishing" className="text-sm text-gray-300 hover:text-primary transition-colors">Machine Polishing</Link></li>
              <li><Link to="/services/full-interior-valet" className="text-sm text-gray-300 hover:text-primary transition-colors">Full Interior Valet</Link></li>
              <li><Link to="/services/paint-correction" className="text-sm text-gray-300 hover:text-primary transition-colors">Paint Correction</Link></li>
              <li><Link to="/services/clay-bar-treatment" className="text-sm text-gray-300 hover:text-primary transition-colors">Clay Bar Treatment</Link></li>
            </ul>
          </div>
          
          <div className="flex flex-col">
            <h4 className="text-sm uppercase tracking-widest opacity-40 mb-6">Areas Covered</h4>
            <ul className="space-y-3">
              <li><Link to="/areas/west-end-car-valeting" className="text-sm text-gray-300 hover:text-primary transition-colors">West End</Link></li>
              <li><Link to="/areas/bearsden-car-valeting" className="text-sm text-gray-300 hover:text-primary transition-colors">Bearsden</Link></li>
              <li><Link to="/areas/southside-car-valeting" className="text-sm text-gray-300 hover:text-primary transition-colors">Southside</Link></li>
              <li><Link to="/areas/newton-mearns-car-valeting" className="text-sm text-gray-300 hover:text-primary transition-colors">Newton Mearns</Link></li>
              <li><Link to="/areas/milngavie-car-valeting" className="text-sm text-gray-300 hover:text-primary transition-colors">Milngavie</Link></li>
            </ul>
          </div>
          
          <div className="flex flex-col">
            <h4 className="text-sm uppercase tracking-widest opacity-40 mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <span className="block text-[10px] uppercase tracking-widest opacity-40 mb-1">Availability</span>
                <span className="text-sm text-gray-300">Mon — Sat / 06:00 — 21:00</span>
              </li>
              <li>
                <span className="block text-[10px] uppercase tracking-widest opacity-40 mb-1">Inquiries</span>
                <a href="tel:07435740502" className="text-sm text-white hover:text-primary transition-colors">0743 574 0502</a>
              </li>
              <li>
                <span className="block text-[10px] uppercase tracking-widest opacity-40 mb-1">Social</span>
                <a href="#" className="text-sm text-white hover:text-primary transition-colors">@GlasgowCarValet</a>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="mt-16 pt-8 border-t border-[var(--color-border-dark)] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">© {new Date().getFullYear()} Glasgow Car Valeting. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/" className="text-xs text-gray-500 hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/" className="text-xs text-gray-500 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
