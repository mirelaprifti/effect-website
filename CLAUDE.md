# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Content (Documentation Site)
Located in `/content/` directory:
- `pnpm dev` - Start development server
- `pnpm build` - Build for production (includes type checking with `astro check`)
- `pnpm build:modules` - Build JavaScript modules for open-in-playground feature
- `pnpm build:open-in-playground` - Build JavaScript module for the playground feature
- `pnpm preview` - Preview built site locally

### Landing Page
Located in `/landing/` directory:
- `pnpm dev` - Start Next.js development server
- `pnpm build` - Build Next.js application
- `pnpm check` - TypeScript type checking
- `pnpm lint` - ESLint linting
- `pnpm start` - Start production server
- `pnpm pull-env` - Pull environment variables from Vercel

## Project Architecture

This is a monorepo containing the Effect ecosystem website with two independent applications (no root package.json or workspace configuration):

### 1. Content Site (`/content/`)
- **Framework**: Astro with Starlight for documentation
- **Key Features**:
  - Interactive playground with Monaco editor and WebContainer
  - Documentation with TypeScript twoslash integration (via Expressive Code)
  - Blog with multiple author support (Starlight blog plugin)
  - Podcast functionality with SRT transcript support
  - Trace viewer for observability
  - Open Graph image generation
  - YouTube video embeds integration
  - RSS feed generation
- **UI Components**: React with Radix UI and Tailwind CSS
- **Deployment**: Vercel with server-side rendering and special CORS headers for WebWorker files

### 2. Landing Page (`/landing/`)
- **Framework**: Next.js 14.2.11 with App Router
- **UI**: React with Tailwind CSS, Radix UI, and Framer Motion
- **Features**: 
  - Marketing site with animations and responsive design
  - Dark mode support via next-themes
  - Syntax highlighting with Shikiji
  - TypeScript build errors ignored in production (`ignoreBuildErrors: true`)

## Key Technical Details

### Effect Integration
- Heavy use of Effect library (`effect` package) for functional programming patterns
- Integration with Effect ecosystem packages:
  - `@effect/platform` - Platform abstractions
  - `@effect/ai` - AI integration with Anthropic and OpenAI providers
  - `@effect/rpc` - RPC communication
  - `@effect/opentelemetry` - Observability
  - `@effect/experimental` - Experimental features
  - `@effect/monaco-editor` - Monaco editor integration
  - `@effect/sql` - SQL database support

### Development Environment
- **Package Manager**: pnpm (version 9.10.0 - enforced via packageManager field)
- **TypeScript**: Strict configuration with latest features
  - Content site extends `astro/tsconfigs/strictest`
  - Landing page uses ES2022 target with strict mode
  - Both use path aliases (`@/*`)
- **Build Tools**: Astro for content, Next.js for landing
- **Deployment**: Vercel with environment-specific domains
- **Nix Support**: Flake configuration available for consistent development environment

### Interactive Features
- Monaco editor integration for code editing
- WebContainer API for running code in browser
- Trace viewer for debugging Effect applications
- Real-time terminal emulation with xterm.js
- TypeScript code snippets with Twoslash hover information
- Monitoring via Sentry (through OpenTelemetry) and Vercel Speed Insights

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

## Deployment Architecture

The site uses a proxy configuration to route traffic between multiple Vercel deployments:
- **Proxy**: `website-proxy-sage.vercel.app` - Main entry point with routing rules
- **Landing Page**: `website-landing-seven.vercel.app`
- **Content Site**: `website-content-beta.vercel.app`
- **Webflow**: `webflow.effect.website` - For events and merchandise

Routing rules in `/proxy/vercel.json` handle:
- Blog post redirects from old URLs
- Documentation path rewrites
- Integration between different site sections

## Additional Notes

- **Patched Dependencies**: Content site patches `astro-tweet` package
- **External Image Sources**: Configured to load images from Twitter, GitHub, Discord, and other CDNs
- **TypeScript Execution**: Uses `tsx` for running TypeScript files directly
- **CORS Configuration**: Special headers for WebWorker files in content site