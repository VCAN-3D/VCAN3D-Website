import servicesImg from "@/assets/services-showcase.png";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-secondary overflow-hidden">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="opacity-0 animate-slide-in-left">
            <img
              src={servicesImg}
              alt="3D printed prototypes and parts by VCAN 3D"
              className="rounded-lg shadow-xl w-full object-cover hover:scale-[1.02] transition-transform duration-700"
              loading="lazy"
            />
          </div>
          <div className="opacity-0 animate-slide-in-right [animation-delay:200ms] text-center lg:text-left">
            <span className="font-heading text-sm font-bold uppercase tracking-widest text-accent mb-2 block">
              About Us
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Welcome to <span className="text-gradient-saffron">VCAN 3D</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base">
              <p>
                Welcome to VCAN 3D, a leading provider of advanced 3D printing, rapid prototyping, and vacuum casting solutions. With over 15 years of industry experience, we specialize in transforming innovative ideas into high-precision, production-ready components for global clients across multiple industries.
              </p>
              <p>
                Our expertise combines cutting-edge additive manufacturing technologies with proven vacuum casting processes to deliver accurate, durable, and cost-effective parts. From concept development and functional prototyping to low-volume production, we ensure fast turnaround times, strict quality standards, and complete customer satisfaction.
              </p>
              <p>
                At VCAN 3D, we are committed to innovation, reliability, and engineering excellence. Our mission is to support businesses worldwide by providing dependable manufacturing solutions that accelerate product development, reduce costs, and bring ideas to market faster.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
