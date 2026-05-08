import { ChevronRight, Phone } from "lucide-react";
import { motion } from "motion/react";

export function Hero() {
  return (
    <div className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-car-edited.jpg"
          alt="Car Detailing"
          className="w-full h-full object-cover"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-background-dark/90 to-background-dark/30" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full pt-12 pb-24 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center lg:pr-12 py-12"
          >
            <p className="text-[10px] uppercase tracking-widest text-primary block mb-6 font-medium">
              Vapor Auto Detailing
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-heading leading-[0.9] mb-8 text-white">
              Glasgow's Leader in<br />
              <span className="italic text-primary">Mobile Detailing.</span>
            </h1>
            <p className="text-lg text-white/80 font-light mb-10 max-w-xl leading-relaxed">
              Premium protection, personalized care, and professional results, Glasgow Car Valeting brings luxury vehicle detailing delivered to your doorstep.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
              <a
                href="#book"
                className="bg-primary hover:bg-white text-black transition-all duration-300 px-8 py-4 font-sans font-bold text-xs uppercase tracking-widest flex items-center justify-center sm:justify-start w-full sm:w-auto"
              >
                SCHEDULE VALET
              </a>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest opacity-50">Inquiries</span>
                <a href="tel:07435740502" className="text-sm font-medium text-white hover:text-primary transition-colors cursor-pointer">0743 574 0502</a>
              </div>
            </div>

            <div className="mt-16 flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-8 h-8 rounded-full border border-background-dark overflow-hidden bg-zinc-800">
                      <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                    </div>
                  ))}
                </div>
                <div className="ml-4">
                  <div className="flex text-primary text-sm tracking-[0.2em]">
                    ★★★★★
                  </div>
                  <span className="text-[10px] uppercase tracking-widest opacity-50 mt-1 block">5.0 Google Reviews</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block relative pl-12 h-full"
          >
          </motion.div>
        </div>
      </div>

      {/* 100% Mobile Service Badge */}
      <motion.div 
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 right-8 lg:bottom-12 lg:right-12 z-20 hidden sm:flex"
      >
        <div 
          className="flex flex-col items-start justify-center px-10 py-8 bg-transparent"
        >
          <span className="text-primary font-heading italic font-medium text-6xl leading-none mb-3">
            100%
          </span>
          <span className="text-gray-400 font-bold tracking-[0.3em] uppercase text-[10px]">
            Mobile Service
          </span>
        </div>
      </motion.div>
    </div>
  );
}
