"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { navLinks } from "@/lib/nav";
import { fadeUp } from "@/lib/motion";

export default function Footer() {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={fadeUp(40)}
      className="bg-inverse-surface py-16 text-inverse-on-surface"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-3 text-title-small font-bold text-on-primary">Forge Studio</h3>
            <p className="max-w-[250px] text-body-medium text-on-surface-variant">
              A creative digital agency crafting premium digital experiences for visionary brands.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-label-large font-semibold uppercase text-on-primary">Navigation</h4>
            <div className="space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-body-medium text-on-surface-variant transition-colors hover:text-on-primary"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-label-large font-semibold uppercase text-on-primary">Services</h4>
            <div className="space-y-1">
              {["UI/UX Design", "Web Development", "Branding", "Product Design"].map((s) => (
                <Link
                  key={s}
                  href="/services"
                  className="block text-body-medium text-on-surface-variant transition-colors hover:text-on-primary"
                >
                  {s}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-label-large font-semibold uppercase text-on-primary">Contact</h4>
            <div className="space-y-1 text-body-medium text-on-surface-variant">
              <Link
                href="mailto:hello@forge.studio"
                className="block transition-colors hover:text-on-primary"
              >
                hello@forge.studio
              </Link>
              <a
                href="tel:+18003674348"
                className="block transition-colors hover:text-on-primary"
              >
                +1 (800) FORGE-IT
              </a>
              <div className="flex gap-3 pt-2">
                {[
                  { label: "X", href: "https://x.com" },
                  { label: "In", href: "https://www.linkedin.com" },
                  { label: "Be", href: "https://www.behance.net" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-xs transition-all hover:scale-110 hover:bg-white/20"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <hr className="mb-6 border-t border-white/10" />
        <p className="text-center text-body-small text-on-surface-variant">
          &copy; {new Date().getFullYear()} Forge Studio. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
}
