"use client";

import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import PageHero from "@/components/ui/PageHero";
import ProjectCard from "@/components/ui/ProjectCard";
import CtaSection from "@/components/ui/CtaSection";
import { portfolioProjects } from "@/lib/projects";

const categories = ["All Work", "Fintech", "Lifestyle", "E-commerce", "SaaS"] as const;
type Category = (typeof categories)[number];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<Category>("All Work");

  const filtered =
    activeFilter === "All Work"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === activeFilter);

  return (
    <div>
      <PageHero
        title="Crafting Digital Excellence"
        description="We bridge the gap between technical precision and creative fluidity. Explore our recent collaborations with visionary startups and enterprise giants."
        footer={
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`rounded-full border px-5 py-2 text-body-medium font-medium transition-all ${
                  activeFilter === cat
                    ? "border-primary bg-primary text-on-primary"
                    : "border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        }
      />

      {/* Project Grid */}
      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {filtered.map((project, i) => (
              <Reveal key={project.slug} delay={i * 0.1} className="h-full">
                <ProjectCard
                  href={`/work/${project.slug}`}
                  name={project.name}
                  category={project.category}
                  image={project.image}
                  variant="hover"
                  aspect="aspect-[16/11]"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio CTA */}
      <CtaSection
        title="Ready to build your next big thing?"
        text="Join forces with our team of designers and engineers to create a digital product that sets you apart from the competition."
        actions={[
          { label: "Start a Project", href: "/faq", variant: "white" },
          { label: "View Services", href: "/services", variant: "white-outline" },
        ]}
      />
    </div>
  );
}
