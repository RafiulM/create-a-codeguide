# Project Requirements Document (PRD)

## 1. Project Overview

**`codeguide`** is a full-stack web application built on top of the **`codeguide-starter`** template. It combines a polished marketing landing page with a protected user dashboard. The starter provides pre-wired components for a Hero section, Features, Testimonials, Pricing, and FAQ—along with user authentication, database integration, theming, and deployment tooling. By reusing this foundation, the team can focus on content and unique functionality instead of wiring up boilerplate.

We are building **`codeguide`** to attract and convert new users via a clear, compelling landing page and then deliver value inside a secure dashboard. Key success criteria include: 1) fast, SEO-friendly landing pages with all five marketing sections completed; 2) a frictionless sign-up/sign-in flow; 3) a basic but functional dashboard that only authenticated users can access; and 4) consistent styling and dark-mode support.

---

## 2. In-Scope vs. Out-of-Scope

### In-Scope (Version 1)
- Implement landing page with these five sections:
  - **Hero** (headline, subheadline, primary CTA button)
  - **Features** (3–5 key product features)
  - **Testimonials** (at least 2 user quotes)
  - **Pricing** (tiered plan cards)
  - **FAQ** (expand/collapse items)
- Sign-up and sign-in flows using the `better-auth` library.
- Protected dashboard stub under `/dashboard` that greets the user by name.
- PostgreSQL database connectivity via Drizzle ORM to persist users.
- Dark mode toggle using `next-themes`.
- Containerization with Docker and Docker Compose for local dev.
- Basic SEO metadata (title, description, Open Graph tags).

### Out-of-Scope (Future Phases)
- Headless CMS integration (Sanity, Contentful, etc.).
- Analytics (Google Analytics, Plausible, etc.).
- Contact form or newsletter signup endpoints.
- E2E testing frameworks (Cypress/Playwright).
- In-depth dashboard features beyond the welcome page.
- Multi-language support/localization.
- Advanced CI/CD pipelines beyond Docker Compose.

---

## 3. User Flow

When a new visitor lands on **`/`**, they see a clean, responsive landing page composed of five distinct sections: Hero (with a Call-to-Action), Features, Testimonials, Pricing, and FAQ. The primary CTA buttons in the header and Hero section invite the user to create an account or log in. All images and icons load quickly thanks to Next.js’s optimized `<Image>` component. A theme switcher in the header toggles between light and dark modes.

A user clicks **“Sign Up”**, is directed to the sign-up form at **`/sign-up`**, and provides an email and password. Upon successful submission, the form calls the Next.js API route powered by `better-auth`. If registration succeeds, the visitor is immediately redirected to **`/dashboard`**, where they see a personalized greeting and a placeholder for future product features. If any error occurs (e.g., email in use), the user sees a clear, inline error message.

---

## 4. Core Features

- **Marketing Landing Page**: Five modular React components (Hero, Features, Testimonials, Pricing, FAQ). Each section supports custom titles, images, and content passed as props.
- **Authentication**: Sign-up and sign-in forms using `better-auth` under `/api/auth`; secure storage of hashed passwords in PostgreSQL.
- **Protected Dashboard**: Simple dashboard page (`/dashboard`) that only renders when a valid session exists.
- **Theming**: Light/dark mode toggle with `next-themes`; persists preference in local storage.
- **Database Integration**: Type-safe user model and queries with Drizzle ORM and PostgreSQL.
- **Docker Setup**: `Dockerfile` and `docker-compose.yml` for 1-command local environment spin-up.
- **SEO Metadata**: Next.js Metadata API in `app/layout.tsx` and `app/page.tsx` to set page titles, descriptions, and Open Graph tags.

---

## 5. Tech Stack & Tools

- Frontend:
  - **Next.js 15** (App Router, Server Components) with **TypeScript**
  - **React** 18+
  - **Tailwind CSS** + **shadcn/ui** component library
  - **next-themes** for dark mode
- Backend:
  - **Next.js API Routes** within the App Router
  - **better-auth** library for authentication
  - **PostgreSQL** database
  - **Drizzle ORM** for type-safe queries
- Deployment & Tooling:
  - **Docker** & **Docker Compose**
  - **dotenv** for environment variables
  - **Prettier** for code formatting
- IDE Plugins (optional):
  - **ESLint** & **Prettier** integrations
  - **Tailwind CSS IntelliSense**
  - **VSCode** or **WebStorm** recommended

---

## 6. Non-Functional Requirements

- **Performance**: Landing page Time to Interactive ≤ 1s on 3G emulation; dashboard visible in ≤ 500 ms after auth.
- **SEO**: All marketing pages use server-rendered metadata and semantic HTML for optimal indexing.
- **Security**: OWASP Top 10 mitigation; secure cookie/session management; HTTPS endpoints.
- **Availability**: Aim for 99.9% uptime in production.
- **Usability**: Responsive design for mobile, tablet, desktop; accessible color contrast; keyboard-navigable forms.

---

## 7. Constraints & Assumptions

- **Next.js 15** and **Node.js 18+** are available in the target environment.
- The `better-auth` library supports our Next.js version without major patches.
- PostgreSQL instance reachable via standard port (5432).
- No headless CMS is in place—content will be hardcoded or pulled from JSON/local files.
- Users must have modern browsers with JavaScript enabled.

---

## 8. Known Issues & Potential Pitfalls

- **`better-auth` compatibility**: If the library lags behind the Next.js App Router changes, you may need to patch or fork it. Mitigation: lock to a known working version in `package.json`.
- **Drizzle ORM migrations**: Ensure proper migration scripts are in place to avoid data loss. Use version control for migration files.
- **Docker networking**: Misconfigured ports in `docker-compose.yml` can block database connectivity. Always test with a fresh compose up.
- **SSR vs. CSR**: Mixing Server and Client Components incorrectly can cause hydration errors. Clearly annotate components with `'use client'` at the top when needed.
- **Image optimization**: Failing to use Next.js `<Image>` may bloat page size. Always wrap marketing graphics in `<Image>`.

Suggested quick wins:
- Pin all dependencies and run `npm ci` in CI.
- Add a basic smoke test for landing page HTML and dashboard redirect.
- Document environment variable requirements in a `.env.example` file.

---

This PRD should enable an AI model or a developer to build a complete, production-ready version 1 of the **`codeguide`** application without further clarifications. All main flows, features, and non-functional criteria have been spelled out in clear, everyday English.