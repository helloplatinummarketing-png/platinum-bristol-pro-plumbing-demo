"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CalendarCheck } from "lucide-react";
import { useEffect, useState } from "react";

const BOOKING_URL = "https://cal.com/platinummarketingagency/15min";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.7, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 20 }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
          className="fixed bottom-6 right-6 z-[150] flex items-center gap-2 bg-[#C9A84C] text-[#0B1829] font-bold text-sm px-5 py-3 rounded-full shadow-2xl shadow-[#C9A84C]/30 animate-pulse-glow"
        >
          <CalendarCheck className="w-4 h-4" />
          Book Demo
        </motion.a>
      )}
    </AnimatePresence>
  );
}
