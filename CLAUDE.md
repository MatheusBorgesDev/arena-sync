# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ArenaSync is a sports court booking management app built with Next.js 16 (App Router), TypeScript (strict mode), and Tailwind CSS v4. It has two user journeys: Customer (booking courts) and Admin (managing courts/reservations).

## Commands

- `pnpm dev` - Start dev server
- `pnpm build` - Production build
- `pnpm lint` - Run ESLint
- `pnpm start` - Start production server

Package manager is **pnpm** (strictly enforced). Do not use npm or yarn.

## Architecture

Feature-based architecture combined with Clean Architecture principles. Four source layers:

- **`src/core`** - Pure domain logic (entities, use cases, types). **No React or framework imports allowed here.**
- **`src/infra`** - Technical adapters (API clients, external service configs)
- **`src/features`** - Business modules (e.g., `booking`, `courts`, `auth`). Each feature encapsulates its own components, hooks, services, and schemas.
- **`src/shared`** - Global UI design system: `components/ui` (shadcn/ui), `components/navigation`, `hooks`, `lib`, `constants`

### Data Flow (mandatory for all API communication)

`Service/Repository` → `Hook (TanStack Query)` → `Component (View)`

Components must never call services or API clients directly. Visual components must not handle business logic.

### Route Structure

Uses Next.js App Router with route groups:
- `src/app/(admin)/` - Admin routes (dashboard, agenda, admin-login)
- `src/app/(customer)/` - Customer routes (home, my-bookings, login, register)

## Code Conventions

- **Files & folders:** `kebab-case`
- **Components:** `PascalCase`, arrow functions with explicit return types
- **Hooks & functions:** `camelCase`
- **Types:** `interface` for public APIs/extensible objects; `type` for unions/aliases/primitives
- **`any` is prohibited** - use `unknown` or generics
- **Styling:** Always use `tailwind-merge` + `clsx` (via `cn()` from `@/shared/lib/utils`) for dynamic/conditional classes
- **Component styling:** Use CVA (class-variance-authority) for variant-based components
- **Composition:** Use Compound Components pattern (Radix UI) and `asChild` for polymorphism
- **Imports:** Path alias `@/*` maps to `./src/*`

## Key Technical Decisions

- **React Compiler is enabled** - Do not use `useMemo` or `useCallback` manually unless needed for external library interop.
- **shadcn/ui** config is in `components.json`, components install to `@/shared/components/ui`
- **Commits** follow conventional commits format (commitlint + Husky). Scope must be lowercase.
- **Prettier:** 100 char line width, single quotes, semicolons, trailing commas (ES5), Tailwind CSS plugin
- **ADRs** live in `/docs/adrs/`. Structural or library changes should propose a new ADR.
- **`technical-context.md`** at project root is the SSOT for all architectural decisions.
