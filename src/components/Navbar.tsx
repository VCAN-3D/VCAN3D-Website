import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-saffron-gradient shadow-lg">
      <div className="container mx-auto flex items-center justify-between py-3 px-4 md:px-8">
        <a href="/#home" className="relative font-heading text-2xl md:text-3xl font-bold text-black tracking-wide flex items-center gap-2">
          <span>
            VCAN 3D
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-black/80 hover:text-black font-medium text-sm uppercase tracking-wider transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=sales@vcan3d.com&su=Quote%20Request"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-gradient text-accent-foreground px-5 py-2 rounded-md font-semibold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
          >
            Get a Quote
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-black"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="md:hidden bg-saffron-gradient border-t border-black/20 pb-4 animate-fade-in">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 text-black font-medium uppercase tracking-wider text-sm"
            >
              {l.label}
            </a>
          ))}
          <div className="px-6 pt-2">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=sales@vcan3d.com&su=Quote%20Request"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-green-gradient text-accent-foreground px-5 py-2 rounded-md font-semibold text-sm uppercase tracking-wider"
            >
              Get a Quote
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
