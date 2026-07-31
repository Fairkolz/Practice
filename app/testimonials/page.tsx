import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Testimonials",
};

const testimonials = [
  {
    quote:
      "The level of technical precision Forge Studio brought to our fintech platform was unmatched. They navigated complex regulatory requirements while delivering a stunning UI.",
    initials: "SJ",
    name: "Sarah Jenkins",
    position: "Director of UX, FinEdge",
  },
  {
    quote:
      "Exceptional communication and deep technical expertise. They delivered our SaaS dashboard two weeks ahead of schedule without compromising a single feature.",
    initials: "DC",
    name: "David Chen",
    position: "CTO, CloudScale",
  },
  {
    quote:
      "Forge Studio's approach to accessibility was a game-changer for our public service portal. They ensured our digital tools were usable by everyone, regardless of ability.",
    initials: "KM",
    name: "Kevin Miller",
    position: "Product Lead, GovConnect",
  },
  {
    quote:
      "From discovery to deployment, Forge Studio was more than a vendor—they were a strategic partner. Our mobile app downloads tripled within the first quarter after the redesign.",
    initials: "AL",
    name: "Arthur Loft",
    position: "Founder, Vista Travel",
  },
  {
    quote:
      "The minimalist aesthetic Forge Studio crafted for our luxury brand perfectly captured our heritage while making us relevant to a younger, digital-first audience.",
    initials: "ER",
    name: "Elena Rodriguez",
    position: "Brand Manager, Aurum Collective",
  },
  {
    quote:
      "The interactive animations they created aren't just eye candy; they guide the user journey in a way that feels incredibly intuitive. Truly masters of their craft.",
    initials: "JV",
    name: "Julian Voss",
    position: "Creative Director, NeoMotion",
  },
];

export default function TestimonialsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-end gap-10 md:grid-cols-[1.2fr_1fr]">
            <div>
              <div className="mb-4">
                <span className="inline-block rounded-sm bg-primary px-3 py-1 text-label-large uppercase text-on-primary">
                  Client Voices
                </span>
              </div>
              <h1 className="mb-5 font-display text-display-large font-bold leading-tight tracking-tight text-primary">
                Engineering trust through digital excellence.
              </h1>
              <p className="max-w-[480px] text-body-large text-on-surface-variant">
                We don&apos;t just build products; we cultivate partnerships. Our clients are
                pioneers in their industries, and we are proud to be the architects of their digital
                evolution.
              </p>
            </div>
            <div className="flex gap-12">
              {[
                { number: "98%", label: "Client Retention" },
                { number: "150+", label: "Projects Delivered" },
                { number: "12", label: "Global Awards" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-heading-large font-bold tracking-tight text-primary">
                    {stat.number}
                  </div>
                  <div className="mt-1 text-label-large uppercase text-on-surface-variant">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <Reveal>
      <section className="bg-surface-container-low py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl">
              <Image
                src="/images/portfolio-vertex.jpg"
                alt="Analytics dashboard interface from the featured Quantum Systems case study"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <div className="mb-5 inline-flex items-center gap-2 text-label-large uppercase text-primary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                Featured Case Study
              </div>
              <blockquote className="mb-8 font-display text-heading-small font-semibold leading-snug text-primary">
                &ldquo;Forge Studio transformed our complex data architecture into a seamless,
                human-centric interface that increased efficiency by 40%.&rdquo;
              </blockquote>
              <p className="mb-1 text-title-small font-semibold text-on-surface">Marcus Thorne</p>
              <p className="mb-5 text-body-medium text-on-surface-variant">
                Chief Information Officer, Quantum Systems
              </p>
              <a
                href="#"
                className="group inline-flex items-center gap-2 font-medium text-on-surface transition-colors hover:text-primary"
              >
                Read the full story <span className="inline-block transition-transform group-hover:translate-x-0.5">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      </Reveal>

      {/* Testimonials Grid */}
      <Reveal>
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-display text-heading-large font-semibold text-on-surface">
              What Our Partners Say
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-xl border border-outline-variant bg-surface-container-lowest p-7 transition-all hover:shadow-elevation-2 hover:-translate-y-0.5"
              >
                <div className="mb-4 flex gap-0.5 text-tertiary">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-tertiary">&star;</span>
                  ))}
                </div>
                <p className="mb-6 text-body-medium leading-relaxed text-on-surface-variant">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-label-large font-semibold text-on-primary">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-body-medium font-semibold text-on-surface">{t.name}</p>
                    <p className="text-body-small text-on-surface-variant">{t.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </Reveal>

      {/* Testimonials CTA */}
      <Reveal>
      <section className="bg-primary py-20 text-center">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mx-auto mb-5 max-w-[560px] font-display text-display-small font-semibold leading-tight text-on-primary">
            Ready to write your success story?
          </h2>
          <p className="mx-auto mb-10 max-w-[480px] text-body-large text-white/80">
            Let&apos;s collaborate to build digital products that resonate, perform, and endure. Join
            our roster of industry-leading partners.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="/faq"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-on-primary bg-on-primary px-8 py-4 text-body-large font-medium text-primary transition-all hover:bg-transparent hover:text-on-primary"
            >
              Start a Project
            </a>
            <a
              href="/portfolio"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-on-primary bg-transparent px-8 py-4 text-body-large font-medium text-on-primary transition-all hover:bg-on-primary hover:text-primary"
            >
              View Portfolio
            </a>
          </div>
        </div>
      </section>
      </Reveal>
    </div>
  );
}
