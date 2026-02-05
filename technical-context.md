# Technical Context & Architectural Guidelines - ArenaSync

This document serves as the **Single Source of Truth (SSOT)** for all technical decisions, coding standards, and architectural patterns for the ArenaSync project.

## 1. Tech Stack

- **Framework:** Next.js (App Router).
- **Language:** TypeScript (Strict Mode enabled).
- **Styling:** Tailwind CSS (v4).
- **UI Infrastructure:** shadcn/ui (based on Radix UI Primitives).
- **Optimization:** React Compiler (Automatic Memoization).
- **Server State Management:** TanStack Query (v5+).
- **Global Client State:** Zustand.
- **Package Manager:** pnpm (Strictly enforced).
- **Code Quality:** ESLint + Prettier.
- **UI Utilities:** `tailwind-merge`, `clsx`, and `class-variance-authority` (cva).
- **Testing:** Vitest and React Testing Library.

## 2. Coding Standards

- **Naming Conventions:**
  - **Files & Folders:** `kebab-case` (e.g., `appointment-card.tsx`, `use-booking.ts`).
  - **Components:** `PascalCase` (e.g., `const AppointmentModal = ...`).
  - **Hooks & Functions:** `camelCase` (e.g., `useAuth`).
- **Component Pattern:** Preference for **Arrow Functions** with explicit return types for React Components.
- **Typing:**
  - Use `interface` for public APIs or extensible objects.
  - Use `type` for unions, aliases, or simple primitive compositions.
  - **Strict Rule:** The use of `any` is prohibited. Use `unknown` or generics if the type is truly dynamic.

## 3. Architecture & Project Structure

The project follows a **Feature-based Architecture** combined with **Clean Architecture** principles.

- `src/core`: Pure domain logic (Entities, Use Cases). **Forbidden** to import React or framework-specific libraries here.
- `src/infra`: Technical implementations and adapters (Axios instances, API configurations).
- `src/shared`: Global UI Design System.
  - `components/ui`: Infrastructure components (shadcn/ui).
  - `components`: Global composite components.
  - `hooks`: Global utility hooks.
- `src/features`: Business modules (e.g., `booking`, `courts`, `auth`). Each feature encapsulates its own components, hooks, and services.

## 4. Data Flow & Communication

To ensure decoupling, all API communication must follow this mandatory flow:

1. **Service/Repository:** Pure functions or classes using Axios to fetch data.
2. **Hook (TanStack Query):** Orchestrates the Service call, manages caching, loading, and error states.
3. **Component (View):** Consumes the Hook only. **Never** call a Service or Axios directly from a component.

## 5. UI Design Rules (PDI Pillar 1)

- **Single Responsibility (SRP):** Visual components must not handle business logic or complex data orchestration.
- **Composition:** Use **Compound Components** pattern provided by Radix UI/shadcn for complex elements (Modals, Selects, Tabs).
- **Polymorphism:** Strictly adhere to the `asChild` pattern (via Radix UI Slot) to avoid nesting hell.

## 6. AI Assistant Guidelines

As an AI Assistant, you must strictly adhere to these rules when suggesting code or reviews:

1. **PDI Phasing:** Identify the current PDI Block before suggesting implementations. Do not skip to complex architecture (Block 2) if the focus is UI Design (Block 1).
2. **Architecture Over Speed:** If there is a conflict between "fast" and "structured", always prioritize structure. Refuse to put business logic inside React components.
3. **Layered Thinking:** Every data-related feature must follow the `Service -> Hook -> View` structure.
4. **Style Safety:** Always use `tailwind-merge` and `clsx` for dynamic or conditional styling.
5. **Memoization Strategy:** Assume **React Compiler** is active. Do not suggest `useMemo` or `useCallback` unless strictly necessary for external library interop.
6. **Technical Justification:** When providing code, briefly explain how it respects **SOLID** and the **Clean Architecture** defined here.
7. **Documentation Guardrail:** If a suggestion changes the folder structure or data management, ask: "Should I generate an ADR draft for this decision?".

## 7. Decision Management (ADRs)

- Any significant structural change or new library choice must be documented in an **ADR (Architecture Decision Record)** under `/docs/adrs`.
