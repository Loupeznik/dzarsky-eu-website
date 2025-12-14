# Personal Portfolio Website

A modern, SEO-friendly personal portfolio website built with Astro 5 and SolidJS.

## Tech Stack

- **Framework:** Astro 5.16.5
- **UI Library:** SolidJS 1.9
- **Styling:** Tailwind CSS 4
- **Form Validation:** Zod
- **Code Quality:** Biome (linting & formatting)
- **Testing:** Playwright
- **Pre-commit Hooks:** Husky
- **CI/CD:** GitHub Actions
- **Deployment:** Docker + GitHub Container Registry

## Features

- SEO-optimized with structured data and meta tags
- Fully responsive design (mobile, tablet, desktop)
- Modern dark theme
- Strongly typed with TypeScript
- Interactive contact form with Azure Function integration
- Smooth scrolling navigation
- End-to-end testing with Playwright
- Containerized with Docker
- Automated CI/CD pipeline

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── ui/                  # UI components (Button, Card, Input, etc.)
│   │   ├── sections/            # Page sections (Hero, Skills, Projects, etc.)
│   │   ├── interactive/         # SolidJS components (ContactForm)
│   │   └── layout/              # Layout components (Nav, Footer, BaseHead)
│   ├── layouts/                 # Page layouts
│   ├── pages/                   # Astro pages
│   ├── config/                  # Configuration and data
│   ├── types/                   # TypeScript type definitions
│   ├── lib/                     # Utility functions
│   └── styles/                  # Global styles
├── public/                      # Static assets
├── tests/                       # E2E tests
├── Dockerfile                   # Docker configuration
├── nginx.conf                   # Nginx configuration
└── playwright.config.ts         # Playwright configuration
```

## Getting Started

### Prerequisites

- Node.js 20.11.1 or later
- pnpm 9.0.4 or later

### Installation

1. Clone the repository
2. Install dependencies: `pnpm install`
3. Copy `.env.example` to `.env` and update the Azure Function URL
4. Start the dev server: `pnpm dev`

The site will be available at http://localhost:4321

### Development

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm preview      # Preview production build
```

## Testing

```bash
pnpm build        # Build first
pnpm test         # Run E2E tests
pnpm test:ui      # Run tests in UI mode
pnpm test:debug   # Debug tests
```

## Code Quality

This project uses Biome for linting and formatting, along with Husky for pre-commit hooks.

```bash
pnpm lint:check   # Check code with Biome
pnpm lint         # Auto-fix issues
pnpm format       # Format code
pnpm astro check  # TypeScript type checking
```

### Pre-commit Hooks

Pre-commit hooks are automatically installed via Husky when you run `pnpm install`. Before each commit, the following checks run:

1. **Biome linting** - Ensures code quality and style consistency
2. **TypeScript type checking** - Validates types across the codebase
3. **Playwright tests** - Runs E2E tests to ensure functionality

If any check fails, the commit will be blocked. Fix the issues and try again.

## Docker

```bash
pnpm docker:build # Build Docker image
pnpm docker:run   # Run Docker container
```

The site will be available at http://localhost:8080

## Deployment

The project uses GitHub Actions for CI/CD:
- Runs linting and tests on all PRs and pushes
- Builds and pushes Docker image to ghcr.io on master branch

## Customization

Update site content in configuration files:
- `src/config/site.ts` - Site metadata and social links
- `src/config/skills.ts` - Skills and technologies
- `src/config/work.ts` - Work experience
- `src/config/projects.ts` - Projects showcase
- `src/config/contact.ts` - Contact availability

## Scripts Reference

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Lint and auto-fix code
- `pnpm lint:check` - Check code without fixing
- `pnpm format` - Format code with Biome
- `pnpm test` - Run E2E tests
- `pnpm test:ui` - Run tests in UI mode
- `pnpm test:debug` - Debug tests
- `pnpm docker:build` - Build Docker image
- `pnpm docker:run` - Run Docker container

## License

MIT
