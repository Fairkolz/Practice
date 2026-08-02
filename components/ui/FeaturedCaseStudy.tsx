"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { EASE_IN_OUT } from "@/lib/motion";

export default function FeaturedCaseStudy() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="grid items-center gap-12 md:grid-cols-2">
      <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl">
        <Image
          src="/images/portfolio-vertex.jpg"
          alt="Analytics dashboard interface from the featured Quantum Systems case study"
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
        />
      </div>
      <div>
        <div className="mb-5 inline-flex items-center gap-2 text-label-large uppercase text-primary">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
          Featured Case Study
        </div>
        <blockquote className="mb-8 font-display text-heading-small font-semibold leading-snug text-primary">
          &ldquo;Forge Studio transformed our complex data architecture into a seamless,
          human-centric interface that increased efficiency by 40%.&rdquo;
        </blockquote>
        <p className="mb-1 text-title-small font-semibold text-on-surface">Marcus Thorne</p>
        <p className="mb-5 text-body-medium text-on-surface-variant">
          Chief Information Officer, Quantum Systems
        </p>

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              key="story"
              initial={{ height: 0, opacity: 0, y: -10 }}
              animate={{ height: "auto", opacity: 1, y: 0 }}
              exit={{ height: 0, opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: EASE_IN_OUT }}
              className="overflow-hidden"
            >
              <p className="mb-5 border-l-2 border-primary pl-4 text-body-medium leading-relaxed text-on-surface-variant">
                Quantum Systems manages petabytes of sensitive financial data across dozens of
                legacy platforms. Forge Studio consolidated this fragmented architecture into a
                single, cohesive analytics suite designed around how analysts actually work.
                Through iterative design sprints and continuous user testing, we cut average
                report generation from 45 minutes to under two, eliminated redundant workflows,
                and built an interface our team now relies on daily. Within six months of launch,
                operational efficiency rose 40% and analyst onboarding time dropped by half.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          className="group inline-flex items-center gap-2 font-medium text-on-surface transition-colors hover:text-primary"
        >
          {expanded ? "Hide the story" : "Read the full story"}
          <svg
            className={`h-4 w-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
      </div>
    </div>
  );
}
