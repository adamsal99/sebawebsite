import { motion } from "framer-motion";
import { Search, Code2, Globe2, Check } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Discovery & Scoping",
    description:
      "Before anything is built, we map the full picture — your market, your technology stack, your regulatory environment, and the institutional relationships you'll need to win. No assumptions, no shortcuts.",
    bullets: [
      "Market landscape & competitor analysis",
      "Regulatory audit (Saudi MOH, UAE DOH, HAAD)",
      "Technology stack assessment",
      "Stakeholder & partner mapping",
      "Clear scope, timeline, and success metrics",
    ],
  },
  {
    icon: Code2,
    step: "02",
    title: "Build & Deploy",
    description:
      "From Arabic-first clinical AI tools to multi-agent automation systems — we design, build, and ship working products fast. Every solution is built for the Gulf context: culturally adapted, clinically validated, and enterprise-ready.",
    bullets: [
      "Arabic NLP & LLM integration",
      "Clinical AI product development",
      "Automation architecture & API integration",
      "Rapid prototyping — live demo in weeks, not months",
      "End-to-end QA, security, and deployment",
    ],
  },
  {
    icon: Globe2,
    step: "03",
    title: "Scale & Partner",
    description:
      "Shipping the product is only half the work. We open doors across the Gulf through deep institutional relationships — connecting you to hospital groups, government health bodies, and Vision 2030-aligned programs that move markets.",
    bullets: [
      "Gulf hospital & government introductions",
      "Enterprise deal structuring & negotiation",
      "PPP roadmap development",
      "Ongoing fractional advisory",
      "Revenue acceleration & pipeline support",
    ],
  },
];

const HowItWorksSection = () => {
  return (
    <section id="process" className="relative py-24 md:py-36 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-primary font-body text-xs font-semibold uppercase tracking-[0.3em] mb-4 block">
            Our Process
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            How SEBA Works
          </h2>
          <p className="text-muted-foreground mt-5 max-w-2xl mx-auto font-body leading-relaxed">
            We don't hand you a slide deck and disappear. We work alongside you — from first conversation to live deployment and beyond.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="group relative rounded-xl border-t-2 border-transparent hover:border-primary bg-background/40 p-8 transition-all duration-300 hover:shadow-sm"
            >
              <span className="font-display text-5xl font-bold text-muted-foreground/30 block mb-4">
                {step.step}
              </span>
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <step.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                {step.title}
              </h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">
                {step.description}
              </p>
              <ul className="space-y-2.5">
                {step.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2.5 font-body text-sm text-foreground/80">
                    <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" strokeWidth={2.5} />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
