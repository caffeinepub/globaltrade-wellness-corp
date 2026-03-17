import { SiFacebook, SiInstagram, SiLinkedin, SiX } from "react-icons/si";

const year = new Date().getFullYear();
const hostname = typeof window !== "undefined" ? window.location.hostname : "";

export default function Footer() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-navy-dark text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-14">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-sm bg-gold flex items-center justify-center">
                <span className="font-display font-black text-navy-dark text-lg">
                  C
                </span>
              </div>
              <div>
                <span className="font-display font-bold text-white text-lg leading-none block">
                  Curesta Industries
                </span>
                <span className="font-sans text-gold text-xs tracking-widest uppercase">
                  Pvt Ltd
                </span>
              </div>
            </div>
            <p className="text-white/50 font-sans text-sm leading-relaxed mb-4">
              Bridging global markets with integrity across 6 business divisions
              since 2009.
            </p>
            <div className="flex gap-3">
              {[
                {
                  Icon: SiLinkedin,
                  label: "LinkedIn",
                  href: "https://linkedin.com",
                },
                { Icon: SiX, label: "X", href: "https://x.com" },
                {
                  Icon: SiFacebook,
                  label: "Facebook",
                  href: "https://facebook.com",
                },
                {
                  Icon: SiInstagram,
                  label: "Instagram",
                  href: "https://instagram.com",
                },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-md bg-white/8 flex items-center justify-center hover:bg-gold/20 hover:text-gold transition-colors duration-200"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-sm tracking-widest uppercase text-gold mb-4">
              Company
            </h4>
            <ul className="flex flex-col gap-2">
              {[
                { label: "Home", href: "#home" },
                { label: "About Us", href: "#about" },
                { label: "Divisions", href: "#divisions" },
                { label: "Why Choose Us", href: "#products" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <button
                    type="button"
                    onClick={() => scrollTo(link.href)}
                    className="text-white/50 hover:text-gold font-sans text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Divisions */}
          <div>
            <h4 className="font-display font-bold text-sm tracking-widest uppercase text-gold mb-4">
              Divisions
            </h4>
            <ul className="flex flex-col gap-2">
              {[
                "Agricultural Trade",
                "Carbon Bricks MAG91",
                "Dates Trading",
                "Pharmacy Chains",
                "Wellness Products",
                "Silver Jewellery Exports",
              ].map((div) => (
                <li key={div}>
                  <button
                    type="button"
                    onClick={() => scrollTo("#divisions")}
                    className="text-white/50 hover:text-gold font-sans text-sm transition-colors duration-200 text-left"
                  >
                    {div}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-sm tracking-widest uppercase text-gold mb-4">
              Contact
            </h4>
            <ul className="flex flex-col gap-3 text-white/50 font-sans text-sm">
              <li className="leading-relaxed">
                Tower One, Business Bay
                <br />
                Dubai, UAE
              </li>
              <li>+971 4 000 0000</li>
              <li>info@curestaindustries.com</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 font-sans text-xs">
            &copy; {year} Curesta Industries Pvt Ltd. All rights reserved.
          </p>
          <p className="text-white/30 font-sans text-xs">
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold/70 hover:text-gold transition-colors duration-200"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
