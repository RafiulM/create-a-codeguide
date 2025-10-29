# Security Guidelines for `codeguide-starter`

This document provides security best practices tailored to the **`codeguide-starter`** repository (Next.js 15 App Router, TypeScript, PostgreSQL, Drizzle ORM, better-auth, shadcn/ui, Tailwind CSS). It aligns with core principles—Security by Design, Least Privilege, Defense in Depth, Secure Defaults—and actionable recommendations for a robust, production-ready application.

---

## 1. Secure Defaults & Configuration

- Enforce **HTTPS** in all environments. Configure `next.config.js` and your hosting platform (e.g., Vercel) to redirect HTTP ➔ HTTPS.
- Store **secrets** (database URLs, JWT keys, OAuth client secrets) in environment variables or a secrets manager (e.g., AWS Secrets Manager, HashiCorp Vault). Do not commit `.env` or hard-code credentials in source.
- Use **strict mode** in Next.js and TypeScript to catch potential runtime errors early.
- Enable **automatic security headers** via Next.js middleware or a custom `next-secure-headers` setup:
  - `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`
  - `X-Frame-Options: DENY`
  - `X-Content-Type-Options: nosniff`
  - `Referrer-Policy: no-referrer-when-downgrade`
  - `Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'`

## 2. Authentication & Access Control

- **Better-auth** configuration:
  - Use **bcrypt** or preferably **Argon2** with a strong cost factor for password hashing. Ensure unique salts per user.
  - Enforce a **strong password policy**: minimum 12 characters, mixed case, numbers, symbols.
  - Require **email verification** before granting access to the dashboard.
- Implement **session management**:
  - Issue **signed, HttpOnly, Secure** cookies (no localStorage) or JWTs with `SameSite=Lax`/`Strict`.
  - Enforce both **idle** (e.g., 30 min) and **absolute** (e.g., 24 h) timeouts.
  - On logout, clear cookies and invalidate sessions server-side (e.g., remove session from database).
- Enforce **RBAC** on `/app/dashboard` and all API routes. Verify user roles/permissions in server middleware (`middleware.ts` or `getServerSideProps`).
- Protect authentication endpoints against **brute-force** and **credential stuffing** by:
  - Rate limiting sign-in/sign-up attempts (e.g., 5 attempts per IP per hour).
  - Implementing exponential backoff or account lockout after repeated failures.

## 3. Input Validation & Output Encoding

- **Server-side** validate every form and API input using a schema-based validator (e.g., Zod or Joi). Enforce types in Next.js Route Handlers.
- Use **parameterized queries** or Drizzle ORM’s query builder to prevent SQL injection.
- Sanitize and escape any user-supplied content rendered in React components to thwart XSS. Prefer React’s default escaping, but explicitly sanitize HTML (e.g., `DOMPurify`) if using `dangerouslySetInnerHTML`.
- Validate dynamic redirects against an **allow-list** to avoid open redirect vulnerabilities.
- For file uploads (if introduced):
  - Check MIME types, file extensions, and size limits.
  - Store files outside the webroot (e.g., AWS S3 with pre-signed URLs) and scan for malware.
  - Normalize file names to prevent path traversal.

## 4. Data Protection & Privacy

- Enforce **TLS 1.2+** for all external connections (front-end ⇄ back-end, database). In production, require encrypted Postgres connections (`sslmode=require`).
- Encrypt sensitive at-rest data if storing PII beyond authentication (e.g., AES-256 with separate key management).
- Avoid logging sensitive fields (passwords, tokens, PII). Mask or redact them in any error logs (e.g., use Winston or Pino with custom serializers).
- Apply **GDPR**/**CCPA** best practices if collecting EU/CA user data:
  - Display and log user consent.
  - Provide mechanisms for data export and deletion on request.

## 5. API & Service Security

- Scope API routes under `/app/api/*`. Require authentication middleware for protected routes.
- Implement **rate limiting** on critical endpoints (e.g., `api/auth`, contact forms) using in-memory or distributed stores (Redis).
- Configure **CORS** permissively only for trusted origins (e.g., your landing page domain). Reject all unknown origins.
- Version your API (`/api/v1/...`) to enable safe evolution.
- Return only necessary data in JSON responses. Avoid leaking internal IDs or stack traces.

## 6. Web Application Security Hygiene

- Use Next.js built-in **CSRF protection** for API routes (e.g., `next-csrf` or double-submit cookies).
- Set all cookies to `HttpOnly`, `Secure`, and appropriate `SameSite` values.
- Enforce **Subresource Integrity (SRI)** for any external scripts or styles (if used).
- Disable React dev-tools and Next.js error overlays in production (`NODE_ENV=production`).

## 7. Infrastructure & CI/CD Security

- Base your Docker image on a **minimal, maintained** Node.js image (e.g., `node:18-alpine`). Regularly rebuild to pick up OS patches.
- Run containers as a **non-root** user. Limit file system permissions in Docker.
- Use a **private** Docker registry or artifact repository; scan images for vulnerabilities (e.g., Trivy).
- Integrate security scanning into CI:
  - **SAST** (ESLint, TypeScript strict checks, Prettier).
  - **SCA** for dependencies (Dependabot, Snyk, or GitHub’s vulnerability alerts).
  - **Secret scanning** to catch any leaked credentials in commits.
- Protect CI environment variables; only grant build runners minimal permissions needed.

## 8. Dependency Management

- Maintain `package-lock.json` or `yarn.lock` for deterministic builds.
- Regularly run `npm audit` and update vulnerable packages promptly. If a direct dependency is vulnerable, consider patching or replacing it.
- Avoid transitive dependencies with known CVEs; use override tools (e.g., `npm-force-resolutions`) if necessary.
- Only install libraries you actively use—minimize your attack surface.

---

### Conclusion
Adhering to these guidelines from design through deployment will help ensure **`codeguide-starter`** remains secure, maintainable, and resilient. Incorporate automated security checks into your workflow and review these controls regularly as the project evolves.