# Beloved

## Overview

Beloved is a full-stack animated floral gifting web app. Anyone can create and send a beautiful digital bouquet to someone via an email link — no accounts or login required.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **Frontend**: React + Vite (artifacts/digibouquet), Tailwind CSS, Framer Motion, Wouter routing
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Architecture

- `artifacts/digibouquet/` — React + Vite frontend served at `/`
- `artifacts/api-server/` — Express API server served at `/api`
- `lib/api-spec/openapi.yaml` — OpenAPI spec (source of truth)
- `lib/api-client-react/` — Generated React Query hooks
- `lib/api-zod/` — Generated Zod validation schemas
- `lib/db/` — Drizzle ORM database schema and client

## Database Schema

- `bouquets` — stores bouquet data (JSON), recipient info, sender info, premium status, expiry (90 days)
- `feedback` — user feedback with rating, type, and message

## Pages / Routes

- `/` — Landing page with animated SVG petal drift, hero title, CTA buttons
- `/build` — 5-step bouquet builder wizard (pick blooms, wrap & accessories, arrange, letter, deliver)
- `/bouquet/:id` — Recipient view page (public, no login)
- `/confirm` — Sender confirmation after sending
- `/guide` — How-to user guide
- `/feedback` — Feedback form

## API Endpoints

- `POST /api/bouquets` — Create and send a bouquet (returns id + share_url)
- `GET /api/bouquets/:id` — Fetch a bouquet by UUID
- `PATCH /api/bouquets/:id/premium` — Mark bouquet as premium after payment
- `POST /api/feedback` — Submit user feedback

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)

## Branding

- Light mode: cream (#fff8f4), baby pink (#ffd6e0), warm yellow (#fde89a), deep rose (#c45c78)
- Dark mode: warm brown (#3e2018), caramel brown (#5c2e1a), golden yellow (#d4a017), cream text (#f5dfc5)
- Fonts: Playfair Display (headings), DM Sans (body)

## Premium Features (UI placeholder, payment integration ready)

- 3D rotating bouquet (Three.js)
- Voice note recording (60 sec)
- Photo slideshow (up to 5 photos)
- Background music (8 curated tracks)
