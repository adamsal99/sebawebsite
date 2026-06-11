import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section id="contact" className="py-28 md:py-36" style={{ backgroundColor: "#111111" }}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 text-white leading-[1.05]">
            Your Gulf expansion
            <br />
            starts here.
          </h2>
          <p className="text-white/70 font-body text-lg max-w-[600px] mx-auto mb-12 leading-relaxed">
            SEBA works with a select number of partners each quarter — healthcare providers, AI companies, and institutions serious about the MENA market. If that's you, let's talk.
          </p>
          <a
            href="/contact-us"
            className="inline-block rounded-lg bg-accent px-10 py-4 text-base font-semibold text-accent-foreground hover:opacity-90 transition-opacity"
          >
            Schedule a Call →
          </a>
          <p className="mt-6 text-white/50 font-body text-sm">
            No commitment. 30 minutes. We'll tell you exactly what's possible.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
