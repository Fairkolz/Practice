import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/ui/PageHero";
import CtaSection from "@/components/ui/CtaSection";
import Reveal from "@/components/ui/Reveal";
import { allProjects, getProject } from "@/lib/projects";

interface ProjectPageParams {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return allProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageParams): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  return project ? { title: project.name } : { title: "Project Not Found" };
}

export default async function ProjectPage({ params }: ProjectPageParams) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <div>
      <PageHero
        badge={project.category}
        title={project.name}
        description={project.summary}
      />

      <Reveal>
        <section className="pb-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="group relative aspect-[16/9] overflow-hidden rounded-xl">
              <Image
                src={project.image}
                alt={`${project.name} — ${project.category} project`}
                fill
                sizes="100vw"
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                priority
              />
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="pb-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-16 lg:grid-cols-[1fr_1.6fr] lg:items-start">
              <aside className="space-y-10">
                <div>
                  <h2 className="mb-6 font-display text-heading-large font-semibold text-on-surface">
                    At a Glance
                  </h2>
                  <div className="grid grid-cols-3 gap-6 lg:grid-cols-1">
                    {project.metrics.map((metric) => (
                      <div key={metric.label}>
                        <div className="font-display text-heading-large font-bold tracking-tight text-primary">
                          {metric.value}
                        </div>
                        <div className="mt-1 text-label-large uppercase text-on-surface-variant">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-title-small font-semibold uppercase text-on-surface">
                    Services
                  </h3>
                  <ul className="space-y-2">
                    {project.services.map((service) => (
                      <li key={service} className="flex items-center gap-2 text-body-medium text-on-surface">
                        <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>

              <div>
                <h2 className="mb-6 font-display text-heading-large font-semibold text-on-surface">
                  Overview
                </h2>
                <div className="space-y-5 text-body-large text-on-surface-variant">
                  {project.overview.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
                <Link
                  href="/portfolio"
                  className="group mt-10 inline-flex items-center gap-2 font-medium text-on-surface transition-colors hover:text-primary"
                >
                  <span className="inline-block transition-transform group-hover:-translate-x-1.5">&larr;</span>
                  Back to all work
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <CtaSection
        title="Ready to build your next big thing?"
        text="Join forces with our team of designers and engineers to create a digital product that sets you apart from the competition."
        actions={[
          { label: "Start a Project", href: "/faq", variant: "white" },
          { label: "View Portfolio", href: "/portfolio", variant: "white-outline" },
        ]}
      />
    </div>
  );
}
