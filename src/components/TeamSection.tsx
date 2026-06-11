import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import teamIbrahim from "@/assets/team-ibrahim.jpg";
import teamAhmed from "@/assets/team-ahmed.jpg";
import teamAbdelrahman from "@/assets/team-abdelrahman.jpg";
import teamMohamed from "@/assets/team-mohamed.jpg";
import teamHaytham from "@/assets/team-haytham.jpg";

interface TeamMember {
  name: string;
  title: string;
  shortBio: string;
  fullBio: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Ibrahim Sal",
    title: "Co-Founder",
    shortBio: "Venture builder and commercial strategist operating at the intersection of AI, healthcare, and the Arab world.",
    fullBio: "I build things that matter in markets that are hard to get into. Currently developing three AI-powered clinical platforms for the Gulf healthcare market — spanning mental health assessment, emergency response, and patient triage — with active relationships across Saudi Arabia's leading hospital groups, pharmacy chains, and government health institutions. Alongside that, I work with organisations across Europe and MENA on commercial growth, digital transformation, and AI adoption. Native Arabic speaker. Based in Barcelona.",
    image: teamIbrahim,
  },
  {
    name: "Mohamed Mokhtar",
    title: "Co-Founder & Chairman",
    shortBio: "40+ years leading enterprise technology across the Gulf. Former IBM Saudi Arabia.",
    fullBio: "One of the most experienced enterprise technology executives in the MENA region. Spent nearly two decades at IBM Saudi Arabia closing landmark deals across defence, government, and critical infrastructure — including a $9M satellite NOC contract and a $100M smart metering bid with Saudi Electricity Company. Previously at Hewlett Packard and currently developing PPP roadmaps aligned with Saudi Vision 2030 healthcare transformation. Deep institutional relationships across Saudi government, healthcare, and telecom sectors.",
    image: teamMohamed,
  },
  {
    name: "Ahmed Tarek",
    title: "Chief Technology Officer",
    shortBio: "Built AI voice & backend infrastructure serving millions of users.",
    fullBio: "Builder of open-source apple-signin-auth (3M+ downloads). Expert in ML & scalable cloud architecture. Dual degrees in Computer Science & Engineering; led distributed teams across EU & Silicon Valley. Delivers secure, human-centred technology to power health and wellness platforms at scale.",
    image: teamAhmed,
  },
  {
    name: "Abdelrahman Mokhtar",
    title: "Chief Operations Officer",
    shortBio: "Service delivery and infrastructure specialist with 15+ years in Saudi Arabia's enterprise technology sector.",
    fullBio: "Previously Network Services Specialist at IBM Saudi Arabia for 6+ years, and technical architecture roles at Orange Business Services across Egypt and the Gulf. Brings deep operational discipline and infrastructure expertise to SEBA's delivery function.",
    image: teamAbdelrahman,
  },
  {
    name: "Haytham Mohamed",
    title: "Strategic Advisor",
    shortBio: "15+ years leading healthcare IT and digital transformation across Saudi Arabia's health sectors.",
    fullBio: "Led implementation of OTARR — one of the largest national toxicology digitisation projects in the Kingdom. Held senior roles at Philips Healthcare, British Telecom, Orange Saudi Arabia, and Solutions by STC. Currently completing a Master's in Health Informatics at Boston University. PMP certified. Deep expertise in HIS, LIMS, PACS, and Saudi healthcare procurement.",
    image: teamHaytham,
  },
];

const TeamSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const scrollPrev = useCallback(() => {
    setExpandedIndex(null);
    setActiveIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  }, []);

  const scrollNext = useCallback(() => {
    setExpandedIndex(null);
    setActiveIndex((prev) => (prev + 1) % teamMembers.length);
  }, []);

  const handleReadMore = (index: number) => {
    setExpandedIndex(index);
  };

  const handleClose = () => {
    setExpandedIndex(null);
  };

  // Build display order: [prev, active, next]
  const getDisplayIndices = () => {
    const prev = (activeIndex - 1 + teamMembers.length) % teamMembers.length;
    const next = (activeIndex + 1) % teamMembers.length;
    return [prev, activeIndex, next];
  };

  const displayIndices = getDisplayIndices();

  return (
    <section id="team" className="py-24 md:py-32 overflow-hidden" style={{ backgroundColor: "#111111" }}>
      <div className="container mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4" style={{ color: "#ffffff" }}>
            Our Team
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.5)" }}>
            The people behind the vision
          </p>
        </motion.div>
      </div>

      {/* Carousel */}
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-center gap-6 md:gap-8">
          {displayIndices.map((memberIndex, position) => {
            const member = teamMembers[memberIndex];
            const isActive = position === 1;
            const isExpanded = expandedIndex === memberIndex;

            // Only show side cards if we have more than 1 member
            if (!isActive && teamMembers.length <= 1) return null;
            // Don't show duplicates for 2-member teams on side positions
            if (!isActive && teamMembers.length === 2 && position === 0 && memberIndex === displayIndices[2]) return null;

            return (
              <motion.div
                key={`${memberIndex}-${position}`}
                className="relative flex-shrink-0 cursor-pointer"
                style={{
                  width: isActive ? "380px" : "260px",
                  zIndex: isActive ? 10 : 1,
                }}
                animate={{
                  scale: isActive ? 1 : 0.85,
                  opacity: isActive ? 1 : 0.4,
                  filter: isActive ? "blur(0px)" : "blur(2px)",
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                onClick={() => {
                  if (!isActive) {
                    setExpandedIndex(null);
                    setActiveIndex(memberIndex);
                  }
                }}
              >
                <AnimatePresence mode="wait">
                  {isActive && isExpanded ? (
                    /* Expanded Card */
                    <motion.div
                      key="expanded"
                      initial={{ rotateY: 90, opacity: 0 }}
                      animate={{ rotateY: 0, opacity: 1 }}
                      exit={{ rotateY: -90, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="rounded-2xl overflow-hidden"
                      style={{
                        backgroundColor: "#1a1a1a",
                        minHeight: "520px",
                        perspective: "1000px",
                      }}
                    >
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-6">
                          <div className="flex items-center gap-4">
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-16 h-16 rounded-full object-cover grayscale"
                            />
                            <div>
                              <h3 className="font-display text-lg font-bold" style={{ color: "#ffffff" }}>
                                {member.name}
                              </h3>
                              <p className="text-sm font-medium" style={{ color: "#F58148" }}>
                                {member.title}
                              </p>
                            </div>
                          </div>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleClose();
                            }}
                            className="p-2 rounded-full transition-colors hover:bg-white/10"
                            aria-label={`Close ${member.name} biography`}
                          >
                            <X className="w-5 h-5" style={{ color: "rgba(255,255,255,0.7)" }} />
                          </button>
                        </div>
                        <p
                          className="text-sm leading-relaxed"
                          style={{ color: "rgba(255,255,255,0.75)" }}
                        >
                          {member.fullBio}
                        </p>
                      </div>
                    </motion.div>
                  ) : (
                    /* Default Card */
                    <motion.div
                      key="default"
                      initial={expandedIndex !== null ? { rotateY: -90, opacity: 0 } : false}
                      animate={{ rotateY: 0, opacity: 1 }}
                      exit={{ rotateY: 90, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="rounded-2xl overflow-hidden"
                      style={{
                        backgroundColor: "#1a1a1a",
                        minHeight: "520px",
                      }}
                    >
                      <div className="relative h-72 overflow-hidden">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover object-top grayscale"
                        />
                        <div
                          className="absolute inset-0"
                          style={{
                            background: "linear-gradient(to top, #1a1a1a 0%, transparent 50%)",
                          }}
                        />
                      </div>
                      <div className="p-6 -mt-4 relative z-10">
                        <h3 className="font-display text-xl font-bold mb-1" style={{ color: "#ffffff" }}>
                          {member.name}
                        </h3>
                        <p className="text-sm font-medium mb-3" style={{ color: "#F58148" }}>
                          {member.title}
                        </p>
                        <p
                          className="text-sm leading-relaxed mb-4 line-clamp-2"
                          style={{ color: "rgba(255,255,255,0.6)" }}
                        >
                          {member.shortBio}
                        </p>
                        {isActive && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleReadMore(memberIndex);
                            }}
                            className="text-sm font-medium transition-colors hover:opacity-80"
                            style={{ color: "#F58148" }}
                          >
                            Read more →
                          </button>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      {/* Navigation arrows — always visible including mobile */}
        {teamMembers.length > 1 && (
          <div className="flex justify-center gap-6 mt-8 md:hidden">
            <button
              onClick={scrollPrev}
              className="p-3 rounded-full transition-colors bg-white/10 hover:bg-white/20"
              aria-label="Previous team member"
            >
              <ChevronLeft className="w-6 h-6" style={{ color: "rgba(255,255,255,0.8)" }} />
            </button>
            <button
              onClick={scrollNext}
              className="p-3 rounded-full transition-colors bg-white/10 hover:bg-white/20"
              aria-label="Next team member"
            >
              <ChevronRight className="w-6 h-6" style={{ color: "rgba(255,255,255,0.8)" }} />
            </button>
          </div>
        )}
        {/* Desktop arrows */}
        {teamMembers.length > 1 && (
          <>
            <button
              onClick={scrollPrev}
              className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 p-3 rounded-full transition-colors hover:bg-white/10"
              aria-label="Previous team member"
            >
              <ChevronLeft className="w-6 h-6" style={{ color: "rgba(255,255,255,0.6)" }} />
            </button>
            <button
              onClick={scrollNext}
              className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 p-3 rounded-full transition-colors hover:bg-white/10"
              aria-label="Next team member"
            >
              <ChevronRight className="w-6 h-6" style={{ color: "rgba(255,255,255,0.6)" }} />
            </button>
          </>
        )}

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-10">
          {teamMembers.map((member, i) => (
            <button
              key={i}
              onClick={() => {
                setExpandedIndex(null);
                setActiveIndex(i);
              }}
              className="w-2 h-2 rounded-full transition-all duration-300"
              style={{
                backgroundColor: i === activeIndex ? "#F58148" : "rgba(255,255,255,0.25)",
                transform: i === activeIndex ? "scale(1.3)" : "scale(1)",
              }}
              aria-label={`Show ${member.name}`}
              aria-current={i === activeIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
