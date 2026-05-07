import { motion } from "motion/react";
import { Shield, Sparkles, Droplets, PaintBucket } from "lucide-react";

export function Services() {
  const services = [
    {
      id: "01",
      title: "Hand Wash & Detail",
      description: "Meticulous interior and exterior cleaning to restore that factory-fresh feel. Employs ultra-pure deionized water.",
      price: "£65",
      link: "#"
    },
    {
      id: "02",
      title: "Paint Correction",
      description: "Remove swirls, scratches, and oxidation to bring back depth and clarity. A multi-stage decontamination process.",
      price: "£295",
      link: "#"
    },
    {
      id: "03",
      title: "Ceramic Coating",
      description: "Long-lasting hydrophobic protection that keeps your car cleaner, longer. Includes high-gloss machine polish.",
      price: "£495",
      link: "#"
    },
    {
      id: "04",
      title: "Paint Protection Film",
      description: "Invisible armor against rock chips, bug splatters, and minor abrasions. Precision-cut for an exact fit.",
      price: "£1,250",
      link: "#"
    },
  ];

  return (
    <section className="py-24 bg-background-dark border-b border-[var(--color-border-dark)]" id="services">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-[1px] bg-primary"></div>
              <span className="text-[10px] uppercase tracking-[0.3em] font-medium opacity-60">Custom Protection</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-heading text-white">Here's What We <span className="italic text-primary">Offer.</span></h2>
          </div>
          <a href="#book" className="text-[10px] uppercase tracking-widest text-primary hover:text-white transition-colors border-b border-primary/30 pb-1">
            View All Services
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-0">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 sm:p-12 border-t border-[var(--color-border-dark)] hover:bg-background-light transition-colors group"
            >
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-primary block mb-2">Package {service.id}</span>
                  <h3 className="text-2xl font-heading italic text-white">{service.title}</h3>
                </div>
                <span className="text-xl font-light opacity-40 group-hover:opacity-100 group-hover:text-primary transition-all">{service.price}</span>
              </div>
              <p className="mt-4 text-xs opacity-60 leading-loose text-white/80 max-w-md">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
