# Codeguide

> A modern full-stack web application combining a polished marketing landing page with a secure user dashboard

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-blue?style=flat-square&logo=postgresql)](https://www.postgresql.org/)
[![Docker](https://img.shields.io/badge/Docker-Ready-blue?style=flat-square&logo=docker)](https://www.docker.com/)

## Overview

**Codeguide** is a production-ready full-stack web application built on the codeguide-starter template. It features a compelling marketing landing page with five essential sections (Hero, Features, Testimonials, Pricing, and FAQ) combined with a protected user dashboard. The application is designed to attract and convert visitors through clear messaging while delivering value through a secure, authenticated user experience.

### What Makes This Special

- **Marketing-First Design**: Pre-built landing page components optimized for conversion
- **Authentication Ready**: Secure sign-up/sign-in flows with Better Auth
- **Modern Stack**: Built with Next.js 15, TypeScript, and the latest web technologies
- **Developer Experience**: Type-safe database operations, hot module replacement, and Docker support
- **Production Ready**: Includes deployment configurations, security best practices, and performance optimizations

## Key Features

### Marketing Landing Page
- **Hero Section**: Eye-catching headline, subheadline, and primary call-to-action
- **Features Showcase**: Highlight 3-5 key product features with icons and descriptions
- **Social Proof**: Display user testimonials to build trust
- **Pricing Plans**: Clear, tiered pricing cards for easy comparison
- **FAQ Section**: Expandable/collapsible frequently asked questions

### Authentication & Security
- Secure email/password authentication with Better Auth
- Protected dashboard routes (only accessible when authenticated)
- Session management with secure cookie handling
- OWASP Top 10 security considerations

### User Experience
- Dark mode with system preference detection
- Fully responsive design (mobile, tablet, desktop)
- Fast page loads with Server Components
- SEO-optimized with proper metadata

### Developer Features
- Type-safe database operations with Drizzle ORM
- 40+ customizable shadcn/ui components (New York style)
- Hot module replacement with Turbopack
- Docker Compose for one-command local setup
- Comprehensive database management commands

## Tech Stack

### Frontend
- **[Next.js 15](https://nextjs.org/)** - React framework with App Router and Server Components
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[React 18+](https://react.dev/)** - UI component library
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Beautiful, accessible component library (40+ components)
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Dark mode support
- **[Lucide React](https://lucide.dev/)** - Icon library

### Backend
- **[Better Auth](https://better-auth.com/)** - Modern authentication library
- **[Drizzle ORM](https://orm.drizzle.team/)** - Type-safe ORM for TypeScript
- **[PostgreSQL](https://www.postgresql.org/)** - Reliable relational database
- **Next.js API Routes** - Built-in serverless functions

### DevOps & Tooling
- **[Docker](https://www.docker.com/)** & **Docker Compose** - Containerization
- **[Turbopack](https://turbo.build/)** - Next-generation bundler
- **[Prettier](https://prettier.io/)** - Code formatter
- **[ESLint](https://eslint.org/)** - Code linting

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js 18+** - [Download here](https://nodejs.org/)
- **Docker & Docker Compose** - [Download here](https://www.docker.com/products/docker-desktop)
- **Git** - [Download here](https://git-scm.com/)

## Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd codeguide-starter-fullstack
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Environment Configuration

Copy the example environment file and configure it:

```bash
cp .env.example .env
```

The default values work with Docker setup. For custom configurations, see [Environment Variables](#environment-variables) section.

### 4. Start the Database

**Option A: Docker (Recommended)**

```bash
npm run db:up
```

This starts PostgreSQL in a Docker container with default credentials.

**Option B: Local PostgreSQL**

If you have PostgreSQL installed locally, update the `DATABASE_URL` in your `.env` file:

```env
DATABASE_URL=postgresql://username:password@localhost:5432/database_name
```

### 5. Initialize the Database

Push the database schema to your PostgreSQL instance:

```bash
npm run db:push
```

### 6. Start the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Database Configuration (defaults work with Docker)
DATABASE_URL=postgresql://postgres:postgres@localhost:5433/postgres
POSTGRES_DB=postgres
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres

# Authentication (Required)
BETTER_AUTH_SECRET=your_secret_key_here_min_32_characters
BETTER_AUTH_URL=http://localhost:3000
NEXT_PUBLIC_BETTER_AUTH_URL=http://localhost:3000
```

### Configuration Details

| Variable | Description | Example |
|----------|-------------|---------|
| `DATABASE_URL` | PostgreSQL connection string | `postgresql://user:pass@host:port/db` |
| `BETTER_AUTH_SECRET` | Secret key for authentication (min 32 chars) | Generate with `openssl rand -base64 32` |
| `BETTER_AUTH_URL` | Server-side auth URL | `http://localhost:3000` |
| `NEXT_PUBLIC_BETTER_AUTH_URL` | Client-side auth URL | `http://localhost:3000` |

> **Security Note**: In production, always use strong, unique secrets and HTTPS URLs.

## Development Commands

### Application Commands

```bash
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint
```

### Database Commands

```bash
npm run db:up        # Start PostgreSQL in Docker (port 5433)
npm run db:down      # Stop PostgreSQL container
npm run db:dev       # Start development PostgreSQL (alternative)
npm run db:dev-down  # Stop development PostgreSQL
npm run db:push      # Push schema changes to database
npm run db:generate  # Generate Drizzle migration files
npm run db:studio    # Open Drizzle Studio (database GUI)
npm run db:reset     # Reset database (drop all tables and recreate)
```

### Docker Commands

```bash
npm run docker:build # Build application Docker image
npm run docker:up    # Start full stack (app + database)
npm run docker:down  # Stop all containers
npm run docker:logs  # View container logs
npm run docker:clean # Stop containers and clean up volumes
```

## Project Structure

```
codeguide-starter-fullstack/
├── app/                        # Next.js App Router
│   ├── (auth)/                # Authentication routes group
│   ├── (dashboard)/           # Protected dashboard routes
│   ├── api/                   # API routes
│   ├── globals.css            # Global styles with dark mode
│   ├── layout.tsx             # Root layout with providers
│   └── page.tsx               # Landing page
├── components/                # React components
│   ├── ui/                    # shadcn/ui components (40+)
│   ├── hero.tsx              # Landing page sections
│   ├── features.tsx
│   ├── testimonials.tsx
│   ├── pricing.tsx
│   └── faq.tsx
├── db/                        # Database configuration
│   ├── index.ts              # Database connection
│   └── schema/               # Drizzle schemas
├── hooks/                     # Custom React hooks
├── lib/                       # Utility functions
│   ├── auth.ts               # Better Auth configuration
│   └── utils.ts              # Helper functions
├── docker/                    # Docker configuration files
├── documentation/             # Project documentation
├── .env.example              # Environment variables template
├── auth-schema.ts            # Authentication schema
├── components.json           # shadcn/ui configuration
├── docker-compose.yml        # Docker services
├── Dockerfile                # Application container
└── drizzle.config.ts         # Drizzle ORM configuration
```

### Key Directories

- **`app/`** - Next.js 15 App Router with file-based routing
- **`components/`** - Reusable React components including landing page sections
- **`db/`** - Database schema definitions and connection setup
- **`lib/`** - Shared utilities and configuration
- **`documentation/`** - Project requirements, tech stack, and architecture docs

## Architecture Overview

### Next.js App Router

This project uses the Next.js 15 App Router with Server and Client Components:

- **Server Components** (default): Render on the server for better performance and SEO
- **Client Components** (`'use client'`): Used for interactivity and browser APIs
- **Route Groups**: Organize routes without affecting URL structure (e.g., `(auth)`, `(dashboard)`)

### Authentication Flow

1. User visits landing page (`/`)
2. Clicks "Sign Up" button → redirected to `/sign-up`
3. Submits registration form → calls `/api/auth/sign-up`
4. Better Auth validates, hashes password, stores in PostgreSQL via Drizzle
5. Session created and stored in secure HTTP-only cookie
6. User redirected to `/dashboard` (protected route)
7. Middleware checks session on protected routes

### Database Integration

- **Drizzle ORM** provides type-safe database queries
- **PostgreSQL** stores user data and application state
- **Better Auth Drizzle Adapter** integrates auth with database
- **Migrations** managed through Drizzle Kit

## Styling with shadcn/ui

This project includes 40+ pre-configured shadcn/ui components in the New York style:

- Components use CSS variables for easy theming
- Full dark mode support with `next-themes`
- Customizable through `components.json`
- Built on Radix UI primitives for accessibility

### Adding Components

```bash
npx shadcn@latest add [component-name]
```

Example:
```bash
npx shadcn@latest add button
npx shadcn@latest add card
```

## Docker Development

### Quick Start with Docker

```bash
# Start the entire stack (recommended for new users)
npm run docker:up

# View logs
npm run docker:logs

# Stop everything
npm run docker:down
```

### Development Workflow Options

**Option 1: Database only (develop app locally)**
```bash
npm run db:up          # Start PostgreSQL
npm run dev            # Start Next.js dev server
```

**Option 2: Full Docker stack**
```bash
npm run docker:up      # Start both app and database
```

### Docker Services

The `docker-compose.yml` includes:

- **postgres**: Main PostgreSQL database (port 5432)
- **postgres-dev**: Development database (port 5433)
- **app**: Next.js application container (port 3000)

## Deployment

### Option 1: Docker Compose (VPS/Server)

**1. Clone and setup on your server:**
```bash
git clone <your-repo>
cd codeguide-starter-fullstack
cp .env.example .env
```

**2. Configure production environment variables:**
```env
DATABASE_URL=postgresql://postgres:your_secure_password@postgres:5432/postgres
POSTGRES_PASSWORD=your_secure_password
BETTER_AUTH_SECRET=your-very-secure-secret-key-min-32-chars
BETTER_AUTH_URL=https://yourdomain.com
NEXT_PUBLIC_BETTER_AUTH_URL=https://yourdomain.com
```

**3. Deploy:**
```bash
npm run docker:up
```

### Option 2: Vercel + Managed Database

**1. Deploy to Vercel:**
```bash
npm i -g vercel
vercel
```

**2. Add environment variables in Vercel dashboard:**
- `DATABASE_URL` - Your managed PostgreSQL connection string (e.g., from Neon, Supabase, or Railway)
- `BETTER_AUTH_SECRET` - Generate with `openssl rand -base64 32`
- `BETTER_AUTH_URL` - Your Vercel deployment URL
- `NEXT_PUBLIC_BETTER_AUTH_URL` - Your Vercel deployment URL

**3. Push database schema:**
```bash
npm run db:push
```

### Option 3: Container Registry (AWS/GCP/Azure)

**1. Build and push image:**
```bash
docker build -t your-registry/codeguide:latest .
docker push your-registry/codeguide:latest
```

**2. Deploy using your cloud provider's container service** (ECS, Cloud Run, Container Apps)

### Production Checklist

- [ ] Use managed PostgreSQL (AWS RDS, Google Cloud SQL, Neon, Supabase)
- [ ] Generate strong `BETTER_AUTH_SECRET` (min 32 characters)
- [ ] Enable HTTPS/SSL for all endpoints
- [ ] Set `NODE_ENV=production`
- [ ] Configure database backups
- [ ] Set up monitoring and logging
- [ ] Add health check endpoints
- [ ] Review security headers
- [ ] Enable rate limiting on auth routes

### Health Checks

Add a health check endpoint by creating `app/api/health/route.ts`:

```typescript
export async function GET() {
  return Response.json({ status: 'ok' })
}
```

Update Dockerfile:
```dockerfile
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3000/api/health || exit 1
```

## Contributing

We welcome contributions! Here's how you can help:

### Development Workflow

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes** and commit with clear messages
4. **Format your code**: `npm run lint` (or Prettier)
5. **Test your changes** locally with `npm run dev`
6. **Push to your fork**: `git push origin feature/amazing-feature`
7. **Open a Pull Request** with a clear description

### Commit Conventions

Follow conventional commit format:

- `feat: add new landing page section`
- `fix: resolve authentication bug`
- `docs: update README with new instructions`
- `style: format code with prettier`
- `refactor: simplify database connection logic`

### Code Style

- Use **Prettier** for code formatting (configured in `.prettierrc`)
- Follow **TypeScript** best practices
- Write descriptive variable and function names
- Add comments for complex logic
- Keep components small and focused

## Troubleshooting

### Common Issues

**Database connection fails**
- Ensure PostgreSQL is running: `docker ps`
- Check `DATABASE_URL` in `.env` matches your setup
- Verify port 5433 (or 5432) is not in use by another service

**Authentication errors**
- Verify `BETTER_AUTH_SECRET` is at least 32 characters
- Check that URLs match between client and server
- Clear browser cookies and try again

**Build errors**
- Delete `node_modules` and `.next` folders
- Run `npm install` again
- Check Node.js version (must be 18+)

**Docker issues**
- Run `npm run docker:clean` to reset containers
- Ensure Docker Desktop is running
- Check disk space for Docker volumes

## License

This project is open source and available under the [MIT License](LICENSE).

## AI Coding Agent Integration

This starter is optimized for AI coding agents like Claude Code, Cursor, and Copilot:

- Clear, consistent file structure and naming conventions
- Comprehensive TypeScript type definitions
- Well-documented authentication patterns
- Example database schemas and queries
- Detailed inline comments for complex logic

Generate project documents at [CodeGuide](https://codeguide.dev/) for the best AI-assisted development experience.

---

**Built with ❤️ using Next.js 15, TypeScript, and modern web technologies**
