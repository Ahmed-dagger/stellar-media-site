import { motion } from "framer-motion";

// 055 988 8290 (UAE) in international dial format for wa.me, no leading zero.
const WHATSAPP_NUMBER = "971559888290";
const MESSAGE = "Hi Stellar Media, I'd like to talk about a project.";

export default function WhatsAppButton() {
  return (
    <motion.a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(MESSAGE)}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Stellar Media on WhatsApp"
      initial={{ opacity: 0, scale: 0, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-xl shadow-black/40"
    >
      <motion.span
        aria-hidden="true"
        className="absolute inset-0 rounded-full bg-[#25D366]"
        animate={{ scale: [1, 1.6], opacity: [0.55, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
      />
      <svg viewBox="0 0 24 24" fill="white" className="relative h-7 w-7">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 1.67c2.24 0 4.35.87 5.93 2.46a8.23 8.23 0 0 1 2.43 5.87c0 4.58-3.73 8.31-8.32 8.31a8.3 8.3 0 0 1-4.24-1.16l-.3-.18-3.12.82.83-3.04-.2-.31a8.26 8.26 0 0 1-1.27-4.4c0-4.59 3.73-8.37 8.19-8.37zm-4.8 4.8c-.16 0-.43.06-.65.31-.22.25-.86.84-.86 2.04 0 1.2.88 2.36 1 2.52.13.17 1.71 2.69 4.19 3.71 2.06.85 2.48.68 2.93.64.45-.04 1.45-.59 1.66-1.16.2-.57.2-1.06.14-1.16-.06-.1-.23-.16-.49-.28-.25-.13-1.46-.72-1.69-.8-.23-.08-.4-.13-.56.13-.17.25-.65.8-.79.97-.15.17-.29.19-.55.06-.25-.13-1.06-.39-2.02-1.24-.75-.67-1.25-1.49-1.4-1.74-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.55-1.35-.76-1.85-.2-.48-.4-.42-.56-.42z" />
      </svg>
    </motion.a>
  );
}
