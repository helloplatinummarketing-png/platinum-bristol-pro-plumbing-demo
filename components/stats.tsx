"use client";

import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";

/* ── Animated counting number ── */
function AnimatedNumber({
  target,
  suffix = "",
  prefix = "",
}: {
  target: number;
  suffix?: string;
  prefix?: string;
}) {
  const spanRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(spanRef, { once: true });
  const raw = useMotionValue(0);
  const spring = useSpring(raw, { damping: 28, stiffness: 70 });
  const display = useTransform(spring, (v) =>
    `${prefix}${Math.round(v)}${suffix}`
  );

  useEffect(() => {
    if (inView) raw.set(target);
  }, [inView, raw, target]);

  return <motion.span ref={spanRef}>{display}</motion.span>;
}

const stats = [
  {
    value: 350,
    prefix: "£",
    suffix: "",
    label: "Average job value",
    sub: "Transparent fixed pricing",
  },
  {
    value: 12,
    prefix: "",
    suffix: "+",
    label: "Five-star Google reviews",
    sub: "Verified ratings",
  },
  {
    value: 98,
    prefix: "",
    suffix: "%",
    label: "First-visit fix rate",
    sub: "We come fully equipped",
  },
];

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 bg-[#0F2040]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 36 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.18 }}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 50px rgba(201,168,76,0.25)",
                transition: { duration: 0.25 },
              }}
              className="animate-border-glow text-center px-6 py-10 rounded-2xl bg-[#0B1829] border border-[#C9A84C]/20 cursor-default"
            >
              <div className="text-5xl sm:text-6xl font-bold text-[#C9A84C] mb-3">
                <AnimatedNumber
                  target={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </div>
              <div className="text-white font-semibold text-lg mb-1.5">
                {stat.label}
              </div>
              <div className="text-gray-400 text-sm">{stat.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
