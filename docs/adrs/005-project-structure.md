# ADR 005: Project Folder Structure and Module Isolation

- **Status:** Accepted
- **Date:** 2026-02-20 (Revised)
- **Author:** Matheus Borges

## 1. Context

The **ArenaSync** system requires a structure that supports complex interactive flows for two distinct user journeys: **Administrative** (management) and **Customer** (booking). A standard "group by type" organization (e.g., `/components`, `/hooks`) would lead to high cognitive load and scattered business logic. We need a structure that enforces **Clean Architecture** and isolates these modules while sharing a common core and design system.

## 2. Decision

We will adopt a **Feature-based Architecture** combined with **Next.js Route Groups** to organize the project around business modules and access levels.

### Directory Hierarchy:

- **`app/(admin)`**: Admin route group. Includes `admin-login/` (no sidebar) and `(dashboard)/` with sidebar integration: `layout.tsx`, `agenda/`, `dashboard/`.
- **`app/(customer)`**: Customer route group. Includes `login/`, `register/` (no navbar) and `(protected)/` with navbar/footer: `home/`, `my-bookings/`.
- **`src/core`**: Pure TypeScript logic (no React). Contains `entities/` (court, booking), `use-cases/` (e.g., `calculate-price`), and `types/` (status enums).
- **`src/features`**: Encapsulated business modules: `auth/` (components, hooks, services, schemas), `booking/` (components, services), and `courts/` (components, services).
- **`src/infra`**: Technical adapters and infrastructure. `api/api-client.ts`.
- **`src/shared`**: Global Design System. `components/navigation/` (Sidebar, MobileNav), `components/ui/` (shadcn/ui), `providers/`, and `lib/`.

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
