"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { EASE_IN_OUT, stagger } from "@/lib/motion";

interface ExpandableCardProps {
  icon?: React.ReactNode;
  title: string;
  text: string;
  items?: string[];
  image?: string;
  className?: string;
  open?: boolean;
  onToggle?: () => void;
}

export default function ExpandableCard({
  icon,
  title,
  text,
  items,
  image,
  className = "",
  open,
  onToggle,
}: ExpandableCardProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const isOpen = open ?? internalOpen;

  const toggle = () => {
    if (onToggle) {
      onToggle();
    } else {
      setInternalOpen((prev) => !prev);
    }
  };

  return (
    <div
      className={`group flex h-full flex-col overflow-hidden rounded-xl border border-outline-variant bg-surface-container-lowest transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-elevation-3 ${className}`}
    >
      <div
        role="button"
        tabIndex={0}
        onClick={toggle}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggle();
          }
        }}
        aria-expanded={isOpen}
        className="flex w-full flex-1 flex-col p-8 text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-xl"
      >
        {icon && (
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-surface-container-high text-primary transition-transform duration-300 group-hover:scale-[1.08]">
            {icon}
          </div>
        )}
        <h3 className="mb-3 text-title-medium font-semibold text-on-surface">{title}</h3>
        <p className="text-body-medium text-on-surface-variant">{text}</p>

        <AnimatePresence initial={false}>
          {isOpen && items && items.length > 0 && (
            <motion.div
              key="content"
              initial={{ height: 0, opacity: 0, y: -12 }}
              animate={{ height: "auto", opacity: 1, y: 0 }}
              exit={{ height: 0, opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: EASE_IN_OUT }}
              className="overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.ul
                variants={stagger(0.06)}
                initial="hidden"
                animate="visible"
                className="mt-5 flex flex-col gap-2"
              >
                {items.map((item) => (
                  <motion.li
                    key={item}
                    variants={{
                      hidden: { opacity: 0, y: 8 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.35, ease: EASE_IN_OUT },
                      },
                    }}
                    className="flex items-start gap-2 text-body-medium text-on-surface"
                  >
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>

        <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-body-medium font-medium text-primary">
          {isOpen ? "Show less" : "Learn more"}
          <svg
            className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </div>

      {image && (
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>
      )}
    </div>
  );
}
