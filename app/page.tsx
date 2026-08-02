import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import PageHero from "@/components/ui/PageHero";
import ExpandableCardGroup from "@/components/ui/ExpandableCardGroup";
import ProjectCard from "@/components/ui/ProjectCard";
import Button from "@/components/ui/Button";
import { latestWork } from "@/lib/projects";

const expertise = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M12 20V10" /><path d="M18 20V4" /><path d="M6 20v-4" />
      </svg>
    ),
    title: "Product Strategy",
    text: "Defining the roadmap from concept to market leadership with deep competitive analysis and user research.",
    items: [
      "Competitive & market analysis",
      "User research and persona development",
      "Roadmap and prioritization frameworks",
      "Go-to-market planning",
    ],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8" /><path d="M12 17v4" />
      </svg>
    ),
    title: "Full-Stack Engineering",
    text: "Robust, scalable architectures built with modern frameworks to ensure high performance and security.",
    items: [
      "Frontend and backend architecture",
      "API design and third-party integration",
      "Performance and security hardening",
      "CI/CD and deployment automation",
    ],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" />
      </svg>
    ),
    title: "Rapid Growth",
    text: "Data-driven optimization and marketing technology integration to scale your user base aggressively.",
    items: [
      "Data-driven conversion optimization",
      "Marketing technology integration",
      "Funnel and retention strategy",
      "Analytics and attribution setup",
    ],
  },
];

const latestWorkItems = latestWork;

export default function HomePage() {
  return (
    <div>
      <PageHero
        badge="Pioneering Digital Craftsmanship"
        title="Creative Digital For Visionary Brands"
        description="We blend technical precision with creative fluidity to build premium digital products that define categories and drive measurable growth for enterprise innovators."
        actions={[
          { label: "Start a Project", href: "/faq" },
          {
            label: (
              <>
                View Portfolio{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1.5">&rarr;</span>
              </>
            ),
            href: "/portfolio",
            variant: "secondary",
          },
        ]}
        media={
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <Image
              src="/images/hero-agency.jpg"
              alt="The Forge Studio team collaborating around a table on a new project"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
        }
      />

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
            <ExpandableCardGroup
              items={expertise}
              gridClassName="grid items-stretch gap-8 md:grid-cols-3"
              cardClassName="min-h-[340px]"
              reveal
              stagger={0.1}
            />
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
                View All Projects <span className="inline-block transition-transform group-hover:translate-x-1.5">&rarr;</span>
              </a>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {latestWorkItems.map((item) => (
                <ProjectCard
                  key={item.slug}
                  href={`/work/${item.slug}`}
                  name={item.name}
                  category={item.category}
                  image={item.image}
                  description={item.slug === "neuraflow" ? item.summary : undefined}
                />
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
                <Button href="/faq" size="lg">
                  Get Started
                </Button>
                <p className="mt-3 text-body-small text-outline">No spam. Only excellence.</p>
              </div>
              <div className="space-y-4">
                <a href="tel:+18003674348" className="flex items-center gap-3 transition-opacity hover:opacity-80">
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-primary text-on-primary">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                  </div>
                  <div>
                    <p className="text-body-small text-outline">Direct Line</p>
                    <p className="font-medium text-on-surface">+1 (800) FORGE-IT</p>
                  </div>
                </a>
                <a href="mailto:hello@forge.studio" className="flex items-center gap-3 transition-opacity hover:opacity-80">
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-primary text-on-primary">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                  </div>
                  <div>
                    <p className="text-body-small text-outline">General Inquiries</p>
                    <p className="font-medium text-on-surface">hello@forge.studio</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
