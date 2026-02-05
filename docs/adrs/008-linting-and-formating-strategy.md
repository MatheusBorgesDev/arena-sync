# ADR 008: Linting and Formatting Strategy

- **Status:** Accepted
- **Date:** 2026-02-05
- **Author:** Matheus Borges

## 1. Context

Maintaining code quality, consistency, and preventing common patterns of error is crucial for the ArenaSync project. We evaluated two main contenders:

1.  **ESLint + Prettier:** The longstanding industry standard with a massive plugin ecosystem.
2.  **Biome:** A modern, high-performance toolchain (Rust-based) that unifies linting and formatting.

## 2. Decision

We will adopt the traditional stack of **ESLint** (for code quality/linting) and **Prettier** (for formatting).

## 3. Consequences

### Pros:

- **Ecosystem Maturity:** We can leverage essential plugins for our stack, specifically `@tanstack/eslint-plugin-query` (critical for data fetching safety), `eslint-plugin-react-hooks`, and `eslint-plugin-tailwindcss`.
- **Architectural Enforcement:** ESLint allows for granular configuration of import rules, enabling us to strictly enforce the boundaries between Clean Architecture layers (e.g., forbidding imports from `UI` into `Core`).
- **Compatibility:** Native integration with Next.js default setup.

### Cons:

- **Performance:** Slower linting times compared to Biome, especially in CI/CD pipelines.
- **Complexity:** Requires managing configuration files (`.eslintrc`, `.prettierrc`) and potential conflicts between linter and formatter rules.
