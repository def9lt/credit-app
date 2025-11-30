# Overview

This is a full-stack web application for a premium credit consulting service targeting Russian-speaking clients. The application provides information about various credit services including mortgages, auto loans, consumer credit, refinancing, and business lending solutions. It's built as a modern single-page application with a professional landing page showcasing services, features, testimonials, and contact information.

The application uses a React-based frontend with TypeScript and a Node.js/Express backend, following a monorepo structure with shared types and schemas. The project is designed to be deployed on Replit with development-friendly tooling and hot module replacement.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

**Technology Stack:**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server for fast HMR and optimized production builds
- Wouter for lightweight client-side routing
- TanStack React Query for server state management and data fetching
- Tailwind CSS for utility-first styling with a custom design system

**UI Component System:**
- shadcn/ui component library (New York style) providing a comprehensive set of accessible, customizable components built on Radix UI primitives
- Custom theme using CSS variables for consistent color palette (primary, secondary, destructive, muted, accent)
- Responsive breakpoint system: xs(360px), sm(480px), md(768px), lg(1024px), xl(1280px), 2xl(1440px)
- Component structure organized under `client/src/components/ui/` with form controls, dialogs, navigation, and data display components

**Project Structure:**
- `client/src/App.tsx` - Main application entry with routing setup
- `client/src/pages/` - Page components including landing page sections
- `client/src/components/ui/` - Reusable UI components from shadcn/ui
- `client/src/hooks/` - Custom React hooks (mobile detection, toast notifications)
- `client/src/lib/` - Utility functions and query client configuration

## Backend Architecture

**Technology Stack:**
- Express.js framework for HTTP server and API routing
- TypeScript with ESM module system
- Development server with Vite integration for middleware mode serving

**Server Structure:**
- `server/index.ts` - Express application setup with middleware and error handling
- `server/routes.ts` - API route registration (currently minimal, ready for expansion)
- `server/storage.ts` - Data access layer with interface-based design
- `server/vite.ts` - Development server configuration with HMR support

**Storage Layer Design:**
- Interface-based storage pattern (`IStorage`) for flexibility and testability
- In-memory implementation (`MemStorage`) for development/prototyping
- Methods for user management: `getUser()`, `getUserByUsername()`, `createUser()`
- UUID-based entity identification using Node.js `crypto.randomUUID()`

**Rationale:** The interface pattern allows easy switching between storage implementations (in-memory → database) without changing business logic. This is ideal for rapid prototyping while maintaining production-ready architecture.

## Data Storage Solutions

**Database Configuration:**
- Drizzle ORM configured for PostgreSQL with the `@neondatabase/serverless` driver
- Schema defined in `shared/schema.ts` for type-safe database operations
- Migration support via `drizzle-kit` with migrations stored in `./migrations/`

**Schema Design:**
- `users` table with UUID primary keys, username (unique), and password fields
- Zod integration through `drizzle-zod` for runtime validation
- Shared types exported for use across frontend and backend

**Current State:** The application is configured for PostgreSQL but currently uses in-memory storage. The database schema exists and is ready to be activated when a DATABASE_URL environment variable is provided.

## Authentication & Authorization

**Current Implementation:**
- User schema includes username/password fields
- Session support prepared via `connect-pg-simple` for PostgreSQL session store
- No active authentication middleware implemented yet

**Design Approach:** The application is structured to add authentication later, with user types and storage methods already defined. The `apiRequest` function in the query client supports credential-based requests.

## External Dependencies

**Third-Party Services:**
- Neon Database (PostgreSQL serverless) - configured but not actively used
- Google Fonts API - loading custom fonts (Architects Daughter, DM Sans, Fira Code, Geist Mono)

**Key NPM Packages:**
- `@radix-ui/*` - Accessible component primitives (27 packages for dialogs, menus, forms, etc.)
- `@tanstack/react-query` - Server state management
- `drizzle-orm` & `drizzle-zod` - Database ORM and validation
- `class-variance-authority` & `clsx` - CSS class composition utilities
- `tailwindcss` - Utility-first CSS framework
- `wouter` - Lightweight routing library
- `zod` - TypeScript-first schema validation

**Development Tools:**
- `@replit/vite-plugin-*` - Replit-specific development enhancements (runtime error overlay, cartographer, dev banner)
- `tsx` - TypeScript execution for development server
- `esbuild` - Fast bundling for production server code

**Asset Management:**
- Static assets referenced from `/figmaAssets/` directory (SVG icons and images)
- Vite alias configuration for `@/` (client src), `@shared/` (shared schemas), `@assets/` (attached assets)

## Build & Deployment

**Development Workflow:**
- `npm run dev` - Runs TypeScript server with Vite middleware for HMR
- Hot module replacement for both client and server code changes
- Request logging middleware for API calls with response capture

**Production Build:**
- `npm run build` - Vite build for client + esbuild bundle for server
- Client output: `dist/public/`
- Server output: `dist/index.js` (ESM format, external packages)
- `npm start` - Runs production server from bundled code

**Environment Requirements:**
- `NODE_ENV` - development/production mode switching
- `DATABASE_URL` - PostgreSQL connection string (required for database operations)
- `REPL_ID` - Replit environment detection for conditional plugin loading