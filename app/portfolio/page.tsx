"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

const categories = ["All Work", "Fintech", "Lifestyle", "E-commerce", "SaaS"] as const;
type Category = (typeof categories)[number];

interface Project {
  name: string;
  category: Exclude<Category, "All Work">;
  image: string;
}

const projects: Project[] = [
  { name: "Aura Living", category: "Lifestyle", image: "/images/portfolio-aura-living.jpg" },
  { name: "Vertex Analytics", category: "Fintech", image: "/images/portfolio-vertex.jpg" },
  { name: "Nexus Commerce", category: "E-commerce", image: "/images/portfolio-nexus.jpg" },
  { name: "Orbit Dashboard", category: "SaaS", image: "/images/portfolio-orbit.jpg" },
  { name: "Meridian Health", category: "Lifestyle", image: "/images/portfolio-meridian.jpg" },
  { name: "CryptoFlow", category: "Fintech", image: "/images/portfolio-cryptoflow.jpg" },
];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<Category>("All Work");

  const filtered =
    activeFilter === "All Work"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div>
      {/* Hero */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h1 className="mb-5 max-w-[700px] font-display text-display-large font-bold leading-tight tracking-tight text-primary">
            Crafting Digital Excellence
          </h1>
          <p className="mb-10 max-w-[480px] text-body-large text-on-surface-variant">
            We bridge the gap between technical precision and creative fluidity. Explore our recent
            collaborations with visionary startups and enterprise giants.
          </p>

          {/* Filter Tabs */}
          <div className="mb-10 flex flex-wrap gap-3">
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

          {/* Project Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {filtered.map((project, i) => (
              <Reveal key={project.name} delay={i * 0.1}>
              <div
                key={project.name}
                className="group relative aspect-[16/11] cursor-pointer overflow-hidden rounded-xl"
              >
                <Image
                  src={project.image}
                  alt={`${project.name} — ${project.category} project`}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsla(210,82%,15%,0.8)] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-on-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="mb-1 text-label-large uppercase opacity-80">{project.category}</div>
                  <div className="text-title-medium font-semibold">{project.name}</div>
                </div>
              </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio CTA */}
      <Reveal>
      <section className="bg-primary py-20 text-center">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mx-auto mb-5 max-w-[600px] font-display text-display-small font-semibold leading-tight text-on-primary">
            Ready to build your next big thing?
          </h2>
          <p className="mx-auto mb-10 max-w-[480px] text-body-large text-white/80">
            Join forces with our team of designers and engineers to create a digital product that
            sets you apart from the competition.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="/faq"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-on-primary bg-on-primary px-8 py-4 text-body-large font-medium text-primary transition-all hover:bg-transparent hover:text-on-primary"
            >
              Start a Project
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-on-primary bg-transparent px-8 py-4 text-body-large font-medium text-on-primary transition-all hover:bg-on-primary hover:text-primary"
            >
              View Services
            </a>
          </div>
        </div>
      </section>
      </Reveal>
    </div>
  );
}
