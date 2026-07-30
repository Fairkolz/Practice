import type { Metadata } from "next";
import Accordion from "@/components/ui/Accordion";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Services",
};

const competencies = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: "Web Design & Strategy",
    text: "High-performance websites that convert. We align aesthetic excellence with strategic business goals to create landing pages and enterprise portals that perform.",
    items: ["UI/UX Information Architecture", "Conversion Rate Optimization", "Scalable Design Systems"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
    title: "Mobile App Development",
    text: "Native and cross-platform solutions built for the modern hand. We prioritize fluid animations, intuitive gestures, and seamless offline functionality.",
    items: ["iOS & Android Native Dev", "Flutter & React Native Solutions", "Wearable Technology Integration"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M12 3l1.912 5.813a2 2 0 0 0 1.275 1.275L21 12l-5.813 1.912a2 2 0 0 0-1.275 1.275L12 21l-1.912-5.813a2 2 0 0 0-1.275-1.275L3 12l5.813-1.912a2 2 0 0 0 1.275-1.275L12 3z" />
      </svg>
    ),
    title: "Identity & Branding",
    text: "Forging visual identities that endure. From logo marks to complete brand books, we define the visual language that speaks your brand's core truth.",
    items: ["Logo & Visual Systems", "Brand Voice & Narrative", "Motion Branding & Guidelines"],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" />
      </svg>
    ),
    title: "Digital Marketing",
    text: "Amplifying your reach through data-driven campaigns. We connect your story with the right audience using advanced analytics and creative media buying.",
    items: ["Performance Marketing", "SEO & Content Strategy", "Advanced Data Analytics"],
  },
];

const processSteps = [
  { number: "01", title: "Discovery", text: "Uncovering insights through research and stakeholder workshops." },
  { number: "02", title: "Architecture", text: "Defining the blueprint with user maps and wireframes." },
  { number: "03", title: "Execution", text: "Rapid prototyping and high-fidelity development phases." },
  { number: "04", title: "Evolve", text: "Continuous optimization based on real-world performance data." },
];

const faqItems = [
  {
    id: "timeline",
    question: "What is the typical project timeline?",
    answer:
      "Typical projects range from 8 to 16 weeks depending on scope and complexity. We establish clear milestones and delivery dates during the discovery phase to ensure alignment and transparency throughout the engagement.",
  },
  {
    id: "maintenance",
    question: "Do you provide ongoing maintenance?",
    answer:
      "Yes, we offer comprehensive maintenance and support packages. Our retainer agreements include regular updates, performance monitoring, security patches, and priority support for any issues that arise post-launch.",
  },
  {
    id: "integration",
    question: "Can you integrate with our existing stack?",
    answer:
      "Absolutely. Our engineering team has deep expertise across a wide range of platforms and technologies. We conduct thorough technical audits before integration work begins to ensure seamless compatibility with your existing infrastructure.",
  },
];

export default function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-4">
            <span className="inline-block rounded-sm bg-primary px-3 py-1 text-label-large uppercase text-on-primary">
              Services &amp; Expertise
            </span>
          </div>
          <h1 className="mb-5 max-w-[700px] font-display text-display-large font-bold leading-tight tracking-tight text-primary">
            Crafting the future of digital experiences.
          </h1>
          <p className="mb-8 max-w-[480px] text-body-large text-on-surface-variant">
            We combine high-end editorial aesthetics with technical precision to build digital
            products that define industries and captivate audiences.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/faq"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-primary bg-primary px-8 py-4 text-body-large font-medium text-on-primary transition-all hover:bg-primary/90 hover:shadow-md"
            >
              Start your project
            </a>
            <a
              href="/portfolio"
              className="group inline-flex items-center justify-center gap-2 rounded-lg border-2 border-outline-variant px-8 py-4 text-body-large font-medium text-primary transition-all hover:border-primary hover:bg-primary/5"
            >
              Explore our skills <span className="inline-block transition-transform group-hover:translate-x-0.5">&rarr;</span>
            </a>
          </div>
        </div>
      </section>

      {/* Core Competencies */}
      <Reveal>
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12">
            <h2 className="mb-4 font-display text-heading-large font-semibold text-on-surface">
              Core Competencies
            </h2>
            <p className="max-w-[560px] text-body-large text-on-surface-variant">
              Our cross-functional team delivers excellence at every touchpoint of the user journey,
              ensuring your brand stands out in a crowded digital landscape.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {competencies.map((comp) => (
              <div
                key={comp.title}
                className="overflow-hidden rounded-xl border border-outline-variant bg-surface-container-lowest transition-all hover:shadow-elevation-3 hover:-translate-y-0.5"
              >
                <div className="p-8">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-md bg-surface-container-high text-primary">
                    {comp.icon}
                  </div>
                  <h3 className="mb-3 text-title-medium font-semibold text-on-surface">{comp.title}</h3>
                  <p className="mb-5 text-body-medium text-on-surface-variant">{comp.text}</p>
                  <ul className="mb-2 flex flex-col gap-2">
                    {comp.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-body-medium text-on-surface">
                        <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="aspect-[16/9] w-full bg-surface-container-high" />
              </div>
            ))}
          </div>
        </div>
      </section>
      </Reveal>

      {/* The Process */}
      <Reveal>
      <section className="bg-surface-container-low py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-display text-heading-large font-semibold text-on-surface">
              The Process
            </h2>
            <p className="mx-auto max-w-[560px] text-body-large text-on-surface-variant">
              Our structured methodology ensures transparency, agility, and measurable success from
              initial concept to long-term evolution.
            </p>
          </div>
          <div className="relative grid gap-8 md:grid-cols-4">
            <div className="absolute left-[15%] right-[15%] top-7 hidden h-0.5 bg-outline-variant md:block" />
            {processSteps.map((step) => (
              <div key={step.number} className="relative text-center">
                <div className="relative z-10 mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-title-medium font-bold text-on-primary">
                  {step.number}
                </div>
                <h3 className="mb-3 text-title-small font-semibold text-on-surface">{step.title}</h3>
                <p className="text-body-medium text-on-surface-variant">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </Reveal>

      {/* Service CTA Banner */}
      <Reveal>
      <section className="py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-center justify-between gap-6 rounded-2xl bg-surface-container-high px-12 py-10">
            <div className="max-w-[480px]">
              <h3 className="mb-2 text-title-large font-semibold text-on-surface">
                Ready to start the journey?
              </h3>
              <p className="text-body-medium text-on-surface-variant">
                Our team is currently accepting high-impact projects for Q4 2026. Let&apos;s discuss your
                vision.
              </p>
            </div>
            <a
              href="/faq"
              className="inline-flex flex-shrink-0 items-center justify-center gap-2 rounded-lg border-2 border-primary bg-primary px-8 py-4 text-body-large font-medium text-on-primary transition-all hover:bg-primary/90 hover:shadow-md"
            >
              Book a strategy call
            </a>
          </div>
        </div>
      </section>
      </Reveal>

      {/* Service FAQ */}
      <Reveal>
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 md:grid-cols-[1fr_1.5fr] md:items-start">
            <div className="md:sticky md:top-24">
              <h2 className="mb-4 font-display text-heading-large font-semibold text-on-surface">
                Service FAQ
              </h2>
              <p className="mb-6 text-body-large text-on-surface-variant">
                Common questions about our digital craftsmanship and delivery process.
              </p>
              <div className="rounded-xl bg-surface-container-low p-6">
                <h4 className="mb-2 text-title-small font-semibold text-primary">
                  Still have questions?
                </h4>
                <p className="mb-4 text-body-medium text-on-surface-variant">
                  We&apos;re here to help you navigate the complexities of digital production.
                </p>
                <a href="mailto:hello@forgestudio.com" className="text-body-medium font-medium text-primary">
                  hello@forgestudio.com
                </a>
              </div>
            </div>
            <Accordion items={faqItems} />
          </div>
        </div>
      </section>
      </Reveal>
    </div>
  );
}
