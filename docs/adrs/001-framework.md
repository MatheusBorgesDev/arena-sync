# ADR 001: Web Framework Selection

- **Status:** Accepted
- **Date:** 2026-02-05
- **Author:** Matheus Borges

## 1. Context

The ArenaSync project requires a modern web application capable of delivering high performance for public scheduling pages (SEO and Core Web Vitals are critical) while supporting complex interactive flows for authenticated users. We need to choose between a traditional Client-Side Rendering (CSR) approach (e.g., Vite/React) or a Fullstack Framework with Server-Side capabilities.

## 2. Decision

We will adopt **Next.js (App Router)** as the core framework.

This decision aligns with the industry's shift towards server-centric patterns and provides built-in routing and optimization tools that would otherwise require manual configuration in a bare-bones React setup.

## 3. Consequences

### Pros:

- **Performance:** Server Components reduce the client-side JavaScript bundle, essential for mobile users accessing court schedules.
- **Architecture Alignment:** The file-based routing natively supports our Feature-based Architecture inside `src/app` and `src/features`.
- **SEO:** Native Server-Side Rendering (SSR) ensures public court pages are indexable.

### Cons:

- **Complexity:** Higher learning curve regarding the "Client vs. Server" component lifecycle.
- **Strictness:** Requires discipline to prevent leaking backend logic into client components (strict usage of `"use client"`).
