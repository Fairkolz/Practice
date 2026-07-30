# AGENTS.md — Forge Studio Website

This file provides context and rules for any AI coding agent (e.g., Antigravity) working in this repository. Read this before making any changes.

## 1. Project Overview

**Product:** Forge Studio — a marketing website for a creative digital agency offering UI/UX Design, Website Development, Branding, and Product Design services.

**Purpose:** Showcase services and portfolio, build trust with startups/small businesses/entrepreneurs, and generate leads via a Contact form.

**Type:** Static/SSG marketing site. No auth, no e-commerce, no dashboards, no payments

Full requirements live in `ForgestudioPRD.txt` at the project root — refer to it for scope, page-by-page requirements, and success metrics before implementing new features.


## 2. Tech Stack

| Layer | Tool |
|---|---|
| Framework | Next.js (React) + TypeScript |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Forms | Formspree |
| Images | `next/image` |
| Deployment | Vercel |
| Version Control | Git + GitHub |

Do not introduce a different framework, CSS methodology, or animation library without explicit approval — consistency across the codebase matters more than any individual library preference.

### Contact Form — Formspree
The Contact page form submits to a Formspree endpoint (no backend/database needed).

- The endpoint is stored in an environment variable: `NEXT_PUBLIC_FORMSPREE_ENDPOINT`
- Local development: read from `.env.local` (never commit this file — ensure it's in `.gitignore`)
- Production: set the same variable in Vercel's project Environment Variables settings
- The agent should never hardcode the Formspree endpoint directly in component code — always reference it via the environment variable
- If the environment variable is missing at build/runtime, the form should surface a clear, plain-English error rather than fail silently


## 3. Pages & Structure

Build and maintain these 7 pages:

1. **Home** — Hero, Services, Portfolio Preview, Testimonials, Call-to-Action, Footer
2. **About** — Story, values, team, process
3. **Services** — UI/UX Design, Website Development, Branding, Product Design
4. **Portfolio** — Project grid with case study placeholders
5. **Testimonials** — Client quotes/social proof
6. **FAQ** — Accordion-style Q&A
7. **Contact** — Lead capture form + business details

Header and footer navigation must be consistent across all pages.


## 4. Design Tokens — CRITICAL GUARDRAIL

This project has a `tokens/` folder containing four design source-of-truth files:

1. `colour-tokens.json`
2. `convert-tokens.js`
3. `design-tokens.css`
4. `design-tokens.tokens.json`

**The agent must NEVER modify, rename, delete, or regenerate any file inside `tokens/`.** These files are the single source of truth for the design system and are managed outside this workflow (e.g., by a design tool or design team).

- Treat all four files as **read-only**.
- **Consume** the tokens (colors, spacing, typography, radii, etc.) from these files in components and styles — do not hardcode raw hex values, px values, or duplicate token definitions elsewhere.
- If a needed token doesn't exist yet, **do not invent or add one directly to these files.** Stop and flag it — surface a clear message describing what token is missing and where it's needed, so it can be added upstream by whoever owns the tokens folder.
- If a build step needs to reference `design-tokens.css` or the JSON token files (e.g., importing into `tailwind.config`), that's permitted — reading and referencing is fine. Writing/editing is not.

## 5. Design Principles

- Clean, modern, minimal, professional — avoid visual clutter
- Generous white space
- Rounded corners on cards, buttons, and interactive elements
- Subtle animations only (fade-ins, scroll reveals, hover states) — never distracting or excessive
- Consistent typography hierarchy (max 2 typefaces)
- Reusable, componentized UI (buttons, cards, section wrappers, form fields)
- Fully responsive from mo
Fully responsive from mobile (320px) through large desktop

## 6. Engineering Standards

- Write clean, reusable, well-structured, production-ready code
- Use TypeScript types/interfaces consistently — avoid `any`
- Componentize repeated UI patterns; don't duplicate markup across pages
- Keep components small and single-purpose
- Follow accessibility best practices: semantic HTML, alt text on all images, sufficient color contrast, keyboard navigability, ARIA labels where appropriate
- Optimize images via `next/image`
- No unnecessary dependencies — justify any new package before adding it

## 7. Guardrails / Out of Scope

Do **not** implement any of the following unless explicitly instructed:

- User authentication or login systems
- Shopping cart or e-commerce checkout
- Payment processing
- Client dashboards or account portals
- A CMS/admin backend (not in current phase)
- A blog (not in current phase)

Do **not** guess at missing information (copy, business details, brand assets). Use clearly-labeled placeholder content where real content isn't yet available, and flag what's missing.

## 8. Error Handling

If a task cannot be completed (missing dependency, ambiguous requirement, broken reference, failed build step, etc.), the agent must surface a clear, plain-English message describing the error and what's blocking it — never fail silently or fabricate a workaround that hides the issue.

## 9. Placeholder Content

Where real content isn't available yet (portfolio case studies, testimonials, team bios, images), use clearly realistic placeholder content rather than generic Lorem Ipsum where possible, so the layout and tone can be evaluated meaningfully. Mark placeholders in code comments (e.g., `{/* PLACEHOLDER: replace with real case study */}`) so they're easy to find later.


## 10. Definition of Done (per page/feature)

- Responsive across mobile, tablet, desktop
- Matches design tokens (no hardcoded colors/spacing that duplicate existing tokens)
- Passes basic accessibility checks (alt text, semantic tags, contrast)
- No console errors or warnings
- Consistent header/footer navigation present
- Animations are subtle and don't block content from loading/being readable
- Contact form submits successfully via the `NEXT_PUBLIC_FORMSPREE_ENDPOINT` environment variable, with no hardcoded endpoint