# Backend Structure Document

## 1. Backend Architecture

This project uses a modern, server-driven architecture that combines Next.js API Routes with a lightweight ORM. The main principles and patterns include:

- **Framework**: Next.js 15 (App Router)
  - Offers file-based routing for both pages and API endpoints
  - Supports Server Components, which boost performance and SEO
- **Design Pattern**: Layered (Controller → Service → Data)
  - **Controllers** (API route handlers) receive HTTP requests and return responses
  - **Services** encapsulate business logic (authentication flows, data validation)
  - **Data Layer** uses Drizzle ORM to interact with the database in a type-safe way
- **Authentication Library**: `better-auth`
  - Provides ready-made sign-up, sign-in, and session management flows
- **Scalability & Performance**
  - Serverless API Routes (on platforms like Vercel) or containerized Node.js services behind a load balancer
  - Automatic code splitting and Server Components in Next.js reduce bandwidth and improve TTFB (Time To First Byte)
  - Drizzle ORM generates optimized SQL queries to minimize database load
- **Maintainability**
  - Clear separation between `app/` (pages & API), `lib/` (utilities), and `db/` (schema definitions)
  - TypeScript ensures consistency of data types across client and server
  - Docker configuration standardizes the local development and production environments

## 2. Database Management

- **Type**: SQL (Relational Database)
- **System**: PostgreSQL
- **ORM**: Drizzle ORM
- **Connection Handling**
  - Database URL and credentials managed via environment variables (`.env`)
  - Connection pooling handled by the Postgres driver to support concurrent requests
- **Data Storage & Access**
  - Tables defined in schema files under `db/schema.ts` (or similar)
  - Drizzle’s migration CLI is used to apply versioned schema updates
  - Queries written in code are type-checked at compile time, reducing runtime errors
- **Data Management Practices**
  - Periodic backups via the hosting provider (e.g., nightly snapshots on AWS RDS or Supabase)
  - Migrations reviewed in code reviews before deployment
  - Sensitive columns (password hashes, session tokens) marked and handled securely

## 3. Database Schema

### Human-Readable Description

1. **users**
   - `id`: unique identifier for each user (auto-incrementing)
   - `email`: user’s email address (must be unique)
   - `hashed_password`: securely hashed password
   - `created_at`: timestamp when the account was created
   - `updated_at`: timestamp of the last profile update

2. **sessions**
   - `id`: unique identifier for each session (UUID or auto-incrementing)
   - `user_id`: foreign key referencing `users.id`
   - `session_token`: random token used to verify active sessions
   - `expires_at`: timestamp when the session becomes invalid

### SQL Schema (PostgreSQL)

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  hashed_password TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  session_token TEXT NOT NULL,
  expires_at TIMESTAMP WITH TIME ZONE NOT NULL
);

-- Index to quickly find sessions by token
CREATE INDEX idx_sessions_token ON sessions(session_token);
```  

## 4. API Design and Endpoints

All APIs follow RESTful conventions and are implemented as Next.js API Route handlers under `app/api/`:

- **Authentication** (`app/api/auth/[...all]/route.ts`)
  - Catch-all route provided by `better-auth`
  - Endpoints:
    - `POST /api/auth/sign-up` → Create a new user
    - `POST /api/auth/sign-in` → Authenticate and create a session
    - `POST /api/auth/sign-out` → Invalidate the current session
- **User Data** (`app/api/user/route.ts`)
  - `GET /api/user` → Retrieve current user’s profile (secured)
  - `PATCH /api/user` → Update user profile fields (email, password)
- **Dashboard Data** (`app/api/dashboard/route.ts`)
  - `GET /api/dashboard` → Fetch personalized data for the user’s dashboard
- **Additional Endpoints** (suggested for future features)
  - `POST /api/contact` → Submit contact or inquiry forms
  - `POST /api/newsletter` → Sign up for newsletter:
    - Accepts `email`, writes to a `newsletter_subscribers` table or external service

## 5. Hosting Solutions

- **Platform**: Vercel (preferred for Next.js) or any container-friendly cloud provider (AWS, DigitalOcean, Google Cloud)
- **Database Hosting**: Managed Postgres via Supabase, AWS RDS, or DigitalOcean Managed Databases
- **Benefits**:
  - **Reliability**: SLA-backed uptime, automatic failover for databases
  - **Scalability**: Automatic horizontal scaling for serverless functions or container clusters
  - **Cost-Effectiveness**: Pay-as-you-go pricing; development tiers free or low cost

## 6. Infrastructure Components

- **Load Balancer**
  - If using AWS/EKS/ECS: Application Load Balancer directs traffic to healthy containers
  - On Vercel: built-in global edge network automatically balances incoming requests
- **Cache / CDN**
  - Vercel’s global CDN caches static assets and Server Component outputs
  - API responses can be cached at the edge with TTL headers
- **Database Connection Pool**
  - Managed by the Node.js Postgres client; tuned via `poolSize` environment variable
- **Containerization**
  - `Dockerfile` and `docker-compose.yml` define a local dev stack
  - Includes Next.js server, Postgres service, and any additional services (e.g., Redis for caching)
- **Optional Redis Service**
  - Can be added for session caching or rate-limiting mechanisms

## 7. Security Measures

- **Transport Security**
  - HTTPS enforced at the edge (Vercel) or via TLS certificates (Let’s Encrypt on custom domains)
- **Authentication & Authorization**
  - `better-auth` issues secure, HTTP-only cookies for sessions
  - Protected API routes check session validity before granting access
  - Role-based access control can be layered in the service layer if needed
- **Data Encryption**
  - Passwords are hashed (e.g., bcrypt) before storage
  - Database at rest encryption provided by managed database service
- **Environment Variables**
  - Sensitive credentials (DB URL, JWT secrets) stored in environment variables, not in code
- **OWASP Best Practices**
  - Input validation on all endpoints
  - Rate limiting on auth endpoints to prevent brute-force
  - HTTP security headers (CSP, X-Frame-Options, XSS protection)

## 8. Monitoring and Maintenance

- **Logging**
  - Server logs captured via Vercel dashboard or container orchestrator logs
  - Error tracking with Sentry or LogRocket for backend exceptions and performance issues
- **Metrics & Alerts**
  - Application metrics (latency, error rate) collected via Prometheus/Grafana or built-in provider dashboards
  - Alerts configured for high error rates or database connection failures
- **Automatic Health Checks**
  - Readiness and liveness probes (on Kubernetes/ECS)
  - Uptime monitoring via external service (e.g., UptimeRobot)
- **Maintenance**
  - Schema migrations applied via Drizzle CLI in CI/CD pipelines
  - Dependency updates managed with Dependabot or similar tools
  - Scheduled reviews of SSL/TLS certificates and environment secret rotations

## 9. Conclusion and Overall Backend Summary

This backend structure is designed to support a polished marketing landing page with seamless user conversion and a secure, interactive dashboard. Key highlights:

- **Next.js App Router & API Routes** deliver server-side rendering for performance and SEO, while handling application logic in a unified codebase
- **PostgreSQL + Drizzle ORM** ensures robust, type-safe data handling and easy evolution of the schema
- **`better-auth` Library** streamlines user authentication and session management, directly meeting the project’s goal of small friction sign-up/sign-in flows
- **Containerization & Hosting** on platforms like Vercel or AWS allow the application to scale with demand, while managed Postgres keeps maintenance overhead low
- **Security & Monitoring** practices protect user data and provide visibility into performance and reliability

Together, these components form a reliable, scalable, and maintainable backend that aligns perfectly with the needs of the “codeguide” project—powering an engaging landing page, a secure user area, and a foundation for future feature growth.