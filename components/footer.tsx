"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, MapPin, CalendarCheck, Star } from "lucide-react";

const BOOKING_URL = "https://cal.com/platinummarketingagency/15min";

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <footer ref={ref} className="bg-[#060f1a] border-t border-[#C9A84C]/15">
      {/* Final CTA band */}
      <div className="bg-gradient-to-r from-[#C9A84C]/10 via-[#C9A84C]/5 to-[#C9A84C]/10 border-b border-[#C9A84C]/15">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto px-4 sm:px-6 py-16 text-center"
        >
          <div className="flex items-center justify-center gap-1 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#C9A84C] text-[#C9A84C]" />
            ))}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to get your plumbing sorted?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            Book a free 15-minute call with James today. No obligation, no pressure — just honest advice and a fixed price.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#C9A84C] hover:bg-[#b8943f] active:scale-95 text-[#0B1829] font-bold text-base px-8 py-4 rounded-xl transition-all shadow-lg shadow-[#C9A84C]/25 w-full sm:w-auto justify-center"
            >
              <CalendarCheck className="w-5 h-5" />
              Book Free Call-Out Now
            </a>
            <a
              href="tel:01179001234"
              className="flex items-center gap-2 border border-white/20 hover:border-[#C9A84C]/50 text-white font-semibold text-base px-8 py-4 rounded-xl transition-all w-full sm:w-auto justify-center"
            >
              <Phone className="w-5 h-5 text-[#C9A84C]" />
              0117 900 1234
            </a>
          </div>
        </motion.div>
      </div>

      {/* Footer links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="max-w-6xl mx-auto px-4 sm:px-6 py-12"
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-1 mb-4">
              <span className="text-[#C9A84C] font-bold text-xl">Bristol Pro</span>
              <span className="text-white font-bold text-xl">Plumbing</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Bristol&apos;s trusted plumbers. Fast, reliable, and guaranteed.
              Serving Bristol and surrounding areas since 2014.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="tel:01179001234" className="flex items-center gap-2 hover:text-[#C9A84C] transition-colors">
                  <Phone className="w-4 h-4 text-[#C9A84C] shrink-0" />
                  0117 900 1234
                </a>
              </li>
              <li>
                <a href="mailto:james@bristolproplumbing.co.uk" className="flex items-center gap-2 hover:text-[#C9A84C] transition-colors">
                  <Mail className="w-4 h-4 text-[#C9A84C] shrink-0" />
                  james@bristolproplumbing.co.uk
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C9A84C] shrink-0 mt-0.5" />
                <span>Bristol & surrounding areas<br />(15 mile radius)</span>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {[
                "Emergency Call-Outs",
                "Boiler Repair & Service",
                "Leak Detection",
                "Bathroom Installations",
                "Central Heating",
                "Commercial Plumbing",
              ].map((s) => (
                <li key={s}>
                  <a href="#services" className="hover:text-[#C9A84C] transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#C9A84C]/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>© 2025 Bristol Pro Plumbing. All rights reserved.</p>
          <p>
            Gas Safe Registered · Fully Insured · 12-Month Guarantee
          </p>
          <p>
            Website by{" "}
            <span className="text-[#C9A84C]">Platinum Marketing Agency</span>
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
