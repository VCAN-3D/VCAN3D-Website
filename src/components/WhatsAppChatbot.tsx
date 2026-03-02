import whatsappLogo from "@/assets/whatsapp logo.png";

const WhatsAppChatbot = () => {
  const whatsappNumber = "919342553090";
  const message = "Hello VCan 3D, I'm interested in your services.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-2 animate-fade-in [animation-delay:1s]">
      <div className="bg-white px-3 py-1 rounded-lg shadow-md border border-border text-[10px] font-bold text-foreground mb-1 uppercase tracking-tighter opacity-0 animate-fade-in [animation-delay:2s]">
        Chat With VCAN 3D
      </div>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-2xl hover:scale-110 transition-all duration-300 animate-pulse-subtle"
        aria-label="Chat on WhatsApp"
      >
        <img 
          src={whatsappLogo} 
          alt="WhatsApp" 
          className="w-8 h-8 object-contain"
        />
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
      </a>
    </div>
  );
};

export default WhatsAppChatbot;
