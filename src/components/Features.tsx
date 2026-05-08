import { motion } from "motion/react";

export function Features() {
  const features = [
    {
      title: "Quality Service",
      description: "Whether you're looking to bring back your vehicle’s original brilliance or shield it from the elements, we treat every vehicle like our own."
    },
    {
      title: "Customer Satisfaction",
      description: "Your vehicle has its own needs, and so do you. We take the time to understand your goals, and deliver a personalized experience."
    },
    {
      title: "Mobile Convenience",
      description: "Life’s busy. That’s why we come to you. Our fully mobile detailing service saves you hours of waiting at a shop."
    }
  ];

  return (
    <section className="py-24 bg-background-dark border-b border-[var(--color-border-dark)] overflow-hidden" id="features">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-16 px-6 lg:px-12">
          <div className="lg:w-1/3 pt-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-[1px] bg-primary"></div>
              <span className="text-[10px] uppercase tracking-[0.3em] font-medium opacity-60">Our Philosophy</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-heading leading-[1.1] text-white">
              Every Detail <br />
              <span className="italic text-primary">Matters.</span>
            </h2>
          </div>
          <div className="lg:w-2/3 border-t lg:border-t-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`p-8 lg:p-12 ${index !== features.length - 1 ? 'border-b md:border-b-0 md:border-r border-[var(--color-border-dark)]' : ''}`}
                >
                  <span className="text-[10px] uppercase tracking-widest text-primary block mb-4">0{index + 1}</span>
                  <h3 className="text-xl font-heading italic text-white mb-4">{feature.title}</h3>
                  <p className="text-xs opacity-60 leading-loose text-white/80">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
