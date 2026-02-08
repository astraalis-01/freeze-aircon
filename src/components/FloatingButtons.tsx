import { Phone, MessageCircle } from "lucide-react";

const FloatingButtons = () => {
  const whatsappNumber = "919952976191";
  const callNumber = "919952976191";
  const whatsappMessage = encodeURIComponent(
    "Hi! I need help with my AC/appliance. Can you assist?"
  );

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] hover:bg-[#20BD5A] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110 animate-bounce-subtle"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-primary-foreground" fill="white" />
      </a>

      {/* Call Button */}
      <a
        href={`tel:+${callNumber}`}
        className="w-14 h-14 bg-gradient-primary hover:opacity-90 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110 animate-pulse-glow"
        aria-label="Call us"
      >
        <Phone className="w-6 h-6 text-primary-foreground" />
      </a>
    </div>
  );
};

export default FloatingButtons;