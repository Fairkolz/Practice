"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import Button, { type ButtonVariant } from "./Button";
import { EASE, fadeUp, stagger } from "@/lib/motion";

export interface PageHeroAction {
  label: ReactNode;
  href: string;
  variant?: ButtonVariant;
}

interface PageHeroProps {
  badge?: string;
  title: string;
  description?: string;
  actions?: PageHeroAction[];
  media?: ReactNode;
  footer?: ReactNode;
  center?: boolean;
  className?: string;
}

const buttonReveal = {
  hidden: { opacity: 0, y: 12, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: EASE },
  },
};

export default function PageHero({
  badge,
  title,
  description,
  actions,
  media,
  footer,
  center = false,
  className = "",
}: PageHeroProps) {
  const words = title.split(" ");

  const heading = (
    <motion.div
      variants={stagger(0.08)}
      initial="hidden"
      animate="visible"
      className={center ? "mx-auto max-w-3xl text-center" : ""}
    >
      {badge && (
        <motion.div
          variants={fadeUp(20)}
          className={center ? "mb-4 flex justify-center" : "mb-4"}
        >
          <span className="inline-block rounded-sm bg-primary px-3 py-1 text-label-large uppercase text-on-primary">
            {badge}
          </span>
        </motion.div>
      )}
      <h1 className="mb-5 max-w-[700px] font-display text-display-large font-bold leading-tight tracking-tight text-primary">
        {words ? (
          words.map((word, i) => (
            <span key={i} className="inline-block overflow-hidden align-top">
              <motion.span
                className="inline-block"
                initial={{ y: "115%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.7, ease: EASE, delay: 0.15 + i * 0.045 }}
              >
                {word}
                {i < words.length - 1 ? "\u00A0" : ""}
              </motion.span>
            </span>
          ))
        ) : (
          title
        )}
      </h1>
      {description && (
        <motion.p
          variants={fadeUp(20)}
          className={`mb-8 max-w-[480px] text-body-large text-on-surface-variant ${
            center ? "mx-auto" : ""
          }`}
        >
          {description}
        </motion.p>
      )}
      {actions && actions.length > 0 && (
        <motion.div
          variants={fadeUp(20)}
          className={`flex flex-wrap gap-4 ${center ? "justify-center" : ""}`}
        >
          {actions.map((action) => (
            <motion.span key={action.href} variants={buttonReveal} className="inline-block">
              <Button href={action.href} variant={action.variant}>
                {action.label}
              </Button>
            </motion.span>
          ))}
        </motion.div>
      )}
    </motion.div>
  );

  return (
    <motion.section className={`py-16 md:py-20 ${className}`}>
      <div className="mx-auto max-w-6xl px-6">
        <div className={media ? "grid items-center gap-10 md:grid-cols-2" : ""}>
          {heading}
          {media && (
            <motion.div
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, ease: EASE, delay: 0.15 }}
            >
              <motion.div
                animate={{ y: [0, -3, 0, 3, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                {media}
              </motion.div>
            </motion.div>
          )}
        </div>
        {footer && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp(20)}
            className={center ? "mt-10 flex justify-center" : "mt-10"}
          >
            {footer}
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}
