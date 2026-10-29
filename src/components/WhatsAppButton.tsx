import { MessageCircle } from 'lucide-react';
import { site } from '@/content/site';

/** Floating WhatsApp button. Hidden until a number is set in site.ts. */
export default function WhatsAppButton() {
  const n = site.contact.whatsapp.replace(/[^0-9]/g, '');
  if (!n) return null;
  return (
    <a
      href={`https://wa.me/${n}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 bg-[#25D366] text-white border-2 border-navy shadow-[4px_4px_0_#0F2A5F] px-4 py-3 font-grotesk font-bold t-sm2 hover:-translate-y-0.5 transition-transform"
    >
      <MessageCircle size={18} />
      <span className="hidden sm:inline">WhatsApp us</span>
    </a>
  );
}
