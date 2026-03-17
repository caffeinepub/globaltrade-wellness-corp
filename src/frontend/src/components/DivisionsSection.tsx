import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const divisions = [
  {
    id: 1,
    title: "Agricultural Imports/Exports",
    image: "/assets/generated/agri-trade.dim_600x400.jpg",
    desc: "We source and trade premium grains, pulses, oilseeds, spices, and fresh produce. Our vast agri-network spans major growing regions in South Asia, Africa, and South America.",
    tags: ["Grains", "Pulses", "Spices", "Oilseeds"],
  },
  {
    id: 2,
    title: "Carbon Bricks MAG91",
    image: "/assets/generated/carbo-bricks.dim_600x400.jpg",
    desc: "Supplying high-performance MAG91 carbon bricks and compressed charcoal for industrial filtration, energy, and environmental applications across global markets.",
    tags: ["MAG91", "Industrial", "Filtration", "Carbon"],
  },
  {
    id: 3,
    title: "Dates Trading",
    image: "/assets/generated/dates-product.dim_600x400.jpg",
    desc: "Specializing in premium Medjool, Deglet Nour, and Ajwa dates sourced directly from the finest farms in the UAE, Saudi Arabia, Tunisia, and Egypt.",
    tags: ["Medjool", "Ajwa", "Deglet Nour", "Premium"],
  },
  {
    id: 4,
    title: "Pharmacy Chains",
    image: "/assets/generated/pharmacy.dim_600x400.jpg",
    desc: "Operating a growing chain of modern pharmacies offering prescription medicines, OTC products, and expert healthcare consultations for communities across the region.",
    tags: ["Retail", "Prescription", "Healthcare", "OTC"],
  },
  {
    id: 5,
    title: "Wellness Products",
    image: "/assets/generated/wellness.dim_600x400.jpg",
    desc: "Curating and distributing high-quality wellness and nutraceutical products — herbal supplements, essential oils, skincare, and immunity boosters — both online and offline.",
    tags: ["Supplements", "Herbal", "Skincare", "Nutraceuticals"],
  },
  {
    id: 6,
    title: "Silver Jewellery Making & Exports",
    image: "/assets/generated/silver-jewellery.dim_600x400.jpg",
    desc: "Crafting and exporting exquisite handcrafted silver jewellery — rings, necklaces, bracelets, and bespoke pieces — to luxury retailers and wholesale buyers worldwide.",
    tags: ["Handcrafted", "Silver", "Export", "Luxury"],
  },
];

export default function DivisionsSection() {
  return (
    <section id="divisions" className="section-padding bg-muted/40">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-gold font-sans font-semibold text-sm tracking-widest uppercase mb-3">
            What We Do
          </span>
          <h2 className="font-display font-black text-navy text-4xl md:text-5xl leading-tight">
            Our Business Divisions
          </h2>
          <p className="text-muted-foreground font-sans text-lg mt-4 max-w-2xl mx-auto">
            Six specialized verticals, one unified commitment to quality and
            global reach.
          </p>
        </motion.div>

        {/* Divisions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {divisions.map((div, i) => (
            <motion.div
              key={div.id}
              data-ocid={`divisions.item.${div.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-navy transition-all duration-400"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-52">
                <img
                  src={div.image}
                  alt={div.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                <div className="absolute bottom-3 left-4 flex gap-1.5 flex-wrap">
                  {div.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs font-sans font-medium bg-gold/90 text-navy-dark rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display font-bold text-navy text-xl mb-2 group-hover:text-gold transition-colors duration-200">
                  {div.title}
                </h3>
                <p className="text-muted-foreground font-sans text-sm leading-relaxed mb-4">
                  {div.desc}
                </p>
                <button
                  type="button"
                  onClick={() =>
                    document
                      .querySelector("#contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="inline-flex items-center gap-1.5 text-sm font-sans font-semibold text-navy hover:text-gold transition-colors duration-200"
                >
                  Learn More{" "}
                  <ArrowRight
                    size={15}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
