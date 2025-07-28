# Crescent Community Radio Website

## Overview

This is a web application for Crescent Community Radio (97.0 FM), a community radio station based in Rochdale. The application is built as a modern full-stack web application using React for the frontend, Express.js for the backend, and PostgreSQL with Drizzle ORM for database management. The site showcases the radio station's programming, presenters, live streaming capabilities, and community engagement features.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a monorepo structure with clear separation between client and server code:

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **UI Framework**: Radix UI components with shadcn/ui design system
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Style**: RESTful API with `/api` prefix routing
- **Development**: Hot reload with Vite integration in development mode

### Database Architecture
- **Database**: PostgreSQL (configured for Neon serverless)
- **ORM**: Drizzle ORM with TypeScript schema definitions
- **Migrations**: Drizzle Kit for schema management
- **Storage Interface**: Abstracted storage layer with in-memory fallback for development

## Key Components

### Client-Side Components
1. **Navigation**: Sticky header with smooth scrolling navigation
2. **Hero Section**: Landing area with live status indicator and call-to-action buttons
3. **Audio Player**: Live streaming interface with volume controls and current show display
4. **Schedule Grid**: Weekly programming schedule in a responsive grid layout
5. **Presenter Cards**: Display grid for radio show hosts with photos and descriptions
6. **Contact Form**: Contact form with validation and toast notifications

### Data Management
1. **Presenters Data**: Static data structure for radio show hosts and their programs
2. **Schedule Data**: Weekly programming schedule with show types and timing
3. **Query Client**: Centralized API request handling with caching and error management

### UI System
1. **Design System**: Complete shadcn/ui component library implementation
2. **Theming**: Custom CSS variables for Crescent Radio brand colors (green, gold)
3. **Typography**: Custom font integration (Amiri for Arabic-style headings, Inter for body text)
4. **Responsive Design**: Mobile-first responsive layout with Tailwind breakpoints

## Data Flow

### Client-Side Flow
1. User navigates to the application
2. React Router (Wouter) handles client-side routing
3. TanStack Query manages API calls and caching
4. Components receive data through props or query hooks
5. UI updates reactively based on state changes

### API Flow (Prepared Structure)
1. Express server receives requests on `/api` routes
2. Storage interface abstracts database operations
3. Drizzle ORM handles PostgreSQL queries
4. JSON responses sent back to client
5. Error handling middleware catches and formats errors

### Database Schema
- **Users Table**: Basic user management with username/password authentication
- **Schema Validation**: Zod schemas for type-safe data validation
- **Migrations**: Version-controlled database schema changes

## External Dependencies

### Core Framework Dependencies
- React ecosystem (React, React DOM, React Query)
- Express.js for server framework
- Drizzle ORM and PostgreSQL driver (@neondatabase/serverless)
- Vite for build tooling and development server

### UI and Styling Dependencies
- Complete Radix UI component suite for accessible primitives
- Tailwind CSS for utility-first styling
- Lucide React for consistent iconography
- Class Variance Authority for component variant management

### Development Dependencies
- TypeScript for type safety
- ESBuild for server-side bundling
- TSX for TypeScript execution in development
- Various Replit-specific plugins for development environment

### Form and Validation
- React Hook Form with Hookform Resolvers
- Zod for schema validation
- Date-fns for date manipulation

## Deployment Strategy

### Development Environment
- Vite development server with hot module replacement
- Express server with middleware integration
- Replit-specific development tools and error overlays
- File watching and automatic restarts

### Production Build Process
1. **Client Build**: Vite builds React application to `dist/public`
2. **Server Build**: ESBuild bundles Express server to `dist/index.js`
3. **Static Assets**: Client build output served by Express in production
4. **Environment Variables**: Database URL and other config via environment variables

### Database Deployment
- PostgreSQL database (configured for Neon serverless)
- Migration strategy using Drizzle Kit push commands
- Environment-based database URL configuration
- Session storage using connect-pg-simple for PostgreSQL sessions

### Hosting Considerations
- Node.js production environment
- Static file serving through Express
- CORS and security middleware ready for production
- Error handling and logging configured for production debugging