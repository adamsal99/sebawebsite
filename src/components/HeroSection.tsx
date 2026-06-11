import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Modern architectural space"
          className="h-full w-full object-cover"
          width={1920}
          height={1080}
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <p className="font-body text-sm font-medium uppercase tracking-[0.3em] text-primary mb-6">
            AI & Digital Consulting
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.1] mb-8 text-foreground">
            Transforming Health
            <br />
            Through <span className="text-accent">Intelligent</span> Systems
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-12 font-body leading-relaxed"
        >
          Built for the Gulf. Powered by AI. Delivered in Arabic.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#services"
            className="rounded-lg bg-accent px-8 py-3.5 text-base font-semibold text-accent-foreground hover:opacity-90 transition-opacity"
          >
            Explore Services
          </a>
          <a
            href="/contact-us"
            className="rounded-lg border border-primary/30 px-8 py-3.5 text-base font-semibold text-foreground hover:border-primary hover:text-primary transition-colors"
          >
            Schedule A Call
          </a>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
