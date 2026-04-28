import { MessageCircle } from "lucide-react";

// Sticky WhatsApp click-to-chat (mobile-first, visible on all sizes)
const WhatsAppFab = () => {
  // Replace number when client provides one. Pre-filled message helps qualification.
  const phone = "819000000000";
  const text = encodeURIComponent("Hello Tioky, I'd like a quote for a vehicle from Japan auctions.");
  return (
    <a
      href={`https://wa.me/${phone}?text=${text}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-whatsapp text-whatsapp-foreground px-4 py-3 shadow-cta hover:shadow-elegant hover:-translate-y-0.5 transition-all"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="text-sm font-semibold hidden sm:inline">WhatsApp</span>
    </a>
  );
};

export default WhatsAppFab;
