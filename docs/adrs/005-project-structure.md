# ADR 005: Project Folder Structure

- **Status:** Accepted
- **Date:** 2026-02-05
- **Author:** Matheus Borges

## 1. Context

The standard organization of React/Next.js projects often involves grouping files by "type" (e.g., all interfaces in `/interfaces`, all components in `/components`). As the **ArenaSync** system grows, this approach makes maintenance difficult because a single business feature (such as "Booking") ends up scattered across several distant folders, increasing the cognitive load required to locate related files.

## 2. Decision

We will adopt a **Feature-based Architecture** combined with **Clean Architecture** principles, where code is organized around business modules.

The directory structure will be organized as follows:

- **`src/app`**: Exclusive for Next.js App Router routing and page definitions.
- **`src/features`**: The core of the application. Each subfolder represents a business domain (e.g., `booking`, `courts`, `auth`). Each feature encapsulates its own components, hooks, and internal services.
- **`src/core`**: Contains pure domain logic (Entities and Use Cases) in TypeScript, isolated from frameworks.
- **`src/shared`**: Global UI Design System (stateless components), utility hooks, and helper functions used across multiple features.
- **`src/infra`**: Technical configurations and external library instances (e.g., Axios configuration, API clients).

## 3. Consequences

### Pros:

- **High Modularity:** It is easy to identify everything that belongs to a specific business feature.
- **Scalability:** New modules can be added without cluttering global folders.
- **Low Coupling:** Facilitates future feature extraction or deep refactoring.
- **Onboarding:** New developers can understand "what the system does" just by looking at the `/features` folder.

### Cons:

- **Learning Curve:** Requires discipline to avoid circular dependencies between features.
- **Initial Complexity:** Requires more thought on where to place a new file (is it shared or feature-specific?).
