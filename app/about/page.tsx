import type { Metadata } from "next";
import Image from "next/image";
import ExpandableCardGroup from "@/components/ui/ExpandableCardGroup";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "About",
};

const values = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /><path d="M11 8v6" /><path d="M8 11h6" />
      </svg>
    ),
    title: "Radical Curiosity",
    text: "We ask the difficult questions and challenge the status quo to uncover deeper truths and better solutions.",
    items: [
      "Research-driven discovery for every engagement",
      "We challenge every assumption, including our own",
      "Rapid learning cycles keep us ahead of the curve",
    ],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /><path d="m9 12 2 2 4-4" />
      </svg>
    ),
    title: "Uncompromising Quality",
    text: "Good design is a given; perfection is our baseline. We obsess over every pixel and line of code.",
    items: [
      "Pixel-perfect execution across every breakpoint",
      "Rigorous QA and performance testing before launch",
      "Accessibility and standards compliance by default",
    ],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Shared Ownership",
    text: "Our clients are partners. Their success is ours, and we treat every project with absolute accountability.",
    items: [
      "A dedicated project lead on every engagement",
      "Transparent reporting and radical honesty",
      "We own the outcomes, not just the deliverables",
    ],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: "Bold Innovation",
    text: "We don't just use tools; we invent new ways of working to stay at the cutting edge of digital possibility.",
    items: [
      "Prototype-first culture for rapid experimentation",
      "Early adoption of emerging technologies",
      "A continuous learning budget for every team member",
    ],
  },
];

const team = [
  {
    name: "Julian Thorne",
    role: "Founder & Chief Creative Officer",
    bio: "A pioneer in user-centric design with over two decades of experience shaping global digital products.",
    image: "/images/team-julian.jpg",
  },
  {
    name: "Elena Rodriguez",
    role: "Head of Technology",
    bio: "Architect of complex enterprise systems, dedicated to pushing the boundaries of what's technically possible.",
    image: "/images/team-elena.jpg",
  },
  {
    name: "Marcus Chen",
    role: "Director of Strategy",
    bio: "Helping organizations navigate the digital landscape through data-driven insights and radical vision.",
    image: "/images/team-marcus.jpg",
  },
];

export default function AboutPage() {
  return (
    <div>
      <PageHero
        badge="EST. 2012"
        title="Architects of the digital future."
        description="Forge Studio is a collective of visionary designers and technical masterminds dedicated to crafting premium digital experiences for enterprise-scale partners."
        media={
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <Image
              src="/images/faq-office.jpg"
              alt="Inside the Forge Studio office workspace"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        }
      />

      {/* Our Legacy */}
      <Reveal>
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 md:grid-cols-[1fr_1.5fr] md:items-start">
            <h2 className="font-display text-heading-large font-semibold text-on-surface md:sticky md:top-24">
              Our Legacy
            </h2>
            <div className="space-y-5 text-body-large text-on-surface-variant">
              <p>
                Founded in the heart of the digital revolution, Forge Studio emerged from a singular
                conviction: that the intersection of technical precision and creative fluidity is
                where true innovation resides. What started as a three-person boutique in a loft has
                evolved into an international authority on digital craftsmanship.
              </p>
              <p>
                Our journey has never been about following trends; it&apos;s been about setting the
                standard for what enterprise digital excellence should feel like. We believe that a
                product&apos;s soul is found in the details &mdash; the microscopic interactions, the
                typographic rhythm, and the invisible architecture that makes a complex system feel
                effortless.
              </p>
              <p>
                Today, our vision remains unchanged. We partner with leaders who understand that
                &ldquo;good enough&rdquo; is the enemy of the exceptional. We forge experiences that don&apos;t
                just solve problems &mdash; they define identities and command attention in an
                increasingly crowded digital landscape.
              </p>
              <div className="flex gap-16 border-t border-outline-variant pt-8">
                <div>
                  <div className="font-display text-heading-large font-bold tracking-tight text-primary">
                    12+
                  </div>
                  <div className="mt-1 text-label-large uppercase text-on-surface-variant">
                    Years of Craft
                  </div>
                </div>
                <div>
                  <div className="font-display text-heading-large font-bold tracking-tight text-primary">
                    450+
                  </div>
                  <div className="mt-1 text-label-large uppercase text-on-surface-variant">
                    Projects Launched
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative mt-12 aspect-[16/9] w-full overflow-hidden rounded-xl">
            <Image
              src="/images/hero.jpg"
              alt="The Forge Studio team collaborating in their creative studio"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>
      </Reveal>

      {/* Foundation of Excellence */}
      <Reveal>
      <section className="bg-surface-container-low py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            title="Foundation of Excellence"
            text="The principles that guide every decision at Forge Studio."
            centered
          />
          <ExpandableCardGroup
            items={values}
            gridClassName="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-4"
            cardClassName="min-h-[360px]"
            reveal
            stagger={0.08}
          />
        </div>
      </section>
      </Reveal>

      {/* Minds Behind the Magic */}
      <Reveal>
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            title="Minds Behind the Magic"
            text="Meet the leadership team driving the visionary output of Forge Studio."
          />
          <div className="grid gap-8 md:grid-cols-3">
            {team.map((member) => (
              <div key={member.name} className="group">
                <div className="relative mb-5 aspect-[3/4] w-full overflow-hidden rounded-xl">
                  <Image
                    src={member.image}
                    alt={`Portrait of ${member.name}, ${member.role}`}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  />
                </div>
                <h3 className="mb-1 text-title-medium font-semibold text-on-surface">{member.name}</h3>
                <p className="mb-3 text-label-large uppercase text-on-surface-variant">{member.role}</p>
                <p className="text-body-medium text-on-surface-variant">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </Reveal>
    </div>
  );
}
