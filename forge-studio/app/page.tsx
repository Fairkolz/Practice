import Reveal from "@/components/ui/Reveal";

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <div className="mb-4">
                <span className="inline-block rounded-sm bg-primary px-3 py-1 text-label-large uppercase text-on-primary">
                  Pioneering Digital Craftsmanship
                </span>
              </div>
              <h1 className="mb-5 max-w-[600px] font-display text-display-large font-bold leading-tight tracking-tight text-primary">
                Creative Digital For Visionary Brands
              </h1>
              <p className="mb-8 max-w-[480px] text-body-large text-on-surface-variant">
                We blend technical precision with creative fluidity to build premium digital products
                that define categories and drive measurable growth for enterprise innovators.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/faq"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-primary bg-primary px-8 py-4 text-body-large font-medium text-on-primary transition-all hover:bg-primary/90 hover:shadow-md"
                >
                  Start a Project
                </a>
                <a
                  href="/portfolio"
                  className="group inline-flex items-center justify-center gap-2 rounded-lg border-2 border-outline-variant px-8 py-4 text-body-large font-medium text-primary transition-all hover:border-primary hover:bg-primary/5"
                >
                  View Portfolio <span className="inline-block transition-transform group-hover:translate-x-0.5">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="aspect-[4/3] rounded-xl bg-surface-container-high" />
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <Reveal>
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-display text-heading-large font-semibold text-on-surface">
              Our Expertise
            </h2>
            <p className="mx-auto max-w-[560px] text-body-large text-on-surface-variant">
              We bring a disciplined, architectural approach to every digital touchpoint, ensuring
              your product is as stable as it is stunning.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                    <path d="M12 20V10" /><path d="M18 20V4" /><path d="M6 20v-4" />
                  </svg>
                ),
                title: "Product Strategy",
                text: "Defining the roadmap from concept to market leadership with deep competitive analysis and user research.",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                    <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8" /><path d="M12 17v4" />
                  </svg>
                ),
                title: "Full-Stack Engineering",
                text: "Robust, scalable architectures built with modern frameworks to ensure high performance and security.",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" />
                  </svg>
                ),
                title: "Rapid Growth",
                text: "Data-driven optimization and marketing technology integration to scale your user base aggressively.",
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1}>
              <div
                className="rounded-xl border border-outline-variant bg-surface-container-lowest p-8 transition-all hover:shadow-elevation-3 hover:-translate-y-0.5"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-md bg-surface-container-high text-primary">
                  {item.icon}
                </div>
                <h3 className="mb-3 text-title-medium font-semibold text-on-surface">{item.title}</h3>
                <p className="text-body-medium text-on-surface-variant">{item.text}</p>
              </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      </Reveal>

      {/* Latest Work */}
      <Reveal>
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <h2 className="mb-2 font-display text-heading-large font-semibold text-on-surface">
                Latest Work
              </h2>
              <p className="max-w-[560px] text-body-large text-on-surface-variant">
                A selection of recent partnerships where we&apos;ve redefined digital experiences.
              </p>
            </div>
            <a
              href="/portfolio"
              className="group hidden items-center gap-2 font-medium text-on-surface transition-colors hover:text-primary md:flex"
            >
              View All Projects <span className="inline-block transition-transform group-hover:translate-x-0.5">&rarr;</span>
            </a>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { category: "Fintech", name: "NeuraFlow Platform", desc: "Revolutionizing automated wealth management for the next generation of investors." },
              { category: "Luxury E-Commerce", name: "Aura Couture" },
              { category: "SaaS", name: "Synergy AI" },
              { category: "Environmental Tech", name: "TerraScan Interactive" },
            ].map((item) => (
              <div
                key={item.name}
                className="group relative aspect-[16/10] cursor-pointer overflow-hidden rounded-xl"
              >
                <div className="h-full w-full bg-surface-container-high transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[hsla(210,82%,15%,0.85)] to-transparent p-6 text-on-primary">
                  <div className="mb-1 text-label-large uppercase opacity-80">{item.category}</div>
                  <div className="text-title-medium font-semibold">{item.name}</div>
                  {item.desc && <div className="mt-1 text-body-small opacity-85">{item.desc}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </Reveal>

      {/* CTA Strip */}
      <Reveal>
      <section className="bg-surface-container-high py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-title-medium font-semibold text-on-surface">
                Ready to Forge Something Great?
              </h2>
              <p className="mb-8 text-body-large text-on-surface-variant">
                Whether you&apos;re launching a new venture or scaling an existing powerhouse, our
                team is ready to bring your vision to life with world-class digital craftsmanship.
              </p>
              <a
                href="/faq"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-primary bg-primary px-8 py-4 text-body-large font-medium text-on-primary transition-all hover:bg-primary/90 hover:shadow-md"
              >
                Get Started
              </a>
              <p className="mt-3 text-body-small text-outline">No spam. Only excellence.</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-primary text-on-primary">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                </div>
                <div>
                  <p className="text-body-small text-outline">Direct Line</p>
                  <p className="font-medium text-on-surface">+1 (800) FORGE-IT</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-primary text-on-primary">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                </div>
                <div>
                  <p className="text-body-small text-outline">General Inquiries</p>
                  <p className="font-medium text-on-surface">hello@forge.studio</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </Reveal>
    </div>
  );
}
