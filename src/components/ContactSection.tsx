import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-slate-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="font-heading text-sm font-bold uppercase tracking-widest text-accent mb-2 block">
            Get In Touch
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
            Contact <span className="text-gradient-saffron">Us</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl p-10 text-center shadow-lg border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 opacity-0 animate-fade-in-up [animation-delay:200ms]">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-saffron-gradient flex items-center justify-center shadow-md">
                <Mail className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-4">Email</h3>
              <div className="flex flex-col gap-2">
                <a href="mailto:sales@vcan3d.com" className="text-primary hover:underline text-base font-bold">
                  sales@vcan3d.com
                </a>
                <a href="mailto:support@vcan3d.com" className="text-primary hover:underline text-base font-bold">
                  support@vcan3d.com
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl p-10 text-center shadow-lg border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 opacity-0 animate-fade-in-up [animation-delay:400ms]">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-gradient flex items-center justify-center shadow-md">
                <Phone className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-4">Phone</h3>
              <a href="tel:+919342553090" className="text-primary hover:underline text-lg font-bold">
                +91 93425 53090
              </a>
            </div>

            <div className="bg-white rounded-xl p-10 text-center shadow-lg border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 opacity-0 animate-fade-in-up [animation-delay:600ms]">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-saffron-gradient flex items-center justify-center shadow-md">
                <MapPin className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-4">Location</h3>
              <p className="text-muted-foreground text-base font-bold">No.458/9,Situated Vetri Karan nagar, Nandambakkam, Kundrathur, 600069</p>
            </div>
          </div>

          {/* Quote CTA */}
          <div className="bg-saffron-gradient rounded-2xl p-10 md:p-14 text-center opacity-0 animate-fade-in-up [animation-delay:800ms] hover:scale-[1.01] transition-transform duration-500">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
              Ready to Build Your Idea?
            </h3>
            <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
              Send us your design files or tell us about your project. Get a detailed quote, material recommendations, and fast turnaround.
            </p>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=sales@vcan3d.com&su=Quote%20Request&body=Hi%20VCAN%203D%20Team%2C%0A%0AI%20would%20like%20to%20request%20a%20quote%20for%20my%20project.%0A%0AProject%20Details%3A%0A%0AThank%20you."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-gradient text-accent-foreground px-10 py-4 rounded-md font-bold text-lg uppercase tracking-wider hover:opacity-90 transition-opacity shadow-xl"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
