# Frontend Guideline Document

This document outlines the frontend architecture, design principles, styling approach, component structure, state management, routing, performance optimizations, testing strategy, and overall summary for the **codeguide-starter** project. It’s written in everyday language so anyone can understand how this frontend is set up, why it’s built this way, and how to extend it.

---

## 1. Frontend Architecture

**Framework & Language**
- Built with **Next.js 15** using the App Router (file-based routing under `app/`).
- Written in **TypeScript** for type safety and better developer experience.
- UI is powered by **React** and the **shadcn/ui** component library (New York style) on top of **Tailwind CSS**.
- **`next-themes`** handles light/dark mode toggling.

**How It Supports Scalability, Maintainability, Performance**
- **Modular Structure**: Pages live in `app/`, shared UI bits in `components/ui/`, and landing-page pieces in `components/landing/`. This clear separation makes it easy to find, update, or swap parts.
- **Server & Client Components**: Landing-page sections (Hero, Features, etc.) can render on the server for SEO and speed, while interactive bits (forms, buttons) run on the client.
- **TypeScript Everywhere**: From UI props to database queries (via Drizzle ORM), you catch mistakes early and safely refactor.
- **Tailwind JIT**: Generates only the CSS you actually use, keeping bundles small.
- **Next.js Optimization**: Automatic code splitting, image optimization, and caching strategies come out of the box.

---

## 2. Design Principles

1. **Usability**  
   - Clear calls to action ("Sign Up", "Log In").  
   - Logical content flow: Hero → Features → Testimonials → Pricing → FAQ.

2. **Accessibility**  
   - Semantic HTML elements (`<button>`, `<nav>`, `<header>`).  
   - Sufficient color contrast and keyboard navigation.  
   - ARIA attributes where needed (e.g., for accordions).

3. **Responsiveness**  
   - Mobile-first breakpoints via Tailwind’s responsive utilities.  
   - Fluid layouts with flex and grid to adapt to any screen size.

4. **Consistency**  
   - Reusable UI primitives (buttons, cards, inputs) from `shadcn/ui`.  
   - Shared spacing and typography scale defined in the Tailwind config.

---

## 3. Styling and Theming

**Approach**  
- Utility-first with **Tailwind CSS**—no separate SASS or BEM naming.  
- Pre-built, theme-aware components from **shadcn/ui**.

**Theming**  
- Light and dark modes via the **next-themes** package.  
- Tailwind’s `dark:` variant automatically inverts colors based on theme.

**Visual Style**
- Modern, clean, flat design with subtle glassmorphism touches in cards and modals.
- Emphasis on white space, clear hierarchy, and vibrant accent colors.

**Color Palette**
- Primary:  
  • `--color-primary` = #2563EB (blue-600)  
  • `--color-primary-light` = #3B82F6 (blue-500)  
  • `--color-primary-dark` = #1D4ED8 (blue-700)
- Secondary:  
  • `--color-secondary` = #10B981 (emerald-500)
- Accent:  
  • `--color-accent` = #8B5CF6 (violet-500)
- Neutral:  
  • Light background = #F9FAFB (gray-50)  
  • Dark background = #111827 (gray-900)
- Status colors:  
  • Info = #3B82F6 (blue-500)  Success = #10B981  Warning = #F59E0B  Error = #EF4444

**Typography**
- Font family: **Inter**, system-sans fallback.  
- Scale:  
  • h1 = 2.25rem  
  • h2 = 1.875rem  
  • body = 1rem  
  • small = 0.875rem

---

## 4. Component Structure

**Folder Layout**
- `/app/` 
  • `page.tsx` (landing page entry)  
  • `/dashboard/page.tsx` (protected area)
- `/components/landing/` 
  • `HeroSection.tsx`, `FeaturesSection.tsx`, `TestimonialsSection.tsx`, `PricingSection.tsx`, `FaqSection.tsx`
- `/components/ui/` 
  • Base building blocks: `<Button>`, `<Card>`, `<Accordion>`, `<Input>`, etc.
- `/components/auth-buttons.tsx` 
  • Reusable sign-in/up buttons for header or hero.

**Why Component-Based?**
- **Reusability**: Build once, use everywhere.  
- **Isolation**: Each piece lives in its own file; changes don’t ripple unexpectedly.  
- **Testability**: Small, focused components are easier to unit-test.

---

## 5. State Management

1. **Local State**  
   • React’s `useState` and `useReducer` for form inputs, toggles, etc.

2. **Global State / Context**  
   • **Auth Context** holds user-session data after login (via `better-auth`).  
   • **Theme Context** (from `next-themes`) tracks light/dark mode.

3. **Server Data**  
   • Next.js Server Components fetch data directly on the server (e.g., landing page content).  
   • For client-side data fetching and caching (e.g., dashboard stats), you can integrate **React Query** or **SWR**.

---

## 6. Routing and Navigation

**File-Based Routing**
- `app/page.tsx` → `/`
- `app/sign-up/page.tsx` → `/sign-up`
- `app/sign-in/page.tsx` → `/sign-in`
- `app/dashboard/page.tsx` → `/dashboard` (protected)

**Protected Routes**
- Use Next.js middleware or a `DashboardLayout` client component to check `better-auth` session and redirect if unauthenticated.

**Navigating**
- Use Next.js `<Link>` for internal links.  
- Use `useRouter()` for programmatic navigation (e.g., after form submit).

---

## 7. Performance Optimization

1. **Server Rendering**  
   • Hero, Features, pricing data can be server-rendered for SEO and faster first paint.

2. **Image Optimization**  
   • Next.js `<Image>` component auto-optimizes images for size, format, and lazy loading.

3. **Code Splitting & Lazy Loading**  
   • Automatic per-page bundles by Next.js.  
   • Use `next/dynamic` to lazy-load heavy components (e.g., video players).

4. **Tailwind JIT**  
   • Generates only the classes you use at build time.

5. **Caching & CDN**  
   • Deploy on Vercel (or similar) to leverage global CDN edge caching.

---

## 8. Testing and Quality Assurance

1. **Unit Tests**  
   • Jest + React Testing Library for component behavior (buttons, form validation).

2. **Integration Tests**  
   • Test interactions between multiple components (e.g., sign-up form → API call → redirect).

3. **End-to-End (E2E) Tests**  
   • Cypress or Playwright to automate real-user flows: landing page → sign-up → dashboard.

4. **Linting & Formatting**  
   • ESLint for code style and catching errors early.  
   • Prettier for consistent formatting.

5. **Type Checking**  
   • `tsc --noEmit` in CI ensures no TypeScript errors slip through.

---

## 9. Conclusion and Overall Frontend Summary

This frontend setup lets you:
- Launch a polished, SEO-friendly landing page quickly with Next.js App Router and Server Components.
- Convert visitors via built-in auth powered by `better-auth`, linked to PostgreSQL through Drizzle ORM.
- Maintain a consistent, modern look using Tailwind CSS and shadcn/ui components.
- Toggle between light and dark modes effortlessly.
- Scale and maintain your code with a clear folder structure, TypeScript types, and component reusability.
- Keep performance high with image optimization, code splitting, and Tailwind’s JIT.
- Guarantee quality through unit, integration, and E2E tests alongside linting and type checks.

With these guidelines in hand, any developer—regardless of background—can understand, work on, and extend the **codeguide-starter** frontend to build a compelling marketing site and protected application area without confusion.