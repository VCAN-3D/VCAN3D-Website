import {
  Printer,
  Layers,
  Box,
  Cog,
  Shapes,
  Zap,
  Paintbrush,
  PackageCheck,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import processImg from "@/assets/process-image.png";

const services = [
  { icon: Printer, label: "FDM 3D Printing", id: "fdm-3d-printing" },
  { icon: Layers, label: "SLA 3D Printing", id: "sla-3d-printing" },
  { icon: Box, label: "SLS / MJF / DLP Printing", id: "sls-mjf-dlp-printing" },
  { icon: Shapes, label: "Vacuum Casting & Silicone Moulding", id: "vacuum-casting-silicone-moulding" },
  { icon: Cog, label: "Injection Moulding", id: "injection-moulding" },
  { icon: Zap, label: "Rapid Prototyping", id: "rapid-prototyping" },
  { icon: Paintbrush, label: "Model Making & Finishing", id: "model-making-finishing" },
  { icon: PackageCheck, label: "Low-Volume Production", id: "low-volume-production" },
];

const industries = ["Automotive", "Aerospace", "Medical", "Industrial Equipment", "Consumer Products"];

const whyChoose = [
  { title: "Material Variety", desc: "Supports engineering-grade materials replicating ABS, Nylon, PP, transparent, high-temperature, flame-retardant, and rubber-like materials (20–90 Shore A)." },
  { title: "Cost-Effective Production", desc: "Ideal for small-batch manufacturing without the high cost of metal injection mould tooling." },
  { title: "High Precision & Detail", desc: "Bubble-free casting captures fine details with excellent surface finish." },
  { title: "Fast Turnaround", desc: "From prototype to production-ready parts in minimal lead time." },
];

const processSteps = [
  { step: "1", title: "3D Printing", desc: "High-resolution master models created from digital designs." },
  { step: "2", title: "Silicone Mould Creation", desc: "A precise mould is developed using the master part." },
  { step: "3", title: "Vacuum Casting", desc: "Polyurethane resins cast under vacuum to produce identical parts with injection-mould quality." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container mx-auto">
        {/* Services grid */}
        <div className="text-center mb-16">
          <span className="font-heading text-sm font-bold uppercase tracking-widest text-accent mb-2 block">
            What We Do
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Our <span className="text-gradient-saffron">Services</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {services.map(({ icon: Icon, label, id }, index) => (
            <Link
              key={id}
              to={`/service/${id}`}
              className="group bg-card border border-border rounded-lg p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer block animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-saffron-light flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-heading font-semibold text-foreground text-lg mb-3">{label}</h3>
              <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                Learn More <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          ))}
        </div>

        {/* Industries */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">
            Industries We <span className="text-gradient-saffron">Serve</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((ind) => (
              <span
                key={ind}
                className="bg-india-green-light text-accent font-semibold px-6 py-2.5 rounded-full text-sm uppercase tracking-wider border border-accent/20"
              >
                {ind}
              </span>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-secondary rounded-2xl p-8 md:p-12 mb-20">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-10">
            Why Choose <span className="text-gradient-saffron">VCAN 3D?</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {whyChoose.map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-saffron-gradient flex items-center justify-center">
                  <Zap className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground text-lg mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">
              Our Process <span className="text-gradient-saffron">Advantage</span>
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              We integrate 3D Printing and Vacuum Casting to bridge the gap between prototyping and mass production.
            </p>
            <div className="space-y-6">
              {processSteps.map((s) => (
                <div key={s.step} className="flex gap-5 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-gradient text-accent-foreground flex items-center justify-center font-heading font-bold text-lg">
                    {s.step}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-foreground text-lg">{s.title}</h3>
                    <p className="text-muted-foreground text-sm">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <img
              src={processImg}
              alt="VCAN 3D process - Master model, silicone mould, vacuum cast parts"
              className="rounded-lg shadow-xl w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
