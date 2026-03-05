import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { 
  Printer, Layers, Box, Cog, Shapes, Zap, Paintbrush, PackageCheck, ArrowLeft 
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppChatbot from "@/components/WhatsAppChatbot";

// Import local images
import fdmImg from "@/assets/FDM.png";
import slaImg from "@/assets/SLA.png";
import slsImg from "@/assets/SLS.png";
import mjfImg from "@/assets/MJF.png";
import dlpImg from "@/assets/DLP.png";
import vacuumCastingImg from "@/assets/Vacuum Casting.png";
import injectionMouldingImg from "@/assets/Injection Molding.png";
import rapidPrototypingImg from "@/assets/Rapid Prototyping.png";
import mouldMakingImg from "@/assets/Mould Making.png";
import servicesShowcaseImg from "@/assets/services-showcase.png";
import processImg from "@/assets/process-image.png";

type SubSection = {
  title: string;
  content: string[];
  image: string;
};

type Service = {
  icon: LucideIcon;
  title: string;
  image: string;
  paragraphs: string[];
  subSections?: SubSection[];
};

const serviceData: Record<string, Service> = {
  "fdm-3d-printing": {
    icon: Printer,
    title: "FDM Printing",
    image: fdmImg,
    paragraphs: [
      "FDM (Fused Deposition Modeling) is a 3D printing technology that melts thermoplastic filament and deposits it layer by layer to build a part.",
      "It is one of the most commonly used and cost-effective 3D printing methods.",
      "⸻",
      "🔧 How FDM Works:",
      "1. Plastic filament (PLA, ABS, PETG, Nylon, etc.) is fed into the printer",
      "2. Nozzle heats and melts the filament",
      "3. Melted material is extruded layer by layer",
      "4. Layers cool and solidify to form the final part",
      "⸻",
      "⭐ Advantages of FDM",
      "• Cost-effective",
      "• Strong & functional parts",
      "• Large size printing possible",
      "• Suitable for engineering applications",
      "• Fast production for prototypes"
    ]
  },
  "sla-3d-printing": {
    icon: Layers,
    title: "SLA 3D Printing",
    image: slaImg,
    paragraphs: [
      "SLA (Stereolithography) is a resin-based 3D printing technology that uses a laser to cure (harden) liquid photopolymer resin layer by layer to create highly detailed parts.",
      "⸻",
      "🔧 How SLA Works:",
      "1. Liquid resin is filled in a tank",
      "2. UV laser scans the design layer",
      "3. Resin hardens where laser hits",
      "4. Platform moves layer by layer",
      "5. Final part is cleaned & UV cured",
      "⸻",
      "⭐ Advantages of SLA",
      "• Very high accuracy",
      "• Smooth surface finish",
      "• Good for detailed prototypes",
      "• Ideal for small & precision parts"
    ]
  },
  "sls-mjf-dlp-printing": {
    icon: Box,
    title: "SLS / MJF / DLP Printing",
    image: servicesShowcaseImg,
    paragraphs: [
      "We offer a comprehensive suite of advanced powder and resin-based 3D printing technologies including SLS, MJF, and DLP to meet diverse industrial needs.",
      "Each technology offers unique advantages in terms of material properties, precision, and production speed, allowing us to provide the perfect solution for your specific application."
    ],
    subSections: [
      {
        title: "SLS (Selective Laser Sintering)",
        image: slsImg,
        content: [
          "SLS uses a high-power laser to fuse powdered material (usually Nylon/PA12) layer by layer to create strong and functional parts.",
          "Unlike FDM, SLS does not require support structures because the surrounding powder supports the part.",
          "⸻",
          "🔧 How SLS Works:",
          "1. A thin layer of powder is spread on the build platform",
          "2. Laser selectively fuses the powder as per CAD design",
          "3. Platform lowers and new powder layer is spread",
          "4. Process repeats layer by layer",
          "5. Excess powder is removed after printing",
          "⸻",
          "⭐ Advantages of SLS",
          "• No support required",
          "• Strong & durable parts",
          "• Complex geometries possible",
          "• Good for batch production",
          "• Suitable for functional & end-use parts"
        ]
      },
      {
        title: "MJF (Multi Jet Fusion)",
        image: mjfImg,
        content: [
          "MJF is a powder-based 3D printing technology developed by HP.",
          "It uses a special fusing agent and detailing agent sprayed onto nylon powder, then heat is applied to fuse the material layer by layer.",
          "⸻",
          "🔧 How MJF Works:",
          "1. A thin layer of nylon powder (PA12/PA11) is spread",
          "2. Inkjet heads spray fusing & detailing agents",
          "3. Infrared heat melts selected areas",
          "4. Platform lowers and new powder layer is spread",
          "5. Unfused powder is removed after printing",
          "⸻",
          "⭐ Advantages of MJF",
          "• High strength & durability",
          "• Excellent surface finish",
          "• No support structures needed",
          "• Fast production speed",
          "• Ideal for batch production"
        ]
      },
      {
        title: "DLP (Digital Light Processing)",
        image: dlpImg,
        content: [
          "DLP is a resin-based 3D printing technology that uses a digital projector screen to cure liquid photopolymer resin layer by layer.",
          "Unlike SLA (which uses a laser), DLP cures an entire layer at once, making it faster.",
          "⸻",
          "🔧 How DLP Works:",
          "1. Liquid resin is filled in a vat",
          "2. Digital projector flashes an entire layer image",
          "3. Resin hardens instantly",
          "4. Platform moves up layer by layer",
          "5. Final part is cleaned & UV cured",
          "⸻",
          "⭐ Advantages of DLP",
          "• Very high accuracy",
          "• Smooth surface finish",
          "• Faster than SLA",
          "• Ideal for small & detailed parts",
          "• Good for dental & jewelry applications"
        ]
      }
    ]
  },
  "vacuum-casting-silicone-moulding": {
    icon: Shapes,
    title: "Vacuum Casting",
    image: vacuumCastingImg,
    paragraphs: [
      "Vacuum Casting is a manufacturing process used to produce high-quality plastic parts in small batches using a silicone mold under vacuum conditions.",
      "It is mainly used for low-volume production and for creating parts that closely resemble injection-molded components.",
      "⸻",
      "🔧 How Vacuum Casting Works:",
      "1. A master model is created (usually by SLA/DLP 3D printing)",
      "2. Silicone rubber is poured around the master to create a mold",
      "3. Mold is placed inside a vacuum chamber",
      "4. Liquid polyurethane resin is poured into the mold",
      "5. Resin cures and part is removed",
      "⸻",
      "⭐ Advantages of Vacuum Casting",
      "• Ideal for low-volume production (10–100+ parts)",
      "• Smooth surface finish",
      "• Multiple material options (ABS-like, rubber-like, transparent)",
      "• Lower cost compared to injection molding",
      "• Faster lead time"
    ]
  },
  "injection-moulding": {
    icon: Cog,
    title: "Injection Molding",
    image: injectionMouldingImg,
    paragraphs: [
      "Injection Molding is a manufacturing process used to produce plastic parts in large quantities by injecting molten plastic material into a custom-made metal mold.",
      "After cooling and solidifying, the part is ejected from the mold.",
      "⸻",
      "🔧 How Injection Molding Works:",
      "1. Plastic granules are fed into a heated barrel",
      "2. Material melts and becomes molten plastic",
      "3. Molten plastic is injected into a metal mold under high pressure",
      "4. Plastic cools and solidifies",
      "5. Finished part is ejected",
      "⸻",
      "⭐ Advantages of Injection Molding",
      "• Ideal for mass production",
      "• High precision & repeatability",
      "• Strong & durable parts",
      "• Smooth surface finish",
      "• Low cost per part (for high volumes)"
    ]
  },
  "rapid-prototyping": {
    icon: Zap,
    title: "Rapid Prototyping",
    image: rapidPrototypingImg,
    paragraphs: [
      "Rapid Prototyping is a fast manufacturing process used to quickly create a physical model or prototype of a product design using 3D printing or other advanced technologies.",
      "It helps companies test, improve, and finalize their product before mass production.",
      "⸻",
      "🔧 How It Works at VCAN 3D",
      "1. Customer shares CAD file (STL/STEP)",
      "2. Suitable technology selected (FDM, SLA, SLS, MJF, DLP)",
      "3. Prototype is 3D printed quickly",
      "4. Testing, design changes & improvements",
      "5. Final product approval",
      "⸻",
      "⭐ Benefits of Rapid Prototyping",
      "• Faster product development",
      "• Reduced development cost",
      "• Easy design modification",
      "• Quick market testing",
      "• Functional & visual testing",
      "⸻",
      "🏭 Applications for VCAN 3D",
      "• Product development models",
      "• Automotive parts testing",
      "• Consumer product samples",
      "• Engineering validation",
      "• Pre-production samples"
    ]
  },
  "model-making-finishing": {
    icon: Paintbrush,
    title: "Mould Making",
    image: mouldMakingImg,
    paragraphs: [
      "Mould Making is the process of creating a mold (tool) used to produce plastic or resin parts.",
      "The mold can be:",
      "• Silicone mold (for Vacuum Casting)",
      "• Metal mold (for Injection Molding)",
      "• Prototype tooling for low-volume production",
      "At VCAN 3D, moulds are made based on the customer’s CAD design.",
      "⸻",
      "🔧 What is Finishing?",
      "Finishing is the final surface treatment process done after mould making or part production to improve:",
      "• Surface smoothness",
      "• Appearance",
      "• Accuracy",
      "• Quality",
      "Finishing may include:",
      "• Polishing",
      "• Sanding",
      "• Painting",
      "• Texture finishing",
      "• Surface coating"
    ]
  },
  "low-volume-production": {
    icon: PackageCheck,
    title: "Low-Volume Production",
    image: processImg,
    paragraphs: [
      "Low Volume Production means manufacturing a small quantity of parts — usually from 10 to 1000 pieces — instead of mass production.",
      "It is ideal for companies that need limited quantities before moving to full-scale injection molding.",
      "⸻",
      "🔧 How VCAN 3D Does Low Volume Production",
      "At VCAN 3D, low volume production can be done using:",
      "• Vacuum Casting",
      "• 3D Printing (SLS, MJF, SLA, FDM, DLP)",
      "• Prototype tooling",
      "• Short-run Injection Molding"
    ]
  }
};

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = serviceData[serviceId || ""];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <Link to="/#services" className="text-primary hover:underline flex items-center justify-center gap-2">
            <ArrowLeft size={20} /> Back to Services
          </Link>
        </div>
      </div>
    );
  }

  const Icon = service.icon;

  const isSpecialService = serviceId === "sls-mjf-dlp-printing";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-8">
          <Link to="/#services" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group animate-fade-in">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Back to Services
          </Link>

          {/* Main Service Block */}
          <div className={`${isSpecialService ? 'max-w-3xl mx-auto text-center mb-16' : 'grid lg:grid-cols-2 gap-12 items-center mb-20'} animate-fade-in`}>
            <div className={isSpecialService ? 'flex flex-col items-center' : 'text-center lg:text-left'}>
              <div className={`flex flex-col ${isSpecialService ? 'items-center' : 'lg:flex-row items-center'} gap-4 mb-6`}>
                <div className="w-16 h-16 rounded-full bg-saffron-light flex items-center justify-center text-primary">
                  <Icon size={32} />
                </div>
                <h1 className="text-3xl md:text-5xl font-bold font-heading">{service.title}</h1>
              </div>
              
              <div className="space-y-4 text-base md:text-lg leading-relaxed text-foreground whitespace-pre-wrap">
                {service.paragraphs.map((p, i) => (
                  <p key={i} className={p === "⸻" ? "text-primary/30" : ""}>{p}</p>
                ))}
              </div>
            </div>
            
            {!isSpecialService && (
              <div className="animate-fade-in [animation-delay:200ms] order-first lg:order-last">
                <div className="bg-white rounded-2xl shadow-2xl p-4 border border-border overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-auto object-contain max-h-[400px] md:max-h-[500px] hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Sub-sections Blocks */}
          {service.subSections && (
            <div className="space-y-20 lg:space-y-24 mb-20">
              {service.subSections.map((sub, idx) => (
                <div key={idx} className="grid lg:grid-cols-2 gap-8 items-center animate-fade-in" style={{ animationDelay: `${idx * 150}ms` }}>
                  <div className={`text-center lg:text-left ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                    <h2 className="text-2xl md:text-3xl font-bold font-heading mb-6 text-primary border-b-2 border-primary/20 pb-2 inline-block">
                      {sub.title}
                    </h2>
                    <div className="space-y-4 text-base md:text-lg leading-relaxed text-foreground whitespace-pre-wrap">
                      {sub.content.map((p, i) => (
                        <p key={i} className={p === "⸻" ? "text-primary/30" : ""}>{p}</p>
                      ))}
                    </div>
                  </div>
                  
                  <div className={`order-first lg:order-none ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="bg-white rounded-2xl shadow-xl p-4 border border-border overflow-hidden transition-transform duration-500 hover:shadow-2xl">
                      <img 
                        src={sub.image} 
                        alt={sub.title} 
                        className="w-full h-auto object-contain max-h-[350px] md:max-h-[450px] transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* VCAN 3D Advantage Block */}
          <div className="bg-secondary rounded-2xl p-6 md:p-12 animate-fade-in [animation-delay:300ms]">
            <h3 className="text-xl md:text-2xl font-bold mb-8 font-heading text-primary text-center">VCAN 3D Advantage</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Equipment", desc: "Advanced industrial-grade equipment" },
                { title: "Team", desc: "Precision-focused engineering team" },
                { title: "Results", desc: "Fast turnaround & material diversity" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center gap-3 animate-fade-in" style={{ animationDelay: `${400 + (i * 100)}ms` }}>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                    <Zap size={24} />
                  </div>
                  <h4 className="font-bold text-foreground">{item.title}</h4>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppChatbot />
    </div>
  );
};

export default ServiceDetail;
