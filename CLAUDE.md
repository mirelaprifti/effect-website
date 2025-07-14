# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Content (Documentation Site)
Located in `/content/` directory:
- `pnpm dev` - Start development server
- `pnpm build` - Build for production (includes type checking with `astro check`)
- `pnpm build:modules` - Build JavaScript modules for open-in-playground feature
- `pnpm preview` - Preview built site locally

### Landing Page
Located in `/landing/` directory:
- `pnpm dev` - Start Next.js development server
- `pnpm build` - Build Next.js application
- `pnpm check` - TypeScript type checking
- `pnpm lint` - ESLint linting
- `pnpm start` - Start production server

## Project Architecture

This is a monorepo containing the Effect ecosystem website with two main applications:

### 1. Content Site (`/content/`)
- **Framework**: Astro with Starlight for documentation
- **Key Features**:
  - Interactive playground with Monaco editor and WebContainer
  - Documentation with TypeScript twoslash integration
  - Blog with multiple author support
  - Podcast functionality with transcripts
  - Trace viewer for observability
  - Open Graph image generation
- **UI Components**: React with Radix UI and Tailwind CSS
- **Deployment**: Vercel with server-side rendering

### 2. Landing Page (`/landing/`)
- **Framework**: Next.js 14 with App Router
- **UI**: React with Tailwind CSS and Framer Motion
- **Features**: Marketing site with animations and responsive design

## Key Technical Details

### Effect Integration
- Heavy use of Effect library (`effect` package) for functional programming patterns
- Integration with Effect ecosystem packages:
  - `@effect/platform` - Platform abstractions
  - `@effect/ai` - AI integration
  - `@effect/rpc` - RPC communication
  - `@effect/opentelemetry` - Observability

### Development Environment
- **Package Manager**: pnpm (version 9.10.0)
- **TypeScript**: Strict configuration with latest features
- **Build Tools**: Astro for content, Next.js for landing
- **Deployment**: Vercel with environment-specific domains

### Interactive Features
- Monaco editor integration for code editing
- WebContainer API for running code in browser
- Trace viewer for debugging Effect applications
- Real-time terminal emulation with xterm.js

### Content Management
- MDX for documentation with custom components
- Starlight for documentation structure
- Blog system with author management
- Podcast episodes with SRT transcript support

## File Structure Notes

- `/content/src/components/editor/` - Interactive playground components
- `/content/src/plugins/` - Custom Astro and Vite plugins
- `/content/src/content/docs/` - Documentation content
- `/content/src/content/docs/blog/` - Blog posts
- `/landing/src/components/` - Landing page components
- `/landing/src/app/` - Next.js App Router pages

## Development Workflow

1. Content changes are made in `/content/`
2. Landing page changes are made in `/landing/`
3. Both applications can be developed independently
4. Use appropriate package.json scripts for each directory
5. TypeScript checking is available for both applications