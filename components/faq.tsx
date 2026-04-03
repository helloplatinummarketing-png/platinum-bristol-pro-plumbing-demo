"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How quickly can you come out?",
    a: "For emergencies we aim to be with you within the hour across Bristol. For non-urgent work, we typically have slots within 24–48 hours. Book online and we'll confirm your exact time within 15 minutes.",
  },
  {
    q: "Do you give a fixed price before starting?",
    a: "Always. We give you a clear, written quote before any work starts. No surprises, no extras added on. The price we quote is the price you pay.",
  },
  {
    q: "Are you Gas Safe registered?",
    a: "Yes. James is fully Gas Safe registered and has been for over 10 years. You can check our registration number on the official Gas Safe Register website.",
  },
  {
    q: "Do you work on weekends?",
    a: "We offer Saturday appointments for non-emergency jobs. Emergency call-outs are available 7 days a week, including bank holidays.",
  },
  {
    q: "What areas do you cover?",
    a: "We cover all areas of Bristol including Clifton, Bedminster, Redland, Bishopston, Horfield, Filton, Keynsham, and surrounding areas within roughly 15 miles.",
  },
  {
    q: "Is your work guaranteed?",
    a: "Yes. All work comes with a 12-month labour guarantee. Parts are covered by the manufacturer's warranty. If anything goes wrong, we come back and sort it — no arguments.",
  },
];

function FAQItem({ q, a, index, inView }: { q: string; a: string; index: number; inView: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="border border-[#C9A84C]/15 rounded-xl overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left bg-[#0F2040] hover:bg-[#142540] transition-colors gap-4"
      >
        <span className="text-white font-medium text-sm sm:text-base">{q}</span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-[#C9A84C]" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <div className="px-6 pb-5 pt-3 bg-[#0F2040]/50 text-gray-400 text-sm leading-relaxed border-t border-[#C9A84C]/10">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="faq" ref={ref} className="py-20 bg-[#0F2040]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest mb-3">
            Got questions?
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Frequently asked questions
          </h2>
          <p className="text-gray-400 text-lg">
            Can&apos;t find your answer here? Call us on 0117 900 1234.
          </p>
        </motion.div>

        {/* Items */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
