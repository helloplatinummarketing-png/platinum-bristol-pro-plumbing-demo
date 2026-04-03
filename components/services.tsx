"use client";

import { motion, useInView } from "framer-motion";
import {
  AlertTriangle,
  Building2,
  Droplets,
  Flame,
  Thermometer,
  Wrench,
} from "lucide-react";
import { useRef } from "react";

const BOOKING_URL = "https://cal.com/platinummarketingagency/15min";

const services = [
  {
    icon: AlertTriangle,
    title: "Emergency Call-Outs",
    description:
      "Burst pipes, major leaks, or no hot water? We respond fast — often within the hour across Bristol.",
    tag: "Most popular",
  },
  {
    icon: Flame,
    title: "Boiler Repair & Service",
    description:
      "Gas Safe registered. We diagnose, repair, and service all boiler makes. Annual servicing from £85.",
    tag: null,
  },
  {
    icon: Droplets,
    title: "Leak Detection & Repair",
    description:
      "From dripping taps to hidden pipe leaks, we find it and fix it — no unnecessary damage to your walls.",
    tag: null,
  },
  {
    icon: Wrench,
    title: "Bathroom Installations",
    description:
      "Full bathroom fits or a single fixture swap. Quality workmanship, tidy finish, clean-up included.",
    tag: null,
  },
  {
    icon: Thermometer,
    title: "Central Heating",
    description:
      "Cold radiators, pressure problems, or a full new system — we keep your home warm all year.",
    tag: null,
  },
  {
    icon: Building2,
    title: "Commercial Plumbing",
    description:
      "Offices, shops, and rental properties across Bristol. Flexible scheduling to minimise disruption.",
    tag: null,
  },
];

/* ── Card component with gradient border + bouncing icon ── */
function ServiceCard({
  service,
  delay,
  inView,
}: {
  service: (typeof services)[0];
  delay: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay }}
      whileHover="hovered"
      className="group relative rounded-2xl p-[1px] cursor-default"
      style={{
        background:
          "linear-gradient(135deg, rgba(201,168,76,0.08) 0%, rgba(201,168,76,0.02) 100%)",
      }}
    >
      {/* Animated gradient border on hover — sits behind card body */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        initial={{ opacity: 0 }}
        variants={{
          hovered: {
            opacity: 1,
            transition: { duration: 0.3 },
          },
        }}
        style={{
          background:
            "linear-gradient(135deg, rgba(201,168,76,0.55) 0%, rgba(201,168,76,0.05) 50%, rgba(201,168,76,0.35) 100%)",
          padding: "1px",
          borderRadius: "1rem",
          maskImage:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          WebkitMaskImage:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "destination-out",
        }}
      />

      {/* Card inner */}
      <motion.div
        variants={{
          hovered: {
            y: -6,
            boxShadow: "0 24px 48px rgba(201,168,76,0.18)",
            transition: { duration: 0.25 },
          },
        }}
        className="relative bg-[#0F2040] border border-[#C9A84C]/15 group-hover:border-[#C9A84C]/40 rounded-2xl p-6 transition-colors h-full"
      >
        {service.tag && (
          <span className="absolute top-4 right-4 bg-[#C9A84C] text-[#0B1829] text-xs font-bold px-2.5 py-1 rounded-full">
            {service.tag}
          </span>
        )}

        {/* Icon — pulses/bounces on hover */}
        <motion.div
          variants={{
            hovered: {
              y: [-2, -8, -2],
              transition: {
                duration: 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              },
            },
          }}
          className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#C9A84C]/10 border border-[#C9A84C]/20 group-hover:bg-[#C9A84C]/20 transition-colors mb-5"
        >
          <service.icon className="w-6 h-6 text-[#C9A84C]" />
        </motion.div>

        <h3 className="text-white font-semibold text-lg mb-2">{service.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
      </motion.div>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" ref={ref} className="py-20 bg-[#0B1829]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest mb-3">
            What we do
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Every plumbing job covered
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            From a dripping tap to a full bathroom refit — we handle it all,
            with upfront pricing and no surprise bills.
          </p>
        </motion.div>

        {/* Cards grid — staggered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard
              key={service.title}
              service={service}
              delay={i * 0.1}
              inView={inView}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="text-center mt-14"
        >
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#C9A84C] hover:bg-[#b8943f] active:scale-95 text-[#0B1829] font-bold text-base px-8 py-4 rounded-xl transition-all shadow-lg shadow-[#C9A84C]/20"
          >
            Book your job today
          </a>
        </motion.div>
      </div>
    </section>
  );
}
