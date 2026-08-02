"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp, stagger } from "@/lib/motion";

interface RevealItemProps {
  children: ReactNode;
  className?: string;
  distance?: number;
}

export function RevealItem({ children, className = "", distance = 40 }: RevealItemProps) {
  return (
    <motion.div variants={fadeUp(distance)} className={className}>
      {children}
    </motion.div>
  );
}

interface RevealProps {
  children: ReactNode;
  delay?: number;
  staggerChildren?: number;
  className?: string;
}

export default function Reveal({
  children,
  delay = 0,
  staggerChildren = 0,
  className = "",
}: RevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={stagger(staggerChildren, delay)}
      className={className}
    >
      {staggerChildren > 0 ? (
        children
      ) : (
        <RevealItem className={className}>{children}</RevealItem>
      )}
    </motion.div>
  );
}
