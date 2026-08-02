"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import Button, { type ButtonVariant } from "./Button";
import { fadeUp, stagger } from "@/lib/motion";

export interface CtaSectionAction {
  label: ReactNode;
  href: string;
  variant?: ButtonVariant;
}

interface CtaSectionProps {
  title: string;
  text: string;
  actions: CtaSectionAction[];
  className?: string;
}

export default function CtaSection({
  title,
  text,
  actions,
  className = "",
}: CtaSectionProps) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={stagger(0.08)}
      className={`bg-primary py-20 text-center ${className}`}
    >
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          variants={fadeUp(30)}
          className="mx-auto mb-5 max-w-[600px] font-display text-display-small font-semibold leading-tight text-on-primary"
        >
          {title}
        </motion.h2>
        <motion.p
          variants={fadeUp(30)}
          className="mx-auto mb-10 max-w-[480px] text-body-large text-white/80"
        >
          {text}
        </motion.p>
        <motion.div variants={fadeUp(30)} className="flex justify-center gap-4">
          {actions.map((action) => (
            <Button key={action.href} href={action.href} variant={action.variant}>
              {action.label}
            </Button>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
