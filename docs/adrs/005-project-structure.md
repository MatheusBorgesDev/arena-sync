# ADR 005: Project Folder Structure and Module Isolation

- **Status:** Accepted
- **Date:** 2026-02-20 (Revised)
- **Author:** Matheus Borges

## 1. Context

The **ArenaSync** system requires a structure that supports complex interactive flows for two distinct user journeys: **Administrative** (management) and **Customer** (booking). A standard "group by type" organization (e.g., `/components`, `/hooks`) would lead to high cognitive load and scattered business logic. We need a structure that enforces **Clean Architecture** and isolates these modules while sharing a common core and design system.

## 2. Decision

We will adopt a **Feature-based Architecture** combined with **Next.js Route Groups** to organize the project around business modules and access levels.

### Directory Hierarchy:

- **`app/(admin)` & `app/(customer)`**: Use of Route Groups to isolate layouts, middlewares, and specific module shells without affecting the URL structure.
- **`src/features`**: The core business modules (e.g., `booking`, `courts`). Each feature encapsulates its own components, hooks (TanStack Query), and internal services.
- **`src/core`**: Contains pure domain logic (Entities and Use Cases) in TypeScript. It is **strictly forbidden** to import React or framework-specific libraries here.
- **`src/shared`**: Global UI Design System (shadcn/ui), utility hooks, and global composite components.
- **`src/infra`**: Technical configurations and adapters (e.g., Axios configuration, API clients).

### Naming Convention:

- All files and folders must follow the **`kebab-case`** pattern (e.g., `appointment-card.tsx`).

## 3. Consequences

### Pros:

- **Module Isolation**: Clear separation between Admin and Customer logic via Route Groups.
- **High Modularity**: Easy identification of business features within `src/features`.
- **Domain Integrity**: The `src/core` layer remains agnostic to the framework, facilitating testing and maintenance.
- **Scalability**: New modules (like "Partner") can be added without side effects on existing ones.

### Cons:

- **Initial Complexity**: Requires discipline to maintain the boundaries between layers (e.g., not importing a feature into `shared`).
- **Boilerplate**: More initial folders compared to a flat structure.
