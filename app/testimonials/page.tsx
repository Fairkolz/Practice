import type { Metadata } from "next";
import Reveal from "@/components/ui/Reveal";
import PageHero from "@/components/ui/PageHero";
import FeaturedCaseStudy from "@/components/ui/FeaturedCaseStudy";
import CtaSection from "@/components/ui/CtaSection";
import TestimonialsMarquee from "@/components/ui/TestimonialsMarquee";

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
      <PageHero
        badge="Client Voices"
        title="Engineering trust through digital excellence."
        description="We don&apos;t just build products; we cultivate partnerships. Our clients are pioneers in their industries, and we are proud to be the architects of their digital evolution."
        media={
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
        }
      />

      {/* Featured Case Study */}
      <Reveal>
      <section className="bg-surface-container-low py-24">
        <div className="mx-auto max-w-6xl px-6">
          <FeaturedCaseStudy />
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
          <TestimonialsMarquee items={testimonials} />
        </div>
      </section>
      </Reveal>

      {/* Testimonials CTA */}
      <CtaSection
        title="Ready to write your success story?"
        text="Let&apos;s collaborate to build digital products that resonate, perform, and endure. Join our roster of industry-leading partners."
        actions={[
          { label: "Start a Project", href: "/faq", variant: "white" },
          { label: "View Portfolio", href: "/portfolio", variant: "white-outline" },
        ]}
      />
    </div>
  );
}
