import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home", ocid: "nav.home.link" },
  { label: "About", href: "#about", ocid: "nav.about.link" },
  { label: "Divisions", href: "#divisions", ocid: "nav.divisions.link" },
  { label: "Products", href: "#products", ocid: "nav.products.link" },
  { label: "Contact", href: "#contact", ocid: "nav.contact.link" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy-dark/95 backdrop-blur-md shadow-navy"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-18 py-4">
        {/* Logo */}
        <button
          type="button"
          onClick={() => handleNavClick("#home")}
          className="flex items-center gap-2 group"
        >
          <div className="w-9 h-9 rounded-sm bg-gold flex items-center justify-center shadow-gold">
            <span className="font-display font-black text-navy-dark text-lg leading-none">
              C
            </span>
          </div>
          <div>
            <span className="font-display font-bold text-white text-lg tracking-tight leading-none block">
              Curesta Industries
            </span>
            <span className="font-sans text-gold text-xs tracking-widest uppercase leading-none">
              Pvt Ltd
            </span>
          </div>
        </button>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                type="button"
                data-ocid={link.ocid}
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-2 text-sm font-sans font-medium text-white/80 hover:text-gold transition-colors duration-200 rounded-md hover:bg-white/5"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:block">
          <Button
            type="button"
            onClick={() => handleNavClick("#contact")}
            className="bg-gold text-navy-dark hover:bg-gold-light font-display font-bold text-sm px-5 py-2 transition-all duration-200 shadow-gold"
          >
            Get In Touch
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-navy-dark/98 backdrop-blur-md border-t border-white/10 px-4 pb-4"
          >
            <ul className="flex flex-col gap-1 pt-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    data-ocid={link.ocid}
                    onClick={() => handleNavClick(link.href)}
                    className="block w-full text-left px-4 py-3 text-sm font-sans font-medium text-white/80 hover:text-gold transition-colors duration-200 rounded-md hover:bg-white/5"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <Button
                  type="button"
                  onClick={() => handleNavClick("#contact")}
                  className="w-full bg-gold text-navy-dark hover:bg-gold-light font-display font-bold"
                >
                  Get In Touch
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
