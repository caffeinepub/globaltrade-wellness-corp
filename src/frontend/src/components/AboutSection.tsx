import { Award, Globe2, Leaf, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

const values = [
  {
    icon: Globe2,
    title: "Global Reach",
    desc: "Operating across 50+ countries, we maintain strong trade networks across Asia, Africa, Europe, and the Americas.",
  },
  {
    icon: Award,
    title: "Quality First",
    desc: "Every product we trade, distribute, or manufacture meets the highest international quality and safety standards.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    desc: "We are committed to ethical sourcing, environmental responsibility, and sustainable business practices across all divisions.",
  },
  {
    icon: ShieldCheck,
    title: "Certified & Compliant",
    desc: "Fully compliant with international trade regulations, pharmaceutical standards, and wellness certifications globally.",
  },
];

const stats = [
  { value: "15+", label: "Years of Excellence" },
  { value: "50+", label: "Countries Served" },
  { value: "6", label: "Business Divisions" },
  { value: "1000+", label: "Products Portfolio" },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-gold font-sans font-semibold text-sm tracking-widest uppercase mb-3">
            Our Story
          </span>
          <h2 className="font-display font-black text-navy text-4xl md:text-5xl leading-tight mb-5">
            A Legacy of Trade &amp;
            <br />
            <span className="text-gold">Wellness Excellence</span>
          </h2>
          <p className="text-muted-foreground font-sans text-lg max-w-3xl mx-auto leading-relaxed">
            Founded over 15 years ago, Curesta Industries Pvt Ltd has grown from
            a regional agricultural trading firm into a diversified global
            enterprise. We are proud to serve clients across six distinct
            business verticals — always with integrity, precision, and care.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-navy rounded-xl p-6 text-center shadow-navy"
            >
              <div className="font-display font-black text-gold text-4xl md:text-5xl mb-1">
                {stat.value}
              </div>
              <div className="text-white/70 font-sans text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission + Values Grid */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display font-black text-navy text-3xl mb-4">
              Our Mission
            </h3>
            <p className="text-foreground/80 font-sans text-base leading-relaxed mb-4">
              To connect global markets with ethical, high-quality trade in
              agricultural products, Carbon Bricks MAG91, premium dates, and
              handcrafted silver jewellery, while advancing community health
              through our pharmacy and wellness networks.
            </p>
            <p className="text-foreground/80 font-sans text-base leading-relaxed">
              We believe commerce and care are not opposites — our integrated
              approach ensures that every transaction creates value not just for
              shareholders, but for farmers, artisans, patients, wellness
              seekers, and communities around the world.
            </p>
            <div className="mt-6 h-1 w-16 bg-gold rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-card rounded-xl p-5 border border-border shadow-card hover:shadow-navy transition-shadow duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-navy/8 flex items-center justify-center mb-3">
                  <v.icon size={20} className="text-navy" />
                </div>
                <h4 className="font-display font-bold text-navy text-base mb-1">
                  {v.title}
                </h4>
                <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
