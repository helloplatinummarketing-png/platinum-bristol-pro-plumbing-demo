"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  CalendarCheck,
  CheckCircle,
  Phone,
  ShieldCheck,
  Star,
} from "lucide-react";
import { useRef } from "react";

const BOOKING_URL = "https://cal.com/platinummarketingagency/15min";

/* ── Deterministic particles (no random — avoids hydration mismatch) ── */
const PARTICLES = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  x: ((i * 37 + 11) % 97) + 1.5,
  y: ((i * 53 + 7) % 93) + 2,
  size: (i % 3) + 1.5,
  duration: 7 + (i % 8),
  delay: (i % 9) * 0.7,
  yRange: 18 + (i % 16),
}));

function Particles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {PARTICLES.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-[#C9A84C]"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
          animate={{ y: [0, -p.yRange, 0], opacity: [0.12, 0.45, 0.12] }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

/* ── 3-D floating booking card ── */
function FloatingCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60, y: 20 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.9, delay: 0.6, ease: "easeOut" }}
      className="relative w-72 mx-auto"
      style={{ perspective: "900px" }}
    >
      {/* Slow float + gentle 3-D tilt */}
      <motion.div
        animate={{ y: [0, -14, 0], rotateY: [-4, 4, -4], rotateX: [2, -2, 2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Ambient glow behind the card */}
        <div className="absolute inset-0 rounded-2xl bg-[#C9A84C]/20 blur-2xl scale-110 pointer-events-none" />

        {/* Card body */}
        <div className="relative bg-[#0d1e38]/95 backdrop-blur-md border border-[#C9A84C]/35 rounded-2xl p-5 shadow-2xl">
          {/* Header row */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-green-400" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white font-semibold text-sm">New Booking Received</p>
              <p className="text-gray-400 text-xs">Just now · Emergency</p>
            </div>
            <motion.div
              animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
              transition={{ duration: 1.8, repeat: Infinity }}
              className="w-2.5 h-2.5 rounded-full bg-green-400 shrink-0"
            />
          </div>

          {/* Job details */}
          <div className="bg-[#C9A84C]/10 border border-[#C9A84C]/20 rounded-xl p-3 mb-3">
            <p className="text-[#C9A84C] text-xs font-bold uppercase tracking-wider">
              Burst Pipe — Urgent
            </p>
            <p className="text-white text-sm font-medium mt-0.5">Clifton, Bristol BS8</p>
            <div className="flex items-center gap-2 mt-1.5">
              <Phone className="w-3 h-3 text-gray-400" />
              <p className="text-gray-400 text-xs">07912 *** ***</p>
            </div>
          </div>

          {/* Footer row */}
          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-400">Estimated job value</span>
            <span className="text-[#C9A84C] font-bold text-base">£350</span>
          </div>
        </div>
      </motion.div>

      {/* Floating review badge */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-6 -right-5 bg-[#0B1829] border border-[#C9A84C]/30 rounded-xl px-3 py-2 shadow-xl"
      >
        <div className="flex items-center gap-2">
          <div className="flex -space-x-1">
            {["S", "T", "A"].map((l) => (
              <div
                key={l}
                className="w-5 h-5 rounded-full bg-[#C9A84C]/25 border border-[#C9A84C]/50 flex items-center justify-center text-[#C9A84C] text-[9px] font-bold"
              >
                {l}
              </div>
            ))}
          </div>
          <div>
            <div className="flex gap-0.5 mb-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-2.5 h-2.5 fill-[#C9A84C] text-[#C9A84C]" />
              ))}
            </div>
            <p className="text-white text-[10px] font-semibold leading-none">12 reviews</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Word-by-word animated headline ── */
function AnimatedHeadline() {
  const line1 = "Plumbing problems?";
  const line2 = ["We're", "there", "today."];
  const words1 = line1.split(" ");

  return (
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
      <span className="block">
        {words1.map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.35 + i * 0.12 }}
            className="inline-block mr-[0.3em]"
          >
            {word}
          </motion.span>
        ))}
      </span>
      <span className="block text-[#C9A84C]">
        {line2.map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.45,
              delay: 0.35 + (words1.length + i) * 0.12,
            }}
            className="inline-block mr-[0.3em]"
          >
            {word}
          </motion.span>
        ))}
      </span>
    </h1>
  );
}

/* ── Hero section ── */
export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      {/* Animated multi-colour gradient background */}
      <div className="absolute inset-0 animate-gradient-bg" />

      {/* Slow-breathing purple radial overlay */}
      <motion.div
        animate={{ opacity: [0.25, 0.55, 0.25] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 80% 20%, #2d1b6940 0%, transparent 70%)",
        }}
      />

      {/* Subtle dot-grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#C9A84C 1px, transparent 1px), linear-gradient(to right, #C9A84C 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <Particles />

      {/* Parallax content wrapper */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-24 w-full"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* ── Left: copy ── */}
          <div className="text-center lg:text-left">
            {/* Trust badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-[#C9A84C]/10 border border-[#C9A84C]/30 text-[#C9A84C] text-sm font-medium px-4 py-2 rounded-full mb-8"
            >
              <Star className="w-4 h-4 fill-[#C9A84C]" />
              Bristol&apos;s Most Trusted Plumbers — 12 Five-Star Reviews
            </motion.div>

            <AnimatedHeadline />

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.85 }}
              className="text-lg sm:text-xl text-gray-300 mb-10 leading-relaxed"
            >
              James and the Bristol Pro Plumbing team fix leaks, boilers, and
              blockages fast. No missed calls. No vague quotes. Just reliable
              work at a fair price — guaranteed.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 1 }}
              className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4 mb-10"
            >
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="animate-pulse-glow flex items-center gap-2 bg-[#C9A84C] hover:bg-[#b8943f] active:scale-95 text-[#0B1829] font-bold text-base px-8 py-4 rounded-xl transition-colors w-full sm:w-auto justify-center"
              >
                <CalendarCheck className="w-5 h-5" />
                Book a Free Call-Out
              </a>
              <a
                href="tel:01179001234"
                className="flex items-center gap-2 border border-white/20 hover:border-[#C9A84C]/50 hover:bg-white/5 text-white font-semibold text-base px-8 py-4 rounded-xl transition-all w-full sm:w-auto justify-center"
              >
                Call 0117 900 1234
              </a>
            </motion.div>

            {/* Trust strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 1.1 }}
              className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4 sm:gap-6 text-sm text-gray-400"
            >
              {[
                { icon: ShieldCheck, text: "Gas Safe registered" },
                { icon: Star, text: "12 five-star reviews" },
                { icon: CalendarCheck, text: "Same-day available" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-[#C9A84C]" />
                  <span>{text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: 3-D floating card ── */}
          <div className="flex items-center justify-center lg:justify-end pt-10 lg:pt-0">
            <FloatingCard />
          </div>
        </div>
      </motion.div>

      {/* Bottom fade-out into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#0B1829] to-transparent pointer-events-none" />
    </section>
  );
}
