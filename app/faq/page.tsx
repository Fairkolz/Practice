"use client";

import { useState } from "react";
import Accordion from "@/components/ui/Accordion";
import Reveal from "@/components/ui/Reveal";

const faqGroups = [
  {
    id: "working",
    label: "Working with us",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    items: [
      {
        id: "onboarding",
        question: "What does the typical onboarding process look like?",
        answer:
          "Our onboarding begins with a discovery workshop where we align on goals, timelines, and success metrics. You'll be assigned a dedicated project manager who will serve as your single point of contact throughout the engagement. We use a collaborative platform for transparent task tracking and weekly sync calls to ensure we're always on the same page.",
      },
      {
        id: "communication",
        question: "How do you communicate with clients during the project?",
        answer:
          "We maintain an open channel of communication through a combination of weekly status meetings, a shared project dashboard, and continuous asynchronous updates via Slack or your preferred platform. Our philosophy is radical transparency—you'll never wonder where things stand.",
      },
      {
        id: "remote",
        question: "Can you work with our in-house team remotely?",
        answer:
          "Absolutely. We've perfected remote collaboration over years of distributed work. We integrate seamlessly with your existing tools and workflows, and our team is available during your business hours regardless of time zone differences.",
      },
    ],
  },
  {
    id: "timelines",
    label: "Project Timelines",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    items: [
      {
        id: "duration",
        question: "How long does a typical project take?",
        answer:
          "Project duration varies based on scope, complexity, and your team's availability. A typical website ranges from 8 to 12 weeks, while a full product design and development engagement can span 12 to 20 weeks. During our initial consultation, we'll provide a detailed timeline tailored to your specific needs.",
      },
      {
        id: "delay",
        question: "What happens if the project runs behind schedule?",
        answer:
          "We build buffer time into every milestone to account for unforeseen challenges. If a delay does occur, we communicate it immediately along with a revised plan and additional resources if needed. Our goal is never to compromise on quality for speed.",
      },
      {
        id: "urgent",
        question: "Do you offer rush delivery for urgent projects?",
        answer:
          "Yes, we can accelerate timelines for urgent projects by allocating additional team members and working in focused sprints. Rush projects are evaluated on a case-by-case basis to ensure we can deliver without sacrificing quality.",
      },
    ],
  },
  {
    id: "pricing",
    label: "Pricing Models",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
        <rect x="2" y="5" width="20" height="14" rx="2" /><line x1="2" y1="10" x2="22" y2="10" />
      </svg>
    ),
    items: [
      {
        id: "pricing-model",
        question: "What pricing models do you offer?",
        answer:
          "We offer three primary pricing structures: fixed-price for well-defined projects with clear scope, time-and-materials for ongoing or evolving work, and retainer-based partnerships for organizations that need ongoing design and development support. We'll recommend the model that best fits your project's nature.",
      },
      {
        id: "hidden",
        question: "Are there any hidden costs?",
        answer:
          "Never. We pride ourselves on transparent pricing. Every proposal includes a detailed breakdown of costs, and any potential additional expenses are communicated and approved before they're incurred. What we quote is what you pay, barring mutually agreed scope changes.",
      },
      {
        id: "payment",
        question: "What are your payment terms?",
        answer:
          "Standard terms are 30% upfront to begin, 40% at the mid-point milestone, and 30% upon completion. For larger engagements, we can structure a customized payment schedule that aligns with your cash flow needs.",
      },
    ],
  },
];

export default function FaqPage() {
  const [activeCategory, setActiveCategory] = useState("working");
  const [searchQuery, setSearchQuery] = useState("");

  const activeGroup = faqGroups.find((g) => g.id === activeCategory);
  const allItems = faqGroups.flatMap((g) => g.items);

  const filteredItems = searchQuery
    ? allItems.filter(
        (item) =>
          item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : activeGroup?.items || [];

  return (
    <div>
      {/* Hero */}
      <section className="py-16 text-center md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h1 className="mx-auto mb-5 max-w-[700px] font-display text-display-large font-bold leading-tight tracking-tight text-primary">
            Common Questions &amp; Get in Touch
          </h1>
          <p className="mx-auto mb-10 max-w-[500px] text-body-large text-on-surface-variant">
            Find everything you need to know about partnering with Forge Studio, or reach out
            directly to start your project.
          </p>

          {/* Search */}
          <div className="relative mx-auto max-w-[500px]">
            <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-outline">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for answers (e.g., 'pricing', 'timeline')"
              aria-label="Search FAQ"
              className="w-full rounded-lg border border-outline-variant bg-surface-container-lowest py-3 pl-12 pr-4 text-body-medium transition-all focus:border-primary focus:shadow-[0_0_0_3px_hsla(210,82%,27%,0.1)] focus:outline-none"
            />
          </div>
        </div>
      </section>

      {/* FAQ + Contact Combined */}
      <Reveal>
      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:items-start">
            {/* FAQ Column */}
            <div>
              <h2 className="mb-8 font-display text-heading-large font-semibold text-on-surface">
                Frequently Asked Questions
              </h2>

              {!searchQuery && (
                <div className="mb-8 flex flex-wrap gap-2">
                  {faqGroups.map((group) => (
                    <button
                      key={group.id}
                      onClick={() => setActiveCategory(group.id)}
                      className={`flex items-center gap-2 rounded-md px-4 py-2 text-body-medium font-medium transition-all ${
                        activeCategory === group.id
                          ? "bg-primary text-on-primary"
                          : "bg-primary text-on-primary/80 hover:bg-primary/90"
                      }`}
                    >
                      {group.icon}
                      {group.label}
                    </button>
                  ))}
                </div>
              )}

              {filteredItems.length > 0 ? (
                <Accordion
                  items={filteredItems}
                />
              ) : (
                <p className="text-body-medium text-on-surface-variant">
                  No results found for &ldquo;{searchQuery}&rdquo;.
                </p>
              )}

              {/* Help Card */}
              <div className="mt-8 rounded-xl bg-surface-container-low p-6">
                <h4 className="mb-2 text-title-small font-semibold text-primary">Still have questions?</h4>
                <p className="mb-4 text-body-medium text-on-surface-variant">
                  Can&apos;t find the answer you&apos;re looking for? Our team is ready to help.
                </p>
                <a href="mailto:hello@forge.studio" className="text-body-medium font-medium text-primary">
                  hello@forge.studio
                </a>
              </div>
            </div>

            {/* Contact Form Column */}
            <div>
              <h2 className="mb-8 font-display text-heading-large font-semibold text-on-surface">
                Get in Touch
              </h2>
              <p className="mb-8 max-w-[480px] text-body-large text-on-surface-variant">
                Ready to start your next project? Fill out the form and our team will get back to
                you within 24 hours.
              </p>

              <form
                className="space-y-5"
                action={process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "#"}
                method="POST"
              >
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-body-medium font-medium">
                    Name <span className="ml-0.5 text-error">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    placeholder="Your full name"
                    className="rounded-md border border-outline-variant bg-surface-container-low px-4 py-3 text-body-medium transition-all focus:border-primary focus:bg-surface-container-lowest focus:shadow-[0_0_0_3px_hsla(210,82%,27%,0.1)] focus:outline-none"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-body-medium font-medium">
                    Email <span className="ml-0.5 text-error">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    className="rounded-md border border-outline-variant bg-surface-container-low px-4 py-3 text-body-medium transition-all focus:border-primary focus:bg-surface-container-lowest focus:shadow-[0_0_0_3px_hsla(210,82%,27%,0.1)] focus:outline-none"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="service" className="text-body-medium font-medium">Service Interest</label>
                  <select
                    id="service"
                    name="service"
                    className="rounded-md border border-outline-variant bg-surface-container-low px-4 py-3 text-body-medium transition-all focus:border-primary focus:bg-surface-container-lowest focus:shadow-[0_0_0_3px_hsla(210,82%,27%,0.1)] focus:outline-none"
                  >
                    <option value="">Select a service...</option>
                    <option value="ui-ux">UI/UX Design</option>
                    <option value="web-dev">Web Development</option>
                    <option value="branding">Branding</option>
                    <option value="product-design">Product Design</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-body-medium font-medium">
                    Message <span className="ml-0.5 text-error">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your project..."
                    className="min-h-[130px] resize-y rounded-md border border-outline-variant bg-surface-container-low px-4 py-3 text-body-medium transition-all focus:border-primary focus:bg-surface-container-lowest focus:shadow-[0_0_0_3px_hsla(210,82%,27%,0.1)] focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-md border-none bg-primary px-8 py-4 text-label-large font-semibold uppercase text-on-primary transition-all hover:bg-primary/90 hover:shadow-md"
                >
                  Send Message
                </button>
              </form>

              {/* Contact Info */}
              <div className="mt-12 space-y-8">
                <div className="aspect-[16/10] w-full rounded-xl bg-surface-container-high" />

                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h3 className="mb-4 text-title-small font-semibold underline underline-offset-4">
                      Office Hours
                    </h3>
                    <table className="w-full border-collapse">
                      <tbody>
                        {[
                          { day: "Mon – Fri", hours: "9:00 AM – 6:00 PM" },
                          { day: "Saturday", hours: "10:00 AM – 4:00 PM" },
                          { day: "Sunday", hours: "Closed" },
                        ].map((row) => (
                          <tr key={row.day}>
                            <td className="border-b border-outline-variant py-2 text-body-medium">{row.day}</td>
                            <td className={`border-b border-outline-variant py-2 text-right text-body-medium ${row.hours === "Closed" ? "text-secondary" : ""}`}>{row.hours}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="space-y-4">
                    <h3 className="mb-4 text-title-small font-semibold underline underline-offset-4">
                      Quick Connect
                    </h3>
                    {[
                      { label: "hello@forge.studio", icon: "email" },
                      { label: "+1 (800) FORGE-IT", icon: "phone" },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center gap-3">
                        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-surface-container-high text-primary">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            {item.icon === "email" ? (
                              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                            ) : (
                              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                            )}
                          </svg>
                        </div>
                        <span className="text-body-medium">{item.label}</span>
                      </div>
                    ))}

                    <div className="flex gap-3 pt-2">
                      {["X", "In", "Be", "Dr"].map((s) => (
                        <span
                          key={s}
                          className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-surface-container-high text-sm text-on-surface-variant transition-colors hover:bg-primary hover:text-on-primary"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </Reveal>

      {/* Global Presence */}
      <Reveal>
      <section className="border-t border-outline-variant py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-4 text-center font-display text-heading-large font-semibold text-on-surface">
            Global Presence
          </h2>
          <p className="mx-auto mb-12 max-w-[560px] text-center text-body-large text-on-surface-variant">
            We serve clients worldwide from our strategically located studios.
          </p>
          <div className="grid gap-6 md:grid-cols-4">
            {[
              { city: "New York", tag: "Headquarters" },
              { city: "London", tag: "European Hub" },
              { city: "Singapore", tag: "Asia Pacific" },
              { city: "Dubai", tag: "Middle East" },
            ].map((loc) => (
              <div
                key={loc.city}
                className="rounded-xl border border-outline-variant bg-surface-container-lowest p-7 transition-all hover:shadow-elevation-2 hover:-translate-y-0.5"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-md bg-surface-container-high text-primary">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <h3 className="mb-1 text-title-medium font-semibold text-on-surface">{loc.city}</h3>
                <p className="text-body-medium text-on-surface-variant">{loc.tag}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </Reveal>
    </div>
  );
}
