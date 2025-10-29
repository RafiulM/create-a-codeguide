# Codeguide Starter Fullstack

**Codeguide** is a comprehensive full-stack web application starter template built on the codeguide-starter foundation. This powerful template combines a professional marketing landing page with a secure, feature-rich dashboard - everything you need to launch your SaaS product or web application quickly and efficiently.

## 🎯 Project Overview

Codeguide Starter Fullstack is designed as a complete foundation for modern web applications that need both public-facing marketing content and protected user areas. Built with cutting-edge technologies and following best practices, this template provides:

- **Marketing Landing Page**: Hero section, features showcase, testimonials, pricing tables, and FAQ section to convert visitors
- **Protected Dashboard**: Secure user-only area with authentication, personalized content, and data management
- **Modern Stack**: Built with Next.js 15, TypeScript, and industry-leading libraries
- **Production Ready**: Optimized for deployment with Docker, CI/CD, and cloud platform integration

## 🛠 Technology Stack

### Frontend Framework
- **[Next.js 15](https://nextjs.org/)**: React framework with App Router and Turbopack for optimal performance
- **[React 18+](https://reactjs.org/)**: Latest React with server components and concurrent features
- **[TypeScript](https://www.typescriptlang.org/)**: End-to-end type safety and enhanced developer experience

### Styling & UI
- **[Tailwind CSS v4](https://tailwindcss.com/)**: Utility-first CSS framework with modern features
- **[shadcn/ui](https://ui.shadcn.com/)**: 40+ high-quality, accessible UI components (New York style)
- **[next-themes](https://github.com/pacocoursey/next-themes)**: Perfect dark mode implementation with system preference detection
- **[Lucide React](https://lucide.dev/)**: Beautiful, consistent icon set

### Authentication & Security
- **[Better Auth](https://better-auth.com/)**: Modern, secure authentication library with excellent TypeScript support
- **Session Management**: Secure cookie-based sessions with proper security headers
- **Password Security**: bcrypt hashing with salt rounds

### Database & ORM
- **[PostgreSQL](https://www.postgresql.org/)**: Powerful, open-source relational database
- **[Drizzle ORM](https://orm.drizzle.team/)**: Type-safe SQL query builder with excellent performance
- **Database Migrations**: Version-controlled schema management

### Development Tools
- **[ESLint](https://eslint.org/)**: Code linting and consistency
- **[Prettier](https://prettier.io/)**: Code formatting and style guide
- **[TypeScript](https://www.typescriptlang.org/)**: Static type checking and IntelliSense

### Containerization & Deployment
- **[Docker](https://www.docker.com/)**: Containerization with multi-stage builds
- **[Docker Compose](https://docs.docker.com/compose/)**: Multi-container orchestration for development and production

## Prerequisites

Before you begin, ensure you have the following:
- Node.js 18+ installed
- Docker and Docker Compose (for database setup)
- Generated project documents from [CodeGuide](https://codeguide.dev/) for best development experience

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js 18+** and npm/yarn/pnpm package manager
- **PostgreSQL** (local installation or Docker)
- **Git** for version control
- **Docker and Docker Compose** (recommended for database setup)

### Step 1: Clone the Repository

```bash
git clone https://github.com/your-username/codeguide-starter-fullstack.git
cd codeguide-starter-fullstack
```

### Step 2: Install Dependencies

Choose your preferred package manager:

```bash
# Using npm
npm install

# Using yarn
yarn install

# Using pnpm (recommended for faster installs)
pnpm install
```

### Step 3: Environment Configuration

1. **Copy the environment file:**
   ```bash
   cp .env.example .env
   ```

2. **Configure your environment variables:**
   ```env
   # Database Configuration
   DATABASE_URL=postgresql://postgres:postgres@localhost:5433/postgres
   POSTGRES_DB=postgres
   POSTGRES_USER=postgres
   POSTGRES_PASSWORD=postgres

   # Authentication Configuration
   BETTER_AUTH_SECRET=your-very-secure-secret-key-here
   BETTER_AUTH_URL=http://localhost:3000
   NEXT_PUBLIC_BETTER_AUTH_URL=http://localhost:3000
   ```

   **Important**: Generate a secure `BETTER_AUTH_SECRET` using:
   ```bash
   openssl rand -base64 32
   # or
   node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
   ```

### Step 4: Database Setup

#### Option A: Docker Setup (Recommended)

1. **Start PostgreSQL with Docker:**
   ```bash
   npm run db:up
   ```
   This starts PostgreSQL on port 5433 with default credentials.

2. **Push database schema:**
   ```bash
   npm run db:push
   ```

#### Option B: Local PostgreSQL Setup

1. **Create a PostgreSQL database:**
   ```sql
   CREATE DATABASE codeguide_starter;
   CREATE USER codeguide_user WITH PASSWORD 'your_password';
   GRANT ALL PRIVILEGES ON DATABASE codeguide_starter TO codeguide_user;
   ```

2. **Update your .env file:**
   ```env
   DATABASE_URL=postgresql://codeguide_user:your_password@localhost:5432/codeguide_starter
   ```

3. **Run database migrations:**
   ```bash
   npm run db:push
   ```

### Step 5: Start Development Server

```bash
# Using npm
npm run dev

# Using yarn
yarn dev

# Using pnpm
pnpm dev
```

### Step 6: Verify Your Setup

1. **Open your browser** and navigate to [http://localhost:3000](http://localhost:3000)
2. **You should see:**
   - The marketing landing page with hero section
   - Working navigation between sections
   - Dark mode toggle functionality
3. **Test authentication:**
   - Click "Sign In" and navigate to the authentication pages
   - Try creating a new account
   - Access the protected dashboard after signing in

### Step 7: Development Workflow

```bash
# Start/restart database (if needed)
npm run db:up

# Start development server
npm run dev

# In another terminal, view database
npm run db:studio
```

## 🔧 Troubleshooting Common Issues

### Database Connection Issues

**Problem**: `ECONNREFUSED` or database connection errors
```bash
# Check if PostgreSQL is running
npm run db:up

# Verify database exists
docker exec -it postgres-container psql -U postgres -c "\l"

# Reset database if needed
npm run db:reset
```

### Port Already in Use

**Problem**: Port 3000 or 5433 already occupied
```bash
# Find what's using the port
lsof -i :3000
lsof -i :5433

# Kill the process
kill -9 <PID>

# Or use different ports in .env
PORT=3001 npm run dev
```

### Environment Variable Issues

**Problem**: Authentication not working
```bash
# Verify your .env file exists and has correct values
cat .env

# Regenerate auth secret if needed
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"

# Restart development server after changes
npm run dev
```

### Dependencies Issues

**Problem**: Module not found or build errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Check Node.js version
node --version  # Should be 18+
```

## 🌐 Deployment

### Environment Variables for Production

Create a `.env.production` file or configure these variables in your hosting platform:

```env
# Database Configuration (Required)
DATABASE_URL=postgresql://user:password@host:port/database

# Authentication (Required)
BETTER_AUTH_SECRET=generate-a-very-secure-32-character-key
BETTER_AUTH_URL=https://yourdomain.com
NEXT_PUBLIC_BETTER_AUTH_URL=https://yourdomain.com

# Optional Optimizations
NODE_ENV=production
NEXTAUTH_URL=https://yourdomain.com
```

### Deployment Options

#### Option 1: Vercel (Recommended for Next.js)

**Prerequisites:**
- Vercel account
- Managed PostgreSQL database (Supabase, Neon, or AWS RDS)

**Steps:**
1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy to Vercel:**
   ```bash
   vercel
   ```

3. **Configure Environment Variables in Vercel Dashboard:**
   - `DATABASE_URL`: Your managed PostgreSQL connection string
   - `BETTER_AUTH_SECRET`: Generate a secure secret
   - `BETTER_AUTH_URL`: Your Vercel deployment URL
   - `NEXT_PUBLIC_BETTER_AUTH_URL`: Same as above

4. **Setup Database:**
   ```bash
   # Push schema to your managed database
   npm run db:push
   ```

#### Option 2: Docker Compose (VPS/Cloud Server)

**Prerequisites:**
- Ubuntu/CentOS server with Docker and Docker Compose
- Domain name (optional but recommended)

**Steps:**
1. **Clone and setup on your server:**
   ```bash
   git clone https://github.com/your-username/codeguide-starter-fullstack.git
   cd codeguide-starter-fullstack
   cp .env.example .env
   ```

2. **Configure production environment:**
   ```bash
   # Edit .env with production values
   DATABASE_URL=postgresql://postgres:your_secure_password@postgres:5432/postgres
   POSTGRES_DB=postgres
   POSTGRES_USER=postgres
   POSTGRES_PASSWORD=your_secure_password
   BETTER_AUTH_SECRET=your-very-secure-secret-key
   BETTER_AUTH_URL=https://yourdomain.com
   NEXT_PUBLIC_BETTER_AUTH_URL=https://yourdomain.com
   ```

3. **Deploy with Docker Compose:**
   ```bash
   docker-compose up -d
   ```

4. **Setup SSL with Nginx (Recommended):**
   ```bash
   # Install Nginx and Certbot
   sudo apt update
   sudo apt install nginx certbot python3-certbot-nginx

   # Configure Nginx reverse proxy
   # Edit /etc/nginx/sites-available/yourdomain

   # Obtain SSL certificate
   sudo certbot --nginx -d yourdomain.com
   ```

#### Option 3: AWS/GCP/Azure Container Services

**Steps:**
1. **Build and push to container registry:**
   ```bash
   # Build the image
   docker build -t your-registry/codeguide-starter-fullstack:latest .

   # Push to registry
   docker push your-registry/codeguide-starter-fullstack:latest
   ```

2. **Deploy using your cloud provider's container service:**
   - **AWS**: ECS or App Runner
   - **Google Cloud**: Cloud Run
   - **Azure**: Container Instances

3. **Configure environment variables** in your cloud provider's console

### Production Considerations

- **Database**: Use managed PostgreSQL (AWS RDS, Google Cloud SQL, Supabase, Neon)
- **Security**: Generate strong secrets, enforce HTTPS, implement rate limiting
- **Performance**: Enable Next.js standalone output, configure CDN
- **Monitoring**: Add logging, health checks, and error tracking
- **Backups**: Regular automated database backups
- **Scaling**: Consider load balancers for high-traffic applications

### Health Checks

The application includes built-in health checks. For production deployment:

```dockerfile
# In Dockerfile, add health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3000/api/health || exit 1
```

### Monitoring and Logging

Recommended monitoring tools:
- **Error Tracking**: Sentry
- **Performance**: Vercel Analytics or CloudWatch
- **Uptime**: UptimeRobot or Pingdom
- **Logs**: Papertrail or Logtail

## ✨ Features

### 🏠 Marketing Landing Page
- **Hero Section**: Eye-catching headline with compelling call-to-action
- **Features Showcase**: Detailed presentation of product capabilities
- **Social Proof**: Customer testimonials and success stories
- **Pricing Tables**: Clear, competitive pricing options
- **FAQ Section**: Comprehensive answers to common questions
- **Responsive Design**: Perfect on all devices and screen sizes

### 🔐 Authentication & Security
- **Better Auth Integration**: Modern, secure authentication system
- **Email/Password Login**: Traditional authentication with secure password handling
- **Session Management**: Secure token-based sessions
- **Protected Routes**: Server-side route protection for sensitive areas
- **User Account Management**: Complete user profile and settings management

### 🎨 User Interface & Experience
- **40+ shadcn/ui Components**: Professional, accessible UI components (New York style)
- **Dark Mode Support**: Automatic system preference detection with manual toggle
- **Responsive Design**: Mobile-first approach with TailwindCSS v4
- **Smooth Animations**: Subtle micro-interactions and transitions
- **Accessibility**: WCAG compliant components and navigation

### 🚀 Technology & Performance
- **Next.js 15 App Router**: Latest React framework with server components
- **TypeScript**: Full type safety across the entire application
- **Turbopack**: Lightning-fast development and build times
- **Server Components**: Optimized server-side rendering for better performance
- **SEO Optimized**: Built-in meta tags, structured data, and sitemap generation

### 🗄️ Database & Data Management
- **PostgreSQL Integration**: Robust, scalable database solution
- **Drizzle ORM**: Type-safe database operations with excellent DX
- **Database Migrations**: Version-controlled schema changes
- **Query Optimization**: Efficient data fetching and caching strategies

### 🐳 Development & Deployment
- **Docker Support**: Complete containerization with multi-stage builds
- **Development Scripts**: Comprehensive npm scripts for common tasks
- **Environment Management**: Secure configuration for different environments
- **Production Ready**: Optimized builds and deployment configurations

## 📁 Project Structure

```
codeguide-starter-fullstack/
├── app/                        # Next.js App Router directory
│   ├── (auth)/                # Authentication routes group
│   │   ├── sign-in/           # Sign-in page and layout
│   │   └── sign-up/           # Sign-up page and layout
│   ├── dashboard/             # Protected dashboard routes
│   │   ├── layout.tsx         # Dashboard layout wrapper
│   │   └── page.tsx           # Dashboard home page
│   ├── api/                   # API routes
│   │   └── auth/              # Authentication API endpoints
│   ├── globals.css            # Global styles with dark mode variables
│   ├── layout.tsx             # Root layout with theme providers
│   └── page.tsx               # Landing/marketing page
├── components/                # React components
│   ├── ui/                    # shadcn/ui components (40+ components)
│   │   ├── button.tsx         # Button component with variants
│   │   ├── card.tsx           # Card component for content sections
│   │   ├── input.tsx          # Input field component
│   │   └── ...                # Other UI components
│   ├── hero.tsx               # Landing page hero section
│   ├── features.tsx           # Features showcase component
│   ├── testimonials.tsx       # Customer testimonials
│   ├── pricing.tsx            # Pricing plans display
│   └── faq.tsx                # FAQ accordion section
├── db/                        # Database configuration and schemas
│   ├── index.ts               # Database connection setup
│   └── schema/                # Database table definitions
│       └── auth.ts            # User authentication schema
├── docker/                    # Docker configuration files
│   └── postgres/              # PostgreSQL initialization scripts
├── hooks/                     # Custom React hooks
│   └── use-theme.ts           # Theme management hook
├── lib/                       # Utility functions and configurations
│   ├── auth.ts                # Better Auth configuration
│   ├── utils.ts               # General utility functions
│   └── db.ts                  # Database utility functions
├── auth-schema.ts             # Authentication schema definitions
├── components.json            # shadcn/ui configuration
├── docker-compose.yml         # Docker services orchestration
├── docker-compose.dev.yml     # Development Docker configuration
├── Dockerfile                 # Application container definition
├── drizzle.config.ts          # Drizzle ORM configuration
├── tailwind.config.ts         # Tailwind CSS configuration
├── tsconfig.json              # TypeScript configuration
├── next.config.js             # Next.js configuration
└── package.json               # Project dependencies and scripts
```

### Architecture Patterns

#### App Router Structure
- **Server Components**: By default, all components are server components for optimal performance
- **Client Components**: Marked with `"use client"` directive for interactivity
- **Route Groups**: Organized using parentheses for logical grouping without affecting URL structure
- **Layouts**: Shared layouts provide consistent UI across routes

#### Authentication Flow
- **Protected Routes**: Dashboard routes are protected with middleware
- **Session Management**: Server-side session handling with secure cookies
- **API Routes**: RESTful API endpoints for authentication operations

#### Database Architecture
- **Type Safety**: End-to-end type safety from database to frontend
- **Schema-First**: Database schemas defined with TypeScript types
- **Migration System**: Version-controlled database schema changes

## Database Integration

This starter includes modern database integration:

- **Drizzle ORM** for type-safe database operations
- **PostgreSQL** as the database provider
- **Better Auth** integration with Drizzle adapter
- **Database migrations** with Drizzle Kit

## Development Commands

### Application
- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production with Turbopack
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### Database
- `npm run db:up` - Start PostgreSQL in Docker
- `npm run db:down` - Stop PostgreSQL container
- `npm run db:dev` - Start development PostgreSQL (port 5433)
- `npm run db:dev-down` - Stop development PostgreSQL
- `npm run db:push` - Push schema changes to database
- `npm run db:generate` - Generate Drizzle migration files
- `npm run db:studio` - Open Drizzle Studio (database GUI)
- `npm run db:reset` - Reset database (drop all tables and recreate)

### Styling with shadcn/ui
- Pre-configured with 40+ shadcn/ui components in New York style
- Components are fully customizable and use CSS variables for theming
- Automatic dark mode support with next-themes integration
- Add new components: `npx shadcn@latest add [component-name]`

### Docker
- `npm run docker:build` - Build application Docker image
- `npm run docker:up` - Start full application stack (app + database)
- `npm run docker:down` - Stop all containers
- `npm run docker:logs` - View container logs
- `npm run docker:clean` - Stop containers and clean up volumes

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

### Development Workflow
```bash
# Option 1: Database only (develop app locally)
npm run db:up          # Start PostgreSQL
npm run dev            # Start Next.js development server

# Option 2: Full Docker stack
npm run docker:up      # Start both app and database
```

### Docker Services

The `docker-compose.yml` includes:

- **postgres**: Main PostgreSQL database (port 5432)
- **postgres-dev**: Development database (port 5433) - use `--profile dev`
- **app**: Next.js application container (port 3000)

### Docker Profiles

```bash
# Start development database on port 5433
docker-compose --profile dev up postgres-dev -d

# Or use the npm script
npm run db:dev
```


## 🤖 AI Coding Agent Integration

This starter is optimized for AI coding agents and assistants:

- **Clear file structure** and consistent naming conventions
- **TypeScript integration** with proper type definitions throughout
- **Modern authentication** patterns with Better Auth
- **Database schema** examples and migrations included
- **Component organization** following React and Next.js best practices

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Development Guidelines
- Follow the existing code style and conventions
- Use TypeScript for all new code
- Add proper error handling and loading states
- Test your changes before submitting PRs
- Update documentation as needed

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ using [CodeGuide](https://codeguide.dev/)**
