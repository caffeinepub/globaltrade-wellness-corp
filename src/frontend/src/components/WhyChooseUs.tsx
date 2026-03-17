import {
  BadgeCheck,
  Globe,
  Headphones,
  ShieldCheck,
  Truck,
  Users2,
} from "lucide-react";
import { motion } from "motion/react";

const reasons = [
  {
    icon: Globe,
    title: "Global Reach",
    desc: "Active trade partnerships spanning 50+ countries across Asia, Africa, the Middle East, Europe, and the Americas.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assured",
    desc: "Every product is rigorously tested and certified to international standards before it reaches our clients.",
  },
  {
    icon: Truck,
    title: "Reliable Supply Chain",
    desc: "End-to-end logistics solutions ensuring on-time delivery, minimal disruptions, and real-time tracking.",
  },
  {
    icon: Users2,
    title: "Expert Team",
    desc: "Over 200 seasoned professionals across trading, healthcare, logistics, and regulatory compliance disciplines.",
  },
  {
    icon: BadgeCheck,
    title: "Compliance & Certifications",
    desc: "ISO certified, FDA compliant pharmacy operations, and fully licensed for international agricultural trade.",
  },
  {
    icon: Headphones,
    title: "24/7 Customer Support",
    desc: "Dedicated account managers and round-the-clock support teams ready to resolve issues promptly.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="products"
      className="section-padding bg-navy relative overflow-hidden"
    >
      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, oklch(0.76 0.14 80) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-gold/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-gold/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-gold font-sans font-semibold text-sm tracking-widest uppercase mb-3">
            Why Partner With Us
          </span>
          <h2 className="font-display font-black text-white text-4xl md:text-5xl leading-tight">
            Built on Trust,
            <br />
            <span className="text-gold">Driven by Excellence</span>
          </h2>
          <p className="text-white/60 font-sans text-lg mt-4 max-w-2xl mx-auto">
            Choosing GlobalTrade Corp means choosing a partner with proven
            credentials, global infrastructure, and an unwavering commitment to
            your success.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-gold/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gold/15 flex items-center justify-center mb-4 group-hover:bg-gold/25 transition-colors duration-300">
                <reason.icon size={22} className="text-gold" />
              </div>
              <h3 className="font-display font-bold text-white text-lg mb-2">
                {reason.title}
              </h3>
              <p className="text-white/60 font-sans text-sm leading-relaxed">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 text-center p-8 rounded-2xl border border-gold/20 bg-gold/5"
        >
          <p className="text-white font-display font-bold text-2xl mb-2">
            Ready to explore a partnership?
          </p>
          <p className="text-white/60 font-sans mb-6">
            Our team is ready to tailor solutions for your business needs.
          </p>
          <button
            type="button"
            onClick={() =>
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center gap-2 bg-gold text-navy-dark font-display font-bold text-sm px-8 py-3 rounded-md hover:bg-gold-light transition-colors duration-200 shadow-gold"
          >
            Start a Conversation
          </button>
        </motion.div>
      </div>
    </section>
  );
}
