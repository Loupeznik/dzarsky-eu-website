# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website built with Astro 5 and SolidJS. The site is server-side rendered with interactive islands using SolidJS for client-side interactivity (primarily the contact form). Content is managed through TypeScript configuration files in `src/config/`.

## Development Commands

```bash
pnpm dev              # Start dev server (http://localhost:4321)
pnpm build            # Build for production
pnpm preview          # Preview production build (required before tests)
pnpm lint:check       # Check code with Biome
pnpm lint             # Auto-fix issues with Biome
pnpm format           # Format code with Biome
pnpm astro check      # TypeScript type checking
pnpm test             # Run E2E tests (requires build first)
pnpm test:ui          # Run tests in UI mode
pnpm test:debug       # Debug tests
pnpm docker:build     # Build Docker image
pnpm docker:run       # Run container on port 8080
```

## Architecture

### Framework and Rendering
- **Astro 5** with static site generation (SSG)
- **SolidJS** for interactive components (islands architecture)
- All pages are `.astro` files that can embed SolidJS components for client-side interactivity
- Site renders at build time, hydrating only the SolidJS islands on the client

### Component Organization
- `src/components/layout/` - Layout components (Navigation, Footer, BaseHead)
- `src/components/sections/` - Page sections as Astro components (Hero, Skills, Projects, Contact, WorkExperience)
- `src/components/ui/` - Reusable UI components as SolidJS components (Button, Card, Input, Label, Textarea)
- `src/components/interactive/` - Client-side interactive components (ContactForm.tsx)
- `src/components/icons/` - Icon components

### Configuration and Content
Content is defined in TypeScript files under `src/config/`:
- `site.ts` - Site metadata, social links, author info
- `skills.ts` - Skills and technologies with years of experience
- `work.ts` - Work experience entries
- `projects.ts` - Featured projects
- `contact.ts` - Contact availability and response time

All content follows TypeScript interfaces defined in `src/types/`.

### Internationalization
- Framework: `src/lib/i18n.ts` with translations object
- Currently supports English only (`defaultLang = 'en'`)
- Translation function `t(key, lang)` used throughout components
- To add new text, add entries to the `translations` object in i18n.ts

### Contact Form
- SolidJS component (`ContactForm.tsx`) with Zod validation
- Posts to Azure Function URL (configured via environment variable)
- Validation errors displayed inline per field
- Form state: idle, loading, success, error

### Styling
- Tailwind CSS 4 with custom configuration
- Biome formatter configured: 2-space indent, 100 char line width, single quotes
- Dark theme by default

## Code Quality and Pre-commit Hooks

The project uses Husky pre-commit hooks (`.husky/pre-commit`) that run:
1. Biome linting (`pnpm lint:check`)
2. TypeScript type checking (`pnpm astro check`)
3. Playwright E2E tests (`pnpm test`)

All three must pass for commits to succeed. The hooks are installed automatically via `pnpm install`.

### Biome Configuration
- Custom rules in `biome.json`
- `useConst` enforced as error
- `noExplicitAny` as warning
- Unused variables/imports as warnings
- Accessibility rules for `noSvgWithoutTitle` and `noLabelWithoutControl` disabled
- Special overrides for `.astro` files (unused variables/imports checks disabled)

## Testing

### Playwright E2E Tests
- Test files: `tests/e2e/`
- Configuration: `playwright.config.ts`
- Base URL: `http://localhost:4321`
- Tests run in Chromium only by default
- Web server: uses `pnpm preview` (production build)
- **IMPORTANT:** Always run `pnpm build` before running tests

## Docker

Multi-stage Dockerfile:
1. `deps` - Install dependencies with pnpm
2. `builder` - Build Astro site
3. `runner` - Nginx serving static files from `/usr/share/nginx/html`

Custom nginx configuration in `nginx.conf`.

## CI/CD

GitHub Actions workflow (`.github/workflows/build-and-deploy.yml`):
- **Lint job** - Runs on all pushes and PRs
- **Test job** - Builds and runs Playwright tests
- **Build-and-push job** - Pushes Docker image to ghcr.io (master branch only)

Pipeline uses:
- Node 20.11.1
- pnpm 9.0.4
- ubuntu-22.04 runners
- Docker buildx with GitHub Actions cache

## Environment Variables

Create `.env` from `.env.example`:
- `AZURE_FUNCTION_URL` - URL for contact form submission endpoint

## Key Technical Details

- Site URL configured in `astro.config.mjs` as `https://dzarsky.eu`
- Sitemap automatically generated via `@astrojs/sitemap` integration
- SEO utilities in `src/lib/seo.ts`
- Utility functions in `src/lib/utils.ts` (e.g., `cn()` for class merging)
