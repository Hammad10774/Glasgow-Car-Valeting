import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

export function About() {
  return (
    <section className="py-24 bg-background-light border-y border-[var(--color-border-dark)] overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="py-12"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-[1px] bg-primary"></div>
              <span className="text-[10px] uppercase tracking-[0.3em] font-medium opacity-60">About Us</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-heading leading-[1.1] mb-8 text-white">
              Premium detailing and protection.<br /> <span className="italic text-primary">Born in Glasgow.</span>
            </h2>
            <p className="text-white/70 text-sm mb-6 font-light leading-loose">
              Glasgow Car Valeting is the city's go-to mobile detailing and protection specialist, bringing premium care directly to your door. From Paint Protection Film (PPF) and ceramic coatings that guard your investment, to paint correction that revives tired finishes, we specialize in making vehicles look their best and keeping them that way.
            </p>
            <p className="text-white/70 text-sm mb-10 font-light leading-loose">
              Whether you're protecting a daily driver, refreshing a luxury vehicle, or wrapping an entire fleet, we deliver expert results with professional convenience.
            </p>
            
            <ul className="space-y-6 mb-12">
              {['Fully Mobile Service to Your Door', 'Premium Eco-Friendly Products', 'Satisfaction Guaranteed', 'Expert Technicians'].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-xs tracking-widest uppercase text-white/80">
                  <div className="w-1 h-1 bg-primary rounded-full"></div>
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="#book"
              className="inline-flex bg-primary hover:bg-white text-black transition-all duration-300 px-8 py-4 font-sans font-bold text-xs uppercase tracking-widest items-center"
            >
              SCHEDULE VALET
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative lg:pl-12 h-full flex flex-col justify-center"
          >
               <div className="relative w-5/6 ml-auto my-8">
                 <img 
                    src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80" 
                    alt="Detailing action" 
                    className="w-full aspect-[4/5] object-cover border border-[var(--color-border-dark)] grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700 shadow-2xl"
                 />
                 <div className="absolute -bottom-8 -left-16 bg-background-dark border border-[var(--color-border-dark)] p-8 shadow-2xl z-10 w-64 hidden sm:block">
                    <p className="font-heading text-5xl italic text-primary leading-none mb-3">100%</p>
                    <p className="text-[10px] uppercase tracking-widest opacity-60">Mobile Service</p>
                 </div>
               </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
