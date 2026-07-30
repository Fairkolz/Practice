"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/faq", label: "FAQ & Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-outline-variant bg-surface-container-lowest shadow-xs">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-title-medium font-bold tracking-tight text-primary">
          Forge Studio
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-md px-3 py-2 text-body-medium font-medium transition-colors ${
                pathname === link.href
                  ? "text-on-surface"
                  : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/faq"
          className="hidden rounded-full border-2 border-primary bg-primary px-5 py-2 text-body-medium font-medium text-on-primary transition-all hover:bg-primary/90 hover:shadow-md md:inline-block"
        >
          Work with us
        </Link>

        <button
          className="flex flex-col gap-[5px] p-2 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-[22px] rounded-full bg-on-surface transition-all ${open ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`block h-0.5 w-[22px] rounded-full bg-on-surface transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-[22px] rounded-full bg-on-surface transition-all ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <>
          <div className="fixed inset-0 z-40 bg-black/20 md:hidden" onClick={() => setOpen(false)} />
          <div className="absolute left-0 right-0 top-full z-50 flex flex-col border-b border-outline-variant bg-surface-container-lowest p-4 shadow-lg md:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.href}
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
            ))}
            <Link
              href="/faq"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-full border-2 border-primary bg-primary px-5 py-3 text-center text-body-medium font-medium text-on-primary"
            >
              Work with us
            </Link>
          </div>
        </>
      )}
    </header>
  );
}
