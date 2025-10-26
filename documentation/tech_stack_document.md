# Tech Stack Document

This document explains, in simple terms, the technology choices behind the **codeguide-starter** project. It’s meant to help non-technical readers understand why each tool or framework was selected and how they work together to build a fast, reliable, and user-friendly web application.

---

## 1. Frontend Technologies

**What the user sees and interacts with**

- **Next.js 15 (App Router)**
  - A React framework that helps build fast, SEO-friendly pages. It uses server components to render content quickly and client components for dynamic parts.
- **React & TypeScript**
  - React provides the building blocks for the user interface. TypeScript adds type checking, making the code safer and easier to maintain.
- **Tailwind CSS**
  - A utility-first styling tool that lets developers apply CSS classes directly in the markup. It speeds up styling and keeps the design consistent.
- **shadcn/ui**
  - A collection of pre-built, customizable UI components (like buttons, cards, and accordions) layered on top of Tailwind. This accelerates development of a clean, cohesive look across the landing page and dashboard.
- **next-themes**
  - Manages light/dark mode toggling automatically, improving user comfort and modern appeal.
- **Next.js Metadata API & <Image> Component**
  - Helps set page titles, descriptions, and social sharing tags for better SEO.
  - Optimizes images on the fly for faster page loads.

**How these enhance user experience**
- Fast initial load and smooth navigation thanks to server-side rendering.
- Consistent, responsive design across devices via Tailwind and shadcn/ui.
- Out-of-the-box dark mode support.
- Strong SEO foundations to make the landing page discoverable.

---

## 2. Backend Technologies

**What handles data, business logic, and user accounts**

- **Next.js API Routes (Route Handlers)**
  - Let you run server-side code as part of the same project without setting up a separate backend server.
- **`better-auth` Library**
  - Pre-built user authentication flows (sign-up, sign-in, password hashing, session management) so you don’t have to write that from scratch.
- **PostgreSQL**
  - A reliable relational database to store user credentials and any other application data.
- **Drizzle ORM**
  - Provides type-safe database queries. It works with TypeScript to catch mistakes early and keep data operations consistent.
- **dotenv**
  - Loads sensitive environment variables (like database URLs or API keys) from a `.env` file, keeping them out of source code.

**How these work together**
1. A user fills out the sign-up form on the landing page.
2. The form calls a Next.js API Route that uses `better-auth` to validate and register the user.
3. User data is stored in PostgreSQL via Drizzle ORM.
4. On success, the API returns a session token and redirects the user to the protected dashboard.

---

## 3. Infrastructure and Deployment

**How and where the code runs**

- **Docker & Docker Compose**
  - Containerize the application and database so they run the same way on any machine.
- **Version Control (Git & GitHub)**
  - Track changes, collaborate with others, and store code securely.
- **CI/CD Pipelines (e.g., GitHub Actions or Vercel)**
  - Automate tests, builds, and deployments whenever code is pushed.
- **Hosting Platform (Vercel, AWS, or similar)**
  - Hosts the front end and back end with minimal configuration, scales automatically to handle traffic spikes.
- **Prettier**
  - Automatically formats code to a consistent style, reducing review friction.

**Why these choices matter**
- Containers guarantee that "it works on my machine" means it works in production.
- Automated pipelines catch bugs early and deploy updates reliably.
- Cloud hosting ensures high availability and scalability without manual server management.

---

## 4. Third-Party Integrations

**External services that enhance functionality**

- **Authentication**: `better-auth` (NPM library)
- **Potential Headless CMS** (optional for content updates)
  - Sanity, Contentful, or Strapi—allow non-developers to edit landing page text, images, or testimonials without touching code.
- **Analytics (optional)**
  - Google Analytics, Plausible, or Vercel Analytics to track page views, user engagement, and conversion rates.
- **Email/Notifications** (optional future integration)
  - Services like SendGrid or Mailgun for newsletters or signup confirmations.

**Benefits**
- Let trusted specialists handle complex features (auth, analytics, content) so the core team can focus on the product.
- Easily add or swap services without major rewrites.

---

## 5. Security and Performance Considerations

**Keeping data safe and pages fast**

- **Authentication & Data Protection**
  - `better-auth` secures login flows with hashed passwords and session tokens.
  - Environment variables store secrets out of the codebase.
  - API routes are secured behind authentication checks, ensuring only logged-in users can reach the dashboard.
- **Performance Optimizations**
  - Server Components in Next.js for faster initial page loads and better SEO.
  - Automatic image optimization via the Next.js `<Image>` component.
  - Tailwind CSS produces small, focused styles instead of large global stylesheets.
  - Docker multistage builds reduce container size for quicker deployments.

---

## 6. Conclusion and Tech Stack Summary

This project brings together modern, well-supported tools to meet the goals of a polished marketing landing page and a secure, interactive user dashboard:

- **Frontend:** Next.js 15, React, TypeScript, Tailwind CSS, shadcn/ui, next-themes
- **Backend:** Next.js API Routes, better-auth, PostgreSQL, Drizzle ORM
- **Infrastructure:** Docker (Compose), Git & GitHub, CI/CD (GitHub Actions/Vercel), Prettier
- **Optional Integrations:** Headless CMS (Sanity/Contentful/Strapi), Analytics (Google/Plausible), Email services (SendGrid)

By choosing these technologies, the codeguide-starter achieves:
- Fast, SEO-optimized landing pages and a smooth user experience
- Secure, ready-to-use authentication and data storage
- Easy customization, styling, and content updates
- Scalable, reliable infrastructure with automated deployments

These combined choices ensure that your team can focus on building features, not reinventing the wheel. Welcome to a solid foundation for your next web project!