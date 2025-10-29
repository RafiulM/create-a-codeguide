![CodeGuide](https://img.shields.io/badge/CodeGuide-Starter_Template-informational?style=flat-square)
![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=flat-square&logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)
![Deploy](https://img.shields.io/badge/Deploy-Vercel-black?style=flat-square&logo=vercel)

# CodeGuide

A modern, full-stack web application built on the **codeguide-starter** template that combines a polished marketing landing page with a protected user dashboard. Perfect for SaaS products, service websites, and digital platforms looking to convert visitors into registered users.

## ✨ Key Features

### 🎯 Marketing Landing Page
- **Hero Section** - Compelling headline with clear call-to-action
- **Features Showcase** - Highlight your product's key capabilities
- **Customer Testimonials** - Build trust with social proof
- **Pricing Plans** - Clear tiered pricing options
- **FAQ Section** - Answer common questions proactively

### 🔐 Authentication & Security
- Modern authentication powered by **better-auth**
- Secure sign-up and sign-in flows
- Protected dashboard for authenticated users only
- Session management with secure cookies
- Type-safe user data handling

### 🎨 Modern UI/UX
- **Dark Mode** support with system preference detection
- 40+ pre-built **shadcn/ui** components (New York style)
- Fully responsive design for all devices
- Smooth animations and micro-interactions
- Accessibility-first approach

### 🚀 Developer Experience
- **Next.js 15** with App Router and Turbopack
- Full **TypeScript** support for type safety
- Component-based architecture
- Hot reload in development
- ESLint and Prettier pre-configured

### 🗄️ Database & Backend
- **PostgreSQL** with **Drizzle ORM** for type-safe database operations
- Server-side API routes within Next.js
- Database migrations and schema management
- Docker support for local development

### 🐳 Deployment Ready
- Complete **Docker** setup with multi-stage builds
- Production-ready configuration
- Environment variable management
- Health checks and monitoring support

## 🛠️ Technology Stack

### Frontend
- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://reactjs.org/)** - UI library with Server Components
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - High-quality component library
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Dark mode support

### Backend & Database
- **[better-auth](https://better-auth.com/)** - Modern authentication library
- **[PostgreSQL](https://www.postgresql.org/)** - Reliable relational database
- **[Drizzle ORM](https://orm.drizzle.team/)** - Type-safe database queries
- **[Next.js API Routes](https://nextjs.org/docs/api-routes/introduction)** - Server-side endpoints

### Development & Deployment
- **[Docker](https://www.docker.com/)** & **Docker Compose** - Containerization
- **[ESLint](https://eslint.org/)** - Code linting
- **[Prettier](https://prettier.io/)** - Code formatting

## 🏗️ Architecture Overview

```
codeguide/
├── app/                        # Next.js App Router
│   ├── (marketing)/           # Landing page routes
│   │   ├── page.tsx          # Home page with all sections
│   │   ├── layout.tsx        # Marketing layout
│   │   └── components/       # Landing page components
│   │       ├── hero.tsx      # Hero section
│   │       ├── features.tsx  # Features showcase
│   │       ├── testimonials.tsx # Customer testimonials
│   │       ├── pricing.tsx   # Pricing plans
│   │       └── faq.tsx       # FAQ section
│   ├── (auth)/               # Authentication routes
│   │   ├── sign-in/          # Sign-in page
│   │   └── sign-up/          # Sign-up page
│   ├── dashboard/            # Protected dashboard
│   │   ├── page.tsx         # Dashboard home
│   │   └── layout.tsx       # Dashboard layout
│   ├── api/                 # API routes
│   │   └── auth/           # Authentication endpoints
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── favicon.ico         # Site icon
├── components/              # Reusable React components
│   └── ui/                # shadcn/ui components
├── lib/                   # Utility functions
│   ├── auth.ts           # better-auth configuration
│   └── utils.ts          # Helper functions
├── db/                   # Database setup
│   ├── index.ts         # Database connection
│   └── schema/          # Database schemas
├── docker/              # Docker configuration
├── drizzle.config.ts   # Drizzle ORM config
├── docker-compose.yml  # Development services
├── Dockerfile          # Production container
└── .env.example        # Environment variables template
```

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your system:

#### Required Software
- **Node.js 18+** - Download from [nodejs.org](https://nodejs.org/)
- **npm 9+** (comes with Node.js) or alternative package manager
- **Git** - Download from [git-scm.com](https://git-scm.com/)
- **Docker** - Download from [docker.com](https://www.docker.com/get-started/)
- **Docker Compose** - Usually included with Docker Desktop

#### Verify Installation
```bash
# Check Node.js version (should be 18+)
node --version

# Check npm version
npm --version

# Check Git installation
git --version

# Check Docker installation
docker --version

# Check Docker Compose
docker-compose --version
```

#### System Requirements
- **RAM**: Minimum 4GB, recommended 8GB+
- **Storage**: Minimum 2GB free space
- **Operating System**: Windows 10+, macOS 10.15+, or Linux (Ubuntu 18.04+)

### 1. Clone the Repository

Choose one of the following methods:

#### Option A: Using HTTPS (recommended)
```bash
git clone https://github.com/your-username/codeguide.git
cd codeguide
```

#### Option B: Using SSH (if you have SSH keys set up)
```bash
git clone git@github.com:your-username/codeguide.git
cd codeguide
```

#### Option C: Download ZIP
1. Go to [github.com/your-username/codeguide](https://github.com/your-username/codeguide)
2. Click the green "Code" button
3. Select "Download ZIP"
4. Extract the ZIP file
5. Navigate to the extracted folder in your terminal

### 2. Install Dependencies

Install all the required Node.js packages:

```bash
# Using npm (recommended)
npm install

# Or using yarn
yarn install

# Or using pnpm (if you prefer)
pnpm install
```

**What this does:**
- Downloads all packages listed in `package.json`
- Creates a `node_modules` folder
- Sets up the complete development environment
- Installs Next.js, React, TypeScript, and all other dependencies

### 3. Environment Configuration

Environment variables are used to store sensitive configuration data and environment-specific settings.

#### Step 1: Copy the Environment Template
```bash
# Copy the example environment file
cp .env.example .env
```

#### Step 2: Understand the Environment Variables
The `.env` file contains:

```env
# Database Configuration (defaults work with Docker)
DATABASE_URL=postgresql://postgres:postgres@localhost:5433/postgres
POSTGRES_DB=postgres
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres

# Authentication
BETTER_AUTH_SECRET=your_secret_key_here
BETTER_AUTH_URL=http://localhost:3000
NEXT_PUBLIC_BETTER_AUTH_URL=http://localhost:3000
```

#### Step 3: Generate a Secure Authentication Secret (Optional for Development)
For production, you'll need a secure secret. For local development, you can use the placeholder:

```bash
# Generate a random 32-character string (Linux/macOS)
openssl rand -base64 32

# Or use an online generator like:
# https://generate-secret.vercel.app/32
```

Replace `your_secret_key_here` in the `.env` file with your generated secret.

### 4. Database Setup

This project uses PostgreSQL for data storage. You have two options:

#### Option 1: Docker Setup (Recommended for Beginners)

**Start the PostgreSQL database:**
```bash
npm run db:up
```

**What happens:**
- Downloads and starts a PostgreSQL Docker container
- Uses default credentials (postgres/postgres)
- Makes the database available on port 5433
- Creates a database named "postgres"

**Verify the database is running:**
```bash
# Check if the container is running
docker ps

# You should see a container with "postgres" in the name
```

#### Option 2: Local PostgreSQL Setup

If you have PostgreSQL installed locally:

1. **Create a database:**
   ```bash
   # Using psql
   createdb codeguide

   # Or using PostgreSQL GUI tools like pgAdmin
   ```

2. **Update your `.env` file:**
   ```env
   DATABASE_URL=postgresql://your_username:your_password@localhost:5432/codeguide
   POSTGRES_DB=codeguide
   POSTGRES_USER=your_username
   POSTGRES_PASSWORD=your_password
   ```

### 5. Initialize the Database

Set up the database schema and tables:

```bash
# Push the database schema
npm run db:push
```

**What this does:**
- Reads the database schema from `db/schema/` files
- Creates all necessary tables in your PostgreSQL database
- Sets up the users table for authentication
- Initializes any other required database structures

**Verify database setup (optional):**
```bash
# Open Drizzle Studio to explore your database
npm run db:studio
```

This will open a web interface where you can view and manage your database tables.

### 6. Start the Development Server

Now you're ready to start the application:

```bash
# Start the Next.js development server
npm run dev
```

**What happens:**
- Starts the Next.js development server with Turbopack
- Enables hot reloading (changes appear automatically)
- Opens the application on http://localhost:3000
- Shows compilation status and any errors in your terminal

You should see output similar to:
```
  ▲ Next.js 15.5.0
  - Local:        http://localhost:3000
  - Environments: .env.local, .env
  ✓ Starting...
  ✓ Ready in 2.5s
```

### 7. Verify Everything Works

Open your web browser and navigate to:

**🌐 http://localhost:3000**

You should see:
- A beautiful landing page with Hero, Features, Testimonials, Pricing, and FAQ sections
- A dark mode toggle in the header
- Sign-up and Sign-in links in the navigation

**Test the authentication:**
1. Click "Sign Up" in the header
2. Fill out the registration form with an email and password
3. Submit the form
4. You should be redirected to the dashboard at `/dashboard`
5. The dashboard should show a personalized greeting

**Test database persistence:**
1. Sign out from the dashboard
2. Try to sign back in with the same credentials
3. You should successfully authenticate again

### 8. Common Troubleshooting

#### Database Connection Issues
```bash
# If you get "database connection failed", check:
npm run db:up    # Make sure database is running
npm run db:push  # Make sure schema is applied
```

#### Port Already in Use
```bash
# If port 3000 is already in use:
# Find what's using the port
lsof -ti:3000

# Kill the process (replace PID with actual process ID)
kill -9 PID

# Or use a different port
npm run dev -- -p 3001
```

#### Permission Issues (Linux/macOS)
```bash
# If you get permission errors with Docker:
sudo usermod -aG docker $USER
# Then log out and log back in
```

#### Node.js Version Issues
```bash
# If you get Node.js version errors:
# Install the correct version using nvm
nvm install 18
nvm use 18
npm install
```

### 9. Next Steps

Congratulations! 🎉 Your CodeGuide application is now running locally. Here's what you can do next:

- **Customize the landing page**: Edit components in `app/(marketing)/components/`
- **Add new features**: Explore the dashboard in `app/dashboard/`
- **Style adjustments**: Modify Tailwind classes or CSS variables
- **Add more pages**: Create new routes in the `app/` directory
- **Database operations**: Add new tables and models in `db/schema/`

**Development commands to remember:**
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Check code quality
- `npm run db:studio` - Explore database
- `npm run db:down` - Stop database (when done)

## ⚙️ Environment Variables

Create a `.env` file in the root directory:

```env
# Database Configuration (defaults work with Docker)
DATABASE_URL=postgresql://postgres:postgres@localhost:5433/postgres
POSTGRES_DB=postgres
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres

# Authentication
BETTER_AUTH_SECRET=your_secret_key_here
BETTER_AUTH_URL=http://localhost:3000
NEXT_PUBLIC_BETTER_AUTH_URL=http://localhost:3000
```

## 🎯 Development Workflow

### Database Management
```bash
# Start PostgreSQL (recommended)
npm run db:up

# Start development database (port 5433)
npm run db:dev

# Stop database
npm run db:down

# Push schema changes
npm run db:push

# Open database studio
npm run db:studio

# Reset database
npm run db:reset
```

### Application Development
```bash
# Start development server with Turbopack
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

### Docker Development
```bash
# Build application image
npm run docker:build

# Start full stack (app + database)
npm run docker:up

# View logs
npm run docker:logs

# Stop all containers
npm run docker:down
```

## 🌟 Adding New Components

This project uses **shadcn/ui** for UI components. Add new components easily:

```bash
# Add a new component
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add dialog

# Components are added to components/ui/
```

## 🚀 Deployment

### Production Deployment Options

#### Option 1: Vercel (Recommended for Most Users)

Vercel provides the easiest deployment experience with automatic HTTPS, global CDN, and seamless integration with Next.js.

**Step 1: Prepare Your Repository**
```bash
# Ensure all changes are committed
git add .
git commit -m "Ready for deployment"
git push origin main
```

**Step 2: Deploy to Vercel**
1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Click "Add New..." → "Project"
3. Import your GitHub repository
4. Vercel will automatically detect it's a Next.js app

**Step 3: Configure Environment Variables in Vercel Dashboard**
In your Vercel project settings, add these environment variables:

```env
# Database (required)
DATABASE_URL=postgresql://username:password@host:port/database

# Authentication (required)
BETTER_AUTH_SECRET=your-very-secure-32-character-secret
BETTER_AUTH_URL=https://your-app.vercel.app
NEXT_PUBLIC_BETTER_AUTH_URL=https://your-app.vercel.app

# Optional optimizations
NODE_ENV=production
```

**Step 4: Deploy**
- Click "Deploy" - Vercel will build and deploy your app
- Your app will be available at a `.vercel.app` URL
- You can add a custom domain later

**Step 5: Setup Production Database**
```bash
# Push schema to your production database
npm run db:push
```

#### Option 2: Docker Deployment (VPS/Cloud Server)

Perfect for DigitalOcean, AWS EC2, Google Cloud, or any server with Docker.

**Step 1: Build Production Image**
```bash
# Build the Docker image
docker build -t codeguide:latest .

# Or with your registry name
docker build -t your-registry/codeguide:latest .
```

**Step 2: Push to Container Registry (Optional)**
```bash
# Tag for Docker Hub
docker tag codeguide:latest yourusername/codeguide:latest

# Push to Docker Hub
docker push yourusername/codeguide:latest
```

**Step 3: Create Production Environment File**
```bash
# Create .env.production
cp .env.example .env.production
```

Edit `.env.production` with production values:
```env
# Production Database
DATABASE_URL=postgresql://postgres:secure_password@postgres:5432/codeguide_prod
POSTGRES_DB=codeguide_prod
POSTGRES_USER=postgres
POSTGRES_PASSWORD=secure_password

# Production Auth
BETTER_AUTH_SECRET=your-very-secure-32-character-secret-here
BETTER_AUTH_URL=https://yourdomain.com
NEXT_PUBLIC_BETTER_AUTH_URL=https://yourdomain.com

# Production Settings
NODE_ENV=production
```

**Step 4: Deploy with Docker Compose**
Create a `docker-compose.prod.yml`:
```yaml
version: '3.8'

services:
  postgres:
    image: postgres:15
    environment:
      POSTGRES_DB: ${POSTGRES_DB}
      POSTGRES_USER: ${POSTGRES_USER}
      POSTGRES_PASSWORD: ${POSTGRES_PASSWORD}
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"
    restart: unless-stopped

  app:
    image: your-registry/codeguide:latest
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=${DATABASE_URL}
      - BETTER_AUTH_SECRET=${BETTER_AUTH_SECRET}
      - BETTER_AUTH_URL=${BETTER_AUTH_URL}
      - NEXT_PUBLIC_BETTER_AUTH_URL=${NEXT_PUBLIC_BETTER_AUTH_URL}
    depends_on:
      - postgres
    restart: unless-stopped

volumes:
  postgres_data:
```

**Step 5: Run Production Deployment**
```bash
# Start production stack
docker-compose -f docker-compose.prod.yml --env-file .env.production up -d

# Push database schema
docker-compose -f docker-compose.prod.yml exec app npm run db:push

# View logs
docker-compose -f docker-compose.prod.yml logs -f
```

#### Option 3: Traditional Server Deployment

Deploy to any server with Node.js installed without Docker.

**Step 1: Build Application**
```bash
# Build for production
npm run build

# Verify build was successful
ls -la .next/
```

**Step 2: Setup Production Server**
```bash
# On your production server:
# 1. Install Node.js 18+
# 2. Install PostgreSQL
# 3. Create database
sudo -u postgres createdb codeguide_prod
```

**Step 3: Deploy Files**
```bash
# Copy built application to server
rsync -avz .next/ package.json .env.production user@server:/var/www/codeguide/

# Or use git clone and build on server
git clone https://github.com/your-username/codeguide.git
cd codeguide
npm ci --production
npm run build
```

**Step 4: Configure and Run**
```bash
# Install PM2 for process management
npm install -g pm2

# Start application with PM2
pm2 start ecosystem.config.js

# Or start directly
NODE_ENV=production npm start
```

Create `ecosystem.config.js` for PM2:
```javascript
module.exports = {
  apps: [{
    name: 'codeguide',
    script: 'node_modules/next/dist/bin/next',
    args: 'start',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    },
    instances: 1,
    exec_mode: 'fork',
    autorestart: true,
    watch: false,
    max_memory_restart: '1G'
  }]
};
```

#### Option 4: Railway

Simple deployment platform with built-in PostgreSQL.

**Step 1: Connect Repository**
1. Go to [railway.app](https://railway.app)
2. Click "New Project" → "Deploy from GitHub repo"
3. Select your repository

**Step 2: Configure Services**
- Railway will automatically detect Next.js
- Add PostgreSQL service from the marketplace
- Railway will provide the DATABASE_URL

**Step 3: Set Environment Variables**
```env
BETTER_AUTH_SECRET=your-secure-secret
BETTER_AUTH_URL=${RAILWAY_PUBLIC_URL}
NEXT_PUBLIC_BETTER_AUTH_URL=${RAILWAY_PUBLIC_URL}
```

**Step 4: Deploy**
- Railway will build and deploy automatically
- Your app will be available at a `.railway.app` URL

### Production Database Setup

#### Managed PostgreSQL Providers
- **Vercel Postgres** - Easiest with Vercel
- **Supabase** - Free tier available
- **PlanetScale** - MySQL-compatible
- **Railway** - Built-in option
- **AWS RDS** - Enterprise solution
- **Google Cloud SQL** - Google's solution

#### Database Migration for Production
```bash
# Push schema to production database
npm run db:push

# Or generate and run migrations
npm run db:generate
npm run db:migrate
```

### SSL/HTTPS Configuration

#### Automatic with Vercel/Railway
- SSL certificates are automatically provisioned
- No configuration needed

#### Manual SSL for Custom Domains
```bash
# Using Certbot with Nginx
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com
```

### Monitoring and Health Checks

#### Application Health Endpoint
Create `app/api/health/route.ts`:
```typescript
export async function GET() {
  return Response.json({
    status: 'ok',
    timestamp: new Date().toISOString()
  });
}
```

#### Docker Health Check
Add to `Dockerfile`:
```dockerfile
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3000/api/health || exit 1
```

#### Monitoring Services
- **Vercel Analytics** - Built-in with Vercel
- **Uptime Robot** - Free monitoring
- **Pingdom** - Paid monitoring
- **Sentry** - Error tracking

### Performance Optimization

#### Build Optimization
```javascript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // For Docker
  experimental: {
    optimizeCss: true,
  },
  images: {
    domains: ['yourdomain.com'],
  },
};

module.exports = nextConfig;
```

#### Caching Strategy
```typescript
// Add caching headers to API routes
export async function GET() {
  return Response.json(data, {
    headers: {
      'Cache-Control': 'public, s-maxage=86400',
    },
  });
}
```

### Backup Strategy

#### Database Backups
```bash
# Manual backup
pg_dump $DATABASE_URL > backup_$(date +%Y%m%d).sql

# Automated backup with cron
0 2 * * * pg_dump $DATABASE_URL | gzip > /backups/db_$(date +\%Y\%m\%d).sql.gz
```

#### Application Backups
```bash
# Backup source code
git archive --format=tar.gz HEAD > backup_$(date +%Y%m%d).tar.gz

# Backup built assets
tar -czf assets_backup_$(date +%Y%m%d).tar.gz .next/
```

### Security Checklist

#### Before Going Live
- [ ] Generate secure `BETTER_AUTH_SECRET`
- [ ] Use HTTPS in production
- [ ] Set up database connection with SSL
- [ ] Configure CORS properly
- [ ] Set up rate limiting on API routes
- [ ] Enable security headers
- [ ] Set up monitoring and alerts
- [ ] Test authentication flows
- [ ] Verify database connections
- [ ] Test error handling

#### Environment Variables Security
```bash
# Never commit .env files
echo ".env" >> .gitignore
echo ".env.production" >> .gitignore

# Use secure secret management
# AWS Secrets Manager, Google Secret Manager, or HashiCorp Vault
```

### Domain Configuration

#### Custom Domain with Vercel
1. In Vercel dashboard, go to "Domains"
2. Add your custom domain
3. Update DNS records as instructed
4. Vercel will automatically provision SSL

#### Custom Domain with Docker
```bash
# Configure Nginx reverse proxy
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## 📊 Project Structure Overview

### Application Architecture
```
codeguide/
├── app/                        # Next.js 15 App Router
│   ├── (marketing)/           # Route group for landing pages
│   │   ├── page.tsx          # Home page with all marketing sections
│   │   ├── layout.tsx        # Layout for marketing pages
│   │   └── components/       # Marketing page components
│   │       ├── hero.tsx      # Hero section with CTA
│   │       ├── features.tsx  # Product features showcase
│   │       ├── testimonials.tsx # Customer testimonials
│   │       ├── pricing.tsx   # Pricing plans and tiers
│   │       └── faq.tsx       # FAQ accordion section
│   ├── (auth)/               # Authentication route group
│   │   ├── sign-in/          # Sign-in page and form
│   │   │   └── page.tsx
│   │   └── sign-up/          # Sign-up page and form
│   │       └── page.tsx
│   ├── dashboard/            # Protected dashboard routes
│   │   ├── page.tsx         # Dashboard home page
│   │   └── layout.tsx       # Dashboard layout with auth check
│   ├── api/                 # API routes (server-side)
│   │   └── auth/           # Authentication endpoints
│   │       └── [...all]/   # Better-auth catch-all route
│   ├── globals.css         # Global CSS with dark mode variables
│   ├── layout.tsx          # Root layout with providers
│   ├── favicon.ico         # Site favicon
│   └── robots.ts           # SEO robots.txt
├── components/              # Reusable React components
│   └── ui/                # shadcn/ui components (40+)
│       ├── button.tsx      # Button component
│       ├── card.tsx        # Card component
│       ├── input.tsx       # Input component
│       └── ...             # 40+ more components
├── lib/                   # Utility functions and configurations
│   ├── auth.ts           # Better-auth configuration
│   ├── utils.ts          # General utility functions
│   └── db.ts             # Database connection utilities
├── db/                   # Database setup and schemas
│   ├── index.ts         # Database connection and client
│   ├── schema.ts        # Database schema definitions
│   └── migrations/      # Database migration files
├── public/              # Static assets (images, fonts)
│   ├── icons/          # Icons and favicons
│   └── images/         # Marketing images
├── docker/              # Docker configuration files
│   └── postgres/       # PostgreSQL initialization scripts
├── hooks/              # Custom React hooks
├── types/              # TypeScript type definitions
├── styles/             # Additional CSS/styling files
├── .env.example        # Environment variables template
├── .gitignore          # Git ignore patterns
├── README.md           # This file
├── package.json        # Dependencies and scripts
├── tsconfig.json       # TypeScript configuration
├── tailwind.config.js  # Tailwind CSS configuration
├── next.config.js      # Next.js configuration
├── drizzle.config.ts   # Drizzle ORM configuration
├── docker-compose.yml  # Development Docker services
├── Dockerfile          # Production Docker image
└── components.json     # shadcn/ui configuration
```

### Key Files and Their Purpose

#### Configuration Files
- **`package.json`** - Dependencies, scripts, and project metadata
- **`next.config.js`** - Next.js framework configuration
- **`tailwind.config.js`** - Tailwind CSS customization
- **`tsconfig.json`** - TypeScript compiler settings
- **`drizzle.config.ts`** - Database ORM configuration

#### Core Application Files
- **`app/layout.tsx`** - Root layout with theme providers and auth setup
- **`app/page.tsx`** - Landing page entry point
- **`lib/auth.ts`** - Authentication configuration with better-auth
- **`db/schema.ts`** - Database table definitions

#### Styling and UI
- **`app/globals.css`** - Global styles and CSS variables for theming
- **`components/ui/`** - 40+ pre-built, accessible UI components
- **`components.json`** - shadcn/ui component configuration

### Component Architecture

#### Marketing Components
Located in `app/(marketing)/components/`:
- **Modular design** - Each section is a separate component
- **Content-driven** - Easy to customize text, images, and CTAs
- **Responsive** - Mobile-first design with Tailwind CSS
- **Accessible** - Semantic HTML and ARIA support

#### Authentication Flow
- **`better-auth` integration** - Modern, secure authentication
- **Protected routes** - Middleware-based route protection
- **Session management** - Secure cookie-based sessions
- **Type-safe** - Full TypeScript integration

#### Database Integration
- **Drizzle ORM** - Type-safe database queries
- **PostgreSQL** - Reliable, scalable database
- **Migration system** - Version-controlled schema changes
- **Development tools** - Database studio and introspection

## 🤝 Contributing Guidelines

### How to Contribute

We welcome contributions from the community! Here's how you can help:

#### Reporting Issues
1. Check [existing issues](https://github.com/your-username/codeguide/issues) first
2. Use the issue templates when available
3. Provide detailed information about the problem
4. Include steps to reproduce the issue
5. Add screenshots if applicable

#### Feature Requests
1. Open an issue with the "enhancement" label
2. Describe the feature you'd like to see
3. Explain why it would be valuable
4. Suggest how it might be implemented

#### Pull Requests
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes with clear, descriptive commits
4. Test your changes thoroughly
5. Submit a pull request with a clear description

### Development Setup for Contributors

```bash
# 1. Fork and clone the repository
git clone https://github.com/your-username/codeguide.git
cd codeguide

# 2. Install dependencies
npm install

# 3. Create a feature branch
git checkout -b feature/your-feature-name

# 4. Set up development environment
cp .env.example .env
npm run db:up
npm run db:push

# 5. Start development server
npm run dev

# 6. Make your changes
# ... code changes ...

# 7. Run tests and linting
npm run lint
npm run build

# 8. Commit and push
git add .
git commit -m "feat: add amazing feature"
git push origin feature/your-feature-name

# 9. Create a pull request
# Go to GitHub and create a PR from your branch
```

### Code Style Guidelines

#### TypeScript/JavaScript
- Use **TypeScript** for all new code
- Follow the existing code style
- Use meaningful variable and function names
- Add JSDoc comments for complex functions
- Prefer `const` over `let` when possible

#### React Components
- Use functional components with hooks
- Follow the component naming convention (PascalCase)
- Use TypeScript interfaces for props
- Add appropriate TypeScript types
- Keep components focused and single-purpose

#### CSS/Styling
- Use **Tailwind CSS** utility classes
- Follow the existing design system
- Use semantic HTML elements
- Ensure mobile-first responsive design
- Test dark mode compatibility

#### Database Changes
- Use **Drizzle ORM** for database operations
- Create migrations for schema changes
- Test migrations in development first
- Update TypeScript types when changing schema

### Testing

Before submitting a pull request, please:

1. **Manual Testing**
   - Test the landing page on mobile and desktop
   - Test sign-up and sign-in flows
   - Test dark mode functionality
   - Test responsive design

2. **Automated Testing** (when implemented)
   ```bash
   npm run test
   npm run test:coverage
   ```

3. **Build Testing**
   ```bash
   npm run build
   npm run lint
   ```

### Pull Request Template

When submitting a PR, include:

```markdown
## Description
Brief description of what you've changed.

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tested manually
- [ ] Added automated tests
- [ ] Build passes successfully

## Checklist
- [ ] Code follows the project's style guidelines
- [ ] Self-review completed
- [ ] Documentation updated if needed
- [ ] No merge conflicts
```

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### What This Means
- ✅ You can use this project for commercial purposes
- ✅ You can modify and distribute the code
- ✅ You can create private forks
- ❌ You must include the original copyright and license
- ❌ No warranty is provided

### License Summary
```
MIT License

Copyright (c) 2024 CodeGuide

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 🏆 Project Badges

Add these badges to your README to show project status and metrics:

```markdown
![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=flat-square&logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)
![Deploy](https://img.shields.io/badge/Deploy-Vercel-black?style=flat-square&logo=vercel)
```

## 🙏 Acknowledgments

This project was made possible by:

- **[Next.js](https://nextjs.org/)** - The React framework for production
- **[Vercel](https://vercel.com)** - Platform for hosting Next.js applications
- **[shadcn/ui](https://ui.shadcn.com/)** - Beautifully designed components
- **[better-auth](https://better-auth.com/)** - Modern authentication solution
- **[Drizzle ORM](https://orm.drizzle.team/)** - Type-safe SQL toolkit
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Lucide](https://lucide.dev/)** - Beautiful & consistent icons
- **[PostgreSQL](https://www.postgresql.org/)** - The world's most advanced open source database

Special thanks to the open-source community for making these amazing tools available.

## 📞 Support & Community

### Getting Help
- 📖 **Documentation**: Check the [documentation/](./documentation/) folder
- 🐛 **Report Issues**: [GitHub Issues](https://github.com/your-username/codeguide/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/your-username/codeguide/discussions)
- 📧 **Email**: support@yourdomain.com

### Community
- 💬 **Discord**: [Join our Discord](https://discord.gg/your-invite)
- 🐦 **Twitter**: [@your-twitter](https://twitter.com/your-twitter)
- 📱 **LinkedIn**: [Your Company](https://linkedin.com/company/your-company)

### Contributing
- 🤝 **Contributors**: See our [contributors list](https://github.com/your-username/codeguide/graphs/contributors)
- 📋 **Roadmap**: Check our [project roadmap](https://github.com/your-username/codeguide/projects)
- 🎯 **Issues**: [Open issues](https://github.com/your-username/codeguide/issues)

---

## 🎉 You're Ready!

Congratulations! You now have a comprehensive understanding of the CodeGuide project. Whether you're:

- 🚀 **Deploying** your application to production
- 💻 **Developing** new features and functionality
- 🎨 **Customizing** the design and content
- 🔧 **Contributing** to the project

You have all the information you need to succeed.

**Happy coding! 🚀**

---

*Last updated: October 2024*

## 🎨 Customization Guide

### Brand Colors
Update `tailwind.config.js` to match your brand:

```javascript
theme: {
  extend: {
    colors: {
      border: "hsl(var(--border))",
      background: "hsl(var(--background))",
      // Add your custom colors here
    }
  }
}
```

### Landing Page Content
Edit the marketing section components in `app/(marketing)/components/`:
- `hero.tsx` - Update headline and CTA
- `features.tsx` - Add your product features
- `testimonials.tsx` - Include customer quotes
- `pricing.tsx` - Set up pricing tiers
- `faq.tsx` - Add frequently asked questions

### Dashboard Features
Extend the protected dashboard in `app/dashboard/`:
- Add new routes under `/dashboard/`
- Create dashboard-specific components
- Integrate with your API endpoints

## 🔒 Security Features

- **Secure Authentication** - Password hashing, session management
- **Protected Routes** - Dashboard only accessible to authenticated users
- **Environment Variables** - Sensitive data never committed to git
- **CSRF Protection** - Built-in with better-auth
- **Type Safety** - Catch issues at compile time with TypeScript

## 📱 Responsive Design

CodeGuide is built mobile-first:
- **Mobile** - Optimized for phones and small screens
- **Tablet** - Adaptive layouts for tablets
- **Desktop** - Full-featured desktop experience
- **Dark Mode** - Automatic system preference detection

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Development Setup
```bash
# Fork the repository
git clone https://github.com/your-username/codeguide.git
cd codeguide
npm install
npm run dev
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [codeguide-starter](https://github.com/codeguide-starter) template
- UI components by [shadcn/ui](https://ui.shadcn.com/)
- Authentication by [better-auth](https://better-auth.com/)
- Icons by [Lucide](https://lucide.dev/)

---

## 📞 Support

If you have any questions or need help getting started:

- 📖 Check the [documentation](./documentation/)
- 🐛 [Report an issue](https://github.com/your-username/codeguide/issues)
- 💬 Join our [Discord community](https://discord.gg/your-invite)

**Happy coding! 🚀**