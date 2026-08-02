"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/lib/nav";
import { EASE } from "@/lib/motion";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: EASE }}
      className="sticky top-0 z-50 border-b border-outline-variant bg-surface-container-lowest shadow-xs"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE, delay: 0.1 }}
        >
          <Link href="/" className="text-title-medium font-bold tracking-tight text-primary">
            Forge Studio
          </Link>
        </motion.div>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: EASE, delay: 0.18 + i * 0.05 }}
            >
              <Link
                href={link.href}
                className={`rounded-md px-3 py-2 text-body-medium font-medium transition-colors ${
                  pathname === link.href
                    ? "text-on-surface"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </nav>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: EASE, delay: 0.55 }}
        >
          <Link
            href="/faq"
            className="hidden rounded-full border-2 border-primary bg-primary px-5 py-2 text-body-medium font-medium text-on-primary transition-all hover:bg-primary/90 hover:shadow-md hover:-translate-y-0.5 md:inline-block"
          >
            Work with us
          </Link>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, ease: EASE, delay: 0.55 }}
          className="flex flex-col gap-[5px] p-2 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className={`block h-0.5 w-[22px] rounded-full bg-on-surface transition-all ${open ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`block h-0.5 w-[22px] rounded-full bg-on-surface transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-[22px] rounded-full bg-on-surface transition-all ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </motion.button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="fixed inset-0 z-40 bg-black/20 md:hidden"
            onClick={() => setOpen(false)}
          />
        )}
        {open && (
          <motion.div
            key="panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: EASE }}
            className="absolute left-0 right-0 top-full z-50 flex flex-col overflow-hidden border-b border-outline-variant bg-surface-container-lowest p-4 shadow-lg md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: EASE, delay: 0.05 + i * 0.04 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-md px-3 py-3 text-body-medium font-medium transition-colors ${
                    pathname === link.href
                      ? "text-on-surface"
                      : "text-on-surface-variant hover:text-on-surface"
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: EASE, delay: 0.05 + navLinks.length * 0.04 }}
            >
              <Link
                href="/faq"
                onClick={() => setOpen(false)}
                className="mt-3 block rounded-full border-2 border-primary bg-primary px-5 py-3 text-center text-body-medium font-medium text-on-primary"
              >
                Work with us
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
