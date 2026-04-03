"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#0B1829]/90 backdrop-blur-md border-b border-[#C9A84C]/20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="text-[#C9A84C] font-bold text-lg tracking-tight leading-none">
            Bristol Pro
          </span>
          <span className="text-white font-bold text-lg tracking-tight leading-none">
            Plumbing
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-300">
          <a href="#services" className="hover:text-[#C9A84C] transition-colors">Services</a>
          <a href="#how-it-works" className="hover:text-[#C9A84C] transition-colors">How it works</a>
          <a href="#reviews" className="hover:text-[#C9A84C] transition-colors">Reviews</a>
          <a href="#faq" className="hover:text-[#C9A84C] transition-colors">FAQ</a>
        </nav>

        <a
          href="tel:01179001234"
          className="flex items-center gap-2 bg-[#C9A84C] hover:bg-[#b8943f] text-[#0B1829] font-semibold text-sm px-4 py-2 rounded-lg transition-colors"
        >
          <Phone className="w-4 h-4" />
          <span className="hidden sm:inline">0117 900 1234</span>
          <span className="sm:hidden">Call</span>
        </a>
      </div>
    </motion.header>
  );
}
