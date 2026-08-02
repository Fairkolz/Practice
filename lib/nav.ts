export interface NavLink {
  href: string;
  label: string;
}

export const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/faq", label: "FAQ & Contact" },
];
