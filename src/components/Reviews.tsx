import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useState } from "react";

export function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const reviews = [
    {
      id: 1,
      text: "Absolutely stunning work. My car hasn't looked this good since it rolled off the showroom floor. The attention to detail is unmatched!",
      customerImage: "/customers/customer-1.png",
      serviceImage: "/services/full-valet.png",
      name: "James Wilson"
    },
    {
      id: 2,
      text: "The interior deep clean completely transformed my vehicle. Every stain is gone and it smells incredible. Highly professional service.",
      customerImage: "/customers/customer-2.png",
      serviceImage: "/services/inside-outside.png",
      name: "Sarah Jenkins"
    },
    {
      id: 3,
      text: "I was amazed by the ceramic coating results. The paintwork has a mirror-like finish that repels dirt effortlessly. Best investment for my car.",
      customerImage: "/customers/customer-3.png",
      serviceImage: "/services/ceramic-coating.png",
      name: "David Chen"
    },
    {
      id: 4,
      text: "Incredible attention to detail! The mini valet was quick but thorough. My car is gleaming again for the weekend. Highly recommended.",
      customerImage: "/customers/customer-4.png",
      serviceImage: "/services/mini-valet.png",
      name: "Emma Thompson"
    },
    {
      id: 5,
      text: "The signature valet is worth every penny. They managed to remove scratches I thought were permanent. The car looks brand new.",
      customerImage: "/customers/customer-5.png",
      serviceImage: "/services/signature-valet.png",
      name: "Robert Evans"
    },
    {
      id: 6,
      text: "Friendly staff, excellent communication, and impeccable results. The interior sterilisation gave me peace of mind for my family.",
      customerImage: "/customers/customer-6.png",
      serviceImage: "/services/interior-sterilisation.png",
      name: "Lisa Patel"
    },
    {
      id: 7,
      text: "Had my commercial van wrapped here. The design is vibrant and the application is flawless. A huge boost to my business visibility!",
      customerImage: "/customers/customer-7.png",
      serviceImage: "/services/commercial-wrap.png",
      name: "Michael Scott"
    }
  ];

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const imageVariants = {
    initial: (dir: number) => ({
      x: dir > 0 ? 150 : -150,
      scale: 0.8,
      opacity: 0
    }),
    animate: {
      x: 0,
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -150 : 150,
      scale: 0.8,
      opacity: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    })
  };

  const textVariants = {
    initial: {
      y: 50,
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    },
    exit: {
      y: 50,
      opacity: 0,
      transition: { duration: 0.6, ease: "easeIn" }
    }
  };

  return (
    <section className="py-24 bg-black relative overflow-hidden min-h-[80vh] flex flex-col justify-center" id="reviews">
      <div className="max-w-7xl w-full mx-auto px-6 lg:px-12 relative z-40 mb-8 md:mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-wide">
          Customer <span className="text-primary italic">Reviews</span>
        </h2>
      </div>

      <div className="absolute inset-y-0 left-2 md:left-12 flex items-center z-30">
        <button 
          onClick={handlePrev}
          className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition-colors shadow-xl"
          aria-label="Previous Review"
        >
          <ArrowLeft size={24} className="md:w-7 md:h-7" />
        </button>
      </div>
      
      <div className="absolute inset-y-0 right-2 md:right-12 flex items-center z-30">
        <button 
          onClick={handleNext}
          className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition-colors shadow-xl"
          aria-label="Next Review"
        >
          <ArrowRight size={24} className="md:w-7 md:h-7" />
        </button>
      </div>

      <div className="w-full relative h-[850px] sm:h-[750px] md:h-[600px] flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div 
            key={currentIndex}
            className="absolute inset-0 flex items-center justify-center px-6 lg:px-12 py-8"
          >
            {/* Background elements */}
            <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full overflow-hidden opacity-40 blur-[2px] pointer-events-none hidden md:block">
                <img src={reviews[(currentIndex + 1) % reviews.length].serviceImage} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-32 -right-16 w-80 h-80 rounded-full overflow-hidden opacity-40 blur-[2px] pointer-events-none hidden md:block">
                <img src={reviews[(currentIndex + 2) % reviews.length].serviceImage} alt="" className="w-full h-full object-cover" />
            </div>

            <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12 relative z-10 h-full">
              
              {/* Left Column: Review Text & Customer Image */}
              <div className="flex flex-col items-start justify-center h-full">
                <motion.div
                  variants={textVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="w-full"
                >
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-white mb-8 leading-tight max-w-xl">
                    "{reviews[currentIndex].text}"
                  </h3>
                  
                  {/* Customer Image box */}
                  <div className="relative">
                    <div className="w-32 h-40 sm:w-40 sm:h-48 rounded-2xl overflow-hidden border-2 border-white/20 relative">
                        <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent z-10"></div>
                        <img 
                            src={reviews[currentIndex].customerImage} 
                            alt={`Customer ${reviews[currentIndex].name}`} 
                            className="w-full h-full object-cover object-[center_20%] mix-blend-screen relative z-0"
                        />
                    </div>
                    <div className="mt-4">
                        <p className="text-white font-bold tracking-widest uppercase text-xs sm:text-sm">{reviews[currentIndex].name}</p>
                        <p className="text-primary text-[10px] sm:text-xs uppercase tracking-widest mt-1">Verified Customer</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Right Column: Large Circular Service Image */}
              <div className="flex justify-center md:justify-end mt-8 md:mt-0">
                <motion.div
                  custom={direction}
                  variants={imageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] rounded-full overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border-[8px] border-[#111]"
                >
                  <img 
                    src={reviews[currentIndex].serviceImage} 
                    alt="Service performed" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
