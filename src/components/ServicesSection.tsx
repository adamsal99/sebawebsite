import { motion } from "framer-motion";
import { Globe, Cpu, Compass, Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Globe,
    title: "MENA Expansion Support",
    description:
      "We help SaaS, healthtech, and AI-driven companies localize and deploy their solutions in the MENA region — bridging regulatory, cultural, and technical gaps.",
    bullets: [
      "Arabic-first product localization & UX adaptation",
      "Regulatory navigation (Saudi MOH, UAE DOH, HAAD)",
      "Gulf hospital & government partnership facilitation",
      "Vision 2030 & UAE Centennial strategic alignment",
      "On-the-ground market entry support",
    ],
    cta: "Expand into MENA",
  },
  {
    icon: Cpu,
    title: "Custom AI & Digital Solutions",
    description:
      "From tailored patient journeys to smart automation layers, we design and build tools that elevate your existing workflows — or create entirely new digital touchpoints.",
    bullets: [
      "Clinical AI tools: assessments, triage & patient engagement",
      "Arabic NLP & LLM integration (Claude API)",
      "Multi-agent automation systems",
      "Legacy system integration & API architecture",
      "Rapid prototyping — from concept to live demo in weeks",
    ],
    cta: "Check our solutions",
    href: "/solutions",
  },
  {
    icon: Compass,
    title: "Strategic Advisory & GTM",
    description:
      "For health institutions, investors, and technology companies entering the Gulf market — we provide on-the-ground strategic guidance, stakeholder mapping, and revenue acceleration.",
    bullets: [
      "Hospital revenue cycle & partnership consulting",
      "Investor readiness & pitch deck preparation",
      "PPP roadmap development (Vision 2030 aligned)",
      "Enterprise deal structuring & negotiation support",
      "Ongoing fractional advisory for scaling teams",
    ],
    cta: "Talk strategy",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15 },
  }),
};

const ServicesSection = () => {
  return (
    <section id="services" className="pt-28 md:pt-36 pb-12 md:pb-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-primary font-body text-xs font-semibold uppercase tracking-[0.3em] mb-4 block">
            What We Do
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Our Services
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="flex flex-col rounded-xl bg-card border border-border p-8"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <service.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-3 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed text-sm mb-6">
                {service.description}
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground/80 font-body leading-snug">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                to={(service as { href?: string }).href ?? "/contact-us"}
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all group/cta"
              >
                {service.cta}
                <ArrowRight className="h-4 w-4 transition-transform group-hover/cta:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
