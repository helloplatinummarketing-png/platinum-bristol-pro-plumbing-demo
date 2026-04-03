"use client";

import { motion, useInView } from "framer-motion";
import { CalendarCheck, CheckCircle2, PhoneCall } from "lucide-react";
import { useRef } from "react";

const BOOKING_URL = "https://cal.com/platinummarketingagency/15min";

const steps = [
  {
    step: "01",
    icon: CalendarCheck,
    title: "Book online in 60 seconds",
    description:
      "Pick a time that suits you using our instant booking link. No phone tag, no waiting on hold. You get a confirmation straight to your phone.",
  },
  {
    step: "02",
    icon: PhoneCall,
    title: "James calls to confirm",
    description:
      "We call you back within 15 minutes to confirm the job and give you a fixed price upfront. No hidden costs, ever.",
  },
  {
    step: "03",
    icon: CheckCircle2,
    title: "Job done, guaranteed",
    description:
      "We arrive on time, fix the problem, and leave your home clean. All work is backed by a 12-month guarantee.",
  },
];

/* ── Animated SVG connecting line ── */
function ConnectingLine({ inView }: { inView: boolean }) {
  return (
    <div className="hidden md:block absolute top-10 left-0 right-0 px-[16.66%] pointer-events-none">
      <svg
        viewBox="0 0 1000 4"
        preserveAspectRatio="none"
        className="w-full"
        style={{ height: 4 }}
      >
        {/* Base dim line */}
        <line x1="0" y1="2" x2="1000" y2="2" stroke="#C9A84C" strokeOpacity="0.12" strokeWidth="2" />
        {/* Animated glowing line */}
        <motion.line
          x1="0"
          y1="2"
          x2="1000"
          y2="2"
          stroke="url(#lineGrad)"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={inView ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ duration: 1.4, delay: 0.4, ease: "easeInOut" }}
          style={{ pathLength: undefined }}
          /* pathLength trick via strokeDasharray */
        />
        {/* Glow duplicate */}
        <motion.line
          x1="0"
          y1="2"
          x2="1000"
          y2="2"
          stroke="#C9A84C"
          strokeWidth="6"
          strokeOpacity="0.15"
          strokeLinecap="round"
          initial={{ scaleX: 0, originX: "0%" }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.4, delay: 0.4, ease: "easeInOut" }}
          style={{ transformOrigin: "left center" }}
        />
        <motion.line
          x1="0"
          y1="2"
          x2="1000"
          y2="2"
          stroke="#C9A84C"
          strokeWidth="2"
          strokeOpacity="0.8"
          strokeLinecap="round"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.4, delay: 0.4, ease: "easeInOut" }}
          style={{ transformOrigin: "left center" }}
        />
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C9A84C" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#f5d485" stopOpacity="1" />
            <stop offset="100%" stopColor="#C9A84C" stopOpacity="0.9" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

/* ── Step icon with spinning ring ── */
function StepIcon({
  StepComp,
  step,
}: {
  StepComp: (typeof steps)[0]["icon"];
  step: string;
}) {
  return (
    <div className="relative w-20 h-20 mb-6">
      {/* Spinning dashed ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0"
      >
        <svg viewBox="0 0 80 80" className="w-full h-full">
          <circle
            cx="40"
            cy="40"
            r="37"
            fill="none"
            stroke="#C9A84C"
            strokeWidth="1.5"
            strokeDasharray="18 9"
            strokeOpacity="0.55"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>

      {/* Slower counter-rotating ring for depth */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="absolute inset-1"
      >
        <svg viewBox="0 0 72 72" className="w-full h-full">
          <circle
            cx="36"
            cy="36"
            r="33"
            fill="none"
            stroke="#C9A84C"
            strokeWidth="0.8"
            strokeDasharray="6 14"
            strokeOpacity="0.25"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>

      {/* Icon circle */}
      <div className="absolute inset-0 m-2 rounded-full bg-[#0B1829] border border-[#C9A84C]/40 flex items-center justify-center">
        <StepComp className="w-7 h-7 text-[#C9A84C]" />
      </div>

      {/* Step number badge */}
      <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#C9A84C] text-[#0B1829] text-[10px] font-bold flex items-center justify-center z-10">
        {step}
      </span>
    </div>
  );
}

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="how-it-works" ref={ref} className="py-20 bg-[#0F2040]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest mb-3">
            Simple process
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            From call to fixed — in 3 steps
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            We know you&apos;re busy. That&apos;s why booking with us takes less
            time than making a cup of tea.
          </p>
        </motion.div>

        {/* Steps row */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
          <ConnectingLine inView={inView} />

          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 44 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.22 }}
              className="flex flex-col items-center text-center"
            >
              <StepIcon StepComp={step.icon} step={step.step} />
              <h3 className="text-white font-semibold text-xl mb-3">
                {step.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="text-center mt-16"
        >
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#C9A84C] hover:bg-[#b8943f] active:scale-95 text-[#0B1829] font-bold text-base px-8 py-4 rounded-xl transition-all shadow-lg shadow-[#C9A84C]/20"
          >
            <CalendarCheck className="w-5 h-5" />
            Start Step 1 — Book Free Call
          </a>
        </motion.div>
      </div>
    </section>
  );
}
