import heroImg from "@/assets/hero-3d-printer.png";
import logo from "@/assets/logo.png";

const HeroSection = () => {
  return (
    <section id="home" className="relative flex flex-col min-h-screen bg-background pt-20 lg:pt-16">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-saffron-light hidden lg:block" />

      <div className="container mx-auto px-4 md:px-8 relative z-10 flex-grow flex items-center py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Text */}
          <div className="animate-fade-in-up text-center lg:text-left">
            {/* Logo above the heading */}
            <div className="flex justify-center lg:justify-start mb-8 opacity-0 animate-fade-in [animation-delay:200ms]">
              <img
                src={logo}
                alt="VCAN 3D Logo"
                className="w-[50%] md:w-[35%] h-auto object-contain"
              />
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 opacity-0 animate-fade-in-up [animation-delay:400ms]">
              3D Printing, Vacuum Casting<span className="text-gradient-saffron"> &</span> Rapid Prototyping
            </h1>
            <p className="text-xl md:text-2xl font-heading font-medium text-muted-foreground mb-4 opacity-0 animate-fade-in-up [animation-delay:600ms]">
              Design. Print. Inspire.
            </p>
            <p className="text-muted-foreground text-base md:text-lg max-w-lg mb-10 leading-relaxed mx-auto lg:mx-0 opacity-0 animate-fade-in-up [animation-delay:800ms]">
              3D Printing, Vacuum Casting & Rapid Prototyping experts. From concept to production-ready parts with precision and speed.
            </p>
            <div className="flex flex-col md:flex-row justify-center lg:justify-start gap-4 opacity-0 animate-fade-in-up [animation-delay:1000ms]">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=sales@vcan3d.com&su=Quote%20Request"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-saffron-gradient text-primary-foreground px-8 py-4 rounded-md font-semibold uppercase tracking-wider hover:opacity-90 hover:scale-105 transition-all shadow-lg text-sm md:text-base w-full md:w-auto text-center"
              >
                Get a Quote
              </a>
              <a
                href="#services"
                className="inline-block border-2 border-accent text-accent px-8 py-4 rounded-md font-semibold uppercase tracking-wider hover:bg-accent hover:text-accent-foreground hover:scale-105 transition-all text-sm md:text-base w-full md:w-auto text-center"
              >
                Our Services
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="opacity-0 animate-slide-in-right [animation-delay:1200ms]">
            <img
              src={heroImg}
              alt="VCAN 3D Printer creating a precision prototype"
              className="rounded-lg shadow-2xl w-full object-cover hover:scale-[1.02] transition-transform duration-700"
              loading="eager"
            />
          </div>
        </div>
      </div>

      {/* Bottom tricolor bar */}
      <div className="relative z-20 flex h-1.5 w-full">
        <div className="flex-1 bg-saffron-gradient" />
        <div className="flex-1 bg-background" />
        <div className="flex-1 bg-green-gradient" />
      </div>
    </section>
  );
};

export default HeroSection;
