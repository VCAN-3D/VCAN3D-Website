import { Mail, Phone, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy text-primary-foreground/80">
      {/* Tricolor bar */}
      <div className="flex h-1">
        <div className="flex-1 bg-saffron-gradient" />
        <div className="flex-1 bg-background" />
        <div className="flex-1 bg-green-gradient" />
      </div>

      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-heading text-2xl font-bold text-primary-foreground mb-3">
              VCAN 3D <span className="font-light"></span>
            </h3>
            <p className="text-sm leading-relaxed text-primary-foreground/60">
              Design. Print. Inspire. Over 15 years of expertise in 3D Printing, Vacuum Casting & Rapid Prototyping.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-primary-foreground mb-4 uppercase tracking-wider text-sm">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {["Home", "About", "Services", "Contact"].map((l) => (
                <li key={l}>
                  <a href={`/#${l.toLowerCase()}`} className="hover:text-primary-foreground transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-primary-foreground mb-4 uppercase tracking-wider text-sm">
              Contact Info
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex flex-col gap-2">
                <a href="mailto:sales@vcan3d.com" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                  <Mail className="w-4 h-4" /> sales@vcan3d.com
                </a>
                <a href="mailto:support@vcan3d.com" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                  <Mail className="w-4 h-4" /> support@vcan3d.com
                </a>
              </div>
              <a href="tel:+919342553090" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                <Phone className="w-4 h-4" /> +91 93425 53090
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-6 mt-10 mb-[-1.5rem]">
          <a 
            href="https://www.instagram.com/vcan3d?igsh=dDVreWY5eGhyamVh" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary-foreground/40 hover:text-primary-foreground transition-colors"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a 
            href="https://www.linkedin.com/company/vcan3d-1/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary-foreground/40 hover:text-primary-foreground transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>

        <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center text-xs text-primary-foreground/40">
         Copyright © {new Date().getFullYear()} VCAN 3D All rights reserved | Powered By INNOAPP TECHNOLOGIES
        </div>
      </div>
    </footer>
  );
};

export default Footer;
