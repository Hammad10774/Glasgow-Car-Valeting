import { motion } from "motion/react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useRef } from "react";

export function Services() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      id: "01",
      title: "Inside & Outside",
      description: "This will offer you both interior and exterior cleaning services. These packages clean everything paintwork, tyres, carpets, seats, mats, dashboard - for a complete inside/outside refresh.",
      price: "From £50.00",
      image: "/services/inside-outside.png",
      link: "#"
    },
    {
      id: "02",
      title: "Exterior Valets",
      description: "Exterior valets will offer you cleaning services for the outside of your car. Targets paintwork, wheels, tyres, glass and trim with wash, decontamination and protective polish options.",
      price: "From £40.00",
      image: "/services/exterior-valet.png",
      link: "#"
    },
    {
      id: "03",
      title: "Interior Valets",
      description: "Interior valets will offer you cleaning for the inside of your car. Focusing on carpets, seats, boot, mats, dash & upholstery. Mould removal & sanitisation options available.",
      price: "From £51.00",
      image: "/services/interior-valet.png",
      link: "#"
    },
    {
      id: "04",
      title: "Mini Valet",
      description: "A quick maintenance clean for day-to-day dirt. Ideal when your car isn't heavily soiled and keeps it tidy between deeper valets.",
      price: "From £50.00",
      image: "/services/mini-valet.png",
      link: "#"
    },
    {
      id: "05",
      title: "Full Valet",
      description: "Our most popular package as it offers a deeper clean inside and out, ideal to freshen up paintwork, tyres, carpets, seats and more.",
      price: "From £85.00",
      image: "/services/full-valet.png",
      link: "#"
    },
    {
      id: "06",
      title: "Full Valet & Paint Protection",
      description: "Full valet plus protective wax/sealant treatment. Shields paintwork from weather, bird droppings and road grime for longer lasting shine.",
      price: "From £119.00",
      image: "/services/full-valet-protection.png",
      link: "#"
    },
    {
      id: "07",
      title: "Signature Valet",
      description: "Our ultimate best-in-class valet with clay bar decontamination, sealant, roofline cleaning and full works. Luxury transformation for when you want to treat your car.",
      price: "From £154.00",
      image: "/services/signature-valet.png",
      link: "#"
    },
    {
      id: "08",
      title: "Interior Standard Clean",
      description: "Perfect all-round interior spruce up with vacuuming, surface wiping, and mats cleaned. Keeps everyday mess at bay without deep cleaning.",
      price: "From £51.00",
      image: "/services/interior-standard.png",
      link: "#"
    },
    {
      id: "09",
      title: "Interior Deep Clean",
      description: "Can help restore even the dirtiest cars with intensive interior cleaning on carpets, seats, mats and upholstery. Tackles heavier soiling, stains and grime.",
      price: "From £86.00",
      image: "/services/interior-deep.png",
      link: "#"
    },
    {
      id: "10",
      title: "Interior Deep Clean & Full Sterilisation",
      description: "Complete disinfection service that deep cleans every surface while killing 99% of bacteria. Includes fog sanitisation treatment. Optional mould removal add-on available.",
      price: "From £108.00",
      image: "/services/interior-sterilisation.png",
      link: "#"
    }
  ];

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-[#111111] relative overflow-hidden" id="services">
      {/* Background dot pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-wide">
            Here's What We Offer <span className="text-white">Motorists</span>
          </h2>
          
          <div className="flex gap-4 items-center self-end md:self-auto hidden md:flex">
            <button 
              onClick={scrollLeft}
              className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition-colors z-20 cursor-pointer"
              aria-label="Previous"
            >
              <ArrowLeft size={24} />
            </button>
            <button 
              onClick={scrollRight}
              className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition-colors z-20 cursor-pointer"
              aria-label="Next"
            >
              <ArrowRight size={24} />
            </button>
          </div>
        </div>

        <div className="relative">
          {/* Mobile navigation */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:hidden z-20">
            <button onClick={scrollLeft} className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shadow-lg border border-gray-200">
              <ArrowLeft size={20} />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:hidden z-20">
            <button onClick={scrollRight} className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shadow-lg border border-gray-200">
              <ArrowRight size={20} />
            </button>
          </div>

          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 pt-4 -mx-6 px-6 lg:mx-0 lg:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex-none w-[280px] sm:w-[320px] md:w-[360px] h-[480px] rounded-2xl overflow-hidden snap-start group cursor-pointer"
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/10 group-hover:from-black/95 group-hover:via-black/80 transition-all duration-300" />

                {/* Top Right Red Arrow Button */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#ff0000] text-white flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-110">
                  <ArrowRight size={20} strokeWidth={3} />
                </div>

                {/* Content at the bottom */}
                <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end h-full">
                  <div className="transform transition-transform duration-500 translate-y-24 group-hover:translate-y-0">
                    <h3 className="text-2xl font-black text-white uppercase tracking-wider mb-2 leading-tight">
                      {service.title}
                    </h3>
                    
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      <p className="text-white/80 text-sm leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <span className="inline-block bg-[#ff0000] text-white font-bold px-4 py-2 rounded-full text-sm">
                        {service.price}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
