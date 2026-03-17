import { Button } from "@/components/ui/button";
import { ArrowDown, Globe } from "lucide-react";
import { motion } from "motion/react";

export default function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-banner.dim_1600x600.jpg')",
        }}
      />
      {/* Deep overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-dark/90 via-navy/80 to-navy-dark/75" />
      {/* Decorative gold line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-60" />

      {/* Diagonal geometric accent */}
      <div
        className="absolute top-0 right-0 w-64 h-64 opacity-10 pointer-events-none"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full"
          role="presentation"
        >
          <title>Decorative accent</title>
          <polygon points="200,0 200,200 0,0" fill="oklch(0.76 0.14 80)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10 backdrop-blur-sm"
        >
          <Globe size={14} className="text-gold" />
          <span className="text-gold text-xs font-sans font-medium tracking-widest uppercase">
            Global Trade &amp; Wellness Solutions
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-display font-black text-white text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-4"
        >
          Curesta Industries,
          <br />
          <span className="text-gold">Bridging Global Markets</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-white/70 font-sans text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          From agricultural commodities and Carbon Bricks MAG91 to premium
          dates, silver jewellery exports, pharmacy chains, and wellness
          products — connecting industries and communities across 50+ nations.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            type="button"
            data-ocid="hero.primary_button"
            onClick={() => scrollTo("#divisions")}
            className="bg-gold text-navy-dark hover:bg-gold-light font-display font-bold text-base px-8 py-3 h-auto shadow-gold transition-all duration-200 hover:scale-105"
          >
            Explore Divisions
          </Button>
          <Button
            type="button"
            data-ocid="hero.secondary_button"
            onClick={() => scrollTo("#contact")}
            variant="outline"
            className="border-white/40 text-white hover:bg-white/10 hover:border-gold hover:text-gold font-display font-bold text-base px-8 py-3 h-auto backdrop-blur-sm transition-all duration-200"
          >
            Contact Us
          </Button>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
        >
          {[
            { value: "15+", label: "Years Experience" },
            { value: "50+", label: "Countries Served" },
            { value: "6", label: "Business Divisions" },
            { value: "1000+", label: "Products" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display font-black text-gold text-3xl md:text-4xl">
                {stat.value}
              </div>
              <div className="text-white/60 font-sans text-xs mt-1 tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.6 }}
        >
          <ArrowDown size={18} className="text-gold/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
