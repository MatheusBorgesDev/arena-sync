# ADR 003: Styling Strategy

- **Status:** Accepted
- **Date:** 2026-02-05
- **Author:** Matheus Borges

## 1. Context

The project requires a scalable styling system that ensures visual consistency and supports rapid UI development. We need to avoid runtime performance overhead (common in some CSS-in-JS libraries) and solve CSS specificity issues when building reusable polymorphic components.

## 2. Decision

We will use **Tailwind CSS** combined with **`tailwind-merge`** and **`clsx`**.

Tailwind provides a utility-first approach that acts as a constraint-based design system. The utility libraries (`merge` and `clsx`) are mandatory for handling conditional classes and overrides in reusable components.

## 3. Consequences

### Pros:

- **Zero Runtime:** Styles are generated at build time, ideal for Server Components.
- **Consistency:** Constraints via `tailwind.config.ts` prevent "magic values" in the codebase.
- **Component Safety:** `tailwind-merge` allows us to create base components with default styles that can be safely overridden by consumers without specificity conflicts.

### Cons:

- **Readability:** HTML templates can become cluttered with long class strings ("class soup"). This necessitates extracting complex UI parts into small, focused components.
