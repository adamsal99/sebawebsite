import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-28 md:py-36">
      <div className="container mx-auto px-6">
        {/* Divider */}
        <div className="w-full h-px bg-primary/40 mb-20" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-body text-xs font-semibold uppercase tracking-[0.3em] mb-4 block">
              About Us
            </span>
            <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
              We Build at the Intersection of AI and Healthcare.
            </h2>
            <div className="space-y-5 text-muted-foreground font-body leading-relaxed text-sm md:text-base">
              <p>
                SEBA was built with one belief: that the Gulf healthcare market deserves technology that was designed for it, not adapted from it. Not translated as an afterthought. Not retrofitted from a Western product roadmap.
              </p>
              <p>
                We are a strategic consultancy and AI venture builder combining deep institutional knowledge of MENA's healthcare system with hands-on AI product development. Our team has closed enterprise deals at IBM Saudi Arabia, built clinical AI tools from scratch, and navigated the regulatory and cultural landscape of Arabic-speaking healthcare markets from the inside.
              </p>
              <p>
                We work with governments, hospitals, universities, and healthtech companies; building custom technology, opening institutional doors, and helping serious organisations enter and scale across the MENA region.
              </p>
              <p className="font-semibold text-foreground">
                We don't just advise. We build, deploy, and deliver.
              </p>
            </div>
          </motion.div>

          {/* Right — Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src={heroBg}
              alt="Architectural detail"
              className="w-full h-auto rounded-xl object-cover aspect-[4/3]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
