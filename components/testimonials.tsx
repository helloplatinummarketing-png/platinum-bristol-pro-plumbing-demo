"use client";

import { motion, useInView } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { useRef } from "react";

const reviews = [
  {
    name: "Sarah Mitchell",
    location: "Clifton, Bristol",
    rating: 5,
    date: "2 weeks ago",
    text: "James came out within the hour when our boiler packed up in January. Fixed it same day, gave us a clear price before starting, and didn't try to upsell us on anything we didn't need. Genuinely refreshing. Will 100% use again.",
    job: "Emergency boiler repair",
    initials: "SM",
  },
  {
    name: "Tom Hewitt",
    location: "Redland, Bristol",
    rating: 5,
    date: "1 month ago",
    text: "Had a leak under the kitchen sink that two other plumbers couldn't find. James found it in 20 minutes, explained exactly what the problem was, and had it sorted before lunch. No mess left behind either. Brilliant service.",
    job: "Leak detection & repair",
    initials: "TH",
  },
  {
    name: "Amanda Price",
    location: "Bedminster, Bristol",
    rating: 5,
    date: "3 months ago",
    text: "Used Bristol Pro for a full bathroom refit. James managed the whole project, kept us updated throughout, and finished a day ahead of schedule. The finish is immaculate. Everyone who visits asks who did it. Highly recommend.",
    job: "Bathroom installation",
    initials: "AP",
  },
  {
    name: "David Clarke",
    location: "Horfield, Bristol",
    rating: 5,
    date: "5 months ago",
    text: "Booked for a routine annual service and James noticed a small issue that could have become very expensive. Sorted it on the spot, no drama. Honest, professional and competitively priced. Exactly what you want in a plumber.",
    job: "Boiler service",
    initials: "DC",
  },
  {
    name: "Fiona Walsh",
    location: "Bishopston, Bristol",
    rating: 5,
    date: "6 months ago",
    text: "Emergency call on a Sunday morning — cold radiators, two kids in the house. James picked up immediately, arrived within 45 minutes, and had the heating back on within the hour. Absolutely lifesaving. Thank you!",
    job: "Central heating repair",
    initials: "FW",
  },
];

/* ── Individual review card ── */
function ReviewCard({ review }: { review: (typeof reviews)[0] }) {
  return (
    <div
      className="shimmer-card bg-[#0F2040] border border-[#C9A84C]/15 hover:border-[#C9A84C]/35 rounded-2xl p-6 flex flex-col gap-4 transition-colors w-[340px] shrink-0"
    >
      {/* Stars */}
      <div className="flex items-center gap-1">
        {Array.from({ length: review.rating }).map((_, j) => (
          <Star key={j} className="w-4 h-4 fill-[#C9A84C] text-[#C9A84C]" />
        ))}
      </div>

      {/* Quote text */}
      <div className="relative flex-1">
        <Quote className="w-6 h-6 text-[#C9A84C]/25 absolute -top-1 -left-1" />
        <p className="text-gray-300 text-sm leading-relaxed pl-4 line-clamp-5">
          {review.text}
        </p>
      </div>

      {/* Footer */}
      <div className="border-t border-[#C9A84C]/10 pt-4 flex items-start justify-between gap-2">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#C9A84C]/20 border border-[#C9A84C]/30 flex items-center justify-center text-[#C9A84C] text-xs font-bold shrink-0">
            {review.initials}
          </div>
          <div>
            <p className="text-white font-semibold text-sm">{review.name}</p>
            <p className="text-gray-500 text-xs">{review.location}</p>
          </div>
        </div>
        <div className="text-right shrink-0">
          <p className="text-[#C9A84C] text-xs font-medium">{review.job}</p>
          <p className="text-gray-500 text-xs mt-0.5">{review.date}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  /* Double the reviews for seamless infinite loop */
  const allCards = [...reviews, ...reviews];

  return (
    <section id="reviews" ref={ref} className="py-20 bg-[#0B1829] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest mb-3">
            Customer reviews
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Don&apos;t take our word for it
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            12 five-star reviews and counting — here&apos;s what Bristol
            homeowners say.
          </p>
          <div className="flex items-center justify-center gap-1 mt-5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#C9A84C] text-[#C9A84C]" />
            ))}
            <span className="text-white font-semibold ml-2">5.0</span>
            <span className="text-gray-400 ml-1">on Google</span>
          </div>
        </motion.div>
      </div>

      {/* ── Auto-scrolling carousel ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {/* Edge fades */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#0B1829] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#0B1829] to-transparent z-10 pointer-events-none" />

          {/* Scrolling track */}
          <div className="overflow-hidden py-4">
            <div
              className="flex gap-6 animate-carousel"
              style={{ width: "fit-content" }}
            >
              {allCards.map((review, i) => (
                <ReviewCard key={`${review.name}-${i}`} review={review} />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
