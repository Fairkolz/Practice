import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-inverse-surface py-16 text-inverse-on-surface">
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
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/services", label: "Services" },
                { href: "/portfolio", label: "Portfolio" },
                { href: "/testimonials", label: "Testimonials" },
                { href: "/faq", label: "FAQ & Contact" },
              ].map((link) => (
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
                <span
                  key={s}
                  className="block text-body-medium text-on-surface-variant"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-label-large font-semibold uppercase text-on-primary">Contact</h4>
            <div className="space-y-1 text-body-medium text-on-surface-variant">
              <p>hello@forge.studio</p>
              <p>+1 (800) FORGE-IT</p>
              <div className="flex gap-3 pt-2">
                {["X", "In", "Be"].map((s) => (
                  <span
                    key={s}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-xs transition-colors hover:bg-white/20"
                  >
                    {s}
                  </span>
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
    </footer>
  );
}
