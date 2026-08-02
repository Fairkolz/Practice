"use client";

import { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useAnimationFrame,
  useInView,
  useReducedMotion,
} from "framer-motion";

export interface Testimonial {
  quote: string;
  initials: string;
  name: string;
  position: string;
}

interface TestimonialsMarqueeProps {
  items: Testimonial[];
}

export default function TestimonialsMarquee({ items }: TestimonialsMarqueeProps) {
  const reduce = useReducedMotion();
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [paused, setPaused] = useState(false);
  const inView = useInView(viewportRef, { amount: 0.1 });

  useAnimationFrame(() => {
    if (reduce || paused || !inView || !trackRef.current) return;
    const half = trackRef.current.scrollWidth / 2;
    if (half <= 0) return;
    let next = x.get() - 0.3;
    if (next <= -half) next += half;
    x.set(next);
  });

  const card = (t: Testimonial, keyBase: string) => (
    <div
      key={keyBase}
      className="w-[300px] shrink-0 rounded-xl border border-outline-variant bg-surface-container-lowest p-7 transition-all hover:shadow-elevation-2 hover:-translate-y-0.5 sm:w-[380px]"
    >
      <div className="mb-4 flex gap-0.5 text-tertiary">
        {[...Array(5)].map((_, i) => (
          <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        ))}
      </div>
      <p className="mb-6 text-body-medium leading-relaxed text-on-surface-variant">
        &ldquo;{t.quote}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-label-large font-semibold text-on-primary">
          {t.initials}
        </div>
        <div>
          <p className="text-body-medium font-semibold text-on-surface">{t.name}</p>
          <p className="text-body-small text-on-surface-variant">{t.position}</p>
        </div>
      </div>
    </div>
  );

  if (reduce) {
    return (
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((t) => card(t, t.name))}
      </div>
    );
  }

  return (
    <div
      ref={viewportRef}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="relative overflow-hidden py-2"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
      }}
    >
      <motion.div
        ref={trackRef}
        className="flex w-max gap-6"
        style={{ x, willChange: "transform" }}
      >
        {[...items, ...items].map((t, i) => card(t, `${t.name}-${i}`))}
      </motion.div>
    </div>
  );
}
