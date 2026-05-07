export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border-dark)] bg-background-dark text-white" id="contact">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="py-12 md:py-0 md:h-32 flex flex-col md:flex-row items-start md:items-center justify-between gap-12">
          
          <div className="flex flex-col sm:flex-row gap-12 sm:gap-16">
            <div className="flex flex-col">
              <span className="text-[9px] uppercase tracking-widest opacity-40 mb-2">Location</span>
              <span className="text-xs tracking-wider text-white">Glasgow & Surrounding Areas</span>
            </div>
            
            <div className="flex flex-col">
              <span className="text-[9px] uppercase tracking-widest opacity-40 mb-2">Availability</span>
              <span className="text-xs tracking-wider text-white">Mon — Sat / 06:00 — 21:00</span>
            </div>
            
            <div className="flex flex-col">
              <span className="text-[9px] uppercase tracking-widest opacity-40 mb-2">Inquiries</span>
              <a href="tel:01415550199" className="text-xs tracking-wider text-white hover:text-primary transition-colors">0141 555 0199</a>
            </div>
            
            <div className="flex flex-col">
              <span className="text-[9px] uppercase tracking-widest opacity-40 mb-2">Social</span>
              <a href="#" className="text-xs tracking-wider text-white hover:text-primary transition-colors">@GlasgowCarValet</a>
            </div>
          </div>

          <div className="flex items-center justify-between w-full md:w-auto">
            <div className="h-16 w-16 border border-[var(--color-border-dark)] rounded-full flex items-center justify-center text-[12px] text-primary font-heading italic">
              G.C.V
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  );
}
